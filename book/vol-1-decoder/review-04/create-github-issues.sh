#!/bin/bash

# =============================================================================
# Review Round 4 - GitHub Issue Creation Script
# Volume 1: The Narcissism Decoder
# =============================================================================
#
# This script creates all GitHub issues for Review Round 4 in a phased approach.
# Each editor gets their own issue with a comprehensive questionnaire.
#
# USAGE:
#   cd /home/user/auracle/book/vol-1-decoder/review-04
#   chmod +x create-github-issues.sh
#   ./create-github-issues.sh
#
# PREREQUISITES:
#   - GitHub CLI (gh) installed: https://cli.github.com/
#   - Authenticated: gh auth login
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
NC='\033[0m' # No Color

echo -e "${BLUE}==============================================================================${NC}"
echo -e "${BLUE}   Review Round 4 - GitHub Issue Creation${NC}"
echo -e "${BLUE}   Volume 1: The Narcissism Decoder${NC}"
echo -e "${BLUE}==============================================================================${NC}"
echo ""

# Check for gh CLI
if ! command -v gh &> /dev/null; then
    echo -e "${YELLOW}GitHub CLI (gh) not found. Please install it first:${NC}"
    echo "  macOS:  brew install gh"
    echo "  Linux:  See https://github.com/cli/cli/blob/trunk/docs/install_linux.md"
    echo "  Windows: winget install --id GitHub.cli"
    exit 1
fi

# Check authentication
if ! gh auth status &> /dev/null; then
    echo -e "${YELLOW}Not authenticated. Please run:${NC}"
    echo "  gh auth login"
    exit 1
fi

echo -e "${GREEN}✓ GitHub CLI authenticated${NC}"
echo ""

