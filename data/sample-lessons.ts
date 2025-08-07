import { Lesson, Course, CourseModule } from '../types/course'

// Individual lesson imports
import { rm1001Introduction } from './lessons/rm1-001-introduction'
import { rm1002GroundingCord } from './lessons/rm1-002-grounding-cord'
import { rm1003GoldenSun } from './lessons/rm1-003-golden-sun'
import { rm1004AuraBoundaries } from './lessons/rm1-004-aura-boundaries'
import { rm1005CordRenewal } from './lessons/rm1-005-cord-renewal'
import { rm1006FourRoses } from './lessons/rm1-006-four-roses'
import { rm1007EarthCosmicEnergy } from './lessons/rm1-007-earth-cosmic-energy'
import { rm1008CleansingRoses } from './lessons/rm1-008-cleansing-roses'
import { rm1009PinkRose } from './lessons/rm1-009-pink-rose'
import { rm1010ClosingIntegration } from './lessons/rm1-010-closing-integration'

// Rose Meditation Level 1 - Complete Course
export const roseMeditationLessons: Lesson[] = [
  rm1001Introduction,
  rm1002GroundingCord,
  rm1003GoldenSun,
  rm1004AuraBoundaries,
  rm1005CordRenewal,
  rm1006FourRoses,
  rm1007EarthCosmicEnergy,
  rm1008CleansingRoses,
  rm1009PinkRose,
  rm1010ClosingIntegration
]

// Updated course modules for Rose Meditation Level 1  
export const roseMeditationModules: CourseModule[] = [
  {
    id: 'rm1-foundations',
    title: 'Sacred Foundations',
    description: 'Master the essential building blocks: Introduction, Grounding, Golden Sun, and Aura Boundaries',
    lessons: ['rm1-001', 'rm1-002', 'rm1-003', 'rm1-004'],
    order: 1,
    estimatedDuration: 47 // 8+12+15+12
  },
  {
    id: 'rm1-protection',
    title: 'Energetic Protection & Flow',
    description: 'Learn cord renewal, Four Roses protection, and Earth-Cosmic energy circulation',
    lessons: ['rm1-005', 'rm1-006', 'rm1-007'],
    order: 2,
    estimatedDuration: 40 // 10+14+16
  },
  {
    id: 'rm1-mastery',
    title: 'Advanced Cleansing & Integration',
    description: 'Master cleansing Roses, Pink Rose release, and full practice integration',
    lessons: ['rm1-008', 'rm1-009', 'rm1-010'],
    order: 3,
    estimatedDuration: 45 // 13+12+20
  }
]
