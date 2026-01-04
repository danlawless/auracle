#!/bin/bash
# Create Phase 2 GitHub Issues for Vol. 1 Book Reviewers
# Run this script after authenticating with: gh auth login

REPO="danlawless/auracle"

echo "Creating Phase 2 GitHub Issues for Vol. 1..."
echo ""

# ============================================
# BAILEY (Beta Reader) - 56 Questions
# ============================================
echo "Creating Bailey (Beta Reader) issue..."

gh issue create --repo "$REPO" \
  --title "[Review Round 3 - Phase 2] Bailey (Beta Reader): 56 Reader Experience Questions - Vol. 1" \
  --label "review-round-3,phase-2-content,author-input-required" \
  --body-file /dev/stdin << 'BAILEY_EOF'
## Overview

Hi! I'm Bailey, the Beta Reader. This is Phase 2 of Review Round 3 for Volume 1: The Narcissism Decoder.

**Why Phase 2 matters:** With structural decisions locked in Phase 1, we can now focus on reader experience—engagement, pacing, clarity, and emotional impact.

**Full review:** `book/vol-1-decoder/review-03/beta-reader-review.md`

---

## How to Respond

Check boxes for your decisions. Add reasoning in comments if helpful.

**Note:** Phase 2 reviewers (Bailey, Sage, Felix) run in parallel.

---

## Section A: Reader Engagement (Q1-Q5)

### Q1: Chapter 3 Tactics Overload (38 tactics in one chapter)

- [ ] A) Keep as-is — comprehensiveness is a feature
- [ ] B) Add more pause points every 8-10 tactics
- [ ] C) Split into two chapters
- [ ] D) Tier presentation — highlight "Core 12"
- [ ] E) Other

### Q2: Decoder Cards Fatigue (Cards 28-51 blur together)

- [ ] A) Keep all cards in main chapter
- [ ] B) Create "Core 20" vs "Advanced 32" division
- [ ] C) Move Category G to appendix
- [ ] D) Add visual differentiation
- [ ] E) Other

### Q3: Pause Points Throughout

- [ ] A) Add pause points every 2-3 chapters
- [ ] B) Add mid-chapter pauses
- [ ] C) Current frequency is intentional
- [ ] D) Make existing pauses more prominent
- [ ] E) Other

### Q4: Field Notes Distribution

- [ ] A) Add field notes to chapters that lack them
- [ ] B) Distribution is intentional
- [ ] C) Target 2-3 per chapter minimum
- [ ] D) Move some to appendix
- [ ] E) Other

### Q5: Repetition vs. Reinforcement

- [ ] A) Repetition is intentional reinforcement
- [ ] B) Add more cross-references instead
- [ ] C) Vary language when repeating
- [ ] D) Trust readers to remember
- [ ] E) Other

---

## Section B: Clarity (Q6-Q11)

### Q6: Cross-Reference Clarity

- [ ] A) Add brief context to references
- [ ] B) Keep minimal
- [ ] C) Create cross-reference index
- [ ] D) Inline more detail
- [ ] E) Other

### Q7: False Ideal Concept Timing

- [ ] A) Move earlier
- [ ] B) Keep current placement
- [ ] C) Introduce in Ch 1, expand in Ch 5
- [ ] D) Placement is strategic
- [ ] E) Other

### Q8: Triangulation Examples Clarity

- [ ] A) Add subheaders for each type
- [ ] B) Number examples
- [ ] C) Add visual markers
- [ ] D) Consolidate categories
- [ ] E) Other

### Q9: Mid-Level vs. Malignant Spectrum

- [ ] A) Add spectrum visual/chart
- [ ] B) Reference Ch 5 explicitly
- [ ] C) Create consistent terminology
- [ ] D) Keep separation
- [ ] E) Other

### Q10: Card 0 (Master Card) Positioning

- [ ] A) Move to Ch 1 opening
- [ ] B) Reference Card 0 in Ch 1
- [ ] C) Keep current placement
- [ ] D) Rename in Ch 1 intro
- [ ] E) Other

