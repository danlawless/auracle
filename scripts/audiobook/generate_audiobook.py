#!/usr/bin/env python3
"""
Audiobook Generator - Paragraph-by-Paragraph TTS
================================================

Converts markdown chapters to audiobook format using open-source TTS.
Processes text in small chunks for cost efficiency and quality control.

Uses Piper TTS (fast, free, high-quality) with pleasant female voices.

Usage:
    python generate_audiobook.py <input_file> [options]

Example:
    python generate_audiobook.py ../book/vol-1-decoder/chapters/01-opening-manifesto.md
"""

import argparse
import os
import re
import subprocess
import sys
import tempfile
import wave
from pathlib import Path
from typing import Generator

# Check for required dependencies
def check_dependencies():
    """Check if required tools are installed."""
    missing = []

    # Check for piper
    try:
        subprocess.run(["piper", "--help"], capture_output=True, check=True)
    except (subprocess.CalledProcessError, FileNotFoundError):
        missing.append("piper")

    # Check for ffmpeg (for audio concatenation)
    try:
        subprocess.run(["ffmpeg", "-version"], capture_output=True, check=True)
    except (subprocess.CalledProcessError, FileNotFoundError):
        missing.append("ffmpeg")

    return missing


def install_instructions():
    """Print installation instructions."""
    print("""
╔══════════════════════════════════════════════════════════════════╗
║              AUDIOBOOK GENERATOR - SETUP REQUIRED                ║
╚══════════════════════════════════════════════════════════════════╝

This script requires Piper TTS and FFmpeg. Here's how to install:

┌─────────────────────────────────────────────────────────────────┐
│ OPTION 1: Quick Install (pip + system packages)                 │
└─────────────────────────────────────────────────────────────────┘

  # Install Piper TTS
  pip install piper-tts

  # Install FFmpeg
  # macOS:   brew install ffmpeg
  # Ubuntu:  sudo apt install ffmpeg
  # Windows: choco install ffmpeg

┌─────────────────────────────────────────────────────────────────┐
│ OPTION 2: Download Piper binary + voice model                   │
└─────────────────────────────────────────────────────────────────┘

  # Download from: https://github.com/rhasspy/piper/releases

  # Download a female voice model (recommended: en_US-amy-medium):
  # https://huggingface.co/rhasspy/piper-voices/tree/main/en/en_US/amy/medium

  # Place the .onnx and .onnx.json files in ~/.local/share/piper-voices/

┌─────────────────────────────────────────────────────────────────┐
│ VOICE OPTIONS (pleasant female voices)                          │
└─────────────────────────────────────────────────────────────────┘

  Recommended voices (all free):

  • en_US-amy-medium     - Warm, professional American female
  • en_US-lessac-medium  - Clear, expressive American female
  • en_GB-alba-medium    - British female, articulate
  • en_US-libritts-high  - Natural, audiobook-quality

  Download voices from:
  https://huggingface.co/rhasspy/piper-voices/tree/main

""")


class MarkdownParser:
    """Parse markdown files into speakable text chunks."""

    def __init__(self, file_path: str):
        self.file_path = file_path
        self.content = Path(file_path).read_text(encoding='utf-8')

    def clean_for_speech(self, text: str) -> str:
        """Clean markdown formatting for natural speech."""
        # Remove horizontal rules
        text = re.sub(r'^---+\s*$', '', text, flags=re.MULTILINE)

        # Convert headers to spoken form
        text = re.sub(r'^#{1,6}\s+(.+)$', r'\1.', text, flags=re.MULTILINE)

        # Remove bold/italic markers but keep text
        text = re.sub(r'\*\*\*(.+?)\*\*\*', r'\1', text)  # bold italic
        text = re.sub(r'\*\*(.+?)\*\*', r'\1', text)       # bold
        text = re.sub(r'\*(.+?)\*', r'\1', text)           # italic
        text = re.sub(r'___(.+?)___', r'\1', text)         # bold italic
        text = re.sub(r'__(.+?)__', r'\1', text)           # bold
        text = re.sub(r'_(.+?)_', r'\1', text)             # italic

        # Convert bullet points to spoken form
        text = re.sub(r'^\s*[-*+]\s+', '', text, flags=re.MULTILINE)

        # Convert numbered lists
        text = re.sub(r'^\s*\d+\.\s+', '', text, flags=re.MULTILINE)

        # Remove links but keep text
        text = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', text)

        # Remove inline code
        text = re.sub(r'`([^`]+)`', r'\1', text)

        # Remove block quotes marker
        text = re.sub(r'^>\s*', '', text, flags=re.MULTILINE)

        # Clean up extra whitespace
        text = re.sub(r'\n{3,}', '\n\n', text)
        text = text.strip()

        return text

    def get_paragraphs(self) -> Generator[dict, None, None]:
        """Split content into paragraphs for processing."""
        cleaned = self.clean_for_speech(self.content)

        # Split on double newlines (paragraphs)
        paragraphs = re.split(r'\n\n+', cleaned)

        for i, para in enumerate(paragraphs):
            para = para.strip()
            if para and len(para) > 10:  # Skip very short fragments
                yield {
                    'index': i,
                    'text': para,
                    'is_header': para.endswith('.') and len(para) < 100 and '\n' not in para
                }

    def get_chapter_title(self) -> str:
        """Extract chapter title from content."""
        match = re.search(r'^#\s+(.+)$', self.content, re.MULTILINE)
        if match:
            return match.group(1).strip()
        return Path(self.file_path).stem


