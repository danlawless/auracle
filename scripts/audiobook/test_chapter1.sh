#!/bin/bash
#
# Test Audiobook Generation on Chapter 1, Volume 1
# ================================================
#
# This script generates an audiobook sample from the first chapter.
#

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BOOK_DIR="$SCRIPT_DIR/../../book/vol-1-decoder"
CHAPTER_FILE="$BOOK_DIR/chapters/01-opening-manifesto.md"
OUTPUT_DIR="$SCRIPT_DIR/output"

# Create output directory
mkdir -p "$OUTPUT_DIR"

echo ""
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║           AUDIOBOOK TEST - Chapter 1, Volume 1               ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""
echo "Chapter: The Opening Manifesto"
echo "Source:  $CHAPTER_FILE"
echo "Output:  $OUTPUT_DIR/01-opening-manifesto.mp3"
echo ""

# Check dependencies
echo "Checking dependencies..."

if ! command -v ffmpeg &> /dev/null; then
    echo "❌ ffmpeg is not installed"
    echo ""
    echo "Install with:"
    echo "  macOS:   brew install ffmpeg"
    echo "  Ubuntu:  sudo apt install ffmpeg"
    exit 1
fi
echo "✓ ffmpeg found"

if ! python3 -c "import edge_tts" &> /dev/null; then
    echo "❌ edge-tts is not installed"
    echo ""
    echo "Install with:"
    echo "  pip install edge-tts"
    exit 1
fi
echo "✓ edge-tts found"

echo ""
echo "Starting audiobook generation..."
echo "(This may take a few minutes)"
echo ""

# Run the generator
python3 "$SCRIPT_DIR/generate_audiobook_edge.py" \
    "$CHAPTER_FILE" \
    -o "$OUTPUT_DIR/01-opening-manifesto.mp3" \
    --voice jenny \
    --rate "-5%"

echo ""
echo "Done! Your audiobook sample is ready at:"
echo "  $OUTPUT_DIR/01-opening-manifesto.mp3"
echo ""
echo "To listen:"
echo "  open $OUTPUT_DIR/01-opening-manifesto.mp3  # macOS"
echo "  xdg-open $OUTPUT_DIR/01-opening-manifesto.mp3  # Linux"
echo ""
