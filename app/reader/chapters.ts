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
      { slug: 'appendix-content-creation', title: 'Appendix A: Content Creation Structure', filename: 'appendix-a-content-creation.md', type: 'appendix' },
      { slug: 'appendix-childhood-patterns', title: 'Appendix B: Understanding Your Childhood Patterns', filename: 'appendix-b-childhood-patterns.md', type: 'appendix' },
      { slug: 'appendix-resources', title: 'Appendix D: Resources', filename: 'appendix-d-resources.md', type: 'appendix' },
      { slug: 'appendix-glossary', title: 'Appendix E: Glossary', filename: 'appendix-e-glossary.md', type: 'appendix' },
      { slug: 'appendix-bibliography', title: 'Appendix F: Bibliography', filename: 'appendix-f-bibliography.md', type: 'appendix' },
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
      { slug: 'hope-without-waiting', title: 'Holding Hope Without Waiting', filename: '15-hope-without-waiting.md', type: 'chapter' },
      { slug: 'slow-burn', title: 'Slow Burn vs Fast Burn', filename: '16-slow-burn.md', type: 'chapter' },
      { slug: 'dating-after-trauma', title: 'Dating After Trauma', filename: '17-dating-after-trauma.md', type: 'chapter' },
      { slug: 'partner-compatibility', title: 'Partner Compatibility', filename: '18-partner-compatibility.md', type: 'chapter' },
      { slug: 'differentiation', title: 'Differentiation Without Disconnection', filename: '19-differentiation.md', type: 'chapter' },
      { slug: 'secure-attachment-training', title: 'The Secure Attachment Training Arc', filename: '20-secure-attachment-training.md', type: 'chapter' },
      { slug: 'reparenting-practices', title: 'Role-Based Reparenting Practices', filename: '21-reparenting-practices.md', type: 'chapter' },
      { slug: 'regulation-to-sovereignty', title: 'From Regulation to Sovereignty', filename: '22-regulation-to-sovereignty.md', type: 'chapter' },
      { slug: 'relationships-reorganized', title: 'Relationships Reorganized', filename: '23-relationships-reorganized.md', type: 'chapter' },
      { slug: 'decoder-cards', title: 'Decoder Cards', filename: '24-decoder-cards.md', type: 'chapter' },
      { slug: 'becoming-the-bridge', title: 'Closing: Becoming the Bridge', filename: '25-becoming-the-bridge.md', type: 'chapter' },
      { slug: 'epilogue', title: 'Epilogue + Reader Blessing', filename: '26-epilogue.md', type: 'chapter' },
      { slug: 'appendix-grief-process', title: 'Appendix A: The Grief Process', filename: 'appendix-a-grief-process.md', type: 'appendix' },
      { slug: 'appendix-vignettes', title: 'Appendix B: Composite Vignettes', filename: 'appendix-b-vignettes.md', type: 'appendix' },
      { slug: 'appendix-worksheets', title: 'Appendix C: Self-Assessment Charts & Worksheets', filename: 'appendix-c-worksheets.md', type: 'appendix' },
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
      { slug: 'sovereignty-in-partnership', title: 'Sovereignty in Intimate Partnership', filename: '14-sovereignty-in-partnership.md', type: 'chapter' },
      { slug: 'sovereignty-with-family', title: 'Sovereignty With Family of Origin', filename: '15-sovereignty-with-family.md', type: 'chapter' },
      { slug: 'sovereignty-at-work', title: 'Sovereignty at Work', filename: '16-sovereignty-at-work.md', type: 'chapter' },
      { slug: 'navigating-dysregulation', title: "Navigating Others' Dysregulation", filename: '17-navigating-dysregulation.md', type: 'chapter' },
      { slug: 'holding-space', title: 'Holding Space Without Rescuing', filename: '18-holding-space.md', type: 'chapter' },
      { slug: 'teaching-without-converting', title: 'Teaching Without Converting', filename: '19-teaching-without-converting.md', type: 'chapter' },
      { slug: 'sovereign-community', title: 'The Sovereign Community', filename: '20-sovereign-community.md', type: 'chapter' },
      { slug: 'epilogue', title: 'Epilogue + Reader Blessing', filename: '21-epilogue.md', type: 'chapter' },
      { slug: 'appendix-integration-guide', title: 'Appendix A: One-Page Integration Guide', filename: 'appendix-a-integration-guide.md', type: 'appendix' },
      { slug: 'appendix-worksheets', title: 'Appendix B: Worksheets', filename: 'appendix-b-worksheets.md', type: 'appendix' },
      { slug: 'appendix-citations', title: 'Appendix C: Citations & Scientific Foundations', filename: 'appendix-c-citations.md', type: 'appendix' },
      { slug: 'appendix-daily-anchors', title: 'Appendix D: Sovereignty Daily Anchors', filename: 'appendix-d-daily-anchors.md', type: 'appendix' },
      { slug: 'appendix-decoder-cards', title: 'Appendix E: Decoder Cards for Sovereignty', filename: 'appendix-e-decoder-cards.md', type: 'appendix' },
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
      { slug: 'nervous-system-as-engine', title: "The Nervous System as the Aura's Engine", filename: '03-nervous-system-as-engine.md', type: 'chapter' },
      { slug: 'sovereign-yes-no', title: 'The Sovereign Yes / The Sovereign No', filename: '04-sovereign-yes-no.md', type: 'chapter' },
      { slug: 'sovereign-choice', title: 'Sovereign Choice', filename: '05-sovereign-choice.md', type: 'chapter' },
      { slug: 'detachment-that-loves', title: 'Detachment That Still Loves', filename: '06-detachment-that-loves.md', type: 'chapter' },
      { slug: 'sexual-energy-life-force', title: 'Sexual Energy as Life Force', filename: '07-sexual-energy-life-force.md', type: 'chapter' },
      { slug: 'erotic-boundaries', title: 'Erotic Boundaries', filename: '08-erotic-boundaries.md', type: 'chapter' },
      { slug: 'clean-intimacy', title: 'Clean Intimacy', filename: '09-clean-intimacy.md', type: 'chapter' },
      { slug: 'magnetism-without-manipulation', title: 'Magnetism Without Manipulation', filename: '10-magnetism-without-manipulation.md', type: 'chapter' },
      { slug: 'group-dynamics-leadership', title: 'Group Dynamics & Energetic Leadership', filename: '11-group-dynamics-leadership.md', type: 'chapter' },
      { slug: 'shadow-of-healer', title: 'The Shadow of the Healer', filename: '12-shadow-of-healer.md', type: 'chapter' },
      { slug: 'repatterning-identity', title: 'Repatterning Your Identity', filename: '13-repatterning-identity.md', type: 'chapter' },
      { slug: 'embodied-leadership-life', title: 'Embodied Leadership: The Life', filename: '14-embodied-leadership-life.md', type: 'chapter' },
      { slug: 'appendix-field-hygiene-menu', title: 'Appendix A: Field Hygiene Menu', filename: 'appendix-a-field-hygiene-menu.md', type: 'appendix' },
      { slug: 'appendix-consent-ladder', title: 'Appendix B: The Consent Ladder', filename: 'appendix-b-consent-ladder.md', type: 'appendix' },
      { slug: 'appendix-scripts', title: 'Appendix C: Scripts & Phrases', filename: 'appendix-c-scripts.md', type: 'appendix' },
      { slug: 'appendix-decoder-cards', title: 'Appendix D: Decoder Cards for Embodied Leadership', filename: 'appendix-d-decoder-cards.md', type: 'appendix' },
      { slug: 'appendix-sexuality-self-check', title: 'Appendix E: Reader Self-Check', filename: 'appendix-e-sexuality-self-check.md', type: 'appendix' },
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
      { slug: 'appendix-age-specific-scripts', title: 'Appendix A: Age-Specific Scripts', filename: 'appendix-a-age-specific-scripts.md', type: 'appendix' },
      { slug: 'appendix-repair-templates', title: 'Appendix B: Repair Conversation Templates', filename: 'appendix-b-repair-templates.md', type: 'appendix' },
      { slug: 'appendix-parent-regulation-tools', title: 'Appendix C: Self-Regulation for Parents', filename: 'appendix-c-parent-regulation-tools.md', type: 'appendix' },
      { slug: 'appendix-coparenting-red-flags', title: 'Appendix D: Co-Parenting Red Flags', filename: 'appendix-d-coparenting-red-flags.md', type: 'appendix' },
      { slug: 'appendix-decoder-cards-parenting', title: 'Appendix E: Decoder Cards for Parenting', filename: 'appendix-e-decoder-cards-parenting.md', type: 'appendix' },
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
      { slug: 'appendix-financial-recovery', title: 'Appendix A: Financial Recovery Checklist', filename: 'appendix-a-financial-recovery-checklist.md', type: 'appendix' },
      { slug: 'appendix-workplace-scripts', title: 'Appendix B: Workplace Boundary Scripts', filename: 'appendix-b-workplace-boundary-scripts.md', type: 'appendix' },
      { slug: 'appendix-financial-abuse-signs', title: 'Appendix C: Signs of Financial Abuse', filename: 'appendix-c-signs-of-financial-abuse.md', type: 'appendix' },
      { slug: 'appendix-business-ethics', title: 'Appendix D: Business Ethics for Trauma-Informed Entrepreneurs', filename: 'appendix-d-business-ethics-trauma-informed.md', type: 'appendix' },
      { slug: 'appendix-decoder-cards-prosperity', title: 'Appendix E: Decoder Cards for Prosperity', filename: 'appendix-e-decoder-cards-prosperity.md', type: 'appendix' },
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
