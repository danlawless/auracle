'use client'

import { useState, useCallback, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Sparkles } from 'lucide-react'
import { AIAssistantConfig } from '../../../types/course'

interface FloatingAIAssistantProps {
  aiAssistant: AIAssistantConfig
  lessonTitle: string
}

interface ChatMessage {
  id: string
  type: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const FloatingAIAssistant = memo(({ aiAssistant, lessonTitle }: FloatingAIAssistantProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  // Component is rendering with lesson data

  const handleToggleChat = useCallback(() => {
    setIsOpen(!isOpen)
    
    // Add welcome message when first opened
    if (!isOpen && messages.length === 0) {
      const welcomeMessage: ChatMessage = {
        id: 'welcome',
        type: 'assistant',
        content: `Hello, beautiful soul! I'm ${aiAssistant.name}, and I'm here to support you through this lesson on ${lessonTitle}. Feel free to ask me anything about the practice, share what you're experiencing, or let me know if you need clarification on any part of the teaching. How can I help you today? 🌹`,
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen, messages.length, aiAssistant.name, lessonTitle])

  const handleSendMessage = useCallback(async (message: string) => {
    if (!message.trim()) return

    // Add user message
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
      const aiResponse: ChatMessage = {
        id: `ai-${Date.now()}`,
        type: 'assistant',
        content: generateAIResponse(message, aiAssistant),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }, [aiAssistant])

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage(inputMessage)
    }
  }, [inputMessage, handleSendMessage])

  // Guard clause for missing AI assistant data
  if (!aiAssistant) {
    console.warn('FloatingAIAssistant: aiAssistant prop is missing')
    return null
  }

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-[9998]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={handleToggleChat}
          className="relative bg-gradient-primary bg-rose-500 text-white rounded-full p-4 shadow-2xl hover:shadow-xl transition-all duration-200 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Pulsing ring animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-primary bg-rose-400 rounded-full opacity-30"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Icon */}
          <div className="relative z-10 flex items-center justify-center">
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <>
                <MessageCircle className="h-6 w-6" />
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-golden-accent rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </>
            )}
          </div>

          {/* Tooltip */}
          <motion.div
            className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            initial={false}
          >
            Ask {aiAssistant.name} anything! 
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] z-[9997] bg-white rounded-2xl shadow-2xl border border-soft-lavender/30"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Chat Header */}
            <div className="p-4 border-b border-soft-lavender/20 bg-gradient-to-r from-soft-lavender/10 to-rose-pink/10 rounded-t-2xl">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-rose rounded-full flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <motion.div
                    className="absolute -inset-1 border-2 border-golden-light rounded-full opacity-60"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-semibold text-gray-800">{aiAssistant.name}</h3>
                  <p className="text-sm text-gray-600">Your spiritual guide for this lesson</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-gradient-primary text-white'
                        : 'bg-soft-lavender/20 text-gray-800'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </motion.div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="bg-soft-lavender/20 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Suggested Questions */}
            {messages.length <= 1 && (
              <div className="px-4 py-2 border-t border-soft-lavender/20">
                <p className="text-xs text-gray-600 mb-2">Quick questions you can ask:</p>
                <div className="flex flex-wrap gap-1">
                  {aiAssistant.suggestedQuestions.slice(0, 2).map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(question)}
                      className="text-xs bg-soft-lavender/20 text-gray-700 px-2 py-1 rounded-full hover:bg-soft-lavender/30 transition-colors duration-200"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-soft-lavender/20 bg-gradient-to-r from-soft-ivory/50 to-rose-pink/5 rounded-b-2xl">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about the practice, share your experience..."
                  className="flex-1 px-3 py-2 border border-soft-lavender/30 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-vibrant-pink/20 focus:border-vibrant-pink/40"
                  disabled={isTyping}
                />
                <button
                  onClick={() => handleSendMessage(inputMessage)}
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-gradient-primary text-white p-2 rounded-full hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
})

// Helper function to generate AI responses (replace with actual AI API call)
function generateAIResponse(userMessage: string, aiAssistant: AIAssistantConfig): string {
  // This is a simplified response generator - in production, this would call your AI API
  const responses = [
    `That's a beautiful question! Based on what we're learning about ${aiAssistant.context[0]}, I'd suggest...`,
    `I hear you, and what you're experiencing is completely normal. Many students find this part of the practice...`,
    `Your intuition is guiding you perfectly. In Rose Meditation, we trust that whatever you're experiencing is exactly what you need...`,
    `Let me help you with that. This technique is all about gentle awareness, so there's no pressure to get it "perfect"...`
  ]
  
  return responses[Math.floor(Math.random() * responses.length)] + " Remember, beloved, you're exactly where you need to be in this moment. 🌹"
}

FloatingAIAssistant.displayName = 'FloatingAIAssistant'

export default FloatingAIAssistant
