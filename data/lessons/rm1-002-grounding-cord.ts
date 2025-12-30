import { Lesson } from '../../types/course'

export const rm1002GroundingCord: Lesson = {
  id: 'rm1-002',
  title: 'Grounding Cord',
  subtitle: 'Creating Your Sacred Foundation',
  type: 'guided_practice',
  duration: 12,
  order: 2,
  prerequisites: ['rm1-001'],
  content: {
    videoUrl: '/content/Lesson-1-Grounding.mp4',
    introduction: 'Today, we begin with the foundation of all energy work: grounding. Whether you\'re new to energy practices or returning home to them, grounding is the sacred art of remembering your place—right here, right now, in your body, on this Earth.',
    mainContent: [
      {
        id: 'why-matters',
        type: 'text',
        content: 'Grounding is essential because it creates the energetic stability that allows everything else in your spiritual practice to flow. Without it, your energy can become chaotic—scattered by thoughts, emotions, or the influences of others. Grounding is the tether that brings your awareness from the mental realm into the physical world.',
        emphasis: 'sacred'
      },
      {
        id: 'what-helps-with',
        type: 'step_by_step',
        content: 'What Grounding Helps With:\n🌿 Release energy that doesn\'t belong to you\n😌 Increase your sense of safety, calm, and presence\n⚓ Anchor your spiritual energy into your body\n🧘 Integrate healing and awareness from meditation\n🏠 Create an embodied experience of coming home',
        icon: '🌱'
      },
      {
        id: 'core-essence',
        type: 'quote',
        content: 'Grounding is the sacred act of coming home to yourself. It is where the body and spirit meet the Earth. The grounding cord allows you to empty the energetic trash bin of your system.',
        emphasis: 'highlight'
      },
      {
        id: 'renewal-reminder',
        type: 'tip',
        content: 'You can renew this grounding cord any time. It\'s good spiritual hygiene to cut the old one and create a new one regularly—especially after intense experiences or long days. Just like washing your hands or brushing your teeth, grounding is how you cleanse your energy field.',
        icon: '🔄'
      }
    ],
    practiceExercise: {
      title: 'Grounding Cord Meditation',
      instructions: [
        'Sit comfortably with your feet flat on the floor',
        'Bring awareness to the base of your spine, your root chakra',
        'Imagine a thick, transparent cord extending down into the Earth',
        'See it anchoring in the very core of the planet',
        'With each exhale, release stress and tension down the cord',
        'Feel Earth\'s stable, loving energy supporting you'
      ],
      duration: 10,
      guidedAudioUrl: '/audio/lessons/rm1-002-grounding-cord.mp3',
      completionCriteria: 'Complete 10-minute grounding cord meditation'
    },
    keyTakeaways: [
      'Grounding creates energetic stability for all spiritual practice',
      'Your grounding cord is your release valve for unwanted energy',
      'Earth knows exactly what to do with released energy',
      'Grounding brings you home to the present moment'
    ],
    reflectionPrompts: [
      'How did your body feel during the grounding practice?',
      'What did you notice about being "in your head" vs "in your body"?',
      'How might regular grounding support you in daily life?'
    ]
  },
  aiAssistant: {
    name: 'The Aura AI',
    persona: 'The Aura AI',
    systemPrompt: `You are Aura AI teaching the essential grounding technique. This is the foundation that creates stability for all energy work. Help students understand grounding as both a spiritual practice and practical tool for daily life.

Key concepts:
- Grounding cord technique and visualization
- Releasing energy that doesn't belong to you
- Earth connection and energetic stability
- Spiritual hygiene through regular grounding
- Creating safety in energy work

Be encouraging about all experiences - some feel the cord physically, others sense stability or peace.`,
    context: [
      'Grounding cord visualization and technique',
      'Earth energy connection and support',
      'Energy release and spiritual hygiene',
      'Root chakra and energetic foundation',
      'Present moment awareness through grounding'
    ],
    suggestedQuestions: [
      'How do I know if I\'m properly grounded?',
      'Should I feel the grounding cord physically?',
      'What does it mean to release energy that isn\'t mine?',
      'How often should I practice grounding?',
      'Can I create a grounding cord anywhere, anytime?'
    ]
  },
  unlocks: ['rm1-003']
}
