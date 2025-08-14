'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Settings, 
  User, 
  Bell,
  Shield,
  Palette,
  Database,
  Mail,
  Globe,
  Key,
  Save,
  Eye,
  EyeOff,
  Upload,
  Download,
  Trash2,
  RefreshCw,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'
import { SacredCard, SacredButton, SacredInput, SacredTextarea, SacredSelect } from '../../../components/admin/SacredUI'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'notifications' | 'security' | 'branding' | 'integrations' | 'advanced'>('profile')
  const [showPassword, setShowPassword] = useState(false)

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'branding', label: 'Branding', icon: Palette },
    { id: 'integrations', label: 'Integrations', icon: Globe },
    { id: 'advanced', label: 'Advanced', icon: Database }
  ]

  // Mock settings data
  const [profileSettings, setProfileSettings] = useState({
    name: 'Jennifer (The Auracle)',
    email: 'jae@theauracle.com',
    bio: 'A sacred guide devoted to awakening divine remembrance and energetic clarity.',
    timezone: 'America/New_York',
    language: 'en'
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    courseCompletions: true,
    newBookings: true,
    testimonials: true,
    systemUpdates: false,
    marketingEmails: true
  })

  const [securitySettings] = useState({
    twoFactorEnabled: false,
    sessionTimeout: '24',
    loginNotifications: true,
    allowedDomains: ['theauracle.com']
  })

  const timezoneOptions = [
    { value: 'America/New_York', label: 'Eastern Time (ET)' },
    { value: 'America/Chicago', label: 'Central Time (CT)' },
    { value: 'America/Denver', label: 'Mountain Time (MT)' },
    { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
    { value: 'UTC', label: 'UTC' }
  ]

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' }
  ]

  const integrations = [
    {
      name: 'Calendly',
      description: 'Booking and scheduling integration',
      status: 'connected',
      lastSync: '2024-03-15T10:30:00Z'
    },
    {
      name: 'Stripe',
      description: 'Payment processing',
      status: 'connected',
      lastSync: '2024-03-15T09:15:00Z'
    },
    {
      name: 'Zoom',
      description: 'Video conferencing for sessions',
      status: 'disconnected',
      lastSync: null
    },
    {
      name: 'Mailchimp',
      description: 'Email marketing automation',
      status: 'disconnected',
      lastSync: null
    }
  ]

  const toggleNotification = (key: keyof typeof notificationSettings) => {
    setNotificationSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
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
          <h1 className="text-3xl font-serif font-bold text-gray-900">⚙️ Sacred Settings</h1>
          <p className="text-gray-600 mt-2">Configure your platform preferences and integrations</p>
        </div>
        
        <div className="flex space-x-3">
          <SacredButton variant="secondary" icon={RefreshCw}>
            Reset to Defaults
          </SacredButton>
          <SacredButton variant="sacred" icon={Save} sacred>
            Save All Changes
          </SacredButton>
        </div>
      </motion.div>

      {/* Settings Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <SacredCard>
          <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-100 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-rose-pink to-golden-light text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-pink to-golden-light rounded-full flex items-center justify-center text-white text-2xl font-serif">
                  J
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-gray-900">Profile Information</h3>
                  <p className="text-gray-600">Update your personal details and preferences</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <SacredInput
                  label="Full Name"
                  value={profileSettings.name}
                  onChange={(value) => setProfileSettings(prev => ({ ...prev, name: value }))}
                  required
                />
                
                <SacredInput
                  label="Email Address"
                  type="email"
                  value={profileSettings.email}
                  onChange={(value) => setProfileSettings(prev => ({ ...prev, email: value }))}
                  required
                />
              </div>

              <SacredTextarea
                label="Bio"
                value={profileSettings.bio}
                onChange={(value) => setProfileSettings(prev => ({ ...prev, bio: value }))}
                rows={4}
                helpText="A brief description of your spiritual work and mission"
              />

              <div className="grid lg:grid-cols-2 gap-6">
                <SacredSelect
                  label="Timezone"
                  value={profileSettings.timezone}
                  onChange={(value) => setProfileSettings(prev => ({ ...prev, timezone: value }))}
                  options={timezoneOptions}
                />
                
                <SacredSelect
                  label="Language"
                  value={profileSettings.language}
                  onChange={(value) => setProfileSettings(prev => ({ ...prev, language: value }))}
                  options={languageOptions}
                />
              </div>

              <div className="pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-4">Profile Picture</h4>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-pink to-golden-light rounded-full flex items-center justify-center text-white text-xl font-serif">
                    J
                  </div>
                  <div>
                    <SacredButton variant="secondary" icon={Upload} size="sm">
                      Upload New Photo
                    </SacredButton>
                    <p className="text-sm text-gray-500 mt-1">JPG, PNG or GIF up to 5MB</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <div className="mb-6">
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">Notification Preferences</h3>
                <p className="text-gray-600">Choose what notifications you'd like to receive</p>
              </div>

              <div className="space-y-6">
                <SacredCard>
                  <h4 className="font-semibold text-gray-900 mb-4">Email Notifications</h4>
                  <div className="space-y-4">
                    {Object.entries({
                      emailNotifications: 'Enable email notifications',
                      courseCompletions: 'Course completions by students',
                      newBookings: 'New reading session bookings',
                      testimonials: 'New testimonials and reviews',
                      systemUpdates: 'System updates and maintenance',
                      marketingEmails: 'Marketing updates and newsletters'
                    }).map(([key, label]) => (
                      <div key={key} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
                        <div>
                          <span className="text-sm font-medium text-gray-700">{label}</span>
                        </div>
                        <button
                          onClick={() => toggleNotification(key as keyof typeof notificationSettings)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notificationSettings[key as keyof typeof notificationSettings]
                              ? 'bg-rose-pink' 
                              : 'bg-gray-200'
                          }`}
                        >
                          <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            notificationSettings[key as keyof typeof notificationSettings]
                              ? 'translate-x-6' 
                              : 'translate-x-1'
                          }`} />
                        </button>
                      </div>
                    ))}
                  </div>
                </SacredCard>

                <SacredCard>
                  <h4 className="font-semibold text-gray-900 mb-4">Notification Schedule</h4>
                  <div className="grid lg:grid-cols-2 gap-4">
                    <SacredSelect
                      label="Daily Summary Time"
                      options={[
                        { value: '08:00', label: '8:00 AM' },
                        { value: '12:00', label: '12:00 PM' },
                        { value: '18:00', label: '6:00 PM' },
                        { value: '20:00', label: '8:00 PM' }
                      ]}
                      value="08:00"
                      onChange={() => {}}
                    />
                    
                    <SacredSelect
                      label="Weekly Report Day"
                      options={[
                        { value: '1', label: 'Monday' },
                        { value: '5', label: 'Friday' },
                        { value: '0', label: 'Sunday' }
                      ]}
                      value="1"
                      onChange={() => {}}
                    />
                  </div>
                </SacredCard>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <div className="mb-6">
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">Security Settings</h3>
                <p className="text-gray-600">Protect your account and sacred space</p>
              </div>

              <div className="space-y-6">
                <SacredCard>
                  <h4 className="font-semibold text-gray-900 mb-4">Password & Authentication</h4>
                  <div className="space-y-4">
                    <div className="grid lg:grid-cols-2 gap-4">
                      <div className="relative">
                        <SacredInput
                          label="Current Password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Enter current password"
                        />
                        <button
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-8 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                      
                      <SacredInput
                        label="New Password"
                        type="password"
                        placeholder="Enter new password"
                      />
                    </div>

                    <SacredButton variant="primary">
                      Update Password
                    </SacredButton>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-medium text-gray-900">Two-Factor Authentication</h5>
                        <p className="text-sm text-gray-600">Add extra security to your account</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          securitySettings.twoFactorEnabled 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {securitySettings.twoFactorEnabled ? 'Enabled' : 'Disabled'}
                        </span>
                        <SacredButton size="sm" variant="secondary">
                          {securitySettings.twoFactorEnabled ? 'Disable' : 'Enable'}
                        </SacredButton>
                      </div>
                    </div>
                  </div>
                </SacredCard>

                <SacredCard>
                  <h4 className="font-semibold text-gray-900 mb-4">Session Management</h4>
                  <div className="space-y-4">
                    <SacredSelect
                      label="Session Timeout"
                      options={[
                        { value: '1', label: '1 hour' },
                        { value: '8', label: '8 hours' },
                        { value: '24', label: '24 hours' },
                        { value: '168', label: '1 week' }
                      ]}
                      value={securitySettings.sessionTimeout}
                      onChange={() => {}}
                      helpText="Automatically log out after period of inactivity"
                    />

                    <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div>
                        <span className="text-sm font-medium text-gray-700">Login notifications</span>
                        <p className="text-xs text-gray-500">Notify me when someone logs into my account</p>
                      </div>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-rose-pink">
                        <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition-transform" />
                      </button>
                    </div>
                  </div>
                </SacredCard>
              </div>
            </div>
          )}

          {/* Branding Tab */}
          {activeTab === 'branding' && (
            <div className="space-y-6">
              <div className="mb-6">
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">Sacred Branding</h3>
                <p className="text-gray-600">Customize your platform's sacred visual identity</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <SacredCard>
                  <h4 className="font-semibold text-gray-900 mb-4">Colors & Theme</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-rose-pink to-deep-rose rounded-lg border-2 border-gray-200"></div>
                        <div>
                          <p className="font-medium text-gray-900">Rose Pink</p>
                          <p className="text-sm text-gray-500">#F8BBD9</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-golden-light to-yellow-400 rounded-lg border-2 border-gray-200"></div>
                        <div>
                          <p className="font-medium text-gray-900">Golden Light</p>
                          <p className="text-sm text-gray-500">#F4D03F</p>
                        </div>
                      </div>
                    </div>

                    <SacredButton variant="secondary" size="sm">
                      Customize Colors
                    </SacredButton>
                  </div>
                </SacredCard>

                <SacredCard>
                  <h4 className="font-semibold text-gray-900 mb-4">Logo & Assets</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Platform Logo</label>
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-rose-pink to-golden-light rounded-full flex items-center justify-center text-white text-2xl">
                          🌹
                        </div>
                        <div>
                          <SacredButton variant="secondary" icon={Upload} size="sm">
                            Upload Logo
                          </SacredButton>
                          <p className="text-sm text-gray-500 mt-1">PNG or SVG recommended</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Favicon</label>
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-rose-pink to-golden-light rounded flex items-center justify-center text-white text-sm">
                          🌹
                        </div>
                        <SacredButton variant="secondary" size="sm">
                          Upload Favicon
                        </SacredButton>
                      </div>
                    </div>
                  </div>
                </SacredCard>
              </div>
            </div>
          )}

          {/* Integrations Tab */}
          {activeTab === 'integrations' && (
            <div className="space-y-6">
              <div className="mb-6">
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">Platform Integrations</h3>
                <p className="text-gray-600">Connect your sacred tools and services</p>
              </div>

              <div className="space-y-4">
                {integrations.map((integration, index) => (
                  <motion.div
                    key={integration.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <SacredCard hover>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            integration.status === 'connected' 
                              ? 'bg-green-100 text-green-600' 
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            <Globe className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{integration.name}</h4>
                            <p className="text-sm text-gray-600">{integration.description}</p>
                            {integration.lastSync && (
                              <p className="text-xs text-gray-500 mt-1">
                                Last synced: {new Date(integration.lastSync).toLocaleDateString()}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <span className={`flex items-center space-x-1 px-2 py-1 text-xs rounded-full ${
                            integration.status === 'connected' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {integration.status === 'connected' ? (
                              <CheckCircle className="h-3 w-3" />
                            ) : (
                              <AlertTriangle className="h-3 w-3" />
                            )}
                            <span className="capitalize">{integration.status}</span>
                          </span>
                          
                          <SacredButton 
                            size="sm" 
                            variant={integration.status === 'connected' ? 'secondary' : 'primary'}
                          >
                            {integration.status === 'connected' ? 'Configure' : 'Connect'}
                          </SacredButton>
                        </div>
                      </div>
                    </SacredCard>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Advanced Tab */}
          {activeTab === 'advanced' && (
            <div className="space-y-6">
              <div className="mb-6">
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">Advanced Settings</h3>
                <p className="text-gray-600">System configuration and data management</p>
              </div>

              <div className="space-y-6">
                <SacredCard>
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <Database className="h-5 w-5" />
                    <span>Data Management</span>
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <SacredButton variant="secondary" icon={Download}>
                      Export All Data
                    </SacredButton>
                    <SacredButton variant="secondary" icon={Upload}>
                      Import Data
                    </SacredButton>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">
                    Export includes courses, students, and analytics data in JSON format
                  </p>
                </SacredCard>

                <SacredCard>
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <Key className="h-5 w-5" />
                    <span>API Configuration</span>
                  </h4>
                  <div className="space-y-4">
                    <SacredInput
                      label="API Endpoint"
                      value="https://api.theauracle.com/v1"
                      helpText="Base URL for API access"
                      disabled
                    />
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-medium text-gray-900">API Access</h5>
                        <p className="text-sm text-gray-600">Enable external API access</p>
                      </div>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
                        <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition-transform" />
                      </button>
                    </div>
                  </div>
                </SacredCard>

                <SacredCard borderStyle="copper">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2 text-red-600">
                    <AlertTriangle className="h-5 w-5" />
                    <span>Danger Zone</span>
                  </h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 rounded-xl">
                      <h5 className="font-medium text-red-900 mb-2">Reset All Settings</h5>
                      <p className="text-sm text-red-700 mb-3">
                        This will reset all your settings to default values. This action cannot be undone.
                      </p>
                      <SacredButton variant="warning" size="sm">
                        Reset Settings
                      </SacredButton>
                    </div>
                    
                    <div className="p-4 bg-red-50 rounded-xl">
                      <h5 className="font-medium text-red-900 mb-2">Delete Account</h5>
                      <p className="text-sm text-red-700 mb-3">
                        Permanently delete your account and all associated data. This action cannot be undone.
                      </p>
                      <SacredButton variant="warning" icon={Trash2} size="sm">
                        Delete Account
                      </SacredButton>
                    </div>
                  </div>
                </SacredCard>
              </div>
            </div>
          )}
        </SacredCard>
      </motion.div>
      </div>
    </div>
  )
}

