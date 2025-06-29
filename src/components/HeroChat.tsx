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
    question: "What if I don't know where to start with AI?",
    answer: "No problem - we start with discovery. We meet your team, map your workflows, and find high-value opportunities where AI can save time, reduce errors, or unlock new capabilities."
  },
  {
    question: "Do you build custom AI tools too?",
    answer: "Yes — once we understand your business, we build simple, no-fluff AI tools tailored to your exact needs. Think internal copilots, document analyzers, or dashboards that actually work."
  },
  {
    question: "We've already started using AI. Can you help us go further?",
    answer: "Definitely. We help teams go from early experimentation to real transformation — smarter systems, better decisions, and AI that sticks."
  }
]

export default function HeroChat() {
  const [currentConversationIndex, setCurrentConversationIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [showQuestion, setShowQuestion] = useState(false)
  const [showTyping, setShowTyping] = useState(false)

  useEffect(() => {
    // Show first question immediately
    setShowQuestion(true)
    
    // Show typing indicator after question appears
    setTimeout(() => setShowTyping(true), 1000)
    
    // Show first answer after typing indicator
    setTimeout(() => {
      setShowTyping(false)
      setShowAnswer(true)
    }, 2500)

    const timer = setInterval(() => {
      // Fade out both question and answer simultaneously
      setShowAnswer(false)
      setShowQuestion(false)
      setShowTyping(false)
      
      // Longer pause before new conversation starts
      setTimeout(() => {
        setCurrentConversationIndex((prev) => (prev + 1) % conversations.length)
        
        // Slight delay before showing new question for smoother feel
        setTimeout(() => {
          setShowQuestion(true)
          
          // Show typing indicator after question
          setTimeout(() => setShowTyping(true), 1000)
          
          // Show answer after typing
          setTimeout(() => {
            setShowTyping(false)
            setShowAnswer(true)
          }, 2500)
        }, 100)
      }, 800)
    }, 18000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative min-h-screen flex flex-col justify-start sm:items-center sm:justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28">
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

      {/* Main content - Vertical stacked layout */}
      <div className="relative w-full max-w-4xl z-10">
        {/* Hero heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-8"
        >
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-3 sm:mb-6 tracking-tight">
            An AI strategy that works<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="bg-gradient-to-r from-azure-600 to-gradient-end bg-clip-text text-transparent">
              for you
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-8">
            Leverage AI to save thousands of employee hours a year.
          </p>
        </motion.div>

        {/* Chat Interface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg border border-slate-200/50 overflow-hidden max-w-2xl mx-auto mb-6"
        >
          {/* Chat header */}
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-200/50">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <div className="flex-1 text-right">
                <div className="text-sm font-medium text-slate-600 flex items-center justify-end space-x-2">
                  <span>Lattice Partners</span>
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Chat messages */}
          <div className="p-6 space-y-4 h-[280px] sm:h-[240px] flex flex-col justify-start">
            {/* User message */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ 
                opacity: showQuestion ? 1 : 0, 
                x: showQuestion ? 0 : 10,
                scale: showQuestion ? 1 : 0.95
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex justify-end"
            >
              <div className="bg-azure-600 text-white rounded-2xl rounded-tr-md px-4 py-3 max-w-sm sm:max-w-xs">
                <p className="text-sm font-medium">
                  {conversations[currentConversationIndex].question}
                </p>
              </div>
            </motion.div>

            {/* AI response */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: showAnswer ? 1 : 0, 
                y: showAnswer ? 0 : 10,
                scale: showAnswer ? 1 : 0.95
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex justify-start"
            >
              <div className="bg-slate-100 text-slate-800 rounded-2xl rounded-tl-md px-4 py-3 max-w-sm sm:max-w-xs">
                {showAnswer && (
                  <p className="text-sm leading-relaxed" suppressHydrationWarning={true}>
                    <Typewriter
                      words={[conversations[currentConversationIndex].answer]}
                      cursor
                      cursorStyle='|'
                      typeSpeed={20}
                      deleteSpeed={0}
                      delaySpeed={300}
                      cursorBlinking={true}
                    />
                  </p>
                )}
              </div>
            </motion.div>

            {/* Typing indicator */}
            {showTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: showTyping ? 1 : 0, y: showTyping ? 0 : 10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex justify-start"
              >
                <div className="bg-slate-100 text-slate-600 rounded-2xl rounded-tl-md px-4 py-3">
                  <div className="flex space-x-1">
                    <motion.div 
                      className="w-2 h-2 bg-slate-400 rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div 
                      className="w-2 h-2 bg-slate-400 rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                    />
                    <motion.div 
                      className="w-2 h-2 bg-slate-400 rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>

        </motion.div>

        {/* CTA Button - Standalone under chat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
                     <motion.a
             href="https://calendly.com/d/cv2j-t66-djr/intro-with-lattice-partners"
             target="_blank"
             rel="noopener noreferrer"
             className="bg-azure-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-azure-700 transition-all duration-300 inline-flex items-center space-x-3 mx-auto"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             animate={{ 
               boxShadow: [
                 "0 4px 15px rgba(59, 130, 246, 0.15)",
                 "0 8px 25px rgba(59, 130, 246, 0.25)",
                 "0 4px 15px rgba(59, 130, 246, 0.15)"
               ]
             }}
             transition={{
               boxShadow: {
                 duration: 3,
                 repeat: Infinity,
                 ease: "easeInOut"
               }
             }}
           >
             <Sparkles className="w-5 h-5" />
             <span>Start Your AI Journey</span>
             <Send className="w-5 h-5" />
           </motion.a>
        </motion.div>
      </div>
    </div>
  )
} 