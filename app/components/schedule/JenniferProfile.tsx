'use client'

import { motion } from 'framer-motion'
import { Award, Heart, Users, Sparkles, Star, Clock } from 'lucide-react'

const JenniferProfile = () => {
  const achievements = [
    { icon: Users, number: '500+', label: 'Souls Guided' },
    { icon: Clock, number: '5+', label: 'Years Experience' },
    { icon: Star, number: '4.9', label: 'Average Rating' },
    { icon: Award, number: '50+', label: 'Countries Reached' }
  ]

  const specialties = [
    'Aura Reading & Interpretation',
    'Rose Meditation Guidance',
    'Energy Field Assessment',
    'Spiritual Boundary Setting',
    'Chakra Alignment & Healing',
    'Past Life Energy Patterns',
    'Soul Purpose Clarity',
    'Energetic Protection Methods'
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
            Meet Jennifer
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Master Auracle Reader & Sacred Guide
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image & Quote */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Profile Card */}
            <div className="card-sacred text-center relative overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-pink/10 to-golden-light/10" />
              
              <div className="relative z-10">
                {/* Avatar */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-rose rounded-full flex items-center justify-center text-6xl shadow-2xl">
                      👩‍🦳
                    </div>
                    <motion.div
                      className="absolute -inset-4 border-2 border-golden-light rounded-full opacity-60"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </div>

                {/* Name & Title */}
                <h3 className="text-3xl font-serif font-bold text-gray-800 mb-2">
                  Jennifer
                </h3>
                <p className="text-lg text-gradient-gold font-medium mb-6">
                  Master Auracle Reader & Spiritual Guide
                </p>

                {/* Sacred Quote */}
                <div className="bg-white/50 rounded-lg p-6 mb-6">
                  <Sparkles className="h-6 w-6 text-rose-pink mx-auto mb-3" />
                  <p className="text-lg font-serif italic text-gray-700 mb-3">
                    "Every soul carries a unique energetic signature, a sacred story written in light. 
                    My gift is helping you read that story and understand its beautiful message."
                  </p>
                  <p className="text-sm text-gray-500">— Jennifer's Sacred Mission</p>
                </div>

                {/* Achievements */}
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={achievement.label} className="text-center">
                      <achievement.icon className="h-6 w-6 text-deep-rose mx-auto mb-2" />
                      <div className="text-xl font-serif font-bold text-gradient-gold">
                        {achievement.number}
                      </div>
                      <div className="text-sm text-gray-600">
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio & Specialties */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Bio */}
            <div className="card-sacred">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-deep-rose mr-3" />
                <h4 className="text-2xl font-serif font-semibold text-gray-800">
                  A Sacred Journey
                </h4>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Jennifer's path to becoming a master Auracle reader began over five years ago 
                  during a profound spiritual awakening. Through years of dedicated practice, 
                  study, and service, she has developed an extraordinary gift for reading the 
                  subtle energies that surround each soul.
                </p>
                <p>
                  Her approach combines ancient wisdom with modern understanding, creating a 
                  safe, sacred space where clients can explore their deepest truths. Jennifer's 
                  readings are known for their accuracy, compassion, and transformative power.
                </p>
                <p>
                  "I don't just see your aura," Jennifer explains, "I feel the sacred story 
                  it tells about your soul's journey, your gifts, your challenges, and your 
                  beautiful potential."
                </p>
              </div>
            </div>

            {/* Specialties */}
            <div className="card-sacred">
              <div className="flex items-center mb-6">
                <Sparkles className="h-6 w-6 text-golden-light mr-3" />
                <h4 className="text-2xl font-serif font-semibold text-gray-800">
                  Areas of Expertise
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specialties.map((specialty, index) => (
                  <motion.div
                    key={specialty}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="w-2 h-2 bg-rose-pink rounded-full mr-3 flex-shrink-0" />
                    {specialty}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Training & Certifications */}
            <div className="card-sacred">
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-earth-copper mr-3" />
                <h4 className="text-2xl font-serif font-semibold text-gray-800">
                  Training & Certifications
                </h4>
              </div>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-golden-light rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Advanced Aura Reading Certification</strong> - International Institute of Energy Studies
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-golden-light rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Rose Meditation Master Teacher</strong> - Sacred Rose Academy
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-golden-light rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Energy Healing Practitioner</strong> - Holistic Energy Institute
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-golden-light rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Spiritual Counseling Certificate</strong> - Center for Spiritual Development
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Client Testimonials */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl font-serif font-semibold text-gradient-rose mb-8">
            What Clients Say About Jennifer
          </h4>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                text: "Jennifer saw things in my aura that completely shifted my understanding of myself. Her gentle guidance helped me heal patterns I didn't even know existed.",
                name: "Sarah M.",
                location: "California"
              },
              {
                text: "The accuracy of Jennifer's reading was astounding. She described my spiritual gifts with such precision and gave me practical steps to develop them.",
                name: "Michael R.",
                location: "New York"
              },
              {
                text: "Jennifer creates such a sacred, safe space. I felt completely held and supported throughout our session. Her insights were profound and healing.",
                name: "Elena K.",
                location: "London"
              }
            ].map((testimonial, index) => (
              <div key={index} className="card-sacred">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-golden-light fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="text-sm text-gray-600">
                  <strong>{testimonial.name}</strong> - {testimonial.location}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default JenniferProfile
