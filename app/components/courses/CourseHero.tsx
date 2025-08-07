'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, Clock, Award } from 'lucide-react'

const CourseHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-sacred overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-1/4 left-1/6 text-rose-pink opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <BookOpen className="h-16 w-16" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/4 right-1/6 text-golden-light opacity-25"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Award className="h-12 w-12" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Sacred Symbol */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-rose rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-3xl">📚</span>
              </div>
              <motion.div
                className="absolute -inset-3 border-2 border-golden-light rounded-full opacity-50"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-6">
            <motion.h1
              className="text-5xl md:text-6xl font-serif font-bold text-gradient-rose leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Sacred Courses
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Transform your spiritual journey through 
              <span className="text-gradient-gold font-medium"> Rose Meditation</span>, 
              aura reading mastery, and deep energetic awareness practices.
            </motion.p>
          </div>

          {/* Course Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {[
              { icon: BookOpen, number: '12+', label: 'Sacred Courses' },
              { icon: Users, number: '1200+', label: 'Students' },
              { icon: Clock, number: '50+', label: 'Hours Content' },
              { icon: Award, number: '95%', label: 'Completion Rate' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="card-sacred p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <stat.icon className="h-8 w-8 text-deep-rose mx-auto mb-2" />
                <div className="text-2xl font-serif font-bold text-gradient-gold mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Sacred Quote */}
          <motion.div
            className="card-sacred max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                <span className="text-xl">🌹</span>
              </div>
            </div>
            <p className="text-lg font-serif italic text-gray-700 mb-2">
              "You are doing beautifully. Let each practice unfold in its own rhythm."
            </p>
            <p className="text-sm text-gray-500">
              Begin your journey with courses designed for every level of spiritual practice
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CourseHero
