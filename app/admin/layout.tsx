'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  BookOpen, 
  Sparkles, 
  Edit3,
  Image,
  Bot,
  Users,
  BarChart3,
  Settings,
  Menu,
  X,
  LogOut,
  User
} from 'lucide-react'

const navigation = [
  { name: 'Sacred Dashboard', href: '/admin', icon: LayoutDashboard, color: 'rose' },
  { name: 'Course Studio', href: '/admin/courses', icon: BookOpen, color: 'golden' },
  { name: 'Service Manager', href: '/admin/services', icon: Sparkles, color: 'copper' },
  { name: 'Content Editor', href: '/admin/content', icon: Edit3, color: 'rose' },
  { name: 'Media Library', href: '/admin/media', icon: Image, color: 'golden' },
  { name: 'AI Assistant', href: '/admin/ai', icon: Bot, color: 'copper' },
  { name: 'Community Hub', href: '/admin/community', icon: Users, color: 'rose' },
  { name: 'Analytics', href: '/admin/analytics', icon: BarChart3, color: 'golden' },
  { name: 'Settings', href: '/admin/settings', icon: Settings, color: 'copper' },
]

const colorClasses = {
  rose: 'from-rose-pink to-deep-rose',
  golden: 'from-golden-light to-yellow-400',
  copper: 'from-earth-copper to-orange-600'
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-golden-50">
      {/* Mobile sidebar backdrop */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{ x: sidebarOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed inset-y-0 left-0 z-50 w-72 bg-white/95 backdrop-blur-xl shadow-2xl lg:translate-x-0 lg:static lg:inset-0"
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex h-16 items-center justify-between px-6 border-b border-rose-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-rose-pink to-deep-rose rounded-full flex items-center justify-center">
                <span className="text-white text-lg">🌹</span>
              </div>
              <div>
                <h1 className="font-serif font-bold text-gray-900">The Auracle</h1>
                <p className="text-xs text-gray-500">Sacred Management</p>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 px-6 py-6 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/admin' && pathname?.startsWith(item.href))
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-3 py-2.5 rounded-xl font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'bg-gradient-to-r from-rose-50 to-golden-50 text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute left-0 w-1 h-6 bg-gradient-to-b from-rose-pink to-golden-light rounded-r-full"
                    />
                  )}
                  <div className={`p-2 rounded-lg mr-3 bg-gradient-to-br ${colorClasses[item.color]} ${isActive ? 'text-white' : 'text-white opacity-80 group-hover:opacity-100'}`}>
                    <item.icon className="h-4 w-4" />
                  </div>
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-rose-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-golden-light to-earth-copper rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Jae (The Auracle)</p>
                  <p className="text-xs text-gray-500">Sacred Administrator</p>
                </div>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="lg:pl-72">
        {/* Mobile header */}
        <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-xl border-b border-gray-200 px-4 py-4 lg:hidden">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-2">
              <span className="text-lg">🌹</span>
              <span className="font-serif font-semibold">Admin</span>
            </div>
            <div className="w-8" /> {/* Spacer */}
          </div>
        </div>

        {/* Page content */}
        <main className="min-h-screen">
          {children}
        </main>
      </div>
    </div>
  )
}
