import { Lesson } from '../../types/course'

export const rm1010ClosingIntegration: Lesson = {
  id: 'rm1-010',
  title: 'Ending the Meditation Properly & Full Integration',
  subtitle: 'Sealing Your Practice with Grace',
  type: 'guided_practice',
  duration: 20,
  order: 10,
  prerequisites: ['rm1-009'],
  content: {
    videoUrl: '/content/Lesson-10-Full-Meditation.mp4',
    introduction: 'You\'ve done beautiful work—cleansing, restoring, releasing, and realigning. Now, it\'s time to seal it. To complete the practice with care and reverence. In this lesson, we learn how to properly end your meditation and experience the full Rose Meditation integration.',
    mainContent: [
      {
        id: 'why-matters',
        type: 'text',
        content: 'Energy work opens portals of transformation—within your aura, your chakras, your soul. But without a clear closing, you might remain open, ungrounded, or energetically sensitive. Ending the meditation intentionally brings closure. It returns your spirit to your body and integrates all the shifts that occurred.',
        emphasis: 'sacred'
      },
      {
        id: 'what-helps-with',
        type: 'step_by_step',
        content: 'What Proper Closing Helps With:\n🔐 Sealing your aura and energetic boundaries\n🌱 Grounding spiritual insights into physical awareness\n⚖️ Preventing energy leaks, dizziness, or emotional unsteadiness\n🏠 Reinforcing safety, stability, and embodiment\n✨ Carrying your light into the world—whole and present',
        icon: '🛑'
      },
      {
        id: 'core-essence',
        type: 'quote',
        content: 'Closure is protection. It is self-honoring. By cutting the cord, refilling with your own energy, and grounding excess, you remind your body and spirit that you are complete. This final ritual is an act of love—a way to thank your energetic system and come home to your everyday self with grace.',
        emphasis: 'highlight'
      },
      {
        id: 'integration-reminder',
        type: 'tip',
        content: 'Always take a moment to close your meditation—especially after deep clearing or energy movement. This ensures your clarity and safety as you move back into daily life. You now hold the tools to clear, reclaim, protect, and empower your energy every day.',
        icon: '🔄'
      }
    ],
    practiceExercise: {
      title: 'Full Rose Meditation Integration',
      instructions: [
        '🌳 Create grounding cord from root chakra to Earth\'s core',
        '☀️ Call in Golden Sun above head, let it fill your body and aura',
        '🌐 Set aura boundaries to 50 centimeters in all directions',
        '✂️ Cut and renew your grounding cord for fresh connection',
        '🌹 Place Four Roses around you for protection and observation',
        '🌍✨ Run Earth and Cosmic energy circuit through your being',
        '🧹 Use cleansing Roses for any heavy or intrusive energy',
        '💗 Send Pink Rose for compassionate release if needed',
        '🔒 Close: Cut cord, new grounding, Golden Sun refill, ground excess energy'
      ],
      duration: 18,
      guidedAudioUrl: '/audio/lessons/rm1-010-full-integration.mp3',
      completionCriteria: 'Complete full Rose Meditation sequence with proper closing'
    },
    keyTakeaways: [
      'You now have a complete energetic toolkit for daily spiritual hygiene',
      'Proper closing seals your practice and grounds your spirit',
      'Rose Meditation is your pathway to energetic sovereignty',
      'You can return to center anytime you feel scattered or heavy'
    ],
    reflectionPrompts: [
      'How does it feel to have completed the full Rose Meditation sequence?',
      'Which parts of the practice feel most natural or powerful for you?',
      'How will you integrate this practice into your daily spiritual routine?',
      'What has shifted in your relationship with your own energy?'
    ]
  },
  aiAssistant: {
    name: 'Jennifer',
    persona: 'The Auracle AI',
    systemPrompt: `You are Jennifer celebrating the completion of Rose Meditation Level 1 with your student. This is a moment of empowerment and graduation. Help them feel confident in their new abilities and excited about their continued practice.

Key concepts:
- Full Rose Meditation integration and mastery
- Proper energetic closing and sealing techniques
- Daily spiritual hygiene and self-empowerment
- Energetic sovereignty and personal transformation
- Confidence in their new spiritual toolkit

Celebrate their growth and commitment while encouraging continued practice and self-trust.`,
    context: [
      'Complete Rose Meditation sequence and integration',
      'Energetic closing and sealing techniques',
      'Daily spiritual practice and self-care',
      'Personal empowerment and energetic sovereignty',
      'Graduation from Level 1 foundations'
    ],
    suggestedQuestions: [
      'How do I remember all these steps in my daily practice?',
      'What if I don\'t have time for the full sequence every day?',
      'Can I modify the practice for different situations?',
      'How do I know if I\'m doing the practice correctly?',
      'What\'s next in my Rose Meditation journey?'
    ]
  },
  unlocks: ['rm1-completion-certificate']
}
