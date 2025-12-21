export interface Chapter {
  slug: string;
  title: string;
  filename: string;
  type: 'chapter' | 'appendix';
}

export const chapters: Chapter[] = [
  {
    slug: 'front-matter',
    title: 'Front Matter',
    filename: '00-front-matter.md',
    type: 'chapter',
  },
  {
    slug: 'opening-manifesto',
    title: 'Opening Manifesto',
    filename: '01-opening-manifesto.md',
    type: 'chapter',
  },
  {
    slug: 'energetic-signature',
    title: 'Energetic Signature',
    filename: '02-energetic-signature.md',
    type: 'chapter',
  },
  {
    slug: 'narcissist-playbook',
    title: 'The Narcissist Playbook',
    filename: '03-narcissist-playbook.md',
    type: 'chapter',
  },
  {
    slug: 'trauma-bonds',
    title: 'Trauma Bonds',
    filename: '04-trauma-bonds.md',
    type: 'chapter',
  },
  {
    slug: 'narcissist-archetypes',
    title: 'Narcissist Archetypes',
    filename: '05-narcissist-archetypes.md',
    type: 'chapter',
  },
  {
    slug: 'family-systems',
    title: 'Family Systems',
    filename: '06-family-systems.md',
    type: 'chapter',
  },
  {
    slug: 'manipulation-in-relationships',
    title: 'Manipulation in Relationships',
    filename: '07-manipulation-in-relationships.md',
    type: 'chapter',
  },
  {
    slug: 'decoder-cards',
    title: 'Decoder Cards',
    filename: '08-decoder-cards.md',
    type: 'chapter',
  },
  {
    slug: 'energetic-remapping',
    title: 'Energetic Remapping',
    filename: '09-energetic-remapping.md',
    type: 'chapter',
  },
  {
    slug: 'spiritual-integration',
    title: 'Spiritual Integration',
    filename: '10-spiritual-integration.md',
    type: 'chapter',
  },
  {
    slug: 'practical-responses',
    title: 'Practical Responses',
    filename: '11-practical-responses.md',
    type: 'chapter',
  },
  {
    slug: 'moving-forward',
    title: 'Moving Forward',
    filename: '12-moving-forward.md',
    type: 'chapter',
  },
  {
    slug: 'appendix-content-creation',
    title: 'Appendix A: Content Creation',
    filename: 'appendix-a-content-creation.md',
    type: 'appendix',
  },
  {
    slug: 'appendix-grief-process',
    title: 'Appendix B: The Grief Process',
    filename: 'appendix-b-grief-process.md',
    type: 'appendix',
  },
  {
    slug: 'appendix-childhood-patterns',
    title: 'Appendix C: Childhood Patterns',
    filename: 'appendix-c-childhood-patterns.md',
    type: 'appendix',
  },
];

export function getChapterBySlug(slug: string): Chapter | undefined {
  return chapters.find((chapter) => chapter.slug === slug);
}

export function getAdjacentChapters(slug: string): {
  prev: Chapter | null;
  next: Chapter | null;
} {
  const index = chapters.findIndex((chapter) => chapter.slug === slug);
  return {
    prev: index > 0 ? chapters[index - 1] : null,
    next: index < chapters.length - 1 ? chapters[index + 1] : null,
  };
}




