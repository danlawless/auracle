'use client'

import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  CheckCircle, 
  Circle, 
  Play,
  Clock,
  BookOpen,
  Heart,
  Sun,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Award,
  FileText,
  Brain,
  Target,
  Lightbulb
} from 'lucide-react'
import { Lesson } from '../../../types/course'
import AILessonChat from './AILessonChat'

interface EnhancedLessonViewProps {
  lesson: Lesson
  onComplete: (lessonId: string, completionData: LessonCompletionData) => void
  onNext: () => void
  onPrevious: () => void
  onBackToDashboard: () => void
  hasNext: boolean
  hasPrevious: boolean
  progress: {
    current: number
    total: number
    percentage: number
  }
}

interface LessonCompletionData {
  readContent: boolean
  completedPractice: boolean
  checkedTakeaways: string[]
  reflectionAnswers: { [key: string]: string }
  userNotes: string
  timeSpent: number
}

const EnhancedLessonView: React.FC<EnhancedLessonViewProps> = ({
  lesson,
  onComplete,
  onNext,
  onPrevious,
  onBackToDashboard,
  hasNext,
  hasPrevious,
  progress
}) => {
  const [completionData, setCompletionData] = useState<LessonCompletionData>({
    readContent: false,
    completedPractice: false,
    checkedTakeaways: [],
    reflectionAnswers: {},
    userNotes: '',
    timeSpent: 0
  })

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)
  const [startTime] = useState(Date.now())
  
  // Ensure page starts at top when lesson loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [lesson.id])
  
  // Track time spent
  useEffect(() => {
    const interval = setInterval(() => {
      setCompletionData(prev => ({
        ...prev,
        timeSpent: Math.floor((Date.now() - startTime) / 1000 / 60) // minutes
      }))
    }, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [startTime])

  // Mark content as read when user scrolls through sections
  const handleSectionViewed = useCallback((sectionIndex: number) => {
    setCurrentSection(sectionIndex)
    
    // If user has viewed all main content sections, mark as read
    if (sectionIndex >= lesson.content.mainContent.length - 1) {
      setCompletionData(prev => ({ ...prev, readContent: true }))
    }
  }, [lesson.content.mainContent.length])

  // Handle practice completion
  const handlePracticeComplete = useCallback(() => {
    setCompletionData(prev => ({ ...prev, completedPractice: true }))
  }, [])

  // Handle takeaway checkbox toggle
  const handleTakeawayToggle = useCallback((takeaway: string) => {
    setCompletionData(prev => ({
      ...prev,
      checkedTakeaways: prev.checkedTakeaways.includes(takeaway)
        ? prev.checkedTakeaways.filter(t => t !== takeaway)
        : [...prev.checkedTakeaways, takeaway]
    }))
  }, [])

  // Handle reflection answer
  const handleReflectionAnswer = useCallback((promptIndex: number, answer: string) => {
    setCompletionData(prev => ({
      ...prev,
      reflectionAnswers: {
        ...prev.reflectionAnswers,
        [`reflection_${promptIndex}`]: answer
      }
    }))
  }, [])

  // Check if lesson can be completed
  const canCompleteLesson = useCallback(() => {
    const requiredReflections = lesson.content.reflectionPrompts?.length || 0
    const completedReflections = Object.keys(completionData.reflectionAnswers).length
    const requiredTakeaways = lesson.content.keyTakeaways.length
    const checkedTakeawaysCount = completionData.checkedTakeaways.length

    return (
      completionData.readContent &&
      completionData.completedPractice &&
      checkedTakeawaysCount >= requiredTakeaways &&
      completedReflections >= requiredReflections
    )
  }, [completionData, lesson.content])

  // Handle lesson completion
  const handleCompleteLesson = useCallback(() => {
    if (canCompleteLesson()) {
      onComplete(lesson.id, completionData)
    }
  }, [canCompleteLesson, lesson.id, completionData, onComplete])

  const getContentIcon = (type: string) => {
    switch (type) {
      case 'text': return <FileText className="h-5 w-5 text-deep-rose" />
      case 'step_by_step': return <Target className="h-5 w-5 text-golden-accent" />
      case 'quote': return <Heart className="h-5 w-5 text-vibrant-pink" />
      case 'tip': return <Lightbulb className="h-5 w-5 text-warm-gold" />
      case 'visualization': return <Brain className="h-5 w-5 text-royal-purple" />
      default: return <BookOpen className="h-5 w-5 text-gray-500" />
    }
  }

  const completionPercentage = Math.round(
    (
      (completionData.readContent ? 25 : 0) +
      (completionData.completedPractice ? 25 : 0) +
      (completionData.checkedTakeaways.length / lesson.content.keyTakeaways.length * 25) +
      (Object.keys(completionData.reflectionAnswers).length / (lesson.content.reflectionPrompts?.length || 1) * 25)
    )
  )

  return (
    <div className="min-h-screen bg-gradient-sacred pb-20">
      {/* Lesson Header */}
      <div className="bg-white/95 border-b border-soft-lavender/20 sticky top-16 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBackToDashboard}
                className="p-2 rounded-full bg-soft-lavender/20 hover:bg-soft-lavender/30 transition-colors duration-200"
                title="Back to Course Dashboard"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              
              <div>
                <div className="text-sm text-gray-600">
                  Lesson {progress.current} of {progress.total}
                </div>
                <h1 className="text-xl font-serif font-semibold text-gray-800">
                  {lesson.title}
                </h1>
                <p className="text-gray-600">{lesson.subtitle}</p>
              </div>
            </div>

            <div className="text-right">
              <div className="text-sm text-gray-600 flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{lesson.duration} min</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Completion: {completionPercentage}%
              </div>
              <div className="w-24 h-1 bg-gray-200 rounded-full mt-1">
                <motion.div 
                  className="h-full bg-gradient-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${completionPercentage}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Video Section */}
        {lesson.content.videoUrl && (
          <motion.div
            className="card-sacred mb-8 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-video w-full">
              <video
                src={lesson.content.videoUrl}
                className="w-full h-full rounded-lg object-cover"
                controls
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setCompletionData(prev => ({ ...prev, readContent: true }))}
              >
                <p className="text-center p-4 text-gray-600">
                  Your browser does not support the video tag. 
                  <a href={lesson.content.videoUrl} className="text-rose-pink hover:underline ml-1">
                    Download the video instead.
                  </a>
                </p>
              </video>
            </div>
            <div className="p-4 bg-gradient-to-r from-soft-lavender/10 to-rose-pink/10">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Play className="h-4 w-4" />
                <span>Video Lesson • {lesson.duration} minutes</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Introduction */}
        <motion.div
          className="card-sacred mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-gradient-rose flex-shrink-0">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-semibold text-gray-800 mb-3">
                Welcome to Your Lesson
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {lesson.content.introduction}
              </p>
              <div className="flex items-center space-x-2">
                <motion.button
                  onClick={() => handleSectionViewed(0)}
                  className="text-sm text-deep-rose hover:text-vibrant-pink font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ✓ I've read the introduction
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Assistant Chat Section */}
        <motion.div
          className="card-sacred mb-8 bg-gradient-to-br from-rose-pink/5 to-soft-lavender/10 border border-rose-pink/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-gradient-rose flex-shrink-0">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-serif font-semibold text-gray-800 mb-3 flex items-center">
                Auracle AI
                <span className="ml-2 text-sm bg-rose-pink/20 text-rose-pink px-2 py-1 rounded-full font-normal">
                  AI Assistant
                </span>
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                I'm here to support you through this lesson! Feel free to ask me any questions about the {lesson.title.toLowerCase()}, 
                share what you're experiencing, or let me know if you need clarification on any part of the teaching.
              </p>
              
              {/* Chat Interface */}
              <AILessonChat 
                aiAssistant={lesson.aiAssistant}
                lessonTitle={lesson.title}
              />
            </div>
          </div>
        </motion.div>

        {/* Main Content Blocks */}
        <div className="space-y-6 mb-8">
          {lesson.content.mainContent.map((block, index) => (
            <motion.div
              key={block.id}
              className={`card-sacred ${block.emphasis === 'sacred' ? 'border-2 border-rose-pink/20 bg-rose-pink/5' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              onViewportEnter={() => handleSectionViewed(index + 1)}
              transition={{ duration: 0.6, delay: (index * 0.1) + (lesson.content.videoUrl ? 0.3 : 0) }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-start space-x-4">
                {getContentIcon(block.type)}
                <div className="flex-1">
                  {block.type === 'quote' ? (
                    <blockquote className="text-lg italic text-deep-rose border-l-4 border-rose-pink pl-4">
                      {block.content}
                    </blockquote>
                  ) : block.type === 'step_by_step' ? (
                    <div>
                      <h4 className="font-serif font-semibold text-gray-800 mb-3 flex items-center">
                        {block.icon && <span className="mr-2">{block.icon}</span>}
                        Steps to Follow
                      </h4>
                      <div className="space-y-2">
                        {block.content.split('\n').map((line, lineIndex) => (
                          <div key={lineIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-rose-pink rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{line}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div>
                      {block.type === 'tip' && (
                        <div className="bg-golden-light/10 border border-golden-light/30 rounded-lg p-3 mb-3">
                          <div className="flex items-center space-x-2 text-golden-accent font-medium mb-2">
                            <Lightbulb className="h-4 w-4" />
                            <span>Sacred Tip</span>
                          </div>
                        </div>
                      )}
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {block.content}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Practice Exercise */}
        {lesson.content.practiceExercise && (
          <motion.div
            className="card-sacred mb-8 bg-gradient-to-br from-soft-lavender/10 to-rose-pink/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-gradient-accent flex-shrink-0">
                <Play className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-serif font-semibold text-gray-800 mb-3">
                  {lesson.content.practiceExercise.title}
                </h3>
                <div className="space-y-3 mb-6">
                  {lesson.content.practiceExercise.instructions.map((instruction, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-rose-pink/20 rounded-full flex items-center justify-center text-xs font-semibold text-rose-pink flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{instruction}</span>
                    </div>
                  ))}
                </div>
                
                {/* Practice Completion Checkbox */}
                <motion.button
                  onClick={handlePracticeComplete}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                    completionData.completedPractice
                      ? 'bg-green-50 border-green-200 text-green-800'
                      : 'bg-gray-50 border-gray-200 hover:border-vibrant-pink/40'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {completionData.completedPractice ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <Circle className="h-5 w-5 text-gray-400" />
                  )}
                  <span className="font-medium">
                    {completionData.completedPractice 
                      ? 'Practice Completed!' 
                      : 'Mark Practice as Complete'
                    }
                  </span>
                  {lesson.content.practiceExercise.duration && (
                    <span className="text-sm text-gray-500">
                      ({lesson.content.practiceExercise.duration} min)
                    </span>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Key Takeaways */}
        <motion.div
          className="card-sacred mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-gradient-secondary flex-shrink-0">
              <Target className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-serif font-semibold text-gray-800 mb-4">
                Key Takeaways
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Please check each takeaway as you read and understand it:
              </p>
              <div className="space-y-3">
                {lesson.content.keyTakeaways.map((takeaway, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleTakeawayToggle(takeaway)}
                    className={`w-full text-left flex items-start space-x-3 p-3 rounded-lg border transition-all duration-200 ${
                      completionData.checkedTakeaways.includes(takeaway)
                        ? 'bg-green-50 border-green-200'
                        : 'bg-gray-50 border-gray-200 hover:border-vibrant-pink/40'
                    }`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {completionData.checkedTakeaways.includes(takeaway) ? (
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={`${
                      completionData.checkedTakeaways.includes(takeaway) 
                        ? 'text-green-800' 
                        : 'text-gray-700'
                    }`}>
                      {takeaway}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reflection Questions */}
        {lesson.content.reflectionPrompts && lesson.content.reflectionPrompts.length > 0 && (
          <motion.div
            className="card-sacred mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-gradient-primary flex-shrink-0">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-serif font-semibold text-gray-800 mb-4">
                  Reflection & Integration
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Take a moment to reflect on your experience. Your answers help deepen your understanding:
                </p>
                <div className="space-y-6">
                  {lesson.content.reflectionPrompts.map((prompt, index) => (
                    <div key={index} className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        {prompt}
                      </label>
                      <textarea
                        value={completionData.reflectionAnswers[`reflection_${index}`] || ''}
                        onChange={(e) => handleReflectionAnswer(index, e.target.value)}
                        className="w-full p-3 border border-soft-lavender/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-vibrant-pink/20 focus:border-vibrant-pink/40 resize-none"
                        rows={3}
                        placeholder="Share your thoughts and insights..."
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Personal Notes */}
        <motion.div
          className="card-sacred mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-warm-gold/20 flex-shrink-0">
              <FileText className="h-5 w-5 text-warm-gold" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-serif font-semibold text-gray-800 mb-4">
                Personal Notes (Optional)
              </h3>
              <textarea
                value={completionData.userNotes}
                onChange={(e) => setCompletionData(prev => ({ ...prev, userNotes: e.target.value }))}
                className="w-full p-3 border border-soft-lavender/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-vibrant-pink/20 focus:border-vibrant-pink/40 resize-none"
                rows={4}
                placeholder="Capture any insights, questions, or personal reflections from this lesson..."
              />
            </div>
          </div>
        </motion.div>

        {/* Completion Section */}
        <motion.div
          className="card-sacred bg-gradient-to-br from-green-50 to-emerald-50 border-green-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-full ${canCompleteLesson() ? 'bg-green-500' : 'bg-gray-400'}`}>
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-gray-800">
                  {canCompleteLesson() ? 'Ready to Complete!' : 'Almost There!'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {canCompleteLesson() 
                    ? 'Congratulations! You\'ve completed all requirements for this lesson.'
                    : 'Please complete all sections above to unlock the next lesson.'
                  }
                </p>
                <div className="text-xs text-gray-500 mt-1">
                  Time spent: {completionData.timeSpent} minutes
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <motion.button
                onClick={handleCompleteLesson}
                disabled={!canCompleteLesson()}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  canCompleteLesson()
                    ? 'bg-gradient-primary text-white hover:shadow-lg'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
                whileHover={canCompleteLesson() ? { scale: 1.05 } : {}}
                whileTap={canCompleteLesson() ? { scale: 0.95 } : {}}
              >
                Complete Lesson
              </motion.button>
              
              {hasNext && (
                <motion.button
                  onClick={onNext}
                  disabled={!canCompleteLesson()}
                  className={`p-3 rounded-full transition-all duration-200 ${
                    canCompleteLesson()
                      ? 'bg-soft-lavender/20 hover:bg-soft-lavender/30 text-deep-rose'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                  whileHover={canCompleteLesson() ? { scale: 1.05 } : {}}
                  whileTap={canCompleteLesson() ? { scale: 0.95 } : {}}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>
      </div>


    </div>
  )
}

export default EnhancedLessonView
