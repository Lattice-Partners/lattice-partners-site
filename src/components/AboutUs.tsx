'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutUs() {
  const companies = [
    { name: 'EY', logo: '/logos/ey.svg', width: 60, height: 30 },
    { name: 'Google', logo: '/logos/google.svg', width: 110, height: 55 },
    { name: 'Red Bull', logo: '/logos/redbull.svg', width: 90, height: 45 },
    { name: 'Dapper Labs', logo: '/logos/dapper.svg', width: 135, height: 60 },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Dotted line with text */}
      <div className="relative flex items-center justify-center mb-8">
        <div className="flex-1 border-t border-dotted border-slate-300"></div>
        <div className="px-6">
          <p className="text-slate-600 text-center max-w-2xl">
            Built by AI-loving engineers, product managers, and consultants who&apos;ve worked at industry-leading companies.
          </p>
        </div>
        <div className="flex-1 border-t border-dotted border-slate-300"></div>
      </div>

      {/* Company logos */}
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center max-w-4xl">
          {companies.map((company) => (
            <motion.div
              key={company.name}
              className="p-4 flex items-center justify-center"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={company.width}
                height={company.height}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 