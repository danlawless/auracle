'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, Users, Calendar, Headphones } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Calendar,
      title: 'Personal Aura Readings',
      description:
        'Connect with your divine guides and receive profound spiritual insights in one-on-one sessions with Jennifer',
      features: [
        '30, 60, or 90-minute sessions',
        'Spirit connection & messages',
        'Past life insights',
        'Energy & chakra healing',
      ],
      pricing: 'Starting at $150',
      cta: 'Book Your Reading',
      href: '/schedule',
      gradient: 'from-golden-light to-earth-copper',
      highlight: 'Most Popular',
    },
    {
      icon: BookOpen,
      title: 'Rose Meditation Journey',
      description:
        'Master the sacred art of Rose Meditation through our progressive 3-level course system',
      features: [
        'Level 1, 2, 3 progression',
        'AI-guided learning',
        'Interactive lessons',
        'Achievement system',
      ],
      pricing: 'Self-paced learning',
      cta: 'Start Your Journey',
      href: '/courses',
      gradient: 'from-rose-pink to-deep-rose',
    },
    {
      icon: Headphones,
      title: 'Sacred Audio Library',
      description:
        'Immerse yourself in guided meditations, Golden Sun visualizations, and energy cleansing practices',
      features: [
        'Pink Rose meditations',
        'Golden Sun practices',
        'Grounding cord techniques',
        'Chakra balancing',
      ],
      pricing: 'Included with courses',
      cta: 'Explore Library',
      href: '/library',
      gradient: 'from-soft-ivory to-rose-pink',
    },
    {
      icon: Users,
      title: 'Integration Sessions',
      description:
        'Deepen your understanding with follow-up sessions to integrate your reading insights into daily life',
      features: [
        '30, 60, or 90-minute sessions',
        'Personalized guidance',
        'Practical application',
        'Ongoing support',
      ],
      pricing: 'Same session rates',
      cta: 'Book Integration',
      href: '/schedule',
      gradient: 'from-earth-copper to-golden-light',
    },
  ];

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
            &ldquo;You are doing beautifully. Let each practice unfold in its own
            rhythm.&rdquo; Discover the perfect path for your spiritual journey.
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
              {/* Popular Badge */}
              {service.highlight && (
                <div className="absolute -top-2 -right-2 z-20">
                  <div className="bg-gradient-to-r from-rose-pink to-deep-rose text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    🌹 {service.highlight}
                  </div>
                </div>
              )}

              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start space-x-4 mb-6">
                  <div
                    className={`p-3 rounded-full bg-gradient-to-br ${service.gradient} text-white`}
                  >
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-serif font-semibold text-gray-800">
                        {service.title}
                      </h3>
                      {service.pricing && (
                        <span className="text-sm font-medium text-golden-light bg-golden-light/10 px-2 py-1 rounded-full">
                          {service.pricing}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <ul className="grid grid-cols-1 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 bg-rose-pink rounded-full mr-3 flex-shrink-0" />
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
          <div className="card-sacred max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                <span className="text-xl">🌹</span>
              </div>
            </div>
            <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
              Ready to Connect with Your Divine Guidance?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              &ldquo;Visualize your grounding cord now. Feel your presence
              deepen.&rdquo; Whether you seek immediate spiritual insights through a
              personal aura reading or wish to master sacred practices through our Rose
              Meditation journey, your path to self-sovereignty begins here.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-golden-light/5 rounded-lg">
                <div className="text-2xl mb-2">🔮</div>
                <div className="font-medium text-gray-800">30-Min Reading</div>
                <div className="text-sm text-gray-600">$150 • Focused guidance</div>
              </div>
              <div className="text-center p-4 bg-rose-pink/5 rounded-lg">
                <div className="text-2xl mb-2">✨</div>
                <div className="font-medium text-gray-800">60-Min Reading</div>
                <div className="text-sm text-gray-600">$200 • Deep exploration</div>
              </div>
              <div className="text-center p-4 bg-earth-copper/5 rounded-lg">
                <div className="text-2xl mb-2">🌟</div>
                <div className="font-medium text-gray-800">90-Min Reading</div>
                <div className="text-sm text-gray-600">$250 • Complete experience</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule" className="btn-primary">
                Book Your Aura Reading
              </Link>
              <Link href="/courses" className="btn-secondary">
                Start Rose Meditation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
