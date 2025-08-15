'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { 
  BookOpen, 
  Play, 
  Clock, 
  CheckCircle, 
  Star, 
  Users,
  Calendar,
  Award,
  Sparkles,
  ArrowRight,
  Video
} from 'lucide-react'
import { useUser } from '../../contexts/UserContext'

const UserLibrary = () => {
  const { user, hasPurchasedCourse, hasActiveMembership } = useUser()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'courses' | 'progress' | 'achievements' | 'community'>('courses')

  // Mock course data - in production, this would come from an API
  const availableCourses = [
    {
      id: 'rose-meditation-1',
      title: 'Rose Meditation Level 1',
      subtitle: 'Foundation of Sacred Practice',
      description: 'Begin your transformative journey with foundational Rose Meditation practices',
      image: '🌹',
      price: '$49',
      originalPrice: '$197',
      duration: '4 weeks',
      lessons: 10,
      students: 2847,
      rating: 4.9,
      progress: hasPurchasedCourse('rose-meditation-1') ? 65 : 0,
      isPurchased: hasPurchasedCourse('rose-meditation-1'),
      lastAccessed: hasPurchasedCourse('rose-meditation-1') ? '2 days ago' : null
    },
    {
      id: 'rose-meditation-2',
      title: 'Rose Meditation Level 2',
      subtitle: 'Deepen Your Sacred Practice',
      description: 'Advanced techniques for deeper spiritual connection',
      image: '🌹✨',
      price: '$397',
      originalPrice: '$497',
      duration: '6 weeks',
      lessons: 15,
      students: 0,
      rating: 0,
      progress: 0,
      isPurchased: false,
      lastAccessed: null,
      isComingSoon: true
    },
    {
      id: 'rose-meditation-3',
      title: 'Rose Meditation Level 3',
      subtitle: 'Master Level Practice',
      description: 'Complete mastery of Rose Meditation teachings',
      image: '🌹👑',
      price: '$597',
      originalPrice: '$797',
      duration: '8 weeks',
      lessons: 20,
      students: 0,
      rating: 0,
      progress: 0,
      isPurchased: false,
      lastAccessed: null,
      isComingSoon: true
    }
  ]

  const purchasedCourses = availableCourses.filter(course => course.isPurchased)
  const availableForPurchase = availableCourses.filter(course => !course.isPurchased && !course.isComingSoon)

  const mockAchievements = [
    {
      id: 'first-lesson',
      title: 'Sacred Beginning',
      description: 'Completed your first lesson',
      icon: '🌱',
      unlockedAt: '3 days ago',
      rarity: 'common'
    },
    {
      id: 'week-streak',
      title: 'Dedicated Practitioner',
      description: '7 days of consistent practice',
      icon: '🔥',
      unlockedAt: '1 day ago',
      rarity: 'rare'
    }
  ]

  const handleCourseClick = (course: any) => {
    if (course.isPurchased) {
      router.push(`/courses/${course.id}/dashboard`)
    } else if (course.isComingSoon) {
      // Show coming soon message
      return
    } else {
      // Trigger purchase flow
      router.push(`/courses/${course.id}`)
    }
  }

  const tabs = [
    { id: 'courses', label: 'My Courses', icon: BookOpen },
    { id: 'progress', label: 'Progress', icon: CheckCircle },
    { id: 'achievements', label: 'Achievements', icon: Award },
    ...(hasActiveMembership() ? [{ id: 'community', label: 'Community', icon: Users }] : [])
  ]

  return (
    <div className="min-h-screen bg-gradient-sacred">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-rose-pink to-deep-rose rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Sparkles className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Welcome back, {user?.name?.split(' ')[0]}
          </h1>
          <p className="text-xl text-gray-600">
            Your sacred learning sanctuary
          </p>

          {/* Membership Status Banner */}
          {hasActiveMembership() && (
            <motion.div
              className="max-w-2xl mx-auto mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-golden-light/10 to-earth-copper/10 rounded-xl p-6 border-2 border-golden-light/30 shadow-lg">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-golden-light to-earth-copper rounded-full flex items-center justify-center mr-3">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-gray-800">
                    Community Member
                  </h3>
                  {user?.membership?.trialEndDate && new Date(user.membership.trialEndDate) > new Date() && (
                    <span className="ml-3 text-xs font-bold text-golden-dark bg-golden-light/20 px-2 py-1 rounded-full">
                      FREE TRIAL
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-center">
                  You have access to live sessions, weekly calls, and our private community
                </p>
                {user?.membership?.trialEndDate && new Date(user.membership.trialEndDate) > new Date() && (
                  <p className="text-sm text-golden-dark text-center mt-2">
                    Trial ends {new Date(user.membership.trialEndDate).toLocaleDateString()}
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-rose-pink to-deep-rose text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
                }`}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Tab */}
        {activeTab === 'courses' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* My Courses */}
            {purchasedCourses.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">
                  My Courses
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {purchasedCourses.map((course, index) => (
                    <motion.div
                      key={course.id}
                      className="card-sacred group cursor-pointer hover:shadow-xl transition-all duration-300"
                      onClick={() => handleCourseClick(course)}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {/* Progress Ring */}
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        {course.progress}%
                      </div>

                      <div className="text-center mb-4">
                        <div className="text-4xl mb-2">{course.image}</div>
                        <h3 className="text-xl font-serif font-semibold text-gray-800 mb-1">
                          {course.title}
                        </h3>
                        <p className="text-rose-pink font-medium text-sm mb-2">
                          {course.subtitle}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {course.description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        {/* Progress Bar */}
                        <div>
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="flex justify-between text-sm text-gray-600">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {course.duration}
                          </div>
                          <div className="flex items-center">
                            <BookOpen className="h-4 w-4 mr-1" />
                            {course.lessons} lessons
                          </div>
                        </div>

                        {course.lastAccessed && (
                          <div className="text-xs text-gray-500">
                            Last accessed {course.lastAccessed}
                          </div>
                        )}

                        {/* Continue Button */}
                        <button className="w-full bg-gradient-to-r from-rose-pink to-deep-rose text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center justify-center">
                          <Play className="h-4 w-4 mr-2" />
                          Continue Learning
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Available Courses */}
            {availableForPurchase.length > 0 && (
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">
                  Continue Your Journey
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {availableForPurchase.map((course, index) => (
                    <motion.div
                      key={course.id}
                      className="card-sacred group cursor-pointer hover:shadow-xl transition-all duration-300"
                      onClick={() => handleCourseClick(course)}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="text-center mb-4">
                        <div className="text-4xl mb-2">{course.image}</div>
                        <h3 className="text-xl font-serif font-semibold text-gray-800 mb-1">
                          {course.title}
                        </h3>
                        <p className="text-rose-pink font-medium text-sm mb-2">
                          {course.subtitle}
                        </p>
                        <p className="text-gray-600 text-sm mb-4">
                          {course.description}
                        </p>

                        {/* Pricing */}
                        <div className="flex items-center justify-center gap-2 mb-4">
                          <span className="text-2xl font-bold text-gradient-gold">{course.price}</span>
                          {course.originalPrice && (
                            <>
                              <span className="text-lg text-gray-400 line-through">{course.originalPrice}</span>
                              <span className="text-xs font-bold text-rose-pink bg-rose-pink/10 px-2 py-1 rounded-full">
                                75% OFF
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex justify-between text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-1" />
                          {course.lessons} lessons
                        </div>
                      </div>

                      {/* Purchase Button */}
                      <button className="w-full bg-gradient-to-r from-golden-light to-earth-copper text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center justify-center">
                        <Sparkles className="h-4 w-4 mr-2" />
                        Begin Sacred Practice
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Empty State */}
            {purchasedCourses.length === 0 && availableForPurchase.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-gray-500" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2">
                  No courses yet
                </h3>
                <p className="text-gray-600 mb-6">
                  Begin your sacred journey with Rose Meditation Level 1
                </p>
                <button 
                  onClick={() => router.push('/courses')}
                  className="btn-primary px-6 py-3"
                >
                  Explore Courses
                </button>
              </div>
            )}
          </motion.div>
        )}

        {/* Progress Tab */}
        {activeTab === 'progress' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2">
              Progress Tracking
            </h3>
            <p className="text-gray-600">
              Detailed progress tracking coming soon
            </p>
          </motion.div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {mockAchievements.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockAchievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    className="card-sacred text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-4xl mb-4">{achievement.icon}</div>
                    <h3 className="text-lg font-serif font-semibold text-gray-800 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {achievement.description}
                    </p>
                    <p className="text-xs text-gray-500">
                      Unlocked {achievement.unlockedAt}
                    </p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-br from-golden-light to-earth-copper rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2">
                  No achievements yet
                </h3>
                <p className="text-gray-600">
                  Start learning to unlock your first achievements
                </p>
              </div>
            )}
          </motion.div>
        )}

        {/* Community Tab */}
        {activeTab === 'community' && hasActiveMembership() && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Upcoming Live Sessions */}
              <div className="card-sacred">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-pink to-deep-rose rounded-full flex items-center justify-center mr-3">
                    <Video className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-gray-800">
                    Upcoming Live Sessions
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-rose-pink/5 to-deep-rose/5 rounded-lg p-4 border border-rose-pink/20">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-800">Rose Meditation Practice</h4>
                      <span className="text-sm text-rose-pink font-medium">LIVE</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Join Jae for a guided Rose Meditation session
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      Tomorrow, 7:00 PM PST
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-800">Weekly Community Call</h4>
                      <span className="text-sm text-gray-500">Upcoming</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Q&A and group discussion with fellow practitioners
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      Friday, 6:00 PM PST
                    </div>
                  </div>
                </div>
                <button className="w-full mt-4 btn-secondary">
                  View All Sessions
                </button>
              </div>

              {/* Community Features */}
              <div className="card-sacred">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-golden-light to-earth-copper rounded-full flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-gray-800">
                    Community Access
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-gradient-to-br from-golden-light/5 to-earth-copper/5 rounded-lg">
                    <Users className="h-5 w-5 text-golden-light mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">Private Community</div>
                      <div className="text-sm text-gray-600">Connect with 2,847+ members</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gradient-to-br from-golden-light/5 to-earth-copper/5 rounded-lg">
                    <Video className="h-5 w-5 text-golden-light mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">Live Sessions</div>
                      <div className="text-sm text-gray-600">Weekly guided practices with Jae</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gradient-to-br from-golden-light/5 to-earth-copper/5 rounded-lg">
                    <Sparkles className="h-5 w-5 text-golden-light mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">Personalized Support</div>
                      <div className="text-sm text-gray-600">Direct guidance on your journey</div>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-4 btn-primary">
                  Enter Community
                </button>
              </div>
            </div>

            {/* Membership Management */}
            <div className="mt-8 card-sacred bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mr-3">
                  <Star className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-gray-800">
                  Membership Status
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Current Plan</div>
                  <div className="text-lg font-semibold text-gray-800">
                    Community Membership
                    {user?.membership?.trialEndDate && new Date(user.membership.trialEndDate) > new Date() && (
                      <span className="ml-2 text-sm font-normal text-amber-600">(Free Trial)</span>
                    )}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">
                    {user?.membership?.trialEndDate && new Date(user.membership.trialEndDate) > new Date() 
                      ? 'Trial Ends' 
                      : 'Next Billing'
                    }
                  </div>
                  <div className="text-lg font-semibold text-gray-800">
                    {user?.membership?.trialEndDate && new Date(user.membership.trialEndDate) > new Date()
                      ? new Date(user.membership.trialEndDate).toLocaleDateString()
                      : user?.membership?.nextBillingDate 
                        ? new Date(user.membership.nextBillingDate).toLocaleDateString()
                        : 'N/A'
                    }
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-amber-200">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    Membership includes live sessions, community access, and personalized guidance
                  </div>
                  <button className="btn-secondary text-sm">
                    Manage Membership
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default UserLibrary
