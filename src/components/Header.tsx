'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SimpleIcon from './SimpleIcon'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const maxScroll = window.innerHeight * 0.3 // Transition completes at 30% of viewport
      const progress = Math.min(scrollPosition / maxScroll, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Interpolation functions for smooth transitions
  const interpolate = (start: number, end: number, progress: number) => 
    start + (end - start) * progress

  const borderRadius = interpolate(0, 50, scrollProgress) // 0px to 50px (full rounded)
  const topPadding = interpolate(0, 16, scrollProgress) // 0 to 1rem
  const sidePadding = interpolate(0, 16, scrollProgress) // 0 to 1rem  
  const scale = interpolate(100, 95, scrollProgress) // 100% to 95%
  const maxWidth = interpolate(100, 85, scrollProgress) // 100% to 85% width
  const opacity = interpolate(1, 0.8, scrollProgress) // 1 to 0.8 opacity
  const blur = interpolate(0, 12, scrollProgress) // 0 to 12px blur

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out"
      style={{
        paddingTop: `${topPadding}px`,
        paddingLeft: `${sidePadding}px`,
        paddingRight: `${sidePadding}px`,
      }}
    >
      {/* Backdrop blur fade effect above nav pill */}
      {scrollProgress > 0.1 && (
        <div 
          className="absolute left-0 right-0 pointer-events-none transition-all duration-500"
          style={{
            top: '0px',
            height: `${topPadding + 25}px`, // Only extends to just above the pill
            background: `rgba(248, 250, 255, ${scrollProgress * 0.8})`,
            backdropFilter: `blur(${interpolate(0, 4, scrollProgress)}px)`,
            maskImage: `radial-gradient(ellipse 200% 100% at 50% 0%, black 0%, black 40%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(ellipse 200% 100% at 50% 0%, black 0%, black 40%, transparent 100%)`,
            opacity: Math.min(scrollProgress * 1.3, 1),
          }}
        />
      )}
      <div 
        className="mx-auto transition-all duration-300 ease-out border border-white/20"
        style={{
          borderRadius: `${borderRadius}px`,
          maxWidth: `${maxWidth}%`,
          backgroundColor: `rgba(255, 255, 255, ${opacity})`,
          backdropFilter: `blur(${blur}px)`,
          boxShadow: scrollProgress > 0.1 
            ? `0 ${interpolate(1, 8, scrollProgress)}px ${interpolate(3, 25, scrollProgress)}px rgba(0, 0, 0, ${interpolate(0.1, 0.15, scrollProgress)})` 
            : `0 1px 3px rgba(0, 0, 0, 0.1)`,
          borderBottom: scrollProgress < 0.1 ? '1px solid rgb(226, 232, 240)' : 'none',
        }}
      >
        <div 
          className="px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-out"
          style={{
            transform: `scale(${scale / 100})`,
          }}
        >
          <div className="flex justify-between items-center h-12 sm:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logos/lattice-partners-logo.png"
                alt="Lattice Partners Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-2xl font-semibold text-slate-900">
                Lattice Partners
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden min-[1300px]:flex items-center space-x-8">
              <Link href="#what-we-do" className="text-slate-600 hover:text-azure-600 transition-colors">
                Services
              </Link>
              <Link href="#how-we-help" className="text-slate-600 hover:text-azure-600 transition-colors">
                Our Process
              </Link>
              {/* <Link href="#testimonials" className="text-slate-600 hover:text-azure-600 transition-colors">
                Testimonials
              </Link> */}
              <Link href="#about" className="text-slate-600 hover:text-azure-600 transition-colors">
                About Us
              </Link>
              <Link href="#case-blog" className="text-slate-600 hover:text-azure-600 transition-colors">
                Case Studies
              </Link>
              <a 
                href="https://calendly.com/d/cv2j-t66-djr/intro-with-lattice-partners"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-azure-600 text-white px-6 py-2 rounded-lg hover:bg-azure-700 transition-all duration-200"
              >
                Book a Consultation
              </a>
            </nav>

            {/* Mobile/Tablet menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="min-[1300px]:hidden p-2 rounded-lg text-slate-600 hover:text-azure-600 hover:bg-light-blue-bg transition-all duration-200"
            >
              <SimpleIcon name={isMenuOpen ? 'close' : 'menu'} size={24} />
            </button>
          </div>

          {/* Mobile/Tablet Navigation */}
          {isMenuOpen && (
            <div className="min-[1300px]:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 border-t border-slate-200">
                <Link
                  href="#what-we-do"
                  className="block px-3 py-2 text-slate-600 hover:text-azure-600 hover:bg-light-blue-bg rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="#how-we-help"
                  className="block px-3 py-2 text-slate-600 hover:text-azure-600 hover:bg-light-blue-bg rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Process
                </Link>
                {/* <Link
                  href="#testimonials"
                  className="block px-3 py-2 text-slate-600 hover:text-azure-600 hover:bg-light-blue-bg rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </Link> */}
                <Link
                  href="#about"
                  className="block px-3 py-2 text-slate-600 hover:text-azure-600 hover:bg-light-blue-bg rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="#case-blog"
                  className="block px-3 py-2 text-slate-600 hover:text-azure-600 hover:bg-light-blue-bg rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Case Studies
                </Link>
                <a
                  href="https://calendly.com/d/cv2j-t66-djr/intro-with-lattice-partners"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mx-3 mt-4 bg-azure-600 text-white px-6 py-2 rounded-lg hover:bg-azure-700 transition-all duration-200 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book a Consultation
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
} 