'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Heart, Sparkles } from 'lucide-react';

const CTASection = memo(function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-pink/20 via-golden-light/10 to-soft-ivory relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 text-rose-pink/20 smooth-animation"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
          style={{ willChange: 'transform' }}
        >
          <Sparkles className="h-16 w-16" />
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-10 text-golden-light/20 smooth-animation"
          animate={{ rotate: -360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
            delay: 5,
          }}
          style={{ willChange: 'transform' }}
        >
          <Heart className="h-12 w-12" />
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Sacred Symbol */}
          <div className="flex justify-center mb-8">
            <motion.div
              className="relative smooth-animation"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="w-20 h-20 bg-gradient-rose rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-3xl">🌹</span>
              </div>
              <motion.div
                className="absolute -inset-2 border-2 border-golden-light rounded-full opacity-60 smooth-animation"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatType: 'reverse',
                }}
                style={{ willChange: 'transform' }}
              />
            </motion.div>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient-rose mb-6">
            Your Sacred Journey Awaits
          </h2>

          {/* Subheading */}
          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
            &ldquo;Beloved, return to your breath. The moment is sacred.&rdquo; Take the
            first step toward divine remembrance and energetic clarity.
          </p>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link
              href="/schedule"
              className="group btn-primary text-lg px-12 py-4 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Book Your Reading
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
            <Link
              href="/courses"
              className="group btn-secondary text-lg px-12 py-4 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>

          {/* Sacred Offering Text */}
          <motion.div
            className="card-sacred max-w-2xl mx-auto smooth-animation"
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                <span className="text-xl">✨</span>
              </div>
            </div>
            <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
              Special Offering for New Souls
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Begin your journey with a complimentary 15-minute energy consultation.
              Experience the gentle guidance that has transformed hundreds of lives.
            </p>
            <Link
              href="/schedule?type=consultation"
              className="inline-flex items-center text-deep-rose font-medium hover:text-rose-pink transition-colors duration-300"
            >
              Claim Your Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-rose-pink/20">
            <p className="text-sm text-gray-600 mb-4">Trusted by souls worldwide</p>
            <div className="flex justify-center items-center space-x-8 text-gray-500">
              <div className="flex items-center">
                <span className="text-2xl mr-2">🌟</span>
                <span className="text-sm">500+ Readings</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">🎓</span>
                <span className="text-sm">1200+ Students</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">🌍</span>
                <span className="text-sm">50+ Countries</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default CTASection;
