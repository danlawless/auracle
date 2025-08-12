// Dummy data for admin system visualization

export interface AdminCourse {
  id: string
  title: string
  subtitle: string
  description: string
  status: 'draft' | 'published' | 'archived'
  category: string
  level: string
  price: number
  originalPrice?: number
  students: number
  rating: number
  completionRate: number
  revenue: number
  modules: AdminModule[]
  createdAt: string
  updatedAt: string
}

export interface AdminModule {
  id: string
  title: string
  description: string
  lessons: AdminLesson[]
  order: number
  estimatedDuration: number
}

export interface AdminLesson {
  id: string
  title: string
  subtitle?: string
  type: 'video' | 'audio' | 'guided_practice' | 'reflection' | 'assessment'
  duration: number
  status: 'draft' | 'published'
  completionRate: number
  averageRating: number
  order: number
}

export interface AdminService {
  id: string
  title: string
  description: string
  duration: number
  price: number
  bookings: number
  revenue: number
  status: 'active' | 'paused'
  includes: string[]
}

export interface AdminAnalytics {
  totalStudents: number
  totalRevenue: number
  monthlyGrowth: number
  completionRate: number
  averageRating: number
  topCourse: string
  recentActivity: AdminActivity[]
}

export interface AdminActivity {
  id: string
  type: 'course_completion' | 'new_student' | 'booking' | 'testimonial' | 'review'
  title: string
  description: string
  timestamp: string
  user?: string
}

// Dummy Courses Data
export const dummyCourses: AdminCourse[] = [
  {
    id: 'rm-level-1',
    title: 'Rose Meditation Level 1',
    subtitle: 'Sacred Foundations',
    description: 'Master the essential building blocks of Rose Meditation through guided practices and sacred wisdom.',
    status: 'published',
    category: 'Foundation',
    level: 'Beginner',
    price: 197,
    originalPrice: 247,
    students: 127,
    rating: 4.9,
    completionRate: 87,
    revenue: 25019,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20',
    modules: [
      {
        id: 'rm1-foundations',
        title: 'Sacred Foundations',
        description: 'Master the essential building blocks',
        order: 1,
        estimatedDuration: 47,
        lessons: [
          {
            id: 'rm1-001',
            title: 'Introduction to Rose Meditation',
            subtitle: 'Welcome to Your Sacred Journey',
            type: 'video',
            duration: 8,
            status: 'published',
            completionRate: 94,
            averageRating: 4.8,
            order: 1
          },
          {
            id: 'rm1-002',
            title: 'Grounding Cord Mastery',
            subtitle: 'Establishing Your Sacred Connection',
            type: 'audio',
            duration: 12,
            status: 'published',
            completionRate: 89,
            averageRating: 4.9,
            order: 2
          }
        ]
      }
    ]
  },
  {
    id: 'advanced-energy',
    title: 'Advanced Energy Work',
    subtitle: 'Mastery Level Practices',
    description: 'Deep dive into advanced energetic practices for experienced practitioners.',
    status: 'published',
    category: 'Advanced',
    level: 'Advanced',
    price: 397,
    students: 43,
    rating: 4.8,
    completionRate: 72,
    revenue: 17071,
    createdAt: '2024-02-01',
    updatedAt: '2024-02-15',
    modules: [
      {
        id: 'ae-mastery',
        title: 'Energy Mastery',
        description: 'Advanced energetic techniques',
        order: 1,
        estimatedDuration: 120,
        lessons: [
          {
            id: 'ae-001',
            title: 'Advanced Rose Transmutation',
            type: 'guided_practice',
            duration: 25,
            status: 'published',
            completionRate: 78,
            averageRating: 4.7,
            order: 1
          }
        ]
      }
    ]
  },
  {
    id: 'chakra-healing',
    title: 'Sacred Chakra Healing',
    subtitle: 'Energy Center Mastery',
    description: 'Comprehensive chakra healing and balancing practices.',
    status: 'draft',
    category: 'Healing',
    level: 'Intermediate',
    price: 247,
    students: 0,
    rating: 0,
    completionRate: 0,
    revenue: 0,
    createdAt: '2024-03-01',
    updatedAt: '2024-03-05',
    modules: []
  }
]

// Dummy Services Data
export const dummyServices: AdminService[] = [
  {
    id: 'spirit-reading-30',
    title: '30-Minute Spirit Reading',
    description: 'Connect with your divine guides and receive their wisdom',
    duration: 30,
    price: 150,
    bookings: 45,
    revenue: 6750,
    status: 'active',
    includes: ['Direct spirit messages', 'Recorded session', 'Follow-up summary']
  },
  {
    id: 'deep-dive-60',
    title: '60-Minute Deep Dive',
    description: 'Comprehensive spiritual guidance and energy reading',
    duration: 60,
    price: 200,
    bookings: 67,
    revenue: 13400,
    status: 'active',
    includes: ['Multiple guides', 'Deeper conversation', 'Past life insights', 'Chakra reading']
  },
  {
    id: 'complete-experience-90',
    title: '90-Minute Complete Experience',
    description: 'The full spiritual overview with transformative insights',
    duration: 90,
    price: 250,
    bookings: 23,
    revenue: 5750,
    status: 'active',
    includes: ['Full spirit translation', 'Multiple past lives', 'Complete chakra reading', 'Integration plan']
  },
  {
    id: 'premium-package',
    title: '3-Month Premium Package',
    description: 'Complete life transformation program',
    duration: 0, // Package duration varies
    price: 4000,
    bookings: 8,
    revenue: 32000,
    status: 'active',
    includes: ['16 private sessions', 'Pattern recognition', 'Spiritual guidance', 'Mindset integration']
  }
]

