#!/bin/bash
# Review Workflow GitHub Integration
#
# This script handles all GitHub operations for the AI-driven review workflow.
# IMPORTANT: Uses GITHUB_TOKEN environment variable for authentication.
#
# Usage:
#   ./review-github-integration.sh <command> [options]
#
# Commands:
#   post-issue    Post a reviewer's issue to GitHub
#   check-issue   Check for author responses on an issue
#   update-state  Update the review state file with issue info
#   list-issues   List all review issues for a round

set -e

# Configuration
REPO="${GITHUB_REPO:-danlawless/auracle}"
STATE_FILE=""
REVIEWER=""
PHASE=""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check for GitHub CLI and authentication
check_gh_auth() {
    if ! command -v gh &> /dev/null; then
        echo -e "${RED}Error: GitHub CLI (gh) is not installed.${NC}"
        echo "Install it from: https://cli.github.com/"
        exit 1
    fi

    # Check if GITHUB_TOKEN is set
    if [ -z "$GITHUB_TOKEN" ]; then
        echo -e "${YELLOW}Warning: GITHUB_TOKEN environment variable not set.${NC}"
        echo "Falling back to gh auth..."
    else
        # Use token for authentication
        export GH_TOKEN="$GITHUB_TOKEN"
    fi

    if ! gh auth status &> /dev/null; then
        echo -e "${RED}Error: Not authenticated with GitHub.${NC}"
        echo "Either set GITHUB_TOKEN environment variable or run: gh auth login"
        exit 1
    fi
}

# Post a review issue to GitHub
post_issue() {
    local volume="$1"
    local phase="$2"
    local reviewer="$3"
    local issue_file="$4"
    local title="$5"
    local labels="$6"

    if [ -z "$issue_file" ] || [ ! -f "$issue_file" ]; then
        echo -e "${RED}Error: Issue file not found: $issue_file${NC}"
        exit 1
    fi

    echo -e "${BLUE}Posting issue for ${reviewer} (Phase ${phase})...${NC}"

    # Create the issue
    ISSUE_URL=$(gh issue create \
        --repo "$REPO" \
        --title "$title" \
        --label "$labels" \
        --body-file "$issue_file" 2>&1)

    if [ $? -eq 0 ]; then
        # Extract issue number from URL
        ISSUE_NUMBER=$(echo "$ISSUE_URL" | grep -oE '[0-9]+$')
        echo -e "${GREEN}Issue created successfully!${NC}"
        echo "Issue #$ISSUE_NUMBER: $ISSUE_URL"

        # Return the issue number for state update
        echo "ISSUE_NUMBER=$ISSUE_NUMBER"
        echo "ISSUE_URL=$ISSUE_URL"
    else
        echo -e "${RED}Error creating issue: $ISSUE_URL${NC}"
        exit 1
    fi
}

# Check for author responses on an issue
check_issue() {
    local issue_number="$1"

    if [ -z "$issue_number" ]; then
        echo -e "${RED}Error: Issue number required${NC}"
        exit 1
    fi

    echo -e "${BLUE}Checking issue #${issue_number} for responses...${NC}"

    # Get issue details
    gh issue view "$issue_number" --repo "$REPO" --json state,comments,author,body

    # Get comments
    COMMENTS=$(gh issue view "$issue_number" --repo "$REPO" --json comments --jq '.comments | length')

    if [ "$COMMENTS" -gt 0 ]; then
        echo -e "${GREEN}Found $COMMENTS comment(s) on issue #$issue_number${NC}"
        echo ""
        echo "=== Comments ==="
        gh issue view "$issue_number" --repo "$REPO" --comments
        return 0
    else
        echo -e "${YELLOW}No comments yet on issue #$issue_number${NC}"
        return 1
    fi
}

# List all review issues for a round
list_issues() {
    local round="$1"
    local label="review-round-${round}"

    echo -e "${BLUE}Listing issues for Review Round ${round}...${NC}"
    echo ""

    gh issue list \
        --repo "$REPO" \
        --label "$label" \
        --state all \
        --json number,title,state,labels,url \
        --jq '.[] | "Issue #\(.number): \(.title)\n  State: \(.state)\n  URL: \(.url)\n"'
}

