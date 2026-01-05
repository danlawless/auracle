# Review Round 4 - Vol. 1: The Narcissism Decoder

**Status:** Prepared (Pending Review Round 3 Completion)
**Date Prepared:** January 5, 2026

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

To create GitHub issues for this round:

```bash
# Phase 1
gh issue create --title "[Review Round 4 - Phase 1] Diana (Developmental Editor): Questions - Vol. 1" \
  --label "review-round-4,phase-1-strategic,author-input-required" \
  --body-file phase-1-strategic/diana-developmental-editor-issue.md

gh issue create --title "[Review Round 4 - Phase 1] Morgan (Managing Editor): Questions - Vol. 1" \
  --label "review-round-4,phase-1-strategic,author-input-required" \
  --body-file phase-1-strategic/morgan-managing-editor-issue.md

# Phase 2 (can create in parallel)
gh issue create --title "[Review Round 4 - Phase 2] Bailey (Beta Reader): Questions - Vol. 1" \
  --label "review-round-4,phase-2-content,author-input-required" \
  --body-file phase-2-content/bailey-beta-reader-issue.md

gh issue create --title "[Review Round 4 - Phase 2] Sage (Sensitivity Reader): Questions - Vol. 1" \
  --label "review-round-4,phase-2-content,author-input-required" \
  --body-file phase-2-content/sage-sensitivity-reader-issue.md

gh issue create --title "[Review Round 4 - Phase 2] Felix (Fact-Checker): Questions - Vol. 1" \
  --label "review-round-4,phase-2-content,author-input-required" \
  --body-file phase-2-content/felix-fact-checker-issue.md

# Phase 3
gh issue create --title "[Review Round 4 - Phase 3] Lydia (Line Editor): Questions - Vol. 1" \
  --label "review-round-4,phase-3-polish,author-input-required" \
  --body-file phase-3-polish/lydia-line-editor-issue.md

gh issue create --title "[Review Round 4 - Phase 3] Clara (Copy Editor): Questions - Vol. 1" \
  --label "review-round-4,phase-3-polish,author-input-required" \
  --body-file phase-3-polish/clara-copy-editor-issue.md

# Phase 4
gh issue create --title "[Review Round 4 - Phase 4] Petra (Proofreader): Questions - Vol. 1" \
  --label "review-round-4,phase-4-final,author-input-required" \
  --body-file phase-4-final/petra-proofreader-issue.md
```

---

## Progress Tracking

### Phase 1 Progress
- [ ] Diana questions generated
- [ ] Diana questions answered: ___/___
- [ ] Morgan questions generated
- [ ] Morgan questions answered: ___/___
- [ ] Structural changes implemented

### Phase 2 Progress
- [ ] Bailey questions generated
- [ ] Bailey questions answered: ___/___
- [ ] Sage questions generated
- [ ] Sage questions answered: ___/___
- [ ] Felix questions generated
- [ ] Felix questions answered: ___/___
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