### Q11: Chapters 14-16 Consolidation

- [ ] A) Confirm consolidation, update references
- [ ] B) Restore three chapters
- [ ] C) Keep consolidated with internal divisions
- [ ] D) Create "Part" divisions
- [ ] E) Other

---

## Section C: Emotional Impact (Q12-Q17)

### Q12: Lost Child Role Development

- [ ] A) Expand section
- [ ] B) Intentional (mirrors invisibility)
- [ ] C) Add field note for Lost Child
- [ ] D) Acknowledge pattern in text
- [ ] E) Other

### Q13: Substance Cards (48-51) Emotional Grounding

- [ ] A) Add field notes
- [ ] B) Integrate testimony/example
- [ ] C) Clinical tone appropriate
- [ ] D) Move to appendix
- [ ] E) Other

### Q14: Recovery Success Stories

- [ ] A) Add 1-2 success stories
- [ ] B) Add "What Recovery Looks Like" section
- [ ] C) Reference Volume 2
- [ ] D) Keep tool-focused
- [ ] E) Other

### Q15: Sovereignty Statement Format

- [ ] A) Call-and-response
- [ ] B) Include recording link
- [ ] C) Add ritual instructions
- [ ] D) Keep as written
- [ ] E) Other

### Q16: Exit Phase Intensity ⚠️ HIGH

- [ ] A) Add pause BEFORE with warning
- [ ] B) Add pause AFTER with grounding
- [ ] C) Both before and after
- [ ] D) Trust readers
- [ ] E) Other

### Q17: Heavy Section Sequencing ⚠️ HIGH

- [ ] A) Move tools chapter earlier
- [ ] B) Add "Quick Tool" boxes
- [ ] C) Heavy sequencing intentional
- [ ] D) Add more pause files
- [ ] E) Other

---

## Section D: Pacing (Q18-Q22)

### Q18: Front Matter Length (296 lines)

- [ ] A) Trim significantly
- [ ] B) Move some to afterword
- [ ] C) Keep length
- [ ] D) Create "Quick Start"
- [ ] E) Other

### Q19: Chapter 3 Tactic Pacing

- [ ] A) Equalize treatment
- [ ] B) Variable by importance
- [ ] C) Add "Deep Dive" appendix
- [ ] D) Current variation natural
- [ ] E) Other

### Q20: Part I Recognition Density

- [ ] A) Move "why" content earlier
- [ ] B) Current pacing intentional
- [ ] C) Add "Why This Happens" teaser
- [ ] D) Create theory-first path
- [ ] E) Other

### Q21: Decoder Cards Length (1,784 lines)

- [ ] A) Keep in book
- [ ] B) Create companion PDF
- [ ] C) Split into chapters
- [ ] D) Create online version
- [ ] E) Other

### Q22: Recovery Tools Placement ⚠️ HIGH

- [ ] A) Add "Emergency Grounding" early
- [ ] B) Add "First Aid" boxes
- [ ] C) Keep current structure
- [ ] D) Front matter sufficient
- [ ] E) Other

---

## Section E: Target Audience (Q23-Q28)

### Q23: Assumed Prior Knowledge

- [ ] A) Chapter 1 sufficient
- [ ] B) Add diagnostic content early
- [ ] C) Create entry point for uncertain readers
- [ ] D) Expand "How to Use"
- [ ] E) Other

### Q24: Crisis vs. Recovery Separation

- [ ] A) Add explicit labels
- [ ] B) Create separate paths
- [ ] C) Mixing intentional
- [ ] D) Add visual markers
- [ ] E) Other

### Q25: Helper Audience

- [ ] A) Add "For Helpers" appendix
- [ ] B) Add helper notes in chapters
- [ ] C) Create companion guide
- [ ] D) Keep survivor-focused
- [ ] E) Other

### Q26: Reading Level

- [ ] A) Keep clinical language
- [ ] B) Add glossary with simpler definitions
- [ ] C) Simplify main text
- [ ] D) Create "Plain Language" summary
- [ ] E) Other

