'use client'

import { motion } from 'framer-motion'
import { Search, Lightbulb, Cog, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We interview you and your employees, diving deep into your challenges, goals, and current processes."
  },
  {
    icon: Lightbulb,
    title: "Strategy",
    description: "We craft a tailored AI roadmap that aligns with your business objectives and employee capabilities."
  },
  {
    icon: Cog,
    title: "Implementation",
    description: "We level up your team with AI skills, create custom workflows to automate your processes, and work with you to define your AI strategy and culture."
  },
  {
    icon: Rocket,
    title: "Launch & Scale",
    description: "We deploy long-term solutions, train your team to explore AI tools, and provide ongoing support to ensure long-term success."
  }
]

export default function StepperTimeline() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Our Process
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          We take you from AI-curious to AI-driven, with support every step of the way.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-azure-600 via-gradient-start to-gradient-end hidden lg:block" />
        
        <div className="space-y-8 lg:space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0
            
            return (
              <div
                key={step.title}
                className={`relative flex items-center ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:gap-12`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-azure-600 rounded-full border-4 border-white shadow-lg hidden lg:block z-10" />
                
                {/* Step number for mobile */}
                <div className="flex items-center mb-4 lg:hidden">
                  <div className="w-8 h-8 bg-azure-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Content card */}
                <div className={`w-full lg:w-1/2 ${isEven ? '' : 'lg:text-right'}`}>
                  <motion.div
                    className="bg-white rounded-card p-6 shadow-card"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-secondary-gradient rounded-xl flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-left">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Spacer for desktop */}
                <div className="w-1/2 hidden lg:block" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
} 