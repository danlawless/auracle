'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Play, 
  CheckCircle, 
  Lock, 
  Trophy, 
  Flame, 
  Clock, 
  BookOpen,
  Star,
  Medal,
  Target,
  Calendar,
  TrendingUp,
  Sparkles
} from 'lucide-react'
import { Lesson, Course } from '../../../types/course'
import { useLessonProgression } from '../../../hooks/useLessonProgression'
import EnhancedLessonView from './EnhancedLessonView'
import CourseCompletionCelebration from './CourseCompletionCelebration'

interface CourseDashboardProps {
  course: Course
  lessons: Lesson[]
}

const CourseDashboard: React.FC<CourseDashboardProps> = ({ course, lessons }) => {
  const {
    courseProgress,
    completeLesson,
    isLessonUnlocked,
    isLessonCompleted,
    getCourseStats,
    isCourseCompleted,
    getCourseCompletionDate,
    isClient
  } = useLessonProgression(course.id)

  const [currentView, setCurrentView] = useState<'dashboard' | 'lesson'>('dashboard')
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null)
  const [showCelebration, setShowCelebration] = useState(false)

  const stats = getCourseStats()

  const startLesson = (lesson: Lesson) => {
    if (isLessonUnlocked(lesson.id)) {
      setSelectedLesson(lesson)
      setCurrentView('lesson')
    }
  }

  const handleLessonComplete = (lessonId: string, completionData: any) => {
    completeLesson(lessonId, completionData)
    
    // Check if course is now completed (checking if this was the last lesson)
    // Only trigger on client side to prevent hydration issues
    const wasJustCompleted = isClient && lessonId === 'rm1-010' && !stats.isCompleted
    
    // Return to dashboard after completion
    setCurrentView('dashboard')
    setSelectedLesson(null)
    
    if (wasJustCompleted) {
      // Show celebration for course completion after a brief delay
      setTimeout(() => {
        setShowCelebration(true)
      }, 500)
    }
  }

  const handleNext = () => {
    if (selectedLesson) {
      const currentIndex = lessons.findIndex(l => l.id === selectedLesson.id)
      const nextLesson = lessons[currentIndex + 1]
      if (nextLesson && isLessonUnlocked(nextLesson.id)) {
        setSelectedLesson(nextLesson)
      }
    }
  }

  const handlePrevious = () => {
    if (selectedLesson) {
      const currentIndex = lessons.findIndex(l => l.id === selectedLesson.id)
      const prevLesson = lessons[currentIndex - 1]
      if (prevLesson) {
        setSelectedLesson(prevLesson)
      }
    }
  }

  const handleBackToDashboard = () => {
    setCurrentView('dashboard')
    setSelectedLesson(null)
  }

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-gray-600 bg-gray-100'
      case 'uncommon': return 'text-green-600 bg-green-100'
      case 'rare': return 'text-blue-600 bg-blue-100'
      case 'legendary': return 'text-purple-600 bg-purple-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  if (currentView === 'lesson' && selectedLesson) {
    const currentIndex = lessons.findIndex(l => l.id === selectedLesson.id)
    const hasNext = currentIndex < lessons.length - 1 && isLessonUnlocked(lessons[currentIndex + 1]?.id)
    const hasPrevious = currentIndex > 0

    return (
      <EnhancedLessonView
        lesson={selectedLesson}
        onComplete={handleLessonComplete}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onBackToDashboard={handleBackToDashboard}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
        progress={{
          current: currentIndex + 1,
          total: lessons.length,
          percentage: ((currentIndex + 1) / lessons.length) * 100
        }}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-sacred">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Course Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-rose rounded-3xl flex items-center justify-center text-3xl shadow-lg">
              🌹
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient-rose mb-4">
            {course.title}
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {course.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Progress Overview */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="card-sacred mb-8">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-6">
                {isClient && stats.isCompleted ? '🌹 Sacred Journey Complete!' : 'Your Sacred Journey'}
              </h2>
              
              {/* Completion Badge or Progress Bar */}
              {isClient && stats.isCompleted ? (
                <div className="mb-6 p-6 bg-gradient-to-r from-golden-light/20 via-rose-pink/20 to-soft-lavender/20 rounded-2xl border-2 border-golden-light/30">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center shadow-lg">
                      <Trophy className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                      Congratulations! Course Mastered
                    </p>
                    <p className="text-sm text-gray-600">
                      Completed on {stats.completionDate?.toLocaleDateString('en-US', { 
                        weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Course Progress</span>
                    <span className="text-sm font-medium text-deep-rose">{stats.overallProgress}% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      className="h-3 bg-gradient-rose rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${stats.overallProgress}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>
              )}

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-rose-pink/10 rounded-2xl">
                  <BookOpen className="h-6 w-6 text-deep-rose mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{stats.completedLessons}</div>
                  <div className="text-sm text-gray-600">Lessons Done</div>
                </div>
                <div className="text-center p-4 bg-golden-light/10 rounded-2xl">
                  <Flame className="h-6 w-6 text-earth-copper mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">0</div>
                  <div className="text-sm text-gray-600">Day Streak</div>
                </div>
                <div className="text-center p-4 bg-sage-green/10 rounded-2xl">
                  <Clock className="h-6 w-6 text-sage-green mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{Math.round(stats.totalTimeSpent)}</div>
                  <div className="text-sm text-gray-600">Hours Learned</div>
                </div>
                <div className="text-center p-4 bg-purple-100 rounded-2xl">
                  <Trophy className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">0</div>
                  <div className="text-sm text-gray-600">Achievements</div>
                </div>
              </div>
            </div>

            {/* Lessons List */}
            <div className="card-sacred">
              <h3 className="text-xl font-serif font-semibold text-gray-800 mb-6">
                Course Lessons
              </h3>
              <div className="space-y-4">
                {lessons.map((lesson, index) => {
                  const isCompleted = isLessonCompleted(lesson.id)
                  const isUnlocked = isLessonUnlocked(lesson.id)
                  const isCurrent = lesson.id === courseProgress.currentLesson
                  
                  return (
                    <motion.div
                      key={lesson.id}
                      className={`group relative p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                        isCompleted 
                          ? 'border-green-200 bg-green-50 hover:border-green-300'
                          : isUnlocked
                            ? 'border-rose-pink/20 bg-white hover:border-rose-pink/40 hover:shadow-md'
                            : 'border-gray-200 bg-gray-50 cursor-not-allowed opacity-60'
                      } ${isCurrent ? 'ring-2 ring-rose-pink ring-opacity-50' : ''}`}
                      onClick={() => isUnlocked && startLesson(lesson)}
                      whileHover={isUnlocked ? { scale: 1.02 } : {}}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0 mr-4">
                          {isCompleted ? (
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                              <CheckCircle className="h-6 w-6 text-white" />
                            </div>
                          ) : isUnlocked ? (
                            <div className="w-10 h-10 bg-gradient-rose rounded-full flex items-center justify-center">
                              <Play className="h-5 w-5 text-white ml-0.5" />
                            </div>
                          ) : (
                            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                              <Lock className="h-5 w-5 text-gray-500" />
                            </div>
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-lg font-medium text-gray-800 group-hover:text-deep-rose transition-colors">
                                {lesson.title}
                              </h4>
                              {lesson.subtitle && (
                                <p className="text-sm text-gray-600">{lesson.subtitle}</p>
                              )}
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-gray-500">
                                {lesson.duration} min
                              </div>
                              {isCurrent && (
                                <div className="text-xs text-rose-pink font-medium">
                                  Current
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {!isUnlocked && lesson.prerequisites && (
                        <div className="mt-2 text-xs text-gray-500">
                          Complete previous lessons to unlock
                        </div>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Current Streak */}
            <div className="card-sacred">
              <h3 className="text-lg font-serif font-semibold text-gray-800 mb-4">
                Learning Streak
              </h3>
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-3">
                  <Flame className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800">0</div>
                <div className="text-sm text-gray-600">days in a row</div>
              </div>
              
              {/* Streak Milestones */}
              <div className="space-y-2">
                {[].map((milestone, index) => (
                  <div key={index} className={`flex items-center justify-between p-2 rounded-lg ${
                    milestone.achieved ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <span className="text-sm">
                      {milestone.achieved ? '✅' : '⭕'} {milestone.days} days
                    </span>
                    <span className="text-xs">{milestone.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Achievements */}
            {false && (
              <div className="card-sacred">
                <h3 className="text-lg font-serif font-semibold text-gray-800 mb-4">
                  Achievements
                </h3>
                <div className="space-y-3">
                  {[].slice(-3).map((achievement) => (
                    <div key={achievement.id} className="flex items-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-lg mr-3 ${getRarityColor(achievement.rarity)}`}>
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-800">
                          {achievement.title}
                        </div>
                        <div className="text-xs text-gray-600">
                          {achievement.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Continue Learning or Next Steps */}
            {isClient && stats.isCompleted ? (
              <div className="card-sacred border-2 border-golden-light/30 bg-gradient-to-br from-golden-light/10 to-rose-pink/10">
                <h3 className="text-lg font-serif font-semibold text-gray-800 mb-4 flex items-center">
                  <Star className="h-5 w-5 text-golden-light mr-2" />
                  Your Next Adventure
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  You've mastered Rose Meditation Level 1! Ready to deepen your spiritual journey?
                </p>
                <div className="space-y-3">
                  <button 
                    onClick={() => setShowCelebration(true)}
                    className="w-full bg-gradient-gold text-white px-4 py-3 rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-200"
                  >
                    <Trophy className="h-4 w-4 mr-2 inline" />
                    Celebrate Achievement
                  </button>
                  <button 
                    onClick={() => alert('Rose Meditation Level 2: Advanced Practices coming soon! 🌹✨')}
                    className="w-full border-2 border-rose-pink text-rose-pink px-4 py-3 rounded-full font-semibold text-sm hover:bg-rose-pink/5 transition-all duration-200"
                  >
                    <Sparkles className="h-4 w-4 mr-2 inline" />
                    Explore Level 2
                  </button>
                </div>
              </div>
            ) : (
              <div className="card-sacred border-2 border-rose-pink/20 bg-rose-pink/5">
                <h3 className="text-lg font-serif font-semibold text-gray-800 mb-4">
                  Continue Your Journey
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Pick up where you left off and maintain your spiritual practice momentum.
                </p>
                <button 
                  onClick={() => {
                    const currentLesson = lessons.find(l => l.id === courseProgress.currentLesson)
                    if (currentLesson) startLesson(currentLesson)
                  }}
                  className="w-full btn-primary"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Continue Learning
                </button>
              </div>
            )}

            {/* Learning Stats */}
            <div className="card-sacred">
              <h3 className="text-lg font-serif font-semibold text-gray-800 mb-4">
                Your Progress Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Time</span>
                  <span className="text-sm font-medium text-gray-800">{stats.totalTimeSpent} min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Average/Lesson</span>
                  <span className="text-sm font-medium text-gray-800">{stats.averageTimePerLesson} min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Unlocked</span>
                  <span className="text-sm font-medium text-gray-800">{stats.unlockedLessons}/{stats.totalLessons}</span>
                </div>
                {stats.completedLessons >= 5 && (
                  <div className="p-2 bg-gradient-gold/10 rounded-lg text-center">
                    <Star className="h-4 w-4 text-earth-copper mx-auto mb-1" />
                    <span className="text-xs text-earth-copper font-medium">Dedicated Student</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Course Completion Celebration Modal */}
      <CourseCompletionCelebration
        isOpen={showCelebration}
        onClose={() => setShowCelebration(false)}
        courseName={course.title}
        completionDate={stats.completionDate || new Date()}
        totalTimeSpent={stats.totalTimeSpent}
        onContinueJourney={() => {
          setShowCelebration(false)
          // Future: Navigate to next course or progression path
          alert('Next level courses coming soon! 🌟')
        }}
      />
    </div>
  )
}

export default CourseDashboard