### Q27: Cultural Specificity

- [ ] A) Add cultural adaptation notes
- [ ] B) Create dedicated section
- [ ] C) Acknowledge Western perspective
- [ ] D) Current acknowledgment sufficient
- [ ] E) Other

### Q28: Gender in Examples

- [ ] A) Integrate diverse examples throughout
- [ ] B) Expand LGBTQ+ section
- [ ] C) Add gender-diverse field notes
- [ ] D) Current approach intentional
- [ ] E) Other

---

## Section F: Structure (Q29-Q32)

### Q29: Chapter 3A/3B Split

- [ ] A) Using combined
- [ ] B) Using split
- [ ] C) Both for formats
- [ ] D) Need to decide
- [ ] E) Other

### Q30: Missing Appendices (D, E)

- [ ] A) Complete
- [ ] B) In development
- [ ] C) Removed
- [ ] D) Will add before publication
- [ ] E) Other

### Q31: Course Integration

- [ ] A) Book stands alone
- [ ] B) Designed together
- [ ] C) Course expands book
- [ ] D) Course is legacy
- [ ] E) Other

### Q32: Vignettes Folder

- [ ] A) Integrated as field notes
- [ ] B) Will be placed
- [ ] C) Cut
- [ ] D) Supplementary
- [ ] E) Other

---

## Section G: Concepts (Q33-Q36)

### Q33: 72-Hour vs. 24-Hour Rule

- [ ] A) Different tools, clarify
- [ ] B) Same tool, standardize
- [ ] C) 72 for major, 24 for daily
- [ ] D) Remove one
- [ ] E) Other

### Q34: Pause Files in TOC

- [ ] A) Add as "Interludes"
- [ ] B) Integrate into chapter endings
- [ ] C) Keep separate with cues
- [ ] D) Current structure intentional
- [ ] E) Other

### Q35: Chapter 16 Reference

- [ ] A) Consolidated, update refs
- [ ] B) Exists separately
- [ ] C) Legacy, remove
- [ ] D) Will restore
- [ ] E) Other

### Q36: Vignettes Usage

- [ ] A) Integrated
- [ ] B) Will place
- [ ] C) Cut
- [ ] D) Bonus
- [ ] E) Other

---

## Section H: Tone (Q37-Q39)

### Q37: Second Person "You"

- [ ] A) Soften confrontational
- [ ] B) Keep direct
- [ ] C) Mix approaches
- [ ] D) Add permission statements
- [ ] E) Other

### Q38: Absolutist Language

- [ ] A) Add nuance
- [ ] B) Keep absolute
- [ ] C) Add caveat section
- [ ] D) Trust reader judgment
- [ ] E) Other

### Q39: Hope vs. Realism

- [ ] A) Add recovery glimpses throughout
- [ ] B) Keep hope concentrated later
- [ ] C) Add "light" callouts
- [ ] D) Current balance intentional
- [ ] E) Other

---

## Summary

**Total: 56 Questions**
- High Priority: Q1-Q5, Q16-Q17, Q22

---

**This book will help thousands.** Thank you for writing it. 💚

— Bailey, Beta Reader
BAILEY_EOF

BAILEY_URL=$?
echo "Bailey issue created: $BAILEY_URL"
echo ""

# ============================================
# SAGE (Sensitivity Reader) - 18 Questions
# ============================================
echo "Creating Sage (Sensitivity Reader) issue..."

gh issue create --repo "$REPO" \
  --title "[Review Round 3 - Phase 2] Sage (Sensitivity Reader): 18 Representation Questions - Vol. 1" \
  --label "review-round-3,phase-2-content,author-input-required,sensitivity" \
  --body-file /dev/stdin << 'SAGE_EOF'
## Overview

Hi! I'm Sage, the Sensitivity Reader (The Witness). This is Phase 2 of Review Round 3 for Volume 1: The Narcissism Decoder.

**My role:** Ensure authentic, respectful representation of marginalized identities, cultures, and experiences.

