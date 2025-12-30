'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Save, 
  Eye, 
  Plus, 
  Trash2, 
  GripVertical,
  Play,
  Upload,
  Type,
  Quote,
  List,
  AlertCircle,
  Image,
  Video,
  Music,
  Bot,
  Sparkles,
  BookOpen,
  Clock,
  Target
} from 'lucide-react'
import { SacredCard, SacredButton, SacredInput, SacredTextarea, SacredSelect } from '../../../../../../components/admin/SacredUI'

interface ContentBlock {
  id: string
  type: 'text' | 'quote' | 'visualization' | 'step_by_step' | 'tip' | 'warning'
  content: string
  emphasis?: 'normal' | 'highlight' | 'sacred'
  icon?: string
  order: number
}

interface LessonForm {
  title: string
  subtitle: string
  type: 'video' | 'audio' | 'guided_practice' | 'reflection' | 'assessment'
  duration: number
  introduction: string
  contentBlocks: ContentBlock[]
  keyTakeaways: string[]
  practiceTitle: string
  practiceInstructions: string[]
  reflectionPrompts: string[]
  aiPersona: string
  aiSystemPrompt: string
  aiSuggestedQuestions: string[]
}

export default function NewLessonPage() {
  const [lesson, setLesson] = useState<LessonForm>({
    title: '',
    subtitle: '',
    type: 'guided_practice',
    duration: 0,
    introduction: '',
    contentBlocks: [],
    keyTakeaways: [''],
    practiceTitle: '',
    practiceInstructions: [''],
    reflectionPrompts: [''],
    aiPersona: 'The Aura AI',
    aiSystemPrompt: '',
    aiSuggestedQuestions: ['']
  })

  const [activeTab, setActiveTab] = useState<'content' | 'practice' | 'ai' | 'preview'>('content')

  const lessonTypes = [
    { value: 'video', label: 'Video Lesson' },
    { value: 'audio', label: 'Audio/Guided Meditation' },
    { value: 'guided_practice', label: 'Guided Practice' },
    { value: 'reflection', label: 'Reflection Exercise' },
    { value: 'assessment', label: 'Knowledge Check' }
  ]

  const contentBlockTypes = [
    { type: 'text', label: 'Text Block', icon: Type, color: 'gray' },
    { type: 'quote', label: 'Sacred Quote', icon: Quote, color: 'rose' },
    { type: 'visualization', label: 'Visualization', icon: Eye, color: 'golden' },
    { type: 'step_by_step', label: 'Step-by-Step', icon: List, color: 'copper' },
    { type: 'tip', label: 'Helpful Tip', icon: Sparkles, color: 'blue' },
    { type: 'warning', label: 'Important Note', icon: AlertCircle, color: 'red' }
  ]

  const emphasisOptions = [
    { value: 'normal', label: 'Normal' },
    { value: 'highlight', label: 'Highlight' },
    { value: 'sacred', label: 'Sacred' }
  ]

  const addContentBlock = (type: ContentBlock['type']) => {
    const newBlock: ContentBlock = {
      id: `block_${Date.now()}`,
      type,
      content: '',
      emphasis: 'normal',
      order: lesson.contentBlocks.length
    }
    setLesson(prev => ({
      ...prev,
      contentBlocks: [...prev.contentBlocks, newBlock]
    }))
  }

  const updateContentBlock = (blockId: string, updates: Partial<ContentBlock>) => {
    setLesson(prev => ({
      ...prev,
      contentBlocks: prev.contentBlocks.map(block => 
        block.id === blockId ? { ...block, ...updates } : block
      )
    }))
  }

  const deleteContentBlock = (blockId: string) => {
    setLesson(prev => ({
      ...prev,
      contentBlocks: prev.contentBlocks.filter(block => block.id !== blockId)
    }))
  }

  const addArrayItem = (field: 'keyTakeaways' | 'practiceInstructions' | 'reflectionPrompts' | 'aiSuggestedQuestions') => {
    setLesson(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }))
  }

  const updateArrayItem = (field: 'keyTakeaways' | 'practiceInstructions' | 'reflectionPrompts' | 'aiSuggestedQuestions', index: number, value: string) => {
    setLesson(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }))
  }

  const removeArrayItem = (field: 'keyTakeaways' | 'practiceInstructions' | 'reflectionPrompts' | 'aiSuggestedQuestions', index: number) => {
    setLesson(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }))
  }

  const tabs = [
    { id: 'content', label: 'Content', icon: BookOpen },
    { id: 'practice', label: 'Practice', icon: Target },
    { id: 'ai', label: 'AI Assistant', icon: Bot },
    { id: 'preview', label: 'Preview', icon: Eye }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-golden-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0"
        >
          <div>
            <h1 className="text-3xl font-serif font-bold text-gray-900">🌹 Lesson Builder</h1>
            <p className="text-gray-600 mt-2">Create a new sacred learning experience</p>
          </div>
          
          <div className="flex space-x-3">
            <SacredButton variant="secondary" icon={Eye}>
              Preview Lesson
            </SacredButton>
            <SacredButton variant="sacred" icon={Save} sacred>
              Save Lesson
            </SacredButton>
          </div>
        </motion.div>

        {/* Lesson Basic Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <SacredCard>
            <h2 className="text-lg font-serif font-semibold text-gray-900 mb-4">Lesson Details</h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <SacredInput
                  label="Lesson Title"
                  placeholder="e.g., Deep Grounding Practice"
                  value={lesson.title}
                  onChange={(value) => setLesson(prev => ({ ...prev, title: value }))}
                  required
                />
                
                <SacredInput
                  label="Subtitle"
                  placeholder="e.g., Establishing Your Sacred Connection"
                  value={lesson.subtitle}
                  onChange={(value) => setLesson(prev => ({ ...prev, subtitle: value }))}
                />
              </div>
              
              <div className="space-y-4">
                <SacredSelect
                  label="Lesson Type"
                  value={lesson.type}
                  onChange={(value) => setLesson(prev => ({ ...prev, type: value as LessonForm['type'] }))}
                  options={lessonTypes}
                  required
                />
                
                <SacredInput
                  label="Duration (minutes)"
                  type="number"
                  placeholder="0"
                  value={lesson.duration.toString()}
                  onChange={(value) => setLesson(prev => ({ ...prev, duration: parseInt(value) || 0 }))}
                  icon={Clock}
                />
              </div>
            </div>
          </SacredCard>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
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

            {/* Content Tab */}
            {activeTab === 'content' && (
              <div className="space-y-6">
                <SacredTextarea
                  label="Introduction"
                  placeholder="Welcome your students to this sacred practice..."
                  value={lesson.introduction}
                  onChange={(value) => setLesson(prev => ({ ...prev, introduction: value }))}
                  rows={3}
                  helpText="Set the tone and intention for this lesson"
                />

                {/* Content Blocks */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-md font-semibold text-gray-900">Content Blocks</h3>
                  </div>
                  
                  {/* Add Content Block Buttons */}
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                    {contentBlockTypes.map((blockType) => (
                      <button
                        key={blockType.type}
                        onClick={() => addContentBlock(blockType.type as ContentBlock['type'])}
                        className="flex items-center space-x-2 p-3 rounded-xl border-2 border-dashed border-gray-200 hover:border-rose-200 hover:bg-rose-50/50 transition-all group"
                      >
                        <blockType.icon className={`h-4 w-4 text-${blockType.color}-500 group-hover:text-rose-600`} />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900">{blockType.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Content Blocks */}
                  <div className="space-y-4">
                    {lesson.contentBlocks.map((block, index) => (
                      <motion.div
                        key={block.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 border border-gray-200 rounded-xl space-y-4"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <GripVertical className="h-4 w-4 text-gray-400 cursor-move" />
                            <span className="text-sm font-medium text-gray-700">
                              {contentBlockTypes.find(t => t.type === block.type)?.label} #{index + 1}
                            </span>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <SacredSelect
                              value={block.emphasis || 'normal'}
                              onChange={(value) => updateContentBlock(block.id, { emphasis: value as ContentBlock['emphasis'] })}
                              options={emphasisOptions}
                              className="w-32"
                            />
                            <button
                              onClick={() => deleteContentBlock(block.id)}
                              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        
                        <SacredTextarea
                          placeholder={`Enter your ${block.type} content...`}
                          value={block.content}
                          onChange={(value) => updateContentBlock(block.id, { content: value })}
                          rows={3}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Key Takeaways */}
                <div className="space-y-4">
                  <h3 className="text-md font-semibold text-gray-900">Key Takeaways</h3>
                  {lesson.keyTakeaways.map((takeaway, index) => (
                    <div key={index} className="flex space-x-2">
                      <SacredInput
                        placeholder={`Key takeaway #${index + 1}`}
                        value={takeaway}
                        onChange={(value) => updateArrayItem('keyTakeaways', index, value)}
                        className="flex-1"
                      />
                      {lesson.keyTakeaways.length > 1 && (
                        <button
                          onClick={() => removeArrayItem('keyTakeaways', index)}
                          className="p-3 text-red-500 hover:bg-red-50 rounded-lg"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  ))}
                  <SacredButton
                    variant="secondary"
                    icon={Plus}
                    size="sm"
                    onClick={() => addArrayItem('keyTakeaways')}
                  >
                    Add Takeaway
                  </SacredButton>
                </div>
              </div>
            )}

            {/* Practice Tab */}
            {activeTab === 'practice' && (
              <div className="space-y-6">
                <SacredInput
                  label="Practice Exercise Title"
                  placeholder="e.g., Sacred Space Activation"
                  value={lesson.practiceTitle}
                  onChange={(value) => setLesson(prev => ({ ...prev, practiceTitle: value }))}
                />

                <div className="space-y-4">
                  <h3 className="text-md font-semibold text-gray-900">Practice Instructions</h3>
                  {lesson.practiceInstructions.map((instruction, index) => (
                    <div key={index} className="flex space-x-2">
                      <div className="flex-shrink-0 w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center text-sm font-medium text-rose-600 mt-2">
                        {index + 1}
                      </div>
                      <SacredTextarea
                        placeholder={`Step ${index + 1} instructions...`}
                        value={instruction}
                        onChange={(value) => updateArrayItem('practiceInstructions', index, value)}
                        className="flex-1"
                        rows={2}
                      />
                      {lesson.practiceInstructions.length > 1 && (
                        <button
                          onClick={() => removeArrayItem('practiceInstructions', index)}
                          className="p-3 text-red-500 hover:bg-red-50 rounded-lg mt-2"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  ))}
                  <SacredButton
                    variant="secondary"
                    icon={Plus}
                    size="sm"
                    onClick={() => addArrayItem('practiceInstructions')}
                  >
                    Add Instruction Step
                  </SacredButton>
                </div>

                <div className="space-y-4">
                  <h3 className="text-md font-semibold text-gray-900">Reflection Prompts</h3>
                  {lesson.reflectionPrompts.map((prompt, index) => (
                    <div key={index} className="flex space-x-2">
                      <SacredInput
                        placeholder={`Reflection question #${index + 1}`}
                        value={prompt}
                        onChange={(value) => updateArrayItem('reflectionPrompts', index, value)}
                        className="flex-1"
                      />
                      {lesson.reflectionPrompts.length > 1 && (
                        <button
                          onClick={() => removeArrayItem('reflectionPrompts', index)}
                          className="p-3 text-red-500 hover:bg-red-50 rounded-lg"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  ))}
                  <SacredButton
                    variant="secondary"
                    icon={Plus}
                    size="sm"
                    onClick={() => addArrayItem('reflectionPrompts')}
                  >
                    Add Reflection Prompt
                  </SacredButton>
                </div>
              </div>
            )}

            {/* AI Assistant Tab */}
            {activeTab === 'ai' && (
              <div className="space-y-6">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <div className="flex items-center space-x-3 mb-2">
                    <Bot className="h-5 w-5 text-blue-600" />
                    <h3 className="font-semibold text-gray-900">AI Assistant Configuration</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Configure the AI assistant to provide personalized support for this lesson
                  </p>
                </div>

                <SacredInput
                  label="AI Persona"
                  value={lesson.aiPersona}
                  onChange={(value) => setLesson(prev => ({ ...prev, aiPersona: value }))}
                  helpText="How should the AI introduce itself to students?"
                />

                <SacredTextarea
                  label="System Prompt"
                  placeholder="You are The Aura AI, guiding students through [lesson topic]..."
                  value={lesson.aiSystemPrompt}
                  onChange={(value) => setLesson(prev => ({ ...prev, aiSystemPrompt: value }))}
                  rows={4}
                  helpText="Instructions for how the AI should behave and respond"
                />

                <div className="space-y-4">
                  <h3 className="text-md font-semibold text-gray-900">Suggested Questions</h3>
                  {lesson.aiSuggestedQuestions.map((question, index) => (
                    <div key={index} className="flex space-x-2">
                      <SacredInput
                        placeholder={`Suggested question #${index + 1}`}
                        value={question}
                        onChange={(value) => updateArrayItem('aiSuggestedQuestions', index, value)}
                        className="flex-1"
                      />
                      {lesson.aiSuggestedQuestions.length > 1 && (
                        <button
                          onClick={() => removeArrayItem('aiSuggestedQuestions', index)}
                          className="p-3 text-red-500 hover:bg-red-50 rounded-lg"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  ))}
                  <SacredButton
                    variant="secondary"
                    icon={Plus}
                    size="sm"
                    onClick={() => addArrayItem('aiSuggestedQuestions')}
                  >
                    Add Suggested Question
                  </SacredButton>
                </div>
              </div>
            )}

            {/* Preview Tab */}
            {activeTab === 'preview' && (
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-br from-rose-50 to-golden-50 rounded-xl">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-serif font-bold text-gray-900">{lesson.title || 'Untitled Lesson'}</h2>
                    {lesson.subtitle && (
                      <p className="text-gray-600 mt-2">{lesson.subtitle}</p>
                    )}
                    <div className="flex items-center justify-center space-x-4 mt-4 text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{lesson.duration} minutes</span>
                      </span>
                      <span className="capitalize">{lesson.type.replace('_', ' ')}</span>
                    </div>
                  </div>

                  {lesson.introduction && (
                    <div className="mb-6">
                      <p className="text-gray-700 leading-relaxed">{lesson.introduction}</p>
                    </div>
                  )}

                  {lesson.contentBlocks.length > 0 && (
                    <div className="space-y-4">
                      {lesson.contentBlocks.map((block) => (
                        <div key={block.id} className={`p-4 rounded-xl ${
                          block.emphasis === 'sacred' ? 'bg-gradient-to-r from-rose-50 to-golden-50 border border-rose-200' :
                          block.emphasis === 'highlight' ? 'bg-yellow-50 border border-yellow-200' :
                          'bg-white border border-gray-200'
                        }`}>
                          <p className="text-gray-700">{block.content}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 p-4 bg-white rounded-xl border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">This is how the lesson will appear to students</h4>
                    <p className="text-sm text-gray-600">Complete all tabs to see the full preview</p>
                  </div>
                </div>
              </div>
            )}
          </SacredCard>
        </motion.div>
      </div>
    </div>
  )
}
