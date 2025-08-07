import { Lesson } from '../../types/course'

export const rm1004AuraBoundaries: Lesson = {
  id: 'rm1-004',
  title: 'Aura Boundaries and Expansion',
  subtitle: 'Claiming Your Energetic Space',
  type: 'guided_practice',
  duration: 12,
  order: 4,
  prerequisites: ['rm1-003'],
  content: {
    videoUrl: '/content/Lesson-3-Aura-Boundary.mp4',
    introduction: 'You\'ve grounded yourself into the Earth and invited your own energy home through the Golden Sun. Now, it\'s time to define your energetic space—to declare where you begin and where the outside world ends.',
    mainContent: [
      {
        id: 'why-matters',
        type: 'text',
        content: 'Your aura is your energetic container. It surrounds you like a personal atmosphere, holding your essence, emotions, thoughts, and spirit. When your aura is undefined or too porous, other people\'s energy can easily enter it, creating confusion, fatigue, or emotional overwhelm.',
        emphasis: 'sacred'
      },
      {
        id: 'what-helps-with',
        type: 'step_by_step',
        content: 'What Aura Boundaries Help With:\n🛡️ Preventing emotional or energetic overwhelm\n🌊 Creating a buffer from external stress and stimulation\n💎 Strengthening your spiritual identity and intuitive clarity\n🏠 Feeling safe, clear, and empowered in your environment\n👁️ Whether you\'re highly sensitive or want more clarity',
        icon: '🌐'
      },
      {
        id: 'core-essence',
        type: 'quote',
        content: 'Your aura is your signature—your unique frequency expressed in light. When you claim its boundaries, you become energetically sovereign. It\'s not about walling yourself off—it\'s about owning your space with loving authority.',
        emphasis: 'highlight'
      },
      {
        id: 'integration-tip',
        type: 'tip',
        content: 'You can reset your aura boundary at any time. Even just taking 10 seconds to say mentally, "I set my aura boundary to 50 centimeters," can bring you back into balance. You can experiment with extending or pulling in your field to find what feels good.',
        icon: '🔄'
      }
    ],
    practiceExercise: {
      title: 'Setting Your Aura Boundary',
      instructions: [
        'Begin with grounding cord and Golden Sun established',
        'Imagine your aura as a glowing bubble of light around you',
        'Set it to about 50 centimeters (arm\'s length) in all directions',
        'See it form a clear, luminous edge around your entire being',
        'Feel that everything inside this space is yours, outside is not',
        'Seal any holes or tears with golden mist from your essence',
        'Breathe into your aura, making it vibrant and resilient'
      ],
      duration: 10,
      guidedAudioUrl: '/audio/lessons/rm1-004-aura-boundaries.mp3',
      completionCriteria: 'Complete aura boundary setting with clear energetic edge'
    },
    keyTakeaways: [
      'Your aura is your energetic container and personal atmosphere',
      'Clear boundaries create energetic sovereignty, not isolation',
      'You can adjust your aura size based on what you need',
      'Defined boundaries allow clearer, more compassionate engagement'
    ],
    reflectionPrompts: [
      'How did it feel to consciously define your energetic space?',
      'What difference do you notice with clear vs. unclear boundaries?',
      'When might you want to expand or contract your aura field?'
    ]
  },
  aiAssistant: {
    name: 'Jennifer',
    persona: 'wise_guide',
    systemPrompt: `You are Jennifer teaching aura boundaries and energetic sovereignty. Help students understand this as an act of self-love and empowerment, not separation. Many students worry about being "selfish" or "closed off" - help them see boundaries as healthy and necessary.

Key concepts:
- Aura as energetic container and personal atmosphere  
- Energetic sovereignty vs. isolation
- Boundary setting as self-care and empowerment
- Flexibility in aura size and permeability
- Integration with grounding and Golden Sun practices

Encourage students who are highly sensitive or empathic - this practice is especially powerful for them.`,
    context: [
      'Aura structure and energetic boundaries',
      'Energetic sovereignty and self-empowerment',
      'Highly sensitive person (HSP) support',
      'Boundary setting as spiritual practice',
      'Energy field management and flexibility'
    ],
    suggestedQuestions: [
      'Is setting boundaries selfish or unloving?',
      'How do I know what size my aura should be?',
      'What if I can\'t see or feel my aura?',
      'Will boundaries prevent me from connecting with others?',
      'How do I maintain boundaries around difficult people?'
    ]
  },
  unlocks: ['rm1-005']
}
