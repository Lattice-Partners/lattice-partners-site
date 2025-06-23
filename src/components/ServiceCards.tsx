'use client'

import { motion } from 'framer-motion'
import { Brain, GraduationCap, Zap } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: "360° Strategy",
    tagline: "Understand where AI fits into your business.",
    description: "We analyze your current processes and identify the most impactful AI opportunities for your business."
  },
  {
    icon: GraduationCap,
    title: "Team Training",
    tagline: "Turn your employees into AI experts.",
    description: "We lead hands-on, personalized training sessions that get your team confident and productive with AI tools."
  },
  {
    icon: Zap,
    title: "Custom Solutions",
    tagline: "Automations and software that save your team time.",
    description: "We build solutions that automate frustrating, complex processes with AI."
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
          We help businesses leverage the power of AI through strategic consulting, 
          hands-on training, and custom implementations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <motion.div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-azure-200 transition-all duration-300 cursor-pointer group"
              whileHover={{ 
                scale: 1.02,
                y: -4
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-azure-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-azure-700 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-azure-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-azure-600 font-semibold text-sm mb-4 group-hover:text-azure-700 transition-colors duration-300">
                  {service.tagline}
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
} 