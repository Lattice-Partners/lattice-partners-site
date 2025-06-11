'use client'

import { motion } from 'framer-motion'
import { Search, Lightbulb, Cog, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We dive deep into your business to understand your challenges, goals, and current processes.",
    duration: "Week 1"
  },
  {
    icon: Lightbulb,
    title: "Strategy",
    description: "We design a tailored AI roadmap that aligns with your business objectives and technical capabilities.",
    duration: "Week 2"
  },
  {
    icon: Cog,
    title: "Implementation",
    description: "We build and integrate AI solutions with your team, ensuring smooth adoption and maximum impact.",
    duration: "Weeks 3-6"
  },
  {
    icon: Rocket,
    title: "Launch & Scale",
    description: "We deploy solutions, train your team, and provide ongoing support to ensure long-term success.",
    duration: "Ongoing"
  }
]

export default function StepperTimeline() {
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
          How We Help
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Our proven process takes you from AI curiosity to confident implementation, 
          with support every step of the way.
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-azure-600 via-gradient-start to-gradient-end hidden lg:block" />
        
        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0
            
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:gap-16`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-azure-600 rounded-full border-4 border-white shadow-lg hidden lg:block z-10" />
                
                {/* Step number for mobile */}
                <div className="flex items-center mb-6 lg:hidden">
                  <div className="w-8 h-8 bg-azure-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </div>
                  <span className="text-azure-600 font-semibold text-sm">{step.duration}</span>
                </div>

                {/* Content card */}
                <div className={`w-full lg:w-1/2 ${isEven ? '' : 'lg:text-right'}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-card p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className={`flex items-center mb-4 ${isEven ? '' : 'lg:justify-end'}`}>
                      <div className={`w-12 h-12 bg-secondary-gradient rounded-xl flex items-center justify-center ${isEven ? 'mr-4' : 'lg:ml-4 lg:order-2'}`}>
                        <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                      </div>
                      <div className={`${isEven ? '' : 'lg:order-1'}`}>
                        <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                        <span className="text-azure-600 font-semibold text-sm hidden lg:inline">{step.duration}</span>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Spacer for desktop */}
                <div className="w-1/2 hidden lg:block" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
} 