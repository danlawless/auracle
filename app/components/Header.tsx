'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sparkles, Menu, X } from 'lucide-react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

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
              className="btn-primary"
            >
              Sessions
            </Link>
            {/* Admin Access - Only visible in development */}
            {process.env.NODE_ENV === 'development' && (
              <Link 
                href="/admin" 
                className="text-xs px-3 py-1 bg-rose-100 text-rose-700 rounded-full hover:bg-rose-200 transition-colors"
              >
                Admin
              </Link>
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
                className="block px-3 py-2 mt-4"
              >
                <span className="btn-primary inline-block w-full text-center">
                  Sessions
                </span>
              </Link>
              {/* Admin Access - Only visible in development */}
              {process.env.NODE_ENV === 'development' && (
                <Link
                  href="/admin"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 mt-2 text-center text-xs bg-rose-100 text-rose-700 rounded-full mx-3"
                >
                  Admin Panel
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
