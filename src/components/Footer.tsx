'use client'

import { Linkedin } from 'lucide-react'
// import { Twitter, Github } from 'lucide-react' // Commented out for now
import Image from 'next/image'
import Link from 'next/link'

const navigationLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#what-we-do' },
  { name: 'Our Process', href: '#how-we-help' },
  { name: 'Case Studies', href: '#case-blog' },
  { name: 'Contact Us', href: 'https://calendar.app.google/NuVomh6DP35bz7Bq7' }
]

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/lattice-partners' },
  // { name: 'Twitter', icon: Twitter, href: '#' },
  // { name: 'GitHub', icon: Github, href: '#' }
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between py-8 space-y-6 md:space-y-0">
          {/* Logo section */}
          <div className="flex items-center">
            <Image
              src="/logos/lattice-partners-logo.png"
              alt="Lattice Partners Logo"
              width={64}
              height={64}
              className="w-16 h-16"
            />
          </div>

          {/* Navigation links */}
          <nav className="flex flex-wrap items-center justify-center space-x-8">
            {navigationLinks.map((link) => {
              const isExternal = link.href.startsWith('http')
              if (isExternal) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-azure-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                )
              }
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-azure-600 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          {/* Social links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              const isExternal = social.href.startsWith('http')
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-azure-600 hover:text-white transition-all duration-200"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </a>
              )
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-200 py-6">
          <p className="text-center text-sm text-slate-500">
            © 2025 Lattice Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 