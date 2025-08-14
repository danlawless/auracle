'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Star, Users, Clock, CheckCircle, Sparkles } from 'lucide-react'

const RoseMeditationHero = () => {
  const router = useRouter()

  const benefits = [
    'Master Golden Sun Visualization',
    'Learn Sacred Grounding Techniques',
    'Open Your Heart with Pink Rose',
    'Set Energetic Boundaries',
    'Connect with Your Inner Sanctuary'
  ]

  const stats = [
    { icon: Users, value: '2,847', label: 'Students Enrolled' },
    { icon: Star, value: '4.9', label: 'Average Rating' },
    { icon: Clock, value: '4', label: 'Weeks to Complete' }
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-rose-pink/20 via-white to-deep-rose/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/content/rose-pattern.svg')] opacity-5"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-golden-light to-earth-copper rounded-full opacity-10 blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-rose-pink to-deep-rose rounded-full opacity-10 blur-2xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-rose-pink to-deep-rose text-white rounded-full text-sm font-medium mb-6 shadow-lg">
              <Sparkles className="h-4 w-4 mr-2" />
              🔥 Most Popular Course - Start Here
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-800 mb-6 leading-tight">
              Begin Your Journey with{' '}
              <span className="text-gradient-rose">Rose Meditation Level 1</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              The sacred mini-course that has transformed thousands of lives. 
              Master the foundational practices that will unlock your spiritual potential 
              and set you on the path to becoming an Aura Reader.
            </p>

            {/* Benefits */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                What You'll Master in This Course:
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-gray-600"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <div className="bg-white rounded-2xl p-6 mb-8 shadow-xl border border-rose-pink/20">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl font-bold text-gradient-gold">$197</span>
                <span className="text-2xl text-gray-500 line-through">$297</span>
                <span className="bg-green-100 text-green-800 px-3 py-2 rounded-full text-sm font-bold">
                  Save 34%
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                ✨ Limited time offer - This price won't last long
              </p>
              <div className="text-xs text-gray-500">
                💳 30-day money-back guarantee • 🔄 Lifetime access
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => router.push('/courses/rose-meditation-1/dashboard')}
                className="btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                🌹 Start Your Journey Now
              </button>
              <button
                onClick={() => router.push('/courses/rose-meditation-1')}
                className="btn-secondary text-lg px-8 py-4"
              >
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Right Content - Stats & Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Visual */}
            <div className="relative bg-gradient-to-br from-rose-pink to-deep-rose rounded-3xl p-8 shadow-2xl">
              <div className="text-center text-white">
                <div className="text-8xl mb-4">🌹</div>
                <h3 className="text-2xl font-serif font-bold mb-2">
                  Rose Meditation Level 1
                </h3>
                <p className="text-rose-pink/80 mb-6">
                  Your Gateway to Sacred Practice
                </p>
                
                {/* Course Preview */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
                  <div className="text-sm text-white/90 mb-2">Course Includes:</div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-white/80">
                    <div>✨ 10 HD Video Lessons</div>
                    <div>🎧 Guided Meditations</div>
                    <div>📖 Sacred Journal</div>
                    <div>🔄 Lifetime Access</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <stat.icon className="h-6 w-6 text-rose-pink mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Testimonial Quote */}
            <motion.div
              className="bg-white rounded-xl p-6 mt-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-golden-light fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-sm italic mb-3">
                "Rose Meditation Level 1 completely transformed my spiritual practice. 
                The Golden Sun technique alone changed my life!"
              </p>
              <div className="text-xs text-gray-500">
                - Sarah M., Certified Aura Reader
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default RoseMeditationHero