**Full review:** `book/vol-1-decoder/review-03/sensitivity-reader-review.md`

---

## How to Respond

Check boxes for decisions. These are invitations to reflect—you don't need to answer every question.

**Note:** Phase 2 reviewers run in parallel.

---

## Category 1: Survivor Representation (Q1-Q3)

### Q1: Body Awareness and Trauma Responses

"When body and mind disagree, default to the body" — but some survivors are disconnected from body signals.

- [ ] A) Add caveat for dissociation
- [ ] B) Add section on rebuilding body trust
- [ ] C) Soften absolute language
- [ ] D) Current framing serves most
- [ ] E) Other

### Q2: "Too Sensitive" and Neurodivergence

Some neurodivergent readers called "too sensitive" about sensory issues unrelated to manipulation.

- [ ] A) Add neurodivergence acknowledgment
- [ ] B) Add overlap section
- [ ] C) Keep current framing
- [ ] D) Reference ND-specific resources
- [ ] E) Other

### Q3: "Leaving" as Default Solution

Some readers cannot leave (disability, immigration, economics, cultural consequences, being a minor).

- [ ] A) Add "Surviving While Staying" section
- [ ] B) Expand barrier strategies
- [ ] C) Current acknowledgment sufficient
- [ ] D) Reference specialized resources
- [ ] E) Other

---

## Category 2: Mental Health Terminology (Q4-Q6)

### Q4: "Narcissist" Terminology and NPD Stigma

Does using "narcissist" as shorthand stigmatize people with NPD in treatment?

- [ ] A) Add note distinguishing patterns from diagnosis
- [ ] B) Acknowledge NPD treatment possibility
- [ ] C) Keep current (serves survivors)
- [ ] D) Soften villain archetype
- [ ] E) Other

### Q5: "Lack of Empathy" and Autism

"Lack of empathy" language can conflate autism with harmful intent.

- [ ] A) Reframe as "lack of empathic care"
- [ ] B) Add note distinguishing from autism
- [ ] C) Use "instrumental empathy"
- [ ] D) Current context clear
- [ ] E) Other

### Q6: Depression and Childhood

"Children become depressed when their environment is depressing" — could imply depression is always environmental.

- [ ] A) Add biological acknowledgment
- [ ] B) Soften to "often"
- [ ] C) Keep as-is (context is trauma)
- [ ] D) Add caveat in footnote
- [ ] E) Other

---

## Category 3: Gender & Power (Q7-Q9)

### Q7: "Mother/Father Wound" Structure

Chapter 8 separates wounds with distinct characteristics. Does this reinforce gender stereotypes?

- [ ] A) Reframe as "Caregiver Role A/B"
- [ ] B) Keep terms, add role note
- [ ] C) Add cross-gender examples
- [ ] D) Current framing sufficient
- [ ] E) Other

### Q8: Default Gender in Examples

Heterosexual dynamics dominate examples (he perpetrator, she victim).

- [ ] A) Add diverse examples throughout
- [ ] B) Each chapter has one non-hetero example
- [ ] C) Create note about example choices
- [ ] D) Current variety sufficient
- [ ] E) Other

### Q9: Field Note Gender Dynamics

"Makeup Sex Trophy" uses heterosexual scenario. How do dynamics differ across gender configurations?

- [ ] A) Add parallel field notes
- [ ] B) Keep note, add dynamics note
- [ ] C) Current serves majority
- [ ] D) Reference in chapter text
- [ ] E) Other

---

## Category 4: Cultural Considerations (Q10-Q12)

### Q10: "No Contact" and Collectivist Cultures ⚠️ HIGH

For many cultures, estrangement = loss of community, social death, severe stigma.

- [ ] A) Add "Boundaries While Maintaining Contact"
- [ ] B) Expand low-contact options
- [ ] C) Add cultural appendix
- [ ] D) Acknowledge limitation
- [ ] E) Other

### Q11: Communication Norms

Some "narcissistic" behaviors (indirectness, saving face) are cultural norms elsewhere.

