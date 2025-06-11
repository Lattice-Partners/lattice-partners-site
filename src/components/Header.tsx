'use client'

import { useState } from 'react'
import Link from 'next/link'
import SimpleIcon from './SimpleIcon'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-slate-900">
              Lattice Partners
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-slate-600 hover:text-azure-600 transition-colors">
              Services
            </Link>
            <Link href="#how-it-works" className="text-slate-600 hover:text-azure-600 transition-colors">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-slate-600 hover:text-azure-600 transition-colors">
              Testimonials
            </Link>
            <Link href="#case-studies" className="text-slate-600 hover:text-azure-600 transition-colors">
              Case Studies
            </Link>
            <Link 
              href="#contact" 
              className="bg-azure-600 text-white px-6 py-2 rounded-lg hover:bg-azure-700 transition-all duration-200"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-azure-600 hover:bg-light-blue-bg transition-all duration-200"
          >
            <SimpleIcon name={isMenuOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-slate-200">
              <Link
                href="#services"
                className="block px-3 py-2 text-slate-600 hover:text-azure-600 hover:bg-light-blue-bg rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#how-it-works"
                className="block px-3 py-2 text-slate-600 hover:text-azure-600 hover:bg-light-blue-bg rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#testimonials"
                className="block px-3 py-2 text-slate-600 hover:text-azure-600 hover:bg-light-blue-bg rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#case-studies"
                className="block px-3 py-2 text-slate-600 hover:text-azure-600 hover:bg-light-blue-bg rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="#contact"
                className="block mx-3 mt-4 bg-azure-600 text-white px-6 py-2 rounded-lg hover:bg-azure-700 transition-all duration-200 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 