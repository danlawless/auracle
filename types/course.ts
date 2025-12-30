// Core course and lesson types for The Aura learning platform
export interface MediaAsset {
  id: string
  url: string
  alt?: string
  caption?: string
}

export interface Lesson {
  id: string
  title: string
  subtitle?: string
  type: 'video' | 'audio' | 'guided_practice' | 'reflection' | 'assessment'
  duration: number // in minutes
  content: LessonContent
  aiAssistant: AIAssistantConfig
  prerequisites?: string[] // lesson IDs
  unlocks?: string[] // lesson IDs or rewards
  order: number
  isCompleted?: boolean
  completedAt?: Date
  userNotes?: string
}

export interface LessonContent {
  // Main content
  introduction: string
  mainContent: ContentBlock[]
  practiceExercise?: PracticeExercise
  keyTakeaways: string[]
  
  // Rich media
  videoUrl?: string
  audioUrl?: string
  images?: MediaAsset[]
  
  // Interactive elements
  checkpoints?: Checkpoint[]
  reflectionPrompts?: string[]
}

export interface ContentBlock {
  id: string
  type: 'text' | 'quote' | 'visualization' | 'step_by_step' | 'tip' | 'warning'
  content: string
  emphasis?: 'normal' | 'highlight' | 'sacred'
  icon?: string
}

export interface PracticeExercise {
  title: string
  instructions: string[]
  duration: number
  guidedAudioUrl?: string
  completionCriteria: string
}

export interface Checkpoint {
  id: string
  question: string
  type: 'reflection' | 'understanding_check' | 'experience_share'
  required: boolean
}

export interface AIAssistantConfig {
  name: string
  persona: 'The Aura AI' | 'wise_guide' | 'gentle_teacher' | 'meditation_guide'
  systemPrompt: string
  context: string[] // Key lesson concepts for AI to reference
  suggestedQuestions: string[]
}

export interface CourseProgress {
  courseId: string
  userId: string
  lessonsCompleted: string[]
  currentLesson: string
  completionPercentage: number
  streakDays: number
  lastAccessedAt: Date
  totalTimeSpent: number // minutes
  achievements: Achievement[]
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlockedAt: Date
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary'
}

export interface Course {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  category: 'Foundation' | 'Essential' | 'Development' | 'Advanced' | 'Mastery' | 'Certification'
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels' | 'Professional'
  
  // Pricing & logistics
  price: number
  originalPrice?: number
  duration: string
  estimatedHours: number
  
  // Learning structure
  modules: CourseModule[]
  lessons: Lesson[]
  totalLessons: number
  
  // Progress & community
  students: number
  rating: number
  completionRate: number
  
  // What's included
  includes: string[]
  highlights: string[]
  
  // Prerequisites & outcomes
  prerequisites?: string[]
  learningOutcomes: string[]
  certification?: {
    available: boolean
    requirements: string[]
    certificateName: string
  }
}

export interface CourseModule {
  id: string
  title: string
  description: string
  lessons: string[] // lesson IDs
  order: number
  estimatedDuration: number
  isUnlocked?: boolean
}

// Engagement & Gamification
export interface LearningStreak {
  currentStreak: number
  longestStreak: number
  lastLessonDate: Date
  milestones: StreakMilestone[]
}

export interface StreakMilestone {
  days: number
  title: string
  reward: string
  achieved: boolean
}

export interface ProgressStats {
  totalMinutesLearned: number
  coursesCompleted: number
  currentCourses: number
  favoriteTimeOfDay: string
  consistencyScore: number // 0-100
  powerUser: boolean
}
