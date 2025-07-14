'use client'

import React, { useState } from 'react'
import { Mail, MessageCircle, Phone, Send, MapPin, Calendar, Building, Users } from 'lucide-react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    subject: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Enterprise inquiry submitted:', formData)
  }

  return (
    <section className="py-12 sm:py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#B5FF6D]/10 border border-[#B5FF6D]/30 rounded-full mb-6 sm:mb-8">
            <Building className="w-4 h-4 sm:w-5 sm:h-5 text-[#B5FF6D]" />
            <span className="text-[#B5FF6D] font-semibold text-sm sm:text-base">Enterprise Partnerships</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Let's Build the Future Together</h2>
          <p className="text-lg sm:text-xl text-[#8A9A5B] max-w-3xl mx-auto px-2">
            Ready to transform your business with cutting-edge technology? Our enterprise team 
            is standing by to discuss your project requirements and strategic objectives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Get In Touch</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4 group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#B5FF6D]/10 rounded-xl flex items-center justify-center border border-[#B5FF6D]/30 group-hover:bg-[#B5FF6D]/20 transition-colors duration-300 transform group-hover:rotateY-12" style={{ boxShadow: '0 0 24px 4px #B5FF6D55' }}>
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-[#B5FF6D]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base sm:text-lg">Email</p>
                    <p className="text-[#8A9A5B] text-sm sm:text-base">weblancerai04@gmail.com</p>
                    <p className="text-[#8A9A5B] text-xs sm:text-sm">24/7 Response Guarantee</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4 group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#B5FF6D]/10 rounded-xl flex items-center justify-center border border-[#B5FF6D]/30 group-hover:bg-[#B5FF6D]/20 transition-colors duration-300 transform group-hover:rotateY-12" style={{ boxShadow: '0 0 24px 4px #B5FF6D55' }}>
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-[#B5FF6D]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base sm:text-lg">Phone Numbers</p>
                    <p className="text-[#8A9A5B] text-sm sm:text-base">7574021120, 9925607120</p>
                    <p className="text-[#8A9A5B] text-xs sm:text-sm">Available 9AM-9PM IST</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4 group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#B5FF6D]/10 rounded-xl flex items-center justify-center border border-[#B5FF6D]/30 group-hover:bg-[#B5FF6D]/20 transition-colors duration-300 transform group-hover:rotateY-12" style={{ boxShadow: '0 0 24px 4px #B5FF6D55' }}>
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-[#B5FF6D]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base sm:text-lg">Office Location</p>
                    <p className="text-[#8A9A5B] text-sm sm:text-base">Ahmedabad, Gujarat, India</p>
                    <p className="text-[#8A9A5B] text-xs sm:text-sm">Serving clients globally</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4 group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#B5FF6D]/10 rounded-xl flex items-center justify-center border border-[#B5FF6D]/30 group-hover:bg-[#B5FF6D]/20 transition-colors duration-300 transform group-hover:rotateY-12" style={{ boxShadow: '0 0 24px 4px #B5FF6D55' }}>
                    <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-[#B5FF6D]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base sm:text-lg">Schedule Meeting</p>
                    <p className="text-[#8A9A5B] text-sm sm:text-base">Book a strategy session</p>
                    <p className="text-[#8A9A5B] text-xs sm:text-sm">Free consultation available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise Benefits */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#B5FF6D]" />
                <span className="text-white font-bold text-lg sm:text-xl">Enterprise Advantages</span>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#B5FF6D] rounded-full"></div>
                  <span className="text-[#8A9A5B] text-sm sm:text-base">Dedicated project manager</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#B5FF6D] rounded-full"></div>
                  <span className="text-[#8A9A5B] text-sm sm:text-base">24/7 priority support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#B5FF6D] rounded-full"></div>
                  <span className="text-[#8A9A5B] text-sm sm:text-base">Custom SLA agreements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#B5FF6D] rounded-full"></div>
                  <span className="text-[#8A9A5B] text-sm sm:text-base">Scalable team allocation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Contact Form */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-700" style={{ boxShadow: '0 0 32px 8px #B5FF6D55' }}>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Start Your Enterprise Project</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="group">
                  <label className="block text-white font-semibold mb-2 group-hover:text-[#B5FF6D] transition-colors duration-300 text-sm sm:text-base">Company Name *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-[#B5FF6D] focus:outline-none transition-all duration-300 group-hover:border-[#B5FF6D]/50 group-hover:shadow-[0_0_20px_rgba(181,255,109,0.2)] focus:shadow-[0_0_20px_rgba(181,255,109,0.3)] text-sm sm:text-base"
                    placeholder="Your company"
                    required
                  />
                </div>
                <div className="group">
                  <label className="block text-white font-semibold mb-2 group-hover:text-[#B5FF6D] transition-colors duration-300 text-sm sm:text-base">Contact Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-[#B5FF6D] focus:outline-none transition-all duration-300 group-hover:border-[#B5FF6D]/50 group-hover:shadow-[0_0_20px_rgba(181,255,109,0.2)] focus:shadow-[0_0_20px_rgba(181,255,109,0.3)] text-sm sm:text-base"
                    placeholder="Your name"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="group">
                  <label className="block text-white font-semibold mb-2 group-hover:text-[#B5FF6D] transition-colors duration-300 text-sm sm:text-base">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-[#B5FF6D] focus:outline-none transition-all duration-300 group-hover:border-[#B5FF6D]/50 group-hover:shadow-[0_0_20px_rgba(181,255,109,0.2)] focus:shadow-[0_0_20px_rgba(181,255,109,0.3)] text-sm sm:text-base"
                    placeholder="your@company.com"
                    required
                  />
                </div>
                <div className="group">
                  <label className="block text-white font-semibold mb-2 group-hover:text-[#B5FF6D] transition-colors duration-300 text-sm sm:text-base">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-[#B5FF6D] focus:outline-none transition-all duration-300 group-hover:border-[#B5FF6D]/50 group-hover:shadow-[0_0_20px_rgba(181,255,109,0.2)] focus:shadow-[0_0_20px_rgba(181,255,109,0.3)] text-sm sm:text-base"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-white font-semibold mb-2 group-hover:text-[#B5FF6D] transition-colors duration-300 text-sm sm:text-base">Subject of Inquiry *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-[#B5FF6D] focus:outline-none transition-all duration-300 group-hover:border-[#B5FF6D]/50 group-hover:shadow-[0_0_20px_rgba(181,255,109,0.2)] focus:shadow-[0_0_20px_rgba(181,255,109,0.3)] text-sm sm:text-base"
                  required
                >
                  <option value="">Select your inquiry subject</option>
                  <optgroup label="Development Services">
                    <option value="enterprise-web-development">Enterprise Web Development</option>
                    <option value="mobile-app-solutions">Mobile App Solutions</option>
                    <option value="custom-software">Custom Software Development</option>
                    <option value="api-development">API Development & Integration</option>
                  </optgroup>
                  <optgroup label="Infrastructure & Cloud">
                    <option value="cloud-infrastructure">Cloud Infrastructure</option>
                    <option value="devops-implementation">DevOps Implementation</option>
                    <option value="system-architecture">System Architecture Design</option>
                    <option value="performance-optimization">Performance Optimization</option>
                  </optgroup>
                  <optgroup label="Data & Analytics">
                    <option value="data-engineering">Data Engineering</option>
                    <option value="business-intelligence">Business Intelligence</option>
                    <option value="data-analytics-platform">Data Analytics Platform</option>
                    <option value="database-design">Database Design & Optimization</option>
                  </optgroup>
                  <optgroup label="AI & Machine Learning">
                    <option value="ai-ml-solutions">AI & Machine Learning Solutions</option>
                    <option value="predictive-analytics">Predictive Analytics</option>
                    <option value="computer-vision">Computer Vision</option>
                    <option value="nlp-processing">Natural Language Processing</option>
                  </optgroup>
                  <optgroup label="Security & Compliance">
                    <option value="cybersecurity">Cybersecurity Services</option>
                    <option value="security-audit">Security Audit & Assessment</option>
                    <option value="compliance-implementation">Compliance Implementation</option>
                    <option value="penetration-testing">Penetration Testing</option>
                  </optgroup>
                  <optgroup label="Design & UX">
                    <option value="ux-ui-design">UX/UI Design</option>
                    <option value="brand-identity">Brand Identity Design</option>
                    <option value="user-research">User Research & Testing</option>
                    <option value="prototyping">Prototyping & Wireframing</option>
                  </optgroup>
                  <optgroup label="Digital Marketing">
                    <option value="digital-marketing">Digital Marketing Strategy</option>
                    <option value="seo-optimization">SEO Optimization</option>
                    <option value="content-strategy">Content Strategy</option>
                    <option value="analytics-implementation">Analytics Implementation</option>
                  </optgroup>
                  <optgroup label="Consultation & Strategy">
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="technology-consultation">Technology Consultation</option>
                    <option value="project-management">Project Management</option>
                    <option value="team-augmentation">Team Augmentation</option>
                  </optgroup>
                  <optgroup label="Other">
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="partnership-opportunity">Partnership Opportunity</option>
                    <option value="career-opportunity">Career Opportunity</option>
                    <option value="other">Other</option>
                  </optgroup>
                </select>
              </div>

              <div className="group">
                <label className="block text-white font-semibold mb-2 group-hover:text-[#B5FF6D] transition-colors duration-300 text-sm sm:text-base">Project Details *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-[#B5FF6D] focus:outline-none transition-all duration-300 resize-none group-hover:border-[#B5FF6D]/50 group-hover:shadow-[0_0_20px_rgba(181,255,109,0.2)] focus:shadow-[0_0_20px_rgba(181,255,109,0.3)] text-sm sm:text-base"
                  placeholder="Describe your project requirements, goals, and any specific technical needs..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-[#B5FF6D] text-black font-bold rounded-lg hover:bg-[#A3E85C] transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 ripple-btn text-sm sm:text-base"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Submit Enterprise Inquiry</span>
                <div className="ripple-effect"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact