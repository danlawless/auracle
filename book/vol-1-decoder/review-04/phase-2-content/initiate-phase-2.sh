#!/bin/bash

# =============================================================================
# Phase 2 Initiation Script - Review Round 4
# Volume 1: The Narcissism Decoder
# =============================================================================
#
# This script creates only Phase 2 GitHub issues (Bailey, Sage, Felix).
# Use this when Phase 1 is complete and you're ready to initiate Phase 2.
#
# USAGE:
#   cd /home/user/auracle/book/vol-1-decoder/review-04/phase-2-content
#   chmod +x initiate-phase-2.sh
#   ./initiate-phase-2.sh
#
# PREREQUISITES:
#   - GitHub CLI (gh) installed: https://cli.github.com/
#   - Authenticated: gh auth login
#   - Phase 1 (Diana, Morgan) decisions complete
#
# =============================================================================

set -e

# Configuration
REPO="danlawless/auracle"
BASE_DIR="$(dirname "$0")"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}==============================================================================${NC}"
echo -e "${BLUE}   Phase 2 Initiation - Review Round 4${NC}"
echo -e "${BLUE}   Volume 1: The Narcissism Decoder${NC}"
echo -e "${BLUE}==============================================================================${NC}"
echo ""

# Check for gh CLI
if ! command -v gh &> /dev/null; then
    echo -e "${RED}GitHub CLI (gh) not found. Please install it first:${NC}"
    echo "  macOS:  brew install gh"
    echo "  Linux:  See https://github.com/cli/cli/blob/trunk/docs/install_linux.md"
    echo "  Windows: winget install --id GitHub.cli"
    exit 1
fi

# Check authentication
if ! gh auth status &> /dev/null; then
    echo -e "${RED}Not authenticated. Please run:${NC}"
    echo "  gh auth login"
    exit 1
fi

echo -e "${GREEN}✓ GitHub CLI authenticated${NC}"
echo ""

# Confirmation
echo -e "${YELLOW}PREREQUISITE CHECK:${NC}"
echo "  ⚠ Phase 1 (Diana, Morgan) decisions must be complete"
echo ""
read -p "Has Phase 1 been completed? (y/n): " confirm
if [[ "$confirm" != "y" && "$confirm" != "Y" ]]; then
    echo -e "${RED}Please complete Phase 1 before initiating Phase 2${NC}"
    exit 1
fi
echo ""

# =============================================================================
# PHASE 2: Content & Experience (Parallel Reviewers)
# =============================================================================
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}PHASE 2: CONTENT & EXPERIENCE REVIEWERS${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "Creating 3 issues (60 total questions)..."
echo ""

# Bailey - Beta Reader (25 questions)
echo -n "Creating Bailey (Beta Reader) issue [25 questions]... "
BAILEY_URL=$(gh issue create \
  --repo "$REPO" \
  --title "[Review Round 4 - Phase 2] Bailey (Beta Reader): 25 Reader Experience Questions - Vol. 1" \
  --label "review-round-4,phase-2-content,author-input-required" \
  --body-file "$BASE_DIR/bailey-beta-reader-issue.md")
echo -e "${GREEN}✓${NC}"
echo "  → $BAILEY_URL"

# Sage - Sensitivity Reader (20 questions)
echo -n "Creating Sage (Sensitivity Reader) issue [20 questions]... "
SAGE_URL=$(gh issue create \
  --repo "$REPO" \
  --title "[Review Round 4 - Phase 2] Sage (Sensitivity Reader): 20 Representation Questions - Vol. 1" \
  --label "review-round-4,phase-2-content,author-input-required" \
  --body-file "$BASE_DIR/sage-sensitivity-reader-issue.md")
echo -e "${GREEN}✓${NC}"
echo "  → $SAGE_URL"

# Felix - Fact-Checker (15 questions)
echo -n "Creating Felix (Fact-Checker) issue [15 questions]... "
FELIX_URL=$(gh issue create \
  --repo "$REPO" \
  --title "[Review Round 4 - Phase 2] Felix (Fact-Checker): 15 Verification Questions - Vol. 1" \
  --label "review-round-4,phase-2-content,author-input-required,fact-check" \
  --body-file "$BASE_DIR/felix-fact-checker-issue.md")
echo -e "${GREEN}✓${NC}"
echo "  → $FELIX_URL"

echo ""

# =============================================================================
# Summary
# =============================================================================
echo -e "${BLUE}==============================================================================${NC}"
echo -e "${GREEN}✓ PHASE 2 ISSUES CREATED SUCCESSFULLY${NC}"
echo -e "${BLUE}==============================================================================${NC}"
echo ""
echo "PHASE 2 REVIEWERS (Can work in parallel):"
echo ""
echo "  🎯 Bailey (Beta Reader) - 25 Questions"
echo "     Focus: Reader experience, pacing, clarity, emotional impact"
echo "     → $BAILEY_URL"
echo ""
echo "  🌈 Sage (Sensitivity Reader) - 20 Questions"
echo "     Focus: Representation, inclusion, trauma-informed approach"
echo "     → $SAGE_URL"
echo ""
echo "  🔍 Felix (Fact-Checker) - 15 Questions"
echo "     Focus: Source currency, claim verification, technical accuracy"
echo "     → $FELIX_URL"
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "NEXT STEPS:"
echo ""
echo "  1. All 3 reviewers can be addressed in PARALLEL"
echo "  2. Record responses in: author-decisions-phase-2.md"
echo "  3. When complete, initiate Phase 3 (Lydia, Clara)"
echo ""
echo "Total Phase 2 Questions: 60"
echo ""
