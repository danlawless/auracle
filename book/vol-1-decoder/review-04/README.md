# Review Round 4 - Vol. 1: The Narcissism Decoder

**Status:** Phase 2 Initiated
**Date Prepared:** January 5, 2026
**Phase 2 Started:** January 5, 2026

---

## Overview

Review Round 4 is a post-publication review cycle designed to be run after Round 3 publication decisions are complete. This round will catch any issues introduced during Round 3 implementation and provide a fresh perspective for any planned updates or editions.

---

## Prerequisites

Before starting Review Round 4:

- [ ] Review Round 3 Phase 1-4 complete
- [ ] All Round 3 author decisions documented
- [ ] All Round 3 implementations applied
- [ ] Manuscript declared publication-ready from Round 3
- [ ] Publication or edition milestone completed

---

## Phase Structure

Review Round 4 follows the same 4-phase structure as Round 3:

### Phase 1: Strategic Decisions (Do First)

| Order | Agent | Focus | Issue Template |
|-------|-------|-------|----------------|
| 1 | Diana (Developmental Editor) | Structure, themes, narrative arc | `phase-1-strategic/diana-developmental-editor-issue.md` |
| 2 | Morgan (Managing Editor) | Priorities, conflicts, coordination | `phase-1-strategic/morgan-managing-editor-issue.md` |

### Phase 2: Content & Experience (Parallel OK)

| Order | Agent | Focus | Issue Template |
|-------|-------|-------|----------------|
| 3 | Bailey (Beta Reader) | Reader engagement, pacing, clarity | `phase-2-content/bailey-beta-reader-issue.md` |
| 4 | Sage (Sensitivity Reader) | Representation, inclusion, trauma-informed | `phase-2-content/sage-sensitivity-reader-issue.md` |
| 5 | Felix (Fact-Checker) | Sources, accuracy, verification | `phase-2-content/felix-fact-checker-issue.md` |

### Phase 3: Polish (Sequential)

| Order | Agent | Focus | Issue Template |
|-------|-------|-------|----------------|
| 6 | Lydia (Line Editor) | Prose craft, voice, rhythm | `phase-3-polish/lydia-line-editor-issue.md` |
| 7 | Clara (Copy Editor) | Style consistency, terminology | `phase-3-polish/clara-copy-editor-issue.md` |

### Phase 4: Final Pass (Must Be Last)

| Order | Agent | Focus | Issue Template |
|-------|-------|-------|----------------|
| 8 | Petra (Proofreader) | Typos, formatting, final errors | `phase-4-final/petra-proofreader-issue.md` |

---

## Additional Analysis Components

Review Round 4 includes enhanced analysis:

| Analysis | Purpose | Template |
|----------|---------|----------|
| Coherence Analysis | Internal consistency ranking | `phase-4-final/coherence-analysis-issue.md` |
| Flow Analysis | Reading rhythm and pacing ranking | `phase-4-final/flow-analysis-issue.md` |
| Section Popularity | Reader engagement prediction | `phase-4-final/popularity-ranking-issue.md` |

---

## Workflow

```
Review Round 3 Complete
         ↓
Review Round 4 Phase 1 (Strategic)
         ↓
Review Round 4 Phase 2 (Content) [Parallel]
         ↓
Review Round 4 Phase 3 (Polish) [Sequential]
         ↓
Review Round 4 Phase 4 (Final)
         ↓
Next Edition Ready
```

---

## GitHub Issue Creation

### Automated Script (Recommended)

Run the provided script to create all 11 issues at once:

```bash
cd /home/user/auracle/book/vol-1-decoder/review-04
./create-github-issues.sh
```

**Prerequisites:**
1. Install GitHub CLI: https://cli.github.com/
2. Authenticate: `gh auth login`

The script creates all issues with proper labels and displays issue URLs.

### Manual Creation (Alternative)

If you prefer to create issues manually or in phases:

**Phase 1 - Strategic Decisions:**
```bash
gh issue create --title "[Review Round 4 - Phase 1] Diana (Developmental Editor): 20 Strategic Questions - Vol. 1" \
  --label "review-round-4,phase-1-strategic,author-input-required" \
  --body-file phase-1-strategic/diana-developmental-editor-issue.md

gh issue create --title "[Review Round 4 - Phase 1] Morgan (Managing Editor): 15 Coordination Questions - Vol. 1" \
  --label "review-round-4,phase-1-strategic,author-input-required" \
  --body-file phase-1-strategic/morgan-managing-editor-issue.md
```

