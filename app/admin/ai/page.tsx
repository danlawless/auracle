'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Bot, 
  Settings, 
  MessageSquare,
  Brain,
  Sparkles,
  Save,
  Play,
  Eye,
  Edit,
  Plus,
  Trash2,
  Copy
} from 'lucide-react'
import { SacredCard, SacredButton, SacredInput, SacredTextarea, SacredSelect } from '../../../components/admin/SacredUI'

export default function AIAssistantPage() {
  const [activeTab, setActiveTab] = useState<'global' | 'courses' | 'chat' | 'advanced'>('global')

  // Mock AI configurations
  const [globalConfig, setGlobalConfig] = useState({
    persona: 'The Auracle AI',
    basePersonality: 'wise_guide',
    responseStyle: 'gentle_encouraging',
    knowledgeBase: 'Complete knowledge of Rose Meditation, energy work, spiritual practices, and The Auracle teachings.',
    defaultGreeting: 'Beloved, I\'m here to support you on your sacred journey. How may I assist you today?',
    escalationTriggers: ['technical issues', 'payment problems', 'urgent concerns']
  })

  const [courseConfigs] = useState([
    {
      id: 'rm-level-1',
      courseName: 'Rose Meditation Level 1',
      persona: 'Gentle Rose Guide',
      systemPrompt: 'You are a gentle guide for students beginning their Rose Meditation journey...',
      suggestedQuestions: [
        'What is Rose Meditation?',
        'How do I create sacred space?',
        'What if I feel distracted during practice?'
      ],
      lastUpdated: '2024-03-10'
    },
    {
      id: 'advanced-energy',
      courseName: 'Advanced Energy Work',
      persona: 'Master Energy Guide',
      systemPrompt: 'You are an advanced guide for experienced practitioners...',
      suggestedQuestions: [
        'How do I work with challenging energies?',
        'What are advanced grounding techniques?',
        'How do I maintain boundaries in energy work?'
      ],
      lastUpdated: '2024-03-08'
    }
  ])

  const personalityOptions = [
    { value: 'wise_guide', label: 'Wise Guide - Ancient wisdom with gentle guidance' },
    { value: 'gentle_teacher', label: 'Gentle Teacher - Nurturing and educational' },
    { value: 'meditation_guide', label: 'Meditation Guide - Focused on practice and presence' },
    { value: 'sacred_companion', label: 'Sacred Companion - Supportive and understanding' }
  ]

  const responseStyleOptions = [
    { value: 'gentle_encouraging', label: 'Gentle & Encouraging' },
    { value: 'wise_direct', label: 'Wise & Direct' },
    { value: 'nurturing_detailed', label: 'Nurturing & Detailed' },
    { value: 'mystical_poetic', label: 'Mystical & Poetic' }
  ]

  const tabs = [
    { id: 'global', label: 'Global Settings', icon: Settings },
    { id: 'courses', label: 'Course AI', icon: Bot },
    { id: 'chat', label: 'Chat Testing', icon: MessageSquare },
    { id: 'advanced', label: 'Advanced', icon: Brain }
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
          <h1 className="text-3xl font-serif font-bold text-gray-900">🤖 AI Assistant</h1>
          <p className="text-gray-600 mt-2">Configure your sacred AI guides and assistants</p>
        </div>
        
        <div className="flex space-x-3">
          <SacredButton variant="secondary" icon={Eye}>
            Preview Chat
          </SacredButton>
          <SacredButton variant="sacred" icon={Save} sacred>
            Save All Changes
          </SacredButton>
        </div>
      </motion.div>

      {/* Tab Navigation */}
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

          {/* Global Settings Tab */}
          {activeTab === 'global' && (
            <div className="space-y-6">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                <div className="flex items-center space-x-3 mb-2">
                  <Settings className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Global AI Configuration</h3>
                </div>
                <p className="text-sm text-gray-600">
                  These settings apply to all AI assistants across your platform
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <SacredInput
                  label="AI Persona Name"
                  value={globalConfig.persona}
                  onChange={(value) => setGlobalConfig(prev => ({ ...prev, persona: value }))}
                  placeholder="e.g., The Auracle AI"
                />
                
                <SacredSelect
                  label="Base Personality"
                  value={globalConfig.basePersonality}
                  onChange={(value) => setGlobalConfig(prev => ({ ...prev, basePersonality: value }))}
                  options={personalityOptions}
                />
              </div>

              <SacredSelect
                label="Response Style"
                value={globalConfig.responseStyle}
                onChange={(value) => setGlobalConfig(prev => ({ ...prev, responseStyle: value }))}
                options={responseStyleOptions}
              />

              <SacredTextarea
                label="Knowledge Base"
                value={globalConfig.knowledgeBase}
                onChange={(value) => setGlobalConfig(prev => ({ ...prev, knowledgeBase: value }))}
                rows={4}
                helpText="Core knowledge and context for all AI interactions"
              />

              <SacredTextarea
                label="Default Greeting"
                value={globalConfig.defaultGreeting}
                onChange={(value) => setGlobalConfig(prev => ({ ...prev, defaultGreeting: value }))}
                rows={2}
                helpText="How the AI introduces itself to new users"
              />

              <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                  <Sparkles className="h-4 w-4 text-yellow-600" />
                  <span>Escalation Triggers</span>
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Keywords or topics that should escalate to human support
                </p>
                <div className="flex flex-wrap gap-2">
                  {globalConfig.escalationTriggers.map((trigger, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm flex items-center space-x-2"
                    >
                      <span>{trigger}</span>
                      <button className="text-gray-400 hover:text-red-500">
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                  <button className="px-3 py-1 border border-dashed border-gray-300 text-gray-500 rounded-full text-sm hover:border-gray-400">
                    + Add Trigger
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Course AI Tab */}
          {activeTab === 'courses' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Course-Specific AI Configuration</h3>
                  <p className="text-gray-600">Customize AI assistants for individual courses</p>
                </div>
                <SacredButton variant="primary" icon={Plus}>
                  Configure New Course
                </SacredButton>
              </div>

              <div className="space-y-4">
                {courseConfigs.map((config, index) => (
                  <motion.div
                    key={config.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <SacredCard hover>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 rounded-xl bg-gradient-to-br from-rose-pink to-golden-light text-white">
                            <Bot className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{config.courseName}</h4>
                            <p className="text-sm text-gray-600 mt-1">Persona: {config.persona}</p>
                            <p className="text-sm text-gray-500 mt-2">
                              {config.suggestedQuestions.length} suggested questions configured
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              Last updated: {new Date(config.lastUpdated).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <SacredButton size="sm" variant="secondary" icon={Eye}>
                            Preview
                          </SacredButton>
                          <SacredButton size="sm" variant="primary" icon={Edit}>
                            Configure
                          </SacredButton>
                        </div>
                      </div>
                    </SacredCard>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Chat Testing Tab */}
          {activeTab === 'chat' && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Chat Testing</h3>
                <p className="text-gray-600">Test your AI assistant configurations in real-time</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Test Configuration</h4>
                  <div className="space-y-4">
                    <SacredSelect
                      label="Test Mode"
                      options={[
                        { value: 'global', label: 'Global AI Assistant' },
                        { value: 'rm-level-1', label: 'Rose Meditation Level 1' },
                        { value: 'advanced-energy', label: 'Advanced Energy Work' }
                      ]}
                      value="global"
                      onChange={() => {}}
                    />
                    
                    <SacredButton variant="primary" icon={Play} className="w-full">
                      Start Test Chat
                    </SacredButton>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Chat Preview</h4>
                  <div className="h-96 border border-gray-200 rounded-xl p-4 bg-gray-50 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MessageSquare className="h-12 w-12 mx-auto mb-3" />
                      <p>Start a test chat to preview AI responses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Advanced Tab */}
          {activeTab === 'advanced' && (
            <div className="space-y-6">
              <div className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl">
                <div className="flex items-center space-x-3 mb-2">
                  <Brain className="h-5 w-5 text-purple-600" />
                  <h3 className="font-semibold text-gray-900">Advanced AI Settings</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Fine-tune AI behavior and integration settings
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <SacredCard>
                  <h4 className="font-semibold text-gray-900 mb-4">API Configuration</h4>
                  <div className="space-y-4">
                    <SacredSelect
                      label="AI Model"
                      options={[
                        { value: 'gpt-4', label: 'GPT-4 (Recommended)' },
                        { value: 'gpt-3.5-turbo', label: 'GPT-3.5 Turbo' },
                        { value: 'claude-3', label: 'Claude 3' }
                      ]}
                      value="gpt-4"
                      onChange={() => {}}
                    />
                    
                    <SacredInput
                      label="Temperature"
                      type="number"
                      value="0.7"
                      helpText="Controls creativity (0-1)"
                    />
                    
                    <SacredInput
                      label="Max Tokens"
                      type="number"
                      value="500"
                      helpText="Maximum response length"
                    />
                  </div>
                </SacredCard>

                <SacredCard>
                  <h4 className="font-semibold text-gray-900 mb-4">Response Guidelines</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Filter inappropriate content</span>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-rose-pink">
                        <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Include source references</span>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-rose-pink">
                        <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Auto-escalate technical issues</span>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-rose-pink">
                        <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                      </button>
                    </div>
                  </div>
                </SacredCard>
              </div>

              <SacredCard>
                <h4 className="font-semibold text-gray-900 mb-4">Integration Settings</h4>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium text-gray-700">Course Chat Integration</span>
                        <p className="text-xs text-gray-500">Enable AI chat in course lessons</p>
                      </div>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-rose-pink">
                        <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium text-gray-700">Website Chat Widget</span>
                        <p className="text-xs text-gray-500">Show AI assistant on main website</p>
                      </div>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
                        <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium text-gray-700">Email Auto-responses</span>
                        <p className="text-xs text-gray-500">AI-powered email support</p>
                      </div>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
                        <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium text-gray-700">Analytics Tracking</span>
                        <p className="text-xs text-gray-500">Track AI interaction metrics</p>
                      </div>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-rose-pink">
                        <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </SacredCard>
            </div>
          )}
        </SacredCard>
      </motion.div>
      </div>
    </div>
  )
}

