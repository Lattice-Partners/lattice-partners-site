'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import heroContent from '@/content/hero.json'

export default function HeroChat() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setShowAnswer(false)
      setTimeout(() => {
        setCurrentQuestionIndex((prev) => (prev + 1) % heroContent.rotatingLines.length)
        setShowAnswer(true)
      }, 500)
    }, 4000)

    // Show first answer
    setTimeout(() => setShowAnswer(true), 1500)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-gradient-start/30 to-gradient-end/30 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-azure-600/20 to-gradient-start/20 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Chat Interface */}
      <div className="relative w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="backdrop-blur-glass bg-white/70 rounded-3xl shadow-xl border border-white/20 p-8 sm:p-12"
        >
          {/* Question */}
          <div className="mb-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary-gradient flex items-center justify-center">
                <span className="text-white text-sm font-semibold">You</span>
              </div>
              <div className="flex-1">
                <div className="bg-light-blue-bg rounded-2xl rounded-tl-sm px-6 py-4">
                  <p className="text-slate-800 text-lg font-medium">
                    {heroContent.rotatingLines[currentQuestionIndex]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Answer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showAnswer ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-azure-600 flex items-center justify-center">
                <span className="text-white text-sm font-semibold">AI</span>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-2xl rounded-tl-sm px-6 py-4 shadow-card">
                  {showAnswer && (
                    <p className="text-slate-700 text-lg">
                      <Typewriter
                        words={[heroContent.answer]}
                        cursor
                        cursorStyle='|'
                        typeSpeed={30}
                        deleteSpeed={0}
                        delaySpeed={0}
                      />
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              {heroContent.subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ y: -2, boxShadow: "0 10px 25px rgba(37, 99, 235, 0.2)" }}
                whileTap={{ y: 0 }}
                className="px-8 py-4 bg-azure-600 text-white rounded-xl font-semibold text-lg hover:bg-azure-700 transition-colors"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="px-8 py-4 bg-white/80 text-azure-600 rounded-xl font-semibold text-lg hover:bg-white transition-colors border border-azure-600/20"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 