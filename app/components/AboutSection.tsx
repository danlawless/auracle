'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import { Heart, Eye, Shield, Sparkles } from 'lucide-react'

const AboutSection = memo(() => {
  const values = [
    {
      icon: Heart,
      title: 'Presence',
      description: 'Rooted awareness in every moment',
      color: 'text-deep-rose'
    },
    {
      icon: Eye,
      title: 'Integrity',
      description: 'Authentic alignment in word, energy, and action',
      color: 'text-earth-copper'
    },
    {
      icon: Shield,
      title: 'Compassion',
      description: 'Holding space without judgment',
      color: 'text-rose-pink'
    },
    {
      icon: Sparkles,
      title: 'Empowerment',
      description: 'Encouraging sovereign energy and self-healing',
      color: 'text-golden-light'
    }
  ]

  return (
    <section className="py-20 bg-white/60 smooth-animation">
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
            Your Sacred Journey Begins Here
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We provide a sanctuary of stillness, energy mastery, and spiritual empowerment 
            through practices rooted in love, presence, and deep energetic awareness.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="card-sacred-blur max-w-4xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-rose rounded-full flex items-center justify-center">
              <span className="text-2xl">🌹</span>
            </div>
          </div>
          <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
            Our Sacred Mission
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            To awaken divine remembrance and energetic clarity in every being, 
            guiding them to their inner sanctuary through the sacred tools of Rose Meditation.
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="card-sacred text-center group smooth-animation"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <div className={`p-4 rounded-full bg-gradient-to-br from-rose-pink/20 to-golden-light/20 group-hover:scale-105 transition-transform duration-200 smooth-animation`}>
                  <value.icon className={`h-8 w-8 ${value.color}`} />
                </div>
              </div>
              <h4 className="text-xl font-serif font-semibold text-gray-800 mb-3">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Sacred Symbols Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-serif font-bold text-gradient-gold mb-8">
            Sacred Symbolism
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card-sacred smooth-animation">
              <div className="text-4xl mb-4">☀️</div>
              <h4 className="text-xl font-serif font-semibold text-gray-800 mb-3">
                Golden Sun
              </h4>
              <p className="text-gray-600">
                Representing brand vitality and divine guidance in your journey
              </p>
            </div>
            <div className="card-sacred smooth-animation">
              <div className="text-4xl mb-4">🌿</div>
              <h4 className="text-xl font-serif font-semibold text-gray-800 mb-3">
                Grounding Cord
              </h4>
              <p className="text-gray-600">
                Reflecting trust, rootedness, and presence in all messaging
              </p>
            </div>
            <div className="card-sacred smooth-animation">
              <div className="text-4xl mb-4">🌹</div>
              <h4 className="text-xl font-serif font-semibold text-gray-800 mb-3">
                Four Roses
              </h4>
              <p className="text-gray-600">
                Emblematic of spiritual boundaries and sacred observation
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

export default AboutSection
