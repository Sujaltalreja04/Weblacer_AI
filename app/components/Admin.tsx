'use client'

import React, { useState } from 'react'
import { Shield, Users, FileText, Settings, BarChart3, Mail, Globe, Database, Lock, Eye, Edit, Trash2, Plus } from 'lucide-react'
import { motion } from 'framer-motion'
import TechBackground from './TechBackground'
import CornerTechModels from './CornerTechModels'

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loginData, setLoginData] = useState({ username: '', password: '' })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple authentication (in production, use proper authentication)
    if (loginData.username === 'admin' && loginData.password === 'weblancer2024') {
      setIsAuthenticated(true)
    } else {
      alert('Invalid credentials')
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-black">
        {/* Animated green glow at the top */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] sm:w-[80vw] h-32 sm:h-48 z-10" style={{
          background: 'radial-gradient(ellipse 60% 100% at 50% 0%, #B5FF6D 0%, transparent 80%)',
          filter: 'blur(24px) sm:blur(32px)',
          opacity: 0.7,
          animation: 'glowPulse 3s ease-in-out infinite',
        }} />
        {/* Corner Tech Models (animated, in corners) */}
        <CornerTechModels />
        {/* Tech Background */}
        <TechBackground zIndex="z-0" />
        {/* Main Admin Login Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="max-w-md w-full mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-700">
              <div className="text-center mb-6 sm:mb-8">
                <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-[#B5FF6D] mx-auto mb-3 sm:mb-4" />
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Admin Panel</h1>
                <p className="text-[#8A9A5B] text-sm sm:text-base">Secure access to website management</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Username</label>
                  <input
                    type="text"
                    value={loginData.username}
                    onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-[#B5FF6D] focus:outline-none text-sm sm:text-base"
                    placeholder="Enter username"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Password</label>
                  <input
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-[#B5FF6D] focus:outline-none text-sm sm:text-base"
                    placeholder="Enter password"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-[#B5FF6D] text-black font-bold rounded-lg hover:bg-[#A3E85C] transition-colors duration-300 text-sm sm:text-base"
                >
                  Login to Admin Panel
                </button>
              </form>

              <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-[#8A9A5B]">
                Demo credentials: admin / weblancer2024
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
    { id: 'content', name: 'Content Management', icon: FileText },
    { id: 'users', name: 'User Management', icon: Users },
    { id: 'services', name: 'Services & Packages', icon: Globe },
    { id: 'messages', name: 'Contact Messages', icon: Mail },
    { id: 'settings', name: 'Site Settings', icon: Settings }
  ]

  const renderDashboard = () => (
    <div className="space-y-6 sm:space-y-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#8A9A5B] text-xs sm:text-sm">Total Visitors</p>
              <p className="text-xl sm:text-3xl font-bold text-white">12,543</p>
            </div>
            <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-[#B5FF6D]" />
          </div>
        </div>

        <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#8A9A5B] text-xs sm:text-sm">Active Projects</p>
              <p className="text-xl sm:text-3xl font-bold text-white">47</p>
            </div>
            <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-[#B5FF6D]" />
          </div>
        </div>

        <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#8A9A5B] text-xs sm:text-sm">New Messages</p>
              <p className="text-xl sm:text-3xl font-bold text-white">23</p>
            </div>
            <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-[#B5FF6D]" />
          </div>
        </div>

        <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#8A9A5B] text-xs sm:text-sm">Revenue</p>
              <p className="text-xl sm:text-3xl font-bold text-white">₹2.4L</p>
            </div>
            <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-[#B5FF6D]" />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
        <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Recent Activities</h3>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-3 p-2 sm:p-3 bg-gray-700 rounded-lg">
              <div className="w-2 h-2 bg-[#B5FF6D] rounded-full"></div>
              <span className="text-white text-sm sm:text-base">New contact form submission</span>
              <span className="text-[#8A9A5B] text-xs sm:text-sm ml-auto">2 min ago</span>
            </div>
            <div className="flex items-center space-x-3 p-2 sm:p-3 bg-gray-700 rounded-lg">
              <div className="w-2 h-2 bg-[#B5FF6D] rounded-full"></div>
              <span className="text-white text-sm sm:text-base">Project completed: E-commerce site</span>
              <span className="text-[#8A9A5B] text-xs sm:text-sm ml-auto">1 hour ago</span>
            </div>
            <div className="flex items-center space-x-3 p-2 sm:p-3 bg-gray-700 rounded-lg">
              <div className="w-2 h-2 bg-[#B5FF6D] rounded-full"></div>
              <span className="text-white text-sm sm:text-base">New user registration</span>
              <span className="text-[#8A9A5B] text-xs sm:text-sm ml-auto">3 hours ago</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <button className="p-3 sm:p-4 bg-[#B5FF6D]/10 border border-[#B5FF6D]/30 rounded-lg hover:bg-[#B5FF6D]/20 transition-colors duration-300">
              <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-[#B5FF6D] mx-auto mb-1 sm:mb-2" />
              <span className="text-white text-xs sm:text-sm">Add Content</span>
            </button>
            <button className="p-3 sm:p-4 bg-[#B5FF6D]/10 border border-[#B5FF6D]/30 rounded-lg hover:bg-[#B5FF6D]/20 transition-colors duration-300">
              <Edit className="w-5 h-5 sm:w-6 sm:h-6 text-[#B5FF6D] mx-auto mb-1 sm:mb-2" />
              <span className="text-white text-xs sm:text-sm">Edit Services</span>
            </button>
            <button className="p-3 sm:p-4 bg-[#B5FF6D]/10 border border-[#B5FF6D]/30 rounded-lg hover:bg-[#B5FF6D]/20 transition-colors duration-300">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#B5FF6D] mx-auto mb-1 sm:mb-2" />
              <span className="text-white text-xs sm:text-sm">View Messages</span>
            </button>
            <button className="p-3 sm:p-4 bg-[#B5FF6D]/10 border border-[#B5FF6D]/30 rounded-lg hover:bg-[#B5FF6D]/20 transition-colors duration-300">
              <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-[#B5FF6D] mx-auto mb-1 sm:mb-2" />
              <span className="text-white text-xs sm:text-sm">Site Settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderContent = () => (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white">Content Management</h2>
        <button className="px-4 sm:px-6 py-2 sm:py-3 bg-[#B5FF6D] text-black font-bold rounded-lg hover:bg-[#A3E85C] transition-colors duration-300 text-sm sm:text-base">
          Add New Content
        </button>
      </div>

      <div className="grid gap-4 sm:gap-6">
        <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">Homepage Content</h3>
            <div className="flex space-x-2">
              <button className="p-1.5 sm:p-2 bg-[#B5FF6D]/10 border border-[#B5FF6D]/30 rounded-lg hover:bg-[#B5FF6D]/20 transition-colors duration-300">
                <Edit className="w-3 h-3 sm:w-4 sm:h-4 text-[#B5FF6D]" />
              </button>
              <button className="p-1.5 sm:p-2 bg-red-500/10 border border-red-500/30 rounded-lg hover:bg-red-500/20 transition-colors duration-300">
                <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
              </button>
            </div>
          </div>
          <p className="text-[#8A9A5B] mb-3 sm:mb-4 text-sm sm:text-base">Main hero section and company overview</p>
          <div className="flex items-center space-x-4 text-xs sm:text-sm text-[#8A9A5B]">
            <span>Last updated: 2 days ago</span>
            <span>Status: Published</span>
          </div>
        </div>

        <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">About Us Page</h3>
            <div className="flex space-x-2">
              <button className="p-1.5 sm:p-2 bg-[#B5FF6D]/10 border border-[#B5FF6D]/30 rounded-lg hover:bg-[#B5FF6D]/20 transition-colors duration-300">
                <Edit className="w-3 h-3 sm:w-4 sm:h-4 text-[#B5FF6D]" />
              </button>
              <button className="p-1.5 sm:p-2 bg-red-500/10 border border-red-500/30 rounded-lg hover:bg-red-500/20 transition-colors duration-300">
                <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
              </button>
            </div>
          </div>
          <p className="text-[#8A9A5B] mb-3 sm:mb-4 text-sm sm:text-base">Company story, team information, and values</p>
          <div className="flex items-center space-x-4 text-xs sm:text-sm text-[#8A9A5B]">
            <span>Last updated: 1 week ago</span>
            <span>Status: Published</span>
          </div>
        </div>

        <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">Services & Packages</h3>
            <div className="flex space-x-2">
              <button className="p-1.5 sm:p-2 bg-[#B5FF6D]/10 border border-[#B5FF6D]/30 rounded-lg hover:bg-[#B5FF6D]/20 transition-colors duration-300">
                <Edit className="w-3 h-3 sm:w-4 sm:h-4 text-[#B5FF6D]" />
              </button>
              <button className="p-1.5 sm:p-2 bg-red-500/10 border border-red-500/30 rounded-lg hover:bg-red-500/20 transition-colors duration-300">
                <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
              </button>
            </div>
          </div>
          <p className="text-[#8A9A5B] mb-3 sm:mb-4 text-sm sm:text-base">Service offerings and pricing packages</p>
          <div className="flex items-center space-x-4 text-xs sm:text-sm text-[#8A9A5B]">
            <span>Last updated: 3 days ago</span>
            <span>Status: Published</span>
          </div>
        </div>
      </div>
    </div>
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard()
      case 'content':
        return renderContent()
      case 'users':
        return <div className="text-white">User Management Panel</div>
      case 'services':
        return <div className="text-white">Services & Packages Management</div>
      case 'messages':
        return <div className="text-white">Contact Messages</div>
      case 'settings':
        return <div className="text-white">Site Settings</div>
      default:
        return renderDashboard()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="min-h-screen bg-black pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Admin Panel</h1>
              <p className="text-[#8A9A5B] text-sm sm:text-base">Manage your website content and settings</p>
            </div>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors duration-300 text-sm sm:text-base"
            >
              Logout
            </button>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 sm:p-6">
                <nav className="space-y-1 sm:space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-300 text-sm sm:text-base ${
                        activeTab === tab.id
                          ? 'bg-[#B5FF6D] text-black'
                          : 'text-white hover:bg-gray-700'
                      }`}
                    >
                      <tab.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="hidden sm:inline">{tab.name}</span>
                      <span className="sm:hidden">{tab.name.split(' ')[0]}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 sm:p-8">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Admin