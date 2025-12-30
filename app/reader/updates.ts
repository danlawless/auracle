export interface ContentUpdate {
  id: string;
  date: string;
  title: string;
  description: string;
  volumes: string[]; // volume IDs affected
  type: 'new-content' | 'reorganization' | 'refinement' | 'new-chapter';
}

export const recentUpdates: ContentUpdate[] = [
  {
    id: 'update-2025-12-30-resources-story',
    date: '2025-12-30',
    title: 'Personal story added to Resources',
    description: 'Added a personal story to the safety planning section in Volume 1.',
    volumes: ['vol-1-decoder'],
    type: 'new-content',
  },
  {
    id: 'update-2025-12-30-vol1-reorg',
    date: '2025-12-30',
    title: 'Volume 1 chapter reorganization',
    description: 'Promoted "Understanding Your Childhood Patterns" to a full chapter and streamlined appendices.',
    volumes: ['vol-1-decoder'],
    type: 'reorganization',
  },
  {
    id: 'update-2025-12-30-vol2-streamline',
    date: '2025-12-30',
    title: 'Volume 2 appendix streamlined',
    description: 'Reorganized content structure for clearer reading progression.',
    volumes: ['vol-2-bridge'],
    type: 'reorganization',
  },
  {
    id: 'update-2025-12-30-character-details',
    date: '2025-12-30',
    title: 'Character details expanded',
    description: 'Added details for Angelina and Diego, updated Escola da Aura location.',
    volumes: ['vol-4-embodied-leadership'],
    type: 'refinement',
  },
  {
    id: 'update-2025-12-30-techniques',
    date: '2025-12-30',
    title: 'New grounding techniques',
    description: 'Added midday check-in and vibration technique practices.',
    volumes: ['vol-3-sovereignty'],
    type: 'new-content',
  },
];

export function getRecentUpdates(limit: number = 5): ContentUpdate[] {
  return recentUpdates.slice(0, limit);
}

export function getUpdatesByVolume(volumeId: string): ContentUpdate[] {
  return recentUpdates.filter((update) => update.volumes.includes(volumeId));
}
