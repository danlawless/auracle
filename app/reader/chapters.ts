export interface Chapter {
  slug: string;
  title: string;
  filename: string;
  type: 'front-matter' | 'chapter' | 'appendix' | 'back-matter';
}

export interface Volume {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  chapters: Chapter[];
}

export const volumes: Volume[] = [
  {
    id: 'vol-1-decoder',
    title: 'The Narcissism Decoder',
    subtitle: 'Control Disguised as Care',
    description: 'A guide to recognizing, understanding, and breaking free from manipulation patterns.',
    chapters: [
      { slug: 'front-matter', title: 'Front Matter', filename: '00-front-matter.md', type: 'front-matter' },
      { slug: 'opening-manifesto', title: 'The Opening Manifesto', filename: '01-opening-manifesto.md', type: 'chapter' },
      { slug: 'energetic-signature', title: 'The Energetic Signature', filename: '02-energetic-signature.md', type: 'chapter' },
      { slug: 'narcissist-playbook', title: 'The Narcissist Playbook', filename: '03-narcissist-playbook.md', type: 'chapter' },
      { slug: 'trauma-bonds', title: 'Trauma Bonds', filename: '04-trauma-bonds.md', type: 'chapter' },
      { slug: 'narcissist-archetypes', title: 'Narcissist Archetypes & Roles', filename: '05-narcissist-archetypes.md', type: 'chapter' },
      { slug: 'family-roles-triangulation', title: 'Family Roles & Triangulation', filename: '06-family-roles-triangulation.md', type: 'chapter' },
      { slug: 'parental-wounds', title: 'Parental Wounds', filename: '07-parental-wounds.md', type: 'chapter' },
      { slug: 'family-breaking-free', title: 'Breaking Free from Family Systems', filename: '08-family-breaking-free.md', type: 'chapter' },
      { slug: 'romantic-manipulation', title: 'Romantic Manipulation', filename: '09-romantic-manipulation.md', type: 'chapter' },
      { slug: 'manipulation-across-contexts', title: 'Manipulation Across Contexts', filename: '10-manipulation-across-contexts.md', type: 'chapter' },
      { slug: 'decoder-cards-core', title: 'Decoder Cards — Core Patterns', filename: '11-decoder-cards-core.md', type: 'chapter' },
      { slug: 'decoder-cards-advanced', title: 'Decoder Cards — Advanced Patterns', filename: '12-decoder-cards-advanced.md', type: 'chapter' },
      { slug: 'decoder-cards-protocol', title: 'Decoder Cards — Emergency Protocol', filename: '13-decoder-cards-protocol.md', type: 'chapter' },
      { slug: 'energetic-remapping', title: 'Energetic Remapping — Recovery Tools', filename: '14-energetic-remapping.md', type: 'chapter' },
      { slug: 'practical-responses', title: 'Practical Responses & Scripts', filename: '15-practical-responses.md', type: 'chapter' },
      { slug: 'moving-forward', title: 'Moving Forward', filename: '16-moving-forward.md', type: 'chapter' },
      { slug: 'exposure-questions', title: 'The Exposure Questions', filename: '17-exposure-questions.md', type: 'chapter' },
      { slug: 'childhood-patterns', title: 'Understanding Your Childhood Patterns', filename: '18-childhood-patterns.md', type: 'chapter' },
      { slug: 'appendix-resources', title: 'Appendix A: Resources', filename: 'appendix-a-resources.md', type: 'appendix' },
      { slug: 'appendix-glossary', title: 'Appendix B: Glossary', filename: 'appendix-b-glossary.md', type: 'appendix' },
      { slug: 'appendix-bibliography', title: 'Appendix C: Bibliography', filename: 'appendix-c-bibliography.md', type: 'appendix' },
      { slug: 'about-author', title: 'About the Author', filename: 'back-matter-about-author.md', type: 'back-matter' },
    ],
  },
  {
    id: 'vol-2-bridge',
    title: 'The Bridge',
    subtitle: 'Learning Secure Attachment After Trauma',
    description: 'A guide for emotionally sensitive adults moving from survival to sovereign connection.',
    chapters: [
      { slug: 'front-matter', title: 'Front Matter', filename: '00-front-matter.md', type: 'front-matter' },
      { slug: 'opening-manifesto', title: 'The Opening Manifesto', filename: '01-opening-manifesto.md', type: 'chapter' },
      { slug: 'authors-note', title: "Author's Note", filename: '02-authors-note.md', type: 'chapter' },
      { slug: 'emotional-immaturity', title: 'Emotional Immaturity', filename: '03-emotional-immaturity.md', type: 'chapter' },
      { slug: 'family-roles', title: 'Family Roles & Childhood Adaptation', filename: '04-family-roles.md', type: 'chapter' },
      { slug: 'father-archetype', title: 'The Father Archetype Decoder', filename: '05-father-archetype.md', type: 'chapter' },
      { slug: 'mother-archetype', title: 'The Mother Archetype Decoder', filename: '06-mother-archetype.md', type: 'chapter' },
      { slug: 'childhood-to-adult', title: 'How Childhood Roles Shape Adult Relationships', filename: '07-childhood-to-adult.md', type: 'chapter' },
      { slug: 'attachment-styles', title: 'Attachment Styles as Adaptive Strategies', filename: '08-attachment-styles.md', type: 'chapter' },
      { slug: 'trauma-bonds', title: 'Trauma Bonds & Relief Cycles', filename: '09-trauma-bonds.md', type: 'chapter' },
      { slug: 'why-insight-isnt-enough', title: "Why Insight Alone Doesn't Heal", filename: '10-why-insight-isnt-enough.md', type: 'chapter' },
      { slug: 'when-body-remembers', title: 'When the Body Remembers', filename: '11-when-body-remembers.md', type: 'chapter' },
      { slug: 'minimal-contact', title: 'Minimal Contact & No Contact', filename: '12-minimal-contact.md', type: 'chapter' },
      { slug: 'guilt-after-distance', title: 'Guilt After Distance', filename: '13-guilt-after-distance.md', type: 'chapter' },
      { slug: 'clean-endings', title: 'Clean Endings', filename: '14-clean-endings.md', type: 'chapter' },
      { slug: 'grief-that-follows', title: 'The Grief That Follows Freedom', filename: '15-grief-that-follows.md', type: 'chapter' },
      { slug: 'hope-without-waiting', title: 'Holding Hope Without Waiting', filename: '16-hope-without-waiting.md', type: 'chapter' },
      { slug: 'slow-burn', title: 'Slow Burn vs Fast Burn', filename: '17-slow-burn.md', type: 'chapter' },
      { slug: 'dating-after-trauma', title: 'Dating After Trauma', filename: '18-dating-after-trauma.md', type: 'chapter' },
      { slug: 'partner-compatibility', title: 'Partner Compatibility', filename: '19-partner-compatibility.md', type: 'chapter' },
      { slug: 'differentiation', title: 'Differentiation Without Disconnection', filename: '20-differentiation.md', type: 'chapter' },
      { slug: 'secure-attachment-training', title: 'The Secure Attachment Training Arc', filename: '21-secure-attachment-training.md', type: 'chapter' },
      { slug: 'reparenting-practices', title: 'Role-Based Reparenting Practices', filename: '22-reparenting-practices.md', type: 'chapter' },
      { slug: 'regulation-to-sovereignty', title: 'From Regulation to Sovereignty', filename: '23-regulation-to-sovereignty.md', type: 'chapter' },
      { slug: 'relationships-reorganized', title: 'Relationships Reorganized', filename: '24-relationships-reorganized.md', type: 'chapter' },
      { slug: 'decoder-cards', title: 'Pattern Recognition & Decoder Cards', filename: '25-decoder-cards.md', type: 'chapter' },
      { slug: 'becoming-the-bridge', title: 'Closing: Becoming the Bridge', filename: '26-becoming-the-bridge.md', type: 'chapter' },
      { slug: 'epilogue', title: 'Epilogue + Reader Blessing', filename: '27-epilogue.md', type: 'chapter' },
      { slug: 'appendix-glossary', title: 'Appendix A: Glossary', filename: 'appendix-a-glossary.md', type: 'appendix' },
      { slug: 'appendix-bibliography', title: 'Appendix B: Bibliography', filename: 'appendix-b-bibliography.md', type: 'appendix' },
      { slug: 'appendix-resources', title: 'Appendix C: Resources', filename: 'appendix-c-resources.md', type: 'appendix' },
    ],
  },
  {
    id: 'vol-3-sovereignty',
    title: 'Sovereignty',
    subtitle: 'Living From Internal Authority',
    description: 'A guide for those ready to stop shrinking and start standing.',
    chapters: [
      { slug: 'front-matter', title: 'Front Matter', filename: '00-front-matter.md', type: 'front-matter' },
      { slug: 'opening-manifesto', title: 'The Opening Manifesto', filename: '01-opening-manifesto.md', type: 'chapter' },
      { slug: 'installing-internal-authority', title: 'When No One Else Decides', filename: '02-installing-internal-authority.md', type: 'chapter' },
      { slug: 'aura-boundaries', title: 'What Is Mine — And What Is Not', filename: '03-aura-boundaries.md', type: 'chapter' },
      { slug: 'sovereignty-without-force', title: 'Sovereignty Without Force', filename: '04-sovereignty-without-force.md', type: 'chapter' },
      { slug: 'holding-the-field', title: 'Holding the Field Without Absorbing It', filename: '05-holding-the-field.md', type: 'chapter' },
      { slug: 'when-triggers-return', title: 'When Triggers Return', filename: '06-when-triggers-return.md', type: 'chapter' },
      { slug: 'desire-without-urgency', title: 'Desire Without Urgency', filename: '07-desire-without-urgency.md', type: 'chapter' },
      { slug: 'soothing-and-regulation', title: 'Soothing & Regulation', filename: '08-soothing-and-regulation.md', type: 'chapter' },
      { slug: 'guilt-separation-contracts', title: 'Guilt, Separation & Emotional Contracts', filename: '09-guilt-separation-contracts.md', type: 'chapter' },
      { slug: 'voice-of-authority', title: 'The Voice of Internal Authority', filename: '10-voice-of-authority.md', type: 'chapter' },
      { slug: 'leadership-without-performing', title: 'Leadership Without Performing', filename: '11-leadership-without-performing.md', type: 'chapter' },
      { slug: 'creativity-from-sovereignty', title: 'Creativity & Purpose From Sovereignty', filename: '12-creativity-from-sovereignty.md', type: 'chapter' },
      { slug: 'living-from-sovereignty', title: 'Living From Sovereignty', filename: '13-living-from-sovereignty.md', type: 'chapter' },
      { slug: 'sovereign-day', title: 'The Sovereign Day', filename: '14-sovereign-day.md', type: 'chapter' },
      { slug: 'sovereignty-in-partnership', title: 'Sovereignty in Intimate Partnership', filename: '15-sovereignty-in-partnership.md', type: 'chapter' },
      { slug: 'sovereignty-with-family', title: 'Sovereignty With Family of Origin', filename: '16-sovereignty-with-family.md', type: 'chapter' },
      { slug: 'sovereignty-at-work', title: 'Sovereignty at Work', filename: '17-sovereignty-at-work.md', type: 'chapter' },
      { slug: 'navigating-dysregulation', title: "Navigating Others' Dysregulation", filename: '18-navigating-dysregulation.md', type: 'chapter' },
      { slug: 'holding-space', title: 'Holding Space Without Rescuing', filename: '19-holding-space.md', type: 'chapter' },
      { slug: 'teaching-without-converting', title: 'Teaching Without Converting', filename: '20-teaching-without-converting.md', type: 'chapter' },
      { slug: 'sovereign-community', title: 'The Sovereign Community', filename: '21-sovereign-community.md', type: 'chapter' },
      { slug: 'epilogue', title: 'Epilogue + Reader Blessing', filename: '22-epilogue.md', type: 'chapter' },
      { slug: 'appendix-glossary', title: 'Appendix A: Glossary', filename: 'appendix-a-glossary.md', type: 'appendix' },
      { slug: 'appendix-bibliography', title: 'Appendix B: Bibliography', filename: 'appendix-b-bibliography.md', type: 'appendix' },
      { slug: 'appendix-resources', title: 'Appendix C: Resources', filename: 'appendix-c-resources.md', type: 'appendix' },
    ],
  },
  {
    id: 'vol-4-embodied-leadership',
    title: 'Embodied Leadership',
    subtitle: 'Aura, Erotic Coherence & Living From Presence',
    description: 'A guide for those ready to inhabit their full power.',
    chapters: [
      { slug: 'front-matter', title: 'Front Matter', filename: '00-front-matter.md', type: 'front-matter' },
      { slug: 'the-field-is-real', title: 'The Field Is Real', filename: '01-the-field-is-real.md', type: 'chapter' },
      { slug: 'aura-hygiene', title: 'Aura Hygiene', filename: '02-aura-hygiene.md', type: 'chapter' },
      { slug: 'digital-cord-environmental-hygiene', title: 'Digital, Cord & Environmental Hygiene', filename: '03-digital-cord-environmental-hygiene.md', type: 'chapter' },
      { slug: 'nervous-system-as-engine', title: "The Nervous System as the Aura's Engine", filename: '04-nervous-system-as-engine.md', type: 'chapter' },
      { slug: 'state-awareness-regulation', title: 'State Awareness and Regulation', filename: '05-state-awareness-regulation.md', type: 'chapter' },
      { slug: 'sovereign-yes-no', title: 'The Sovereign Yes / The Sovereign No', filename: '06-sovereign-yes-no.md', type: 'chapter' },
      { slug: 'holding-the-boundary', title: 'Holding the Boundary', filename: '07-holding-the-boundary.md', type: 'chapter' },
      { slug: 'sovereign-choice', title: 'Sovereign Choice', filename: '08-sovereign-choice.md', type: 'chapter' },
      { slug: 'detachment-that-loves', title: 'Detachment That Still Loves', filename: '09-detachment-that-loves.md', type: 'chapter' },
      { slug: 'sexual-energy-life-force', title: 'Sexual Energy as Life Force', filename: '10-sexual-energy-life-force.md', type: 'chapter' },
      { slug: 'sexuality-attachment', title: 'Sexuality and Attachment', filename: '11-sexuality-attachment.md', type: 'chapter' },
      { slug: 'erotic-boundaries', title: 'Erotic Boundaries', filename: '12-erotic-boundaries.md', type: 'chapter' },
      { slug: 'erotic-sovereignty', title: 'Erotic Sovereignty', filename: '13-erotic-sovereignty.md', type: 'chapter' },
      { slug: 'clean-intimacy', title: 'Clean Intimacy', filename: '14-clean-intimacy.md', type: 'chapter' },
      { slug: 'slow-burn', title: 'The Slow Burn', filename: '15-slow-burn.md', type: 'chapter' },
      { slug: 'magnetism-without-manipulation', title: 'Magnetism Without Manipulation', filename: '16-magnetism-without-manipulation.md', type: 'chapter' },
      { slug: 'group-dynamics-leadership', title: 'Group Dynamics & Energetic Leadership', filename: '17-group-dynamics-leadership.md', type: 'chapter' },
      { slug: 'shadow-of-healer', title: 'The Shadow of the Healer', filename: '18-shadow-of-healer.md', type: 'chapter' },
      { slug: 'repatterning-identity', title: 'Repatterning Your Identity', filename: '19-repatterning-identity.md', type: 'chapter' },
      { slug: 'embodied-leadership-life', title: 'Embodied Leadership: The Life', filename: '20-embodied-leadership-life.md', type: 'chapter' },
      { slug: 'myth-of-balance', title: 'The Myth of Balance', filename: '21-myth-of-balance.md', type: 'chapter' },
      { slug: 'appendix-glossary', title: 'Appendix A: Glossary', filename: 'appendix-a-glossary.md', type: 'appendix' },
      { slug: 'appendix-bibliography', title: 'Appendix B: Bibliography', filename: 'appendix-b-bibliography.md', type: 'appendix' },
      { slug: 'appendix-resources', title: 'Appendix C: Resources', filename: 'appendix-c-resources.md', type: 'appendix' },
    ],
  },
  {
    id: 'vol-5-lineage',
    title: 'The Lineage',
    subtitle: 'Breaking the Chain — Parenting After Trauma',
    description: 'A guide for those ready to give their children what they never received.',
    chapters: [
      { slug: 'front-matter', title: 'Front Matter', filename: '00-front-matter.md', type: 'front-matter' },
      { slug: 'lineage-manifesto', title: 'The Lineage Manifesto', filename: '01-lineage-manifesto.md', type: 'chapter' },
      { slug: 'already-enough', title: 'You Are Already Enough', filename: '02-already-enough.md', type: 'chapter' },
      { slug: 'activated-wounds', title: 'When Your Child Activates Old Wounds', filename: '03-activated-wounds.md', type: 'chapter' },
      { slug: 'rage-rises', title: 'The Rage That Rises', filename: '04-rage-rises.md', type: 'chapter' },
      { slug: 'shame-spirals', title: 'Shame Spirals After Imperfect Moments', filename: '05-shame-spirals-imperfect-moments.md', type: 'chapter' },
      { slug: 'nervous-system-vs-theirs', title: 'Your Nervous System vs Theirs', filename: '06-nervous-system-vs-theirs.md', type: 'chapter' },
      { slug: 'secure-attachment', title: 'What Secure Attachment Actually Looks Like', filename: '07-secure-attachment.md', type: 'chapter' },
      { slug: 'repair-over-perfection', title: 'Repair Over Perfection', filename: '08-repair-over-perfection.md', type: 'chapter' },
      { slug: 'age-specific-challenges', title: 'Age-Specific Challenges', filename: '09-age-specific-challenges.md', type: 'chapter' },
      { slug: 'child-mirrors-wound', title: 'The Child Who Mirrors Your Wound', filename: '10-child-mirrors-wound.md', type: 'chapter' },
      { slug: 'coparenting-narcissistic-ex', title: 'Co-Parenting With a Narcissistic Ex', filename: '11-coparenting-narcissistic-ex.md', type: 'chapter' },
      { slug: 'grandparents-problem', title: 'When Grandparents Are the Problem', filename: '12-when-grandparents-are-problem.md', type: 'chapter' },
      { slug: 'child-reminds-you', title: 'The Child Who Reminds You of Your Abuser', filename: '13-child-who-reminds-you.md', type: 'chapter' },
      { slug: 'parenting-multiple-children', title: 'Parenting Multiple Children Differently', filename: '14-parenting-multiple-children.md', type: 'chapter' },
      { slug: 'child-witnesses-healing', title: 'When Your Child Witnesses Your Healing', filename: '15-child-witnesses-healing.md', type: 'chapter' },
      { slug: 'what-youre-passing-on', title: "What You're Actually Passing On", filename: '16-what-youre-passing-on.md', type: 'chapter' },
      { slug: 'apology-they-deserve', title: 'The Apology They Deserve', filename: '17-the-apology-they-deserve.md', type: 'chapter' },
      { slug: 'teaching-boundaries-to-children', title: 'Teaching Boundaries to Children', filename: '18-teaching-boundaries-to-children.md', type: 'chapter' },
      { slug: 'emotionally-literate-humans', title: 'Raising Emotionally Literate Humans', filename: '19-raising-emotionally-literate-humans.md', type: 'chapter' },
      { slug: 'parent-youre-becoming', title: "The Parent You're Becoming", filename: '20-the-parent-youre-becoming.md', type: 'chapter' },
      { slug: 'epilogue', title: 'Epilogue: Letter to Your Lineage', filename: '21-epilogue-letter-to-your-lineage.md', type: 'chapter' },
      { slug: 'appendix-glossary', title: 'Appendix A: Glossary', filename: 'appendix-a-glossary.md', type: 'appendix' },
      { slug: 'appendix-bibliography', title: 'Appendix B: Bibliography', filename: 'appendix-b-bibliography.md', type: 'appendix' },
      { slug: 'appendix-resources', title: 'Appendix C: Resources', filename: 'appendix-c-resources.md', type: 'appendix' },
    ],
  },
  {
    id: 'vol-6-guide',
    title: 'The Guide',
    subtitle: "Holding Others' Healing Without Losing Your Own",
    description: 'A guide for those called to help others on this path.',
    chapters: [
      { slug: 'front-matter', title: 'Front Matter', filename: '00-front-matter.md', type: 'front-matter' },
      { slug: 'guides-manifesto', title: "The Guide's Manifesto", filename: '01-guides-manifesto.md', type: 'chapter' },
      { slug: 'why-survivors-become-helpers', title: 'Why Trauma Survivors Become Helpers', filename: '02-why-survivors-become-helpers.md', type: 'chapter' },
      { slug: 'when-helping-is-hiding', title: 'When Helping Is Hiding', filename: '03-when-helping-is-hiding.md', type: 'chapter' },
      { slug: 'rescuers-trap', title: "The Rescuer's Trap", filename: '04-rescuers-trap.md', type: 'chapter' },
      { slug: 'vicarious-trauma', title: 'Vicarious Trauma & Compassion Fatigue', filename: '05-vicarious-trauma-compassion-fatigue.md', type: 'chapter' },
      { slug: 'clients-trigger-material', title: 'When Clients Trigger Your Material', filename: '06-clients-trigger-your-material.md', type: 'chapter' },
      { slug: 'need-to-be-needed', title: 'The Need to Be Needed', filename: '07-need-to-be-needed.md', type: 'chapter' },
      { slug: 'scope-of-practice', title: 'Scope of Practice: Know Your Lane', filename: '08-scope-of-practice.md', type: 'chapter' },
      { slug: 'ethics-lived-experience', title: 'The Ethics of Lived Experience', filename: '09-ethics-of-lived-experience.md', type: 'chapter' },
      { slug: 'referral', title: 'Referral: When to Pass the Baton', filename: '10-referral-when-to-pass-the-baton.md', type: 'chapter' },
      { slug: 'dual-relationships', title: 'Dual Relationships & Boundary Complexity', filename: '11-dual-relationships-boundary-complexity.md', type: 'chapter' },
      { slug: 'confidentiality', title: 'Confidentiality & Story Stewardship', filename: '12-confidentiality-story-stewardship.md', type: 'chapter' },
      { slug: 'boundaried-presence', title: 'Boundaried Presence', filename: '13-boundaried-presence.md', type: 'chapter' },
      { slug: 'the-container', title: 'The Container: Session Structure That Protects', filename: '14-the-container.md', type: 'chapter' },
      { slug: 'energy-hygiene', title: 'Energy Hygiene for Helpers', filename: '15-energy-hygiene.md', type: 'chapter' },
      { slug: 'caseload-capacity', title: 'Caseload, Capacity & Saying No', filename: '16-caseload-capacity.md', type: 'chapter' },
      { slug: 'supervision-support', title: 'Supervision & Support Systems', filename: '17-supervision-support-systems.md', type: 'chapter' },
      { slug: 'teaching-without-converting', title: 'Teaching Without Converting', filename: '18-teaching-without-converting.md', type: 'chapter' },
      { slug: 'content-creation-as-service', title: 'Content Creation as Service', filename: '19-content-creation-as-service.md', type: 'chapter' },
      { slug: 'building-community', title: 'Building Community, Not Dependency', filename: '20-building-community-not-dependency.md', type: 'chapter' },
      { slug: 'business-of-helping', title: 'The Business of Helping', filename: '21-business-of-helping.md', type: 'chapter' },
      { slug: 'outgrow-audience', title: 'When You Outgrow Your Audience', filename: '22-when-you-outgrow-your-audience.md', type: 'chapter' },
      { slug: 'epilogue', title: "Epilogue: The Guide's Blessing", filename: '23-epilogue-guides-blessing.md', type: 'chapter' },
      { slug: 'appendix-glossary', title: 'Appendix A: Glossary', filename: 'appendix-a-glossary.md', type: 'appendix' },
      { slug: 'appendix-bibliography', title: 'Appendix B: Bibliography', filename: 'appendix-b-bibliography.md', type: 'appendix' },
      { slug: 'appendix-resources', title: 'Appendix C: Resources', filename: 'appendix-c-resources.md', type: 'appendix' },
    ],
  },
  {
    id: 'vol-7-return',
    title: 'The Return',
    subtitle: 'Money, Work & Building a Life After Survival Mode',
    description: 'A guide for those ready to thrive, not just survive.',
    chapters: [
      { slug: 'front-matter', title: 'Front Matter', filename: '00-front-matter.md', type: 'front-matter' },
      { slug: 'return-manifesto', title: 'The Return Manifesto', filename: '01-the-return-manifesto.md', type: 'chapter' },
      { slug: 'survival-mode-not-life-plan', title: 'Survival Mode Is Not a Life Plan', filename: '02-survival-mode-not-life-plan.md', type: 'chapter' },
      { slug: 'understanding-financial-abuse', title: 'Understanding Financial Abuse', filename: '03-understanding-financial-abuse.md', type: 'chapter' },
      { slug: 'scarcity-nervous-system', title: 'The Scarcity Nervous System', filename: '04-scarcity-nervous-system.md', type: 'chapter' },
      { slug: 'rebuilding-from-zero', title: 'Rebuilding From Zero', filename: '05-rebuilding-from-zero.md', type: 'chapter' },
      { slug: 'money-stories', title: 'Money Stories & Family Inheritance', filename: '06-money-stories-family-inheritance.md', type: 'chapter' },
      { slug: 'financial-sovereignty', title: 'Financial Sovereignty', filename: '07-financial-sovereignty.md', type: 'chapter' },
      { slug: 'professional-identity', title: 'Who Am I Professionally?', filename: '08-professional-identity-after-trauma.md', type: 'chapter' },
      { slug: 'career-gaps-story', title: 'Career Gaps & The Story You Tell', filename: '09-career-gaps-story.md', type: 'chapter' },
      { slug: 'workplace-narcissism', title: 'Workplace Narcissism & Toxic Leadership', filename: '10-workplace-narcissism-toxic-leadership.md', type: 'chapter' },
      { slug: 'boundaries-work', title: 'Boundaries at Work Without Burning Bridges', filename: '11-boundaries-work.md', type: 'chapter' },
      { slug: 'work-as-escape', title: 'When Work Was Your Escape', filename: '12-work-as-escape.md', type: 'chapter' },
      { slug: 'purpose-after-survival', title: 'Purpose After Survival', filename: '13-purpose-after-survival.md', type: 'chapter' },
      { slug: 'building-business-sovereignty', title: 'Building a Business From Sovereignty', filename: '14-building-business-from-sovereignty.md', type: 'chapter' },
      { slug: 'visibility-without-performing', title: 'Visibility Without Performing', filename: '15-visibility-without-performing.md', type: 'chapter' },
      { slug: 'pricing-charging-receiving', title: 'Pricing, Charging & Receiving', filename: '16-pricing-charging-receiving.md', type: 'chapter' },
      { slug: 'wealth-building', title: 'Wealth Building Without Guilt', filename: '17-wealth-building-without-guilt.md', type: 'chapter' },
      { slug: 'work-life-boundaries', title: 'Work-Life Boundaries in Practice', filename: '18-work-life-boundaries-in-practice.md', type: 'chapter' },
      { slug: 'success-triggers', title: 'Success Triggers', filename: '19-success-triggers.md', type: 'chapter' },
      { slug: 'life-that-holds-you', title: 'Building a Life That Holds You', filename: '20-building-a-life-that-holds-you.md', type: 'chapter' },
      { slug: 'life-youre-allowed', title: "The Life You're Allowed to Have", filename: '21-the-life-youre-allowed-to-have.md', type: 'chapter' },
      { slug: 'epilogue', title: 'Epilogue: Welcome Home', filename: '22-epilogue-welcome-home.md', type: 'chapter' },
      { slug: 'appendix-glossary', title: 'Appendix A: Glossary', filename: 'appendix-a-glossary.md', type: 'appendix' },
      { slug: 'appendix-bibliography', title: 'Appendix B: Bibliography', filename: 'appendix-b-bibliography.md', type: 'appendix' },
      { slug: 'appendix-resources', title: 'Appendix C: Resources', filename: 'appendix-c-resources.md', type: 'appendix' },
    ],
  },
  {
    id: 'vol-8-quantum',
    title: 'Quantum You',
    subtitle: 'Becoming the Version You Were Always Meant to Be',
    description: 'A guide for those ready to embody their infinite nature.',
    chapters: [
      { slug: 'front-matter', title: 'Front Matter', filename: '00-front-matter.md', type: 'front-matter' },
      { slug: 'quantum-manifesto', title: 'The Quantum Manifesto', filename: '01-quantum-manifesto.md', type: 'chapter' },
      { slug: 'end-of-pretending', title: 'The End of Pretending', filename: '02-end-of-pretending.md', type: 'chapter' },
      { slug: 'universe-looking-back', title: 'The Universe Looking Back', filename: '03-universe-looking-back.md', type: 'chapter' },
      { slug: 'whisper-beneath-thought', title: 'The Whisper Beneath Thought', filename: '04-whisper-beneath-thought.md', type: 'chapter' },
      { slug: 'fear-into-fuel', title: 'Fear Into Fuel', filename: '05-fear-into-fuel.md', type: 'chapter' },
      { slug: 'architecture-of-allowing', title: 'The Architecture of Allowing', filename: '06-architecture-of-allowing.md', type: 'chapter' },
      { slug: 'desire-as-direction', title: 'Desire as Direction', filename: '07-desire-as-direction.md', type: 'chapter' },
      { slug: 'sky-and-storms', title: 'The Sky and the Storms', filename: '08-sky-and-storms.md', type: 'chapter' },
      { slug: 'what-must-dissolve', title: 'What Must Dissolve', filename: '09-what-must-dissolve.md', type: 'chapter' },
      { slug: 'actor-awakens', title: 'The Actor Awakens', filename: '10-actor-awakens.md', type: 'chapter' },
      { slug: 'synchronicity-as-language', title: 'Synchronicity as Language', filename: '11-synchronicity-as-language.md', type: 'chapter' },
      { slug: 'body-as-antenna', title: 'The Body as Antenna', filename: '12-body-as-antenna.md', type: 'chapter' },
      { slug: 'relaxing-into-becoming', title: 'Relaxing Into Becoming', filename: '13-relaxing-into-becoming.md', type: 'chapter' },
      { slug: 'living-without-resistance', title: 'Living Without Resistance', filename: '14-living-without-resistance.md', type: 'chapter' },
      { slug: 'quantum-relationships', title: 'The Quantum Field of Relationships', filename: '15-quantum-relationships.md', type: 'chapter' },
      { slug: 'presence-as-power', title: 'Presence as Power', filename: '16-presence-as-power.md', type: 'chapter' },
      { slug: 'integration-all-volumes', title: 'The Integration of All Volumes', filename: '17-integration-all-volumes.md', type: 'chapter' },
      { slug: 'threshold-keepers', title: 'The Threshold Keepers', filename: '18-threshold-keepers.md', type: 'chapter' },
      { slug: 'ordinary-magic', title: 'Ordinary Magic', filename: '19-ordinary-magic.md', type: 'chapter' },
      { slug: 'the-unveiling', title: 'The Unveiling', filename: '20-the-unveiling.md', type: 'chapter' },
      { slug: 'living-from-quantum', title: 'Living From the Quantum', filename: '21-living-from-quantum.md', type: 'chapter' },
      { slug: 'epilogue', title: 'Epilogue: The Beginning That Never Ends', filename: '22-epilogue.md', type: 'chapter' },
      { slug: 'appendix-glossary', title: 'Appendix A: Glossary', filename: 'appendix-a-glossary.md', type: 'appendix' },
      { slug: 'appendix-bibliography', title: 'Appendix B: Bibliography', filename: 'appendix-b-bibliography.md', type: 'appendix' },
      { slug: 'appendix-resources', title: 'Appendix C: Resources', filename: 'appendix-c-resources.md', type: 'appendix' },
    ],
  },
];

