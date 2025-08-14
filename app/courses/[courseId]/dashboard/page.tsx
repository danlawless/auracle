'use client'

import { useParams } from 'next/navigation'
import CourseDashboard from '../../../components/courses/CourseDashboard'
import CourseProtection from '../../../components/course/CourseProtection'
import { roseMeditationLessons } from '../../../../data/sample-lessons'

// Mock course data - this would come from your API/database
const mockCourse = {
  id: 'rose-meditation-1',
  title: 'Rose Meditation Level 1',
  subtitle: 'Foundation of Sacred Practice',
  description: 'Begin your journey with the fundamental practices of Rose Meditation, learning to connect with your inner sanctuary through guided visualizations.',
  image: '🌹',
  category: 'Foundation' as const,
  level: 'Beginner' as const,
  price: 197,
  originalPrice: 297,
  duration: '4 weeks',
  estimatedHours: 8,
  modules: [],
  lessons: roseMeditationLessons,
  totalLessons: roseMeditationLessons.length,
  students: 847,
  rating: 4.9,
  completionRate: 78,
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
  learningOutcomes: [
    'Master foundational Rose Meditation techniques',
    'Develop consistent daily spiritual practice',
    'Connect with your inner wisdom and guidance',
    'Create sacred space and spiritual boundaries',
    'Experience deeper peace and spiritual connection'
  ]
}

export default function CourseDashboardPage() {
  const params = useParams()
  const courseId = params.courseId as string

  // Only show dashboard for rose-meditation-1 for now
  if (courseId !== 'rose-meditation-1') {
    return (
      <div className="min-h-screen bg-gradient-sacred py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h1 className="text-3xl font-serif font-bold text-gray-800 mb-4">
              Course Coming Soon
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              This course is being prepared with love. Check back soon!
            </p>
            <button 
              onClick={() => window.history.back()}
              className="bg-rose-pink text-white px-6 py-3 rounded-full hover:bg-deep-rose transition-colors"
            >
              Back to Courses
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <CourseProtection
      courseId={courseId}
      courseTitle="Rose Meditation Level 1"
      coursePrice="$49"
      originalPrice="$197"
    >
      <CourseDashboard 
        course={mockCourse}
        lessons={roseMeditationLessons}
      />
    </CourseProtection>
  )
}

// Metadata is not allowed in client components
