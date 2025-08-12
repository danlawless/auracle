'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  DollarSign, 
  BookOpen, 
  TrendingUp, 
  Star,
  Calendar,
  Plus,
  Eye,
  Settings,
  BarChart3,
  Sparkles,
  Clock,
  Award
} from 'lucide-react'
import { SacredCard, SacredStat, SacredButton } from '../../components/admin/SacredUI'
import { adminAnalytics, recentActivity, dummyCourses, dummyServices } from '../../data/admin/dummyData'

export default function AdminDashboard() {
  const formatCurrency = (amount: number) => `$${amount.toLocaleString()}`
  const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString()

  return (
    <div className="p-6 space-y-8">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="flex items-center justify-center space-x-3">
          <motion.div
            className="w-12 h-12 bg-gradient-to-br from-rose-pink to-golden-light rounded-full flex items-center justify-center"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-2xl">🌹</span>
          </motion.div>
          <div>
            <h1 className="text-3xl font-serif font-bold text-gray-900">Welcome back, Jae</h1>
            <p className="text-gray-600">Today's Sacred Energy: <span className="text-rose-pink font-medium">🔥 High Engagement</span></p>
          </div>
        </div>
      </motion.div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <SacredStat
            title="Active Students"
            value={adminAnalytics.totalStudents}
            change="+23 this month"
            trend="up"
            icon={Users}
            color="rose"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <SacredStat
            title="Monthly Revenue"
            value={formatCurrency(adminAnalytics.totalRevenue)}
            change={`+${adminAnalytics.monthlyGrowth}% growth`}
            trend="up"
            icon={DollarSign}
            color="golden"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <SacredStat
            title="Course Completion"
            value={`${adminAnalytics.completionRate}%`}
            change="Above industry avg"
            trend="up"
            icon={Award}
            color="copper"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <SacredStat
            title="Average Rating"
            value={adminAnalytics.averageRating}
            change="Exceptional quality"
            trend="up"
            icon={Star}
            color="rose"
          />
        </motion.div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <SacredCard>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-serif font-semibold text-gray-900">Sacred Activity</h2>
                              <SacredButton size="sm" variant="secondary" href="/admin/analytics">
                View All
              </SacredButton>
              </div>
              
              <div className="space-y-4">
                {recentActivity.slice(0, 5).map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-rose-50/50 to-golden-50/50 hover:from-rose-50 hover:to-golden-50 transition-colors"
                  >
                    <div className={`p-2 rounded-lg ${
                      activity.type === 'course_completion' ? 'bg-green-100 text-green-600' :
                      activity.type === 'new_student' ? 'bg-blue-100 text-blue-600' :
                      activity.type === 'booking' ? 'bg-purple-100 text-purple-600' :
                      activity.type === 'testimonial' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-rose-100 text-rose-600'
                    }`}>
                      {activity.type === 'course_completion' && <Award className="h-4 w-4" />}
                      {activity.type === 'new_student' && <Users className="h-4 w-4" />}
                      {activity.type === 'booking' && <Calendar className="h-4 w-4" />}
                      {activity.type === 'testimonial' && <Star className="h-4 w-4" />}
                      {activity.type === 'review' && <Sparkles className="h-4 w-4" />}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900">{activity.title}</p>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {new Date(activity.timestamp).toLocaleDateString()} • {activity.user}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </SacredCard>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <SacredCard>
            <h2 className="text-xl font-serif font-semibold text-gray-900 mb-6">Sacred Actions</h2>
            
            <div className="space-y-4">
              <SacredButton 
                variant="sacred" 
                icon={Plus} 
                className="w-full justify-start"
                sacred
                href="/admin/courses"
              >
                Create New Course
              </SacredButton>
              
              <SacredButton 
                variant="primary" 
                icon={Sparkles} 
                className="w-full justify-start"
                href="/admin/services"
              >
                Add Reading Service
              </SacredButton>
              
              <SacredButton 
                variant="secondary" 
                icon={Settings} 
                className="w-full justify-start"
                href="/admin/content"
              >
                Edit Homepage
              </SacredButton>
              
              <SacredButton 
                variant="primary" 
                icon={BarChart3} 
                className="w-full justify-start"
                href="/admin/analytics"
              >
                View Analytics
              </SacredButton>
            </div>
          </SacredCard>
        </motion.div>
      </div>

      {/* Course & Service Performance */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Top Courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <SacredCard>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-serif font-semibold text-gray-900">Course Performance</h2>
              <SacredButton size="sm" variant="secondary" href="/admin/courses">
                Manage Courses
              </SacredButton>
            </div>
            
            <div className="space-y-4">
              {dummyCourses.slice(0, 3).map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="p-4 rounded-xl border border-gray-100 hover:border-rose-200 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900 group-hover:text-rose-600 transition-colors">
                      {course.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      course.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {course.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="flex items-center space-x-1">
                        <Users className="h-3 w-3" />
                        <span>{course.students} students</span>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-1">
                        <TrendingUp className="h-3 w-3" />
                        <span>{course.completionRate}% complete</span>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-1">
                        <DollarSign className="h-3 w-3" />
                        <span>{formatCurrency(course.revenue)}</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </SacredCard>
        </motion.div>

        {/* Service Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <SacredCard>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-serif font-semibold text-gray-900">Reading Services</h2>
              <SacredButton size="sm" variant="secondary" href="/admin/services">
                Manage Services
              </SacredButton>
            </div>
            
            <div className="space-y-4">
              {dummyServices.slice(0, 3).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="p-4 rounded-xl border border-gray-100 hover:border-golden-light/30 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900 group-hover:text-golden-light transition-colors">
                      {service.title}
                    </h3>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Clock className="h-3 w-3" />
                      <span>{service.duration} min</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{service.bookings} bookings</span>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-1">
                        <DollarSign className="h-3 w-3" />
                        <span>{formatCurrency(service.price)}</span>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-1">
                        <TrendingUp className="h-3 w-3" />
                        <span>{formatCurrency(service.revenue)}</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </SacredCard>
        </motion.div>
      </div>
    </div>
  )
}
