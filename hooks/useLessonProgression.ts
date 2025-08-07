import { useState, useEffect, useCallback } from 'react'

export interface LessonCompletionData {
  readContent: boolean
  completedPractice: boolean
  checkedTakeaways: string[]
  reflectionAnswers: { [key: string]: string }
  userNotes: string
  timeSpent: number
  completedAt: Date
}

export interface CourseProgress {
  courseId: string
  completedLessons: { [lessonId: string]: LessonCompletionData }
  currentLesson: string
  unlockedLessons: string[]
  overallProgress: number
}

export const useLessonProgression = (courseId: string) => {
  const [courseProgress, setCourseProgress] = useState<CourseProgress>(() => {
    // Load from localStorage on initialization
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`course_progress_${courseId}`)
      if (saved) {
        const parsed = JSON.parse(saved)
        // Convert completedAt strings back to Date objects
        Object.keys(parsed.completedLessons).forEach(lessonId => {
          parsed.completedLessons[lessonId].completedAt = new Date(parsed.completedLessons[lessonId].completedAt)
        })
        return parsed
      }
    }
    
    return {
      courseId,
      completedLessons: {},
      currentLesson: 'rm1-001', // Start with first lesson
      unlockedLessons: ['rm1-001'], // Only first lesson unlocked initially
      overallProgress: 0
    }
  })

  // Save to localStorage whenever progress changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(`course_progress_${courseId}`, JSON.stringify(courseProgress))
    }
  }, [courseId, courseProgress])

  // Complete a lesson and unlock the next one
  const completeLesson = useCallback((lessonId: string, completionData: LessonCompletionData) => {
    setCourseProgress(prev => {
      const newProgress = { ...prev }
      
      // Mark lesson as completed
      newProgress.completedLessons[lessonId] = {
        ...completionData,
        completedAt: new Date()
      }

      // Unlock next lesson
      const lessonOrder = [
        'rm1-001', 'rm1-002', 'rm1-003', 'rm1-004', 'rm1-005',
        'rm1-006', 'rm1-007', 'rm1-008', 'rm1-009', 'rm1-010'
      ]
      
      const currentIndex = lessonOrder.indexOf(lessonId)
      const nextLessonId = lessonOrder[currentIndex + 1]
      
      if (nextLessonId && !newProgress.unlockedLessons.includes(nextLessonId)) {
        newProgress.unlockedLessons.push(nextLessonId)
        newProgress.currentLesson = nextLessonId
      }

      // Calculate overall progress
      const completedCount = Object.keys(newProgress.completedLessons).length
      newProgress.overallProgress = Math.round((completedCount / lessonOrder.length) * 100)

      return newProgress
    })
  }, [])

  // Check if a lesson is unlocked
  const isLessonUnlocked = useCallback((lessonId: string): boolean => {
    return courseProgress.unlockedLessons.includes(lessonId)
  }, [courseProgress.unlockedLessons])

  // Check if a lesson is completed
  const isLessonCompleted = useCallback((lessonId: string): boolean => {
    return lessonId in courseProgress.completedLessons
  }, [courseProgress.completedLessons])

  // Get lesson completion data
  const getLessonCompletionData = useCallback((lessonId: string): LessonCompletionData | null => {
    return courseProgress.completedLessons[lessonId] || null
  }, [courseProgress.completedLessons])

  // Get next available lesson
  const getNextLesson = useCallback((): string | null => {
    return courseProgress.currentLesson || null
  }, [courseProgress.currentLesson])

  // Reset course progress (for testing/admin)
  const resetProgress = useCallback(() => {
    setCourseProgress({
      courseId,
      completedLessons: {},
      currentLesson: 'rm1-001',
      unlockedLessons: ['rm1-001'],
      overallProgress: 0
    })
  }, [courseId])

  // Get course statistics
  const getCourseStats = useCallback(() => {
    const completedLessons = Object.keys(courseProgress.completedLessons)
    const totalTimeSpent = Object.values(courseProgress.completedLessons)
      .reduce((total, lesson) => total + lesson.timeSpent, 0)
    
    const averageTimePerLesson = completedLessons.length > 0 
      ? Math.round(totalTimeSpent / completedLessons.length) 
      : 0

    return {
      completedLessons: completedLessons.length,
      totalLessons: 10,
      overallProgress: courseProgress.overallProgress,
      totalTimeSpent,
      averageTimePerLesson,
      unlockedLessons: courseProgress.unlockedLessons.length
    }
  }, [courseProgress])

  return {
    courseProgress,
    completeLesson,
    isLessonUnlocked,
    isLessonCompleted,
    getLessonCompletionData,
    getNextLesson,
    resetProgress,
    getCourseStats
  }
}
