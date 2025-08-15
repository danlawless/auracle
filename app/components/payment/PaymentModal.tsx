'use client'

import { useState, useEffect } from 'react'
import { X, CreditCard, Lock, Shield, CheckCircle, Sparkles } from 'lucide-react'
import { useUser } from '../../contexts/UserContext'
import MembershipUpsellModal from '../membership/MembershipUpsellModal'

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  courseId: string
  courseTitle: string
  coursePrice: string
  originalPrice?: string
  onPaymentSuccess: () => void
}

const PaymentModal = ({ 
  isOpen, 
  onClose, 
  courseId, 
  courseTitle, 
  coursePrice, 
  originalPrice,
  onPaymentSuccess 
}: PaymentModalProps) => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    email: '',
    billingAddress: ''
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState('')
  const [step, setStep] = useState<'payment' | 'processing' | 'success'>('payment')
  const [showMembershipUpsell, setShowMembershipUpsell] = useState(false)
  const [includeMembership, setIncludeMembership] = useState(false)
  const { user, activateMembership } = useUser()

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

  const handleInputChange = (field: string, value: string) => {
    setPaymentData(prev => ({ ...prev, [field]: value }))
    if (error) setError('')
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const matches = v.match(/\d{4,16}/g)
    const match = matches && matches[0] || ''
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
      return parts.join(' ')
    } else {
      return v
    }
  }

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4)
    }
    return v
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Check if user hasn't used free trial and show membership upsell first
    if (user && !user.membership?.hasUsedFreeTrial && !showMembershipUpsell) {
      setShowMembershipUpsell(true)
      return
    }

    setIsProcessing(true)
    setError('')
    setStep('processing')

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 3000))

      // Activate membership if selected
      if (includeMembership) {
        activateMembership(true) // true for free trial
      }

      // Simulate successful payment
      setStep('success')
      
      // Wait a moment then call success callback
      setTimeout(() => {
        onPaymentSuccess()
        handleClose()
      }, 2000)

    } catch (err) {
      setError('Payment failed. Please try again.')
      setStep('payment')
    }

    setIsProcessing(false)
  }

  const handleMembershipUpsellContinue = (withMembership: boolean) => {
    setIncludeMembership(withMembership)
    setShowMembershipUpsell(false)
    // Continue with payment processing
    handleSubmit(new Event('submit') as any)
  }

  const handleClose = () => {
    if (!isProcessing) {
      setPaymentData({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        name: '',
        email: '',
        billingAddress: ''
      })
      setError('')
      setStep('payment')
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[100] flex items-center justify-center p-4" style={{ minHeight: '100vh' }}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()} style={{ margin: 'auto' }}>
          
          {step === 'payment' && (
            <>
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-pink to-deep-rose rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <CreditCard className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-gray-800 mb-2">
                    Complete Your Purchase
                  </h2>
                  <p className="text-gray-600">
                    Secure your lifetime access to {courseTitle}
                  </p>
                </div>

                {/* Course Summary */}
                <div className="bg-gradient-to-br from-rose-pink/5 to-deep-rose/5 rounded-xl p-6 mb-8 border border-rose-pink/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-serif font-semibold text-gray-800">{courseTitle}</h3>
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-gradient-gold">{coursePrice}</span>
                        {originalPrice && (
                          <span className="text-lg text-gray-400 line-through">{originalPrice}</span>
                        )}
                      </div>
                      {originalPrice && (
                        <div className="text-xs font-bold text-rose-pink bg-rose-pink/10 px-2 py-1 rounded-full inline-block">
                          75% OFF
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Lifetime Access • 30-Day Reflection Period
                  </div>
                </div>

                {/* Payment Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Card Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={paymentData.cardNumber}
                        onChange={(e) => handleInputChange('cardNumber', formatCardNumber(e.target.value))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-pink focus:border-transparent transition-all duration-200"
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        required
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <CreditCard className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  {/* Expiry & CVV */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        value={paymentData.expiryDate}
                        onChange={(e) => handleInputChange('expiryDate', formatExpiryDate(e.target.value))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-pink focus:border-transparent transition-all duration-200"
                        placeholder="MM/YY"
                        maxLength={5}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        value={paymentData.cvv}
                        onChange={(e) => handleInputChange('cvv', e.target.value.replace(/\D/g, ''))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-pink focus:border-transparent transition-all duration-200"
                        placeholder="123"
                        maxLength={4}
                        required
                      />
                    </div>
                  </div>

                  {/* Cardholder Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      value={paymentData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-pink focus:border-transparent transition-all duration-200"
                      placeholder="Full name on card"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={paymentData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-pink focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <p className="text-red-600 text-sm">{error}</p>
                    </div>
                  )}

                  {/* Security Notice */}
                  <div className="flex items-center justify-center text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
                    <Shield className="h-4 w-4 mr-2" />
                    <span>Secured by 256-bit SSL encryption</span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-gradient-to-r from-rose-pink to-deep-rose text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center justify-center"
                  >
                    <Lock className="h-5 w-5 mr-2" />
                    Complete Sacred Purchase
                  </button>
                </form>
              </div>
            </>
          )}

          {step === 'processing' && (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-pink to-deep-rose rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2">
                Processing Your Sacred Purchase
              </h3>
              <p className="text-gray-600 mb-4">
                Please wait while we secure your lifetime access...
              </p>
              <div className="flex items-center justify-center text-sm text-gray-500">
                <Shield className="h-4 w-4 mr-2" />
                <span>Your payment is being processed securely</span>
              </div>
            </div>
          )}

          {step === 'success' && (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2">
                Welcome to Your Sacred Journey!
              </h3>
              <p className="text-gray-600 mb-4">
                Your purchase was successful. You now have lifetime access to {courseTitle}
                {includeMembership && ' plus 30 days free community membership'}.
              </p>
              {includeMembership && (
                <div className="bg-gradient-to-br from-golden-light/10 to-earth-copper/10 rounded-lg p-4 mb-4 border border-golden-light/30">
                  <div className="flex items-center justify-center text-golden-dark mb-2">
                    <Sparkles className="h-4 w-4 mr-2" />
                    <span className="font-medium">Community Membership Activated!</span>
                  </div>
                  <p className="text-sm text-gray-600 text-center">
                    Your free 30-day trial includes live sessions, weekly calls, and community access.
                    Billing starts at $29.99/month after your trial ends.
                  </p>
                </div>
              )}
              <div className="flex items-center justify-center text-sm text-rose-pink bg-rose-pink/10 rounded-lg p-3">
                <Sparkles className="h-4 w-4 mr-2" />
                <span>Redirecting to your course...</span>
              </div>
            </div>
          )}
        </div>

      {/* Membership Upsell Modal */}
      <MembershipUpsellModal
        isOpen={showMembershipUpsell}
        onClose={() => setShowMembershipUpsell(false)}
        onContinue={handleMembershipUpsellContinue}
        courseTitle={courseTitle}
      />
    </div>
  )
}

export default PaymentModal
