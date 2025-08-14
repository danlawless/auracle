'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ArrowRight, CheckCircle } from 'lucide-react'

const LearningPath = () => {
  const router = useRouter()

  const handleCourseNavigation = (courseTitle: string) => {
    // For now, only Rose Meditation Level 1 has content
    if (courseTitle === 'Rose Meditation Level 1') {
      router.push('/courses/rose-meditation-1/dashboard')
    } else {
      // Other courses go to coming soon page
      router.push(`/courses/${courseTitle.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`)
    }
  }

  const pathSteps = [
    {
      level: 'Start Here',
      title: 'Rose Meditation Level 1',
      subtitle: 'Mini Course - Your Gateway to Sacred Practice',
      description: 'Begin your transformative journey with the foundational practices that will unlock your spiritual potential',
      practices: ['Golden Sun Visualization', 'Grounding Cord Mastery', 'Pink Rose Heart Opening', 'Aura Boundary Setting'],
      duration: '4 weeks',
      color: 'from-rose-pink to-deep-rose',
      price: '$197',
      originalPrice: '$297',
      isAvailable: true,
      isPopular: true,
      icon: '🌹'
    },
    {
      level: 'Level 2',
      title: 'Rose Meditation Level 2',
      subtitle: 'Deepen Your Practice',
      description: 'Expand your abilities with advanced Rose Meditation techniques and deeper spiritual connections',
      practices: ['Advanced Four Roses', 'Energy Transmutation', 'Chakra Rose Work', 'Sacred Healing'],
      duration: '6 weeks',
      color: 'from-golden-light to-earth-copper',
      price: '$397',
      originalPrice: '$497',
      isAvailable: false,
      isPopular: false,
      icon: '🌹✨'
    },
    {
      level: 'Level 3',
      title: 'Rose Meditation Level 3',
      subtitle: 'Master Level Practice',
      description: 'Master the highest levels of Rose Meditation and prepare for professional energy work',
      practices: ['Master Rose Techniques', 'Sacred Geometry', 'Advanced Healing', 'Spiritual Mastery'],
      duration: '8 weeks',
      color: 'from-earth-copper to-golden-light',
      price: '$597',
      originalPrice: '$797',
      isAvailable: false,
      isPopular: false,
      icon: '🌹👑'
    },
    {
      level: 'Certification',
      title: 'Become an Aura Reader',
      subtitle: 'Professional Certification Program',
      description: 'Transform your spiritual practice into a professional skill and guide others on their journey',
      practices: ['Aura Reading Mastery', 'Professional Ethics', 'Client Sessions', 'Business Training'],
      duration: '12 weeks',
      color: 'from-deep-rose to-rose-pink',
      price: '$1,297',
      originalPrice: '$1,797',
      isAvailable: false,
      isPopular: false,
      icon: '👁️✨'
    }
  ]

  return (
    <section className="py-20 bg-white/30 backdrop-blur-sm">
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
            Your Sacred Journey to Becoming an Aura Reader
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Follow the complete Rose Meditation pathway from foundation to mastery. 
            Start with Level 1 and progress through each level to unlock your full potential as an Aura Reader.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-pink to-deep-rose text-white rounded-full text-lg font-medium shadow-lg">
            <span className="text-2xl mr-2">🌹</span>
            Most Popular: Start with Rose Meditation Level 1
          </div>
        </motion.div>

        {/* Learning Path */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-pink via-golden-light to-earth-copper opacity-30 transform -translate-x-1/2"></div>

          {/* Path Steps */}
          <div className="space-y-12 lg:space-y-16">
            {pathSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Content Card */}
                <div className="flex-1 max-w-lg">
                  <div className={`card-sacred group relative overflow-hidden ${step.isPopular ? 'ring-2 ring-rose-pink shadow-2xl' : ''}`}>
                    {/* Popular Badge */}
                    {step.isPopular && (
                      <div className="absolute -top-2 -right-2 z-20">
                        <div className="bg-gradient-to-r from-rose-pink to-deep-rose text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          🔥 MOST POPULAR
                        </div>
                      </div>
                    )}
                    
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Level Badge & Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-sm font-medium`}>
                          {step.level}
                        </div>
                        <span className="text-3xl">{step.icon}</span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-rose-pink font-medium mb-3">
                        {step.subtitle}
                      </p>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Pricing */}
                      <div className="flex items-center space-x-3 mb-6">
                        <span className="text-2xl font-bold text-gradient-gold">
                          {step.price}
                        </span>
                        <span className="text-lg text-gray-500 line-through">
                          {step.originalPrice}
                        </span>
                        <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          Save {Math.round((1 - parseInt(step.price.replace(/[$,]/g, '')) / parseInt(step.originalPrice.replace(/[$,]/g, ''))) * 100)}%
                        </span>
                      </div>

                      {/* Practices */}
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-800 mb-3">
                          What You'll Master:
                        </h4>
                        <ul className="space-y-2">
                          {step.practices.map((practice, practiceIndex) => (
                            <li key={practiceIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {practice}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Duration & Availability */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-500">
                          Duration: {step.duration}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${step.isAvailable ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
                          {step.isAvailable ? 'Available Now' : 'Coming Soon'}
                        </span>
                      </div>

                      {/* CTA Button */}
                      <button 
                        onClick={() => handleCourseNavigation(step.title)}
                        disabled={!step.isAvailable}
                        className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                          step.isAvailable 
                            ? `bg-gradient-to-r ${step.color} text-white` 
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {step.isAvailable ? (
                          <>
                            {step.isPopular ? 'Start Your Journey' : 'Learn More'}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        ) : (
                          'Coming Soon'
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Step Number */}
                <div className="flex-shrink-0 lg:mx-8">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg relative z-10`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-2xl font-serif font-bold text-white">
                      {index + 1}
                    </span>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 max-w-lg lg:block hidden"></div>
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
          <div className="card-sacred max-w-3xl mx-auto bg-gradient-to-br from-rose-pink/10 to-deep-rose/10 border-2 border-rose-pink/20">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-rose rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">🌹</span>
              </div>
            </div>
            <h3 className="text-3xl font-serif font-semibold text-gray-800 mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join thousands of students who started with <strong>Rose Meditation Level 1</strong> and 
              transformed their spiritual practice. This mini-course is your gateway to becoming an Aura Reader.
            </p>
            
            {/* Special Offer */}
            <div className="bg-white rounded-xl p-6 mb-8 shadow-lg">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-gradient-gold">$197</span>
                <span className="text-xl text-gray-500 line-through">$297</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Save 34% - Limited Time
                </span>
              </div>
              <ul className="text-left space-y-2 mb-6 max-w-md mx-auto">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  10 comprehensive video lessons
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Guided meditation audios
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Sacred practice journal
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Lifetime access
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => router.push('/courses/rose-meditation-1/dashboard')}
                className="btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                🌹 Start Rose Meditation Level 1
              </button>
              <button 
                onClick={() => router.push('/courses/rose-meditation-1')}
                className="btn-secondary text-lg px-8 py-4"
              >
                Learn More About Level 1
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LearningPath
