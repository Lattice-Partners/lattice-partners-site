'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutUs() {
  const companies = [
    { name: 'EY', logo: '/logos/ey.svg', width: 80, height: 40 },
    { name: 'Google', logo: '/logos/google.svg', width: 120, height: 60 },
    { name: 'Red Bull', logo: '/logos/redbull.svg', width: 120, height: 60 },
    { name: 'Dapper Labs', logo: '/logos/dapper.svg', width: 180, height: 80 },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          About us
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          {`We're AI-loving engineers, product managers, and consultants who've worked at industry-leading companies.`}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-4xl mx-auto">
        {companies.map((company) => (
          <motion.div
            key={company.name}
            className="bg-white p-6 flex items-center justify-center"
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
  )
} 