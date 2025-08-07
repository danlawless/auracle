'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Heart, Sparkles } from 'lucide-react'

const ScheduleHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-sacred overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-1/4 left-1/6 text-vibrant-pink opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Calendar className="h-16 w-16" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/4 right-1/6 text-golden-accent opacity-25"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles className="h-12 w-12" />
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
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-3xl">👁️</span>
              </div>
              <motion.div
                className="absolute -inset-3 border-2 border-golden-accent rounded-full opacity-50"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-6">
            <motion.h1
              className="text-5xl md:text-6xl font-serif font-medium text-gradient-rose leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Book Your Session
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Connect with 
              <span className="text-gradient-gold font-medium"> Jennifer</span>, 
              for profound spiritual guidance and transformative insights into your divine path.
            </motion.p>
          </div>

          {/* Session Benefits */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {[
              { icon: Heart, title: 'Personal Insights', description: 'Deep understanding of your spiritual journey and purpose' },
              { icon: Sparkles, title: 'Divine Guidance', description: 'Clear messages from your spirit guides and divine team' },
              { icon: Clock, title: 'Flexible Sessions', description: 'Choose 30, 60, or 90 minutes based on your needs' }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="card-sacred p-6 text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <benefit.icon className="h-8 w-8 text-vibrant-pink mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-serif font-medium text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {benefit.description}
                </p>
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
              <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                <span className="text-xl">🌹</span>
              </div>
            </div>
            <p className="text-lg font-serif italic text-gray-700 mb-2">
              "Beloved, return to your breath. The moment is sacred."
            </p>
            <p className="text-sm text-gray-500">
              Experience the gentle, transformative power of authentic spiritual guidance
            </p>
          </motion.div>

          {/* Quick Action */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <button className="btn-primary text-lg px-12 py-4">
              Book Your Session Now
            </button>
            <button className="btn-secondary text-lg px-12 py-4">
              Learn About Jennifer
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex justify-center items-center space-x-8 text-gray-600 text-sm mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <div className="flex items-center">
              <span className="text-xl mr-2">⭐</span>
              <span>500+ Sessions</span>
            </div>
            <div className="flex items-center">
              <span className="text-xl mr-2">❤️</span>
              <span>98% Satisfaction</span>
            </div>
            <div className="flex items-center">
              <span className="text-xl mr-2">🌍</span>
              <span>Worldwide Sessions</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ScheduleHero
