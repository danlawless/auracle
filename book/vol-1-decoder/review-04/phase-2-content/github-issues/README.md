# Phase 2 GitHub Issues - Review Round 4

This directory contains formatted issue bodies ready for GitHub issue creation.

## Issue Files

| Editor | Questions | File |
|--------|-----------|------|
| Bailey (Beta Reader) | 25 | `../bailey-beta-reader-issue.md` |
| Sage (Sensitivity Reader) | 20 | `../sage-sensitivity-reader-issue.md` |
| Felix (Fact-Checker) | 15 | `../felix-fact-checker-issue.md` |

**Total Phase 2 Questions: 60**

## Creating Issues

### Using GitHub CLI

Phase 2 reviewers can run in parallel. Create all three issues:

```bash
# Bailey - Beta Reader
gh issue create \
  --title "[Review Round 4 - Phase 2] Bailey (Beta Reader): 25 Reader Experience Questions - Vol. 1" \
  --label "review-round-4,phase-2-content,author-input-required" \
  --body-file ../bailey-beta-reader-issue.md

# Sage - Sensitivity Reader
gh issue create \
  --title "[Review Round 4 - Phase 2] Sage (Sensitivity Reader): 20 Representation Questions - Vol. 1" \
  --label "review-round-4,phase-2-content,author-input-required" \
  --body-file ../sage-sensitivity-reader-issue.md

# Felix - Fact-Checker
gh issue create \
  --title "[Review Round 4 - Phase 2] Felix (Fact-Checker): 15 Verification Questions - Vol. 1" \
  --label "review-round-4,phase-2-content,author-input-required,fact-check" \
  --body-file ../felix-fact-checker-issue.md
```

### Prerequisites

1. Install GitHub CLI: https://cli.github.com/
2. Authenticate: `gh auth login`
3. Ensure you're in the correct repository

## Responding to Issues

Author responses can be provided:
1. **Directly in GitHub issues** - Comment with decisions
2. **In the decisions file** - Update `../author-decisions-phase-2.md`

## Phase 2 Workflow

```
Phase 1 Complete (Diana, Morgan decisions locked)
         ↓
Phase 2 Issues Created (Bailey, Sage, Felix)
         ↓
Phase 2 Reviews Run in PARALLEL
         ↓
Author Decisions Documented
         ↓
Phase 3 Ready (Lydia, Clara)
```

## Question Focus Areas

### Bailey (Beta Reader) - 25 Questions
- **Section A (Q1-Q5):** Post-Round 3 Experience
- **Section B (Q6-Q10):** Clarity & Comprehension
- **Section C (Q11-Q15):** Emotional Impact
- **Section D (Q16-Q20):** Pacing Assessment
- **Section E (Q21-Q25):** Target Audience Fit

### Sage (Sensitivity Reader) - 20 Questions
- **Section A (Q1-Q6):** Representation Assessment
- **Section B (Q7-Q12):** Trauma-Informed Approach
- **Section C (Q13-Q16):** Terminology & Framing
- **Section D (Q17-Q20):** Specific Population Considerations

### Felix (Fact-Checker) - 15 Questions
- **Section A (Q1-Q5):** Source Currency
- **Section B (Q6-Q10):** Claim Verification
- **Section C (Q11-Q15):** Technical Accuracy

---

*Phase 2 Content Review - Review Round 4*
*January 2026*
