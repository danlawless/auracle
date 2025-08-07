'use client'

import { motion } from 'framer-motion'
import { Calendar, CreditCard, Video, Heart, ArrowRight } from 'lucide-react'

const BookingProcess = () => {
  const steps = [
    {
      icon: Calendar,
      title: 'Choose Your Time',
      description: 'Select from available time slots that work with your schedule. All sessions are held via secure video call.',
      details: ['View real-time availability', 'Multiple timezone support', 'Instant confirmation', 'Calendar integration'],
      color: 'from-rose-pink to-deep-rose'
    },
    {
      icon: CreditCard,
      title: 'Secure Payment',
      description: 'Complete your booking with our secure payment system. All transactions are encrypted and protected.',
      details: ['Multiple payment options', 'Secure SSL encryption', 'Instant receipt', 'Refund protection'],
      color: 'from-golden-light to-earth-copper'
    },
    {
      icon: Heart,
      title: 'Preparation Guidance',
      description: 'Receive personalized preparation materials to help you get the most from your sacred session.',
      details: ['Pre-session meditation', 'Intention setting guide', 'Technical setup help', 'What to expect'],
      color: 'from-earth-copper to-golden-light'
    },
    {
      icon: Video,
      title: 'Your Sacred Session',
      description: 'Connect with Jennifer for your transformative spiritual guidance in a safe, sacred digital space.',
      details: ['HD video quality', 'Session recording included', 'Private & confidential', 'Follow-up notes provided'],
      color: 'from-deep-rose to-rose-pink'
    }
  ]

  const faqs = [
    {
      question: 'How do online spiritual sessions work?',
      answer: 'Energy has no boundaries! Jennifer connects with your spiritual energy through intention and sacred focus, regardless of physical distance. Many clients report that online sessions feel just as powerful and accurate as in-person sessions.'
    },
    {
      question: 'What do I need for my session?',
      answer: 'Simply a quiet, private space with a stable internet connection. We recommend using a computer or tablet for the best experience. Jennifer will guide you through any technical setup before your session begins.'
    },
    {
      question: 'Will I receive a recording of my session?',
      answer: 'Yes! All sessions (except the free consultation) are recorded and sent to you within 24 hours. This allows you to revisit the insights and guidance whenever you need them.'
    },
    {
      question: 'What if I need to reschedule?',
      answer: 'Life happens! You can reschedule your session up to 24 hours in advance through your booking confirmation email. We understand that flexibility is important for your spiritual journey.'
    },
    {
      question: 'Is my session confidential?',
      answer: 'Absolutely. All sessions are completely private and confidential. Jennifer holds sacred space for your personal information and spiritual insights with the utmost respect and discretion.'
    }
  ]

  return (
    <section className="py-20 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient-rose mb-6">
            Sacred Booking Process
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Your journey to spiritual clarity begins with these simple, sacred steps. 
            We've made booking your reading as peaceful as the experience itself.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative mb-20">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-pink via-golden-light to-earth-copper opacity-30 transform -translate-y-1/2"></div>

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Step Number */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg relative z-10`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <step.icon className="h-8 w-8 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="card-sacred text-center group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-serif font-semibold text-gray-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Details */}
                    <ul className="space-y-1 text-sm text-gray-600">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center justify-center">
                          <span className="w-1.5 h-1.5 bg-rose-pink rounded-full mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 text-golden-light opacity-60">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-serif font-bold text-gradient-gold text-center mb-12">
            Frequently Asked Questions
          </h3>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="card-sacred group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-serif font-semibold text-gray-800 mb-3 group-hover:text-deep-rose transition-colors duration-300">
                  {faq.question}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="card-sacred max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-rose rounded-full flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
            </div>
            <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
              Ready to Begin Your Sacred Session?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              "Visualize your grounding cord now. Feel your presence deepen." 
              Your transformative journey with Jennifer is just a few clicks away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-12 py-4">
                Schedule Your Session
              </button>
              <button className="btn-secondary text-lg px-12 py-4">
                Learn More About Options
              </button>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="flex justify-center items-center space-x-8 text-gray-600 text-sm mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center">
            <span className="text-xl mr-2">🔒</span>
            <span>Secure Payments</span>
          </div>
          <div className="flex items-center">
            <span className="text-xl mr-2">💯</span>
            <span>Satisfaction Guaranteed</span>
          </div>
          <div className="flex items-center">
            <span className="text-xl mr-2">🎥</span>
            <span>HD Video Quality</span>
          </div>
          <div className="flex items-center">
            <span className="text-xl mr-2">🤝</span>
            <span>100% Confidential</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BookingProcess
