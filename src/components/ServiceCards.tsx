'use client'

import { motion } from 'framer-motion'
import { Brain, Users, Zap, Settings } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: "AI Strategy",
    tagline: "Find the wins hiding in your workflow.",
    description: "We analyze your current processes and identify the most impactful AI opportunities for your business."
  },
  {
    icon: Users,
    title: "Team Training",
    tagline: "Hands-on workshops that stick.",
    description: "Practical training sessions that get your team confident and productive with AI tools."
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    tagline: "See it working before you blink.",
    description: "Quick proof-of-concepts that demonstrate AI solutions tailored to your specific needs."
  },
  {
    icon: Settings,
    title: "Custom Integration",
    tagline: "We make AI play nice with your stack.",
    description: "Seamless integration of AI capabilities into your existing systems and workflows."
  }
]

export default function ServiceCards() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          What We Do
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          We help businesses harness the power of AI through strategic consulting, 
          hands-on training, and custom implementations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <motion.div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-azure-600 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-azure-600 font-semibold text-sm mb-4">
                  {service.tagline}
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
} 