- [ ] A) Add cultural context section
- [ ] B) Add caveat about context
- [ ] C) Focus on impact and intent
- [ ] D) Trust readers to apply context
- [ ] E) Other

### Q12: Family Roles and Culture

Scapegoat/Golden Child may overlap with cultural structures (eldest responsibilities, parental authority).

- [ ] A) Add differentiation criteria
- [ ] B) Focus on harm, not structure
- [ ] C) Add cultural examples
- [ ] D) Acknowledge Western lens
- [ ] E) Other

---

## Category 5: Trauma-Informed (Q13-Q14)

### Q13: Safety Warning Placement ⚠️ CRITICAL

Warnings for dangerous content appear mid-chapter. Crisis readers may not see them first.

- [ ] A) Move warnings to line 1
- [ ] B) Add visual markers (icons)
- [ ] C) Add "skip to Appendix A" note
- [ ] D) Current placement balances concerns
- [ ] E) Other

### Q14: "The Testimony" Field Note ⚠️ CRITICAL

Child coached to testify against father — "parental alienation" is contested and weaponized.

- [ ] A) Add context about complexity
- [ ] B) Balance with opposite perspective
- [ ] C) Keep as-is
- [ ] D) Add note about weaponization
- [ ] E) Other

---

## Category 6: Intersectionality (Q15-Q17)

### Q15: Economic Privilege in Author Bio ⚠️ HIGH

Global healing journey through multiple countries may create "healing = expensive" association.

- [ ] A) Add privilege acknowledgment
- [ ] B) Condense bio to credentials
- [ ] C) Add accessibility note
- [ ] D) Appendix A provides balance
- [ ] E) Other

### Q16: Race and Intersectionality

Race isn't discussed (racialized gaslighting, stereotypes, police as unsafe resource for BIPOC).

- [ ] A) Add intersection section
- [ ] B) Acknowledge what's not covered
- [ ] C) Add BIPOC resources
- [ ] D) Outside scope
- [ ] E) Other

### Q17: Somatic Practices Accessibility ⚠️ HIGH

Body-based techniques assume typical ability (mobility, no chronic pain, no dissociation).

- [ ] A) Add adaptation notes within techniques
- [ ] B) Create accessibility appendix
- [ ] C) Rewrite in universally accessible language
- [ ] D) Add general adaptation note
- [ ] E) Other

---

## Category 7: Consequences (Q18)

### Q18: Weaponization Potential

Abusers might use this book to accuse victims of being the narcissist or learn tactics.

- [ ] A) Add note about risk and recognition
- [ ] B) Add "when language is used against you"
- [ ] C) Trust survivors to recognize
- [ ] D) Include in discernment chapter
- [ ] E) Other

---

## Summary

**Total: 18 Questions**

| Priority | Questions |
|----------|-----------|
| Critical | Q13, Q14 |
| High | Q10, Q15, Q17 |
| Reflection | Q1-Q9, Q11-Q12, Q16, Q18 |

---

## What's Working Beautifully ✨

- Survivor-centered agency (never victim-blames)
- Trauma-informed throughout
- Body-based wisdom centered
- Practical tools with scripts
- Safety resources prominent
- Permission-giving tone

---

These questions are invitations to consider who might not see themselves. Thank you for your commitment to multiple review rounds. 💚

— Sage, Sensitivity Reader
SAGE_EOF

echo "Sage issue created"
echo ""

# ============================================
# FELIX (Fact-Checker) - 6 Questions
# ============================================
echo "Creating Felix (Fact-Checker) issue..."

gh issue create --repo "$REPO" \
  --title "[Review Round 3 - Phase 2] Felix (Fact-Checker): 6 Verification Questions - Vol. 1" \
  --label "review-round-3,phase-2-content,author-input-required,fact-check" \
  --body-file /dev/stdin << 'FELIX_EOF'
## Overview

Hi! I'm Felix, the Fact-Checker. This is Phase 2 of Review Round 3 for Volume 1: The Narcissism Decoder.

