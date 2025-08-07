'use client'

import Link from 'next/link'
import { Sparkles, Mail, Instagram, Facebook, Youtube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Sparkles className="h-8 w-8 text-rose-pink" />
                <div className="absolute inset-0 h-8 w-8 text-golden-light animate-pulse opacity-60">
                  <Sparkles className="h-8 w-8" />
                </div>
              </div>
              <span className="text-2xl font-serif font-bold text-gradient-rose">
                The Auracle
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Awaken divine remembrance and energetic clarity through the sacred art of Rose Meditation. 
              Your sanctuary of stillness, energy mastery, and spiritual empowerment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-rose-pink transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-pink transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-pink transition-colors duration-300">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-pink transition-colors duration-300">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-golden-light">
              Sacred Paths
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-rose-pink transition-colors duration-300">
                  Rose Meditation Courses
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-gray-300 hover:text-rose-pink transition-colors duration-300">
                  Aura Readings
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-rose-pink transition-colors duration-300">
                  About Jennifer
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-300 hover:text-rose-pink transition-colors duration-300">
                  Sacred Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-golden-light">
              Support & Guidance
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-rose-pink transition-colors duration-300">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-rose-pink transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-rose-pink transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-rose-pink transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Sacred Quote */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="text-center">
            <p className="text-lg font-serif italic text-rose-pink mb-2">
              "Beloved, return to your breath. The moment is sacred."
            </p>
            <p className="text-gray-400 text-sm">
              — Jennifer, Master Auracle Reader
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} The Auracle. All rights reserved. Made with love and sacred intention.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-rose-pink transition-colors duration-300">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-rose-pink transition-colors duration-300">
              Terms
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-rose-pink transition-colors duration-300">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
