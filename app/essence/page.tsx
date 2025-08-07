'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Heart, 
  Eye, 
  Moon, 
  Zap, 
  Rainbow,
  ArrowRight,
  PlayCircle
} from 'lucide-react'

const EssencePage = () => {
  const essenceAreas = [
    {
      icon: Sparkles,
      title: 'Spirit Connection & Divine Messages',
      description: 'Connect with your spiritual guides who have messages specifically for you. These divine beings offer wisdom, comfort, and guidance from the other side.',
      details: [
        'Personal spirit guides and their unique messages',
        'Loved ones who have passed and want to communicate',
        'Angelic presence and divine guidance',
        'Higher self wisdom and soul-level insights'
      ],
      color: 'from-deep-purple to-vibrant-pink'
    },
    {
      icon: Moon,
      title: 'Past Life Exploration & Karmic Healing',
      description: 'Discover how your soul\'s journey through different lifetimes affects your current experiences, relationships, and life patterns.',
      details: [
        'Significant past lives that impact your present',
        'Karmic relationships and soul contracts',
        'Past trauma healing and release',
        'Soul gifts and talents from previous incarnations'
      ],
      color: 'from-royal-purple to-hot-pink'
    },
    {
      icon: Heart,
      title: 'Life Path Clarity & Soul Purpose',
      description: 'Receive guidance on your most pressing life questions and discover the deeper spiritual meaning behind your current challenges and opportunities.',
      details: [
        'Career and life direction guidance',
        'Relationship insights and spiritual compatibility',
        'Understanding life challenges as soul growth',
        'Activating your highest potential and gifts'
      ],
      color: 'from-vibrant-pink to-golden-accent'
    },
    {
      icon: Zap,
      title: 'Energy Healing & Chakra Balancing',
      description: 'Understand your energetic state and receive healing guidance to restore balance, clear blockages, and strengthen your spiritual connection.',
      details: [
        'Chakra assessment and energy flow analysis',
        'Identifying and clearing energetic blockages',
        'Protection and boundary setting techniques',
        'Activating your natural healing abilities'
      ],
      color: 'from-royal-purple to-hot-pink'
    },
    {
      icon: Eye,
      title: 'Dreams & Spiritual Symbol Interpretation',
      description: 'Decode the spiritual messages in your dreams, synchronicities, and the signs that appear in your daily life.',
      details: [
        'Dream analysis and spiritual symbolism',
        'Understanding recurring dreams and nightmares',
        'Recognizing signs and synchronicities',
        'Developing your own intuitive abilities'
      ],
      color: 'from-deep-purple to-soft-lavender'
    },
    {
      icon: Rainbow,
      title: 'Complete Spiritual Overview',
      description: 'The comprehensive experience combining spirit connection, past life insights, life guidance, and energy healing in one transformative session.',
      details: [
        'Full spiritual assessment and divine guidance',
        'Multiple past life connections and healing',
        'Complete chakra balancing and energy work',
        'Integration of all spiritual insights for daily life'
      ],
      color: 'from-vibrant-pink to-golden-accent'
    }
  ]

  const preparationSteps = [
    {
      title: 'Create Sacred Space',
      description: 'Find a quiet, private area where you won\'t be interrupted. Light a candle or incense if it feels right.',
      icon: '🕯️'
    },
    {
      title: 'Prepare Your Questions',
      description: 'Write down any specific questions or areas where you\'re seeking guidance. Trust that what you need to know will come through.',
      icon: '📝'
    },
    {
      title: 'Open Your Heart',
      description: 'Come with an open mind and heart. The more receptive you are, the clearer the messages and healing can flow.',
      icon: '💖'
    },
    {
      title: 'Trust the Process',
      description: 'Your guides know exactly what you need to hear. Even if messages seem unexpected, trust that they\'re divinely timed.',
      icon: '✨'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-sacred">
      {/* Header */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-gradient-primary mb-6">
              The Essence of Our Sacred Work
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Understanding the deeper spiritual dimensions we explore together. 
              Each session is a journey into the sacred, guided by divine love and infinite wisdom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Explore */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-gradient-secondary mb-6">
              Sacred Dimensions We Explore Together
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Every session is unique, guided by your soul's needs and what your spirit guides want you to know.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {essenceAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className="card-sacred group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start">
                  <div className={`w-12 h-12 bg-gradient-to-br ${area.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <area.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="ml-4">
                    <h3 className="text-xl font-serif font-medium text-gray-800 mb-3">
                      {area.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {area.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {area.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-rose-pink rounded-full mr-3 flex-shrink-0 mt-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Prepare */}
      <section className="py-16 bg-white/20 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-gradient-primary mb-6">
              Preparing for Your Sacred Session
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Simple steps to help you receive the most from our time together. 
              Your guides are already preparing messages for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {preparationSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="card-sacred text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-serif font-medium text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="card-sacred text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-rose rounded-full flex items-center justify-center mx-auto mb-6">
              <PlayCircle className="h-8 w-8 text-white" />
            </div>
            
            <h2 className="text-3xl font-serif font-medium text-gradient-primary mb-6">
              What to Expect During Your Session
            </h2>
            
            <div className="text-left max-w-2xl mx-auto space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Your session begins</strong> with a brief connection as Jae attunes to your energy and opens to receive messages from your spiritual guides.
              </p>
              <p>
                <strong>Spirit messages flow naturally</strong> as your guides share wisdom, comfort, and guidance specifically for you. These messages often address things you've been thinking about, even if you haven't asked aloud.
              </p>
              <p>
                <strong>Past life insights</strong> may emerge to explain current patterns, relationships, or challenges you're experiencing. These glimpses help you understand your soul's journey and purpose.
              </p>
              <p>
                <strong>Energy healing</strong> occurs throughout as blockages are identified and cleared, often bringing immediate feelings of relief, clarity, or peace.
              </p>
              <p>
                <strong>Your session concludes</strong> with integration guidance on how to apply these insights in your daily life, plus a recording of your session for future reflection.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Book Your Sacred Session
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Questions? Contact Jae
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Testimonials */}
      <section className="py-16 bg-white/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-medium text-gradient-secondary mb-6">
              Sacred Space & Trust
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Complete Confidentiality',
                description: 'Your spiritual journey is sacred. Every session is completely private and confidential.',
                icon: '🤫'
              },
              {
                title: 'Safe Sacred Space',
                description: 'Jae holds loving, non-judgmental space for whatever wants to come through for your highest good.',
                icon: '🛡️'
              },
              {
                title: 'Divine Timing',
                description: 'Trust that the messages you receive are exactly what your soul needs to hear right now.',
                icon: '⏰'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="card-sacred text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-serif font-medium text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default EssencePage

export const metadata = {
  title: 'Our Sacred Essence | The Auracle',
  description: 'Discover the deeper spiritual dimensions we explore together in sacred sessions. Understanding spirit connection, past life insights, energy healing, and divine guidance.',
}

