#!/usr/bin/env python3
"""
Audiobook Generator using Edge TTS (Free Microsoft Voices)
===========================================================

This version uses Microsoft Edge's text-to-speech, which is:
- Completely FREE (no API key needed)
- Excellent quality (same voices as Microsoft Edge browser)
- Easy to install (just pip install edge-tts)
- Has beautiful, natural-sounding female voices

Usage:
    python generate_audiobook_edge.py <input_file> [options]

Example:
    python generate_audiobook_edge.py ../../book/vol-1-decoder/chapters/01-opening-manifesto.md
"""

import argparse
import asyncio
import os
import re
import subprocess
import sys
import tempfile
from pathlib import Path
from typing import Generator, List

try:
    import edge_tts
except ImportError:
    print("Please install edge-tts: pip install edge-tts")
    sys.exit(1)


# Excellent female voices available in Edge TTS
FEMALE_VOICES = {
    # US English - Warm and professional
    "jenny": "en-US-JennyNeural",           # Warm, conversational
    "aria": "en-US-AriaNeural",             # Expressive, natural
    "sara": "en-US-SaraNeural",             # Clear, professional
    "michelle": "en-US-MichelleNeural",     # Friendly, engaging

    # UK English
    "sonia": "en-GB-SoniaNeural",           # British, articulate
    "libby": "en-GB-LibbyNeural",           # British, warm

    # Australian
    "natasha": "en-AU-NatashaNeural",       # Australian, clear

    # Multilingual
    "emma": "en-US-EmmaMultilingualNeural", # Versatile, natural
}

# Default to Jenny - warm and conversational, great for audiobooks
DEFAULT_VOICE = "en-US-JennyNeural"


class MarkdownParser:
    """Parse markdown files into speakable text chunks."""

    def __init__(self, file_path: str):
        self.file_path = file_path
        self.content = Path(file_path).read_text(encoding='utf-8')

    def clean_for_speech(self, text: str) -> str:
        """Clean markdown formatting for natural speech."""
        # Remove horizontal rules
        text = re.sub(r'^---+\s*$', '', text, flags=re.MULTILINE)

        # Convert headers to spoken form with pause
        text = re.sub(r'^#{1,6}\s+(.+)$', r'\1.', text, flags=re.MULTILINE)

        # Remove bold/italic markers but keep text
        text = re.sub(r'\*\*\*(.+?)\*\*\*', r'\1', text)
        text = re.sub(r'\*\*(.+?)\*\*', r'\1', text)
        text = re.sub(r'\*(.+?)\*', r'\1', text)
        text = re.sub(r'___(.+?)___', r'\1', text)
        text = re.sub(r'__(.+?)__', r'\1', text)
        text = re.sub(r'_(.+?)_', r'\1', text)

        # Convert bullet points
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
        paragraphs = re.split(r'\n\n+', cleaned)

        for i, para in enumerate(paragraphs):
            para = para.strip()
            if para and len(para) > 10:
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


