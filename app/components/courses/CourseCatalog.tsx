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
      subtitle: 'Foundation of Sacred Practice',
      description: 'Begin your journey with the fundamental practices of Rose Meditation, learning to connect with your inner sanctuary through guided visualizations.',
      image: '🌹',
      price: 197,
      originalPrice: 297,
      duration: '4 weeks',
      lessons: 12,
      students: 847,
      rating: 4.9,
      level: 'Beginner',
      includes: [
        '12 HD video lessons',
        'Guided meditation audios',
        'Sacred practice journal',
        'Weekly group calls',
        'Lifetime access'
      ],
      highlights: [
        'Golden Sun Visualization',
        'Grounding Cord Technique',
        'Pink Rose Heart Opening',
        'Energy Boundary Setting'
      ],
      category: 'Foundation'
    },
    {
      id: 'aura-reading-fundamentals',
      title: 'Aura Reading Fundamentals',
      subtitle: 'Awaken Your Intuitive Sight',
      description: 'Develop your natural ability to see and interpret auras, understanding the language of energy that surrounds every living being.',
      image: '👁️',
      price: 397,
      originalPrice: 497,
      duration: '6 weeks',
      lessons: 18,
      students: 523,
      rating: 4.8,
      level: 'Intermediate',
      includes: [
        '18 comprehensive lessons',
        'Practice partner sessions',
        'Aura color guide',
        'Energy mapping tools',
        'Personal feedback'
      ],
      highlights: [
        'Aura Layer Recognition',
        'Color Interpretation',
        'Energy Field Mapping',
        'Protective Techniques'
      ],
      category: 'Development'
    },
    {
      id: 'energy-hygiene-mastery',
      title: 'Energy Hygiene Mastery',
      subtitle: 'Cleansing, Recovery & Protection',
      description: 'Master the essential practices of energetic self-care, learning to cleanse, protect, and maintain your energetic field.',
      image: '✨',
      price: 297,
      originalPrice: 397,
      duration: '5 weeks',
      lessons: 15,
      students: 692,
      rating: 4.9,
      level: 'All Levels',
      includes: [
        '15 practical lessons',
        'Daily practice routines',
        'Protection rituals',
        'Cleansing ceremonies',
        'Emergency protocols'
      ],
      highlights: [
        'Daily Cleansing Rituals',
        'Psychic Protection',
        'Energy Recovery',
        'Space Clearing'
      ],
      category: 'Essential'
    },
    {
      id: 'sacred-visualization',
      title: 'Sacred Visualization Mastery',
      subtitle: 'Golden Sun & Pink Rose Practices',
      description: 'Deepen your visualization skills with advanced techniques using the sacred symbols of the Golden Sun and Pink Rose.',
      image: '☀️',
      price: 347,
      originalPrice: 447,
      duration: '6 weeks',
      lessons: 16,
      students: 389,
      rating: 4.8,
      level: 'Intermediate',
      includes: [
        '16 visualization sessions',
        'Advanced techniques',
        'Sacred geometry',
        'Manifestation practices',
        'Personal attunement'
      ],
      highlights: [
        'Golden Sun Mastery',
        'Rose Heart Activation',
        'Sacred Geometry',
        'Manifestation Alchemy'
      ],
      category: 'Advanced'
    },
    {
      id: 'spiritual-boundaries',
      title: 'Spiritual Boundaries & Four Roses',
      subtitle: 'Sacred Protection & Observation',
      description: 'Learn the profound practice of the Four Roses technique for creating sacred boundaries and maintaining spiritual sovereignty.',
      image: '🛡️',
      price: 447,
      originalPrice: 547,
      duration: '8 weeks',
      lessons: 20,
      students: 267,
      rating: 5.0,
      level: 'Advanced',
      includes: [
        '20 intensive lessons',
        'Four Roses mastery',
        'Boundary protocols',
        'Advanced protection',
        'Mentorship calls'
      ],
      highlights: [
        'Four Roses Technique',
        'Energetic Sovereignty',
        'Advanced Protection',
        'Sacred Observation'
      ],
      category: 'Mastery'
    },
    {
      id: 'complete-auracle-certification',
      title: 'Complete Auracle Certification',
      subtitle: 'Master Practitioner Training',
      description: 'The comprehensive certification program covering all aspects of aura reading, Rose Meditation, and sacred healing practices.',
      image: '🎓',
      price: 1297,
      originalPrice: 1797,
      duration: '12 weeks',
      lessons: 48,
      students: 156,
      rating: 4.9,
      level: 'Professional',
      includes: [
        '48 comprehensive modules',
        'Live mentorship',
        'Practice sessions',
        'Certification exam',
        'Business guidance'
      ],
      highlights: [
        'Complete Methodology',
        'Teaching Certification',
        'Business Training',
        'Ongoing Support'
      ],
      category: 'Certification'
    }
  ]

  const categories = ['All', 'Foundation', 'Essential', 'Development', 'Advanced', 'Mastery', 'Certification']

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
            Sacred Course Catalog
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Choose your perfect course and begin transforming your spiritual practice today. 
            Each course is lovingly crafted to guide you deeper into sacred awareness.
          </p>
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
              className="card-sacred group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
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
                  className="flex-1 btn-primary text-center"
                >
                  {course.id === 'rose-meditation-1' ? 'Start Learning' : 'Coming Soon'}
                </button>
                <button 
                  onClick={(e) => {
                    e.preventDefault()
                    console.log('Play button clicked:', course.id)
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
          <div className="card-sacred max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                <span className="text-xl">🎁</span>
              </div>
            </div>
            <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
              Special Bundle Offers
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Save up to 40% when you bundle courses together. Create your perfect learning path 
              and receive bonus materials, extended support, and exclusive community access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                View Bundle Deals
              </button>
              <button className="btn-secondary">
                Get Free Course Preview
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CourseCatalog
