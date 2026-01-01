'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Sparkles, ArrowLeft } from 'lucide-react';
import { useUser } from '../../contexts/UserContext';
import CoursePurchaseButton from './CoursePurchaseButton';

interface CourseProtectionProps {
  courseId: string;
  courseTitle: string;
  coursePrice: string;
  originalPrice?: string;
  children: React.ReactNode;
}

const CourseProtection = ({
  courseId,
  courseTitle,
  coursePrice,
  originalPrice,
  children,
}: CourseProtectionProps) => {
  const { user, isLoading, hasPurchasedCourse } = useUser();
  const [showPaywall, setShowPaywall] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        setShowPaywall(true);
      } else if (!hasPurchasedCourse(courseId)) {
        setShowPaywall(true);
      } else {
        setShowPaywall(false);
      }
    }
  }, [user, isLoading, courseId, hasPurchasedCourse]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-sacred flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-rose-pink to-deep-rose rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
          </div>
          <p className="text-gray-600">Loading course...</p>
        </div>
      </div>
    );
  }

  if (showPaywall) {
    return (
      <div className="min-h-screen bg-gradient-sacred py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-600 hover:text-gray-800 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </button>

          <div className="text-center">
            {/* Lock Icon */}
            <div className="w-20 h-20 bg-gradient-to-br from-rose-pink to-deep-rose rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
              <Lock className="h-10 w-10 text-white" />
            </div>

            {/* Sacred Access Message */}
            <div className="card-sacred max-w-2xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">
                Sacred Access Required
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {courseTitle} is a premium sacred practice that requires enrollment.
                Join thousands of students who have transformed their lives through this
                teaching.
              </p>

              {/* Course Preview */}
              <div className="bg-gradient-to-br from-rose-pink/5 to-deep-rose/5 rounded-xl p-6 mb-8 border border-rose-pink/20">
                <h3 className="text-xl font-serif font-semibold text-gray-800 mb-4">
                  {courseTitle}
                </h3>

                {/* Pricing */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="text-4xl font-bold text-gradient-gold">
                    {coursePrice}
                  </span>
                  {originalPrice && (
                    <>
                      <span className="text-2xl text-gray-400 line-through">
                        {originalPrice}
                      </span>
                      <span className="text-sm font-bold text-rose-pink bg-rose-pink/10 px-3 py-1 rounded-full">
                        75% OFF
                      </span>
                    </>
                  )}
                </div>

                {/* Benefits */}
                <div className="text-left max-w-md mx-auto">
                  <h4 className="font-semibold text-gray-800 mb-3 text-center">
                    What You&apos;ll Receive:
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <Sparkles className="h-4 w-4 text-rose-pink mr-2 flex-shrink-0" />
                      Complete course curriculum
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="h-4 w-4 text-rose-pink mr-2 flex-shrink-0" />
                      Guided meditation practices
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="h-4 w-4 text-rose-pink mr-2 flex-shrink-0" />
                      Lifetime access
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="h-4 w-4 text-rose-pink mr-2 flex-shrink-0" />
                      30-day reflection period
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CoursePurchaseButton
                  courseId={courseId}
                  courseTitle={courseTitle}
                  coursePrice={coursePrice}
                  originalPrice={originalPrice}
                  className="btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  🌹 Begin Sacred Practice
                </CoursePurchaseButton>

                <button
                  onClick={() => router.push(`/courses/${courseId}`)}
                  className="btn-secondary text-lg px-8 py-4"
                >
                  Learn More
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Lock className="h-4 w-4 mr-1" />
                    Secure Payment
                  </div>
                  <div className="flex items-center">
                    <Sparkles className="h-4 w-4 mr-1" />
                    Instant Access
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg mr-1">🌹</span>
                    Sacred Guarantee
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // User has access, render the protected content
  return <>{children}</>;
};

export default CourseProtection;
