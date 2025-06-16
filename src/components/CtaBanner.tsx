'use client'

import { motion } from 'framer-motion'
import SimpleIcon from './SimpleIcon'

export default function CtaBanner() {
  return (
    <div className="bg-gradient-to-r from-azure-600 to-azure-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div

          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <SimpleIcon name="sparkles" size={32} className="text-white" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          
          <p className="text-xl text-azure-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies who have revolutionized their operations with AI. 
            Start your transformation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-azure-600 rounded-xl font-semibold hover:bg-azure-50 transition-all duration-200 shadow-lg"
            >
              Book a Consultation
              <SimpleIcon name="arrow-right" size={16} className="ml-2" />
            </motion.button>

          </div>
        </motion.div>
      </div>
    </div>
  )
} 