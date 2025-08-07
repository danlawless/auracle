'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  CreditCard, 
  CheckCircle, 
  ArrowLeft, 
  ArrowRight,
  User,
  Mail,
  Heart,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

interface SessionOption {
  id: string
  title: string
  duration: string
  price: number
  description: string
  icon: string
  questions: string[]
}

interface BookingData {
  sessionType: SessionOption | null
  firstName: string
  lastName: string
  email: string
  phone?: string
  sessionGoals: string[]
  specificNeeds: string
  selectedDate: string | null
  selectedTime: string | null
}

const StreamlinedBooking = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [bookingData, setBookingData] = useState<BookingData>({
    sessionType: null,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    sessionGoals: [],
    specificNeeds: '',
    selectedDate: null,
    selectedTime: null
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const sessionOptions: SessionOption[] = [
    {
      id: '30-min',
      title: '30-Minute Focused Session',
      duration: '30 minutes',
      price: 150,
      description: 'Perfect for one specific area of guidance',
      icon: '🌸',
      questions: [
        'Connect with a specific spirit guide',
        'Explore one significant past life',
        'Get clarity on one focused question',
        'Chakra insight & healing (1-2 chakras)',
        'Dream interpretation',
        'Other specific focus'
      ]
    },
    {
      id: '60-min',
      title: '60-Minute Deep Dive',
      duration: '60 minutes',
      price: 200,
      description: 'Our most popular comprehensive session',
      icon: '🌹',
      questions: [
        'Multiple spirit guide connections',
        'Deep dive into 2-3 relevant past lives',
        'Complex life questions & themes',
        'Full chakra assessment (3-4 chakras)',
        'Multiple dream analysis',
        'Relationship & life path guidance'
      ]
    },
    {
      id: '90-min',
      title: '90-Minute Complete Experience',
      duration: '90 minutes',
      price: 250,
      description: 'The full spiritual overview experience',
      icon: '✨',
      questions: [
        'Complete spirit guide translation',
        'Multiple lifetimes with karmic patterns',
        'Comprehensive life themes',
        'Complete 7-chakra energy balancing',
        'Deep spiritual symbol interpretation',
        'Full spiritual overview integration'
      ]
    }
  ]

  // Mock calendar data - in production, this would come from an API
  const availableDates = [
    '2024-02-15', '2024-02-16', '2024-02-17', '2024-02-19', '2024-02-20',
    '2024-02-22', '2024-02-23', '2024-02-24', '2024-02-26', '2024-02-27'
  ]

  const timeSlots = [
    '9:00 AM', '10:30 AM', '12:00 PM', '1:30 PM', '3:00 PM', '4:30 PM', '6:00 PM', '7:30 PM'
  ]

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  const handleSessionGoalToggle = (goal: string) => {
    setBookingData(prev => ({
      ...prev,
      sessionGoals: prev.sessionGoals.includes(goal)
        ? prev.sessionGoals.filter(g => g !== goal)
        : [...prev.sessionGoals, goal]
    }))
  }

  const canProceedToNextStep = () => {
    switch (currentStep) {
      case 0: return bookingData.sessionType !== null
      case 1: return bookingData.firstName && bookingData.lastName && bookingData.email
      case 2: return bookingData.sessionGoals.length > 0
      case 3: return bookingData.selectedDate && bookingData.selectedTime
      case 4: return true // Payment step
      default: return false
    }
  }

  const handleNext = () => {
    if (canProceedToNextStep()) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handleBack = () => {
    setCurrentStep(prev => prev - 1)
  }

  const handlePayment = async () => {
    setIsSubmitting(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitting(false)
      setIsComplete(true)
    }, 2000)
  }

  const steps = [
    'Select Session',
    'Your Details', 
    'Session Focus',
    'Choose Time',
    'Payment'
  ]

  if (isComplete) {
    return (
      <motion.div
        className="min-h-screen flex items-center justify-center bg-gradient-sacred p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="card-sacred max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-rose rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          
          <h1 className="text-3xl font-serif font-medium text-gradient-primary mb-4">
            Your Session is Confirmed! ✨
          </h1>
          
          <div className="bg-white/50 rounded-2xl p-6 mb-6">
            <div className="text-left space-y-2">
              <p><strong>Session:</strong> {bookingData.sessionType?.title}</p>
              <p><strong>Date:</strong> {bookingData.selectedDate ? formatDate(bookingData.selectedDate) : ''}</p>
              <p><strong>Time:</strong> {bookingData.selectedTime}</p>
              <p><strong>Investment:</strong> ${bookingData.sessionType?.price}</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-8">
            Thank you, {bookingData.firstName}! We'll see you for your sacred session. 
            Look out for a confirmation email with your session details and preparation guide.
          </p>

                      <div className="space-y-4">
              <a href="/essence" className="btn-primary w-full text-lg py-4 inline-block text-center">
                Explore Our Essence Before Our Call
              </a>
              <button className="btn-secondary w-full text-lg py-4">
                Add to Calendar
              </button>
            </div>

          <div className="mt-8 text-sm text-gray-600 bg-white/30 rounded-xl p-4">
            <p className="mb-2"><strong>What's next?</strong></p>
            <ul className="text-left space-y-1">
              <li>• Check your email for session prep materials</li>
              <li>• Test your video connection 15 minutes early</li>
              <li>• Prepare your questions and intentions</li>
              <li>• Find a quiet, private space for your session</li>
            </ul>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-sacred p-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className={`flex items-center ${
                  index <= currentStep ? 'text-deep-rose' : 'text-gray-400'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    index <= currentStep 
                      ? 'bg-gradient-rose text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {index + 1}
                </div>
                <span className="ml-2 text-sm font-medium hidden sm:block">{step}</span>
              </div>
            ))}
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-rose h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Step 0: Session Selection */}
            {currentStep === 0 && (
              <div className="card-sacred">
                <h2 className="text-2xl font-serif font-medium text-gradient-primary mb-6 text-center">
                  Choose Your Session Length
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {sessionOptions.map((session) => (
                    <div
                      key={session.id}
                      onClick={() => setBookingData(prev => ({ ...prev, sessionType: session }))}
                      className={`cursor-pointer transition-all duration-300 rounded-2xl p-6 border-2 ${
                        bookingData.sessionType?.id === session.id
                          ? 'border-deep-rose bg-rose-pink/10 scale-105'
                          : 'border-gray-200 hover:border-rose-pink hover:bg-white/50'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-3xl mb-3">{session.icon}</div>
                        <h3 className="font-serif font-medium text-gray-800 mb-2">
                          {session.title}
                        </h3>
                        <div className="text-2xl font-semibold text-deep-rose mb-1">
                          ${session.price}
                        </div>
                        <div className="text-gray-600 text-sm mb-3 flex items-center justify-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {session.duration}
                        </div>
                        <p className="text-gray-700 text-sm">
                          {session.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 1: Personal Details */}
            {currentStep === 1 && (
              <div className="card-sacred">
                <h2 className="text-2xl font-serif font-medium text-gradient-primary mb-6 text-center">
                  Tell Us About Yourself
                </h2>
                
                <div className="max-w-2xl mx-auto space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={bookingData.firstName}
                        onChange={(e) => setBookingData(prev => ({ ...prev, firstName: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-pink focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value={bookingData.lastName}
                        onChange={(e) => setBookingData(prev => ({ ...prev, lastName: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-pink focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={bookingData.email}
                      onChange={(e) => setBookingData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-pink focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-pink focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Session Focus */}
            {currentStep === 2 && bookingData.sessionType && (
              <div className="card-sacred">
                <h2 className="text-2xl font-serif font-medium text-gradient-primary mb-2 text-center">
                  What Would You Like to Explore?
                </h2>
                <p className="text-gray-600 text-center mb-8">
                  Select all areas you'd like to focus on during your {bookingData.sessionType.duration} session
                </p>
                
                <div className="max-w-3xl mx-auto space-y-4">
                  {bookingData.sessionType.questions.map((question, index) => (
                    <div
                      key={index}
                      onClick={() => handleSessionGoalToggle(question)}
                      className={`cursor-pointer transition-all duration-300 rounded-xl p-4 border-2 flex items-center ${
                        bookingData.sessionGoals.includes(question)
                          ? 'border-deep-rose bg-rose-pink/10'
                          : 'border-gray-200 hover:border-rose-pink hover:bg-white/50'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center ${
                        bookingData.sessionGoals.includes(question)
                          ? 'border-deep-rose bg-deep-rose'
                          : 'border-gray-300'
                      }`}>
                        {bookingData.sessionGoals.includes(question) && (
                          <CheckCircle className="h-3 w-3 text-white" />
                        )}
                      </div>
                      <span className="text-gray-700">{question}</span>
                    </div>
                  ))}
                  
                  <div className="mt-6">
                    <label className="block text-gray-700 font-medium mb-2">
                      Anything specific you'd like Jae to know? (Optional)
                    </label>
                    <textarea
                      value={bookingData.specificNeeds}
                      onChange={(e) => setBookingData(prev => ({ ...prev, specificNeeds: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-pink focus:border-transparent"
                      rows={4}
                      placeholder="Share any specific questions, concerns, or context that would help prepare for your session..."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Calendar Selection */}
            {currentStep === 3 && (
              <div className="card-sacred">
                <h2 className="text-2xl font-serif font-medium text-gradient-primary mb-6 text-center">
                  Choose Your Preferred Time
                </h2>
                
                <div className="max-w-4xl mx-auto">
                  {/* Date Selection */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">
                      Available Dates
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {availableDates.map((date) => (
                        <button
                          key={date}
                          onClick={() => setBookingData(prev => ({ ...prev, selectedDate: date }))}
                          className={`p-3 rounded-xl border-2 transition-all duration-300 text-center ${
                            bookingData.selectedDate === date
                              ? 'border-deep-rose bg-rose-pink/10 text-deep-rose'
                              : 'border-gray-200 hover:border-rose-pink text-gray-700'
                          }`}
                        >
                          <div className="text-sm font-medium">
                            {formatDate(date)}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Selection */}
                  {bookingData.selectedDate && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">
                        Available Times for {formatDate(bookingData.selectedDate)}
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setBookingData(prev => ({ ...prev, selectedTime: time }))}
                            className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                              bookingData.selectedTime === time
                                ? 'border-deep-rose bg-rose-pink/10 text-deep-rose'
                                : 'border-gray-200 hover:border-rose-pink text-gray-700'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Payment */}
            {currentStep === 4 && (
              <div className="card-sacred">
                <h2 className="text-2xl font-serif font-medium text-gradient-primary mb-6 text-center">
                  Secure Payment
                </h2>
                
                <div className="max-w-2xl mx-auto">
                  {/* Booking Summary */}
                  <div className="bg-white/50 rounded-2xl p-6 mb-6">
                    <h3 className="font-medium text-gray-800 mb-4">Booking Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Session:</span>
                        <span>{bookingData.sessionType?.title}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Date & Time:</span>
                        <span>
                          {bookingData.selectedDate ? formatDate(bookingData.selectedDate) : ''} at {bookingData.selectedTime}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Client:</span>
                        <span>{bookingData.firstName} {bookingData.lastName}</span>
                      </div>
                      <div className="border-t pt-2 mt-2 flex justify-between font-medium text-lg">
                        <span>Total:</span>
                        <span>${bookingData.sessionType?.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Payment Form */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-pink focus:border-transparent"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-pink focus:border-transparent"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-pink focus:border-transparent"
                          placeholder="123"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-pink focus:border-transparent"
                        placeholder="Name on card"
                      />
                    </div>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex justify-center items-center space-x-6 text-gray-600 text-sm mt-6 mb-6">
                    <div className="flex items-center">
                      <span className="text-xl mr-1">🔒</span>
                      <span>SSL Secured</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xl mr-1">💳</span>
                      <span>256-bit Encryption</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className={`flex items-center px-6 py-3 rounded-xl transition-all duration-300 ${
              currentStep === 0 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-gray-700 hover:bg-white/50'
            }`}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </button>

          <div className="flex items-center space-x-2">
            {currentStep < 4 ? (
              <button
                onClick={handleNext}
                disabled={!canProceedToNextStep()}
                className={`flex items-center px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                  canProceedToNextStep()
                    ? 'bg-gradient-rose text-white hover:shadow-lg'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Continue
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            ) : (
              <button
                onClick={handlePayment}
                disabled={isSubmitting}
                className="flex items-center px-8 py-3 bg-gradient-rose text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="h-5 w-5 mr-2" />
                    Complete Booking - ${bookingData.sessionType?.price}
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StreamlinedBooking
