'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'California',
      text: 'Jae\'s aura reading was transformative. She helped me understand my energy patterns and gave me practical tools for daily grounding. The Rose Meditation course has become an essential part of my spiritual practice.',
      rating: 5,
      image: '🌸'
    },
    {
      name: 'Michael R.',
      location: 'New York',
      text: 'The depth of insight in my reading was incredible. Jae\'s gentle guidance helped me navigate a difficult transition with clarity and peace. Her courses are beautifully structured and deeply healing.',
      rating: 5,
      image: '🌿'
    },
    {
      name: 'Elena K.',
      location: 'London',
      text: 'I\'ve been practicing Rose Meditation for six months now, and it has completely shifted my relationship with stress and anxiety. The sacred visualizations are powerful beyond words.',
      rating: 5,
      image: '✨'
    },
    {
      name: 'David L.',
      location: 'Toronto',
      text: 'As someone new to energy work, I was amazed by how accessible Jennifer makes these profound teachings. The Golden Sun visualization has become my daily anchor.',
      rating: 5,
      image: '☀️'
    },
    {
      name: 'Maya S.',
      location: 'Sydney',
      text: 'The community aspect of The Auracle is incredible. Learning alongside others on this sacred journey has enriched my practice immeasurably. Jennifer creates such a safe, nurturing space.',
      rating: 5,
      image: '🌹'
    },
    {
      name: 'James W.',
      location: 'Berlin',
      text: 'My aura reading revealed patterns I never recognized before. Jennifer\'s compassionate approach and practical guidance have helped me cultivate deeper self-awareness and energetic boundaries.',
      rating: 5,
      image: '🕊️'
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
            Sacred Testimonials
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Hear from beloved souls who have walked this path of awakening and transformation
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="card-sacred group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-rose-pink/30 group-hover:text-rose-pink/50 transition-colors duration-300">
                <Quote className="h-6 w-6" />
              </div>

              {/* Avatar */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-rose rounded-full flex items-center justify-center text-xl mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-golden-light fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { number: '500+', label: 'Sacred Readings' },
            { number: '1200+', label: 'Course Students' },
            { number: '95%', label: 'Satisfaction Rate' },
            { number: '50+', label: 'Countries Reached' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-bold text-gradient-gold mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
