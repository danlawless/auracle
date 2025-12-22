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
      { slug: 'when-triggers-return', title: 'When Triggers Return', filename: '05b-when-triggers-return.md', type: 'chapter' },
      { slug: 'desire-without-urgency', title: 'Desire Without Urgency', filename: '06-desire-without-urgency.md', type: 'chapter' },
      { slug: 'soothing-and-regulation', title: 'Soothing & Regulation', filename: '07-soothing-and-regulation.md', type: 'chapter' },
      { slug: 'guilt-separation-contracts', title: 'Guilt, Separation & Emotional Contracts', filename: '08-guilt-separation-contracts.md', type: 'chapter' },
      { slug: 'voice-of-authority', title: 'The Voice of Internal Authority', filename: '08b-voice-of-authority.md', type: 'chapter' },
      { slug: 'leadership-without-performing', title: 'Leadership Without Performing', filename: '09-leadership-without-performing.md', type: 'chapter' },
      { slug: 'creativity-from-sovereignty', title: 'Creativity & Purpose From Sovereignty', filename: '09b-creativity-from-sovereignty.md', type: 'chapter' },
      { slug: 'living-from-sovereignty', title: 'Living From Sovereignty', filename: '10-living-from-sovereignty.md', type: 'chapter' },
      { slug: 'epilogue', title: 'Epilogue + Reader Blessing', filename: '11-epilogue.md', type: 'chapter' },
      { slug: 'sovereignty-in-partnership', title: 'Sovereignty in Intimate Partnership', filename: '12-sovereignty-in-partnership.md', type: 'chapter' },
      { slug: 'sovereignty-with-family', title: 'Sovereignty With Family of Origin', filename: '13-sovereignty-with-family.md', type: 'chapter' },
      { slug: 'sovereignty-at-work', title: 'Sovereignty at Work', filename: '14-sovereignty-at-work.md', type: 'chapter' },
      { slug: 'navigating-dysregulation', title: "Navigating Others' Dysregulation", filename: '15-navigating-dysregulation.md', type: 'chapter' },
      { slug: 'holding-space', title: 'Holding Space Without Rescuing', filename: '16-holding-space.md', type: 'chapter' },
      { slug: 'teaching-without-converting', title: 'Teaching Without Converting', filename: '17-teaching-without-converting.md', type: 'chapter' },
      { slug: 'sovereign-community', title: 'The Sovereign Community', filename: '18-sovereign-community.md', type: 'chapter' },
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
