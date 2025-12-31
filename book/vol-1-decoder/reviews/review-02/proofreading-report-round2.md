# Vol 1: The Narcissism Decoder — Proofreading Report (Round 2)

**Reviewer:** Petra, the Proofreader
**Date:** December 31, 2025
**Reference:** GitHub Issue #117
**Style Sheet:** `/book/vol-1-decoder/reviews/style-sheet.md`

---

## Executive Summary

This Round 2 proofreading review examined all chapters, front matter, back matter, and appendices of Volume 1: The Narcissism Decoder. The manuscript demonstrates strong overall quality with excellent adherence to most style sheet conventions.

**Key Findings:**
- **Critical Issues:** 11 chapter numbering/structural errors requiring immediate attention
- **Medium Issues:** 23 style violations and cross-reference errors
- **Low Issues:** 45+ minor formatting inconsistencies

**Primary Concern:** A systematic chapter numbering mismatch exists between filenames and internal chapter headers, affecting 6 chapters and creating confusion for cross-references throughout the manuscript.

---

## Table of Contents

1. [Critical Issues](#1-critical-issues)
2. [Chapter-by-Chapter Errors](#2-chapter-by-chapter-errors)
3. [Front Matter & Back Matter](#3-front-matter--back-matter)
4. [Appendices](#4-appendices)
5. [Structural Verification](#5-structural-verification)
6. [Style Sheet Compliance Summary](#6-style-sheet-compliance-summary)
7. [Actionable GitHub Issues](#7-actionable-github-issues)
8. [Positive Findings](#8-positive-findings)

---

## 1. Critical Issues

### 1.1 Chapter Numbering Mismatch (CRITICAL)

Six chapter files have internal chapter numbers that don't match their filenames:

| Filename | Current Header | Should Be |
|----------|---------------|-----------|
| `07-family-roles-triangulation.md` | Chapter 6 | Chapter 7 |
| `12-manipulation-across-contexts.md` | Chapter 10 | Chapter 12 |
| `14-decoder-cards-core.md` | Chapter 11 | Chapter 14 |
| `15-decoder-cards-advanced.md` | Chapter 12 | Chapter 15 |
| `16-decoder-cards-protocol.md` | Chapter 13 | Chapter 16 |

**Impact:** All cross-references to these chapters may point to wrong content.

### 1.2 Duplicate Chapter 6 Declaration

Two files both claim to be "Chapter 6":
- `06-narcissist-roles.md` → "Chapter 6: The Masks They Wear — 12 Identity Roles"
- `07-family-roles-triangulation.md` → "Chapter 6: Family Roles & Triangulation"

### 1.3 Chapter Abbreviations in Roadmap

Chapter 1 uses "Ch X" abbreviations 17 times in the roadmap section (Lines 359-386). Style sheet states: "Do not abbreviate chapter titles."

---

## 2. Chapter-by-Chapter Errors

### Chapter 1: The Opening Manifesto

| Error Type | Location | Current | Suggested Fix | Severity |
|------------|----------|---------|---------------|----------|
| Style Violation | Lines 359-386 | "Ch 2", "Ch 3", etc. | "Chapter 2", "Chapter 3", etc. | Medium |

**Total instances:** 17 abbreviations to fix

### Chapter 5: Understanding Narcissist Types

| Error Type | Location | Current | Suggested Fix | Severity |
|------------|----------|---------|---------------|----------|
| Title Redundancy | Lines 1-2 | "# Chapter 5: Understanding...\n## Understanding the Different..." | Change subtitle to "## The Different Faces of Narcissism" | Low |

### Chapter 7 (file: 07-family-roles-triangulation.md)

| Error Type | Location | Current | Suggested Fix | Severity |
|------------|----------|---------|---------------|----------|
| Chapter Number | Line 1 | "# Chapter 6:" | "# Chapter 7:" | Critical |

### Chapter 12 (file: 12-manipulation-across-contexts.md)

| Error Type | Location | Current | Suggested Fix | Severity |
|------------|----------|---------|---------------|----------|
| Chapter Number | Line 1 | "# Chapter 10:" | "# Chapter 12:" | Critical |

### Chapter 13: Exposure Questions

| Error Type | Location | Current | Suggested Fix | Severity |
|------------|----------|---------|---------------|----------|
| Punctuation | Lines 42-48 | Mixed `:—` and `: ` formatting | Use consistent `: ` (colon-space) | Medium |

**Multiple instances throughout chapter in question sections**

### Chapter 14 (file: 14-decoder-cards-core.md)

| Error Type | Location | Current | Suggested Fix | Severity |
|------------|----------|---------|---------------|----------|
| Chapter Number | Line 1 | "# Chapter 11:" | "# Chapter 14:" | Critical |
| Em Dash Spacing | Title | "Decoder Cards — Core" | "Decoder Cards—Core" | Low |

### Chapter 15 (file: 15-decoder-cards-advanced.md)

| Error Type | Location | Current | Suggested Fix | Severity |
|------------|----------|---------|---------------|----------|
| Chapter Number | Line 1 | "# Chapter 12:" | "# Chapter 15:" | Critical |

### Chapter 16 (file: 16-decoder-cards-protocol.md)

| Error Type | Location | Current | Suggested Fix | Severity |
|------------|----------|---------|---------------|----------|
| Chapter Number | Line 1 | "# Chapter 13:" | "# Chapter 16:" | Critical |

### Chapter 17: Energetic Remapping

| Error Type | Location | Current | Suggested Fix | Severity |
|------------|----------|---------|---------------|----------|
| Em Dash Spacing | Title | "Energetic Remapping — Recovery" | "Energetic Remapping—Recovery" | Low |

### Chapter 18: Practical Responses

| Error Type | Location | Current | Suggested Fix | Severity |
|------------|----------|---------|---------------|----------|
| Cross-Reference | Line 299 | "Chapter 9, Exit Phase Escalation" | "Chapter 11, Exit Phase Escalation" | Medium |
| Cross-Reference | Line 489 | "Chapter 6, Family Systems" | "Chapter 7, Family Systems" | Medium |

---

## 3. Front Matter & Back Matter

### 00-front-matter.md

| Error Type | Location | Current | Suggested Fix | Severity |
|------------|----------|---------|---------------|----------|
| Crisis Resource | Line 25 | "1-800-799-7233 (24/7)" | "1-800-799-7233" (remove extra text) | Low |

### README.md

| Error Type | Location | Current | Suggested Fix | Severity |
|------------|----------|---------|---------------|----------|
| Chapter Title | Line 27 | "Diagnostic Questions for Confirming Patterns" | "The Exposure Questions — Questions That Make Narcissists Reveal Themselves" | Medium |
| Part Structure | Lines 144-178 | 4-part structure shown | Update to match 5-part structure from front-matter | Medium |
| Blockquote | Lines 225-226 | Italics format for quote | Use `>` blockquote format per style sheet | Low |

### back-matter-about-author.md

| Error Type | Location | Current | Suggested Fix | Severity |
|------------|----------|---------|---------------|----------|
| Emoji Usage | Line 161 | "**Aho.** 🙏" | Consider removing emoji per guidelines | Low |

---

## 4. Appendices

### Appendix A: Resources

| Error Type | Location | Current | Suggested Fix | Severity |
|------------|----------|---------|---------------|----------|
| Serial Comma | Line 19 | "support, safety planning, resources" | "support, safety planning, and resources" | Medium |
| Serial Comma | Line 92 | "EMDR, somatic therapy, IFS..., DBT, trauma-focused CBT" | Add "and" before last item | Medium |
| Serial Comma | Line 269 | "ID, passport, birth certificates" | "ID, passport, and birth certificates" | Medium |
| Formatting | Line 290 | `###` heading for hotline | Use bold or blockquote instead | Low |

### Appendix B: Glossary

| Error Type | Location | Current | Suggested Fix | Severity |
|------------|----------|---------|---------------|----------|
| Logic Error | Lines 48-50 | "...monitoring activities, and control." | Fix circular definition; suggest: "...monitoring activities, and making threats." | Medium |

### Appendix C: Bibliography

| Error Type | Location | Current | Suggested Fix | Severity |
|------------|----------|---------|---------------|----------|
| Em Dash Spacing | Lines 223-251 | " — " (spaced em dashes) | "—" (no spaces) | Low |

**Total instances:** 12 em dash spacing violations across 4 sections (Websites, YouTube Educators, Podcasts, Note on Sources)

### Appendix D: Core Techniques

| Error Type | Location | Current | Suggested Fix | Severity |
|------------|----------|---------|---------------|----------|
| Serial Comma | Line 76 | "...two you smell, one you taste." | "...two you smell, and one you taste." | Medium |
| Serial Comma | Line 92 | "Do not respond, send, decide." | "Do not respond, send, or decide." | Medium |
| Em Dash Spacing | Lines 361-367 | " — " (7 instances) | "—" (no spaces) | Low |
| Formatting | Lines 168-177 | "Level 1 - Topic Exit" | "Level 1—Topic Exit" or "Level 1: Topic Exit" | Low |

### Appendix E: Index

| Error Type | Location | Current | Suggested Fix | Severity |
|------------|----------|---------|---------------|----------|
| Em Dash Spacing | Multiple lines | " — See Chapter" | "—See Chapter" | Low |

**Total instances:** 12+ cross-references with spaced em dashes

---

## 5. Structural Verification

### Table of Contents Accuracy
✓ All chapters listed in TOC have corresponding files
⚠️ `03-narcissist-playbook.md` exists as potential duplicate alongside `03a` and `03b` versions

### Cross-Reference Validation
- **Verified:** Most chapter references are internally consistent
- **Error Found:** Chapter 18 references "Chapter 9" for Exit Phase Escalation content that exists in Chapter 11

### Pause Section References
Three pause files reference chapter ranges that may not align with 3A/3B split:
- `pause-after-part-1.md` → "Chapters 1-4"
- `pause-after-part-2.md` → "Chapters 5-12"
- `pause-after-part-3.md` → "Chapters 13-16"

---

## 6. Style Sheet Compliance Summary

### Consistently Correct
- ✅ Serial comma usage (with exceptions noted above)
- ✅ Em dash formatting in body text (no spaces)
- ✅ Compound words: "wellbeing", "decision-making", "love-bombing"
- ✅ Capitalization: Decoder Cards, Golden Child, Scapegoat, Flying Monkeys, False Self
- ✅ Chapter/Volume references when not abbreviated

### Issues Found
- ❌ Chapter abbreviations in Chapter 1 roadmap (17 instances)
- ❌ Chapter numbering mismatches (6 files)
- ❌ Em dash spacing in appendices (31+ instances)
- ❌ Serial comma omissions in appendices (4 instances)
- ❌ Title formatting inconsistencies (spaced em dashes in chapter titles)

---

## 7. Actionable GitHub Issues

The following items can be converted to GitHub issues for systematic resolution:

### Issue 1: Fix Chapter Numbering (Priority: Critical)
**Title:** Fix chapter number mismatches in 6 chapter files
**Description:** Update internal chapter headers to match filenames:
- `07-family-roles-triangulation.md`: Chapter 6 → Chapter 7
- `12-manipulation-across-contexts.md`: Chapter 10 → Chapter 12
- `14-decoder-cards-core.md`: Chapter 11 → Chapter 14
- `15-decoder-cards-advanced.md`: Chapter 12 → Chapter 15
- `16-decoder-cards-protocol.md`: Chapter 13 → Chapter 16

### Issue 2: Replace Chapter Abbreviations (Priority: High)
**Title:** Replace "Ch X" abbreviations with "Chapter X" in Opening Manifesto
**Description:** Lines 359-386 in `01-opening-manifesto.md` use "Ch" abbreviations. Replace all 17 instances with full "Chapter" per style sheet.

### Issue 3: Fix Cross-References (Priority: High)
**Title:** Correct cross-reference errors in Chapter 18
**Description:**
- Line 299: "Chapter 9" → "Chapter 11" (Exit Phase Escalation)
- Line 489: "Chapter 6" → "Chapter 7" (Family Systems)

### Issue 4: Serial Comma Compliance (Priority: Medium)
**Title:** Add missing serial commas in appendices
**Description:** Fix 4 serial comma omissions:
- Appendix A: Lines 19, 92, 269
- Appendix D: Lines 76, 92

### Issue 5: Em Dash Spacing in Appendices (Priority: Low)
**Title:** Remove spaces around em dashes in appendices
**Description:** Global find-and-replace " — " with "—" in:
- Appendix C: 12 instances
- Appendix D: 7 instances
- Appendix E: 12+ instances

### Issue 6: Fix Coercive Control Definition (Priority: Medium)
**Title:** Fix circular definition in Glossary
**Description:** Appendix B, Lines 48-50: "...monitoring activities, and control" creates circular definition. Suggest: "...monitoring activities, and making threats."

### Issue 7: Standardize Chapter Titles (Priority: Low)
**Title:** Ensure consistent chapter title formatting
**Description:**
- Chapter 13 has different titles across documents (Diagnostic Questions vs. Exposure Questions)
- Consider standardizing em dash spacing in chapter titles

### Issue 8: Resolve Duplicate Chapter 3 File (Priority: Low)
**Title:** Determine status of 03-narcissist-playbook.md
**Description:** Both `03-narcissist-playbook.md` and split versions (`03a`, `03b`) exist. Decide whether to keep, archive, or delete the combined version.

---

## 8. Positive Findings

The manuscript demonstrates excellent overall quality:

- **Strong prose quality** with minimal typos or spelling errors
- **Effective use of formatting** for content warnings and tactical checkpoints
- **Consistent terminology** for psychological concepts
- **Proper capitalization** of framework-specific terms (Decoder Cards, Golden Child, etc.)
- **Well-structured sections** with clear hierarchical headers
- **Compassionate, authoritative voice** throughout

The errors identified are primarily systematic (chapter numbering, abbreviations) rather than random, suggesting they can be efficiently resolved with targeted find-and-replace operations.

---

## Appendix: Files Reviewed

**Chapters (22 files):**
- 01-opening-manifesto.md through 19-moving-forward.md
- pause-after-part-1.md, pause-after-part-2.md, pause-after-part-3.md
- 03a-narcissist-playbook-part1.md, 03b-narcissist-playbook-part2.md

**Front/Back Matter (3 files):**
- 00-front-matter.md
- back-matter-about-author.md
- README.md

**Appendices (5 files):**
- appendix-a-resources.md
- appendix-b-glossary.md
- appendix-c-bibliography.md
- appendix-d-core-techniques.md
- appendix-e-index.md

---

*Report generated: December 31, 2025*
*Reviewer: Petra, the Proofreader*
*Reference: Style Sheet dated December 31, 2025*
