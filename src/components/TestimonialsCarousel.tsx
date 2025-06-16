'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    company: "TechFlow Solutions",
    content: "Lattice Partners transformed our entire data infrastructure. Their AI-driven insights helped us increase efficiency by 60% while reducing operational costs significantly.",
    initials: "SC"
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Operations",
    company: "Global Manufacturing Corp",
    content: "The predictive maintenance solution they developed has been game-changing. We've prevented millions in potential downtime and our equipment runs smoother than ever.",
    initials: "MR"
  },
  {
    name: "Emily Watson",
    role: "VP of Customer Experience",
    company: "RetailTech Innovations",
    content: "Working with Lattice Partners on our recommendation engine was exceptional. Customer engagement increased by 40% and our conversion rates have never been higher.",
    initials: "EW"
  }
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className="text-center">
      <div className="relative h-64 flex items-center justify-center">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: index === currentIndex ? 1 : 0,
            }}
            transition={{ 
              duration: 0.4,
              delay: index === currentIndex ? 0.2 : 0
            }}
            className={`absolute inset-0 flex flex-col items-center justify-center ${
              index === currentIndex ? 'pointer-events-auto' : 'pointer-events-none'
            }`}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-azure-600 to-azure-700 rounded-full flex items-center justify-center text-white font-bold text-lg mb-6">
              {testimonial.initials}
            </div>
            <blockquote className="text-xl text-slate-700 max-w-3xl mx-auto mb-6 italic leading-relaxed">
              &ldquo;{testimonial.content}&rdquo;
            </blockquote>
            <div className="text-center">
              <div className="font-semibold text-slate-900">{testimonial.name}</div>
              <div className="text-slate-600">{testimonial.role}, {testimonial.company}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-azure-600' : 'bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
} 