export function getVolumeById(volumeId: string): Volume | undefined {
  return volumes.find((v) => v.id === volumeId);
}

export function getChapterBySlug(volumeId: string, slug: string): Chapter | undefined {
  const volume = getVolumeById(volumeId);
  return volume?.chapters.find((c) => c.slug === slug);
}

export function getAdjacentChapters(
  volumeId: string,
  slug: string
): { prev: Chapter | null; next: Chapter | null } {
  const volume = getVolumeById(volumeId);
  if (!volume) return { prev: null, next: null };

  const index = volume.chapters.findIndex((c) => c.slug === slug);
  return {
    prev: index > 0 ? volume.chapters[index - 1] : null,
    next: index < volume.chapters.length - 1 ? volume.chapters[index + 1] : null,
  };
}

export function getNextVolume(volumeId: string): Volume | null {
  const index = volumes.findIndex((v) => v.id === volumeId);
  return index < volumes.length - 1 ? volumes[index + 1] : null;
}

export function getPrevVolume(volumeId: string): Volume | null {
  const index = volumes.findIndex((v) => v.id === volumeId);
  return index > 0 ? volumes[index - 1] : null;
}

export function getChapterPath(volumeId: string, chapter: Chapter): string {
  if (chapter.type === 'front-matter' || chapter.type === 'back-matter') {
    return chapter.filename;
  }
  if (chapter.type === 'appendix') {
    return `appendices/${chapter.filename}`;
  }
  return `chapters/${chapter.filename}`;
}
