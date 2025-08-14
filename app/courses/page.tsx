'use client'

import CourseHero from '../components/courses/CourseHero'
import RoseMeditationHero from '../components/courses/RoseMeditationHero'
import JourneyProgression from '../components/courses/JourneyProgression'
import LearningPath from '../components/courses/LearningPath'
import CourseCatalog from '../components/courses/CourseCatalog'
import CourseFeatures from '../components/courses/CourseFeatures'

export default function CoursesPage() {
  return (
    <div className="overflow-hidden">
      <CourseHero />
      <RoseMeditationHero />
      <JourneyProgression />
      <LearningPath />
      <CourseCatalog />
      <CourseFeatures />
    </div>
  )
}