// Recent Activity Data
export const recentActivity: AdminActivity[] = [
  {
    id: 'act-001',
    type: 'course_completion',
    title: 'Course Completion',
    description: 'Sarah completed Rose Meditation Level 1',
    timestamp: '2024-03-15T14:30:00Z',
    user: 'Sarah Johnson'
  },
  {
    id: 'act-002',
    type: 'new_student',
    title: 'New Student Enrollment',
    description: 'Michael enrolled in Advanced Energy Work',
    timestamp: '2024-03-15T13:15:00Z',
    user: 'Michael Chen'
  },
  {
    id: 'act-003',
    type: 'booking',
    title: 'New Reading Booked',
    description: '60-minute Deep Dive session scheduled',
    timestamp: '2024-03-15T12:45:00Z',
    user: 'Emma Wilson'
  },
  {
    id: 'act-004',
    type: 'testimonial',
    title: 'New Testimonial',
    description: 'Beautiful 5-star review for Rose Meditation',
    timestamp: '2024-03-15T11:20:00Z',
    user: 'David Rodriguez'
  },
  {
    id: 'act-005',
    type: 'course_completion',
    title: 'Course Completion',
    description: 'Lisa completed Sacred Chakra Healing introduction',
    timestamp: '2024-03-15T10:30:00Z',
    user: 'Lisa Thompson'
  }
]

// Analytics Data
export const adminAnalytics: AdminAnalytics = {
  totalStudents: 342,
  totalRevenue: 89240,
  monthlyGrowth: 15,
  completionRate: 84,
  averageRating: 4.8,
  topCourse: 'Rose Meditation Level 1',
  recentActivity
}

// Content Pages Data
export interface AdminContentPage {
  id: string
  title: string
  path: string
  sections: AdminContentSection[]
  status: 'published' | 'draft'
  lastUpdated: string
}

export interface AdminContentSection {
  id: string
  name: string
  type: 'hero' | 'about' | 'services' | 'testimonials' | 'cta'
  content: any
  order: number
}

export const dummyContentPages: AdminContentPage[] = [
  {
    id: 'homepage',
    title: 'Homepage',
    path: '/',
    status: 'published',
    lastUpdated: '2024-03-10T15:30:00Z',
    sections: [
      {
        id: 'hero-section',
        name: 'Hero Section',
        type: 'hero',
        order: 1,
        content: {
          title: 'The Auracle',
          subtitle: 'Awaken divine remembrance and energetic clarity through the sacred art of Rose Meditation',
          description: '"Beloved, return to your breath. The moment is sacred." Discover your inner sanctuary through guided practices rooted in love, presence, and deep energetic awareness.',
          ctaButtons: [
            { text: 'Explore Courses', href: '/courses', style: 'primary' },
            { text: 'Book Your Reading', href: '/schedule', style: 'secondary' }
          ]
        }
      },
      {
        id: 'about-section',
        name: 'About Section',
        type: 'about',
        order: 2,
        content: {
          title: 'Meet Jennifer, The Auracle',
          credentials: [
            'Masters Degree Nova Southeastern University',
            'Bachelors of Science from Boston University',
            'Former Licensed Mental Health Counselor in Massachusetts (LMHC)'
          ],
          bio: 'A sacred guide devoted to awakening divine remembrance and energetic clarity...'
        }
      }
    ]
  }
]

// Media Library Data
export interface AdminMediaItem {
  id: string
  name: string
  type: 'image' | 'video' | 'audio'
  url: string
  size: number
  uploadedAt: string
  usedIn: string[]
}

export const dummyMediaItems: AdminMediaItem[] = [
  {
    id: 'media-001',
    name: 'rose-meditation-cover.jpg',
    type: 'image',
    url: '/images/courses/rose-meditation-cover.jpg',
    size: 245760,
    uploadedAt: '2024-03-01T10:00:00Z',
    usedIn: ['Rose Meditation Level 1', 'Homepage Hero']
  },
  {
    id: 'media-002',
    name: 'grounding-cord-audio.mp3',
    type: 'audio',
    url: '/audio/lessons/grounding-cord-guided.mp3',
    size: 8924160,
    uploadedAt: '2024-03-02T14:30:00Z',
    usedIn: ['Rose Meditation Level 1 - Lesson 2']
  },
  {
    id: 'media-003',
    name: 'golden-sun-visualization.mp4',
    type: 'video',
    url: '/video/lessons/golden-sun-practice.mp4',
    size: 125829120,
    uploadedAt: '2024-03-03T09:15:00Z',
    usedIn: ['Rose Meditation Level 1 - Lesson 3']
  }
]
