'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Upload, 
  Image, 
  Video, 
  Music, 
  File,
  Search,
  Filter,
  Grid,
  List,
  Download,
  Trash2,
  Eye,
  Copy,
  MoreVertical
} from 'lucide-react'
import { SacredCard, SacredButton, SacredInput } from '../../../components/admin/SacredUI'
import { dummyMediaItems } from '../../../data/admin/dummyData'

export default function MediaLibraryPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState<'all' | 'image' | 'video' | 'audio'>('all')

  const filteredMedia = dummyMediaItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === 'all' || item.type === filterType
    return matchesSearch && matchesType
  })

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image': return <Image className="h-5 w-5" />
      case 'video': return <Video className="h-5 w-5" />
      case 'audio': return <Music className="h-5 w-5" />
      default: return <File className="h-5 w-5" />
    }
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
          <h1 className="text-3xl font-serif font-bold text-gray-900">🎬 Media Library</h1>
          <p className="text-gray-600 mt-2">Manage your sacred images, videos, and audio files</p>
        </div>
        
        <SacredButton 
          variant="sacred" 
          icon={Upload}
          sacred
        >
          Upload Media
        </SacredButton>
      </motion.div>

      {/* Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <SacredCard>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <SacredInput
                placeholder="Search media files..."
                value={searchTerm}
                onChange={setSearchTerm}
                icon={Search}
              />
            </div>
            
            <div className="flex space-x-3">
              {/* Filter Buttons */}
              <button
                onClick={() => setFilterType('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filterType === 'all'
                    ? 'bg-rose-100 text-rose-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterType('image')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  filterType === 'image'
                    ? 'bg-rose-100 text-rose-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Image className="h-4 w-4" />
                <span>Images</span>
              </button>
              <button
                onClick={() => setFilterType('video')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  filterType === 'video'
                    ? 'bg-rose-100 text-rose-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Video className="h-4 w-4" />
                <span>Videos</span>
              </button>
              <button
                onClick={() => setFilterType('audio')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  filterType === 'audio'
                    ? 'bg-rose-100 text-rose-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Music className="h-4 w-4" />
                <span>Audio</span>
              </button>
              
              {/* View Mode Toggle */}
              <div className="flex border border-gray-200 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-l-lg transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-rose-100 text-rose-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-r-lg transition-colors ${
                    viewMode === 'list'
                      ? 'bg-rose-100 text-rose-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </SacredCard>
      </motion.div>

      {/* Media Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMedia.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
            >
              <SacredCard hover className="group">
                <div className="space-y-4">
                  {/* Media Preview */}
                  <div className="aspect-video bg-gradient-to-br from-rose-50 to-golden-50 rounded-xl flex items-center justify-center relative overflow-hidden">
                    {item.type === 'image' ? (
                      <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
                        <Image className="h-12 w-12 text-gray-400" />
                      </div>
                    ) : item.type === 'video' ? (
                      <div className="w-full h-full bg-gray-800 rounded-xl flex items-center justify-center">
                        <Video className="h-12 w-12 text-white" />
                      </div>
                    ) : (
                      <div className="w-full h-full bg-purple-100 rounded-xl flex items-center justify-center">
                        <Music className="h-12 w-12 text-purple-600" />
                      </div>
                    )}
                    
                    {/* Overlay Actions */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30">
                        <Download className="h-4 w-4" />
                      </button>
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30">
                        <Copy className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  {/* File Info */}
                  <div>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2 min-w-0 flex-1">
                        <div className="p-1.5 rounded-lg bg-gradient-to-br from-rose-pink to-golden-light text-white">
                          {getFileIcon(item.type)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-medium text-gray-900 truncate">{item.name}</p>
                          <p className="text-sm text-gray-500">{formatFileSize(item.size)}</p>
                        </div>
                      </div>
                      
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreVertical className="h-4 w-4 text-gray-400" />
                      </button>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-xs text-gray-500">
                        Used in {item.usedIn.length} {item.usedIn.length === 1 ? 'location' : 'locations'}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {item.usedIn.slice(0, 2).map((location, i) => (
                          <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {location.length > 15 ? location.slice(0, 15) + '...' : location}
                          </span>
                        ))}
                        {item.usedIn.length > 2 && (
                          <span className="text-xs text-gray-500">+{item.usedIn.length - 2} more</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </SacredCard>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <SacredCard>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-700">File</th>
                    <th className="text-center py-3 px-4 font-medium text-gray-700">Type</th>
                    <th className="text-center py-3 px-4 font-medium text-gray-700">Size</th>
                    <th className="text-center py-3 px-4 font-medium text-gray-700">Used In</th>
                    <th className="text-center py-3 px-4 font-medium text-gray-700">Uploaded</th>
                    <th className="text-center py-3 px-4 font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMedia.map((item, index) => (
                    <motion.tr
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="border-b border-gray-100 hover:bg-rose-50/30 transition-colors"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-gradient-to-br from-rose-pink to-golden-light text-white">
                            {getFileIcon(item.type)}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{item.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="capitalize text-gray-600">{item.type}</span>
                      </td>
                      <td className="py-4 px-4 text-center text-gray-600">
                        {formatFileSize(item.size)}
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-gray-600">{item.usedIn.length}</span>
                      </td>
                      <td className="py-4 px-4 text-center text-gray-600">
                        {new Date(item.uploadedAt).toLocaleDateString()}
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                            <Download className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SacredCard>
        </motion.div>
      )}

      {/* Upload Zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <SacredCard borderStyle="gold">
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gradient-to-br from-golden-light to-earth-copper rounded-full flex items-center justify-center mx-auto mb-4">
              <Upload className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">Upload Sacred Media</h3>
            <p className="text-gray-600 mb-6">Drag and drop files here, or click to browse</p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <SacredButton variant="sacred" icon={Upload} sacred>
                Choose Files
              </SacredButton>
              <p className="text-sm text-gray-500">
                Supports images, videos, and audio files up to 100MB
              </p>
            </div>
          </div>
        </SacredCard>
      </motion.div>
      </div>
    </div>
  )
}
