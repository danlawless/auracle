'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Clock, Users, Star, Play, Download, BookOpen } from 'lucide-react'

const CourseCatalog = () => {
  const router = useRouter()
  
  const courses = [
    {
      id: 'rose-meditation-1',
      title: 'Rose Meditation Level 1',
      subtitle: 'Mini Course - Your Gateway to Sacred Practice',
      description: 'Begin your transformative journey with the foundational practices that will unlock your spiritual potential and set you on the path to becoming an Aura Reader.',
      image: '🌹',
      price: 197,
      originalPrice: 297,
      duration: '4 weeks',
      lessons: 10,
      students: 2847,
      rating: 4.9,
      level: 'Start Here',
      includes: [
        '10 HD video lessons',
        'Guided meditation audios',
        'Sacred practice journal',
        'AI-powered learning assistant',
        'Lifetime access'
      ],
      highlights: [
        'Golden Sun Visualization',
        'Grounding Cord Mastery',
        'Pink Rose Heart Opening',
        'Aura Boundary Setting'
      ],
      category: 'Journey Step 1',
      isAvailable: true,
      isPopular: true,
      journeyStep: 1
    },
    {
      id: 'rose-meditation-2',
      title: 'Rose Meditation Level 2',
      subtitle: 'Deepen Your Sacred Practice',
      description: 'Expand your abilities with advanced Rose Meditation techniques and deeper spiritual connections. Build upon Level 1 foundations.',
      image: '🌹✨',
      price: 397,
      originalPrice: 497,
      duration: '6 weeks',
      lessons: 15,
      students: 0,
      rating: 0,
      level: 'Intermediate',
      includes: [
        '15 advanced video lessons',
        'Master-level meditations',
        'Advanced practice guide',
        'Group healing sessions',
        'Lifetime access'
      ],
      highlights: [
        'Advanced Four Roses',
        'Energy Transmutation',
        'Chakra Rose Work',
        'Sacred Healing Techniques'
      ],
      category: 'Journey Step 2',
      isAvailable: false,
      isPopular: false,
      journeyStep: 2
    },
    {
      id: 'rose-meditation-3',
      title: 'Rose Meditation Level 3',
      subtitle: 'Master Level Sacred Practice',
      description: 'Master the highest levels of Rose Meditation and prepare for professional energy work. Complete your foundation training.',
      image: '🌹👑',
      price: 597,
      originalPrice: 797,
      duration: '8 weeks',
      lessons: 20,
      students: 0,
      rating: 0,
      level: 'Advanced',
      includes: [
        '20 master-level lessons',
        'Professional techniques',
        'Certification preparation',
        'Mentorship sessions',
        'Lifetime access'
      ],
      highlights: [
        'Master Rose Techniques',
        'Sacred Geometry Integration',
        'Advanced Healing Protocols',
        'Spiritual Mastery'
      ],
      category: 'Journey Step 3',
      isAvailable: false,
      isPopular: false,
      journeyStep: 3
    },
    {
      id: 'aura-reader-certification',
      title: 'Become an Aura Reader',
      subtitle: 'Professional Certification Program',
      description: 'Transform your spiritual practice into a professional skill. Complete certification program to guide others and offer professional readings.',
      image: '👁️✨',
      price: 1297,
      originalPrice: 1797,
      duration: '12 weeks',
      lessons: 48,
      students: 0,
      rating: 0,
      level: 'Professional',
      includes: [
        '48 comprehensive modules',
        'Live mentorship calls',
        'Practice client sessions',
        'Certification exam',
        'Business training'
      ],
      highlights: [
        'Aura Reading Mastery',
        'Professional Ethics',
        'Client Session Skills',
        'Business Development'
      ],
      category: 'Final Destination',
      isAvailable: false,
      isPopular: false,
      journeyStep: 4
    }
  ]

  const categories = ['All', 'Journey Step 1', 'Journey Step 2', 'Journey Step 3', 'Final Destination']

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
            Your Sacred Path to Self-Sovereignty
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            A sacred progression through Rose Meditation teachings, each level unlocking deeper wisdom. 
            Each step honors your inner knowing and prepares you for spiritual sovereignty.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-golden-light to-earth-copper text-white rounded-full text-lg font-medium shadow-lg">
            <span className="text-xl mr-2">🌹</span>
            Sacred Journey: Level 1 → Level 2 → Level 3 → Self-Sovereignty
          </div>
        </motion.div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.slice(0, 3).map((course, index) => (
            <motion.div
              key={course.id}
              className="card-sacred group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {course.isPopular && (
                <div className="absolute -top-2 -right-2 z-20">
                  <div className="bg-gradient-to-r from-rose-pink to-deep-rose text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    🌹 START HERE
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-br from-rose-pink to-deep-rose opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-rose-pink to-deep-rose text-white text-sm font-medium">
                    Level {course.journeyStep}
                  </div>
                  <span className="text-3xl">{course.journeyStep === 1 ? '🌹' : course.journeyStep === 2 ? '🌹✨' : '🌹👑'}</span>
                </div>

                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-rose-pink font-medium mb-3">
                  {course.subtitle}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                <div className="text-center mb-6">
                  <p className="text-sm text-gray-600 mb-1">Sacred Investment</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-2xl font-bold text-gradient-gold">{course.price}</span>
                    {course.originalPrice && (
                      <>
                        <span className="text-lg text-gray-400 line-through">{course.originalPrice}</span>
                        <span className="text-xs font-bold text-rose-pink bg-rose-pink/10 px-2 py-1 rounded-full">75% OFF</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Duration: {course.duration}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-rose-100 text-rose-800">
                    {course.journeyStep === 1 ? 'Begin Here' : 'Unlocks Next'}
                  </span>
                </div>

                <button 
                  onClick={() => router.push(`/courses/${course.id}`)}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                    course.isAvailable 
                      ? 'bg-gradient-to-r from-rose-pink to-deep-rose text-white' 
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!course.isAvailable}
                >
                  {course.isAvailable ? (
                    <>
                      Begin Sacred Practice
                      <Play className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    'Complete Previous Level'
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="card-sacred max-w-3xl mx-auto bg-gradient-to-br from-golden-light/5 to-earth-copper/5 border-2 border-golden-light/30">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-golden-light to-earth-copper rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">👑✨</span>
              </div>
            </div>
            <h3 className="text-3xl font-serif font-bold text-gray-800 mb-4">
              Your Spiritual Sovereignty Awaits
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Complete the Rose Meditation journey: Level 1 → Level 2 → Level 3 → Self-Sovereignty. 
              Each step unlocks the next, guiding you to divine remembrance and energetic mastery.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => router.push('/courses/rose-meditation-1')}
                className="btn-primary text-lg px-12 py-4"
              >
                🌹 Start Level 1 - Only $49
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default CourseCatalog