# Update review state JSON with issue info
update_state() {
    local state_file="$1"
    local phase="$2"
    local reviewer="$3"
    local issue_number="$4"
    local issue_url="$5"

    if [ ! -f "$state_file" ]; then
        echo -e "${RED}Error: State file not found: $state_file${NC}"
        exit 1
    fi

    echo -e "${BLUE}Updating state file for ${reviewer}...${NC}"

    # Use jq to update the state file
    if command -v jq &> /dev/null; then
        jq --arg phase "$phase" \
           --arg reviewer "$reviewer" \
           --argjson number "$issue_number" \
           --arg url "$issue_url" \
           '.phases[$phase].reviewers[$reviewer].issueNumber = $number |
            .phases[$phase].reviewers[$reviewer].issueUrl = $url |
            .phases[$phase].reviewers[$reviewer].issuePosted = true |
            .phases[$phase].reviewers[$reviewer].status = "issue_posted"' \
           "$state_file" > "${state_file}.tmp" && mv "${state_file}.tmp" "$state_file"

        echo -e "${GREEN}State file updated successfully${NC}"
    else
        echo -e "${YELLOW}Warning: jq not installed. Please update state file manually.${NC}"
        echo "Set issueNumber=$issue_number and issueUrl=$issue_url for $reviewer in phase $phase"
    fi
}

# Mark reviewer as author_responded
mark_responded() {
    local state_file="$1"
    local phase="$2"
    local reviewer="$3"

    if [ ! -f "$state_file" ]; then
        echo -e "${RED}Error: State file not found: $state_file${NC}"
        exit 1
    fi

    echo -e "${BLUE}Marking ${reviewer} as author responded...${NC}"

    if command -v jq &> /dev/null; then
        jq --arg phase "$phase" \
           --arg reviewer "$reviewer" \
           '.phases[$phase].reviewers[$reviewer].authorResponded = true |
            .phases[$phase].reviewers[$reviewer].status = "author_responded"' \
           "$state_file" > "${state_file}.tmp" && mv "${state_file}.tmp" "$state_file"

        echo -e "${GREEN}State file updated successfully${NC}"
    else
        echo -e "${YELLOW}Warning: jq not installed. Please update state file manually.${NC}"
    fi
}

# Mark reviewer as completed
mark_completed() {
    local state_file="$1"
    local phase="$2"
    local reviewer="$3"

    if [ ! -f "$state_file" ]; then
        echo -e "${RED}Error: State file not found: $state_file${NC}"
        exit 1
    fi

    echo -e "${BLUE}Marking ${reviewer} as completed...${NC}"

    if command -v jq &> /dev/null; then
        jq --arg phase "$phase" \
           --arg reviewer "$reviewer" \
           '.phases[$phase].reviewers[$reviewer].implementationComplete = true |
            .phases[$phase].reviewers[$reviewer].status = "completed"' \
           "$state_file" > "${state_file}.tmp" && mv "${state_file}.tmp" "$state_file"

        echo -e "${GREEN}State file updated successfully${NC}"
    else
        echo -e "${YELLOW}Warning: jq not installed. Please update state file manually.${NC}"
    fi
}

# Show usage
usage() {
    echo "Review Workflow GitHub Integration"
    echo ""
    echo "Usage: $0 <command> [options]"
    echo ""
    echo "Commands:"
    echo "  post-issue <volume> <phase> <reviewer> <issue-file> <title> <labels>"
    echo "      Post a reviewer's issue to GitHub"
    echo ""
    echo "  check-issue <issue-number>"
    echo "      Check for author responses on an issue"
    echo ""
    echo "  list-issues <round-number>"
    echo "      List all review issues for a round"
    echo ""
    echo "  update-state <state-file> <phase> <reviewer> <issue-number> <issue-url>"
    echo "      Update the review state file with issue info"
    echo ""
    echo "  mark-responded <state-file> <phase> <reviewer>"
    echo "      Mark a reviewer as having received author response"
    echo ""
    echo "  mark-completed <state-file> <phase> <reviewer>"
    echo "      Mark a reviewer's implementation as complete"
    echo ""
    echo "Environment Variables:"
    echo "  GITHUB_TOKEN    GitHub API token for authentication (recommended)"
    echo "  GITHUB_REPO     Repository (default: danlawless/auracle)"
    echo ""
    echo "Examples:"
    echo "  $0 post-issue vol-1-decoder 2 bailey ./issue.md \"[Review] Bailey\" \"review-round-4,phase-2-content\""
    echo "  $0 check-issue 260"
    echo "  $0 list-issues 4"
}

# Main command handler
main() {
    local command="$1"
    shift

    check_gh_auth

    case "$command" in
        post-issue)
            post_issue "$@"
            ;;
        check-issue)
            check_issue "$@"
            ;;
        list-issues)
            list_issues "$@"
            ;;
        update-state)
            update_state "$@"
            ;;
        mark-responded)
            mark_responded "$@"
            ;;
        mark-completed)
            mark_completed "$@"
            ;;
        help|--help|-h)
            usage
            ;;
        *)
            echo -e "${RED}Unknown command: $command${NC}"
            usage
            exit 1
            ;;
    esac
}

# Run main if script is executed directly
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    if [ $# -eq 0 ]; then
        usage
        exit 1
    fi
    main "$@"
fi
