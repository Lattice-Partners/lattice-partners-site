'use client'

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navigation = [
  { name: 'Services', href: '#what-we-do' },
  { name: 'Process', href: '#how-we-help' },
  { name: 'Case Studies', href: '#case-blog' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glass background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/90 to-white/80 backdrop-blur-xl border-b border-white/20 shadow-2xl shadow-slate-900/5">
        {/* Liquid gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-azure-600/5 via-transparent to-gradient-end/5"></div>
        {/* Glass reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent"></div>
      </div>
      
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <motion.a 
            href="#" 
            className="-m-1.5 p-1.5"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <span className="sr-only">Lattice Partners</span>
            <div className="flex items-center space-x-3">
              {/* Liquid glass logo */}
              <div className="relative w-10 h-10">
                {/* Glass background */}
                <div className="absolute inset-0 bg-gradient-to-br from-azure-600 via-azure-500 to-gradient-end rounded-2xl shadow-lg"></div>
                {/* Glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent rounded-2xl"></div>
                {/* Inner content */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-5 h-5 bg-white/90 rounded-lg shadow-inner"></div>
                </div>
                {/* Liquid glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-azure-600/20 to-gradient-end/20 rounded-2xl blur-md -z-10"></div>
              </div>
              
              {/* Wordmark with glass effect */}
              <div className="text-xl font-bold">
                <span className="text-slate-900 drop-shadow-sm">Lattice</span>{' '}
                <span className="bg-gradient-to-r from-azure-600 to-gradient-end bg-clip-text text-transparent drop-shadow-sm">
                  Partners
                </span>
              </div>
            </div>
          </motion.a>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-slate-700 hover:bg-white/50 transition-all duration-200 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 text-sm font-semibold text-slate-700 hover:text-azure-600 transition-all duration-200 rounded-full hover:bg-white/40 backdrop-blur-sm"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              {item.name}
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-azure-600/10 to-gradient-end/10 opacity-0 hover:opacity-100 transition-opacity duration-200 -z-10"></div>
            </motion.a>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <motion.a
            href="#contact"
            className="relative overflow-hidden rounded-full bg-gradient-to-r from-azure-600 to-azure-700 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200"
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Glass overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10"></div>
            {/* Button glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-azure-600 to-gradient-end opacity-30 blur-lg -z-10"></div>
            <span className="relative">Get Started</span>
          </motion.a>
        </div>
      </nav>
      
      {/* Mobile menu with glass effect */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm">
            {/* Glass background for mobile menu */}
            <div className="absolute inset-0 bg-white/90 backdrop-blur-2xl border-l border-white/20 shadow-2xl">
              {/* Mobile menu gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-azure-600/5 via-transparent to-gradient-end/5"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center justify-between mb-8">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Lattice Partners</span>
                  <div className="flex items-center space-x-3">
                    {/* Mobile logo */}
                    <div className="relative w-10 h-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-azure-600 via-azure-500 to-gradient-end rounded-2xl shadow-lg"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent rounded-2xl"></div>
                      <div className="relative w-full h-full flex items-center justify-center">
                        <div className="w-5 h-5 bg-white/90 rounded-lg shadow-inner"></div>
                      </div>
                    </div>
                    <div className="text-xl font-bold">
                      <span className="text-slate-900">Lattice</span>{' '}
                      <span className="bg-gradient-to-r from-azure-600 to-gradient-end bg-clip-text text-transparent">
                        Partners
                      </span>
                    </div>
                  </div>
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-xl p-2.5 text-slate-700 hover:bg-white/50 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              
              <div className="flow-root">
                <div className="-my-6 divide-y divide-slate-200/20">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-xl px-3 py-3 text-base font-semibold leading-7 text-slate-900 hover:bg-white/50 backdrop-blur-sm transition-all duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#contact"
                      className="-mx-3 block rounded-xl px-3 py-3 text-base font-semibold leading-7 text-white bg-gradient-to-r from-azure-600 to-azure-700 shadow-lg hover:shadow-xl transition-all duration-200 relative overflow-hidden"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10"></div>
                      <span className="relative">Get Started</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 