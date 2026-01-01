'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowRight, Lock, CheckCircle } from 'lucide-react';

const JourneyProgression = () => {
  const router = useRouter();

  const journeySteps = [
    {
      step: 1,
      title: 'Rose Meditation Level 1',
      subtitle: 'Foundation of Sacred Practice',
      description: 'Step into your inner sanctuary',
      price: '$49',
      originalPrice: '$197',
      duration: '4 weeks',
      status: 'begin-here',
      icon: '🌹',
      color: 'from-rose-pink to-deep-rose',
      practices: ['Golden Sun', 'Grounding Cord', 'Pink Rose', 'Aura Boundaries'],
    },
    {
      step: 2,
      title: 'Rose Meditation Level 2',
      subtitle: 'Deepen Your Practice',
      description: 'Unlock deeper wisdom within',
      price: '$397',
      duration: '6 weeks',
      status: 'unlocks-next',
      icon: '🌹✨',
      color: 'from-golden-light to-earth-copper',
      practices: [
        'Advanced Four Roses',
        'Energy Transmutation',
        'Chakra Work',
        'Sacred Healing',
      ],
    },
    {
      step: 3,
      title: 'Rose Meditation Level 3',
      subtitle: 'Master Level Practice',
      description: 'Embody complete mastery',
      price: '$597',
      duration: '8 weeks',
      status: 'unlocks-next',
      icon: '🌹👑',
      color: 'from-earth-copper to-golden-light',
      practices: [
        'Master Techniques',
        'Sacred Geometry',
        'Advanced Healing',
        'Spiritual Mastery',
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-rose-pink/5 to-golden-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Journey Flow */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-rose-pink via-golden-light to-deep-rose opacity-20 transform -translate-y-1/2"></div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 items-stretch">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Step Card */}
                <div
                  className={`relative bg-white rounded-2xl p-6 shadow-xl border-2 h-full flex flex-col ${
                    step.status === 'begin-here'
                      ? 'border-rose-pink shadow-rose-pink/20'
                      : step.status === 'sovereignty'
                        ? 'border-golden-light shadow-golden-light/20'
                        : 'border-gray-200'
                  } ${step.status === 'unlocks-next' ? 'opacity-75' : ''}`}
                >
                  {/* Status Badge */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    {step.status === 'begin-here' ? (
                      <div className="bg-rose-pink text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        🌹 BEGIN HERE
                      </div>
                    ) : step.status === 'sovereignty' ? (
                      <div className="bg-golden-light text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        👑 SOVEREIGNTY
                      </div>
                    ) : (
                      <div className="bg-gray-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center">
                        <Lock className="h-3 w-3 mr-1" />
                        UNLOCKS NEXT
                      </div>
                    )}
                  </div>

                  {/* Step Number & Icon */}
                  <div className="text-center mb-4 mt-2">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg`}
                    >
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <div
                      className={`w-8 h-8 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto text-white font-bold text-sm`}
                    >
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-serif font-semibold text-gray-800 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-rose-pink font-medium text-sm mb-2">
                      {step.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">{step.description}</p>

                    {/* Price & Duration */}
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <div className="text-3xl font-bold text-gradient-gold">
                          {step.price}
                        </div>
                        {step.originalPrice && (
                          <div className="text-center">
                            <div className="text-lg text-gray-400 line-through">
                              {step.originalPrice}
                            </div>
                            <div className="text-xs font-bold text-rose-pink bg-rose-pink/10 px-2 py-1 rounded-full">
                              75% OFF
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="text-xs text-gray-500">{step.duration}</div>
                      {step.originalPrice && (
                        <div className="text-xs text-rose-pink font-medium mt-1">
                          Sacred Gift
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Practices */}
                  <div className="mb-6 flex-grow">
                    <h4 className="text-xs font-medium text-gray-800 mb-2 text-center">
                      Key Practices:
                    </h4>
                    <div className="space-y-1">
                      {step.practices.map((practice, practiceIndex) => (
                        <div
                          key={practiceIndex}
                          className="flex items-center text-xs text-gray-600"
                        >
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {practice}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => {
                      if (step.status === 'begin-here') {
                        router.push('/courses/rose-meditation-1/dashboard');
                      }
                    }}
                    disabled={step.status === 'unlocks-next'}
                    className={`w-full py-3 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
                      step.status === 'begin-here'
                        ? `bg-gradient-to-r ${step.color} text-white hover:shadow-lg hover:scale-105`
                        : step.status === 'sovereignty'
                          ? 'bg-gradient-to-r from-golden-light to-earth-copper text-white hover:shadow-lg hover:scale-105'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {step.status === 'begin-here'
                      ? 'Begin Sacred Practice'
                      : step.status === 'sovereignty'
                        ? 'Are You Ready?'
                        : 'Complete Previous Level'}
                  </button>
                </div>

                {/* Arrow (not on last item) */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200">
                      <ArrowRight className="h-4 w-4 text-gray-600" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sovereignty CTA - Full Width Under 3 Courses */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="card-sacred relative overflow-hidden bg-gradient-to-br from-golden-light/10 to-earth-copper/10 border-2 border-golden-light/30 shadow-2xl">
              {/* Sovereignty Badge */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-gradient-to-r from-golden-light to-earth-copper text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center">
                  <span className="text-lg mr-2">👑</span>
                  SOVEREIGNTY
                </div>
              </div>

              {/* Content Layout */}
              <div className="pt-6 text-center">
                {/* Icon & Title */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-deep-rose to-rose-pink rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-2xl">👑✨</span>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-deep-rose to-rose-pink rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>

                {/* Main Message */}
                <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-800 mb-4">
                  This Is What Awaits You
                </h3>
                <p className="text-rose-pink font-medium text-xl mb-6">
                  The Result of Your Rose Meditation Journey
                </p>

                {/* What You Gain Message */}
                <div className="max-w-3xl mx-auto mb-8">
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    When you complete the Rose Meditation path, you don&apos;t just
                    learn techniques—you
                    <span className="text-gradient-gold font-semibold">
                      {' '}
                      reclaim your spiritual sovereignty
                    </span>
                    .
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    You gain complete self-mastery, divine remembrance, sacred
                    leadership abilities, and most importantly— you become a{' '}
                    <span className="font-semibold text-gray-800">sovereign being</span>{' '}
                    who trusts their inner wisdom above all else.
                  </p>
                  <p className="text-lg text-rose-pink font-medium mb-6">
                    But it all begins with one sacred step: Rose Meditation Level 1.
                  </p>
                  <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-rose-pink/10 to-deep-rose/10 rounded-full border border-rose-pink/30">
                    <span className="text-3xl mr-4">🌹</span>
                    <div className="flex items-center gap-4">
                      <span className="text-xl font-medium text-gray-700">
                        Sacred Gift:
                      </span>
                      <span className="text-3xl font-bold text-gradient-gold">$49</span>
                      <span className="text-xl text-gray-400 line-through">$197</span>
                      <span className="text-sm font-bold text-rose-pink bg-rose-pink/20 px-3 py-1 rounded-full">
                        75% OFF
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">4 Weeks to Transform Your Life</p>
                </div>

                {/* CTA Button - Standalone */}
                <div className="pt-4">
                  <button
                    onClick={() => router.push('/courses/rose-meditation-1/dashboard')}
                    className="bg-gradient-to-r from-rose-pink to-deep-rose text-white py-6 px-12 rounded-full text-2xl font-bold transition-all duration-300 hover:shadow-2xl hover:scale-105 shadow-xl"
                  >
                    🌹 Begin Your Journey
                  </button>
                  <p className="text-sm text-gray-500 mt-4 italic">
                    &ldquo;Every sovereign being started with Rose Meditation Level
                    1&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneyProgression;
