'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  Smartphone,
  Monitor,
  Headphones,
  Users,
  Download,
  Clock,
  Award,
  Heart,
} from 'lucide-react';

const CourseFeatures = () => {
  const router = useRouter();

  const features = [
    {
      icon: Smartphone,
      title: 'Mobile & Desktop Access',
      description:
        'Learn anywhere, anytime on your phone, tablet, or computer with our responsive platform.',
      color: 'text-rose-pink',
    },
    {
      icon: Download,
      title: 'Offline Downloads',
      description:
        'Download lessons and meditations for offline practice, perfect for travel or retreat time.',
      color: 'text-golden-light',
    },
    {
      icon: Headphones,
      title: 'High-Quality Audio',
      description:
        'Crystal-clear guided meditations and teachings recorded in professional studios.',
      color: 'text-earth-copper',
    },
    {
      icon: Users,
      title: 'Sacred Community',
      description:
        'Connect with fellow practitioners in our private community space for support and sharing.',
      color: 'text-deep-rose',
    },
    {
      icon: Clock,
      title: 'Lifetime Access',
      description:
        'Once enrolled, access your courses forever. Revisit lessons whenever you need guidance.',
      color: 'text-rose-pink',
    },
    {
      icon: Award,
      title: 'Completion Certificates',
      description:
        'Receive beautiful certificates to honor your commitment to spiritual growth.',
      color: 'text-golden-light',
    },
  ];

  const learningMethods = [
    {
      title: 'Video Lessons',
      description:
        'HD video teachings with Jae guiding you through each practice step-by-step',
      icon: '🎥',
      details: [
        'Professional production',
        'Multiple camera angles',
        'Clear visual demonstrations',
        'Subtitle options',
      ],
    },
    {
      title: 'Guided Meditations',
      description:
        'Sacred audio experiences designed to deepen your practice and inner connection',
      icon: '🎧',
      details: [
        'Binaural audio quality',
        'Various lengths available',
        'Background music options',
        'Downloadable formats',
      ],
    },
    {
      title: 'Sacred Texts',
      description:
        'Beautifully designed PDFs with teachings, exercises, and reflection prompts',
      icon: '📜',
      details: [
        'Printable materials',
        'Interactive exercises',
        'Journal prompts',
        'Reference guides',
      ],
    },
    {
      title: 'Live Sessions',
      description:
        'Monthly group calls for Q&A, practice sessions, and community connection',
      icon: '✨',
      details: [
        'Interactive participation',
        'Personal guidance',
        'Group energy work',
        'Recorded for replay',
      ],
    },
  ];

  return (
    <section className="py-20 bg-white/50 backdrop-blur-sm">
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
            Sacred Learning Experience
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Every course is designed with love and intention, providing multiple ways to
            engage with the teachings and deepen your spiritual practice.
          </p>
        </motion.div>

        {/* Platform Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="card-sacred group text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-br from-rose-pink/20 to-golden-light/20 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Learning Methods */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-serif font-bold text-gradient-gold text-center mb-12">
            Multiple Ways to Learn
          </h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {learningMethods.map((method, index) => (
              <motion.div
                key={method.title}
                className="card-sacred group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-rose rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-serif font-semibold text-gray-800 mb-2">
                      {method.title}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {method.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-2">
                      {method.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <span className="w-1.5 h-1.5 bg-rose-pink rounded-full mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Support & Guarantee */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Support */}
          <div className="card-sacred text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-rose rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
              Loving Support
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our dedicated support team is here to help you every step of the way. Get
              technical assistance, course guidance, and spiritual encouragement
              whenever you need it.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <div>📧 Email support within 24 hours</div>
              <div>💬 Live chat during business hours</div>
              <div>📞 Phone support for urgent matters</div>
              <div>🤝 Community peer support</div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="card-sacred text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
              Sacred Promise
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We believe so deeply in the transformative power of these teachings that
              we offer a 30-day satisfaction guarantee. Your spiritual growth is our
              sacred commitment.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <div>✅ 30-day money-back guarantee</div>
              <div>✅ No questions asked policy</div>
              <div>✅ Keep all downloaded materials</div>
              <div>✅ Lifetime access promise</div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="card-sacred max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-rose rounded-full flex items-center justify-center">
                <span className="text-2xl">🌹</span>
              </div>
            </div>
            <h3 className="text-3xl font-serif font-semibold text-gray-800 mb-4">
              Ready to Begin Your Sacred Journey?
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              &ldquo;Visualize your grounding cord now. Feel your presence
              deepen.&rdquo; Join thousands of souls who have transformed their lives
              through these sacred practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => router.push('/courses')}
                className="btn-primary text-lg px-12 py-4"
              >
                Browse All Courses
              </button>
              <button
                onClick={() => router.push('/courses/rose-meditation-1/dashboard')}
                className="btn-secondary text-lg px-12 py-4"
              >
                🌹 Begin Sacred Practice
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseFeatures;
