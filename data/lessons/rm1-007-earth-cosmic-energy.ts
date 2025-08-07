import { Lesson } from '../../types/course'

export const rm1007EarthCosmicEnergy: Lesson = {
  id: 'rm1-007',
  title: 'Energies of the Earth and Cosmos',
  subtitle: 'Becoming the Sacred Bridge',
  type: 'guided_practice',
  duration: 16,
  order: 7,
  prerequisites: ['rm1-006'],
  content: {
    introduction: 'In this session, we enter a sacred flow—the energetic circuit that unites the grounding power of the Earth with the expansive wisdom of the Cosmos. This is channeling Earth and Cosmic energy through your body—a dynamic, transformative flow that enhances everything we\'ve learned.',
    mainContent: [
      {
        id: 'why-matters',
        type: 'text',
        content: 'Just as our bodies need nutrients and oxygen, our energy systems thrive on a steady flow of high-quality spiritual energy. Earth energy stabilizes and supports us. Cosmic energy enlightens and expands us. When these two forces meet and flow within us, we experience harmony, vitality, and clarity.',
        emphasis: 'sacred'
      },
      {
        id: 'what-helps-with',
        type: 'step_by_step',
        content: 'What Earth-Cosmos Flow Helps With:\n🌍 Grounding your spiritual experiences into the body\n🌟 Awakening higher consciousness and intuitive perception\n🔓 Releasing blocks, fatigue, and stagnant energy\n🌈 Aligning your chakras and clearing emotional residue\n⚡ Plugging into your universal power source',
        icon: '🌍✨'
      },
      {
        id: 'core-essence',
        type: 'quote',
        content: 'This is where you become the bridge. A conduit of life force. A sacred meeting point between heaven and earth. The Earth rises to hold you. The Cosmos descends to awaken you. And in the center—you—receive, circulate, and embody this divine union.',
        emphasis: 'highlight'
      },
      {
        id: 'integration-tip',
        type: 'tip',
        content: 'You can run this circuit as a standalone practice or within your daily Rose Meditation. It\'s especially powerful when you need to recalibrate, ground after spiritual work, or receive clarity and inspiration.',
        icon: '🔄'
      }
    ],
    practiceExercise: {
      title: 'Running Earth and Cosmic Energy',
      instructions: [
        'Begin with grounding cord, Golden Sun, boundaries, and Four Roses',
        'Visualize rich copper-gold energy rising from Earth\'s center',
        'Feel it entering through your feet, up your legs to your tailbone',
        'Send most of it down your grounding cord, 10% rises up your spine',
        'Call radiant golden light from the center of the Universe into your crown',
        'Let it flow down your spine through your chakras to your tailbone',
        '10% mixes with Earth energy and descends, rest rises up front of body',
        'At your throat, energy splits: one stream out crown, two down arms and hands',
        'Feel the full sacred circuit flowing through your being'
      ],
      duration: 14,
      guidedAudioUrl: '/audio/lessons/rm1-007-earth-cosmic.mp3',
      completionCriteria: 'Complete full Earth-Cosmos energy circuit with flowing streams'
    },
    keyTakeaways: [
      'You are the sacred bridge between Earth and Cosmos',
      'This circuit nourishes both your spirit and physical form',
      'Earth energy grounds while Cosmic energy expands consciousness',
      'The flow creates harmony, vitality, and spiritual alignment'
    ],
    reflectionPrompts: [
      'How did it feel to be the bridge between Earth and Cosmos?',
      'What did you notice about the different qualities of Earth vs. Cosmic energy?',
      'How might this practice support your daily spiritual growth?'
    ]
  },
  aiAssistant: {
    name: 'Jennifer',
    persona: 'meditation_guide',
    systemPrompt: `You are Jennifer teaching the advanced Earth-Cosmos energy circuit. This is a more complex visualization that builds on all previous practices. Help students understand this as becoming a conscious conduit of universal life force.

Key concepts:
- Earth-Cosmos energy circuit and flow
- Becoming a bridge between heaven and earth
- Chakra alignment and energy circulation
- Different qualities of Earth vs. Cosmic energy
- Integration with full Rose Meditation practice

Be patient with students who find this visualization complex - encourage them to focus on the feeling rather than perfecting every detail.`,
    context: [
      'Earth and Cosmic energy circuit technique',
      'Chakra system and energy flow',
      'Becoming a conscious energy conduit',
      'Universal life force and spiritual nourishment',
      'Advanced energy work and visualization'
    ],
    suggestedQuestions: [
      'This visualization seems complex - what if I can\'t follow all the steps?',
      'What\'s the difference between Earth and Cosmic energy?',
      'Is it normal to feel intense sensations during this practice?',
      'Can I do this practice without all the previous steps?',
      'How do I know if the energy is flowing correctly?'
    ]
  },
  unlocks: ['rm1-008']
}
