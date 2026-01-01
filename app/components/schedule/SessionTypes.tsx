'use client';

import { motion } from 'framer-motion';
import {
  Clock,
  CheckCircle,
  Sparkles,
  Heart,
  Eye,
  Moon,
  Zap,
  Rainbow,
} from 'lucide-react';

const SessionTypes = () => {
  // Session time options
  const sessionOptions = [
    {
      id: '30-min',
      title: '30-Minute Focused Session',
      duration: '30 minutes',
      price: 150,
      description:
        'Perfect for getting clear guidance on one specific area. Great for first-time clients or when you have a focused question.',
      icon: '🌸',
      popular: false,
      color: 'from-deep-purple to-vibrant-pink',
      examples: [
        'General Aura Reading',
        'Explore 1 Significant Past Life',
        'Get Guidance on 1 Focused Question',
        '1-2 Specific Chakras With Healing Insights',
        'One Significant Dream Interpretation',
        'Clarity on Immediate Spiritual Concerns',
      ],
    },
    {
      id: '60-min',
      title: '60-Minute Deep Dive Session',
      duration: '60 minutes',
      price: 200,
      description:
        'Ideal for exploring multiple topics or going deeper into one area. Our most popular option for comprehensive guidance.',
      icon: '🌹',
      popular: true,
      color: 'from-royal-purple to-hot-pink',
      examples: [
        'Multiple Spirit Guides with Deeper Conversation',
        'Deep Dive into 2-3 Relevant Past Lives',
        '2-3 Related Questions or Complex Themes',
        '3-4 Chakras with Practical Healing Steps',
        'Complex Dream Analysis or Multiple Dreams',
        'Relationship and Life Path Guidance Integration',
      ],
    },
    {
      id: '90-min',
      title: '90-Minute Complete Experience',
      duration: '90 minutes',
      price: 250,
      description:
        'Perfect for the full spiritual overview or complex life situations. Maximum time for transformation and understanding.',
      icon: '✨',
      popular: false,
      color: 'from-vibrant-pink to-golden-accent',
      examples: [
        'Full Spirit Translation with Comprehensive Guidance',
        'Multiple Lifetimes with Karmic Pattern Analysis',
        'Multiple Themes with Integration Plan',
        'Complete 7-Chakra Session with Energy Balancing',
        'Deep Dream Analysis and Spiritual Symbol Interpretation',
        'The Complete Spiritual Overview Experience',
      ],
    },
  ];

  // Service categories
  const serviceCategories = [
    {
      icon: Sparkles,
      title: 'Spirit Connection & Messages',
      description: 'Connect with your divine guides and receive their wisdom',
      color: 'from-deep-purple to-vibrant-pink',
    },
    {
      icon: Moon,
      title: 'Past Life Insights',
      description: "Discover how your soul's journey affects your current life",
      color: 'from-royal-purple to-hot-pink',
    },
    {
      icon: Heart,
      title: 'Life Questions & Clarity',
      description: 'Get spiritual guidance on what matters most to you right now',
      color: 'from-vibrant-pink to-golden-accent',
    },
    {
      icon: Zap,
      title: 'Energy & Chakra Healing',
      description: 'Understand your energetic state and receive healing guidance',
      color: 'from-royal-purple to-hot-pink',
    },
    {
      icon: Eye,
      title: 'Dream & Symbol Interpretation',
      description: 'Decode the spiritual messages in your dreams and daily signs',
      color: 'from-deep-purple to-soft-lavender',
    },
    {
      icon: Rainbow,
      title: 'Complete Spiritual Overview',
      description:
        'The full experience: Spirit + past life + guidance + energy session',
      color: 'from-vibrant-pink to-golden-accent',
      specialNote: '(Available in 90-minute sessions)',
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
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-gradient-primary mb-6">
            Choose Your Session Length
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Simple, transparent pricing based on time. We&apos;ll customize the content
            to what you need most.
          </p>
        </motion.div>

        {/* Session Options */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 items-stretch">
          {sessionOptions.map((session, index) => (
            <motion.div
              key={session.id}
              className={`card-sacred relative overflow-hidden group flex flex-col h-full ${
                session.popular ? 'ring-2 ring-golden-light shadow-xl scale-105' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Popular Badge */}
              {session.popular && (
                <div className="absolute top-3 right-3 bg-gradient-accent text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg z-20">
                  Most Popular
                </div>
              )}

              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${session.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="text-center mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${session.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg mx-auto mb-4`}
                  >
                    {session.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-medium text-gray-800 mb-2">
                    {session.title}
                  </h3>
                  <div className="text-4xl font-medium text-gradient-accent mb-2">
                    ${session.price}
                  </div>
                  <div className="flex items-center justify-center text-gray-600 mb-4">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="font-medium">{session.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-6 text-center">
                  {session.description}
                </p>

                {/* Examples - Flex grow to take available space */}
                <div className="mb-8 flex-grow">
                  <h4 className="text-lg font-serif font-medium text-gray-800 mb-4 text-center">
                    What You Can Explore:
                  </h4>
                  <div className="space-y-2 min-h-[120px]">
                    {session.examples.map((example, exampleIndex) => (
                      <div
                        key={exampleIndex}
                        className="flex items-start text-gray-700 text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        {example}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button - Always at bottom */}
                <div className="mt-auto">
                  <a
                    href="/book"
                    className={`w-full py-4 bg-gradient-to-r ${session.color} text-white rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rose-pink focus:ring-opacity-50 inline-block text-center`}
                  >
                    Book {session.duration} Session
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Categories Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-serif font-medium text-gradient-secondary text-center mb-12">
            What We&apos;ll Explore Together
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="card-sacred group text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-serif font-medium text-gray-800 mb-2">
                  {category.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {category.description}
                </p>
                {category.specialNote && (
                  <p className="text-xs text-golden-light mt-2 font-medium">
                    {category.specialNote}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          className="card-sacred max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-rose rounded-full flex items-center justify-center">
              <span className="text-2xl">🌟</span>
            </div>
          </div>
          <h3 className="text-2xl font-serif font-medium text-gray-800 mb-6 text-center">
            How It Works
          </h3>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { number: '1', title: 'Choose Time', desc: 'Pick your session length' },
              { number: '2', title: 'Book Date', desc: 'Select your preferred time' },
              {
                number: '3',
                title: 'Share Focus',
                desc: "Tell us what you'd like to explore",
              },
              {
                number: '4',
                title: 'Receive Guidance',
                desc: 'Experience your transformation',
              },
            ].map((step, index) => (
              <div key={step.number} className="group">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 text-white font-medium group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <h4 className="font-serif font-medium text-gray-800 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-6 leading-relaxed">
              <strong>Every session includes:</strong> Recorded session, spirit
              messages, personalized insights, actionable guidance, and follow-up
              summary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book"
                className="btn-primary text-lg px-12 py-4 inline-block text-center"
              >
                Book Your Session Now
              </a>
              <button className="btn-secondary text-lg px-12 py-4">
                Questions? Contact Jae
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SessionTypes;
