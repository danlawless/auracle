'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ArrowRight, Lock, CheckCircle } from 'lucide-react'

const JourneyProgression = () => {
  const router = useRouter()

  const journeySteps = [
    {
      step: 1,
      title: 'Rose Meditation Level 1',
      subtitle: 'Mini Course',
      description: 'Master the foundational practices',
      price: '$197',
      duration: '4 weeks',
      status: 'available',
      icon: '🌹',
      color: 'from-rose-pink to-deep-rose',
      practices: ['Golden Sun', 'Grounding Cord', 'Pink Rose', 'Aura Boundaries']
    },
    {
      step: 2,
      title: 'Rose Meditation Level 2',
      subtitle: 'Advanced Practice',
      description: 'Deepen your spiritual connection',
      price: '$397',
      duration: '6 weeks',
      status: 'coming-soon',
      icon: '🌹✨',
      color: 'from-golden-light to-earth-copper',
      practices: ['Advanced Four Roses', 'Energy Transmutation', 'Chakra Work', 'Sacred Healing']
    },
    {
      step: 3,
      title: 'Rose Meditation Level 3',
      subtitle: 'Master Level',
      description: 'Achieve mastery and prepare for certification',
      price: '$597',
      duration: '8 weeks',
      status: 'coming-soon',
      icon: '🌹👑',
      color: 'from-earth-copper to-golden-light',
      practices: ['Master Techniques', 'Sacred Geometry', 'Advanced Healing', 'Spiritual Mastery']
    },
    {
      step: 4,
      title: 'Become an Aura Reader',
      subtitle: 'Professional Certification',
      description: 'Transform into a certified practitioner',
      price: '$1,297',
      duration: '12 weeks',
      status: 'coming-soon',
      icon: '👁️✨',
      color: 'from-deep-rose to-rose-pink',
      practices: ['Aura Reading Mastery', 'Professional Ethics', 'Client Skills', 'Business Training']
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white via-rose-pink/5 to-golden-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient-rose mb-6">
            The Complete Journey Visualization
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            See exactly how each step builds upon the last, creating a complete transformation 
            from beginner to certified Aura Reader.
          </p>
        </motion.div>

        {/* Journey Flow */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-rose-pink via-golden-light to-deep-rose opacity-20 transform -translate-y-1/2"></div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Step Card */}
                <div className={`relative bg-white rounded-2xl p-6 shadow-xl border-2 ${
                  step.status === 'available' 
                    ? 'border-rose-pink shadow-rose-pink/20' 
                    : 'border-gray-200'
                } ${step.status === 'coming-soon' ? 'opacity-75' : ''}`}>
                  
                  {/* Status Badge */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    {step.status === 'available' ? (
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        AVAILABLE NOW
                      </div>
                    ) : (
                      <div className="bg-gray-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center">
                        <Lock className="h-3 w-3 mr-1" />
                        COMING SOON
                      </div>
                    )}
                  </div>

                  {/* Step Number & Icon */}
                  <div className="text-center mb-4 mt-2">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <div className={`w-8 h-8 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto text-white font-bold text-sm`}>
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-serif font-semibold text-gray-800 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-rose-pink font-medium text-sm mb-2">
                      {step.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {step.description}
                    </p>
                    
                    {/* Price & Duration */}
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-gradient-gold mb-1">
                        {step.price}
                      </div>
                      <div className="text-xs text-gray-500">
                        {step.duration}
                      </div>
                    </div>
                  </div>

                  {/* Practices */}
                  <div className="mb-6">
                    <h4 className="text-xs font-medium text-gray-800 mb-2 text-center">
                      Key Practices:
                    </h4>
                    <div className="space-y-1">
                      {step.practices.map((practice, practiceIndex) => (
                        <div key={practiceIndex} className="flex items-center text-xs text-gray-600">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {practice}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => {
                      if (step.status === 'available') {
                        router.push('/courses/rose-meditation-1/dashboard')
                      }
                    }}
                    disabled={step.status !== 'available'}
                    className={`w-full py-3 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
                      step.status === 'available'
                        ? `bg-gradient-to-r ${step.color} text-white hover:shadow-lg hover:scale-105`
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {step.status === 'available' ? 'Start Now' : 'Coming Soon'}
                  </button>
                </div>

                {/* Arrow (not on last item) */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200">
                      <ArrowRight className="h-4 w-4 text-gray-600" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="card-sacred max-w-2xl mx-auto bg-gradient-to-br from-rose-pink/10 to-deep-rose/10 border-2 border-rose-pink/20">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-rose rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xl">🚀</span>
              </div>
            </div>
            <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
              Ready to Begin Your Transformation?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Every master started as a beginner. Your journey to becoming an Aura Reader 
              begins with a single step - Rose Meditation Level 1.
            </p>
            <button 
              onClick={() => router.push('/courses/rose-meditation-1/dashboard')}
              className="btn-primary text-lg px-8 py-3 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              🌹 Start Your Journey - Level 1
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default JourneyProgression
