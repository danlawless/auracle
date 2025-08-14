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
    <section className="py-20 bg-gradient-sacred">
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
            Your Complete Journey to Aura Reading Mastery
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Follow the sacred pathway from Rose Meditation Level 1 through professional certification. 
            Each step builds upon the last, creating a complete transformation.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-golden-light to-earth-copper text-white rounded-full text-lg font-medium shadow-lg">
            <span className="text-xl mr-2">🌟</span>
            Complete 4-Step Journey: Level 1 → Level 2 → Level 3 → Aura Reader
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border-2 border-rose-pink text-rose-pink hover:bg-rose-pink hover:text-white transition-all duration-300 font-medium"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              className={`card-sacred group relative overflow-hidden ${course.isPopular ? 'ring-2 ring-rose-pink shadow-2xl' : ''} ${!course.isAvailable ? 'opacity-75' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Popular Badge */}
              {course.isPopular && (
                <div className="absolute -top-2 -right-2 z-20">
                  <div className="bg-gradient-to-r from-rose-pink to-deep-rose text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    🔥 START HERE
                  </div>
                </div>
              )}
              
              {/* Coming Soon Overlay */}
              {!course.isAvailable && (
                <div className="absolute inset-0 bg-gray-900/20 backdrop-blur-[1px] z-10 flex items-center justify-center">
                  <div className="bg-white/95 px-4 py-2 rounded-full text-gray-700 font-medium shadow-lg">
                    Coming Soon
                  </div>
                </div>
              )}
              {/* Course Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-rose rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                    {course.image}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="px-2 py-1 bg-golden-light/20 text-earth-copper text-xs font-medium rounded-full">
                        {course.level}
                      </span>
                      <span className="px-2 py-1 bg-rose-pink/20 text-deep-rose text-xs font-medium rounded-full">
                        {course.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-gray-800">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {course.subtitle}
                    </p>
                  </div>
                </div>
                
                {/* Price */}
                <div className="text-right">
                  <div className="text-2xl font-bold text-gradient-gold">
                    ${course.price}
                  </div>
                  <div className="text-sm text-gray-500 line-through">
                    ${course.originalPrice}
                  </div>
                </div>
              </div>

              {/* Course Stats */}
              <div className="flex items-center space-x-6 mb-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  {course.lessons} lessons
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {course.students} students
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 text-golden-light fill-current" />
                  {course.rating}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {course.description}
              </p>

              {/* Course Highlights */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-800 mb-3">
                  Key Practices:
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {course.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-rose-pink rounded-full mr-2 flex-shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-800 mb-3">
                  What's Included:
                </h4>
                <ul className="space-y-1">
                  {course.includes.slice(0, 3).map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-golden-light rounded-full mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                  {course.includes.length > 3 && (
                    <li className="text-sm text-gray-500 italic">
                      +{course.includes.length - 3} more...
                    </li>
                  )}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button 
                  onClick={(e) => {
                    e.preventDefault()
                    if (!course.isAvailable) return
                    
                    console.log('Course button clicked:', course.id)
                    try {
                      if (course.id === 'rose-meditation-1') {
                        console.log('Navigating to dashboard')
                        router.push(`/courses/${course.id}/dashboard`)
                      } else {
                        console.log('Navigating to course page')
                        router.push(`/courses/${course.id}`)
                      }
                    } catch (error) {
                      console.error('Navigation error:', error)
                      // Fallback to window.location
                      window.location.href = course.id === 'rose-meditation-1' 
                        ? `/courses/${course.id}/dashboard` 
                        : `/courses/${course.id}`
                    }
                  }}
                  disabled={!course.isAvailable}
                  className={`flex-1 text-center py-3 px-6 rounded-full font-medium transition-all duration-300 ${
                    course.isAvailable 
                      ? 'btn-primary hover:shadow-lg hover:scale-105' 
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {course.isAvailable ? (course.isPopular ? '🌹 Start Your Journey' : 'Learn More') : 'Coming Soon'}
                </button>
                
                {course.isAvailable && (
                  <>
                    <button 
                      onClick={(e) => {
                        e.preventDefault()
                        try {
                          if (course.id === 'rose-meditation-1') {
                            router.push(`/courses/${course.id}/dashboard`)
                          } else {
                            router.push(`/courses/${course.id}`)
                          }
                        } catch (error) {
                          console.error('Navigation error:', error)
                          window.location.href = course.id === 'rose-meditation-1' 
                            ? `/courses/${course.id}/dashboard` 
                            : `/courses/${course.id}`
                        }
                      }}
                      className="px-4 py-3 border-2 border-rose-pink text-rose-pink rounded-full hover:bg-rose-pink hover:text-white transition-all duration-300"
                    >
                      <Play className="h-4 w-4" />
                    </button>
                    <button className="px-4 py-3 border-2 border-golden-light text-earth-copper rounded-full hover:bg-golden-light hover:text-white transition-all duration-300">
                      <Download className="h-4 w-4" />
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          ))}
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
              Your Journey Starts with Rose Meditation Level 1
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join <strong>2,847 students</strong> who started their transformation with our most popular mini-course. 
              Master the foundational practices that will prepare you for the complete journey to becoming an Aura Reader.
            </p>
            
            {/* Journey Steps Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-pink to-deep-rose rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="text-sm font-medium text-gray-800">Level 1</div>
                <div className="text-xs text-gray-600">Available Now</div>
              </div>
              <div className="text-center opacity-60">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-500 font-bold">2</span>
                </div>
                <div className="text-sm font-medium text-gray-500">Level 2</div>
                <div className="text-xs text-gray-400">Coming Soon</div>
              </div>
              <div className="text-center opacity-60">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-500 font-bold">3</span>
                </div>
                <div className="text-sm font-medium text-gray-500">Level 3</div>
                <div className="text-xs text-gray-400">Coming Soon</div>
              </div>
              <div className="text-center opacity-60">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-500 text-lg">👁️</span>
                </div>
                <div className="text-sm font-medium text-gray-500">Aura Reader</div>
                <div className="text-xs text-gray-400">Final Goal</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => router.push('/courses/rose-meditation-1/dashboard')}
                className="btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                🌹 Start Level 1 - Only $197
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

export default CourseCatalog