# =============================================================================
# PHASE 1: Strategic Decisions (Must Complete First)
# =============================================================================
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}PHASE 1: STRATEGIC DECISIONS${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Diana - Developmental Editor
echo -n "Creating Diana (Developmental Editor) issue... "
DIANA_URL=$(gh issue create \
  --repo "$REPO" \
  --title "[Review Round 4 - Phase 1] Diana (Developmental Editor): 20 Strategic Questions - Vol. 1" \
  --label "review-round-4,phase-1-strategic,author-input-required" \
  --body-file "$BASE_DIR/phase-1-strategic/diana-developmental-editor-issue.md")
echo -e "${GREEN}✓${NC}"
echo "  → $DIANA_URL"

# Morgan - Managing Editor
echo -n "Creating Morgan (Managing Editor) issue... "
MORGAN_URL=$(gh issue create \
  --repo "$REPO" \
  --title "[Review Round 4 - Phase 1] Morgan (Managing Editor): 15 Coordination Questions - Vol. 1" \
  --label "review-round-4,phase-1-strategic,author-input-required" \
  --body-file "$BASE_DIR/phase-1-strategic/morgan-managing-editor-issue.md")
echo -e "${GREEN}✓${NC}"
echo "  → $MORGAN_URL"

echo ""
echo -e "${YELLOW}⚠ Phase 1 must be completed before proceeding to Phase 2${NC}"
echo ""

# =============================================================================
# PHASE 2: Content & Experience (Can Run in Parallel)
# =============================================================================
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}PHASE 2: CONTENT & EXPERIENCE${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Bailey - Beta Reader
echo -n "Creating Bailey (Beta Reader) issue... "
BAILEY_URL=$(gh issue create \
  --repo "$REPO" \
  --title "[Review Round 4 - Phase 2] Bailey (Beta Reader): 25 Reader Experience Questions - Vol. 1" \
  --label "review-round-4,phase-2-content,author-input-required" \
  --body-file "$BASE_DIR/phase-2-content/bailey-beta-reader-issue.md")
echo -e "${GREEN}✓${NC}"
echo "  → $BAILEY_URL"

# Sage - Sensitivity Reader
echo -n "Creating Sage (Sensitivity Reader) issue... "
SAGE_URL=$(gh issue create \
  --repo "$REPO" \
  --title "[Review Round 4 - Phase 2] Sage (Sensitivity Reader): 20 Representation Questions - Vol. 1" \
  --label "review-round-4,phase-2-content,author-input-required" \
  --body-file "$BASE_DIR/phase-2-content/sage-sensitivity-reader-issue.md")
echo -e "${GREEN}✓${NC}"
echo "  → $SAGE_URL"

# Felix - Fact-Checker
echo -n "Creating Felix (Fact-Checker) issue... "
FELIX_URL=$(gh issue create \
  --repo "$REPO" \
  --title "[Review Round 4 - Phase 2] Felix (Fact-Checker): 15 Verification Questions - Vol. 1" \
  --label "review-round-4,phase-2-content,author-input-required,fact-check" \
  --body-file "$BASE_DIR/phase-2-content/felix-fact-checker-issue.md")
echo -e "${GREEN}✓${NC}"
echo "  → $FELIX_URL"

echo ""
echo -e "${GREEN}✓ Phase 2 reviewers can work in parallel${NC}"
echo ""

# =============================================================================
# PHASE 3: Polish (Sequential - Lydia before Clara)
# =============================================================================
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}PHASE 3: POLISH${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Lydia - Line Editor
echo -n "Creating Lydia (Line Editor) issue... "
LYDIA_URL=$(gh issue create \
  --repo "$REPO" \
  --title "[Review Round 4 - Phase 3] Lydia (Line Editor): 18 Prose Craft Questions - Vol. 1" \
  --label "review-round-4,phase-3-polish,author-input-required" \
  --body-file "$BASE_DIR/phase-3-polish/lydia-line-editor-issue.md")
echo -e "${GREEN}✓${NC}"
echo "  → $LYDIA_URL"

# Clara - Copy Editor
echo -n "Creating Clara (Copy Editor) issue... "
CLARA_URL=$(gh issue create \
  --repo "$REPO" \
  --title "[Review Round 4 - Phase 3] Clara (Copy Editor): 15 Style Consistency Questions - Vol. 1" \
  --label "review-round-4,phase-3-polish,author-input-required" \
  --body-file "$BASE_DIR/phase-3-polish/clara-copy-editor-issue.md")
echo -e "${GREEN}✓${NC}"
echo "  → $CLARA_URL"

echo ""
echo -e "${YELLOW}⚠ Complete Lydia's review before Clara's (line editing affects copy editing)${NC}"
echo ""

# =============================================================================
# PHASE 4: Final Pass (Must Be Last)
# =============================================================================
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}PHASE 4: FINAL PASS${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Petra - Proofreader
echo -n "Creating Petra (Proofreader) issue... "
PETRA_URL=$(gh issue create \
  --repo "$REPO" \
  --title "[Review Round 4 - Phase 4] Petra (Proofreader): 12 Final Questions - Vol. 1" \
  --label "review-round-4,phase-4-final,author-input-required" \
  --body-file "$BASE_DIR/phase-4-final/petra-proofreader-issue.md")
echo -e "${GREEN}✓${NC}"
echo "  → $PETRA_URL"

# Coherence Analysis
echo -n "Creating Coherence Analysis issue... "
COHERENCE_URL=$(gh issue create \
  --repo "$REPO" \
  --title "[Review Round 4 - Phase 4] Coherence Analysis: 10 Questions - Vol. 1" \
  --label "review-round-4,phase-4-final,analysis,author-input-required" \
  --body-file "$BASE_DIR/phase-4-final/coherence-analysis-issue.md")
echo -e "${GREEN}✓${NC}"
echo "  → $COHERENCE_URL"

# Flow Analysis
echo -n "Creating Flow Analysis issue... "
FLOW_URL=$(gh issue create \
  --repo "$REPO" \
  --title "[Review Round 4 - Phase 4] Flow Analysis: 10 Questions - Vol. 1" \
  --label "review-round-4,phase-4-final,analysis,author-input-required" \
  --body-file "$BASE_DIR/phase-4-final/flow-analysis-issue.md")
echo -e "${GREEN}✓${NC}"
echo "  → $FLOW_URL"

# Popularity Ranking
echo -n "Creating Section Popularity Ranking issue... "
POPULARITY_URL=$(gh issue create \
  --repo "$REPO" \
  --title "[Review Round 4 - Phase 4] Section Popularity Ranking: 8 Questions - Vol. 1" \
  --label "review-round-4,phase-4-final,analysis,author-input-required" \
  --body-file "$BASE_DIR/phase-4-final/popularity-ranking-issue.md")
echo -e "${GREEN}✓${NC}"
echo "  → $POPULARITY_URL"

echo ""
echo -e "${YELLOW}⚠ Phase 4 (especially Petra) must be completed LAST${NC}"
echo ""

# =============================================================================
# Summary
# =============================================================================
echo -e "${BLUE}==============================================================================${NC}"
echo -e "${GREEN}✓ ALL REVIEW ROUND 4 ISSUES CREATED SUCCESSFULLY${NC}"
echo -e "${BLUE}==============================================================================${NC}"
echo ""
echo "PHASE 1 - Strategic (Complete First):"
echo "  • Diana (Developmental): $DIANA_URL"
echo "  • Morgan (Managing):     $MORGAN_URL"
echo ""
echo "PHASE 2 - Content (Parallel):"
echo "  • Bailey (Beta Reader):    $BAILEY_URL"
echo "  • Sage (Sensitivity):      $SAGE_URL"
echo "  • Felix (Fact-Checker):    $FELIX_URL"
echo ""
echo "PHASE 3 - Polish (Sequential: Lydia → Clara):"
echo "  • Lydia (Line Editor):     $LYDIA_URL"
echo "  • Clara (Copy Editor):     $CLARA_URL"
echo ""
echo "PHASE 4 - Final (Last):"
echo "  • Petra (Proofreader):     $PETRA_URL"
echo "  • Coherence Analysis:      $COHERENCE_URL"
echo "  • Flow Analysis:           $FLOW_URL"
echo "  • Popularity Ranking:      $POPULARITY_URL"
echo ""
echo -e "${BLUE}==============================================================================${NC}"
echo ""
echo "WORKFLOW REMINDER:"
echo ""
echo "  Phase 1 (Strategic)    → Must complete before Phase 2"
echo "       ↓"
echo "  Phase 2 (Content)      → Bailey, Sage, Felix can run in parallel"
echo "       ↓"
echo "  Phase 3 (Polish)       → Lydia first, then Clara"
echo "       ↓"
echo "  Phase 4 (Final)        → Petra MUST be last"
echo ""
echo "Total Questions: 163"
echo "  • Diana:      20"
echo "  • Morgan:     15"
echo "  • Bailey:     25"
echo "  • Sage:       20"
echo "  • Felix:      15"
echo "  • Lydia:      18"
echo "  • Clara:      15"
echo "  • Petra:      12"
echo "  • Coherence:  10"
echo "  • Flow:       10"
echo "  • Popularity:  8"
echo ""
