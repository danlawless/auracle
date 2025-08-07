import { Lesson } from '../../types/course'

export const rm1006FourRoses: Lesson = {
  id: 'rm1-006',
  title: 'The Four Roses of Protection, Separation & Observation',
  subtitle: 'Sacred Guardians of Your Energy Field',
  type: 'guided_practice',
  duration: 14,
  order: 6,
  prerequisites: ['rm1-005'],
  content: {
    introduction: 'Today, we learn how to energetically hold our space when we\'re with others—without losing our center, becoming reactive, or taking on energy that isn\'t ours. This is the gift of the Four Roses—a powerful practice for remaining sovereign, sensitive, and strong.',
    mainContent: [
      {
        id: 'why-matters',
        type: 'text',
        content: 'In our daily lives, we\'re constantly exchanging energy—through words, glances, thoughts, or even silent presence. When we\'re unaware of our energetic boundaries, it\'s easy to feel overwhelmed, scattered, or drained by others. These Four Roses act as energetic sentinels, helping maintain clear boundaries between your field and the external world.',
        emphasis: 'sacred'
      },
      {
        id: 'what-helps-with',
        type: 'step_by_step',
        content: 'What the Four Roses Help With:\n⚖️ Maintaining neutrality in the face of emotional charge\n👁️ Observing others without absorbing their energy\n✨ Preserving your emotional and energetic clarity\n🌊 Moving through social spaces with ease and grace\n💖 Whether you\'re highly empathetic or feeling drained by others',
        icon: '🛡️'
      },
      {
        id: 'core-essence',
        type: 'quote',
        content: 'Each Rose is a spiritual guardian. Placed around you—front, back, left, and right—they hold the energetic perimeter of your sacred space. This is not isolation. It is sacred separation. It allows you to love without merging, to listen without absorbing.',
        emphasis: 'highlight'
      },
      {
        id: 'integration-tip',
        type: 'tip',
        content: 'Refresh your Four Roses anytime you feel overwhelmed or "not quite yourself." It\'s especially helpful before social events, conversations, or times of emotional intensity. I love to refresh them in the grocery store!',
        icon: '🔄'
      }
    ],
    practiceExercise: {
      title: 'Creating the Four Roses',
      instructions: [
        'Begin grounded with Golden Sun and clear aura boundaries',
        'Visualize a Rose in front of you, about arm\'s length away',
        'Create a second Rose behind you, also at arm\'s length',
        'Place a Rose to your left side and another to your right',
        'See them as bright, protective colors with no leaves or thorns',
        'Feel the sacred container they create around you',
        'If any Rose feels dim or wilted, explode and recreate it',
        'Rest in this protected, observed space'
      ],
      duration: 12,
      guidedAudioUrl: '/audio/lessons/rm1-006-four-roses.mp3',
      completionCriteria: 'Complete Four Roses protection with clear energetic container'
    },
    keyTakeaways: [
      'The Four Roses create sacred separation, not isolation',
      'They offer protection, separation, and neutral observation',
      'You can refresh or recreate them whenever needed',
      'This practice allows loving engagement without losing yourself'
    ],
    reflectionPrompts: [
      'How did the Four Roses change the feeling of your energy field?',
      'In what situations would this practice be most helpful?',
      'What\'s the difference between separation and isolation for you?'
    ]
  },
  aiAssistant: {
    name: 'Jennifer',
    persona: 'wise_guide',
    systemPrompt: `You are Jennifer teaching the Four Roses protection technique. This is especially important for empathic and sensitive students who often absorb others' emotions. Help them understand this as loving self-care, not selfishness.

Key concepts:
- Four Roses as energetic sentinels and guardians
- Sacred separation vs. isolation
- Protection, separation, and neutral observation
- Maintaining sovereignty in relationships and social situations
- Loving without merging, listening without absorbing

Be especially supportive of highly sensitive students who may feel guilty about needing energetic protection.`,
    context: [
      'Four Roses technique and visualization',
      'Energetic protection and boundaries',
      'Empathic sensitivity and energy absorption',
      'Sacred separation in relationships',
      'Neutral observation and emotional detachment'
    ],
    suggestedQuestions: [
      'Is it unloving to protect myself energetically from others?',
      'What if my Roses keep getting dim or disappearing?',
      'How is this different from just putting up walls?',
      'Can I use this with family members and loved ones?',
      'What colors should my Four Roses be?'
    ]
  },
  unlocks: ['rm1-007']
}
