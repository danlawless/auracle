'use client'

import { motion } from 'framer-motion'
import { 
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  BookOpen,
  Calendar,
  Star,
  Clock,
  Target,
  Eye,
  Heart,
  Award,
  Zap,
  Download,
  Filter,
  RefreshCw
} from 'lucide-react'
import { SacredCard, SacredStat, SacredButton, SacredSelect } from '../../../components/admin/SacredUI'

export default function AnalyticsPage() {
  const timeRangeOptions = [
    { value: '7d', label: 'Last 7 Days' },
    { value: '30d', label: 'Last 30 Days' },
    { value: '90d', label: 'Last 90 Days' },
    { value: '1y', label: 'Last Year' }
  ]

  // Mock analytics data
  const overviewStats = [
    { title: 'Total Revenue', value: '$89,240', change: '+15.3%', trend: 'up' as const, icon: DollarSign, color: 'rose' as const },
    { title: 'Active Students', value: '342', change: '+23', trend: 'up' as const, icon: Users, color: 'golden' as const },
    { title: 'Course Completions', value: '127', change: '+12', trend: 'up' as const, icon: Award, color: 'copper' as const },
    { title: 'Avg Session Rating', value: '4.8', change: '+0.2', trend: 'up' as const, icon: Star, color: 'rose' as const }
  ]

  const coursePerformance = [
    { name: 'Rose Meditation Level 1', students: 127, completion: 87, revenue: 25019, rating: 4.9 },
    { name: 'Advanced Energy Work', students: 43, completion: 72, revenue: 17071, rating: 4.8 },
    { name: 'Sacred Chakra Healing', students: 89, completion: 91, revenue: 21983, rating: 4.9 },
    { name: 'Energy Protection Mastery', students: 34, completion: 68, revenue: 13596, rating: 4.7 }
  ]

  const recentBookings = [
    { service: '60-Min Deep Dive', client: 'Sarah J.', date: '2024-03-15', revenue: 200 },
    { service: '30-Min Spirit Reading', client: 'Michael C.', date: '2024-03-15', revenue: 150 },
    { service: '90-Min Complete Experience', client: 'Emma W.', date: '2024-03-14', revenue: 250 },
    { service: '60-Min Deep Dive', client: 'David R.', date: '2024-03-14', revenue: 200 },
    { service: 'Premium Package', client: 'Lisa T.', date: '2024-03-13', revenue: 4000 }
  ]

  const engagementMetrics = [
    { metric: 'Daily Active Users', value: '89', trend: '+5.2%' },
    { metric: 'Avg Session Duration', value: '24 min', trend: '+3.1%' },
    { metric: 'Course Completion Rate', value: '84%', trend: '+2.3%' },
    { metric: 'Student Retention', value: '76%', trend: '+8.1%' }
  ]

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0"
      >
        <div>
          <h1 className="text-3xl font-serif font-bold text-gray-900">📊 Sacred Analytics</h1>
          <p className="text-gray-600 mt-2">Insights into your spiritual community and business growth</p>
        </div>
        
        <div className="flex space-x-3">
          <SacredSelect
            options={timeRangeOptions}
            value="30d"
            onChange={() => {}}
            className="w-40"
          />
          <SacredButton variant="secondary" icon={RefreshCw}>
            Refresh
          </SacredButton>
          <SacredButton variant="sacred" icon={Download} sacred>
            Export Report
          </SacredButton>
        </div>
      </motion.div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
          >
            <SacredStat
              title={stat.title}
              value={stat.value}
              change={stat.change}
              trend={stat.trend}
              icon={stat.icon}
              color={stat.color}
            />
          </motion.div>
        ))}
      </div>

      {/* Charts and Analytics */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2"
        >
          <SacredCard>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-serif font-semibold text-gray-900">Revenue Growth</h2>
              <div className="flex items-center space-x-2 text-sm text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span>+15.3% this month</span>
              </div>
            </div>
            
            {/* Mock Chart */}
            <div className="h-64 bg-gradient-to-br from-rose-50 to-golden-50 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-rose-pink mx-auto mb-4" />
                <p className="text-gray-600">Beautiful Revenue Chart</p>
                <p className="text-sm text-gray-500 mt-1">Interactive analytics visualization</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">$32k</p>
                <p className="text-sm text-gray-600">This Month</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">$28k</p>
                <p className="text-sm text-gray-600">Last Month</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">$89k</p>
                <p className="text-sm text-gray-600">Total Revenue</p>
              </div>
            </div>
          </SacredCard>
        </motion.div>

        {/* Engagement Metrics */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <SacredCard>
            <h2 className="text-xl font-serif font-semibold text-gray-900 mb-6">Student Engagement</h2>
            
            <div className="space-y-4">
              {engagementMetrics.map((metric, index) => (
                <div key={metric.metric} className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-rose-50/50 to-golden-50/50">
                  <div>
                    <p className="font-medium text-gray-900">{metric.value}</p>
                    <p className="text-sm text-gray-600">{metric.metric}</p>
                  </div>
                  <span className="text-sm text-green-600 font-medium">{metric.trend}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-center space-x-2 text-rose-600">
                <Heart className="h-4 w-4" />
                <span className="text-sm font-medium">Community Health: Excellent</span>
              </div>
            </div>
          </SacredCard>
        </motion.div>
      </div>

      {/* Course Performance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <SacredCard>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-serif font-semibold text-gray-900">Course Performance</h2>
            <SacredButton size="sm" variant="secondary">
              View All Courses
            </SacredButton>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-2 font-medium text-gray-700">Course Name</th>
                  <th className="text-center py-3 px-2 font-medium text-gray-700">Students</th>
                  <th className="text-center py-3 px-2 font-medium text-gray-700">Completion</th>
                  <th className="text-center py-3 px-2 font-medium text-gray-700">Revenue</th>
                  <th className="text-center py-3 px-2 font-medium text-gray-700">Rating</th>
                </tr>
              </thead>
              <tbody>
                {coursePerformance.map((course, index) => (
                  <motion.tr
                    key={course.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    className="border-b border-gray-100 hover:bg-rose-50/30 transition-colors"
                  >
                    <td className="py-4 px-2">
                      <div className="font-medium text-gray-900">{course.name}</div>
                    </td>
                    <td className="py-4 px-2 text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span>{course.students}</span>
                      </div>
                    </td>
                    <td className="py-4 px-2 text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <Target className="h-4 w-4 text-gray-400" />
                        <span>{course.completion}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-2 text-center font-medium text-green-600">
                      ${course.revenue.toLocaleString()}
                    </td>
                    <td className="py-4 px-2 text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{course.rating}</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </SacredCard>
      </motion.div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Bookings */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <SacredCard>
            <h2 className="text-xl font-serif font-semibold text-gray-900 mb-6">Recent Bookings</h2>
            
            <div className="space-y-4">
              {recentBookings.map((booking, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-golden-light to-earth-copper rounded-full flex items-center justify-center">
                      <Calendar className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{booking.service}</p>
                      <p className="text-sm text-gray-600">{booking.client} • {booking.date}</p>
                    </div>
                  </div>
                  <span className="font-semibold text-green-600">${booking.revenue}</span>
                </motion.div>
              ))}
            </div>
          </SacredCard>
        </motion.div>

        {/* Quick Insights */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <SacredCard borderStyle="gold">
            <h2 className="text-xl font-serif font-semibold text-gray-900 mb-6">Sacred Insights</h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                <div className="flex items-center space-x-2 text-green-700 mb-2">
                  <Zap className="h-4 w-4" />
                  <span className="font-medium">Peak Learning Time</span>
                </div>
                <p className="text-sm text-green-600">7-9 AM sees 42% of daily course activity</p>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                <div className="flex items-center space-x-2 text-blue-700 mb-2">
                  <BookOpen className="h-4 w-4" />
                  <span className="font-medium">Top Course</span>
                </div>
                <p className="text-sm text-blue-600">Rose Meditation Level 1 has highest engagement</p>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl">
                <div className="flex items-center space-x-2 text-purple-700 mb-2">
                  <Target className="h-4 w-4" />
                  <span className="font-medium">Completion Rate</span>
                </div>
                <p className="text-sm text-purple-600">84% completion rate (19% above industry)</p>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl">
                <div className="flex items-center space-x-2 text-rose-700 mb-2">
                  <Heart className="h-4 w-4" />
                  <span className="font-medium">Student Satisfaction</span>
                </div>
                <p className="text-sm text-rose-600">4.8/5 average rating across all offerings</p>
              </div>
            </div>
          </SacredCard>
        </motion.div>
      </div>
    </div>
  )
}
