'use client'

import { motion } from 'framer-motion'
import SimpleIcon from './SimpleIcon'

export default function CtaBanner() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <SimpleIcon name="sparkles" size={32} className="text-azure-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-azure-600 mb-6">
            Ready to Go AI-Firstso?
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of companies who have transformed their operations with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="inline-flex items-center justify-center px-8 py-4 bg-azure-600 text-white rounded-xl font-semibold hover:bg-azure-700 transition-all duration-200 shadow-lg text-lg"
            >
              Book a Consultation
              <SimpleIcon name="arrow-right" size={16} className="ml-2 text-white" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 