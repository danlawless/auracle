'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { 
  Award, 
  Heart, 
  Star, 
  Sparkles, 
  ArrowRight, 
  Trophy,
  Crown,
  Flower2
} from 'lucide-react'
import { useState, useEffect } from 'react'

interface CourseCompletionCelebrationProps {
  isOpen: boolean
  onClose: () => void
  courseName: string
  completionDate: Date
  totalTimeSpent: number
  onContinueJourney: () => void
}

const CourseCompletionCelebration: React.FC<CourseCompletionCelebrationProps> = ({
  isOpen,
  onClose,
  courseName,
  completionDate,
  totalTimeSpent,
  onContinueJourney
}) => {
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShowConfetti(true)
      // Auto-hide confetti after animation
      const timer = setTimeout(() => setShowConfetti(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isOpen) return null

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    if (hours > 0) {
      return `${hours}h ${mins}m`
    }
    return `${mins} minutes`
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Confetti Animation */}
          <AnimatePresence>
            {showConfetti && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {Array.from({ length: 50 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-rose rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `-10px`,
                    }}
                    initial={{ y: -20, rotate: 0, scale: 0 }}
                    animate={{
                      y: window.innerHeight + 50,
                      rotate: Math.random() * 360,
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      delay: Math.random() * 0.5,
                      ease: 'easeOut'
                    }}
                  />
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* Main Modal */}
          <motion.div
            className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full mx-4 overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", duration: 0.6 }}
          >
            {/* Header with gradient */}
            <div className="relative bg-gradient-sacred p-8 text-center">
              {/* Floating elements */}
              <motion.div
                className="absolute top-4 left-8"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Sparkles className="h-6 w-6 text-golden-light" />
              </motion.div>
              
              <motion.div
                className="absolute top-6 right-8"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 15, -15, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Star className="h-5 w-5 text-rose-pink" />
              </motion.div>

              {/* Trophy */}
              <motion.div
                className="inline-block mb-4"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 0.3,
                  type: "spring",
                  duration: 0.8
                }}
              >
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center shadow-lg">
                  <Crown className="h-10 w-10 text-white" />
                </div>
              </motion.div>

              <motion.h1
                className="text-4xl font-serif font-bold text-gray-800 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Sacred Journey Complete! 🌹
              </motion.h1>

              <motion.p
                className="text-xl text-gray-700 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                You have beautifully completed
              </motion.p>

              <motion.p
                className="text-2xl font-serif font-bold text-gradient-rose"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                {courseName}
              </motion.p>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Completion Stats */}
              <motion.div
                className="grid grid-cols-2 gap-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <div className="text-center p-4 bg-rose-pink/10 rounded-2xl border border-rose-pink/20">
                  <Trophy className="h-6 w-6 text-rose-pink mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Completed On</div>
                  <div className="text-lg font-semibold text-gray-800">
                    {formatDate(completionDate)}
                  </div>
                </div>
                
                <div className="text-center p-4 bg-golden-light/10 rounded-2xl border border-golden-light/20">
                  <Heart className="h-6 w-6 text-golden-light mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Sacred Time</div>
                  <div className="text-lg font-semibold text-gray-800">
                    {formatTime(totalTimeSpent)}
                  </div>
                </div>
              </motion.div>

              {/* Achievement Message */}
              <motion.div
                className="text-center mb-8 p-6 bg-gradient-to-r from-soft-lavender/20 to-rose-pink/20 rounded-2xl border border-rose-pink/10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 }}
              >
                <Flower2 className="h-8 w-8 text-rose-pink mx-auto mb-3" />
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  "You have walked the sacred path with courage and dedication. 
                  The seeds of transformation you've planted will continue to blossom. 
                  Your journey into deeper wisdom and spiritual mastery awaits."
                </p>
                <p className="text-sm text-gray-600 mt-3 font-medium">
                  — Jae, Master Auracle Reader
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
              >
                <button
                  onClick={onContinueJourney}
                  className="flex-1 bg-gradient-primary text-white px-6 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Continue Your Journey</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                
                <button
                  onClick={onClose}
                  className="flex-1 bg-white border-2 border-rose-pink text-rose-pink px-6 py-4 rounded-full font-semibold text-lg hover:bg-rose-pink/5 transition-all duration-200"
                >
                  Celebrate Later
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default CourseCompletionCelebration
