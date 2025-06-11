'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="bg-azure-600 text-white py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
              <Sparkles className="w-10 h-10 text-white" strokeWidth={1.5} />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Transform Your Business with AI?
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed max-w-3xl mx-auto">
            Join hundreds of companies already using AI to work smarter, faster, and more efficiently. 
            Let&apos;s explore what&apos;s possible for your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ 
                y: -2, 
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)" 
              }}
              whileTap={{ y: 0 }}
              className="px-10 py-5 bg-white text-azure-600 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center group shadow-xl"
            >
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-azure-600 transition-all duration-300"
            >
              Schedule a Call
            </motion.button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70 mb-4 text-sm uppercase tracking-wider font-semibold">
              Trusted by innovative companies
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center text-white/60">
              <span className="text-lg font-semibold">TechFlow</span>
              <span className="text-lg font-semibold">LogiCore</span>
              <span className="text-lg font-semibold">InnovateLab</span>
              <span className="text-lg font-semibold">RetailTech</span>
              <span className="text-lg font-semibold">FinanceNext</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 