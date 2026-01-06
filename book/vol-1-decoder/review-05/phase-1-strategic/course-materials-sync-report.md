# Course Materials Sync Report - Round 5

**Date:** January 6, 2026
**Purpose:** Document discrepancies between book and course materials after Rounds 1-4 changes

---

## Critical Discrepancy: Decoder Card Count

### Current State

| Source | Stated Count | Actual |
|--------|-------------|--------|
| Book (Chapter 3) | 52 cards | ✅ Accurate |
| Course Curriculum | 38 tactics / 37 cards | ❌ Outdated |
| Lesson 4.1 | 37 cards (19 Core + 18 Advanced) | ❌ Outdated |
| Course Materials Downloads | "37 Decoder Cards (Printable)" | ❌ Outdated |

**Gap:** Book has **52 cards**, course references **37 cards** — a difference of **15 cards**.

---

## Files Requiring Updates

### 1. `/course/00-curriculum.md`

**Line 14:**
```markdown
- Current: "decode 38 tactics of control"
- Should be: "decode 52 tactics of control"
```

**Line 92 (Module 4 header):**
```markdown
- Current: "Master 37 decoder cards"
- Should be: "Master 52 decoder cards"
```

**Line 122 (Downloads section):**
```markdown
- Current: "37 Decoder Cards (Printable)"
- Should be: "52 Decoder Cards (Printable)"
```

### 2. `/course/lessons/4-1-decoder-intro.md`

**Line 28:**
```markdown
- Current: "37 cards across two sets"
- Should be: "52 cards across two sets"
```

**Lines 60-62 (Card set breakdown):**
```markdown
- Current: "Core Cards (19 cards)" / "Advanced Cards (18 cards)"
- Should be: "Core Cards (28 cards)" / "Advanced Cards (24 cards)"
```

**Line 123:**
```markdown
- Current: "all 37 cards"
- Should be: "all 52 cards"
```

**Lines 164-165 (Key Concepts):**
```markdown
- Current: "Core Cards (19) for daily patterns; Advanced Cards (18) for sophisticated tactics"
- Should be: "Core Cards (28) for daily patterns; Advanced Cards (24) for sophisticated tactics"
```

### 3. Likely Additional Files Needing Review

| File | Likely Issues |
|------|---------------|
| `/course/lessons/4-2-core-cards-1.md` | Card coverage, counts |
| `/course/lessons/4-3-core-cards-2.md` | Card coverage, counts |
| `/course/lessons/4-4-advanced-cards.md` | Card coverage, counts |
| `/course/lessons/4-5-decoder-protocol.md` | References to card count |

---

## Structural Changes Since Course Creation

### Book Evolution (Rounds 1-4)

1. **Consolidated Decoder Playbook created** (Chapter 3)
   - Merged previously separate card sections
   - Expanded card count from ~37 to 52
   - Reorganized into 8 categories

2. **Card Categories in Book**

| Category | Card Range | Count |
|----------|------------|-------|
| Master | 0 | 1 |
| Control & Power-Shift | 1-10 | 10 |
| Validation & Devaluation | 11-15 | 5 |
| Psychological Manipulation | 16-21 | 6 |
| Sexual & Emotional Control | 22-25 | 4 |
| Energetic & Spiritual | 26-27 | 2 |
| Complex Psychological | 28-31 | 4 |
| Post-Encounter | 32-37 | 6 |
| Relational Manipulation | 38-51 | 14 |
| **Total** | 0-51 | **52** |

### Course Structure (Original)

| Set | Count | Cards |
|-----|-------|-------|
| Core | 19 | Unknown (need to verify) |
| Advanced | 18 | Unknown (need to verify) |
| **Total** | **37** | - |

---

## Recommended Actions

### Immediate (Round 5 Scope)

1. **Update all card count references**
   - Change 37 → 52 throughout course materials
   - Update Core/Advanced split to 28/24

2. **Review lesson content alignment**
   - Verify lesson card coverage matches book cards
   - Identify which 15 new cards need lesson content

3. **Update downloads section**
   - Ensure printable card deck matches book
   - Update any card-related PDFs

### Medium-Term Considerations

1. **Lesson structure review**
   - Lessons 4.2 and 4.3 may need expansion
   - Lesson 4.4 may need significant updates for Advanced cards

2. **Duration adjustments**
   - More cards = potentially longer lessons
   - May need to add a lesson (4.3b or 4.4b)

3. **Card deck design**
   - Physical/printable deck needs redesign for 52 cards
   - Consider card categories matching book structure

---

## Content Alignment Verification Needed

The following needs detailed review to ensure course lessons teach the same cards as the book:

| Course Lesson | Purpose | Alignment Status |
|---------------|---------|------------------|
| 4.2 | Core Cards Part 1 | ⚠️ Needs review |
| 4.3 | Core Cards Part 2 | ⚠️ Needs review |
| 4.4 | Advanced Cards | ⚠️ Needs review |

**Task:** Read each lesson and verify card-by-card alignment with Chapter 3 Consolidated Playbook.

---

## Summary

**Primary Issue:** Card count discrepancy (37 → 52)

**Scope of Updates:**
- 4-6 files need direct edits
- Potential structural changes to Module 4
- Download materials need regeneration

**Priority:** HIGH — This affects course-book consistency and student experience

---

*Report generated: January 6, 2026*
*For: Review Round 5 Phase 1 Strategic Decisions*
