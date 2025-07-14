'use client'

import React from 'react'
import { Github, Linkedin, Mail, Twitter, Building, Globe, Shield, Award } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <>
      <div className="w-full overflow-hidden" style={{ lineHeight: 0, background: '#000' }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 sm:h-20">
          <path fill="#B5FF6D" fillOpacity="0.12">
            <animate attributeName="d" dur="6s" repeatCount="indefinite"
              values="M0,40 Q360,80 720,40 T1440,40;M0,40 Q360,0 720,40 T1440,40;M0,40 Q360,80 720,40 T1440,40" />
            M0,40 Q360,80 720,40 T1440,40
          </path>
        </svg>
      </div>
      <footer className="bg-black border-t border-gray-800 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Company Info */}
            <div className="sm:col-span-2">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <Image
                  src="https://i.postimg.cc/DwwNNDsr/Whats-App-Image-2025-06-26-at-17-33-59-a813e2b2.jpg"
                  alt="Weblancer Logo"
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover bg-[#B5FF6D] border-2 border-[#B5FF6D]"
                />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">WEBLANCER</h3>
                  <p className="text-[#8A9A5B] text-xs sm:text-sm">Digital Innovation Company</p>
                </div>
              </div>
              <p className="text-[#8A9A5B] leading-relaxed mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
                Transforming businesses worldwide through cutting-edge technology solutions, 
                enterprise-grade development, and strategic digital innovation.
              </p>
              
              {/* Certifications */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                <div className="flex items-center space-x-2 px-2 sm:px-3 py-1 bg-gray-800 rounded-full border border-gray-700">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-[#B5FF6D]" />
                  <span className="text-[#8A9A5B] text-xs">ISO 27001</span>
                </div>
                <div className="flex items-center space-x-2 px-2 sm:px-3 py-1 bg-gray-800 rounded-full border border-gray-700">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 text-[#B5FF6D]" />
                  <span className="text-[#8A9A5B] text-xs">SOC 2 Type II</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6">Enterprise Services</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="/services#web-development" className="text-[#8A9A5B] hover:text-[#B5FF6D] transition-colors duration-300 text-sm sm:text-base">Web Development</Link></li>
                <li><Link href="/services#app-development" className="text-[#8A9A5B] hover:text-[#B5FF6D] transition-colors duration-300 text-sm sm:text-base">Mobile Applications</Link></li>
                <li><Link href="/services#video-editing" className="text-[#8A9A5B] hover:text-[#B5FF6D] transition-colors duration-300 text-sm sm:text-base">Video Editing</Link></li>
                <li><Link href="/services#social-media-management" className="text-[#8A9A5B] hover:text-[#B5FF6D] transition-colors duration-300 text-sm sm:text-base">Social Media Management</Link></li>
                <li><Link href="/services#logo-designing" className="text-[#8A9A5B] hover:text-[#B5FF6D] transition-colors duration-300 text-sm sm:text-base">Logo Designing</Link></li>
                <li><Link href="/services" className="text-[#8A9A5B] hover:text-[#B5FF6D] transition-colors duration-300 text-sm sm:text-base">Data Engineering</Link></li>
                <li><Link href="/services" className="text-[#8A9A5B] hover:text-[#B5FF6D] transition-colors duration-300 text-sm sm:text-base">AI/ML Solutions</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6">Company</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="/" className="text-[#8A9A5B] hover:text-[#B5FF6D] transition-colors duration-300 text-sm sm:text-base">Home Page</Link></li>
                <li><Link href="/about" className="text-[#8A9A5B] hover:text-[#B5FF6D] transition-colors duration-300 text-sm sm:text-base">About Us</Link></li>
                <li><Link href="/contact" className="text-[#8A9A5B] hover:text-[#B5FF6D] transition-colors duration-300 text-sm sm:text-base">Contact Us</Link></li>
                <li><Link href="/services" className="text-[#8A9A5B] hover:text-[#B5FF6D] transition-colors duration-300 text-sm sm:text-base">Services & Packages</Link></li>
              </ul>
            </div>
          </div>

          {/* Global Presence */}
          <div className="border-t border-gray-800 pt-6 sm:pt-8 mb-6 sm:mb-8">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#B5FF6D]" />
              <span className="text-white font-semibold text-sm sm:text-base">Global Presence</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center sm:text-left">
                <h5 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Americas</h5>
                <p className="text-[#8A9A5B] text-xs sm:text-sm">New York • San Francisco • Toronto</p>
              </div>
              <div className="text-center sm:text-left">
                <h5 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Europe</h5>
                <p className="text-[#8A9A5B] text-xs sm:text-sm">London • Berlin • Amsterdam</p>
              </div>
              <div className="text-center sm:text-left">
                <h5 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Asia Pacific</h5>
                <p className="text-[#8A9A5B] text-xs sm:text-sm">Singapore • Tokyo • Sydney • India</p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-[#8A9A5B] text-xs sm:text-sm">
                  © 2024 Weblancer Corporation. All rights reserved.
                </p>
                <div className="flex items-center justify-center md:justify-start space-x-3 sm:space-x-4 mt-2">
                  <Link href="#" className="text-[#8A9A5B] hover:text-[#B5FF6D] text-xs transition-colors duration-300">Privacy Policy</Link>
                  <span className="text-gray-700">•</span>
                  <Link href="#" className="text-[#8A9A5B] hover:text-[#B5FF6D] text-xs transition-colors duration-300">Terms of Service</Link>
                  <span className="text-gray-700">•</span>
                  <Link href="#" className="text-[#8A9A5B] hover:text-[#B5FF6D] text-xs transition-colors duration-300">Security</Link>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3 sm:space-x-4">
                <a 
                  href="https://www.linkedin.com/company/web%CA%9Fancer/?viewAsMember=true" 
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#B5FF6D] hover:text-black transition-all duration-300 transform hover:scale-110 group border border-gray-700 hover:border-[#B5FF6D]"
                  aria-label="LinkedIn"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-[#B5FF6D] group-hover:text-black" />
                </a>
                <a 
                  href="https://github.com/Sujaltalreja04" 
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#B5FF6D] hover:text-black transition-all duration-300 transform hover:scale-110 group border border-gray-700 hover:border-[#B5FF6D]"
                  aria-label="GitHub"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 text-[#B5FF6D] group-hover:text-black" />
                </a>
                <a 
                  href="https://x.com/WeblancerA81312" 
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#B5FF6D] hover:text-black transition-all duration-300 transform hover:scale-110 group border border-gray-700 hover:border-[#B5FF6D]"
                  aria-label="Twitter"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-[#B5FF6D] group-hover:text-black" />
                </a>
                <a 
                  href="mailto:weblancerai04@gmail.com" 
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#B5FF6D] hover:text-black transition-all duration-300 transform hover:scale-110 group border border-gray-700 hover:border-[#B5FF6D]"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#B5FF6D] group-hover:text-black" />
                </a>
              </div>
            </div>

            {/* Back to Top Button */}
            <div className="mt-6 sm:mt-8 text-center">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-6 sm:px-8 py-2 sm:py-3 border border-[#8A9A5B] text-[#8A9A5B] rounded-lg hover:border-[#B5FF6D] hover:text-[#B5FF6D] hover:bg-[#B5FF6D]/5 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer