'use client'

import React, { useEffect, useState } from 'react'
import { Building, Users, Award, TrendingUp, Server, Database, Cloud, Shield, Globe, Zap, User } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import TechBackground from './TechBackground'
import CornerTechModels from './CornerTechModels'
import Image from 'next/image'

// Founder and Team Data
const founders = [
  {
    name: 'Sujal Kishore Kumar Talreja',
    title: 'Co-Founder & CMO',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQH6MXmr5U3dgg/profile-displayphoto-shrink_800_800/B4DZSivOX3GkAg-/0/1737897077615?e=1756944000&v=beta&t=7CLvtVDBXLeRKqe8fQc1iov3i9Zy5HtntJWwvnqZ5ak',
    expertise: 'Web Development • Marketing Strategy • Data Analytics',
    story: `Sujal is a passionate web developer and analytics expert, specializing in the MERN stack. As Co-Founder & CMO, he bridges the gap between technology and business growth, driving digital innovation and data-driven strategies for Weblancer. His expertise in full-stack development and analytics empowers our clients to achieve scalable, high-performance solutions.`
  },
  {
    name: 'Hitanshu Patel',
    title: 'Co-Founder & CTO',
    image: 'https://i.ibb.co/GQJdsNmp/Screenshot-2025-07-06-215018.png',
    expertise: 'Python Development • AI Solutions • Tech Strategy',
    story: `Hitanshu is a Python developer and AI solutions architect. As Co-Founder & CTO, he leads the innovation engine behind Weblancer's tech stack, specializing in intelligent systems, automation pipelines, and scalable backend architectures for high-performance applications.`
  }
]

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  decimals?: number
}
function Counter({ end, duration = 1500, suffix = '', decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  useEffect(() => {
    if (!inView) return
    let start = 0
    const increment = end / (duration / 16)
    let frame: number
    function animate() {
      start += increment
      if ((increment > 0 && start < end) || (increment < 0 && start > end)) {
        setCount(start)
        frame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }
    animate()
    return () => cancelAnimationFrame(frame)
  }, [end, duration, inView])
  return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>
}

const About: React.FC = () => {
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
      {/* Main About Content */}
      <div>
        {/* Hero Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#B5FF6D]/10 border border-[#B5FF6D]/30 rounded-full mb-6 sm:mb-8">
                <Building className="w-4 h-4 sm:w-5 sm:h-5 text-[#B5FF6D]" />
                <span className="text-[#B5FF6D] font-semibold text-sm sm:text-base">About Weblancer</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">Leading Digital Innovation Company</h1>
              <p className="text-lg sm:text-xl text-[#8A9A5B] max-w-4xl mx-auto px-2">
                Weblancer is a premier technology company specializing in enterprise-grade 
                digital solutions. We partner with Fortune 500 companies and emerging startups 
                to deliver scalable, secure, and innovative technology platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-12 sm:py-16 bg-black relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-10 text-center">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <a href="/services#web-development" className="group bg-gray-800/60 p-6 sm:p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300 flex flex-col items-center text-center relative shadow-lg hover:shadow-[0_0_24px_4px_#B5FF6D55]">
                <Building className="w-8 h-8 sm:w-10 sm:h-10 text-[#B5FF6D] mb-3 sm:mb-4 group-hover:animate-pulse" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Web Development</h3>
                <p className="text-[#8A9A5B] mb-2 text-sm sm:text-base">Modern, responsive websites for your business growth.</p>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#B5FF6D] text-black text-xs font-semibold px-3 py-1 rounded shadow-lg z-20 pointer-events-none whitespace-nowrap">"Websites promote you 24/7: No employee will do that."</span>
              </a>
              <a href="/services#app-development" className="group bg-gray-800/60 p-6 sm:p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300 flex flex-col items-center text-center relative shadow-lg hover:shadow-[0_0_24px_4px_#B5FF6D55]">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-[#B5FF6D] mb-3 sm:mb-4 group-hover:animate-pulse" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">App Development</h3>
                <p className="text-[#8A9A5B] mb-2 text-sm sm:text-base">Mobile and web apps tailored to your needs.</p>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#B5FF6D] text-black text-xs font-semibold px-3 py-1 rounded shadow-lg z-20 pointer-events-none whitespace-nowrap">"The future of mobile is the future of online. It is how people access online content now."</span>
              </a>
              <a href="/services#video-editing" className="group bg-gray-800/60 p-6 sm:p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300 flex flex-col items-center text-center relative shadow-lg hover:shadow-[0_0_24px_4px_#B5FF6D55]">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-[#B5FF6D] mb-3 sm:mb-4 group-hover:animate-pulse" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Video Editing</h3>
                <p className="text-[#8A9A5B] mb-2 text-sm sm:text-base">Professional video editing for marketing and branding.</p>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#B5FF6D] text-black text-xs font-semibold px-3 py-1 rounded shadow-lg z-20 pointer-events-none whitespace-nowrap">"The art of video editing is the art of storytelling."</span>
              </a>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-12 sm:py-20 bg-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">Meet Our Founders</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {founders.map((founder) => (
                <div key={founder.name} className="flex flex-col items-center">
                  <div className="relative group w-full max-w-md h-64 sm:h-80 lg:h-96 mb-4 sm:mb-6 rounded-3xl bg-black shadow-2xl"
                    style={{
                      boxShadow: '0 0 60px 0 #183c1b, 0 0 120px 10px #B5FF6D33',
                      background: 'rgba(10,10,10,0.65)',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    {/* Founder Photo */}
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      width={400}
                      height={400}
                      className="absolute inset-0 w-full h-full object-cover rounded-3xl transition-all duration-500 group-hover:blur-md group-hover:scale-105 opacity-90"
                    />
                    {/* Netflix-Style Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/10 rounded-3xl backdrop-blur-md"
                      style={{ zIndex: 2 }}
                    >
                      <div className="p-4 sm:p-8 w-full text-center text-white bg-black/10 rounded-2xl backdrop-blur-xl border border-[#B5FF6D]/30 shadow-xl animate-fadeInUp">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">{founder.name}</h3>
                        <h4 className="text-lg sm:text-xl text-[#B5FF6D] font-semibold mb-2">{founder.title}</h4>
                        <p className="text-sm sm:text-base text-[#B5FF6D] mb-2">{founder.expertise || ''}</p>
                        <p className="text-gray-200 text-xs sm:text-sm lg:text-base leading-relaxed">{founder.story}</p>
                      </div>
                    </div>
                    {/* Glowing Effect */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl z-10" style={{
                      boxShadow: '0 0 80px 10px #B5FF6D55, 0 0 160px 40px #183c1b55',
                      opacity: 0.7
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-12 sm:py-20 bg-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Our Technology Stack</h2>
              <p className="text-lg sm:text-xl text-[#8A9A5B] max-w-3xl mx-auto px-2">
                We leverage the latest technologies and frameworks to deliver robust, scalable, and future-proof solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
                <Server className="w-10 h-10 sm:w-12 sm:h-12 text-[#B5FF6D] mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Backend Technologies</h3>
                <div className="space-y-1 sm:space-y-2 text-[#8A9A5B] text-sm sm:text-base">
                  <div>• Node.js & Express</div>
                  <div>• Python & Django</div>
                  <div>• Java & Spring Boot</div>
                  <div>• .NET Core</div>
                  <div>• Microservices Architecture</div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
                <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-[#B5FF6D] mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Frontend Technologies</h3>
                <div className="space-y-1 sm:space-y-2 text-[#8A9A5B] text-sm sm:text-base">
                  <div>• React & Next.js</div>
                  <div>• Vue.js & Nuxt.js</div>
                  <div>• Angular</div>
                  <div>• TypeScript</div>
                  <div>• Progressive Web Apps</div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
                <Database className="w-10 h-10 sm:w-12 sm:h-12 text-[#B5FF6D] mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Database & Storage</h3>
                <div className="space-y-1 sm:space-y-2 text-[#8A9A5B] text-sm sm:text-base">
                  <div>• PostgreSQL & MySQL</div>
                  <div>• MongoDB & Redis</div>
                  <div>• Elasticsearch</div>
                  <div>• AWS S3 & CloudFront</div>
                  <div>• Data Warehousing</div>
                </div>
              </div>

              {/* Additional service cards with mobile responsive layout */}
              <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
                <Users className="w-10 h-10 sm:w-12 sm:h-12 text-[#B5FF6D] mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Social Media Management</h3>
                <div className="space-y-1 sm:space-y-2 text-[#8A9A5B] text-sm sm:text-base">
                  <div>• Strategy & Planning</div>
                  <div>• Content Scheduling</div>
                  <div>• Engagement & Analytics</div>
                  <div>• Platform Optimization</div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
                <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-[#B5FF6D] mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Video Editing</h3>
                <div className="space-y-1 sm:space-y-2 text-[#8A9A5B] text-sm sm:text-base">
                  <div>• Promotional Videos</div>
                  <div>• Social Media Clips</div>
                  <div>• Motion Graphics</div>
                  <div>• Post-Production</div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
                <Award className="w-10 h-10 sm:w-12 sm:h-12 text-[#B5FF6D] mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">AI & Machine Learning</h3>
                <div className="space-y-1 sm:space-y-2 text-[#8A9A5B] text-sm sm:text-base">
                  <div>• TensorFlow & PyTorch</div>
                  <div>• Natural Language Processing</div>
                  <div>• Computer Vision</div>
                  <div>• Predictive Analytics</div>
                  <div>• AI-Powered Automation</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About