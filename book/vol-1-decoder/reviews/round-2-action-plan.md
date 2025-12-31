# Vol-1 Decoder: Round 2 Action Plan

**Generated:** December 31, 2025
**Source:** Managing Editor Round 2 Synthesis
**Purpose:** Actionable workflow for manuscript finalization

---

## Overview

This action plan prioritizes 36 items identified across 7 specialist reviews into an executable workflow. Items are ordered by impact and dependency.

**Estimated Effort:**
- Phase 1 (Critical): 1 focused revision pass
- Phase 2 (High Priority): 1 additional pass
- Phase 3 (Enhancement): Optional polish pass
- Phase 4 (Structural): Pending author decisions

---

## Phase 1: Critical Fixes (Must Complete)

**Timeline:** Before any publication consideration
**Dependencies:** None — can begin immediately

### 1.1 Gender Pronoun Standardization (Chapter 3)
**Priority:** CRITICAL
**Effort:** Medium (1-2 hours)
**Owner:** Line Editor or Author

**Task:** Convert all he/him/his pronouns to they/them/their in Chapter 3

**Steps:**
1. Run: `grep -n " he \| his \| him " chapters/03-narcissist-playbook.md`
2. Review each instance in context
3. Replace with gender-neutral alternatives
4. Verify no awkward constructions resulted
5. Confirm alignment with front matter pronoun statement

**Verification:** Zero masculine pronouns in Chapter 3 pull quotes

---

### 1.2 Content Warning Additions
**Priority:** CRITICAL
**Effort:** Small (30 minutes)
**Owner:** Author or Editor

**Task:** Add trauma-informed content warnings

**Steps:**
1. **Chapter 3:** Add warning at start for physical intimidation, suicide mentions
   ```markdown
   > **Content Note:** This chapter describes specific manipulation tactics including
   > references to physical intimidation and suicide threats. Go slowly. Put the book
   > down if you need to.
   ```

2. **Chapter 17:** Move safety warning from lines 895-899 to BEGINNING of chapter

3. **Chapter 18:** Add warning before sexuality section (lines 270-350)
   ```markdown
   > **Content Note:** This section discusses sexual trauma and boundary violations.
   > If you need to skip this section, that's okay. Your healing doesn't require
   > reading everything.
   ```

**Verification:** All three warnings in place before graphic content

---

### 1.3 Voice Break Fix: Chapter 18 Field Notes
**Priority:** CRITICAL
**Effort:** Medium (1 hour)
**Owner:** Line Editor or Author

**Task:** Convert third-person Field Notes to second-person voice

**Location:** `chapters/18-childhood-patterns.md`, lines 286-326

**Current:**
```
She is young. A boy wants something she doesn't.
She feels the moment stretch—the risk of disappointing him heavier than her own discomfort.
She agrees without wanting to.
```

**Revised:**
```
You're young. Someone wants something you don't want to give.
You feel the moment stretch—the risk of disappointing them heavier than your own discomfort.
You agree without wanting to.
```

**Steps:**
1. Read full Field Notes section for context
2. Rewrite in second-person maintaining emotional impact
3. Verify consistency with Chapter 18's established voice
4. Review any other third-person instances in chapter

**Verification:** Entire chapter maintains second-person voice

---

### 1.4 Voice Break Fix: Chapter 16 Sovereignty Statement
**Priority:** CRITICAL
**Effort:** Medium (1 hour)
**Owner:** Author (voice-sensitive content)

**Task:** Revise affirmation-genre statements to acknowledge current reality

**Location:** `chapters/16-moving-forward.md`, lines 143-166

**Current Issues:**
- "I am surrounded by authentic people" — may not be true for reader
- "I am loved by many for how amazing I am" — may feel premature

**Revised Approach:**
```markdown
## The Sovereignty You're Building Toward

As you heal, you're creating space for what you deserve. This might look like:

- Surrounding yourself with authentic people and truth-tellers
- Being loved by people who see how amazing you are
- Getting honored for who you are and the gifts you have

You may not have all of this yet. But you're moving toward it. Each boundary held,
each pattern recognized, each moment of choosing yourself—you're building this reality.

*Write your own version. Read it when you forget where you're headed.*
```

**Verification:** Statements framed as aspirational/future, not present-tense declarations

---

### 1.5 Cross-Reference Audit
**Priority:** CRITICAL
**Effort:** Medium (1-2 hours)
**Owner:** Copy Editor or Proofreader

**Task:** Verify all internal chapter references are accurate

**Steps:**
1. Run: `grep -rn "Chapter [0-9]" chapters/`
2. Create checklist of all references
3. Verify each reference points to correct content
4. Fix any remaining errors (Proofreader fixed 4 already)
5. Document any structural dependencies

**Known Issues (verify fixed):**
- Ch 1 references "Chapter 8 (Decoder Cards)" but Decoder Cards are in Ch 11-13
- Some references assume 10-chapter structure

**Verification:** All chapter number references accurate

