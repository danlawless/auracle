# Editorial Review Workflow Template

**Principle:** Big-picture changes first, fine details last — structural changes invalidate detailed polish work.

Use this template to track progress through any review round. Copy to your review folder and fill in issue numbers.

---

## Phase 1: Strategic Decisions (Do First)

Answer ALL questions in Phase 1 before implementing any changes.

| Order | Status | Agent | Issue | Questions | Focus |
|-------|--------|-------|-------|-----------|-------|
| 1 | [ ] | **Diana** (Developmental Editor) | #___ | ___ | Structure, themes, narrative arc |
| 2 | [ ] | **Morgan** (Managing Editor) | #___ | ___ | Priorities, conflicts, coordination |

**Why first:** Structural decisions affect everything downstream. If you change chapter order or add/remove content, all detailed polish work becomes invalid.

**Phase 1 Complete:** [ ]
**Structural changes implemented:** [ ]

---

## Phase 2: Content & Experience

Address after Phase 1 structural decisions are made. These three can be answered in parallel since they address different concerns.

| Order | Status | Agent | Issue | Questions | Focus |
|-------|--------|-------|-------|-----------|-------|
| 3 | [ ] | **Bailey** (Beta Reader) | #___ | ___ | Reader engagement, pacing, clarity |
| 4 | [ ] | **Sage** (Sensitivity Reader) | #___ | ___ | Representation, inclusion, trauma-informed |
| 5 | [ ] | **Felix** (Fact-Checker) | #___ | ___ | Sources, accuracy, verification |

**Why this order:** Reader experience and representation concerns may require content changes. Fact-checking verifies claims once content is stable.

**Phase 2 Complete:** [ ]
**Content changes implemented:** [ ]

---

## Phase 3: Polish

Only begin after content is stable. Do Lydia's line edit first, then Clara's copy edit.

| Order | Status | Agent | Issue | Questions | Focus |
|-------|--------|-------|-------|-----------|-------|
| 6 | [ ] | **Lydia** (Line Editor) | #___ | ___ | Prose craft, voice, rhythm |
| 7 | [ ] | **Clara** (Copy Editor) | #___ | ___ | Style consistency, terminology |

**Why this order:** Line editing improves prose quality; copy editing standardizes. Copy editing a passage that will be rewritten by line editing wastes effort.

**Phase 3 Complete:** [ ]
**Polish changes implemented:** [ ]

---

## Phase 4: Final Pass

Absolutely last — any earlier changes could introduce new errors.

| Order | Status | Agent | Issue | Questions | Focus |
|-------|--------|-------|-------|-----------|-------|
| 8 | [ ] | **Petra** (Proofreader) | #___ | ___ | Typos, formatting, final errors |

**Why last:** Proofreading catches the small errors that slip through. Any content changes after proofreading require re-proofreading.

**Phase 4 Complete:** [ ]
**Final corrections applied:** [ ]

---

## Parallel Work Guide

### Can Answer Together
- **Diana + Morgan** — But answer both before implementing structural changes
- **Bailey + Sage + Felix** — Different concerns with no dependencies
- **Lydia + Clara** — But implement Lydia's suggestions first, then Clara's

### Must Be Sequential
```
Phase 1 (Strategic)
    → Phase 2 (Content)
        → Phase 3 (Polish)
            → Phase 4 (Final)
```

### Critical Rule
**Petra (Proofreader) is always last.** No exceptions.

---

## Summary Table

| Phase | Agents | Focus | Parallel OK? |
|-------|--------|-------|--------------|
| 1 - Strategic | Diana, Morgan | Structure, priorities | Yes (answer together) |
| 2 - Content | Bailey, Sage, Felix | Experience, representation, accuracy | Yes |
| 3 - Polish | Lydia, Clara | Prose, consistency | Yes (implement sequentially) |
| 4 - Final | Petra | Typos, formatting | No (must be last) |

---

## Progress Log Template

Use this section to track implementation progress for your review round.

### Phase 1 Progress
- [ ] Diana questions answered: ___/___
- [ ] Morgan questions answered: ___/___
- [ ] Structural decisions documented
- [ ] Structural changes implemented
- [ ] Ready for Phase 2

### Phase 2 Progress
- [ ] Bailey questions answered: ___/___
- [ ] Sage questions answered: ___/___
- [ ] Felix questions answered: ___/___
- [ ] Content changes implemented
- [ ] Ready for Phase 3

### Phase 3 Progress
- [ ] Lydia questions answered: ___/___
- [ ] Line edit changes implemented
- [ ] Clara questions answered: ___/___
- [ ] Copy edit changes implemented
- [ ] Ready for Phase 4

### Phase 4 Progress
- [ ] Petra questions answered: ___/___
- [ ] Final corrections applied
- [ ] **PUBLICATION READY**

---

## AI-Driven Workflow Integration

This review process is 100% AI-driven with author interaction through GitHub issues only.

### State Tracking

Each volume maintains a `review-state.json` file that tracks:
- Current review round and phase
- Status of each reviewer (pending, review_generated, issue_posted, author_responded, completed)
- GitHub issue numbers and URLs
- File paths for review outputs

**Location:** `book/{volume}/review-state.json`

### Using the @reviewer Command

Invoke `@reviewer` to:
- View current review status across all phases
- Run specific reviewer agents to generate reviews
- Post reviews to GitHub issues
- Check for author responses
- Implement approved changes
- Advance through phases

### Reviewer Status Flow

```
pending → review_generated → issue_posted → author_responded → completed
```

1. **pending:** Reviewer has not yet analyzed the manuscript
2. **review_generated:** AI has generated the review with actionable questions
3. **issue_posted:** Review posted to GitHub issue, awaiting author
4. **author_responded:** Author has responded in the GitHub issue
5. **completed:** AI has implemented approved changes

### GitHub Issue Workflow

1. **AI generates review** following `actionable-review-template.md`
2. **Review posted to GitHub** with labels: `review-round-X`, `phase-Y-name`, `author-input-required`
3. **Author responds** by selecting options and answering clarifying questions
4. **AI parses response** and implements approved changes
5. **AI comments on issue** summarizing changes made

### Clarifying Questions

Each reviewer may ask clarifying questions when:
- Multiple valid interpretations exist
- Author intent isn't clear from the text
- External context would improve recommendations

Authors answer in the GitHub issue; AI uses responses to refine implementation.

### Environment Variables

- `GITHUB_TOKEN` - Required for GitHub API authentication
- `GITHUB_REPO` - Repository (default: danlawless/auracle)

### Scripts

- `scripts/review-github-integration.sh` - GitHub CLI wrapper for review workflow

---

## Notes

_Add implementation notes, decisions, and observations here as you work through the review._
