import { Lesson } from '../../types/course'

export const rm1008CleansingRoses: Lesson = {
  id: 'rm1-008',
  title: 'Roses to Cleanse and Restore Energy',
  subtitle: 'Your Spiritual Vacuum and Revitalizer',
  type: 'guided_practice',
  duration: 13,
  order: 8,
  prerequisites: ['rm1-007'],
  content: {
    introduction: 'Today, we learn how to use one of the most iconic and versatile tools in energy work: the cleansing and restorative Rose. These Roses are your personal assistants in clearing energy—powerful, precise, and deeply loving.',
    mainContent: [
      {
        id: 'why-matters',
        type: 'text',
        content: 'Every interaction, environment, and thought carries energy. Some of it sticks. Even if you\'re grounded and your aura is clear, daily life can leave traces—emotional residue, other people\'s expectations, or unresolved tension. The Rose is a spiritual vacuum—it absorbs these energies and transforms them.',
        emphasis: 'sacred'
      },
      {
        id: 'what-helps-with',
        type: 'step_by_step',
        content: 'What Cleansing Roses Help With:\n🧹 Clearing energy of recent conversations or experiences\n💔 Dissolving stuck emotions, heaviness, or interference\n✨ Restoring clarity, calm, and energetic freedom\n📈 Uplifting the vibration of situations and memories\n⚡ Working in real-time, silently and powerfully',
        icon: '🌹'
      },
      {
        id: 'core-essence',
        type: 'quote',
        content: 'The Rose is not just a symbol—it is a living tool of light and spirit. Created through your intention, it acts as a magnet for all that is not yours and all that no longer serves you. When you explode the Rose, you release what it has collected, returning energy to Source.',
        emphasis: 'highlight'
      },
      {
        id: 'integration-tip',
        type: 'tip',
        content: 'Use this technique at the end of the day, after meetings, or when processing emotions. It\'s a tool you can use privately, even in public spaces—because energy hygiene is your birthright. You can also use this on joyful experiences to elevate their vibration further.',
        icon: '🔄'
      }
    ],
    practiceExercise: {
      title: 'Cleansing with the Rose',
      instructions: [
        'Begin with your full Rose Meditation foundation established',
        'Visualize a bright, high-vibration Rose outside your aura',
        'Call back any of your energy ready to return from conversations, places, thoughts',
        'Think of something that feels heavy or intrusive to your field',
        'Place that energy into the Rose, watching it collect in the petals',
        'When the Rose feels full, say goodbye with gratitude',
        'Explode the Rose outside your aura, releasing energy to Source',
        'Create another Rose if needed and repeat the process'
      ],
      duration: 11,
      guidedAudioUrl: '/audio/lessons/rm1-008-cleansing-roses.mp3',
      completionCriteria: 'Complete cleansing process with Rose explosion and energy release'
    },
    keyTakeaways: [
      'Roses are living tools of light that absorb and transform energy',
      'Daily cleansing is spiritual hygiene and self-care',
      'You can use Roses on both heavy and joyful experiences',
      'Energy returns to Source cleansed and neutral when released'
    ],
    reflectionPrompts: [
      'What did you notice as the Rose absorbed the heavy energy?',
      'How did you feel after exploding the Rose and releasing the energy?',
      'When in your daily life could you use this cleansing technique?'
    ]
  },
  aiAssistant: {
    name: 'Jennifer',
    persona: 'gentle_teacher',
    systemPrompt: `You are Jennifer teaching the powerful cleansing Rose technique. This is practical energy hygiene that students can use daily. Help them understand this as spiritual self-care and a way to process daily experiences.

Key concepts:
- Roses as spiritual vacuum and energy absorbers
- Daily energy hygiene and cleansing
- Transforming heavy experiences through Rose work
- Calling back scattered personal energy
- Releasing energy to Source for transmutation

Encourage students to see this as both practical technique and loving self-care practice.`,
    context: [
      'Cleansing Rose technique and visualization',
      'Daily energy hygiene and spiritual self-care',
      'Processing emotions and experiences through energy work',
      'Calling back scattered personal energy',
      'Energy transformation and release to Source'
    ],
    suggestedQuestions: [
      'What color should my cleansing Rose be?',
      'Can I use this technique on positive experiences too?',
      'What if the Rose doesn\'t want to explode?',
      'Is it safe to work with heavy or traumatic energy this way?',
      'How many Roses can I use in one session?'
    ]
  },
  unlocks: ['rm1-009']
}