---

### 1.6 Fact-Check Corrections
**Priority:** CRITICAL
**Effort:** Small (30 minutes)
**Owner:** Author or Editor

**Task:** Apply 4 corrections from Fact-Checker report

| Location | Current | Correction |
|----------|---------|------------|
| Ch 1, lines 101-126 | "It takes 72 hours for neurochemistry to settle" | Add disclaimer: "a guideline rather than scientifically validated timeframe" |
| Ch 1, lines 138-169 | Frog boiling presented as fact | Add: "This popular analogy, though scientifically dubious, captures..." |
| Ch 1, lines 444-445 | "— Gloria Steinem" | Change to: "— commonly attributed to Gloria Steinem" |
| Ch 1, lines 59-81 | "ancient fable" | Change to: "a fable famously attributed to Aesop" or remove "ancient" |

**Verification:** All four factual claims corrected or qualified

---

## Phase 2: High Priority Fixes (Should Complete)

**Timeline:** Before publication
**Dependencies:** Can run parallel to Phase 1

### 2.1 Crisis Reading Path Revision
**Priority:** HIGH
**Effort:** Small (30 minutes)
**Owner:** Author

**Task:** Restructure crisis reading path with emergency resources first

**Location:** Front matter reading paths section

**Current Order:**
1. (some other path)
2. (something else)
3. Crisis resources

**Revised Order:**
```markdown
### If You're in Crisis

1. **Emergency Resources** (Appendix A) — Call now if you're in danger
2. Chapter 15: Practical Responses — Scripts for immediate use
3. Chapter 2: Energetic Signature — Recognize what your body knows
4. Chapter 14: Energetic Remapping — Ground yourself
```

---

### 2.2 Glossary Voice Conversion
**Priority:** HIGH
**Effort:** Medium (1-2 hours)
**Owner:** Line Editor

**Task:** Convert glossary definitions to second-person active voice

**Location:** `appendices/appendix-b-glossary.md`

**Pattern:**
- Current: "The phenomenon where victims of abuse forget..."
- Revised: "When you forget or minimize past abusive incidents..."

**Steps:**
1. Review all 80+ definitions
2. Convert passive third-person to active second-person
3. Maintain accuracy while adding warmth
4. Preserve technical clarity

---

### 2.3 Front Matter Statement Revision
**Priority:** HIGH
**Effort:** Small (15 minutes)
**Owner:** Author

**Task:** Revise potentially harmful statement

**Location:** Front matter, approximately line 73

**Current:** "You don't need a therapist to validate..."

**Revised:** "You have the right to trust what your body knows, even while seeking professional support"

---

### 2.4 Chapter 6 Healing Closure
**Priority:** HIGH
**Effort:** Medium (1 hour)
**Owner:** Author

**Task:** Add healing/liberation section at chapter end

**Issue:** Chapter 6 (Family Roles & Triangulation) ends abruptly without the healing framing present in other family chapters.

**Add section at end:**
```markdown
## The Liberation

Whatever role you played in your family system, you are not that role. You learned to
survive in a structure that wasn't built for your thriving. The role was a costume,
not your skin.

You can:
- Name the role without being defined by it
- Recognize the survival wisdom it contained
- Choose how you show up now—not from conditioning, but from consciousness

The family system assigned you a part. You're allowed to rewrite the script.
```

---

### 2.5 Chapter 3 Breathing Room
**Priority:** HIGH
**Effort:** Medium (1 hour)
**Owner:** Author or Editor

**Task:** Add pause points throughout 38 tactics

**Options:**
- Option A: Add grounding exercise after every 10-12 tactics
- Option B: Split chapter into two (Tactics 1-19, Tactics 20-38)
- Option C: Add section breaks with reflection prompts

**Recommended (Option A):**
After Tactic 12:
```markdown
---

### Pause Point

If you're feeling activated reading these, that's your body recognizing patterns.
Take a moment:
- Three slow breaths (exhale longer than inhale)
- Feel your feet on the ground
- Remember: You're reading about the past. You're safe now.

When you're ready, continue.

---
```

---

### 2.6 Bibliography Update
**Priority:** HIGH
**Effort:** Medium (1-2 hours)
**Owner:** Author

**Task:** Update Appendix C with recent and diverse sources

**Steps:**
1. Add "Recent Research (2020-2025)" section
2. Add diverse authors:
   - Resmaa Menakem (trauma and race)
   - Kenneth Hardy (cultural context)
   - Thema Bryant (trauma-informed leadership)
3. Create tiered system: Essential / Helpful / Advanced
4. Add publication dates to older works

---

## Phase 3: Enhancement Items (Optional Polish)

**Timeline:** If time permits before publication
**Dependencies:** Phases 1-2 complete

