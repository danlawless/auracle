'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowRight, CheckCircle } from 'lucide-react';

const LearningPath = () => {
  const router = useRouter();

  const handleCourseNavigation = (courseTitle: string) => {
    // For now, only Rose Meditation Level 1 has content
    if (courseTitle === 'Rose Meditation Level 1') {
      router.push('/courses/rose-meditation-1/dashboard');
    } else {
      // Other courses go to coming soon page
      router.push(
        `/courses/${courseTitle.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`
      );
    }
  };

  const pathSteps = [
    {
      level: 'Begin Here',
      title: 'Rose Meditation Level 1',
      subtitle: 'Foundation of Sacred Practice',
      description:
        'Step into your inner sanctuary through foundational Rose Meditation practices',
      practices: [
        'Golden Sun Visualization',
        'Grounding Cord Mastery',
        'Pink Rose Heart Opening',
        'Aura Boundary Setting',
      ],
      duration: '4 weeks',
      color: 'from-rose-pink to-deep-rose',
      price: '$197',
      originalPrice: null,
      isUnlocked: true,
      progressLevel: 'start',
      icon: '🌹',
    },
    {
      level: 'Level 2',
      title: 'Rose Meditation Level 2',
      subtitle: 'Deepen Your Practice',
      description: 'Unlock deeper wisdom through advanced Rose Meditation teachings',
      practices: [
        'Advanced Four Roses',
        'Energy Transmutation',
        'Chakra Rose Work',
        'Sacred Healing',
      ],
      duration: '6 weeks',
      color: 'from-golden-light to-earth-copper',
      price: '$397',
      originalPrice: null,
      isUnlocked: false,
      progressLevel: 'unlocks-next',
      icon: '🌹✨',
    },
    {
      level: 'Level 3',
      title: 'Rose Meditation Level 3',
      subtitle: 'Master Level Practice',
      description:
        'Embody the complete Rose Meditation teachings and prepare for sovereignty',
      practices: [
        'Master Rose Techniques',
        'Sacred Geometry',
        'Advanced Healing',
        'Spiritual Mastery',
      ],
      duration: '8 weeks',
      color: 'from-earth-copper to-golden-light',
      price: '$597',
      originalPrice: null,
      isUnlocked: false,
      progressLevel: 'unlocks-next',
      icon: '🌹👑',
    },
  ];

  return (
    <section className="py-20 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Learning Path */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-pink via-golden-light to-earth-copper opacity-30 transform -translate-x-1/2"></div>

          {/* Path Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {pathSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="flex flex-col items-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Content Card */}
                <div className="w-full max-w-sm">
                  <div
                    className={`card-sacred group relative overflow-hidden ${step.progressLevel === 'start' ? 'ring-2 ring-rose-pink shadow-2xl' : ''}`}
                  >
                    {/* Progress Badge */}
                    {step.progressLevel === 'start' && (
                      <div className="absolute -top-2 -right-2 z-20">
                        <div className="bg-gradient-to-r from-rose-pink to-deep-rose text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          🌹 START HERE
                        </div>
                      </div>
                    )}
                    {step.progressLevel === 'sovereignty' && (
                      <div className="absolute -top-2 -right-2 z-20">
                        <div className="bg-gradient-to-r from-golden-light to-earth-copper text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          👑 SOVEREIGNTY
                        </div>
                      </div>
                    )}

                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Level Badge & Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-sm font-medium`}
                        >
                          {step.level}
                        </div>
                        <span className="text-3xl">{step.icon}</span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-rose-pink font-medium mb-3">{step.subtitle}</p>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Sacred Investment */}
                      <div className="text-center mb-6">
                        <p className="text-sm text-gray-600 mb-1">Sacred Investment</p>
                        <span className="text-2xl font-bold text-gradient-gold">
                          {step.price}
                        </span>
                      </div>

                      {/* Practices */}
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-800 mb-3">
                          What You&apos;ll Master:
                        </h4>
                        <ul className="space-y-2">
                          {step.practices.map((practice, practiceIndex) => (
                            <li
                              key={practiceIndex}
                              className="flex items-center text-sm text-gray-600"
                            >
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {practice}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Duration & Unlock Status */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-500">
                          Duration: {step.duration}
                        </span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            step.isUnlocked
                              ? 'bg-rose-100 text-rose-800'
                              : step.progressLevel === 'sovereignty'
                                ? 'bg-golden-100 text-golden-800'
                                : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {step.isUnlocked
                            ? 'Begin Here'
                            : step.progressLevel === 'sovereignty'
                              ? 'Awaits You'
                              : 'Unlocks Next'}
                        </span>
                      </div>

                      {/* CTA Button */}
                      <button
                        onClick={() => handleCourseNavigation(step.title)}
                        disabled={
                          !step.isUnlocked && step.progressLevel !== 'sovereignty'
                        }
                        className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                          step.isUnlocked
                            ? `bg-gradient-to-r ${step.color} text-white`
                            : step.progressLevel === 'sovereignty'
                              ? 'bg-gradient-to-r from-golden-light to-earth-copper text-white'
                              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {step.isUnlocked ? (
                          <>
                            Begin Sacred Practice
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        ) : step.progressLevel === 'sovereignty' ? (
                          <>
                            Are You Ready?
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        ) : (
                          'Complete Previous Level'
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Step Number */}
                <div className="mt-6">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg mx-auto`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <span className="text-2xl font-serif font-bold text-white">
                      {index + 1}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPath;
