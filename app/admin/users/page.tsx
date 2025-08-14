'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Mail,
  Calendar,
  BookOpen,
  Crown,
  Eye,
  Ban,
  Trash2,
  Download,
  Plus
} from 'lucide-react'

const UsersPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive'>('all')
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])

  // Mock user data - in production, this would come from an API
  const mockUsers = [
    {
      id: '1',
      name: 'Sarah Chen',
      email: 'sarah.chen@email.com',
      avatar: '👩‍🦳',
      status: 'active',
      joinedAt: '2024-01-15',
      lastActive: '2 hours ago',
      purchasedCourses: ['rose-meditation-1'],
      totalSpent: 49,
      progress: {
        'rose-meditation-1': 75
      },
      membership: {
        isActive: true,
        plan: 'community',
        startDate: '2024-01-15',
        trialEndDate: '2024-02-14',
        nextBillingDate: '2024-02-14',
        hasUsedFreeTrial: true
      }
    },
    {
      id: '2',
      name: 'Michael Rodriguez',
      email: 'michael.r@email.com',
      avatar: '👨‍💼',
      status: 'active',
      joinedAt: '2024-01-20',
      lastActive: '1 day ago',
      purchasedCourses: ['rose-meditation-1'],
      totalSpent: 49,
      progress: {
        'rose-meditation-1': 45
      },
      membership: {
        isActive: false,
        plan: 'community',
        startDate: '2024-01-20',
        trialEndDate: '2024-02-19',
        nextBillingDate: '2024-02-19',
        hasUsedFreeTrial: true
      }
    },
    {
      id: '3',
      name: 'Emma Thompson',
      email: 'emma.thompson@email.com',
      avatar: '👩‍🎨',
      status: 'active',
      joinedAt: '2024-02-01',
      lastActive: '3 days ago',
      purchasedCourses: [],
      totalSpent: 0,
      progress: {}
    },
    {
      id: '4',
      name: 'David Park',
      email: 'david.park@email.com',
      avatar: '👨‍🔬',
      status: 'inactive',
      joinedAt: '2024-01-10',
      lastActive: '2 weeks ago',
      purchasedCourses: ['rose-meditation-1'],
      totalSpent: 49,
      progress: {
        'rose-meditation-1': 20
      }
    }
  ]

  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || user.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const handleSelectUser = (userId: string) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    )
  }

  const handleSelectAll = () => {
    setSelectedUsers(
      selectedUsers.length === filteredUsers.length 
        ? [] 
        : filteredUsers.map(user => user.id)
    )
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'inactive':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const stats = {
    total: mockUsers.length,
    active: mockUsers.filter(u => u.status === 'active').length,
    inactive: mockUsers.filter(u => u.status === 'inactive').length,
    revenue: mockUsers.reduce((sum, u) => sum + u.totalSpent, 0)
  }

  return (
    <div className="p-4 sm:p-6 space-y-6 lg:space-y-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8"
        >
          <div>
            <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
              Student Management
            </h1>
            <p className="text-gray-600">
              Manage your sacred community of learners
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="btn-secondary flex items-center">
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
            <button className="btn-primary flex items-center">
              <Plus className="h-4 w-4 mr-2" />
              Add Student
            </button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          <div className="card-sacred">
            <div className="flex items-center">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">Total Students</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </div>
          
          <div className="card-sacred">
            <div className="flex items-center">
              <div className="p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-lg">
                <Crown className="h-5 w-5 text-white" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">Active Students</p>
                <p className="text-2xl font-bold text-gray-900">{stats.active}</p>
              </div>
            </div>
          </div>
          
          <div className="card-sacred">
            <div className="flex items-center">
              <div className="p-2 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">Course Sales</p>
                <p className="text-2xl font-bold text-gray-900">
                  {mockUsers.filter(u => u.purchasedCourses.length > 0).length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="card-sacred">
            <div className="flex items-center">
              <div className="p-2 bg-gradient-to-br from-rose-pink to-deep-rose rounded-lg">
                <span className="text-white font-bold text-sm">$</span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">Revenue</p>
                <p className="text-2xl font-bold text-gray-900">${stats.revenue}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-sacred mb-6"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search students..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-pink focus:border-transparent w-full sm:w-64"
                />
              </div>

              {/* Status Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value as any)}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-pink focus:border-transparent appearance-none bg-white"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>

            {/* Bulk Actions */}
            {selectedUsers.length > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  {selectedUsers.length} selected
                </span>
                <button className="btn-secondary text-sm">
                  Send Email
                </button>
                <button className="btn-secondary text-sm text-red-600 border-red-200 hover:bg-red-50">
                  <Ban className="h-4 w-4 mr-1" />
                  Suspend
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Users Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-sacred overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                      onChange={handleSelectAll}
                      className="rounded border-gray-300 text-rose-pink focus:ring-rose-pink"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Courses
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Progress
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Membership
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Spent
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Joined
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => handleSelectUser(user.id)}
                        className="rounded border-gray-300 text-rose-pink focus:ring-rose-pink"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-rose-pink to-deep-rose flex items-center justify-center text-white text-lg">
                            {user.avatar}
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {user.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(user.status)}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.purchasedCourses.length}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.purchasedCourses.length > 0 ? (
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                            <div 
                              className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full"
                              style={{ 
                                width: `${Object.values(user.progress)[0] || 0}%` 
                              }}
                            />
                          </div>
                          <span className="text-xs text-gray-600">
                            {Object.values(user.progress)[0] || 0}%
                          </span>
                        </div>
                      ) : (
                        <span className="text-sm text-gray-400">No courses</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.membership?.isActive ? (
                        <div>
                          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-golden-light/10 text-golden-dark">
                            Community
                          </span>
                          {user.membership.trialEndDate && new Date(user.membership.trialEndDate) > new Date() && (
                            <div className="text-xs text-gray-500 mt-1">Trial</div>
                          )}
                        </div>
                      ) : user.membership?.hasUsedFreeTrial ? (
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-600">
                          Cancelled
                        </span>
                      ) : (
                        <span className="text-sm text-gray-400">None</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${user.totalSpent}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(user.joinedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        <button className="text-rose-pink hover:text-deep-rose">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-600">
                          <Mail className="h-4 w-4" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredUsers.length === 0 && (
            <div className="text-center py-12">
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No students found
              </h3>
              <p className="text-gray-500">
                {searchTerm || filterStatus !== 'all' 
                  ? 'Try adjusting your search or filter criteria'
                  : 'Students will appear here when they join your courses'
                }
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default UsersPage
