'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Chen",
    title: "CTO",
    company: "TechFlow Systems",
    content: "The team transformed our customer service with AI chatbots that actually understand context. Our response time dropped by 70% and customer satisfaction soared.",
    avatar: "SC"
  },
  {
    name: "Marcus Johnson",
    title: "Head of Operations",
    company: "LogiCore Inc",
    content: "Their AI-powered inventory optimization saved us $2M in the first year. The implementation was seamless and the training was exceptional.",
    avatar: "MJ"
  },
  {
    name: "Elena Rodriguez",
    title: "Product Manager",
    company: "InnovateLab",
    content: "We went from AI-curious to AI-powered in just 8 weeks. The prototype they built became our core product feature that doubled our user engagement.",
    avatar: "ER"
  }
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          What Our Clients Say
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Real results from real businesses who trusted us with their AI transformation.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-card relative"
          >
            {/* Quote icon */}
            <div className="absolute -top-4 left-8 w-8 h-8 bg-azure-600 rounded-full flex items-center justify-center">
              <Quote className="w-4 h-4 text-white" strokeWidth={2} />
            </div>

            <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8 font-medium">
              "{testimonials[currentIndex].content}"
            </blockquote>

            <div className="flex items-center">
              {/* Avatar */}
              <div className="w-16 h-16 bg-secondary-gradient rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                {testimonials[currentIndex].avatar}
              </div>
              
              {/* Author info */}
              <div>
                <div className="font-bold text-slate-900 text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-slate-600">
                  {testimonials[currentIndex].title} at {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex justify-center mt-8 space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="w-12 h-12 bg-white rounded-full shadow-card hover:shadow-card-hover flex items-center justify-center transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600" strokeWidth={2} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="w-12 h-12 bg-white rounded-full shadow-card hover:shadow-card-hover flex items-center justify-center transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5 text-slate-600" strokeWidth={2} />
          </motion.button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-azure-600' 
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 