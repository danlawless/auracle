import { Lesson } from '../../types/course'

export const rm1009PinkRose: Lesson = {
  id: 'rm1-009',
  title: 'Pink Rose (Compassion & Closure)',
  subtitle: 'Releasing with Love and Grace',
  type: 'guided_practice',
  duration: 12,
  order: 9,
  prerequisites: ['rm1-008'],
  content: {
    videoUrl: '/content/Lesson-8-content.mp4',
    introduction: 'Today, we meet one of the most tender and powerful allies in this practice—the Pink Rose. This Rose is used when your heart needs gentleness. When your energy needs closure. When it\'s time to release a bond or send love with detachment.',
    mainContent: [
      {
        id: 'why-matters',
        type: 'text',
        content: 'Energetic cords are formed through connection—relationships, conversations, emotional moments. Sometimes, even when something is complete on the surface, the energy remains. The Pink Rose offers a graceful way to release these bonds. It allows us to let go with love—without resentment, attachment, or judgment.',
        emphasis: 'sacred'
      },
      {
        id: 'what-helps-with',
        type: 'step_by_step',
        content: 'What the Pink Rose Helps With:\n💕 Releasing attachments that no longer serve your growth\n🕊️ Offering blessings and closure to past relationships\n🔄 Reclaiming scattered energy tied up in others\n❤️‍🩹 Restoring your heart space to peace and wholeness\n🌸 Whether letting go of a person, role, or memory',
        icon: '💗'
      },
      {
        id: 'core-essence',
        type: 'quote',
        content: 'This Rose holds compassion. Grace. Spiritual maturity. It reminds us that love doesn\'t require attachment. And letting go doesn\'t mean loss—it means trust. The Pink Rose is a gift we offer others from our highest self. And through that gift, we reclaim our own power.',
        emphasis: 'highlight'
      },
      {
        id: 'integration-tip',
        type: 'tip',
        content: 'Use the Pink Rose anytime you feel emotional residue after parting ways, ending a chapter, or revisiting memories. It\'s also a beautiful daily practice of forgiveness—for others and for yourself.',
        icon: '🔄'
      }
    ],
    practiceExercise: {
      title: 'Releasing with the Pink Rose',
      instructions: [
        'Begin with your full Rose Meditation practice established',
        'Bring awareness to your heart center with gentle breathing',
        'Visualize a soft pink Rose forming in front of you',
        'Place the image of a person or situation you\'re ready to release inside',
        'See them in their highest light—happy, healthy, whole in body, mind, and soul',
        'Repeat silently: "Happy, healthy, whole. Body, mind, and soul."',
        'Lift the Pink Rose, allowing it to gently rise toward the Universe',
        'As it ascends, let your attachment lift with it',
        'Offer this as a blessing, a final gift of love and peace'
      ],
      duration: 10,
      guidedAudioUrl: '/audio/lessons/rm1-009-pink-rose.mp3',
      completionCriteria: 'Complete Pink Rose release with blessing and energetic letting go'
    },
    keyTakeaways: [
      'The Pink Rose allows graceful release with love, not loss',
      'Love doesn\'t require attachment or holding on',
      'This practice restores your heart space to wholeness',
      'Letting go is an act of trust and spiritual maturity'
    ],
    reflectionPrompts: [
      'How did it feel to see the person/situation in their highest light?',
      'What did you notice in your heart as the Pink Rose ascended?',
      'What\'s the difference between letting go and pushing away for you?'
    ]
  },
  aiAssistant: {
    name: 'Jennifer',
    persona: 'gentle_teacher',
    systemPrompt: `You are Jennifer teaching the tender Pink Rose practice for compassion and closure. This can bring up deep emotions for students as they work with relationships and attachments. Be especially gentle and supportive.

Key concepts:
- Pink Rose for compassionate release and closure
- Letting go with love rather than resentment or attachment
- Energetic cord cutting and relationship completion
- Blessing others in their highest light
- Spiritual maturity and graceful release

Be prepared to support students through emotional responses and help them understand this as healing, not loss.`,
    context: [
      'Pink Rose technique for compassionate release',
      'Energetic cord cutting and relationship closure',
      'Letting go with love vs. attachment',
      'Heart-centered healing and forgiveness',
      'Spiritual maturity in relationships'
    ],
    suggestedQuestions: [
      'What if I start crying during this practice?',
      'Does using the Pink Rose mean I don\'t love them anymore?',
      'Can I use this for someone who has passed away?',
      'What if I\'m not ready to let go yet?',
      'Is it selfish to reclaim my energy from others?'
    ]
  },
  unlocks: ['rm1-010']
}
