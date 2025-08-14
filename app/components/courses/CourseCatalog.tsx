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
      subtitle: 'Mini Course - Your Gateway to Sacred Practice',
      description: 'Begin your transformative journey with the foundational practices that will unlock your spiritual potential and set you on the path to becoming an Aura Reader.',
      image: '🌹',
      price: 197,
      originalPrice: 297,
      duration: '4 weeks',
      lessons: 10,
      students: 2847,
      rating: 4.9,
      level: 'Start Here',
      includes: [
        '10 HD video lessons',
        'Guided meditation audios',
        'Sacred practice journal',
        'AI-powered learning assistant',
        'Lifetime access'
      ],
      highlights: [
        'Golden Sun Visualization',
        'Grounding Cord Mastery',
        'Pink Rose Heart Opening',
        'Aura Boundary Setting'
      ],
      category: 'Journey Step 1',
      isAvailable: true,
      isPopular: true,
      journeyStep: 1
    },
    {
      id: 'rose-meditation-2',
      title: 'Rose Meditation Level 2',
      subtitle: 'Deepen Your Sacred Practice',
      description: 'Expand your abilities with advanced Rose Meditation techniques and deeper spiritual connections. Build upon Level 1 foundations.',
      image: '🌹✨',
      price: 397,
      originalPrice: 497,
      duration: '6 weeks',
      lessons: 15,
      students: 0,
      rating: 0,
      level: 'Intermediate',
      includes: [
        '15 advanced video lessons',
        'Master-level meditations',
        'Advanced practice guide',
        'Group healing sessions',
        'Lifetime access'
      ],
      highlights: [
        'Advanced Four Roses',
        'Energy Transmutation',
        'Chakra Rose Work',
        'Sacred Healing Techniques'
      ],
      category: 'Journey Step 2',
      isAvailable: false,
      isPopular: false,
      journeyStep: 2
    },
    {
      id: 'rose-meditation-3',
      title: 'Rose Meditation Level 3',
      subtitle: 'Master Level Sacred Practice',
      description: 'Master the highest levels of Rose Meditation and prepare for professional energy work. Complete your foundation training.',
      image: '🌹👑',
      price: 597,
      originalPrice: 797,
      duration: '8 weeks',
      lessons: 20,
      students: 0,
      rating: 0,
      level: 'Advanced',
      includes: [
        '20 master-level lessons',
        'Professional techniques',
        'Certification preparation',
        'Mentorship sessions',
        'Lifetime access'
      ],
      highlights: [
        'Master Rose Techniques',
        'Sacred Geometry Integration',
        'Advanced Healing Protocols',
        'Spiritual Mastery'
      ],
      category: 'Journey Step 3',
      isAvailable: false,
      isPopular: false,
      journeyStep: 3
    },
    {
      id: 'aura-reader-certification',
      title: 'Become an Aura Reader',
      subtitle: 'Professional Certification Program',
      description: 'Transform your spiritual practice into a professional skill. Complete certification program to guide others and offer professional readings.',
      image: '👁️✨',
      price: 1297,
      originalPrice: 1797,
      duration: '12 weeks',
      lessons: 48,
      students: 0,
      rating: 0,
      level: 'Professional',
      includes: [
        '48 comprehensive modules',
        'Live mentorship calls',
        'Practice client sessions',
        'Certification exam',
        'Business training'
      ],
      highlights: [
        'Aura Reading Mastery',
        'Professional Ethics',
        'Client Session Skills',
        'Business Development'
      ],
      category: 'Final Destination',
      isAvailable: false,
      isPopular: false,
      journeyStep: 4
    }
  ]

  const categories = ['All', 'Journey Step 1', 'Journey Step 2', 'Journey Step 3', 'Final Destination']

}

export default CourseCatalog
