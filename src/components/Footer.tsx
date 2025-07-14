import React from 'react';
import { Github, Linkedin, Mail, Twitter, Building, Globe, Shield, Award } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <>
      <div className="w-full overflow-hidden" style={{ lineHeight: 0, background: '#000' }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20">
          <path fill="#B5FF6D" fillOpacity="0.12">
            <animate attributeName="d" dur="6s" repeatCount="indefinite"
              values="M0,40 Q360,80 720,40 T1440,40;M0,40 Q360,0 720,40 T1440,40;M0,40 Q360,80 720,40 T1440,40" />
            M0,40 Q360,80 720,40 T1440,40
          </path>
        </svg>
      </div>
      <footer className="bg-black border-t border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="https://i.postimg.cc/DwwNNDsr/Whats-App-Image-2025-06-26-at-17-33-59-a813e2b2.jpg"
                  alt="Weblancer Logo"
                  className="w-12 h-12 rounded-lg object-cover bg-[#B5FF6D] border-2 border-[#B5FF6D]"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white">WEBLANCER</h3>
                  <p className="text-[#8A9A5B] text-sm">Digital Innovation Company</p>
                </div>
              </div>
              <p className="text-[#8A9A5B] leading-relaxed mb-6 max-w-md">
                Transforming businesses worldwide through cutting-edge technology solutions, 
                enterprise-grade development, and strategic digital innovation.
              </p>
              
              {/* Certifications */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 px-3 py-1 bg-gray-800 rounded-full border border-gray-700">
                  <Shield className="w-4 h-4 text-[#B5FF6D]" />
                  <span className="text-[#8A9A5B] text-xs">ISO 27001</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-1 bg-gray-800 rounded-full border border-gray-700">
                  <Award className="w-4 h-4 text-[#B5FF6D]" />
                  <span className="text-[#8A9A5B] text-xs">SOC 2 Type II</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Enterprise Services</h4>
              <ul className="space-y-3">
                <li><a href="/services#web-development" className="text-[#8A9A5B] hover:text-[#B5FF6D] transition-colors duration-300">Web Development</a></li>
                <li><a href="/services#app-development" className="text-[#8A9A5B] hover:text-[#B5FF6D] transition-colors duration-300">Mobile Applications</a></li>
                <li><a href="/services#video-editing" className="text-[#8A9A5B] hover:text-[#B5FF6D] transition-colors duration-300">Video Editing</a></li>
                <li><a href="/services#social-media-management" className="text-[#8A9A5B] hover:text-[#B5FF6D] transition-colors duration-300">Social Media Management</a></li>
                <li><a href="/services#logo-designing" className="text-[#8A9A5B] hover:text-[#B5FF6D] transition-colors duration-300">Logo Designing</a></li>
                <li><a href="/services" className="text-[#8A9A5B] hover:text-[#B5FF6D] transition-colors duration-300">Data Engineering</a></li>
                <li><a href="/services" className="text-[#8A9A5B] hover:text-[#B5FF6D] transition-colors duration-300">AI/ML Solutions</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-3">
                <li><a href="/" className="text-[#8A9A5B] hover:text-[#B5FF6D] transition-colors duration-300">Home Page</a></li>
                <li><a href="/about" className="text-[#8A9A5B] hover:text-[#B5FF6D] transition-colors duration-300">About Us</a></li>
                <li><a href="/contact" className="text-[#8A9A5B] hover:text-[#B5FF6D] transition-colors duration-300">Contact Us</a></li>
                <li><a href="/services" className="text-[#8A9A5B] hover:text-[#B5FF6D] transition-colors duration-300">Services & Packages</a></li>
              </ul>
            </div>
          </div>

          {/* Global Presence */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="w-5 h-5 text-[#B5FF6D]" />
              <span className="text-white font-semibold">Global Presence</span>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center md:text-left">
                <h5 className="text-white font-semibold mb-2">Americas</h5>
                <p className="text-[#8A9A5B] text-sm">New York • San Francisco • Toronto</p>
              </div>
              <div className="text-center md:text-left">
                <h5 className="text-white font-semibold mb-2">Europe</h5>
                <p className="text-[#8A9A5B] text-sm">London • Berlin • Amsterdam</p>
              </div>
              <div className="text-center md:text-left">
                <h5 className="text-white font-semibold mb-2">Asia Pacific</h5>
                <p className="text-[#8A9A5B] text-sm">Singapore • Tokyo • Sydney • India</p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-[#8A9A5B] text-sm">
                  © 2024 Weblancer Corporation. All rights reserved.
                </p>
                <div className="flex items-center justify-center md:justify-start space-x-4 mt-2">
                  <a href="#" className="text-[#8A9A5B] hover:text-[#B5FF6D] text-xs transition-colors duration-300">Privacy Policy</a>
                  <span className="text-gray-700">•</span>
                  <a href="#" className="text-[#8A9A5B] hover:text-[#B5FF6D] text-xs transition-colors duration-300">Terms of Service</a>
                  <span className="text-gray-700">•</span>
                  <a href="#" className="text-[#8A9A5B] hover:text-[#B5FF6D] text-xs transition-colors duration-300">Security</a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/web%CA%9Fancer/?viewAsMember=true" 
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#B5FF6D] hover:text-black transition-all duration-300 transform hover:scale-110 group border border-gray-700 hover:border-[#B5FF6D]"
                  aria-label="LinkedIn"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 text-[#B5FF6D] group-hover:text-black" />
                </a>
                <a 
                  href="https://github.com/Sujaltalreja04" 
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#B5FF6D] hover:text-black transition-all duration-300 transform hover:scale-110 group border border-gray-700 hover:border-[#B5FF6D]"
                  aria-label="GitHub"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 text-[#B5FF6D] group-hover:text-black" />
                </a>
                <a 
                  href="https://x.com/WeblancerA81312" 
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#B5FF6D] hover:text-black transition-all duration-300 transform hover:scale-110 group border border-gray-700 hover:border-[#B5FF6D]"
                  aria-label="Twitter"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Twitter className="w-5 h-5 text-[#B5FF6D] group-hover:text-black" />
                </a>
                <a 
                  href="mailto:weblancerai04@gmail.com" 
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#B5FF6D] hover:text-black transition-all duration-300 transform hover:scale-110 group border border-gray-700 hover:border-[#B5FF6D]"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-[#B5FF6D] group-hover:text-black" />
                </a>
              </div>
            </div>

            {/* Back to Top Button */}
            <div className="mt-8 text-center">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-8 py-3 border border-[#8A9A5B] text-[#8A9A5B] rounded-lg hover:border-[#B5FF6D] hover:text-[#B5FF6D] hover:bg-[#B5FF6D]/5 transition-all duration-300 transform hover:scale-105"
              >
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;