**My role:** Verify claims, sources, and accuracy.

**Full review:** `book/vol-1-decoder/review-03/fact-checker-review.md`

---

## Overall Assessment: STRONG ✅

Most Round 1-2 issues resolved. Remaining items are minor.

---

## Required Corrections (Can Proceed Without Author Input)

### Gloria Steinem Quote — 2 Locations

**README.md, line 227** and **course/00-curriculum.md, line 181**

Change: `— Gloria Steinem` → `— commonly attributed to Gloria Steinem`

(Chapter 1 was already corrected)

---

## Questions Requiring Author Input

### Q1: Winnicott "False Self" Citation

**Location:** Chapter 5, line 49

> "Psychoanalyst Donald Winnicott called this the **False Self**..."

Can you provide the specific publication for Appendix C bibliography?

**Suggested:**
- Winnicott, D. W. (1960). "Ego Distortion in Terms of True and False Self"

- [ ] A) Use suggested citation
- [ ] B) Provide alternative: ___
- [ ] C) Remove specific attribution
- [ ] D) Other

---

### Q2: "80% Effectiveness" Statistic ⚠️ HIGH PRIORITY

**Location:** Chapter 3, line 23

> "Preemptive awareness reduces their effectiveness by 80%."

What is the source?

- [ ] A) Published research — citation: ___
- [ ] B) Reframe: "In clinical experience, significantly reduces..."
- [ ] C) Reframe: "Many practitioners find substantially reduces..."
- [ ] D) Soften: "can reduce substantially"
- [ ] E) Remove percentage

---

### Q3: International Hotlines Verification

**Location:** Appendix A (20+ countries)

Have all been individually verified?

- [ ] A) All verified
- [ ] B) Add disclaimer: "Numbers current as of [date]"
- [ ] C) Request verification assistance for: ___
- [ ] D) Remove unverified
- [ ] E) Other

---

### Q4: Bibliography Completeness

Are there sources informing the manuscript not yet in Appendix C?

- [ ] A) Complete
- [ ] B) Will add: ___
- [ ] C) Request gap review
- [ ] D) Other

---

### Q5: Winnicott Designation

"Psychoanalyst Donald Winnicott" — he was also pediatrician/psychiatrist.

- [ ] A) Keep "psychoanalyst"
- [ ] B) "British pediatrician and psychoanalyst"
- [ ] C) "developmental psychologist"
- [ ] D) Other: ___

---

### Q6: Future Verification (Optional)

Would you like:

- [ ] A) Checklist for future editions
- [ ] B) Annual resource review protocol
- [ ] C) Statistical claims audit
- [ ] D) No additional assistance
- [ ] E) Other

---

## Previously Verified ✅

**Neuroscience:** Polyvagal theory, intermittent reinforcement, trauma bond neurochemistry

**Psychology:** HSP (Aron), fawn response (Walker), cognitive dissonance, attachment theory

**Practical:** 72-hour timeline (properly qualified), 3-3-3 Rule

**Cultural:** Wolf metaphor (corrected), gradual dimming (replaced frog)

**Resources:** US crisis hotlines, English-speaking international hotlines

---

## Summary

| Question | Priority |
|----------|----------|
| Gloria Steinem | Must fix (no input needed) |
| Q2: 80% statistic | High |
| Q1: Winnicott | Medium |
| Q3: Hotlines | Medium |
| Q4-Q6 | Low/Optional |

**Total: 6 Questions**

---

**Manuscript demonstrates strong factual accuracy.** These items are minor and quickly resolvable.

— Felix, Fact-Checker
FELIX_EOF

echo "Felix issue created"
echo ""

echo "============================================"
echo "All Phase 2 issues created successfully!"
echo "============================================"
echo ""
echo "Phase 2 reviewers can run in parallel:"
echo "- Bailey (Beta Reader): 56 questions"
echo "- Sage (Sensitivity Reader): 18 questions"
echo "- Felix (Fact-Checker): 6 questions"
echo ""
echo "Total Phase 2 Questions: 80"
