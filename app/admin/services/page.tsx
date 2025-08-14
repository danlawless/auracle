'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Plus, 
  Edit, 
  Calendar, 
  DollarSign, 
  Clock, 
  Users, 
  Star,
  Settings,
  TrendingUp,
  CheckCircle,
  Pause,
  Play,
  Sparkles,
  Heart,
  Eye,
  BarChart3
} from 'lucide-react'
import { SacredCard, SacredButton, SacredInput } from '../../../components/admin/SacredUI'
import { dummyServices, AdminService } from '../../../data/admin/dummyData'

export default function ServicesPage() {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [selectedService, setSelectedService] = useState<AdminService | null>(null)

  const formatCurrency = (amount: number) => `$${amount.toLocaleString()}`

  const totalBookings = dummyServices.reduce((sum, service) => sum + service.bookings, 0)
  const totalRevenue = dummyServices.reduce((sum, service) => sum + service.revenue, 0)
  const activeServices = dummyServices.filter(service => service.status === 'active').length

  const serviceTypeIcons = {
    'spirit-reading-30': <Sparkles className="h-5 w-5" />,
    'deep-dive-60': <Heart className="h-5 w-5" />,
    'complete-experience-90': <Star className="h-5 w-5" />,
    'premium-package': <Users className="h-5 w-5" />
  }

  return (
    <div className="p-4 sm:p-6 space-y-6 lg:space-y-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0"
      >
        <div>
          <h1 className="text-3xl font-serif font-bold text-gray-900">🔮 Service Manager</h1>
          <p className="text-gray-600 mt-2">Manage your sacred readings and spiritual services</p>
        </div>
        
        <div className="flex space-x-3">
          <SacredButton 
            variant="secondary" 
            icon={Settings}
          >
            Calendar Settings
          </SacredButton>
          <SacredButton 
            variant="sacred" 
            icon={Plus}
            onClick={() => setShowCreateModal(true)}
            sacred
          >
            New Service
          </SacredButton>
        </div>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <SacredCard>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Services</p>
                <p className="text-2xl font-bold text-gray-900">{activeServices}</p>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-rose-pink to-deep-rose text-white">
                <Sparkles className="h-5 w-5" />
              </div>
            </div>
          </SacredCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <SacredCard>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                <p className="text-2xl font-bold text-gray-900">{totalBookings}</p>
                <p className="text-sm text-green-600 mt-1">+12 this month</p>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-golden-light to-yellow-400 text-white">
                <Calendar className="h-5 w-5" />
              </div>
            </div>
          </SacredCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <SacredCard>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Service Revenue</p>
                <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalRevenue)}</p>
                <p className="text-sm text-green-600 mt-1">+8% growth</p>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-earth-copper to-orange-600 text-white">
                <DollarSign className="h-5 w-5" />
              </div>
            </div>
          </SacredCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <SacredCard>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Session Value</p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(Math.round(totalRevenue / totalBookings))}
                </p>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                <TrendingUp className="h-5 w-5" />
              </div>
            </div>
          </SacredCard>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-serif font-semibold text-gray-900">Your Sacred Services</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {dummyServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <SacredCard hover borderStyle="rose" className="group relative overflow-hidden">
                {/* Status indicator */}
                <div className="absolute top-4 right-4">
                  <span className={`flex items-center space-x-1 px-2 py-1 text-xs rounded-full ${
                    service.status === 'active' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {service.status === 'active' ? (
                      <CheckCircle className="h-3 w-3" />
                    ) : (
                      <Pause className="h-3 w-3" />
                    )}
                    <span>{service.status}</span>
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Service Header */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-rose-pink to-golden-light text-white">
                      {serviceTypeIcons[service.id as keyof typeof serviceTypeIcons] || <Sparkles className="h-5 w-5" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif font-semibold text-gray-900 group-hover:text-rose-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                      {service.duration > 0 && (
                        <div className="flex items-center space-x-1 mt-2 text-sm text-gray-500">
                          <Clock className="h-4 w-4" />
                          <span>{service.duration} minutes</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Service Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 rounded-xl bg-rose-50/50">
                      <p className="text-lg font-bold text-gray-900">{formatCurrency(service.price)}</p>
                      <p className="text-xs text-gray-600">Price</p>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-golden-50/50">
                      <p className="text-lg font-bold text-gray-900">{service.bookings}</p>
                      <p className="text-xs text-gray-600">Bookings</p>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-green-50/50">
                      <p className="text-lg font-bold text-gray-900">{formatCurrency(service.revenue)}</p>
                      <p className="text-xs text-gray-600">Revenue</p>
                    </div>
                  </div>

                  {/* Service Includes */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">Includes:</p>
                    <div className="space-y-1">
                      {service.includes.slice(0, 3).map((include, includeIndex) => (
                        <div key={includeIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                          <span>{include}</span>
                        </div>
                      ))}
                      {service.includes.length > 3 && (
                        <p className="text-xs text-gray-500">+{service.includes.length - 3} more...</p>
                      )}
                    </div>
                  </div>

                  {/* Service Actions */}
                  <div className="flex space-x-2 pt-4 border-t border-gray-100">
                    <SacredButton 
                      size="sm" 
                      variant="primary" 
                      icon={Edit}
                      className="flex-1"
                    >
                      Edit Service
                    </SacredButton>
                    <SacredButton 
                      size="sm" 
                      variant="secondary" 
                      icon={BarChart3}
                      className="flex-1"
                    >
                      Analytics
                    </SacredButton>
                  </div>
                </div>
              </SacredCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Calendar Integration Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <SacredCard borderStyle="gold">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-golden-light to-earth-copper rounded-full flex items-center justify-center mx-auto">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            
            <div>
              <h3 className="text-xl font-serif font-semibold text-gray-900">Calendar & Booking Settings</h3>
              <p className="text-gray-600 mt-2">Configure your availability, booking rules, and calendar integration</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Mon-Fri, 10am-6pm</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Remote via Zoom</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Settings className="h-4 w-4" />
                <span>15 min buffer time</span>
              </div>
            </div>
            
            <SacredButton variant="secondary" icon={Settings}>
              Configure Calendar
            </SacredButton>
          </div>
        </SacredCard>
      </motion.div>

      {/* Create Service Modal */}
      <AnimatePresence>
        {showCreateModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setShowCreateModal(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white rounded-2xl p-6 w-full max-w-md"
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-pink to-golden-light rounded-full flex items-center justify-center mx-auto">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-xl font-serif font-semibold text-gray-900">Create New Service</h3>
                  <p className="text-gray-600 mt-2">What type of sacred service would you like to offer?</p>
                </div>
                
                <div className="space-y-3">
                  <SacredButton variant="primary" icon={Sparkles} className="w-full">
                    Spirit Reading Service
                  </SacredButton>
                  <SacredButton variant="secondary" icon={Heart} className="w-full">
                    Energy Healing Session  
                  </SacredButton>
                  <SacredButton variant="sacred" icon={Users} sacred className="w-full">
                    Package Program
                  </SacredButton>
                </div>
                
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="text-gray-500 hover:text-gray-700 text-sm"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      </div>
    </div>
  )
}
