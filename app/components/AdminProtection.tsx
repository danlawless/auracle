'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface AdminProtectionProps {
  children: React.ReactNode
}

const AdminProtection = ({ children }: AdminProtectionProps) => {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check for admin session
    const adminSession = localStorage.getItem('auracle_admin_session')
    
    if (adminSession === 'true') {
      setIsAuthorized(true)
    } else {
      // Redirect to home page if not authorized
      router.push('/')
    }
    
    setIsLoading(false)
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-golden-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-rose-pink to-deep-rose rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
          </div>
          <p className="text-gray-600">Verifying access...</p>
        </div>
      </div>
    )
  }

  if (!isAuthorized) {
    return null // Will redirect, so don't show anything
  }

  return <>{children}</>
}

export default AdminProtection
