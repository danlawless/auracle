import { Lesson } from '../../types/course'

export const rm1005CordRenewal: Lesson = {
  id: 'rm1-005',
  title: 'Renewal and Cutting of Grounding Cord',
  subtitle: 'Refreshing Your Sacred Foundation',
  type: 'guided_practice',
  duration: 10,
  order: 5,
  prerequisites: ['rm1-004'],
  content: {
    videoUrl: '/content/Lesson-4-content.mp4',
    introduction: 'In our second lesson, we created our grounding cord—a sacred channel that connects us to the Earth. Now we go deeper: we learn how to cut and renew that cord. This is a vital part of your energetic cleanse.',
    mainContent: [
      {
        id: 'why-matters',
        type: 'text',
        content: 'Your grounding cord is your energetic anchor—but like anything in daily life, it accumulates residue. Thoughts, emotions, old patterns, or other people\'s energy can become lodged within it. Renewing your grounding cord is like clearing out your inbox. It makes space. It refreshes your connection.',
        emphasis: 'sacred'
      },
      {
        id: 'what-helps-with',
        type: 'step_by_step',
        content: 'What Cord Renewal Helps With:\n🗑️ Releasing outdated or heavy energy in your grounding system\n🌿 Strengthening your connection to Earth with clarity\n⚖️ Supporting emotional balance during transitions\n🏗️ Creating a clear foundation for all energy work to follow\n✨ Reaffirming alignment with the present moment',
        icon: '🌀'
      },
      {
        id: 'core-essence',
        type: 'quote',
        content: 'This practice is a reminder: you are never stuck. You can begin again—instantly, powerfully, and cleanly. When you cut the old cord, you let go of the past. When you create a new one, you ground yourself freshly into the now.',
        emphasis: 'highlight'
      },
      {
        id: 'integration-tip',
        type: 'tip',
        content: 'Try renewing your grounding cord in the morning before your day begins, or at night to release the day behind you. This practice can be done anytime you feel emotionally drained, energetically congested, or want a clean slate.',
        icon: '🔁'
      }
    ],
    practiceExercise: {
      title: 'Cutting & Renewing the Grounding Cord',
      instructions: [
        'Feel into the grounding cord you created in previous lessons',
        'Acknowledge the work it\'s done—what it has carried and cleared',
        'Visualize an energetic cutting tool (sword, scissors, laser beam)',
        'With full presence, cut the grounding cord and let it fall away',
        'Breathe into the space where the old cord used to be',
        'Create a brand-new grounding cord—thick, transparent, strong',
        'Anchor it deep into the Earth\'s core, clean and present'
      ],
      duration: 8,
      guidedAudioUrl: '/audio/lessons/rm1-005-cord-renewal.mp3',
      completionCriteria: 'Complete cutting old cord and creating fresh grounding connection'
    },
    keyTakeaways: [
      'Grounding cord renewal is energetic hygiene and self-care',
      'You can always begin again with a fresh, clean connection',
      'Cutting the old cord releases accumulated energy and patterns',
      'A new cord grounds you fully in the present moment'
    ],
    reflectionPrompts: [
      'What did you notice when you cut the old grounding cord?',
      'How does the new cord feel different from the previous one?',
      'When in your life might cord renewal be especially helpful?'
    ]
  },
  aiAssistant: {
    name: 'Jennifer',
    persona: 'gentle_teacher',
    systemPrompt: `You are Jennifer teaching the important practice of grounding cord renewal. This builds on the foundation grounding practice and teaches students about energetic hygiene and the power of fresh beginnings.

Key concepts:
- Grounding cord as energetic anchor that accumulates residue
- Cutting and renewal as energetic hygiene
- Power of fresh beginnings in energy work  
- Present moment alignment through new grounding
- Integration with daily spiritual practice

Help students understand this as both practical technique and spiritual metaphor for renewal.`,
    context: [
      'Grounding cord maintenance and renewal',
      'Energetic hygiene and spiritual cleansing',
      'Letting go of the past through cord cutting',
      'Present moment grounding and fresh starts',
      'Daily spiritual practice integration'
    ],
    suggestedQuestions: [
      'How often should I renew my grounding cord?',
      'What kind of cutting tool should I visualize?',
      'Is it normal to feel emotional when cutting the old cord?',
      'Can I renew my cord multiple times in one day?',
      'What if I feel attachment to my old grounding cord?'
    ]
  },
  unlocks: ['rm1-006']
}
