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
      level: 'Foundation',
      title: 'Rose Meditation Level 1',
      description: 'Begin your sacred journey with fundamental practices',
      practices: ['Golden Sun Visualization', 'Basic Grounding Techniques', 'Pink Rose Meditation', 'Energy Awareness'],
      duration: '4 weeks',
      color: 'from-rose-pink to-deep-rose'
    },
    {
      level: 'Expansion',
      title: 'Aura Reading Fundamentals',
      description: 'Develop your intuitive sight and energy perception',
      practices: ['Aura Layer Recognition', 'Color Interpretation', 'Energy Field Mapping', 'Protective Boundaries'],
      duration: '6 weeks',
      color: 'from-golden-light to-earth-copper'
    },
    {
      level: 'Mastery',
      title: 'Advanced Energy Work',
      description: 'Master complex healing and transformation techniques',
      practices: ['Energy Transmutation', 'Sacred Geometry', 'Chakra Balancing', 'Spiritual Alchemy'],
      duration: '8 weeks',
      color: 'from-earth-copper to-golden-light'
    },
    {
      level: 'Integration',
      title: 'Sacred Teaching & Healing',
      description: 'Learn to guide others on their spiritual journey',
      practices: ['Teaching Methodology', 'Holding Sacred Space', 'Group Facilitation', 'Healing Protocols'],
      duration: '10 weeks',
      color: 'from-deep-rose to-rose-pink'
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
            Your Sacred Learning Path
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Follow a structured journey from beginner to master practitioner, 
            each step building upon the last in perfect sacred sequence.
          </p>
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
                  <div className="card-sacred group relative overflow-hidden">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Level Badge */}
                      <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-sm font-medium mb-4`}>
                        {step.level}
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Practices */}
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-800 mb-3">
                          What You'll Learn:
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

                      {/* Duration & CTA */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          Duration: {step.duration}
                        </span>
                        <button 
                          onClick={() => handleCourseNavigation(step.title)}
                          className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${step.color} text-white rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105`}
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </div>
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
          <div className="card-sacred max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-rose rounded-full flex items-center justify-center">
                <span className="text-xl">✨</span>
              </div>
            </div>
            <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
              Start Your Sacred Journey Today
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Begin with Rose Meditation Level 1 and unlock the doorway to your spiritual awakening. 
              Each course builds naturally upon the last, creating a complete transformation.
            </p>
            <button 
              onClick={() => router.push('/courses/rose-meditation-1/dashboard')}
              className="btn-primary text-lg px-8 py-3"
            >
              Begin Level 1 - Rose Meditation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LearningPath
