#!/bin/bash
# Script to create GitHub issue for Round 3 Managing Editor Review

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo "GitHub CLI (gh) is not installed."
    echo "Please install it following: https://github.com/cli/cli#installation"
    echo ""
    echo "Or create the issue manually at: https://github.com/danlawless/auracle/issues/new"
    echo "Using the content from: /home/user/auracle/book/vol-1-decoder/review-03/github-issue-body.txt"
    echo ""
    echo "Title: [Review Round 3] Morgan (Managing Editor): Questions for Author - Vol. 1"
    exit 1
fi

# Create the issue
gh issue create \
  --repo danlawless/auracle \
  --title "[Review Round 3] Morgan (Managing Editor): Questions for Author - Vol. 1" \
  --body-file /home/user/auracle/book/vol-1-decoder/review-03/github-issue-body.txt

echo "GitHub issue created successfully!"
