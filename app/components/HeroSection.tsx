'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Sparkles, Heart, Sun } from 'lucide-react'

const HeroSection = memo(() => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-sacred opacity-90"></div>
      
      {/* Floating Elements - Optimized for performance */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-rose-pink opacity-30 smooth-animation"
        animate={{ y: [-20, 20, -20] }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          repeatType: "reverse"
        }}
      >
        <Sparkles className="h-16 w-16" />
      </motion.div>
      
      <motion.div
        className="absolute top-1/3 right-1/4 text-golden-light opacity-40 smooth-animation"
        animate={{ y: [20, -20, 20] }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          repeatType: "reverse",
          delay: 1
        }}
      >
        <Sun className="h-12 w-12" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/3 left-1/6 text-deep-rose opacity-25 smooth-animation"
        animate={{ y: [-15, 15, -15] }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut",
          repeatType: "reverse",
          delay: 2
        }}
      >
        <Heart className="h-10 w-10" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Rose Symbol */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative smooth-animation">
              <div className="w-24 h-24 bg-gradient-rose rounded-full flex items-center justify-center shadow-2xl animate-glow">
                <span className="text-4xl">🌹</span>
              </div>
              <motion.div
                className="absolute -inset-4 border-2 border-golden-light rounded-full opacity-50 smooth-animation"
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear",
                  repeatType: "loop"
                }}
                style={{ willChange: 'transform' }}
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1
              className="text-5xl md:text-7xl font-serif font-bold text-gradient-rose leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              The Aura
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-700 font-light max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Awaken divine remembrance and energetic clarity through the sacred art of 
              <span className="text-gradient-gold font-medium"> Rose Meditation</span>
            </motion.p>
          </div>

          {/* Subtitle */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              "Beloved, return to your breath. The moment is sacred." 
              Discover your inner sanctuary through guided practices rooted in love, 
              presence, and deep energetic awareness.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link href="/courses" className="btn-primary text-lg px-12 py-4">
              Explore Courses
            </Link>
            <Link href="/schedule" className="btn-secondary text-lg px-12 py-4">
              Book Your Reading
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 smooth-animation"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              repeatType: "reverse"
            }}
          >
            <div className="w-6 h-10 border-2 border-rose-pink rounded-full flex justify-center">
              <div className="w-1 h-3 bg-rose-pink rounded-full mt-2"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
})

export default HeroSection
