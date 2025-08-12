'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Star, 
  Award, 
  MessageCircle,
  Search,
  Filter,
  Eye,
  Mail,
  Calendar,
  TrendingUp,
  Heart,
  BookOpen,
  Clock,
  Target,
  Zap,
  Send,
  Edit
} from 'lucide-react'
import { SacredCard, SacredButton, SacredInput, SacredSelect } from '../../../components/admin/SacredUI'

interface Student {
  id: string
  name: string
  email: string
  joinedDate: string
  coursesEnrolled: string[]
  coursesCompleted: string[]
  currentStreak: number
  totalLessons: number
  averageRating: number
  lastActive: string
  achievements: string[]
  status: 'active' | 'inactive' | 'paused'
}

export default function CommunityHubPage() {
  const [activeTab, setActiveTab] = useState<'students' | 'achievements' | 'communications' | 'insights'>('students')
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('')

  // Mock student data
  const students: Student[] = [
    {
      id: 'student-1',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      joinedDate: '2024-01-15',
      coursesEnrolled: ['Rose Meditation Level 1', 'Advanced Energy Work'],
      coursesCompleted: ['Rose Meditation Level 1'],
      currentStreak: 12,
      totalLessons: 45,
      averageRating: 4.9,
      lastActive: '2024-03-15',
      achievements: ['First Course Complete', '7-Day Streak', 'Sacred Dedication'],
      status: 'active'
    },
    {
      id: 'student-2',
      name: 'Michael Chen',
      email: 'michael@example.com',
      joinedDate: '2024-02-01',
      coursesEnrolled: ['Advanced Energy Work', 'Sacred Chakra Healing'],
      coursesCompleted: [],
      currentStreak: 5,
      totalLessons: 23,
      averageRating: 4.7,
      lastActive: '2024-03-14',
      achievements: ['First Lesson', 'Rising Star'],
      status: 'active'
    },
    {
      id: 'student-3',
      name: 'Emma Wilson',
      email: 'emma@example.com',
      joinedDate: '2024-01-20',
      coursesEnrolled: ['Rose Meditation Level 1'],
      coursesCompleted: ['Rose Meditation Level 1'],
      currentStreak: 0,
      totalLessons: 32,
      averageRating: 5.0,
      lastActive: '2024-03-10',
      achievements: ['Perfect Student', 'Course Master', '30-Day Streak'],
      status: 'inactive'
    }
  ]

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = !statusFilter || student.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const statusOptions = [
    { value: '', label: 'All Students' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'paused', label: 'Paused' }
  ]

  const communityStats = [
    { title: 'Total Students', value: '342', icon: Users, color: 'rose' },
    { title: 'Active This Week', value: '89', icon: Zap, color: 'golden' },
    { title: 'Course Completions', value: '127', icon: Award, color: 'copper' },
    { title: 'Avg Satisfaction', value: '4.8', icon: Star, color: 'rose' }
  ]

  const achievements = [
    { name: 'First Lesson', description: 'Completed their first lesson', icon: '🌱', rarity: 'common', earned: 342 },
    { name: '7-Day Streak', description: 'Maintained 7 consecutive days', icon: '🔥', rarity: 'uncommon', earned: 89 },
    { name: 'Course Master', description: 'Completed entire course', icon: '🏆', rarity: 'rare', earned: 45 },
    { name: 'Sacred Dedication', description: '30-day learning streak', icon: '✨', rarity: 'legendary', earned: 12 }
  ]

  const tabs = [
    { id: 'students', label: 'Student Management', icon: Users },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'communications', label: 'Communications', icon: MessageCircle },
    { id: 'insights', label: 'Community Insights', icon: TrendingUp }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700'
      case 'inactive': return 'bg-gray-100 text-gray-700'
      case 'paused': return 'bg-yellow-100 text-yellow-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-300 bg-gray-50'
      case 'uncommon': return 'border-blue-300 bg-blue-50'
      case 'rare': return 'border-purple-300 bg-purple-50'
      case 'legendary': return 'border-yellow-300 bg-yellow-50'
      default: return 'border-gray-300 bg-gray-50'
    }
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0"
      >
        <div>
          <h1 className="text-3xl font-serif font-bold text-gray-900">👥 Community Hub</h1>
          <p className="text-gray-600 mt-2">Nurture and support your sacred learning community</p>
        </div>
        
        <SacredButton 
          variant="sacred" 
          icon={Send}
          sacred
        >
          Send Announcement
        </SacredButton>
      </motion.div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {communityStats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
          >
            <SacredCard hover className="group">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {stat.value}
                  </p>
                </div>
                
                <div className={`p-3 rounded-xl bg-gradient-to-br ${
                  stat.color === 'rose' ? 'from-rose-pink to-deep-rose' :
                  stat.color === 'golden' ? 'from-golden-light to-yellow-400' :
                  'from-earth-copper to-orange-600'
                } text-white group-hover:scale-110 transition-transform`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </SacredCard>
          </motion.div>
        ))}
      </div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
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

          {/* Students Tab */}
          {activeTab === 'students' && (
            <div className="space-y-6">
              {/* Search and Filter */}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <SacredInput
                    placeholder="Search students by name or email..."
                    value={searchTerm}
                    onChange={setSearchTerm}
                    icon={Search}
                  />
                </div>
                <div className="lg:w-48">
                  <SacredSelect
                    value={statusFilter}
                    onChange={setStatusFilter}
                    options={statusOptions}
                  />
                </div>
              </div>

              {/* Students List */}
              <div className="space-y-4">
                {filteredStudents.map((student, index) => (
                  <motion.div
                    key={student.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <SacredCard hover>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-rose-pink to-golden-light rounded-full flex items-center justify-center text-white font-semibold">
                            {student.name.charAt(0)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-3">
                              <h3 className="font-semibold text-gray-900">{student.name}</h3>
                              <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(student.status)}`}>
                                {student.status}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">{student.email}</p>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                              <span className="flex items-center space-x-1">
                                <Calendar className="h-3 w-3" />
                                <span>Joined {new Date(student.joinedDate).toLocaleDateString()}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <BookOpen className="h-3 w-3" />
                                <span>{student.coursesEnrolled.length} courses</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Zap className="h-3 w-3" />
                                <span>{student.currentStreak} day streak</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-6">
                          <div className="text-center">
                            <div className="flex items-center space-x-1 text-yellow-500">
                              <Star className="h-4 w-4 fill-current" />
                              <span className="font-semibold">{student.averageRating}</span>
                            </div>
                            <p className="text-xs text-gray-500">Rating</p>
                          </div>
                          
                          <div className="text-center">
                            <p className="font-semibold text-gray-900">{student.totalLessons}</p>
                            <p className="text-xs text-gray-500">Lessons</p>
                          </div>
                          
                          <div className="text-center">
                            <p className="font-semibold text-gray-900">{student.achievements.length}</p>
                            <p className="text-xs text-gray-500">Badges</p>
                          </div>

                          <div className="flex space-x-2">
                            <SacredButton size="sm" variant="secondary" icon={Eye}>
                              View
                            </SacredButton>
                            <SacredButton size="sm" variant="primary" icon={Mail}>
                              Contact
                            </SacredButton>
                          </div>
                        </div>
                      </div>
                    </SacredCard>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sacred Achievements</h3>
                <p className="text-gray-600">Recognize and celebrate your students' spiritual journey milestones</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <SacredCard className={`border-2 ${getRarityColor(achievement.rarity)}`}>
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">{achievement.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">{achievement.name}</h4>
                            <span className={`px-2 py-1 text-xs rounded-full capitalize ${
                              achievement.rarity === 'legendary' ? 'bg-yellow-100 text-yellow-700' :
                              achievement.rarity === 'rare' ? 'bg-purple-100 text-purple-700' :
                              achievement.rarity === 'uncommon' ? 'bg-blue-100 text-blue-700' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {achievement.rarity}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">
                              Earned by {achievement.earned} students
                            </span>
                            <SacredButton size="sm" variant="secondary" icon={Edit}>
                              Edit
                            </SacredButton>
                          </div>
                        </div>
                      </div>
                    </SacredCard>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <SacredButton variant="primary" icon={Award}>
                  Create New Achievement
                </SacredButton>
              </div>
            </div>
          )}

          {/* Communications Tab */}
          {activeTab === 'communications' && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Communications</h3>
                <p className="text-gray-600">Send announcements and messages to your sacred community</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <SacredCard>
                  <h4 className="font-semibold text-gray-900 mb-4">Send Announcement</h4>
                  <div className="space-y-4">
                    <SacredInput
                      label="Subject"
                      placeholder="Announcement subject..."
                    />
                    <SacredSelect
                      label="Recipients"
                      options={[
                        { value: 'all', label: 'All Students' },
                        { value: 'active', label: 'Active Students Only' },
                        { value: 'course_specific', label: 'Specific Course Students' }
                      ]}
                      value="all"
                      onChange={() => {}}
                    />
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Message</label>
                      <textarea
                        rows={6}
                        className="block w-full rounded-xl border-gray-200 bg-white/50 backdrop-blur-sm shadow-sm focus:border-rose-pink focus:ring-rose-pink transition-colors duration-200 px-4 py-3 resize-none"
                        placeholder="Your sacred message to the community..."
                      />
                    </div>
                    <SacredButton variant="sacred" icon={Send} sacred className="w-full">
                      Send to Community
                    </SacredButton>
                  </div>
                </SacredCard>

                <SacredCard>
                  <h4 className="font-semibold text-gray-900 mb-4">Recent Communications</h4>
                  <div className="space-y-4">
                    <div className="p-3 bg-rose-50 rounded-xl">
                      <div className="flex items-start justify-between">
                        <div>
                          <h5 className="font-medium text-gray-900">New Course Launch</h5>
                          <p className="text-sm text-gray-600 mt-1">Announced Advanced Chakra Healing course</p>
                          <p className="text-xs text-gray-500 mt-2">Sent to 342 students • March 10</p>
                        </div>
                        <span className="text-green-600 text-sm">Delivered</span>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-golden-50 rounded-xl">
                      <div className="flex items-start justify-between">
                        <div>
                          <h5 className="font-medium text-gray-900">Weekly Meditation Reminder</h5>
                          <p className="text-sm text-gray-600 mt-1">Gentle reminder for practice consistency</p>
                          <p className="text-xs text-gray-500 mt-2">Sent to 89 active students • March 8</p>
                        </div>
                        <span className="text-green-600 text-sm">Delivered</span>
                      </div>
                    </div>
                  </div>
                </SacredCard>
              </div>
            </div>
          )}

          {/* Community Insights Tab */}
          {activeTab === 'insights' && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Insights</h3>
                <p className="text-gray-600">Understand your community's growth and engagement patterns</p>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                <SacredCard className="lg:col-span-2">
                  <h4 className="font-semibold text-gray-900 mb-4">Community Growth</h4>
                  <div className="h-64 bg-gradient-to-br from-rose-50 to-golden-50 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="h-12 w-12 text-rose-pink mx-auto mb-4" />
                      <p className="text-gray-600">Community Growth Chart</p>
                      <p className="text-sm text-gray-500 mt-1">+23% growth this month</p>
                    </div>
                  </div>
                </SacredCard>

                <div className="space-y-6">
                  <SacredCard>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900">Community Health</h4>
                      <p className="text-2xl font-bold text-green-600 mt-2">Excellent</p>
                      <p className="text-sm text-gray-600 mt-1">High engagement & satisfaction</p>
                    </div>
                  </SacredCard>

                  <SacredCard>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900">Retention Rate</h4>
                      <p className="text-2xl font-bold text-purple-600 mt-2">84%</p>
                      <p className="text-sm text-gray-600 mt-1">Above industry average</p>
                    </div>
                  </SacredCard>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl text-center">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">24 min</p>
                  <p className="text-sm text-gray-600">Avg Session Time</p>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl text-center">
                  <Zap className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">12 days</p>
                  <p className="text-sm text-gray-600">Avg Learning Streak</p>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl text-center">
                  <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">4.8/5</p>
                  <p className="text-sm text-gray-600">Community Rating</p>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl text-center">
                  <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">68%</p>
                  <p className="text-sm text-gray-600">Mobile Usage</p>
                </div>
              </div>
            </div>
          )}
        </SacredCard>
      </motion.div>
    </div>
  )
}

