import { Lesson } from '../../types/course'

export const rm1003GoldenSun: Lesson = {
  id: 'rm1-003',
  title: 'Golden Sun',
  subtitle: 'Reclaiming Your Divine Light',
  type: 'guided_practice',
  duration: 15,
  order: 3,
  prerequisites: ['rm1-002'],
  content: {
    videoUrl: '/content/Lesson-2-Golden-Sun.mp4',
    introduction: 'Now that you\'re grounded and connected to the Earth, it\'s time to invite your own energy back in—to replenish, uplift, and realign with your essence. In this lesson, we work with the beautiful and powerful Golden Sun visualization.',
    mainContent: [
      {
        id: 'why-matters',
        type: 'text',
        content: 'When we release energy through grounding or clearing, it creates space in our system. But nature abhors a vacuum. If we don\'t consciously choose what fills that space, it may attract random energies from our environment. The Golden Sun ensures that you are filled only with your own divine light.',
        emphasis: 'sacred'
      },
      {
        id: 'what-helps-with',
        type: 'step_by_step',
        content: 'What the Golden Sun Helps With:\n☀️ Reclaiming your personal energy that may be scattered\n✨ Refilling your aura with high-vibration, soul-aligned light\n💪 Strengthening your spiritual identity and emotional resilience\n🔄 Integrating all the clearing work from your grounding\n🙏 Reconnecting with the Divine and your higher self',
        icon: '☀️'
      },
      {
        id: 'core-essence',
        type: 'quote',
        content: 'The Golden Sun is your light—pure, radiant, and unlimited. It\'s your higher self made visible. By calling it in, you affirm that you are your own source. That you have everything you need within you.',
        emphasis: 'highlight'
      },
      {
        id: 'integration-tip',
        type: 'tip',
        content: 'You can use the Golden Sun anytime you feel drained, unfocused, or "not yourself." It\'s a powerful way to come back to center—to restore, reenergize, and reconnect with your essence.',
        icon: '🔄'
      }
    ],
    practiceExercise: {
      title: 'Golden Sun Visualization',
      instructions: [
        'Begin with your grounding cord established',
        'Imagine a radiant golden sun just above your head',
        'See it glowing brighter, filled with your own divine energy',
        'Allow this light to pour into your crown chakra',
        'Let it fill your entire body from head to toe',
        'Feel it expanding into your aura, restoring your wholeness',
        'Rest in this nourishing, golden light'
      ],
      duration: 12,
      guidedAudioUrl: '/audio/lessons/rm1-003-golden-sun.mp3',
      completionCriteria: 'Complete Golden Sun meditation with full body and aura filling'
    },
    keyTakeaways: [
      'The Golden Sun is your connection to your own divine light',
      'Filling yourself consciously prevents random energy from entering',
      'This practice restores your spiritual identity and strength',
      'You are your own source of light and nourishment'
    ],
    reflectionPrompts: [
      'How did the golden light feel as it moved through your body?',
      'What did you notice about your energy before and after?',
      'How might connecting with your own light change your daily experience?'
    ]
  },
  aiAssistant: {
    name: 'Jennifer',
    persona: 'meditation_guide',
    systemPrompt: `You are Jennifer guiding students through the Golden Sun visualization. This practice helps them reclaim their own divine light and fill their energy field consciously. Be encouraging about all experiences - some see vivid golden light, others feel warmth, expansion, or deep peace.

Key concepts:
- Golden Sun as personal divine light and higher self
- Conscious filling after energy release
- Reclaiming scattered personal energy
- Spiritual identity and self-sourcing
- Integration of clearing work through restoration

Help students trust their unique experience and understand this as energy work, not just imagination.`,
    context: [
      'Golden Sun visualization technique',
      'Divine light and higher self connection',
      'Energy restoration and conscious filling',
      'Aura and chakra system basics',
      'Self-sourcing and spiritual identity'
    ],
    suggestedQuestions: [
      'What if I don\'t see a golden sun clearly?',
      'How do I know the difference between my energy and others\'?',
      'Is it normal to feel emotional during this practice?',
      'Can I use the Golden Sun without grounding first?',
      'What does it mean to be my own source?'
    ]
  },
  unlocks: ['rm1-004']
}