| # | Item | Effort | Owner |
|---|------|--------|-------|
| 3.1 | Convert 25+ "we" to "you" (first-person plural) | Medium | Editor |
| 3.2 | Activate 45 passive voice instances | Medium | Editor |
| 3.3 | Fix 15 lists with parallelism issues | Medium | Editor |
| 3.4 | Vary repetitive sentence starters | Small | Editor |
| 3.5 | Consolidate Gray Rock to Chapter 15 | Medium | Author |
| 3.6 | Add chapter transition paragraphs | Medium | Author |
| 3.7 | Add "Pause and Integrate" pages between parts | Medium | Author |
| 3.8 | Expand Chapter 9 healthy romance section | Medium | Author |
| 3.9 | Break long red flag lists into sublists | Small | Editor |
| 3.10 | Move 90-Day Protocol to Appendix A | Small | Author |
| 3.11 | Standardize hyphenation | Small | Editor |
| 3.12 | Remove CAPS emphasis, emoji | Small | Editor |
| 3.13 | Reduce About Author to ~60 lines | Medium | Author |
| 3.14 | Create Table of Contents | Medium | Editor |
| 3.15 | Add copyright page | Small | Author |
| 3.16 | Consider creating index | Large | Editor |
| 3.17 | Add "Last Updated" to Appendix A | Small | Author |
| 3.18 | Add recovery timeline disclaimer | Small | Author |

---

## Phase 4: Structural Decisions (Author Required)

**Timeline:** Before finalizing
**Dependencies:** Author availability for decisions

### Decision 1: Chapter 18 Placement

**Question:** Should Chapter 18 (Childhood Patterns) move to Part II?

**Option A: Move to Part II (after Chapter 8)**
- Pros: Better logical flow (understanding → tools → recovery)
- Cons: Significant renumbering, cross-reference updates
- Effort: Large

**Option B: Keep Current, Strengthen Transitions**
- Pros: Less disruption
- Cons: Explanatory content after closure feels anticlimactic
- Effort: Small

**Recommendation:** Option A if timeline permits; Option B for faster publication

---

### Decision 2: Chapter 5 Split

**Question:** Should Chapter 5 split into Types and Roles chapters?

**Option A: Split into two chapters**
- Pros: Reduces cognitive overload, clearer focus
- Cons: Renumbers all subsequent chapters
- Effort: Large

**Option B: Keep combined, add navigation**
- Pros: Less disruption
- Cons: Reader fatigue remains
- Effort: Small

**Recommendation:** Option B for initial publication; Option A for second edition

---

### Decision 3: Chapter 17 Triage

**Question:** How to address exposure questions' different purpose?

**Option A: Move to Part II as diagnostic tool**
- Pros: Better workflow alignment
- Cons: Major restructuring

**Option B: Add triage guidance at chapter start**
- Pros: Minimal changes, clear purpose
- Cons: Doesn't solve structural tension

**Recommendation:** Option B — add clear triage guidance

---

## Workflow Summary

```
PHASE 1: CRITICAL (Must Do)
├── 1.1 Gender pronouns (Ch 3)
├── 1.2 Content warnings (Ch 3, 17, 18)
├── 1.3 Voice break fix (Ch 18)
├── 1.4 Voice break fix (Ch 16)
├── 1.5 Cross-reference audit
└── 1.6 Fact-check corrections
    ⬇️
PHASE 2: HIGH PRIORITY (Should Do)
├── 2.1 Crisis reading path
├── 2.2 Glossary voice
├── 2.3 Front matter statement
├── 2.4 Chapter 6 closure
├── 2.5 Chapter 3 breathing room
└── 2.6 Bibliography update
    ⬇️
PHASE 3: ENHANCEMENT (Optional)
├── 18 polish items
└── (if timeline permits)
    ⬇️
PHASE 4: STRUCTURAL DECISIONS
├── Decision 1: Ch 18 placement
├── Decision 2: Ch 5 split
└── Decision 3: Ch 17 triage
    ⬇️
FINAL: Publication Preparation
├── Final proofread
├── Format for publication
└── Release
```

---

## Metrics for Success

### Phase 1 Complete When:
- [ ] Zero masculine pronouns in Chapter 3 pull quotes
- [ ] Content warnings present before all graphic sections
- [ ] Entire Chapter 18 in second-person voice
- [ ] Chapter 16 sovereignty statement framed as aspirational
- [ ] All chapter number references verified accurate
- [ ] Four factual claims corrected or qualified

### Phase 2 Complete When:
- [ ] Crisis reading path leads with emergency resources
- [ ] Glossary definitions in second-person active voice
- [ ] Front matter statement revised
- [ ] Chapter 6 has healing/liberation section
- [ ] Chapter 3 has pause points
- [ ] Bibliography includes 2020-2025 sources and diverse authors

### Publication Ready When:
- [ ] All Phase 1 items complete
- [ ] All Phase 2 items complete (or explicitly deferred)
- [ ] Author decisions made on structural items
- [ ] Final proofread complete
- [ ] Beta reader verification (optional)

---

*Action Plan generated from Managing Editor Round 2 Review*
*December 31, 2025*
