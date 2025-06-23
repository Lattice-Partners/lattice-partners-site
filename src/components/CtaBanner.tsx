'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Send } from 'lucide-react'

const floatingTags = [
  // Left side tags
  { text: "AI Strategy", position: { top: "20%", left: "5%" }, icon: "🎯", rotation: -4 },
  { text: "Custom Dev", position: { top: "45%", left: "8%" }, icon: "⚡", rotation: 3 },
  { text: "Automation", position: { top: "70%", left: "3%" }, icon: "🤖", rotation: -6 },
  
  // Right side tags (mirrored rotations)
  { text: "AI Training", position: { top: "20%", right: "5%" }, icon: "🧠", rotation: 4 },
  { text: "Data Analytics", position: { top: "45%", right: "8%" }, icon: "📊", rotation: -3 },
  { text: "Integration", position: { top: "70%", right: "3%" }, icon: "🔗", rotation: 6 }
]

export default function CtaBanner() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [highlightedWords, setHighlightedWords] = useState<number>(0)
  
  const text = "Transform your business with AI solutions that actually work"
  const words = text.split(' ')
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 1", "start 0.2"]
  })

  const wordProgress = useTransform(scrollYProgress, [0, 1], [0, words.length])

  useEffect(() => {
    const unsubscribe = wordProgress.on("change", (latest) => {
      setHighlightedWords(Math.floor(latest))
    })
    return unsubscribe
  }, [wordProgress])

  return (
    <div ref={containerRef} className="relative bg-white py-20 overflow-hidden">
      {/* Floating Tags */}
      {floatingTags.map((tag, index) => (
        <motion.div
          key={tag.text}
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: tag.rotation }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="absolute hidden lg:block pointer-events-none"
          style={tag.position}
        >
          <div className="bg-white border border-slate-200 rounded-full px-4 py-2 shadow-md" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.9)' }}>
            <div className="flex items-center space-x-2">
              <span className="text-sm">{tag.icon}</span>
              <span className="text-sm font-medium text-slate-700">{tag.text}</span>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Text */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8" suppressHydrationWarning={true}>
            {words.map((word, index) => (
              <span
                key={index}
                className={`transition-all duration-300 ${
                  index < highlightedWords 
                    ? 'text-azure-600' 
                    : 'text-slate-400'
                }`}
              >
                {word}{' '}
              </span>
            ))}
          </h2>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto"
        >
          Book a free initial call with our team to take the leap from AI-curious to AI-driven
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button
            className="bg-azure-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-azure-700 transition-all duration-300 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Book a Consultation</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
} 