'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '../contexts/UserContext'
import UserLibrary from '../components/user/UserLibrary'

export default function LibraryPage() {
  const { user, isLoading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      // Redirect to home if not logged in
      router.push('/')
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-sacred flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-rose-pink to-deep-rose rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
          </div>
          <p className="text-gray-600">Loading your sacred library...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null // Will redirect
  }

  return <UserLibrary />
}