**Phase 2 - Content & Experience:**
```bash
gh issue create --title "[Review Round 4 - Phase 2] Bailey (Beta Reader): 25 Reader Experience Questions - Vol. 1" \
  --label "review-round-4,phase-2-content,author-input-required" \
  --body-file phase-2-content/bailey-beta-reader-issue.md

gh issue create --title "[Review Round 4 - Phase 2] Sage (Sensitivity Reader): 20 Representation Questions - Vol. 1" \
  --label "review-round-4,phase-2-content,author-input-required" \
  --body-file phase-2-content/sage-sensitivity-reader-issue.md

gh issue create --title "[Review Round 4 - Phase 2] Felix (Fact-Checker): 15 Verification Questions - Vol. 1" \
  --label "review-round-4,phase-2-content,author-input-required,fact-check" \
  --body-file phase-2-content/felix-fact-checker-issue.md
```

**Phase 3 - Polish:**
```bash
gh issue create --title "[Review Round 4 - Phase 3] Lydia (Line Editor): 18 Prose Craft Questions - Vol. 1" \
  --label "review-round-4,phase-3-polish,author-input-required" \
  --body-file phase-3-polish/lydia-line-editor-issue.md

gh issue create --title "[Review Round 4 - Phase 3] Clara (Copy Editor): 15 Style Consistency Questions - Vol. 1" \
  --label "review-round-4,phase-3-polish,author-input-required" \
  --body-file phase-3-polish/clara-copy-editor-issue.md
```

**Phase 4 - Final Pass:**
```bash
gh issue create --title "[Review Round 4 - Phase 4] Petra (Proofreader): 12 Final Questions - Vol. 1" \
  --label "review-round-4,phase-4-final,author-input-required" \
  --body-file phase-4-final/petra-proofreader-issue.md

gh issue create --title "[Review Round 4 - Phase 4] Coherence Analysis: 10 Questions - Vol. 1" \
  --label "review-round-4,phase-4-final,analysis,author-input-required" \
  --body-file phase-4-final/coherence-analysis-issue.md

gh issue create --title "[Review Round 4 - Phase 4] Flow Analysis: 10 Questions - Vol. 1" \
  --label "review-round-4,phase-4-final,analysis,author-input-required" \
  --body-file phase-4-final/flow-analysis-issue.md

gh issue create --title "[Review Round 4 - Phase 4] Section Popularity Ranking: 8 Questions - Vol. 1" \
  --label "review-round-4,phase-4-final,analysis,author-input-required" \
  --body-file phase-4-final/popularity-ranking-issue.md
```

---

## Issue Summary

| Phase | Editor | Questions | Labels |
|-------|--------|-----------|--------|
| **Phase 1** | Diana (Developmental Editor) | 20 | `review-round-4`, `phase-1-strategic` |
| **Phase 1** | Morgan (Managing Editor) | 15 | `review-round-4`, `phase-1-strategic` |
| **Phase 2** | Bailey (Beta Reader) | 25 | `review-round-4`, `phase-2-content` |
| **Phase 2** | Sage (Sensitivity Reader) | 20 | `review-round-4`, `phase-2-content` |
| **Phase 2** | Felix (Fact-Checker) | 15 | `review-round-4`, `phase-2-content`, `fact-check` |
| **Phase 3** | Lydia (Line Editor) | 18 | `review-round-4`, `phase-3-polish` |
| **Phase 3** | Clara (Copy Editor) | 15 | `review-round-4`, `phase-3-polish` |
| **Phase 4** | Petra (Proofreader) | 12 | `review-round-4`, `phase-4-final` |
| **Phase 4** | Coherence Analysis | 10 | `review-round-4`, `phase-4-final`, `analysis` |
| **Phase 4** | Flow Analysis | 10 | `review-round-4`, `phase-4-final`, `analysis` |
| **Phase 4** | Popularity Ranking | 8 | `review-round-4`, `phase-4-final`, `analysis` |
| | **Total** | **168** | |

---

## Progress Tracking

### Phase 1 Progress
- [ ] Diana questions generated
- [ ] Diana questions answered: ___/___
- [ ] Morgan questions generated
- [ ] Morgan questions answered: ___/___
- [ ] Structural changes implemented

### Phase 2 Progress
- [x] Bailey questions generated (25 questions)
- [ ] Bailey questions answered: ___/25
- [x] Sage questions generated (20 questions)
- [ ] Sage questions answered: ___/20
- [x] Felix questions generated (15 questions)
- [ ] Felix questions answered: ___/15
- [ ] Content changes implemented

### Phase 3 Progress
- [ ] Lydia questions generated
- [ ] Lydia questions answered: ___/___
- [ ] Clara questions generated
- [ ] Clara questions answered: ___/___
- [ ] Polish changes implemented

### Phase 4 Progress
- [ ] Petra questions generated
- [ ] Petra questions answered: ___/___
- [ ] Coherence analysis complete
- [ ] Flow analysis complete
- [ ] Popularity ranking complete
- [ ] Final corrections applied
- [ ] **NEXT EDITION READY**

---

## Notes

_Add notes about Round 4 planning here._

---

*Review Round 4 Preparation*
*January 5, 2026*