class AudioGenerator:
    """Generate audio from text using Piper TTS."""

    # Pleasant female voice options (in order of preference)
    FEMALE_VOICES = [
        "en_US-amy-medium",
        "en_US-lessac-medium",
        "en_GB-alba-medium",
        "en_US-libritts_r-medium",
        "en_US-jenny_dioco-medium",
    ]

    def __init__(self, voice: str = None, output_dir: str = None):
        self.voice = voice or self.FEMALE_VOICES[0]
        self.output_dir = Path(output_dir) if output_dir else Path(tempfile.mkdtemp())
        self.output_dir.mkdir(parents=True, exist_ok=True)
        self.chunk_files = []

    def generate_chunk(self, text: str, index: int, is_header: bool = False) -> Path:
        """Generate audio for a single text chunk."""
        output_file = self.output_dir / f"chunk_{index:04d}.wav"

        # Add slight pause indication for headers
        if is_header:
            text = text + " ..."

        try:
            # Use piper to generate audio
            process = subprocess.run(
                [
                    "piper",
                    "--model", self.voice,
                    "--output_file", str(output_file)
                ],
                input=text.encode('utf-8'),
                capture_output=True,
                check=True
            )

            self.chunk_files.append(output_file)
            return output_file

        except subprocess.CalledProcessError as e:
            print(f"Error generating audio for chunk {index}: {e.stderr.decode()}")
            raise

    def generate_silence(self, duration_ms: int, index: int) -> Path:
        """Generate a silence file for pauses between sections."""
        output_file = self.output_dir / f"silence_{index:04d}.wav"

        # Use ffmpeg to generate silence
        subprocess.run([
            "ffmpeg", "-y",
            "-f", "lavfi",
            "-i", f"anullsrc=r=22050:cl=mono",
            "-t", str(duration_ms / 1000),
            str(output_file)
        ], capture_output=True, check=True)

        self.chunk_files.append(output_file)
        return output_file

    def concatenate_all(self, output_file: Path) -> Path:
        """Concatenate all chunks into final audio file."""
        if not self.chunk_files:
            raise ValueError("No audio chunks to concatenate")

        # Create file list for ffmpeg
        list_file = self.output_dir / "files.txt"
        with open(list_file, 'w') as f:
            for chunk in self.chunk_files:
                f.write(f"file '{chunk}'\n")

        # Concatenate with ffmpeg
        subprocess.run([
            "ffmpeg", "-y",
            "-f", "concat",
            "-safe", "0",
            "-i", str(list_file),
            "-c:a", "libmp3lame",
            "-q:a", "2",
            str(output_file)
        ], capture_output=True, check=True)

        return output_file

    def cleanup(self):
        """Remove temporary chunk files."""
        import shutil
        if self.output_dir.exists():
            shutil.rmtree(self.output_dir)


