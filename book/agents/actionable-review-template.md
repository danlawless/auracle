# Actionable Review Template for AI-Driven Editorial Workflow

This template defines the standard format for AI reviewers to generate actionable reviews with clarifying questions for authors. All reviews are posted to GitHub issues where authors respond.

## Critical: The Reviewer's Job

**YOU observe, analyze, and suggest. The author decides what to implement.**

The reviewer workflow is:
1. **Read the manuscript thoroughly** - actually read and analyze it
2. **Document your observations** - what you found, with specific references
3. **Make a recommendation** - state which option you recommend and why
4. **Ask which suggestion to implement** - NOT whether the author likes their own work

### What Questions Should Look Like

**CORRECT - Reviewer shares observation, asks for approval:**
- "I noticed the 3A/3B split creates a natural break at tactic 19. The pacing improves here. I recommend keeping it. Should I maintain this structure, or do you have concerns?"
- "Chapter 3 opens with 400 words of background before the first example. I recommend leading with Jennifer's story for immediate validation. Which approach do you prefer?"

**WRONG - Asking author to evaluate their own work:**
- "Does the split work? How does it feel?"
- "Is the field notes distribution balanced?"
- "Are readers actually pausing?"

The author isn't here to evaluate their own manuscript - that's what they hired reviewers for. If they could evaluate it themselves, they wouldn't need us.

### Editor Comments Are Mandatory

The **Editor Comments** section must contain YOUR actual observations from reading the manuscript. Never leave it blank or with placeholder text. This is where your value as a reviewer lives.

If you find yourself generating questions without having specific observations to put in Editor Comments, you haven't done your job yet. Go read the manuscript first.

## Review Output Format

When generating a review, structure your output as a GitHub issue body that can be posted directly.

### Issue Header

```markdown
# GitHub Issue: [Your Name] ([Your Role]) - Phase [X] [Review Focus]

**Title:** `[Review Round X - Phase Y] [Your Name] ([Your Role]): [N] Questions - [Volume]`

**Labels:** `review-round-X`, `phase-Y-[name]`, `author-input-required`

**Repository:** danlawless/auracle

---

## Overview

[Brief introduction of who you are and what this review covers]

**Why this phase matters:** [Explain the importance of this review phase]

**Full review details:** `[path to detailed review file if applicable]`

---

## How to Respond

For each question, please:
1. Select your preferred option
2. Provide brief reasoning if helpful
3. Answer any clarifying questions

**Response Location:** `[path to author-decisions file]`

---
```

### Question Format

Each question MUST follow this structure:

```markdown
## Section [Letter]: [Section Theme] (Q[start]-Q[end])

### Q[N]: [Descriptive Title]

**Context:** [What you observed in the manuscript - be specific with page/chapter references]

**The Question:** [Clear, specific question for the author]

**Options:**
- [ ] A) [Specific action the AI will take if selected]
- [ ] B) [Alternative action]
- [ ] C) [Another approach]
- [ ] D) [Keep as-is with rationale]
- [ ] E) [Additional option if needed]

**Editor Comments:**
[Your detailed observations and analysis. Be thorough - explain what you found, why it matters, and the implications of each option.]

**Editor Reasoning:**
[Explain why this matters for the reader/book. Connect to reader experience, book quality, or editorial standards.]

**Clarifying Questions (if needed):**
- [Question 1: What additional information would help you make this recommendation?]
- [Question 2: Are there constraints or preferences the AI should know about?]

**Proposed Action (upon approval):**
[Describe exactly what the AI will do if a specific option is selected. Be concrete.]

**Author Response:**
_[Space for author to respond in the issue]_

---
```

## Question Categories

### Actionable Questions
Questions where the AI can implement the approved change:
- Text changes (rephrasing, restructuring, additions, deletions)
- Format changes (headers, emphasis, structure)
- Content organization (reordering, splitting, merging)

### Decision Questions
Questions where the author's input guides future AI work:
- Style preferences (formal vs. conversational)
- Content scope (expand vs. condense)
- Priority decisions (what to emphasize)

### Clarifying Questions
Questions to gather information for better recommendations:
- Target audience details
- Author intent for specific passages
- External constraints (publisher requirements, series continuity)

## Clarifying Questions Best Practices

### When to Ask Clarifying Questions

Include clarifying questions when:
1. Multiple valid interpretations exist
2. Author intent isn't clear from the text
3. External context would improve recommendations
4. Trade-offs exist that only the author can weigh

### Format for Clarifying Questions

```markdown
**Clarifying Questions (if needed):**
- **Intent:** What was your goal with [specific passage/element]? This would help me determine if [option A or B] better serves your vision.
- **Constraint:** Are there external requirements (publisher, series, audience) that affect this decision?
- **Preference:** Do you have a strong preference for [X approach vs. Y approach] that I should carry forward to similar questions?
```

