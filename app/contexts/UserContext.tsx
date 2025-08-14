'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

export interface User {
  id: string
  name: string
  email: string
  purchasedCourses: string[]
  createdAt: string
  avatar?: string
  membership?: {
    isActive: boolean
    plan: 'free' | 'community'
    startDate: string
    trialEndDate?: string
    nextBillingDate?: string
    hasUsedFreeTrial: boolean
  }
}

interface UserContextType {
  user: User | null
  isLoading: boolean
  login: (user: User) => void
  logout: () => void
  updateUser: (updates: Partial<User>) => void
  hasPurchasedCourse: (courseId: string) => boolean
  purchaseCourse: (courseId: string) => void
  hasActiveMembership: () => boolean
  activateMembership: (includeTrial?: boolean) => void
  cancelMembership: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session on mount
    const checkSession = () => {
      try {
        const session = localStorage.getItem('auracle_user_session')
        const userData = localStorage.getItem('auracle_user')
        
        if (session === 'true' && userData) {
          const parsedUser = JSON.parse(userData)
          setUser(parsedUser)
        }
      } catch (error) {
        console.error('Error loading user session:', error)
        // Clear corrupted session
        localStorage.removeItem('auracle_user_session')
        localStorage.removeItem('auracle_user')
      }
      setIsLoading(false)
    }

    checkSession()
  }, [])

  const login = (userData: User) => {
    setUser(userData)
    localStorage.setItem('auracle_user', JSON.stringify(userData))
    localStorage.setItem('auracle_user_session', 'true')
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('auracle_user_session')
    localStorage.removeItem('auracle_user')
    // Redirect to home page
    window.location.href = '/'
  }

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates }
      setUser(updatedUser)
      localStorage.setItem('auracle_user', JSON.stringify(updatedUser))
    }
  }

  const hasPurchasedCourse = (courseId: string) => {
    return user?.purchasedCourses?.includes(courseId) || false
  }

  const purchaseCourse = (courseId: string) => {
    if (user && !user.purchasedCourses.includes(courseId)) {
      const updatedCourses = [...user.purchasedCourses, courseId]
      updateUser({ purchasedCourses: updatedCourses })
    }
  }

  const hasActiveMembership = () => {
    if (!user?.membership) return false
    return user.membership.isActive
  }

  const activateMembership = (includeTrial = true) => {
    if (!user) return

    const now = new Date()
    const trialEndDate = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000) // 30 days from now
    const nextBillingDate = new Date(trialEndDate.getTime()) // Same as trial end for simplicity

    const membershipData = {
      isActive: true,
      plan: 'community' as const,
      startDate: now.toISOString(),
      trialEndDate: includeTrial ? trialEndDate.toISOString() : undefined,
      nextBillingDate: nextBillingDate.toISOString(),
      hasUsedFreeTrial: includeTrial || (user.membership?.hasUsedFreeTrial || false)
    }

    updateUser({ membership: membershipData })
  }

  const cancelMembership = () => {
    if (!user?.membership) return

    const updatedMembership = {
      ...user.membership,
      isActive: false
    }

    updateUser({ membership: updatedMembership })
  }

  const value: UserContextType = {
    user,
    isLoading,
    login,
    logout,
    updateUser,
    hasPurchasedCourse,
    purchaseCourse,
    hasActiveMembership,
    activateMembership,
    cancelMembership
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
