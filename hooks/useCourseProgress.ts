'use client'

import { useState, useEffect } from 'react'
import { CourseProgress, Lesson, Achievement, LearningStreak } from '../types/course'

// Mock data - in real app this would come from your backend/database
const mockProgress: CourseProgress = {
  courseId: 'rose-meditation-1',
  userId: 'user-123',
  lessonsCompleted: [],
  currentLesson: 'rm1-001',
  completionPercentage: 0,
  streakDays: 0,
  lastAccessedAt: new Date(),
  totalTimeSpent: 0,
  achievements: []
}

const mockAchievements: Achievement[] = [
  {
    id: 'first-lesson',
    title: 'Sacred Beginning',
    description: 'Completed your first lesson',
    icon: '🌱',
    unlockedAt: new Date(),
    rarity: 'common'
  },
  {
    id: 'three-day-streak',
    title: 'Consistency Keeper',
    description: 'Maintained a 3-day learning streak',
    icon: '🔥',
    unlockedAt: new Date(),
    rarity: 'uncommon'
  },
  {
    id: 'golden-sun-master',
    title: 'Golden Sun Master',
    description: 'Mastered the Golden Sun visualization',
    icon: '☀️',
    unlockedAt: new Date(),
    rarity: 'rare'
  },
  {
    id: 'course-complete',
    title: 'Rose Meditation Graduate',
    description: 'Completed the entire Rose Meditation Level 1 course',
    icon: '🎓',
    unlockedAt: new Date(),
    rarity: 'legendary'
  }
]

export const useCourseProgress = (courseId: string) => {
  const [progress, setProgress] = useState<CourseProgress>(mockProgress)
  const [streak, setStreak] = useState<LearningStreak>({
    currentStreak: 0,
    longestStreak: 0,
    lastLessonDate: new Date(),
    milestones: [
      { days: 3, title: 'Getting Started', reward: 'Sacred Focus badge', achieved: false },
      { days: 7, title: 'First Week', reward: 'Dedicated Learner badge', achieved: false },
      { days: 14, title: 'Two Weeks Strong', reward: 'Spiritual Warrior badge', achieved: false },
      { days: 30, title: 'One Month Master', reward: 'Enlightened Soul badge', achieved: false }
    ]
  })
  const [availableAchievements, setAvailableAchievements] = useState<Achievement[]>(mockAchievements)

  // Load progress from localStorage or API
  useEffect(() => {
    const savedProgress = localStorage.getItem(`course-progress-${courseId}`)
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress))
    }
    
    const savedStreak = localStorage.getItem(`learning-streak-${courseId}`)
    if (savedStreak) {
      setStreak(JSON.parse(savedStreak))
    }
  }, [courseId])

  // Save progress to localStorage (in real app, this would sync to backend)
  const saveProgress = (newProgress: CourseProgress) => {
    setProgress(newProgress)
    localStorage.setItem(`course-progress-${courseId}`, JSON.stringify(newProgress))
  }

  const completeLesson = (lessonId: string, timeSpent: number = 10, notes?: string) => {
    const now = new Date()
    const lastAccessDate = new Date(progress.lastAccessedAt)
    const daysSinceLastAccess = Math.floor((now.getTime() - lastAccessDate.getTime()) / (1000 * 60 * 60 * 24))
    
    // Update streak
    let newStreakDays = progress.streakDays
    if (daysSinceLastAccess === 1) {
      newStreakDays += 1
    } else if (daysSinceLastAccess > 1) {
      newStreakDays = 1 // Reset streak but count today
    } else if (daysSinceLastAccess === 0) {
      // Same day, don't change streak
    }

    // Check for new achievements
    const newAchievements = [...progress.achievements]
    
    // First lesson achievement
    if (progress.lessonsCompleted.length === 0) {
      const firstLessonAchievement = availableAchievements.find(a => a.id === 'first-lesson')
      if (firstLessonAchievement && !newAchievements.find(a => a.id === 'first-lesson')) {
        newAchievements.push({...firstLessonAchievement, unlockedAt: now})
      }
    }
    
    // Streak achievements
    if (newStreakDays >= 3 && !newAchievements.find(a => a.id === 'three-day-streak')) {
      const streakAchievement = availableAchievements.find(a => a.id === 'three-day-streak')
      if (streakAchievement) {
        newAchievements.push({...streakAchievement, unlockedAt: now})
      }
    }

    const updatedProgress: CourseProgress = {
      ...progress,
      lessonsCompleted: [...progress.lessonsCompleted, lessonId],
      completionPercentage: Math.round(((progress.lessonsCompleted.length + 1) / 12) * 100), // Assuming 12 lessons
      streakDays: newStreakDays,
      lastAccessedAt: now,
      totalTimeSpent: progress.totalTimeSpent + timeSpent,
      achievements: newAchievements
    }

    saveProgress(updatedProgress)

    // Update streak milestones
    const updatedStreak = {
      ...streak,
      currentStreak: newStreakDays,
      longestStreak: Math.max(streak.longestStreak, newStreakDays),
      lastLessonDate: now,
      milestones: streak.milestones.map(milestone => ({
        ...milestone,
        achieved: milestone.achieved || newStreakDays >= milestone.days
      }))
    }
    setStreak(updatedStreak)
    localStorage.setItem(`learning-streak-${courseId}`, JSON.stringify(updatedStreak))

    return newAchievements.slice(progress.achievements.length) // Return only new achievements
  }

  const updateCurrentLesson = (lessonId: string) => {
    const updatedProgress = {
      ...progress,
      currentLesson: lessonId,
      lastAccessedAt: new Date()
    }
    saveProgress(updatedProgress)
  }

  const getNextLesson = (currentLessonId: string, lessons: Lesson[]): Lesson | null => {
    const currentIndex = lessons.findIndex(lesson => lesson.id === currentLessonId)
    return currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null
  }

  const getPreviousLesson = (currentLessonId: string, lessons: Lesson[]): Lesson | null => {
    const currentIndex = lessons.findIndex(lesson => lesson.id === currentLessonId)
    return currentIndex > 0 ? lessons[currentIndex - 1] : null
  }

  const isLessonUnlocked = (lessonId: string, lessons: Lesson[]): boolean => {
    const lesson = lessons.find(l => l.id === lessonId)
    if (!lesson || !lesson.prerequisites) return true
    
    return lesson.prerequisites.every(prereqId => 
      progress.lessonsCompleted.includes(prereqId)
    )
  }

  const getProgressStats = () => ({
    totalMinutesLearned: progress.totalTimeSpent,
    coursesCompleted: progress.completionPercentage === 100 ? 1 : 0,
    currentCourses: progress.completionPercentage > 0 && progress.completionPercentage < 100 ? 1 : 0,
    favoriteTimeOfDay: 'Morning', // This would be calculated from usage patterns
    consistencyScore: Math.min(100, (progress.streakDays / 30) * 100),
    powerUser: progress.totalTimeSpent > 300 || progress.achievements.length > 5
  })

  return {
    progress,
    streak,
    completeLesson,
    updateCurrentLesson,
    getNextLesson,
    getPreviousLesson,
    isLessonUnlocked,
    getProgressStats,
    availableAchievements
  }
}
