'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Send, Sparkles } from 'lucide-react'
import { AIAssistantConfig } from '../../../types/course'

interface AILessonChatProps {
  aiAssistant: AIAssistantConfig
  lessonTitle: string
}

interface ChatMessage {
  id: string
  type: 'user' | 'assistant'
  content: string
  timestamp: Date
  followUpQuestions?: string[]
}

const AILessonChat: React.FC<AILessonChatProps> = ({ aiAssistant, lessonTitle }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when messages change or typing status changes
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping, scrollToBottom])

  useEffect(() => {
    if (isExpanded) {
      // Small delay to ensure the chat container has expanded
      setTimeout(scrollToBottom, 100)
    }
  }, [isExpanded, scrollToBottom])

  const handleSendMessage = useCallback(async (message: string) => {
    if (!message.trim()) return

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      type: 'user',
      content: message,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate AI response (in real implementation, this would call your AI API)
    setTimeout(() => {
      const responseData = generateAIResponseWithFollowUps(message, aiAssistant, lessonTitle, messages)
      const aiResponse: ChatMessage = {
        id: `ai-${Date.now()}`,
        type: 'assistant',
        content: responseData.content,
        timestamp: new Date(),
        followUpQuestions: responseData.followUpQuestions
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }, [aiAssistant, lessonTitle])

  const handleSuggestedQuestion = (question: string) => {
    setIsExpanded(true)
    handleSendMessage(question)
  }

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage(inputMessage)
    }
  }, [inputMessage, handleSendMessage])

  return (
    <div className="space-y-4">
      {/* Suggested Questions */}
      {messages.length === 0 && (
        <div className="space-y-3">
          <p className="text-sm font-medium text-gray-700">Quick questions to get started:</p>
          <div className="flex flex-wrap gap-2">
            {aiAssistant.suggestedQuestions.slice(0, 3).map((question, index) => (
              <button
                key={index}
                onClick={() => handleSuggestedQuestion(question)}
                className="text-sm bg-white border border-rose-pink/30 text-gray-700 px-4 py-2 rounded-full hover:bg-rose-pink/10 hover:border-rose-pink/50 transition-all duration-200"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Chat Messages */}
      <AnimatePresence>
        {(isExpanded || messages.length > 0) && (
          <motion.div
            className="border border-rose-pink/20 rounded-lg bg-white/50 backdrop-blur-sm"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} flex-col`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`${message.type === 'user' ? 'self-end' : 'self-start'} max-w-[80%] p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-gradient-primary text-white'
                        : 'bg-rose-pink/10 text-gray-800 border border-rose-pink/20'
                    }`}
                  >
                    {message.type === 'assistant' && (
                      <div className="flex items-center space-x-2 mb-2">
                        <Sparkles className="h-4 w-4 text-rose-pink" />
                        <span className="text-xs font-medium text-rose-pink">Auracle AI</span>
                      </div>
                    )}
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>

                  {/* Follow-up Questions */}
                  {message.type === 'assistant' && message.followUpQuestions && message.followUpQuestions.length > 0 && (
                    <motion.div
                      className="self-start mt-3 space-y-2"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <p className="text-xs font-medium text-rose-pink mb-2 ml-1">Continue exploring:</p>
                      <div className="flex flex-wrap gap-2">
                        {message.followUpQuestions.map((question, index) => (
                          <motion.button
                            key={index}
                            onClick={() => handleSuggestedQuestion(question)}
                            className="text-xs bg-gradient-to-r from-rose-pink/20 to-soft-lavender/20 border border-rose-pink/30 text-gray-700 px-3 py-2 rounded-full hover:from-rose-pink/30 hover:to-soft-lavender/30 hover:border-rose-pink/50 hover:shadow-md transition-all duration-200 backdrop-blur-sm"
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.1 * index }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span className="flex items-center space-x-1">
                              <Sparkles className="h-3 w-3 text-rose-pink" />
                              <span>{question}</span>
                            </span>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="bg-rose-pink/10 border border-rose-pink/20 p-3 rounded-2xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <Sparkles className="h-4 w-4 text-rose-pink" />
                      <span className="text-xs font-medium text-rose-pink">Auracle AI</span>
                    </div>
                    <div className="flex space-x-1">
                      <motion.div
                        className="w-2 h-2 bg-rose-pink rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-rose-pink rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-rose-pink rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* Invisible element to scroll to */}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-rose-pink/20 p-4 bg-gradient-to-r from-rose-pink/5 to-soft-lavender/5">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about the lesson, share your experience..."
                  className="flex-1 px-4 py-3 border border-rose-pink/20 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-rose-pink/30 focus:border-rose-pink/40 bg-white"
                  disabled={isTyping}
                />
                <button
                  onClick={() => handleSendMessage(inputMessage)}
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-gradient-primary text-white px-4 py-3 rounded-full hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expand Button */}
      {!isExpanded && messages.length === 0 && (
        <div className="text-center">
          <button
            onClick={() => setIsExpanded(true)}
            className="inline-flex items-center space-x-2 text-rose-pink hover:text-deep-rose font-medium text-sm transition-colors duration-200"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Start a conversation with Auracle AI</span>
          </button>
        </div>
      )}
    </div>
  )
}

// Helper function to generate AI responses with intelligent follow-ups (replace with actual AI API call)
function generateAIResponseWithFollowUps(
  userMessage: string, 
  aiAssistant: AIAssistantConfig, 
  lessonTitle: string, 
  previousMessages: ChatMessage[]
): { content: string; followUpQuestions: string[] } {
  
  // Auracle AI responses focused on lesson guidance
  const responses = [
    `That's an excellent question about ${lessonTitle}! Your experience is completely natural - this is exactly how the practice unfolds for many students. Let me guide you through this...`,
    `I understand what you're experiencing in this ${lessonTitle} lesson. What you're feeling is part of your spiritual development process. Here's how to work with it...`,
    `Your intuition is working beautifully with this ${lessonTitle} practice. There's no "wrong" way to experience these techniques - trust what's coming up for you...`,
    `Great awareness! This is precisely what ${lessonTitle} is designed to help you explore. You're developing important spiritual skills here...`
  ]
  
  const contextualResponse = responses[Math.floor(Math.random() * responses.length)]
  const content = contextualResponse + " I'm here to support your learning journey with this practice. ✨"
  
  // Generate intelligent follow-ups based on conversation context and lesson
  const followUpQuestions = generateContextualFollowUps(userMessage, lessonTitle, previousMessages)
  
  return { content, followUpQuestions }
}

// Generate contextual follow-up questions to create learning rabbit holes
function generateContextualFollowUps(
  userMessage: string, 
  lessonTitle: string, 
  previousMessages: ChatMessage[]
): string[] {
  
  // Different categories of follow-ups for variety
  const followUpCategories = {
    deeper: [
      "What emotions came up for you during this part?",
      "How does this practice feel different from what you expected?",
      "What would you like to explore more deeply?",
      "How does this connect with your spiritual journey so far?"
    ],
    practical: [
      "What challenges are you facing with this technique?",
      "How could you adapt this practice for your daily routine?",
      "What time of day feels most sacred for this work?",
      "How long have you been practicing meditation?"
    ],
    expansion: [
      "What other spiritual practices resonate with you?",
      "How does this relate to your intention for taking this course?",
      "What would you like to manifest through this work?",
      "How do you typically connect with your intuition?"
    ],
    integration: [
      "How has your energy shifted since starting this lesson?",
      "What insights have surprised you the most?",
      "How might you apply this in challenging situations?",
      "What would you tell someone just starting this practice?"
    ]
  }
  
  // Select follow-ups based on lesson content and conversation depth
  const conversationDepth = previousMessages.length
  let selectedFollowUps: string[] = []
  
  // For early conversations, focus on deeper exploration and practical application
  if (conversationDepth < 4) {
    selectedFollowUps = [
      ...followUpCategories.deeper.slice(0, 2),
      ...followUpCategories.practical.slice(0, 1)
    ]
  }
  // For mid-conversation, expand into related concepts and integration
  else if (conversationDepth < 8) {
    selectedFollowUps = [
      ...followUpCategories.expansion.slice(0, 2),
      ...followUpCategories.integration.slice(0, 1)
    ]
  }
  // For deeper conversations, focus on integration and personal transformation
  else {
    selectedFollowUps = [
      ...followUpCategories.integration.slice(0, 2),
      "What's the most profound shift you've experienced in this work?"
    ]
  }
  
  // Lesson-specific follow-ups based on title for focused guidance
  const lessonSpecificFollowUps: { [key: string]: string[] } = {
    "Introduction to Rose Meditation": [
      "What sensations do you notice when you visualize the rose?",
      "How clear is the rose image appearing for you?",
      "What questions do you have about beginning this practice?"
    ],
    "Grounding Cord": [
      "Can you feel the connection between your body and the Earth?",
      "What color or texture is your grounding cord appearing as?",
      "How stable does your energetic foundation feel right now?"
    ],
    "Golden Sun": [
      "What does your golden sun look like in your visualization?",
      "How does it feel to call your energy back to yourself?",
      "What qualities or strengths is your sun radiating?"
    ],
    "Aura Boundaries": [
      "How does it feel to expand your aura to its natural size?",
      "Can you sense where your energy field extends around you?",
      "What changes do you notice when you strengthen your boundaries?"
    ],
    "Four Roses": [
      "Which of the four roses feels most vivid to you?",
      "How does creating multiple roses feel different from one?",
      "What are you noticing about the different rose colors or energies?"
    ],
    "Earth Cosmic Energy": [
      "How does the Earth energy feel different from cosmic energy?",
      "Can you sense the flow of energy through your grounding cord?",
      "What does it feel like to be connected to both Earth and sky?"
    ],
    "Cleansing Roses": [
      "What are you releasing into your cleansing roses?",
      "How does it feel to let the roses dissolve away your stress?",
      "What shifts do you notice after the cleansing process?"
    ],
    "Pink Rose": [
      "How does working with pink energy feel for you?",
      "What emotions or sensations come up with the pink rose?",
      "How is this different from your other rose practices?"
    ]
  }
  
  // Add lesson-specific follow-ups if available
  const lessonFollowUps = lessonSpecificFollowUps[lessonTitle] || []
  if (lessonFollowUps.length > 0) {
    selectedFollowUps = selectedFollowUps.slice(0, 2) // Keep 2 general ones
    selectedFollowUps.push(lessonFollowUps[Math.floor(Math.random() * lessonFollowUps.length)])
  }
  
  // Shuffle and return 3 follow-ups maximum
  return selectedFollowUps
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
}

export default AILessonChat
