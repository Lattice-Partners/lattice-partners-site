'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { Send, Sparkles } from 'lucide-react'

const conversations = [
  {
    question: "How can I level up my whole team with AI?",
    answer: "Lattice Partners offers hands-on workshops that get your team confident and productive with AI tools in just weeks, not months."
  },
  {
    question: "Can you build me an AI prototype quickly?",
    answer: "We specialize in rapid prototyping—most of our proof-of-concept demos are running within 2 weeks of our first meeting."
  },
  {
    question: "How do I know if AI will actually help my business?",
    answer: "We start with a deep discovery process to find the highest-impact AI opportunities hiding in your current workflow."
  },
  {
    question: "Will AI integration break my existing systems?",
    answer: "Our custom integration approach ensures AI plays nice with your current tech stack—no rip-and-replace required."
  }
]

export default function HeroChat() {
  const [currentConversationIndex, setCurrentConversationIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setShowAnswer(false)
      setTimeout(() => {
        setCurrentConversationIndex((prev) => (prev + 1) % conversations.length)
        setShowAnswer(true)
      }, 500)
    }, 8000)

    // Show first answer
    setTimeout(() => setShowAnswer(true), 2000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-base-bg to-light-blue-bg opacity-60" />
      
      {/* Floating elements - simplified */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-azure-600/10 to-gradient-end/10 rounded-full blur-2xl"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-tr from-gradient-start/10 to-azure-600/10 rounded-full blur-2xl"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main content - Two column layout */}
      <div className="relative w-full max-w-7xl z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left lg:col-span-2"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
              An AI strategy that works<br />
              <span className="bg-gradient-to-r from-azure-600 to-gradient-end bg-clip-text text-transparent">
                for you
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              Leverage AI to save thousands of employee hours a year.
            </p>
            
            {/* CTA section - moved to left column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="flex justify-center lg:justify-start">
                <motion.button
                  className="bg-white text-azure-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-50 transition-colors border border-slate-200 shadow-lg"
                >
                  Book a Consultation
                </motion.button>
              </div>
              <p className="text-slate-500 text-sm">
                No commitment required • Free initial consultation
              </p>
            </motion.div>
          </motion.div>

          {/* Right column - Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end lg:col-span-3"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200/50 overflow-hidden max-w-lg w-full">
              {/* Chat header */}
              <div className="bg-slate-50 px-6 py-3 border-b border-slate-200/50">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <div className="flex-1 text-center">
                    <div className="text-sm font-medium text-slate-600 flex items-center justify-center space-x-2">
                      <Sparkles className="w-4 h-4" />
                      <span>AI Assistant</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat messages */}
              <div className="p-6 space-y-4 min-h-[300px] flex flex-col justify-center">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-azure-600 text-white rounded-2xl rounded-tr-md px-4 py-3 max-w-xs">
                    <p className="text-sm font-medium">
                      {conversations[currentConversationIndex].question}
                    </p>
                  </div>
                </div>

                {/* AI response */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showAnswer ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex justify-start"
                >
                  <div className="bg-slate-100 text-slate-800 rounded-2xl rounded-tl-md px-4 py-3 max-w-xs">
                    {showAnswer && (
                      <p className="text-sm">
                        <Typewriter
                          words={[conversations[currentConversationIndex].answer]}
                          cursor
                          cursorStyle='|'
                          typeSpeed={25}
                          deleteSpeed={0}
                          delaySpeed={0}
                        />
                      </p>
                    )}
                  </div>
                </motion.div>

                {/* Typing indicator */}
                {!showAnswer && (
                  <div className="flex justify-start">
                    <div className="bg-slate-100 text-slate-600 rounded-2xl rounded-tl-md px-4 py-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input area */}
              <div className="border-t border-slate-200/50 p-4">
                <div className="flex items-center space-x-3">
                  <input
                    type="text"
                    placeholder="Ask about AI for your business..."
                    className="flex-1 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-azure-600 focus:border-transparent"
                    disabled
                  />
                  <button className="bg-azure-600 text-white rounded-full p-2 hover:bg-azure-700 transition-colors">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 