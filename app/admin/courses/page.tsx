'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Plus, 
  Search, 
  Filter, 
  Eye, 
  Edit, 
  Users, 
  DollarSign, 
  TrendingUp,
  Star,
  MoreVertical,
  Copy,
  Archive,
  Play,
  BookOpen,
  Clock,
  Target,
  Award
} from 'lucide-react'
import { SacredCard, SacredButton, SacredInput, SacredSelect } from '../../../components/admin/SacredUI'
import { dummyCourses, AdminCourse } from '../../../data/admin/dummyData'

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState<AdminCourse | null>(null)

  const filteredCourses = dummyCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = !statusFilter || course.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const formatCurrency = (amount: number) => `$${amount.toLocaleString()}`

  const statusOptions = [
    { value: '', label: 'All Statuses' },
    { value: 'published', label: 'Published' },
    { value: 'draft', label: 'Draft' },
    { value: 'archived', label: 'Archived' }
  ]

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
          <h1 className="text-3xl font-serif font-bold text-gray-900">📚 Course Studio</h1>
          <p className="text-gray-600 mt-2">Create and manage your sacred learning experiences</p>
        </div>
        
        <SacredButton 
          variant="sacred" 
          icon={Plus}
          onClick={() => setShowCreateModal(true)}
          sacred
        >
          Create New Course
        </SacredButton>
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
                <p className="text-sm font-medium text-gray-600">Total Courses</p>
                <p className="text-2xl font-bold text-gray-900">{dummyCourses.length}</p>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-rose-pink to-deep-rose text-white">
                <BookOpen className="h-5 w-5" />
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
                <p className="text-sm font-medium text-gray-600">Total Students</p>
                <p className="text-2xl font-bold text-gray-900">
                  {dummyCourses.reduce((sum, course) => sum + course.students, 0)}
                </p>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-golden-light to-yellow-400 text-white">
                <Users className="h-5 w-5" />
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
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(dummyCourses.reduce((sum, course) => sum + course.revenue, 0))}
                </p>
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
                <p className="text-sm font-medium text-gray-600">Avg Completion</p>
                <p className="text-2xl font-bold text-gray-900">
                  {Math.round(dummyCourses.reduce((sum, course) => sum + course.completionRate, 0) / dummyCourses.length)}%
                </p>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white">
                <Target className="h-5 w-5" />
              </div>
            </div>
          </SacredCard>
        </motion.div>
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <SacredCard>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <SacredInput
                placeholder="Search courses..."
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
                placeholder="Filter by status"
              />
            </div>
          </div>
        </SacredCard>
      </motion.div>

      {/* Course Grid */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="group"
          >
            <SacredCard hover className="h-full">
              <div className="space-y-4">
                {/* Course Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        course.status === 'published' ? 'bg-green-100 text-green-700' :
                        course.status === 'draft' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {course.status}
                      </span>
                      <span className="text-xs text-gray-500">{course.category}</span>
                    </div>
                    <h3 className="font-serif font-semibold text-gray-900 group-hover:text-rose-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{course.subtitle}</p>
                  </div>
                  
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreVertical className="h-4 w-4 text-gray-400" />
                  </button>
                </div>

                {/* Course Image Placeholder */}
                <div className="h-32 bg-gradient-to-br from-rose-50 to-golden-50 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-pink to-golden-light rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-xl">🌹</span>
                    </div>
                    <p className="text-sm text-gray-500">Course Preview</p>
                  </div>
                </div>

                {/* Course Stats */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{course.students} students</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Star className="h-4 w-4" />
                      <span>{course.rating} rating</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <TrendingUp className="h-4 w-4" />
                      <span>{course.completionRate}% complete</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <DollarSign className="h-4 w-4" />
                      <span>{formatCurrency(course.revenue)}</span>
                    </div>
                  </div>
                </div>

                {/* Course Actions */}
                <div className="flex space-x-2 pt-4 border-t border-gray-100">
                  <SacredButton 
                    size="sm" 
                    variant="primary" 
                    icon={Edit}
                    className="flex-1"
                  >
                    Edit
                  </SacredButton>
                  <SacredButton 
                    size="sm" 
                    variant="secondary" 
                    icon={Eye}
                    className="flex-1"
                  >
                    Preview
                  </SacredButton>
                </div>
              </div>
            </SacredCard>
          </motion.div>
        ))}
      </div>

      {/* Create Course Modal */}
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
                  <Plus className="h-8 w-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-xl font-serif font-semibold text-gray-900">Create New Course</h3>
                  <p className="text-gray-600 mt-2">Choose how you'd like to begin your new sacred course</p>
                </div>
                
                <div className="space-y-3">
                  <SacredButton variant="sacred" sacred className="w-full">
                    Start from Scratch
                  </SacredButton>
                  <SacredButton variant="primary" icon={Copy} className="w-full">
                    Duplicate Existing Course
                  </SacredButton>
                  <SacredButton variant="secondary" className="w-full">
                    Use Template
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
