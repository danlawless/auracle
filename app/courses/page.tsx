'use client'

import CourseHero from '../components/courses/CourseHero'
import CourseCatalog from '../components/courses/CourseCatalog'
import CourseFeatures from '../components/courses/CourseFeatures'
import LearningPath from '../components/courses/LearningPath'

export default function CoursesPage() {
  return (
    <div className="overflow-hidden">
      <CourseHero />
      <LearningPath />
      <CourseCatalog />
      <CourseFeatures />
    </div>
  )
}