class EdgeAudioGenerator:
    """Generate audio using Microsoft Edge TTS."""

    def __init__(self, voice: str = DEFAULT_VOICE, output_dir: str = None, rate: str = "-5%"):
        self.voice = voice
        self.rate = rate  # Slightly slower for audiobook clarity
        self.output_dir = Path(output_dir) if output_dir else Path(tempfile.mkdtemp())
        self.output_dir.mkdir(parents=True, exist_ok=True)
        self.chunk_files: List[Path] = []

    async def generate_chunk(self, text: str, index: int) -> Path:
        """Generate audio for a single text chunk."""
        output_file = self.output_dir / f"chunk_{index:04d}.mp3"

        communicate = edge_tts.Communicate(text, self.voice, rate=self.rate)
        await communicate.save(str(output_file))

        self.chunk_files.append(output_file)
        return output_file

    def generate_silence(self, duration_ms: int, index: int) -> Path:
        """Generate a silence file for pauses."""
        output_file = self.output_dir / f"silence_{index:04d}.mp3"

        # Use ffmpeg to generate silence
        subprocess.run([
            "ffmpeg", "-y",
            "-f", "lavfi",
            "-i", f"anullsrc=r=24000:cl=mono",
            "-t", str(duration_ms / 1000),
            "-c:a", "libmp3lame",
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


async def process_chapter_async(
    input_file: str,
    output_file: str = None,
    voice: str = DEFAULT_VOICE,
    rate: str = "-5%",
    pause_duration: int = 800,
    header_pause: int = 1500,
    verbose: bool = True
):
    """Process a markdown chapter into an audiobook file."""
    input_path = Path(input_file)

    if output_file is None:
        output_file = input_path.with_suffix('.mp3')
    output_path = Path(output_file)

    if verbose:
        print(f"\n{'='*60}")
        print(f"AUDIOBOOK GENERATOR (Edge TTS)")
        print(f"{'='*60}")
        print(f"Input:  {input_path}")
        print(f"Output: {output_path}")
        print(f"Voice:  {voice}")
        print(f"Rate:   {rate}")
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
    generator = EdgeAudioGenerator(voice=voice, rate=rate)

    try:
        silence_idx = 0

        for para in paragraphs:
            idx = para['index']
            text = para['text']
            is_header = para['is_header']

            if verbose:
                preview = text[:50] + "..." if len(text) > 50 else text
                print(f"[{idx+1:3d}/{len(paragraphs)}] {preview}")

            # Generate audio for this paragraph
            await generator.generate_chunk(text, idx)

            # Add pause after paragraph
            pause = header_pause if is_header else pause_duration
            generator.generate_silence(pause, silence_idx)
            silence_idx += 1

        if verbose:
            print(f"\nConcatenating {len(generator.chunk_files)} audio segments...")

        # Concatenate all chunks
        generator.concatenate_all(output_path)

        # Get file size for display
        size_mb = output_path.stat().st_size / (1024 * 1024)

        if verbose:
            print(f"\n{'='*60}")
            print(f"SUCCESS! Audiobook created:")
            print(f"  {output_path}")
            print(f"  Size: {size_mb:.1f} MB")
            print(f"{'='*60}\n")

        return output_path

    finally:
        if verbose:
            print("Cleaning up temporary files...")
        generator.cleanup()


def process_chapter(
    input_file: str,
    output_file: str = None,
    voice: str = DEFAULT_VOICE,
    rate: str = "-5%",
    pause_duration: int = 800,
    header_pause: int = 1500,
    verbose: bool = True
):
    """Synchronous wrapper for process_chapter_async."""
    return asyncio.run(process_chapter_async(
        input_file=input_file,
        output_file=output_file,
        voice=voice,
        rate=rate,
        pause_duration=pause_duration,
        header_pause=header_pause,
        verbose=verbose
    ))


def list_voices():
    """List available female voices."""
    print("\n" + "="*60)
    print("AVAILABLE FEMALE VOICES (Edge TTS)")
    print("="*60 + "\n")

    print("Recommended for audiobooks:\n")
    for name, voice_id in FEMALE_VOICES.items():
        print(f"  {name:12s}  {voice_id}")

    print("\n" + "-"*60)
    print("To see ALL available voices, run:")
    print("  edge-tts --list-voices | grep -i female")
    print("="*60 + "\n")


def main():
    parser = argparse.ArgumentParser(
        description="Generate audiobook from markdown using Edge TTS",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  %(prog)s chapter.md
  %(prog)s chapter.md -o audiobook.mp3
  %(prog)s chapter.md --voice en-US-AriaNeural
  %(prog)s chapter.md --rate "-10%%" (slower)
  %(prog)s chapter.md --rate "+10%%" (faster)

Voice shortcuts:
  jenny, aria, sara, michelle (US)
  sonia, libby (UK)
  natasha (AU)
        """
    )

    parser.add_argument(
        "input_file",
        nargs="?",
        help="Markdown file to convert"
    )

    parser.add_argument(
        "-o", "--output",
        help="Output audio file (default: input name with .mp3)"
    )

    parser.add_argument(
        "-v", "--voice",
        default="jenny",
        help="Voice name or full voice ID (default: jenny)"
    )

    parser.add_argument(
        "--rate",
        default="-5%",
        help="Speech rate adjustment (default: -5%% for slightly slower)"
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
        "--list-voices",
        action="store_true",
        help="List available female voices"
    )

    args = parser.parse_args()

    # List voices
    if args.list_voices:
        list_voices()
        sys.exit(0)

    # Require input file
    if not args.input_file:
        parser.print_help()
        sys.exit(1)

    # Resolve voice shortcut
    voice = args.voice
    if voice.lower() in FEMALE_VOICES:
        voice = FEMALE_VOICES[voice.lower()]

    # Verify input file exists
    if not Path(args.input_file).exists():
        print(f"Error: Input file not found: {args.input_file}")
        sys.exit(1)

    # Check for ffmpeg
    try:
        subprocess.run(["ffmpeg", "-version"], capture_output=True, check=True)
    except (subprocess.CalledProcessError, FileNotFoundError):
        print("Error: ffmpeg is required. Please install it:")
        print("  macOS:   brew install ffmpeg")
        print("  Ubuntu:  sudo apt install ffmpeg")
        sys.exit(1)

    # Process the chapter
    try:
        process_chapter(
            input_file=args.input_file,
            output_file=args.output,
            voice=voice,
            rate=args.rate,
            pause_duration=args.pause,
            header_pause=args.header_pause,
            verbose=not args.quiet
        )
    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)


if __name__ == "__main__":
    main()