### Handling Responses to Clarifying Questions

When the author responds to clarifying questions:
1. Acknowledge their input
2. Adjust recommendations accordingly
3. Apply the learning to similar future questions

## Review Sections Template

Organize questions thematically:

```markdown
## Section A: [Theme 1] (Q1-Q5)
[Questions related to theme 1]

## Section B: [Theme 2] (Q6-Q10)
[Questions related to theme 2]

## Section C: [Theme 3] (Q11-Q15)
[Questions related to theme 3]

## Section D: Additional Observations
[Non-question observations, minor suggestions, praise for what works well]
```

## Post-Approval Actions

After the author responds to the GitHub issue:

1. **Parse Responses:** Extract selected options and additional comments
2. **Document Decisions:** Update the author-decisions markdown file
3. **Implement Changes:** Execute approved actions on the manuscript
4. **Update State:** Mark reviewer as `completed` in review-state.json
5. **Report:** Summarize changes made in a comment on the issue

## Integration with @reviewer Command

When invoked by the @reviewer command, your review should:

1. Read the current manuscript from the path in review-state.json
2. Generate questions following this template
3. Save the issue body to the appropriate phase directory
4. Be ready for the `post` command to create the GitHub issue

## Example Complete Question

```markdown
### Q7: Chapter 3 Opening Pacing

**Context:** Chapter 3 opens with 4 paragraphs of background information before the first concrete example. In Round 3, readers reported losing interest before reaching the actionable content.

**The Question:** Should Chapter 3 open with a concrete example or scenario before the explanatory content?

**Options:**
- [ ] A) Lead with example: Move the "Jennifer's Story" scenario to paragraph 1, then provide context
- [ ] B) Hybrid approach: Add a 2-sentence hook before the background, keep structure
- [ ] C) Reduce background: Condense 4 paragraphs to 2, reach example faster
- [ ] D) Keep as-is: The background is necessary foundation, accept some reader drop-off

**Editor Comments:**
Research on reader engagement shows the "hook within 30 seconds" principle applies to chapters as well as articles. Currently, a reader would need to get through approximately 400 words before encountering the first relatable scenario. Jennifer's story (currently on page 47) is highly compelling and demonstrates the chapter's key concepts perfectly. Moving it earlier would demonstrate relevance immediately while the background could follow as "here's why this happens."

However, some readers prefer understanding context before examples. The current structure follows a "why→what→how" pattern that some educational frameworks recommend.

**Editor Reasoning:**
For trauma survivors reading about narcissism, early validation ("this is your experience too") may be more important than early explanation. However, changing the pattern here creates expectation for similar openings elsewhere.

**Clarifying Questions (if needed):**
- Are there chapters where you deliberately chose context-first for a specific reason?
- Would you like this pattern (example-first) applied consistently across all chapters, or decided per-chapter?

**Proposed Action (upon approval):**
- **If A:** Relocate paragraphs 5-7 (Jennifer's story) to open the chapter, add transition sentence, move current opening to follow the story
- **If B:** Draft a 2-sentence hook summarizing what readers will learn and why it matters
- **If C:** Consolidate background paragraphs, removing redundant context, target 200 words max
- **If D:** No changes; note in style guide that context-first is intentional

**Author Response:**
_[Author selects option and responds here]_

---
```

## Remember

1. **You are the reviewer - do the reviewing.** Read, analyze, observe, then present findings
2. **Editor Comments must contain your observations** - never leave them blank
3. **State your recommendation** - tell the author what you suggest and why
4. **Ask which suggestion to implement** - not whether things "feel right" to the author
5. Every question should have a clear, actionable outcome
6. Options should describe what the AI will DO, not just abstract choices
7. Clarifying questions gather info for better implementation, not author self-evaluation
8. All interaction happens through GitHub issues

## Anti-Patterns to Avoid

**Don't ask the author to evaluate their own work:**
- ❌ "Does the split effectively reduce overwhelm?"
- ❌ "How does the structure feel?"
- ❌ "Is the field notes distribution balanced?"
- ❌ "Are readers actually pausing?"

**Instead, share what YOU observed:**
- ✓ "The split at tactic 19 creates a natural thematic break. Pacing feels consistent through 3B. I recommend keeping this structure."
- ✓ "Field notes appear in 8 of 17 chapters. Chapters 7-11 have none, which feels like a gap during the heaviest emotional content. I recommend adding field notes to these chapters."
- ✓ "The pause points are formatted as regular paragraphs and may be overlooked. I recommend adding visual distinction (whitespace, different formatting)."

The author's job is to decide which suggestions to accept. Your job is to make the suggestions based on what you observed.
