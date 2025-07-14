'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services & Packages', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Founders', path: '/founders' },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#B5FF6D] rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 overflow-hidden">
              <Image 
                src="https://i.postimg.cc/DwwNNDsr/Whats-App-Image-2025-06-26-at-17-33-59-a813e2b2.jpg" 
                alt="Logo" 
                width={40}
                height={40}
                className="w-6 h-6 sm:w-10 sm:h-10 object-contain" 
              />
            </div>
            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-white group-hover:text-[#B5FF6D] transition-colors duration-300">
                WEBLANCER
              </h1>
              <p className="text-[#8A9A5B] text-xs hidden sm:block">Digital Innovation</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`relative px-2 xl:px-4 py-2 font-semibold transition-all duration-300 text-sm xl:text-base ${
                  isActive(item.path)
                    ? 'text-[#B5FF6D]'
                    : 'text-white hover:text-[#B5FF6D]'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B5FF6D] animate-pulse"></div>
                )}
              </Link>
            ))}
            
            <Link
              href="/services"
              className="px-4 xl:px-6 py-2 xl:py-3 bg-[#B5FF6D] text-black font-bold rounded-lg hover:bg-[#A3E85C] transform hover:scale-105 transition-all duration-300 text-sm xl:text-base"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white hover:text-[#B5FF6D] transition-colors duration-300"
          >
            {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 sm:py-6 border-t border-gray-800">
            <div className="space-y-3 sm:space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 font-semibold transition-colors duration-300 text-sm sm:text-base ${
                    isActive(item.path)
                      ? 'text-[#B5FF6D]'
                      : 'text-white hover:text-[#B5FF6D]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 sm:px-6 py-2 sm:py-3 bg-[#B5FF6D] text-black font-bold rounded-lg hover:bg-[#A3E85C] text-center transition-colors duration-300 text-sm sm:text-base"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar