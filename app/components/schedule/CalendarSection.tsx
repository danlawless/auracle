'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const CalendarSection = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Mock calendar data - updated dates to be more current
  const availableDates = [
    '2024-02-15',
    '2024-02-16',
    '2024-02-17',
    '2024-02-19',
    '2024-02-20',
    '2024-02-22',
    '2024-02-23',
    '2024-02-24',
    '2024-02-26',
    '2024-02-27',
  ];

  const timeSlots = [
    '9:00 AM',
    '10:30 AM',
    '12:00 PM',
    '1:30 PM',
    '3:00 PM',
    '4:30 PM',
    '6:00 PM',
    '7:30 PM',
  ];

  return (
    <section className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-gradient-primary mb-6">
            Select Your Preferred Time
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Choose from Jennifer&apos;s available dates and times. All sessions are
            conducted via secure video call.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Date Selection */}
          <motion.div
            className="card-sacred"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-medium mr-3">
                  <Calendar className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-serif font-medium text-gray-800">
                  Choose Your Date
                </h3>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 rounded-full hover:bg-soft-lavender/20 transition-colors duration-300">
                  <ChevronLeft className="h-4 w-4 text-gray-600" />
                </button>
                <button className="p-2 rounded-full hover:bg-soft-lavender/20 transition-colors duration-300">
                  <ChevronRight className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="text-center mb-4">
              <h4 className="text-lg font-medium text-gray-800">February 2024</h4>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div
                  key={day}
                  className="p-2 text-center text-sm font-medium text-gray-500"
                >
                  {day}
                </div>
              ))}

              {/* Calendar days */}
              {Array.from({ length: 29 }, (_, i) => {
                const date = `2024-02-${String(i + 1).padStart(2, '0')}`;
                const isAvailable = availableDates.includes(date);
                const isSelected = selectedDate === date;

                return (
                  <motion.button
                    key={i}
                    className={`p-3 text-sm rounded-lg transition-all duration-300 ${
                      isAvailable
                        ? isSelected
                          ? 'bg-gradient-primary text-white shadow-lg'
                          : 'hover:bg-vibrant-pink/10 text-gray-800 border-2 border-transparent hover:border-vibrant-pink/20'
                        : 'text-gray-300 cursor-not-allowed'
                    }`}
                    onClick={() => isAvailable && setSelectedDate(date)}
                    disabled={!isAvailable}
                    whileHover={isAvailable ? { scale: 1.05 } : {}}
                    whileTap={isAvailable ? { scale: 0.95 } : {}}
                  >
                    {i + 1}
                  </motion.button>
                );
              })}
            </div>

            <p className="text-sm text-gray-600 text-center">
              ✨ Available dates are highlighted. Times shown in your local timezone.
            </p>
          </motion.div>

          {/* Time Selection */}
          <motion.div
            className="card-sacred"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center text-white font-medium mr-3">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-serif font-medium text-gray-800">
                Select Your Time
              </h3>
            </div>

            {selectedDate ? (
              <div className="space-y-4">
                <p className="text-sm text-gray-600 mb-4">
                  Available times for{' '}
                  <span className="font-medium text-vibrant-pink">
                    {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  :
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((time) => (
                    <motion.button
                      key={time}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 font-medium ${
                        selectedTime === time
                          ? 'border-vibrant-pink bg-gradient-secondary text-white shadow-lg'
                          : 'border-soft-lavender hover:border-vibrant-pink hover:bg-vibrant-pink/5 text-gray-700'
                      }`}
                      onClick={() => setSelectedTime(time)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {time}
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <Calendar className="h-16 w-16 mx-auto mb-4 opacity-30" />
                <p className="text-lg font-medium mb-2">Choose a date first</p>
                <p className="text-sm">Select an available date to see time options</p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Booking CTA */}
        {selectedDate && selectedTime && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-sacred max-w-2xl mx-auto">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-card rounded-full flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
              </div>

              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
                Perfect! You&apos;re All Set
              </h3>

              <div className="bg-gradient-sacred rounded-lg p-4 mb-6">
                <p className="text-gray-700 mb-2">
                  <strong>Your Selected Time:</strong>
                </p>
                <p className="text-lg font-semibold text-gradient-primary">
                  {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}{' '}
                  at {selectedTime}
                </p>
              </div>

              <button className="btn-primary text-lg px-16 py-4 mb-4">
                Continue to Payment
              </button>

              <p className="text-sm text-gray-600">
                You&apos;ll receive confirmation and preparation materials via email
                within minutes
              </p>
            </div>
          </motion.div>
        )}

        {/* Trust Indicators */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 text-gray-600 text-sm mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center">
            <span className="text-xl mr-2">🔒</span>
            <span>Secure & Confidential</span>
          </div>
          <div className="flex items-center">
            <span className="text-xl mr-2">📅</span>
            <span>Easy Rescheduling</span>
          </div>
          <div className="flex items-center">
            <span className="text-xl mr-2">🎥</span>
            <span>HD Video Quality</span>
          </div>
          <div className="flex items-center">
            <span className="text-xl mr-2">💖</span>
            <span>100% Satisfaction Guarantee</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CalendarSection;
