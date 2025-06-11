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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <motion.a 
            href="#" 
            className="-m-1.5 p-1.5"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <span className="sr-only">Lattice Partners</span>
            <div className="flex items-center space-x-2">
              {/* Logo/Icon */}
              <div className="w-8 h-8 bg-gradient-to-br from-azure-600 to-gradient-end rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm opacity-90"></div>
              </div>
              {/* Wordmark */}
              <div className="text-xl font-bold text-slate-900">
                Lattice <span className="text-azure-600">Partners</span>
              </div>
            </div>
          </motion.a>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-slate-700 hover:text-azure-600 transition-colors"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <motion.a
            href="#contact"
            className="rounded-full bg-azure-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-azure-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure-600 transition-colors"
            whileHover={{ y: -1 }}
            whileTap={{ y: 0 }}
          >
            Get Started
          </motion.a>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Lattice Partners</span>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-azure-600 to-gradient-end rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm opacity-90"></div>
                  </div>
                  <div className="text-xl font-bold text-slate-900">
                    Lattice <span className="text-azure-600">Partners</span>
                  </div>
                </div>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-slate-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-slate-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#contact"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 