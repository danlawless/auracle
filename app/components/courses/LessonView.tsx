'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Play, 
  Pause, 
  CheckCircle, 
  Circle, 
  MessageCircle, 
  X, 
  Send, 
  Lightbulb,
  Clock,
  BookOpen,
  Heart,
  Sun,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  FileText,
  Target,
  Brain,
  Award
} from 'lucide-react'
import { Lesson } from '../../../types/course'
import FloatingAIAssistant from './FloatingAIAssistant'

interface LessonViewProps {
  lesson: Lesson
  onComplete: (lessonId: string, notes?: string) => void
  onNext: () => void
  onPrevious: () => void
  hasNext: boolean
  hasPrevious: boolean
  progress: {
    current: number
    total: number
    percentage: number
  }
}

interface ChatMessage {
  id: string
  text: string
  sender: 'user' | 'assistant'
  timestamp: Date
}

const LessonView: React.FC<LessonViewProps> = ({
  lesson,
  onComplete,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
  progress
}) => {
  const [isCompleted, setIsCompleted] = useState(lesson.isCompleted || false)
  const [userNotes, setUserNotes] = useState(lesson.userNotes || '')
  const [showAIAssistant, setShowAIAssistant] = useState(false)
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [currentCheckpoint, setCurrentCheckpoint] = useState(0)
  const [checkpointResponses, setCheckpointResponses] = useState<{[key: string]: string}>({})
  const [showCompletionForm, setShowCompletionForm] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const chatEndRef = useRef<HTMLDivElement>(null)

  // Ensure page starts at top when lesson loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [lesson.id])

  // Auto-scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatMessages])

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: message.trim(),
      sender: 'user',
      timestamp: new Date()
    }

    setChatMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate AI response (in real implementation, this would call your AI service)
    setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(message, lesson),
        sender: 'assistant', 
        timestamp: new Date()
      }
      setChatMessages(prev => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1500)
  }

  const generateAIResponse = (userMessage: string, lesson: Lesson): string => {
    // Auracle AI responses focused on lesson guidance and support
    const responses = [
      `That's an excellent question about ${lesson.title}! Your experience is completely natural for this stage of practice. Let me help you understand what's happening...`,
      `I can guide you through this part of ${lesson.title}. Every student experiences these techniques differently - some visualize clearly, others feel sensations, and some simply know. All approaches are valid and effective.`,
      `Your awareness of this aspect of the lesson shows you're developing important spiritual skills. Trust what you're experiencing in ${lesson.title} - it's exactly what you need for your growth right now.`,
      `Great question! This is a common experience in ${lesson.title}. Your spiritual practice is unique to you, and I'm here to help you navigate any challenges or insights that arise.`
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  const handleComplete = () => {
    setIsCompleted(true)
    onComplete(lesson.id, userNotes)
    setShowCompletionForm(false)
  }

  const handleCheckpointResponse = (checkpointId: string, response: string) => {
    setCheckpointResponses(prev => ({
      ...prev,
      [checkpointId]: response
    }))
  }

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const getContentIcon = (type: string) => {
    switch (type) {
      case 'quote': return <Heart className="h-5 w-5 text-rose-pink" />
      case 'tip': return <Lightbulb className="h-5 w-5 text-golden-light" />
      case 'step_by_step': return <BookOpen className="h-5 w-5 text-deep-rose" />
      case 'visualization': return <Sun className="h-5 w-5 text-earth-copper" />
      case 'warning': return <Sparkles className="h-5 w-5 text-sage-green" />
      default: return <Circle className="h-5 w-5 text-gray-400" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-sacred">
      {/* Progress Header */}
      <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-rose-pink/20 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <button 
                onClick={onPrevious}
                disabled={!hasPrevious}
                className="p-2 rounded-full hover:bg-rose-pink/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="h-5 w-5 text-deep-rose" />
              </button>
              
              <div>
                <h1 className="text-2xl font-serif font-bold text-gray-800">
                  {lesson.title}
                </h1>
                {lesson.subtitle && (
                  <p className="text-gray-600">{lesson.subtitle}</p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="h-4 w-4 mr-1" />
                {lesson.duration} min
              </div>
              
              <button
                onClick={() => setShowAIAssistant(!showAIAssistant)}
                className="btn-primary relative"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Ask Auracle AI
                {chatMessages.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-deep-rose rounded-full"></span>
                )}
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="h-2 bg-gradient-rose rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress.percentage}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="text-xs text-gray-500 mt-1">
            Lesson {progress.current} of {progress.total}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <motion.div 
              className="card-sacred"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-rose rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🌹</span>
                </div>
                <div>
                  <h2 className="text-xl font-serif font-semibold text-gray-800">
                    Welcome to Your Lesson
                  </h2>
                  <p className="text-gray-600">Take your time and trust your experience</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {lesson.content.introduction}
              </p>
            </motion.div>

            {/* Audio Player (if available) */}
            {lesson.content.practiceExercise?.guidedAudioUrl && (
              <motion.div 
                className="card-sacred"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="font-serif font-semibold text-gray-800 mb-4">
                  Guided Practice Audio
                </h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={toggleAudio}
                    className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                  >
                    {isPlaying ? <Pause className="h-5 w-5 text-white ml-0.5" /> : <Play className="h-5 w-5 text-white ml-0.5" />}
                  </button>
                  <div>
                    <p className="font-medium text-gray-800">
                      {lesson.content.practiceExercise.title}
                    </p>
                    <p className="text-sm text-gray-600">
                      {lesson.content.practiceExercise.duration} minutes
                    </p>
                  </div>
                </div>
                <audio
                  ref={audioRef}
                  src={lesson.content.practiceExercise.guidedAudioUrl}
                  onEnded={() => setIsPlaying(false)}
                  className="hidden"
                />
              </motion.div>
            )}

            {/* Main Content Blocks */}
            <div className="space-y-6">
              {lesson.content.mainContent.map((block, index) => (
                <motion.div
                  key={block.id}
                  className={`card-sacred ${block.emphasis === 'sacred' ? 'border-2 border-rose-pink/20 bg-rose-pink/5' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    {getContentIcon(block.type)}
                    <div className="flex-1">
                      {block.type === 'quote' ? (
                        <blockquote className="text-lg italic text-deep-rose border-l-4 border-rose-pink pl-4">
                          {block.content}
                        </blockquote>
                      ) : block.type === 'step_by_step' ? (
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">
                            {block.content.split(':')[0]}
                          </h4>
                          <div className="space-y-2">
                            {block.content.split('\n').slice(1).map((step, stepIndex) => (
                              <div key={stepIndex} className="flex items-start">
                                <span className="w-6 h-6 bg-gradient-rose rounded-full flex items-center justify-center text-xs text-white font-medium mr-3 flex-shrink-0 mt-0.5">
                                  {stepIndex + 1}
                                </span>
                                <p className="text-gray-700">{step.replace(/^\d+\.\s*/, '')}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p className={`leading-relaxed ${block.emphasis === 'highlight' ? 'text-deep-rose font-medium' : 'text-gray-700'}`}>
                          {block.content}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Practice Exercise */}
            {lesson.content.practiceExercise && (
              <motion.div 
                className="card-sacred border-2 border-golden-light/20 bg-golden-light/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center mr-3">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-gray-800">
                    {lesson.content.practiceExercise.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {lesson.content.practiceExercise.instructions.map((instruction, index) => (
                    <div key={index} className="flex items-start">
                      <span className="w-5 h-5 bg-earth-copper rounded-full flex items-center justify-center text-xs text-white font-medium mr-3 flex-shrink-0 mt-1">
                        {index + 1}
                      </span>
                      <p className="text-gray-700">{instruction}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-white/50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Duration:</span> {lesson.content.practiceExercise.duration} minutes
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="font-medium">Completion:</span> {lesson.content.practiceExercise.completionCriteria}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Checkpoints */}
            {lesson.content.checkpoints && lesson.content.checkpoints.length > 0 && (
              <motion.div 
                className="card-sacred"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-xl font-serif font-semibold text-gray-800 mb-4">
                  Reflection Points
                </h3>
                <div className="space-y-4">
                  {lesson.content.checkpoints.map((checkpoint, index) => (
                    <div key={checkpoint.id} className="border border-gray-200 rounded-lg p-4">
                      <p className="text-gray-700 mb-3">{checkpoint.question}</p>
                      <textarea
                        value={checkpointResponses[checkpoint.id] || ''}
                        onChange={(e) => handleCheckpointResponse(checkpoint.id, e.target.value)}
                        placeholder="Share your thoughts and reflections..."
                        className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-rose-pink"
                        rows={3}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Key Takeaways */}
            <motion.div 
              className="card-sacred border-2 border-sage-green/20 bg-sage-green/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl font-serif font-semibold text-gray-800 mb-4">
                Sacred Wisdom from This Lesson
              </h3>
              <div className="space-y-3">
                {lesson.content.keyTakeaways.map((takeaway, index) => (
                  <div key={index} className="flex items-start">
                    <Sparkles className="h-5 w-5 text-sage-green mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{takeaway}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Completion Section */}
            <motion.div 
              className="card-sacred text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {!isCompleted ? (
                <div>
                  <h3 className="text-xl font-serif font-semibold text-gray-800 mb-4">
                    Ready to Complete This Lesson?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Take a moment to reflect on what you've learned and practiced.
                  </p>
                  
                  <div className="mb-4">
                    <textarea
                      value={userNotes}
                      onChange={(e) => setUserNotes(e.target.value)}
                      placeholder="Any notes, insights, or reflections you'd like to remember..."
                      className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-rose-pink"
                      rows={3}
                    />
                  </div>
                  
                  <button
                    onClick={handleComplete}
                    className="btn-primary text-lg px-8"
                  >
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Mark Complete & Continue
                  </button>
                </div>
              ) : (
                <div>
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2">
                    Beautiful Work!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    You've completed this lesson. Your spiritual practice is growing stronger.
                  </p>
                  {hasNext && (
                    <button onClick={onNext} className="btn-primary">
                      <ArrowRight className="h-5 w-5 mr-2" />
                      Continue to Next Lesson
                    </button>
                  )}
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Assistant Toggle */}
            <div className="card-sacred">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-rose rounded-full flex items-center justify-center mr-3">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-gray-800">
                    Ask Auracle AI
                  </h3>
                  <p className="text-sm text-gray-600">Your spiritual guide</p>
                </div>
              </div>
              <div className="space-y-2">
                {lesson.aiAssistant.suggestedQuestions.slice(0, 3).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setShowAIAssistant(true)
                      setInputMessage(question)
                    }}
                    className="w-full text-left text-sm p-2 rounded-lg hover:bg-rose-pink/10 text-gray-600 hover:text-deep-rose transition-colors"
                  >
                    "{question}"
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Assistant Chat Modal */}
      <AnimatePresence>
        {showAIAssistant && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAIAssistant(false)}
          >
            <motion.div
              className="bg-white rounded-2xl w-full max-w-2xl h-[600px] flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Chat Header */}
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-rose rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">🌹</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-gray-800">
                      Chat with Auracle AI
                    </h3>
                    <p className="text-sm text-gray-600">
                      Ask anything about {lesson.title}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowAIAssistant(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {chatMessages.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-500 mb-4">
                      Welcome! I'm here to support your spiritual journey.
                    </p>
                    <div className="space-y-2">
                      {lesson.aiAssistant.suggestedQuestions.map((question, index) => (
                        <button
                          key={index}
                          onClick={() => handleSendMessage(question)}
                          className="block w-full text-left p-3 rounded-lg border border-gray-200 hover:border-rose-pink hover:bg-rose-pink/5 text-sm text-gray-700"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-gradient-rose text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="leading-relaxed">{message.text}</p>
                      <p className={`text-xs mt-2 ${
                        message.sender === 'user' ? 'text-rose-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 p-4 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Chat Input */}
              <div className="p-6 border-t border-gray-200">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputMessage)}
                    placeholder="Ask your question..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-rose-pink"
                    disabled={isTyping}
                  />
                  <button
                    onClick={() => handleSendMessage(inputMessage)}
                    disabled={!inputMessage.trim() || isTyping}
                    className="btn-primary px-6 py-3 rounded-full disabled:opacity-50"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LessonView
