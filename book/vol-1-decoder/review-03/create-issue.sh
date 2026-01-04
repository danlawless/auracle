#!/bin/bash
# Script to create GitHub issue for Bailey's beta reader review
# Run this script to create the issue in the danlawless/auracle repository

gh issue create \
  --repo danlawless/auracle \
  --title "[Review Round 3] Bailey (Beta Reader): Questions for Author - Vol. 1" \
  --body-file /tmp/issue-body.md

# Alternative: If you prefer to create it manually, the issue body is saved at:
# /tmp/issue-body.md
#
# You can also create it via the web interface at:
# https://github.com/danlawless/auracle/issues/new
