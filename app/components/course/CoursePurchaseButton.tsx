'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Sparkles, Lock } from 'lucide-react'
import { useUser } from '../../contexts/UserContext'
import AuthModal from '../auth/AuthModal'
import PaymentModal from '../payment/PaymentModal'

interface CoursePurchaseButtonProps {
  courseId: string
  courseTitle: string
  coursePrice: string
  originalPrice?: string
  className?: string
  children?: React.ReactNode
}

const CoursePurchaseButton = ({
  courseId,
  courseTitle,
  coursePrice,
  originalPrice,
  className = "btn-primary",
  children
}: CoursePurchaseButtonProps) => {
  const { user, hasPurchasedCourse, purchaseCourse } = useUser()
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    // If user already owns the course, go to dashboard
    if (user && hasPurchasedCourse(courseId)) {
      router.push(`/courses/${courseId}/dashboard`)
      return
    }

    // If user is not logged in, show auth modal
    if (!user) {
      setIsAuthModalOpen(true)
      return
    }

    // User is logged in but hasn't purchased, show payment modal
    setIsPaymentModalOpen(true)
  }

  const handleAuthSuccess = () => {
    setIsAuthModalOpen(false)
    // After successful auth, show payment modal
    setIsPaymentModalOpen(true)
  }

  const handlePaymentSuccess = () => {
    // Add course to user's purchased courses
    purchaseCourse(courseId)
    setIsPaymentModalOpen(false)
    
    // Redirect to course dashboard
    router.push(`/courses/${courseId}/dashboard`)
  }

  const getButtonText = () => {
    if (user && hasPurchasedCourse(courseId)) {
      return children || 'Continue Learning'
    }
    if (!user) {
      return children || 'Get Started'
    }
    return children || 'Begin Sacred Practice'
  }

  const getButtonIcon = () => {
    if (user && hasPurchasedCourse(courseId)) {
      return null // No icon for continue learning
    }
    if (!user) {
      return <Sparkles className="h-4 w-4 mr-2" />
    }
    return <Lock className="h-4 w-4 mr-2" />
  }

  return (
    <>
      <button
        onClick={handleClick}
        className={className}
      >
        {getButtonIcon()}
        {getButtonText()}
      </button>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode="register"
        onAuthSuccess={handleAuthSuccess}
      />

      {/* Payment Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        courseId={courseId}
        courseTitle={courseTitle}
        coursePrice={coursePrice}
        originalPrice={originalPrice}
        onPaymentSuccess={handlePaymentSuccess}
      />
    </>
  )
}

export default CoursePurchaseButton
