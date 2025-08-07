'use client'

import { useState, memo, useCallback } from 'react'
import Link from 'next/link'
import { Menu, X, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = memo(() => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Schedule Reading', href: '/schedule' },
    { name: 'About', href: '/about' },
  ]

  const handleToggle = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-[9999] bg-white/95 border-b border-rose-pink/20" 
      style={{ 
        backdropFilter: 'blur(8px)', 
        WebkitBackdropFilter: 'blur(8px)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-deep-rose transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-rose group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link
              href="/schedule"
              className="btn-primary"
            >
              Book Reading
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleToggle}
              className="text-gray-700 hover:text-deep-rose transition-colors duration-200 p-2"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden bg-white/95 border-b border-rose-pink/20"
            style={{ 
              backdropFilter: 'blur(8px)', 
              WebkitBackdropFilter: 'blur(8px)',
              zIndex: 9998 
            }}
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-deep-rose transition-colors duration-300 font-medium py-2"
                  onClick={handleClose}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/schedule"
                className="block btn-primary text-center mt-4"
                onClick={handleClose}
              >
                Book Reading
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
})

export default Navigation
