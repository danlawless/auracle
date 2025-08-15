'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { X, Users, Video, Calendar, Sparkles, CheckCircle, Crown, Gift } from 'lucide-react'

interface MembershipUpsellModalProps {
  isOpen: boolean
  onClose: () => void
  onContinue: (includeMembership: boolean) => void
  courseTitle: string
}

const MembershipUpsellModal = ({ 
  isOpen, 
  onClose, 
  onContinue, 
  courseTitle 
}: MembershipUpsellModalProps) => {
  const [selectedOption, setSelectedOption] = useState<'course-only' | 'with-membership'>('with-membership')

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleContinue = () => {
    onContinue(selectedOption === 'with-membership')
  }

  if (!isOpen) return null

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[100] flex items-center justify-center p-4" style={{ minHeight: '100vh' }}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ margin: 'auto' }}
      >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-golden-light to-earth-copper rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-2">
                Join Our Sacred Community
              </h2>
              <p className="text-gray-600 text-lg">
                Enhance your {courseTitle} experience with live guidance and community support
              </p>
            </div>

            {/* Options Comparison */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              
              {/* Course Only Option */}
              <div 
                className={`relative cursor-pointer transition-all duration-300 ${
                  selectedOption === 'course-only' 
                    ? 'ring-2 ring-rose-pink shadow-lg' 
                    : 'hover:shadow-md'
                }`}
                onClick={() => setSelectedOption('course-only')}
              >
                <div className="card-sacred h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-serif font-semibold text-gray-800">
                      Course Only
                    </h3>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedOption === 'course-only' 
                        ? 'border-rose-pink bg-rose-pink' 
                        : 'border-gray-300'
                    }`}>
                      {selectedOption === 'course-only' && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      Complete {courseTitle}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      All guided meditations
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      Lifetime access
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      Self-paced learning
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">
                      What you're already paying
                    </div>
                    <div className="text-sm text-gray-500">One-time purchase</div>
                  </div>
                </div>
              </div>

              {/* With Membership Option */}
              <div 
                className={`relative cursor-pointer transition-all duration-300 ${
                  selectedOption === 'with-membership' 
                    ? 'ring-2 ring-golden-light shadow-xl' 
                    : 'hover:shadow-md'
                }`}
                onClick={() => setSelectedOption('with-membership')}
              >
                {/* Recommended Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-golden-light to-earth-copper text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center">
                    <Sparkles className="h-3 w-3 mr-1" />
                    RECOMMENDED
                  </div>
                </div>

                <div className="card-sacred h-full bg-gradient-to-br from-golden-light/5 to-earth-copper/5 border-2 border-golden-light/30">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-serif font-semibold text-gray-800">
                      Course + Community
                    </h3>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedOption === 'with-membership' 
                        ? 'border-golden-light bg-golden-light' 
                        : 'border-gray-300'
                    }`}>
                      {selectedOption === 'with-membership' && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      Everything in Course Only
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Video className="h-4 w-4 text-golden-light mr-2 flex-shrink-0" />
                      <span className="font-medium">Live guided sessions with Jae</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 text-golden-light mr-2 flex-shrink-0" />
                      <span className="font-medium">Weekly community calls</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 text-golden-light mr-2 flex-shrink-0" />
                      <span className="font-medium">Private community access</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Sparkles className="h-4 w-4 text-golden-light mr-2 flex-shrink-0" />
                      <span className="font-medium">Personalized guidance</span>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Gift className="h-5 w-5 text-golden-light" />
                      <span className="text-2xl font-bold text-gradient-gold">FREE</span>
                      <span className="text-lg text-gray-600">for 30 days</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      Then $29.99/month (cancel anytime)
                    </div>
                    <div className="inline-flex items-center px-3 py-1 bg-golden-light/10 rounded-full text-xs font-medium text-golden-dark">
                      <Crown className="h-3 w-3 mr-1" />
                      One-time offer during purchase
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-gradient-to-br from-rose-pink/5 to-deep-rose/5 rounded-xl p-6 mb-8 border border-rose-pink/20">
              <h4 className="text-lg font-serif font-semibold text-gray-800 mb-3 text-center">
                Why Join Our Sacred Community?
              </h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="text-center">
                  <Video className="h-8 w-8 text-rose-pink mx-auto mb-2" />
                  <div className="font-medium mb-1">Live Guidance</div>
                  <div>Practice with Jae in real-time and get immediate feedback</div>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-rose-pink mx-auto mb-2" />
                  <div className="font-medium mb-1">Sacred Community</div>
                  <div>Connect with like-minded souls on the same journey</div>
                </div>
                <div className="text-center">
                  <Calendar className="h-8 w-8 text-rose-pink mx-auto mb-2" />
                  <div className="font-medium mb-1">Weekly Support</div>
                  <div>Regular check-ins and group meditation sessions</div>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
              <div className="flex items-start">
                <Sparkles className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-amber-800">
                  <div className="font-medium mb-1">Important:</div>
                  <ul className="space-y-1">
                    <li>• This community membership offer is only available during your first course purchase</li>
                    <li>• You can cancel anytime during the free 30 days with no charge</li>
                    <li>• After 30 days, membership continues at $29.99/month unless cancelled</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleContinue}
                className={`flex-1 py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg ${
                  selectedOption === 'with-membership'
                    ? 'bg-gradient-to-r from-golden-light to-earth-copper text-white hover:scale-105'
                    : 'bg-gradient-to-r from-rose-pink to-deep-rose text-white hover:scale-105'
                }`}
              >
                {selectedOption === 'with-membership' 
                  ? '🌹 Join Community + Course' 
                  : '🌹 Continue with Course Only'
                }
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 text-center text-xs text-gray-500">
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  No commitment
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Cancel anytime
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Sacred guarantee
                </div>
              </div>
            </div>
          </div>
        </motion.div>
    </div>
  )
}

export default MembershipUpsellModal
