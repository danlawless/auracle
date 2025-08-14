'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Play, Clock, CheckCircle, Star, ArrowRight, Users, Download, BookOpen } from 'lucide-react'

export default function CourseOverviewPage() {
  const params = useParams()
  const router = useRouter()
  const courseId = params.courseId as string

  // Only show detailed overview for Rose Meditation Level 1
  if (courseId !== 'rose-meditation-1') {
  return (
    <div className="min-h-screen bg-gradient-sacred py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h1 className="text-3xl font-serif font-bold text-gray-800 mb-4">
              Course Coming Soon
          </h1>
          <p className="text-xl text-gray-600 mb-6">
              This course is currently being developed. Stay tuned!
            </p>
            <button 
              onClick={() => router.push('/courses')}
              className="btn-secondary px-6 py-3"
            >
              Back to Courses
            </button>
          </div>
        </div>
      </div>
    )
  }

  const lessons = [
    {
      id: 'rm1-001',
      title: 'Introduction to Rose Meditation',
      subtitle: 'Welcome to Your Sacred Journey',
      duration: 8,
      type: 'video',
      description: 'Discover the power of Rose Meditation and how it helps with energetic cleansing, grounding, protection, and personal sovereignty.',
      keyLearnings: [
        'Understanding energy and aura cleansing',
        'The symbolism and power of the Rose',
        'Setting intentions for your journey',
        'Creating sacred space for practice'
      ]
    },
    {
      id: 'rm1-002',
      title: 'Grounding Cord',
      subtitle: 'Creating Your Sacred Foundation',
      duration: 12,
      type: 'guided_practice',
      description: 'Learn the foundational practice of grounding - connecting your energy to the Earth for stability, presence, and energetic safety.',
      keyLearnings: [
        'Creating and visualizing your grounding cord',
        'Releasing unwanted energy into the Earth',
        'Establishing energetic stability',
        'Building presence in your body'
      ]
    },
    {
      id: 'rm1-003',
      title: 'Golden Sun',
      subtitle: 'Reclaiming Your Divine Light',
      duration: 15,
      type: 'guided_practice',
      description: 'Call back your scattered energy and fill yourself with your own golden light. This practice helps you reclaim your power and vitality.',
      keyLearnings: [
        'Calling back your scattered energy',
        'Working with golden light visualization',
        'Replenishing your energy field',
        'Strengthening your aura'
      ]
    },
    {
      id: 'rm1-004',
      title: 'Aura Boundaries',
      subtitle: 'Protecting Your Sacred Space',
      duration: 14,
      type: 'guided_practice',
      description: 'Create clear energetic boundaries around your aura to protect yourself from unwanted energies and maintain your sovereignty.',
      keyLearnings: [
        'Understanding energetic boundaries',
        'Creating protective barriers',
        'Maintaining energetic sovereignty',
        'Clearing foreign energies'
      ]
    },
    {
      id: 'rm1-005',
      title: 'Cord Renewal',
      subtitle: 'Refreshing Your Energetic Foundation',
      duration: 10,
      type: 'guided_practice',
      description: 'Learn to refresh and renew your grounding cord, ensuring your energetic foundation remains strong and clear.',
      keyLearnings: [
        'Releasing old grounding cords',
        'Creating fresh energetic connections',
        'Maintaining energetic hygiene',
        'Deepening your Earth connection'
      ]
    },
    {
      id: 'rm1-006',
      title: 'Four Roses Technique',
      subtitle: 'Advanced Energy Clearing',
      duration: 18,
      type: 'guided_practice',
      description: 'Master the powerful Four Roses technique for clearing and protecting your energy centers (chakras) with rose energy.',
      keyLearnings: [
        'Working with the Four Roses visualization',
        'Clearing and protecting chakras',
        'Using rose energy for healing',
        'Advanced energy clearing techniques'
      ]
    },
    {
      id: 'rm1-007',
      title: 'Earth & Cosmic Energy',
      subtitle: 'Connecting Heaven and Earth',
      duration: 16,
      type: 'guided_practice',
      description: 'Learn to work with both Earth and cosmic energies, creating a balanced flow of energy through your being.',
      keyLearnings: [
        'Connecting to cosmic energy',
        'Balancing Earth and sky energies',
        'Creating energetic flow',
        'Expanding your energy field'
      ]
    },
    {
      id: 'rm1-008',
      title: 'Cleansing Roses',
      subtitle: 'Deep Energetic Purification',
      duration: 20,
      type: 'guided_practice',
      description: 'Use the power of roses to deeply cleanse your energy field, removing stuck patterns and unwanted influences.',
      keyLearnings: [
        'Deep aura cleansing techniques',
        'Removing energetic attachments',
        'Clearing stuck patterns',
        'Purifying your energy field'
      ]
    },
    {
      id: 'rm1-009',
      title: 'Pink Rose Heart Opening',
      subtitle: 'Healing and Self-Love',
      duration: 17,
      type: 'guided_practice',
      description: 'Open your heart chakra with gentle pink rose energy, cultivating self-love, compassion, and emotional healing.',
      keyLearnings: [
        'Heart chakra healing and opening',
        'Cultivating self-love and compassion',
        'Working with pink rose energy',
        'Emotional healing techniques'
      ]
    },
    {
      id: 'rm1-010',
      title: 'Closing & Integration',
      subtitle: 'Completing Your Sacred Journey',
      duration: 12,
      type: 'integration',
      description: 'Integrate all you\'ve learned and create a sustainable daily practice that supports your continued spiritual growth.',
      keyLearnings: [
        'Integrating all Rose Meditation techniques',
        'Creating a daily practice routine',
        'Planning your continued journey',
        'Celebrating your transformation'
      ]
    }
  ]

  const totalDuration = lessons.reduce((total, lesson) => total + lesson.duration, 0)
  const totalHours = Math.floor(totalDuration / 60)
  const totalMinutes = totalDuration % 60

  return (
    <div className="min-h-screen bg-gradient-sacred">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-rose-pink to-deep-rose text-white rounded-full text-sm font-medium mb-6 shadow-lg">
              <span className="text-lg mr-2">🌹</span>
              Course Overview
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-800 mb-6 leading-tight">
              Rose Meditation Level 1
            </h1>
            <p className="text-xl md:text-2xl text-rose-pink font-medium mb-4">
              Foundation of Sacred Practice
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              A comprehensive journey into the foundational practices of Rose Meditation. 
              Learn to cleanse your energy, establish boundaries, and reclaim your spiritual sovereignty.
            </p>

            {/* Course Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex items-center text-gray-700">
                <Clock className="h-5 w-5 mr-2 text-rose-pink" />
                <span className="font-medium">{totalHours}h {totalMinutes}m total content</span>
              </div>
              <div className="flex items-center text-gray-700">
                <BookOpen className="h-5 w-5 mr-2 text-rose-pink" />
                <span className="font-medium">{lessons.length} lessons</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Users className="h-5 w-5 mr-2 text-rose-pink" />
                <span className="font-medium">2,847 students</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Star className="h-5 w-5 mr-2 text-golden-light fill-current" />
                <span className="font-medium">4.9 rating</span>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white rounded-2xl p-6 mb-8 shadow-xl border border-rose-pink/20 max-w-md mx-auto">
              <p className="text-sm text-gray-600 mb-3">Sacred Gift</p>
              <div className="flex items-center justify-center gap-4 mb-3">
                <span className="text-5xl font-bold text-gradient-gold">$49</span>
                <div className="text-center">
                  <span className="text-xl text-gray-400 line-through block">$197</span>
                  <span className="text-sm font-bold text-rose-pink bg-rose-pink/10 px-2 py-1 rounded-full">75% OFF</span>
                </div>
              </div>
              <p className="text-sm text-rose-pink font-medium">For those ready to receive</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/courses/rose-meditation-1/dashboard')}
                className="btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                🌹 Begin Sacred Practice
              </button>
              <button 
                onClick={() => router.push('/courses')}
                className="btn-secondary text-lg px-8 py-4"
              >
                Back to Courses
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">
              Your Sacred Curriculum
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each lesson builds upon the previous, creating a complete foundation for your spiritual practice.
            </p>
          </motion.div>

          {/* Lessons List */}
          <div className="space-y-6">
            {lessons.map((lesson, index) => (
              <motion.div
                key={lesson.id}
                className="card-sacred group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Lesson Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-pink to-deep-rose rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>

                  {/* Lesson Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-serif font-semibold text-gray-800 mb-1">
                          {lesson.title}
                        </h3>
                        <p className="text-rose-pink font-medium mb-2">
                          {lesson.subtitle}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 flex-shrink-0">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {lesson.duration} min
                        </div>
                        <div className="flex items-center">
                          {lesson.type === 'video' ? (
                            <Play className="h-4 w-4 mr-1" />
                          ) : lesson.type === 'guided_practice' ? (
                            <span className="text-lg mr-1">🧘‍♀️</span>
                          ) : (
                            <BookOpen className="h-4 w-4 mr-1" />
                          )}
                          {lesson.type.replace('_', ' ')}
                        </div>
                      </div>
            </div>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {lesson.description}
                    </p>

                    {/* Key Learnings */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-3">
                        What You'll Learn:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {lesson.keyLearnings.map((learning, learningIndex) => (
                          <div key={learningIndex} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            {learning}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Gain Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-8">
              Transform Your Energy, Transform Your Life
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="card-sacred text-left">
                <h3 className="text-xl font-serif font-semibold text-gray-800 mb-4">
                  🌹 Energetic Mastery
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    Clear and cleanse your aura daily
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    Create strong energetic boundaries
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    Ground yourself in any situation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    Reclaim your scattered energy
                  </li>
                </ul>
              </div>
              
              <div className="card-sacred text-left">
                <h3 className="text-xl font-serif font-semibold text-gray-800 mb-4">
                  👑 Spiritual Sovereignty
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    Trust your inner wisdom
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    Maintain your energetic authority
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    Navigate life from your center
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    Prepare for advanced spiritual work
                  </li>
                </ul>
              </div>
            </div>

            {/* Final CTA */}
            <div className="card-sacred bg-gradient-to-br from-rose-pink/10 to-deep-rose/10 border-2 border-rose-pink/20">
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
                Ready to Begin Your Sacred Journey?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Join thousands of students who have transformed their lives through Rose Meditation.
              </p>
              <button
                onClick={() => router.push('/courses/rose-meditation-1/dashboard')}
                className="btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                🌹 Start Your Journey Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </motion.div>
      </div>
      </section>
    </div>
  )
}