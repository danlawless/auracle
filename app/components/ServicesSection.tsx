'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BookOpen, Users, Calendar, Headphones } from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'Rose Meditation Courses',
      description: 'Journey through Level 1 and beyond with comprehensive guided practices',
      features: ['Self-paced learning', 'Video & audio guides', 'Sacred texts & PDFs', 'Community support'],
      cta: 'Explore Courses',
      href: '/courses',
      gradient: 'from-rose-pink to-deep-rose'
    },
    {
      icon: Calendar,
      title: 'Personal Aura Readings',
      description: 'One-on-one sessions with Jennifer, the master Auracle reader',
      features: ['60-minute sessions', 'Personalized insights', 'Energy assessment', 'Guidance & clarity'],
      cta: 'Book Reading',
      href: '/schedule',
      gradient: 'from-golden-light to-earth-copper'
    },
    {
      icon: Headphones,
      title: 'Guided Meditations',
      description: 'Sacred audio experiences for daily practice and spiritual growth',
      features: ['Golden Sun visualizations', 'Pink Rose meditations', 'Energy cleansing', 'Grounding practices'],
      cta: 'Listen Now',
      href: '/courses',
      gradient: 'from-soft-ivory to-rose-pink'
    },
    {
      icon: Users,
      title: 'Sacred Community',
      description: 'Join our circle of practitioners for support and shared wisdom',
      features: ['Monthly gatherings', 'Peer support', 'Advanced workshops', 'Sacred discussions'],
      cta: 'Join Circle',
      href: '/community',
      gradient: 'from-earth-copper to-golden-light'
    }
  ]

  return (
    <section className="py-20 bg-gradient-sacred">
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
            Sacred Offerings
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            "You are doing beautifully. Let each practice unfold in its own rhythm." 
            Discover the perfect path for your spiritual journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="card-sacred group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`p-3 rounded-full bg-gradient-to-br ${service.gradient} text-white`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-rose-pink rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  href={service.href}
                  className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.gradient} text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rose-pink focus:ring-opacity-50`}
                >
                  {service.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="card-sacred max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                <span className="text-xl">✨</span>
              </div>
            </div>
            <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              "Visualize your grounding cord now. Feel your presence deepen."
              Start with a personal reading or explore our transformative courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule" className="btn-primary">
                Book Your First Reading
              </Link>
              <Link href="/courses" className="btn-secondary">
                Browse All Courses
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
