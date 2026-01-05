#!/bin/bash
set -e

cd /home/user/auracle/book/vol-1-decoder/review-03-phase-4

# Issue 1: Petra Proofreader
echo "Creating Issue 1: Petra Proofreader..."
BODY1=$(cat github-issue-petra-proofreader.md)
curl -s -X POST \
  -H "Authorization: token $GH_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/danlawless/auracle/issues \
  -d @- <<EOF | jq '{number, title, html_url}'
{
  "title": "[Review Round 3 - Phase 4] Petra (Proofreader): 5 Final Questions - Vol. 1",
  "body": $(echo "$BODY1" | jq -Rs .),
  "labels": ["review-round-3", "phase-4-final", "author-input-required"]
}
EOF

echo ""

# Issue 2: Coherence/Flow/Popularity Analysis
echo "Creating Issue 2: Coherence/Flow/Popularity Analysis..."
BODY2=$(cat github-issue-coherence-flow-analysis.md)
curl -s -X POST \
  -H "Authorization: token $GH_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/danlawless/auracle/issues \
  -d @- <<EOF | jq '{number, title, html_url}'
{
  "title": "[Review Round 3 - Phase 4] Coherence, Flow & Section Popularity Analysis: 3 Questions - Vol. 1",
  "body": $(echo "$BODY2" | jq -Rs .),
  "labels": ["review-round-3", "phase-4-final", "analysis", "author-input-required"]
}
EOF

echo ""

# Issue 3: Decoder Cards Split
echo "Creating Issue 3: Decoder Cards Split..."
BODY3=$(cat github-issue-decoder-cards-split.md)
curl -s -X POST \
  -H "Authorization: token $GH_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/danlawless/auracle/issues \
  -d @- <<EOF | jq '{number, title, html_url}'
{
  "title": "[Vol. 1] Split Decoder Cards into Core (Part 1) and Advanced (Part 2)",
  "body": $(echo "$BODY3" | jq -Rs .),
  "labels": ["enhancement", "vol-1-decoder", "reader-experience"]
}
EOF

echo ""

# Issue 4: Metrics Improvement
echo "Creating Issue 4: Metrics Improvement Ideas..."
BODY4=$(cat github-issue-improve-metrics.md)
curl -s -X POST \
  -H "Authorization: token $GH_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/danlawless/auracle/issues \
  -d @- <<EOF | jq '{number, title, html_url}'
{
  "title": "[Vol. 1] Improvement Ideas for Coherence (4.2), Flow (3.9) & Popularity (4.5) Metrics",
  "body": $(echo "$BODY4" | jq -Rs .),
  "labels": ["enhancement", "vol-1-decoder", "reader-experience", "analysis"]
}
EOF

echo ""
echo "All issues created!"
