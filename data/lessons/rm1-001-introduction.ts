import { Lesson } from '../../types/course'

export const rm1001Introduction: Lesson = {
  id: 'rm1-001',
  title: 'Introduction to Rose Meditation',
  subtitle: 'Welcome to Your Sacred Journey',
  type: 'video',
  duration: 8,
  order: 1,
  content: {
    videoUrl: '/content/About-The-Roses.mp4',
    introduction: 'Welcome. I\'m so honored you\'re here. This is the beginning of your journey with Rose Meditation Level 1—a gentle yet powerful practice for energetic cleansing, grounding, protection, and personal sovereignty.',
    mainContent: [
      {
        id: 'why-matters',
        type: 'text',
        content: 'We live in a world full of energy—our own and everyone else\'s. Without knowing it, we often carry what\'s not ours: emotional weight, unspoken expectations, even other people\'s stress or stories. Rose Meditation gives you a way to reset. To clear your field. To return to the radiant truth of who you are.',
        emphasis: 'sacred'
      },
      {
        id: 'what-helps-with',
        type: 'step_by_step',
        content: 'What Rose Meditation Helps With:\n🌹 Cleansing your aura and chakras of unwanted energy\n🌱 Grounding your body and presence in the here and now\n🛡️ Creating clear boundaries and energetic sovereignty\n👁️ Observing life from a neutral, compassionate center\n✨ Reclaiming your energy and raising your vibration',
        icon: '🌹'
      },
      {
        id: 'core-essence',
        type: 'quote',
        content: 'At its heart, Rose Meditation is about remembering. Remembering your power. Your light. Your energetic authority. The Rose is a symbol of your spirit: beautiful, powerful, and always evolving.',
        emphasis: 'highlight'
      }
    ],
    practiceExercise: {
      title: 'Sacred Space and Intention Setting',
      instructions: [
        'Find a quiet space that feels peaceful to you',
        'Sit comfortably with your spine upright',
        'Take three deep breaths to center yourself',
        'Set your intention: "I am open to this transformative practice"',
        'Feel yourself entering sacred space'
      ],
      duration: 5,
      guidedAudioUrl: '/audio/lessons/rm1-001-sacred-space.mp3',
      completionCriteria: 'Complete sacred space activation and intention setting'
    },
    keyTakeaways: [
      'Rose Meditation is a powerful tool for energetic sovereignty',
      'This practice helps you clear what doesn\'t belong to you',
      'You are becoming the curator of your energy field',
      'Your journey home has already begun'
    ],
    reflectionPrompts: [
      'What draws you to energy work and Rose Meditation?',
      'How do you currently feel about your relationship with your own energy?',
      'What would energetic sovereignty mean in your daily life?'
    ]
  },
  aiAssistant: {
    name: 'The Aura AI',
    persona: 'The Aura AI',
    systemPrompt: `You are The Aura AI, guiding students into the sacred practice of Rose Meditation. This introductory lesson helps students understand the transformative power of energy work and their own energetic sovereignty.

Key concepts:
- Rose Meditation as energetic cleansing and sovereignty
- Clearing energy that doesn't belong to you
- The Rose as symbol of spiritual power and evolution
- Setting sacred space and intention
- Beginning the journey of remembering personal power

Always respond with warmth and reverence for the sacred work they're beginning.`,
    context: [
      'Rose Meditation foundations and purpose',
      'Energetic cleansing and sovereignty',
      'Sacred space creation',
      'Intention setting for transformation',
      'The symbolism of the Rose'
    ],
    suggestedQuestions: [
      'What does energetic sovereignty mean?',
      'How do I know if I\'m carrying energy that isn\'t mine?',
      'What makes Rose Meditation different from other practices?',
      'How do I create sacred space?',
      'What if I don\'t feel ready for this work?'
    ]
  },
  unlocks: ['rm1-002']
}
