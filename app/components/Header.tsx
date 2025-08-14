'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sparkles, Menu, X, User, LogOut, BookOpen } from 'lucide-react'
import { useUser } from '../contexts/UserContext'
import AuthModal from './auth/AuthModal'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')
  const [showUserMenu, setShowUserMenu] = useState(false)
  const pathname = usePathname()
  const { user, logout } = useUser()

  const navigation = [
    { name: 'Essence', href: '/' },
    { name: 'Courses', href: '/courses' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname?.startsWith(href)
  }

  const handleAuthSuccess = (userData: any) => {
    setIsAuthModalOpen(false)
    // User context will handle the login
  }

  const openAuthModal = (mode: 'login' | 'register') => {
    setAuthMode(mode)
    setIsAuthModalOpen(true)
  }

  return (
    <header className="fixed top-0 left-0 right-0 w-full h-16 z-50 bg-white/95 backdrop-filter backdrop-blur-lg border-b border-gray-200/20 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-deep-rose group-hover:animate-pulse" />
              <div className="absolute inset-0 h-8 w-8 text-golden-light animate-float-slow opacity-60">
                <Sparkles className="h-8 w-8" />
              </div>
            </div>
            <span className="text-2xl font-serif font-bold text-gradient-rose">
              The Auracle
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-colors duration-200 group ${
                  isActive(item.href)
                    ? 'text-deep-rose'
                    : 'text-gray-700 hover:text-deep-rose'
                }`}
              >
                {item.name}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-rose transition-all duration-300 ${
                    isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
            <Link 
              href="/schedule" 
              className={`group relative px-3 py-2 text-base font-medium transition-colors duration-200 ${
                isActive('/schedule')
                  ? 'text-deep-rose'
                  : 'text-gray-700 hover:text-deep-rose'
              }`}
            >
              Sessions
              <span 
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-rose transition-all duration-300 ${
                  isActive('/schedule') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>

            {/* User Authentication */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-deep-rose transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-rose-pink to-deep-rose rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="hidden lg:block font-medium">
                    {user.name.split(' ')[0]}
                  </span>
                </button>

                {/* User Menu Dropdown */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-[60]">
                    <Link
                      href="/library"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <BookOpen className="h-4 w-4 mr-2" />
                      My Library
                    </Link>
                    <Link
                      href="/profile"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </Link>
                    <hr className="my-2" />
                    <button
                      onClick={() => {
                        logout()
                        setShowUserMenu(false)
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => openAuthModal('login')}
                  className="btn-secondary"
                >
                  Login
                </button>
              </div>
            )}

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-deep-rose transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-filter backdrop-blur-lg border-t border-gray-200/20">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-deep-rose bg-rose-50'
                      : 'text-gray-700 hover:text-deep-rose hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/schedule"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  isActive('/schedule')
                    ? 'text-deep-rose bg-rose-50'
                    : 'text-gray-700 hover:text-deep-rose hover:bg-rose-50/50'
                }`}
              >
                Sessions
              </Link>

            </div>
          </div>
        )}
      </nav>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
        onAuthSuccess={handleAuthSuccess}
      />
    </header>
  )
}

export default Header
