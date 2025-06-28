'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    company: "TechFlow Solutions",
    content: "Lattice Partners transformed our entire data infrastructure. Their AI-driven insights helped us increase efficiency by 60% while reducing operational costs significantly.",
    initials: "SC",
    color: "from-azure-600 to-azure-700"
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Operations",
    company: "Global Manufacturing Corp",
    content: "The predictive maintenance solution they developed has been game-changing. We&apos;ve prevented millions in potential downtime and our equipment runs smoother than ever.",
    initials: "MR",
    color: "from-emerald-600 to-emerald-700"
  },
  {
    name: "Emily Watson",
    role: "VP of Customer Experience",
    company: "RetailTech Innovations",
    content: "Working with Lattice Partners on our recommendation engine was exceptional. Customer engagement increased by 40% and our conversion rates have never been higher.",
    initials: "EW",
    color: "from-purple-600 to-purple-700"
  },
  {
    name: "David Kim",
    role: "Director of Innovation",
    company: "FinanceCore Systems",
    content: "Their machine learning models revolutionized our risk assessment process. We now make faster, more accurate decisions with complete confidence.",
    initials: "DK",
    color: "from-orange-600 to-orange-700"
  },
  {
    name: "Lisa Park",
    role: "Chief Data Officer",
    company: "HealthTech Dynamics",
    content: "The AI automation platform they built streamlined our patient data analysis. We&apos;re now able to provide insights that directly improve patient outcomes.",
    initials: "LP",
    color: "from-pink-600 to-pink-700"
  },
  {
    name: "James Wilson",
    role: "VP of Engineering",
    company: "CloudScale Solutions",
    content: "Lattice Partners helped us implement AI-driven scaling that reduced our infrastructure costs by 45% while improving performance across all metrics.",
    initials: "JW",
    color: "from-cyan-600 to-cyan-700"
  }
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  // Auto-rotate for mobile (pause when dragging)
  useEffect(() => {
    if (isDragging) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isDragging])

  const handleDragEnd = (event: MouseEvent, info: { offset: { x: number } }) => {
    const threshold = 50 // Minimum drag distance
    
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0) {
        // Dragged right - go to previous
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      } else {
        // Dragged left - go to next
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }
    }
    setIsDragging(false)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          What Our Clients Say
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Don&apos;t just take our word for it. Hear from the leaders who&apos;ve transformed their businesses with AI.
        </p>
      </div>

      {/* Mobile Single Card View */}
      <div className="md:hidden">
        <div className="relative h-80 overflow-hidden mb-8">
          {testimonials.map((testimonial, index) => {
            return (
              <motion.div
                key={index}
                initial={{ x: '100%', opacity: 0 }}
                animate={{ 
                  x: index === currentIndex ? '0%' : 
                     index < currentIndex || (currentIndex === 0 && index === testimonials.length - 1) ? '-100%' : '100%',
                  opacity: index === currentIndex ? 1 : 0
                }}
                transition={{ 
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={handleDragEnd}
                className="absolute inset-0 px-4 cursor-grab active:cursor-grabbing"
                style={{ 
                  pointerEvents: index === currentIndex ? 'auto' : 'none'
                }}
              >
                <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-slate-100 h-full overflow-hidden">
                  {/* Gradient accent */}
                  <div className={`absolute -top-px -left-px -right-px h-2 bg-gradient-to-r ${testimonial.color} rounded-t-2xl`} />
                  
                  {/* Avatar */}
                  <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-sm mb-4`}>
                    {testimonial.initials}
                  </div>

                  {/* Content */}
                  <blockquote className="text-slate-700 mb-4 leading-relaxed text-sm">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>

                  {/* Author info */}
                  <div className="border-t border-slate-100 pt-4">
                    <div className="font-semibold text-slate-900 text-sm">{testimonial.name}</div>
                    <div className="text-slate-600 text-sm">{testimonial.role}</div>
                    <div className="text-slate-500 text-xs mt-1">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Mobile Dots Navigation */}
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-azure-600 w-8' : 'bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Scrolling Carousel */}
      <div className="hidden md:block relative">
        {/* Left edge blur */}
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        
        {/* Right edge blur */}
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
        
        <div className="overflow-hidden py-4">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, `-${(testimonials.length * 400)}px`]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 150,
                ease: "linear"
              }
            }}
          >
            {/* Render testimonials multiple times for seamless infinite scroll */}
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="flex-shrink-0 w-96"
              >
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-slate-200 h-full overflow-hidden">
                  {/* Gradient accent */}
                  <div className={`absolute -top-px -left-px -right-px h-2 bg-gradient-to-r ${testimonial.color} rounded-t-2xl`} />
                  
                  {/* Avatar */}
                  <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-sm mb-4`}>
                    {testimonial.initials}
                  </div>

                  {/* Content */}
                  <blockquote className="text-slate-700 mb-4 leading-relaxed text-sm">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>

                  {/* Author info */}
                  <div className="border-t border-slate-100 pt-4">
                    <div className="font-semibold text-slate-900 text-sm">{testimonial.name}</div>
                    <div className="text-slate-600 text-sm">{testimonial.role}</div>
                    <div className="text-slate-500 text-xs mt-1">{testimonial.company}</div>
                  </div>

                  {/* Hover effect indicator */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-slate-50 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}