def process_chapter(
    input_file: str,
    output_file: str = None,
    voice: str = None,
    pause_duration: int = 800,
    header_pause: int = 1500,
    verbose: bool = True
):
    """
    Process a markdown chapter into an audiobook file.

    Args:
        input_file: Path to markdown file
        output_file: Path for output audio (default: same name as input with .mp3)
        voice: Piper voice model name
        pause_duration: Milliseconds of silence between paragraphs
        header_pause: Milliseconds of silence after headers
        verbose: Print progress messages
    """
    input_path = Path(input_file)

    if output_file is None:
        output_file = input_path.with_suffix('.mp3')
    output_path = Path(output_file)

    if verbose:
        print(f"\n{'='*60}")
        print(f"AUDIOBOOK GENERATOR")
        print(f"{'='*60}")
        print(f"Input:  {input_path}")
        print(f"Output: {output_path}")
        print(f"Voice:  {voice or AudioGenerator.FEMALE_VOICES[0]}")
        print(f"{'='*60}\n")

    # Parse markdown
    parser = MarkdownParser(input_file)
    title = parser.get_chapter_title()
    paragraphs = list(parser.get_paragraphs())

    if verbose:
        print(f"Chapter: {title}")
        print(f"Paragraphs to process: {len(paragraphs)}")
        print()

    # Generate audio
    generator = AudioGenerator(voice=voice)

    try:
        silence_idx = 0

        for para in paragraphs:
            idx = para['index']
            text = para['text']
            is_header = para['is_header']

            if verbose:
                preview = text[:60] + "..." if len(text) > 60 else text
                print(f"[{idx+1:3d}/{len(paragraphs)}] {preview}")

            # Generate audio for this paragraph
            generator.generate_chunk(text, idx, is_header)

            # Add pause after paragraph
            pause = header_pause if is_header else pause_duration
            generator.generate_silence(pause, silence_idx)
            silence_idx += 1

        if verbose:
            print(f"\nConcatenating {len(generator.chunk_files)} audio segments...")

        # Concatenate all chunks
        generator.concatenate_all(output_path)

        if verbose:
            print(f"\n{'='*60}")
            print(f"SUCCESS! Audiobook created:")
            print(f"  {output_path}")
            print(f"{'='*60}\n")

        return output_path

    finally:
        if verbose:
            print("Cleaning up temporary files...")
        generator.cleanup()


def main():
    parser = argparse.ArgumentParser(
        description="Generate audiobook from markdown chapter",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  %(prog)s chapter.md
  %(prog)s chapter.md -o audiobook.mp3
  %(prog)s chapter.md --voice en_GB-alba-medium
  %(prog)s chapter.md --pause 1000 --header-pause 2000
        """
    )

    parser.add_argument(
        "input_file",
        help="Markdown file to convert"
    )

    parser.add_argument(
        "-o", "--output",
        help="Output audio file (default: input name with .mp3)"
    )

    parser.add_argument(
        "-v", "--voice",
        default="en_US-amy-medium",
        help="Piper voice model (default: en_US-amy-medium)"
    )

    parser.add_argument(
        "--pause",
        type=int,
        default=800,
        help="Pause between paragraphs in ms (default: 800)"
    )

    parser.add_argument(
        "--header-pause",
        type=int,
        default=1500,
        help="Pause after headers in ms (default: 1500)"
    )

    parser.add_argument(
        "-q", "--quiet",
        action="store_true",
        help="Suppress progress output"
    )

    parser.add_argument(
        "--check",
        action="store_true",
        help="Check dependencies and exit"
    )

    parser.add_argument(
        "--list-voices",
        action="store_true",
        help="List recommended female voices"
    )

    args = parser.parse_args()

    # Check dependencies
    if args.check:
        missing = check_dependencies()
        if missing:
            print(f"Missing dependencies: {', '.join(missing)}")
            install_instructions()
            sys.exit(1)
        else:
            print("All dependencies installed!")
            sys.exit(0)

    # List voices
    if args.list_voices:
        print("\nRecommended female voices for Piper TTS:\n")
        for voice in AudioGenerator.FEMALE_VOICES:
            print(f"  • {voice}")
        print("\nDownload from: https://huggingface.co/rhasspy/piper-voices/tree/main")
        sys.exit(0)

    # Verify dependencies before processing
    missing = check_dependencies()
    if missing:
        print(f"Error: Missing required tools: {', '.join(missing)}")
        install_instructions()
        sys.exit(1)

    # Verify input file exists
    if not Path(args.input_file).exists():
        print(f"Error: Input file not found: {args.input_file}")
        sys.exit(1)

    # Process the chapter
    try:
        process_chapter(
            input_file=args.input_file,
            output_file=args.output,
            voice=args.voice,
            pause_duration=args.pause,
            header_pause=args.header_pause,
            verbose=not args.quiet
        )
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
