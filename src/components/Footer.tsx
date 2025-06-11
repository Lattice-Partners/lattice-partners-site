'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'AI Strategy', href: '#' },
    { name: 'Team Training', href: '#' },
    { name: 'Rapid Prototyping', href: '#' },
    { name: 'Custom Integration', href: '#' }
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Our Team', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#' }
  ],
  resources: [
    { name: 'Case Studies', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'Newsletter', href: '#' }
  ]
}

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' }
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-white text-slate-600 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                AI Consulting
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed max-w-md">
                We help businesses harness the power of AI through strategic consulting, 
                hands-on training, and custom implementations.
              </p>
              
              {/* Contact info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-azure-600" strokeWidth={1.5} />
                  <span>hello@aiconsulting.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-azure-600" strokeWidth={1.5} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-azure-600" strokeWidth={1.5} />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ y: -2 }}
                      className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-azure-600 hover:text-white transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-slate-900 mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="hover:text-azure-600 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="hover:text-azure-600 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-slate-900 mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="hover:text-azure-600 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-slate-200"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-500">
              © 2024 AI Consulting. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-500 hover:text-azure-600 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 hover:text-azure-600 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-slate-500 hover:text-azure-600 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 