'use client'

import React from 'react'
import { Building, Users, Award, TrendingUp, Linkedin, Github, Mail, Twitter } from 'lucide-react'
import TechBackground from './TechBackground'
import CornerTechModels from './CornerTechModels'
import Image from 'next/image'
import { motion } from 'framer-motion';

// Founder Data
const founders = [
  {
    name: 'Sujal Kishore Kumar Talreja',
    title: 'Co-Founder & CMO',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQH6MXmr5U3dgg/profile-displayphoto-shrink_800_800/B4DZSivOX3GkAg-/0/1737897077615?e=1756944000&v=beta&t=7CLvtVDBXLeRKqe8fQc1iov3i9Zy5HtntJWwvnqZ5ak',
    expertise: 'Web Development • Marketing Strategy • Data Analytics',
    skills: ['MERN Stack', 'Marketing', 'Analytics', 'Leadership'],
    story: `Sujal is a passionate web developer and analytics expert, specializing in the MERN stack. As Co-Founder & CMO, he bridges the gap between technology and business growth, driving digital innovation and data-driven strategies for Weblancer. His expertise in full-stack development and analytics empowers our clients to achieve scalable, high-performance solutions.`,
    signature: '“Empowering businesses through code and creativity.”',
    funFacts: [
      'Loves hiking and nature photography',
      'Coffee enthusiast',
      'Enjoys playing chess and strategy games'
    ],
    timeline: [
      { year: '2022', event: 'Co-founded Weblancer' },
      { year: '2023', event: 'Launched first enterprise project' },
      { year: '2024', event: 'Expanded to 25+ countries' }
    ],
    social: {
      linkedin: 'https://www.linkedin.com/in/sujal-talreja/',
      github: 'https://github.com/Sujaltalreja04',
      email: 'sujal@weblancer.com',
      twitter: 'https://twitter.com/sujaltalreja'
    }
  },
  {
    name: 'Hitanshu Patel',
    title: 'Co-Founder & CTO',
    image: 'https://i.ibb.co/GQJdsNmp/Screenshot-2025-07-06-215018.png',
    expertise: 'Python Development • AI Solutions • Tech Strategy',
    skills: ['Python', 'AI/ML', 'Backend', 'Automation'],
    story: `Hitanshu is a Python developer and AI solutions architect. As Co-Founder & CTO, he leads the innovation engine behind Weblancer's tech stack, specializing in intelligent systems, automation pipelines, and scalable backend architectures for high-performance applications.`,
    signature: '“Building the future, one algorithm at a time.”',
    funFacts: [
      'Avid gamer and puzzle solver',
      'Loves experimenting with AI art',
      'Enjoys cycling and outdoor adventures'
    ],
    timeline: [
      { year: '2022', event: 'Co-founded Weblancer' },
      { year: '2023', event: 'Led AI/ML product launch' },
      { year: '2024', event: 'Scaled backend for global clients' }
    ],
    social: {
      linkedin: 'https://www.linkedin.com/in/hitanshu-patel/',
      github: 'https://github.com/hitanshu-patel',
      email: 'hitanshu@weblancer.com',
      twitter: 'https://twitter.com/hitanshu_patel'
    }
  }
]

const Founders: React.FC = () => {
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
      
      {/* Main Founders Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#B5FF6D]/10 border border-[#B5FF6D]/30 rounded-full mb-6 sm:mb-8">
                <Building className="w-4 h-4 sm:w-5 sm:h-5 text-[#B5FF6D]" />
                <span className="text-[#B5FF6D] font-semibold text-sm sm:text-base">Meet Our Founders</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">The Visionaries Behind Weblancer</h1>
              <p className="text-lg sm:text-xl text-[#8A9A5B] max-w-4xl mx-auto px-2">
                Meet the innovative minds who founded Weblancer with a vision to transform businesses 
                through cutting-edge technology and strategic digital solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-12 sm:py-20 bg-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {founders.map((founder, index) => (
                <motion.div
                  key={founder.name}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                >
                  <motion.div
                    className="relative group w-full max-w-md h-64 sm:h-80 lg:h-96 mb-4 sm:mb-6 rounded-3xl bg-black shadow-2xl cursor-pointer"
                    style={{
                      boxShadow: '0 0 60px 0 #183c1b, 0 0 120px 10px #B5FF6D33',
                      background: 'rgba(10,10,10,0.65)',
                      backdropFilter: 'blur(12px)',
                      perspective: 1000,
                    }}
                    whileHover={{ rotateY: 8, scale: 1.04, boxShadow: '0 0 80px 10px #B5FF6D88, 0 0 160px 40px #183c1b55' }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
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
                        {/* Skill Badges */}
                        <div className="flex flex-wrap justify-center gap-2 mb-2">
                          {founder.skills && founder.skills.map((skill, i) => (
                            <span key={i} className="px-2 py-1 rounded-full bg-[#222] border border-[#B5FF6D] text-[#B5FF6D] text-xs font-semibold shadow animate-pulse-glow">{skill}</span>
                          ))}
                        </div>
                        <p className="text-gray-200 text-xs sm:text-sm lg:text-base leading-relaxed mb-4">{founder.story}</p>
                        {/* Signature/Quote */}
                        <p className="italic text-[#B5FF6D] text-sm mb-2 animate-fade-in">{founder.signature}</p>
                        {/* Fun Facts */}
                        <div className="mb-2">
                          <h5 className="text-xs text-[#8A9A5B] font-semibold mb-1">Fun Facts:</h5>
                          <ul className="list-disc list-inside text-xs text-[#B5FF6D] space-y-1">
                            {founder.funFacts && founder.funFacts.map((fact, i) => (
                              <li key={i} className="animate-fade-in" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>{fact}</li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Social Links */}
                        <div className="flex justify-center space-x-3 sm:space-x-4">
                          <a 
                            href={founder.social.linkedin} 
                            className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#B5FF6D] hover:text-black transition-all duration-300 transform hover:scale-125 group border border-gray-700 hover:border-[#B5FF6D] animate-pulse-glow"
                            aria-label="LinkedIn"
                            target="_blank" rel="noopener noreferrer"
                          >
                            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-[#B5FF6D] group-hover:text-black" />
                          </a>
                          <a 
                            href={founder.social.github} 
                            className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#B5FF6D] hover:text-black transition-all duration-300 transform hover:scale-110 group border border-gray-700 hover:border-[#B5FF6D]"
                            aria-label="GitHub"
                            target="_blank" rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 sm:w-5 sm:h-5 text-[#B5FF6D] group-hover:text-black" />
                          </a>
                          <a 
                            href={`mailto:${founder.social.email}`} 
                            className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#B5FF6D] hover:text-black transition-all duration-300 transform hover:scale-110 group border border-gray-700 hover:border-[#B5FF6D]"
                            aria-label="Email"
                          >
                            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#B5FF6D] group-hover:text-black" />
                          </a>
                          <a 
                            href={founder.social.twitter} 
                            className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#B5FF6D] hover:text-black transition-all duration-300 transform hover:scale-110 group border border-gray-700 hover:border-[#B5FF6D]"
                            aria-label="Twitter"
                            target="_blank" rel="noopener noreferrer"
                          >
                            <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-[#B5FF6D] group-hover:text-black" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Glowing Effect */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl z-10" style={{
                      boxShadow: '0 0 80px 10px #B5FF6D55, 0 0 160px 40px #183c1b55',
                      opacity: 0.7
                    }} />
                  </motion.div>

                  {/* Founder Info Card (Mobile Visible) */}
                  <div className="lg:hidden bg-gray-800/50 p-4 sm:p-6 rounded-xl border border-gray-700 w-full max-w-md">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{founder.name}</h3>
                    <h4 className="text-lg text-[#B5FF6D] font-semibold mb-2">{founder.title}</h4>
                    <p className="text-sm text-[#B5FF6D] mb-3">{founder.expertise}</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{founder.story}</p>
                    
                    {/* Social Links for Mobile */}
                    <div className="flex justify-center space-x-3">
                      <a 
                        href={founder.social.linkedin} 
                        className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#B5FF6D] hover:text-black transition-all duration-300 transform hover:scale-110 group border border-gray-700 hover:border-[#B5FF6D]"
                        aria-label="LinkedIn"
                        target="_blank" rel="noopener noreferrer"
                      >
                        <Linkedin className="w-5 h-5 text-[#B5FF6D] group-hover:text-black" />
                      </a>
                      <a 
                        href={founder.social.github} 
                        className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#B5FF6D] hover:text-black transition-all duration-300 transform hover:scale-110 group border border-gray-700 hover:border-[#B5FF6D]"
                        aria-label="GitHub"
                        target="_blank" rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5 text-[#B5FF6D] group-hover:text-black" />
                      </a>
                      <a 
                        href={`mailto:${founder.social.email}`} 
                        className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#B5FF6D] hover:text-black transition-all duration-300 transform hover:scale-110 group border border-gray-700 hover:border-[#B5FF6D]"
                        aria-label="Email"
                      >
                        <Mail className="w-5 h-5 text-[#B5FF6D] group-hover:text-black" />
                      </a>
                      <a 
                        href={founder.social.twitter} 
                        className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#B5FF6D] hover:text-black transition-all duration-300 transform hover:scale-110 group border border-gray-700 hover:border-[#B5FF6D]"
                        aria-label="Twitter"
                        target="_blank" rel="noopener noreferrer"
                      >
                        <Twitter className="w-5 h-5 text-[#B5FF6D] group-hover:text-black" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline/Journey Section */}
        <section className="py-12 sm:py-20 bg-black relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">Founders' Journey</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              {founders.map((founder, idx) => (
                <div key={founder.name} className="flex-1 bg-[#181818] rounded-2xl border border-[#B5FF6D]/40 shadow-lg p-6 mb-6 sm:mb-0 animate-fade-in">
                  <div className="flex items-center gap-3 mb-2">
                    <Image src={founder.image} alt={founder.name} width={40} height={40} className="rounded-full border border-[#B5FF6D]" />
                    <span className="font-bold text-[#B5FF6D]">{founder.name}</span>
                  </div>
                  <ul className="timeline list-none pl-0">
                    {founder.timeline && founder.timeline.map((item, i) => (
                      <li key={i} className="mb-2 flex items-center gap-2">
                        <span className="inline-block w-2 h-2 bg-[#B5FF6D] rounded-full"></span>
                        <span className="text-xs text-[#8A9A5B] font-semibold">{item.year}</span>
                        <span className="text-xs text-white">{item.event}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Vision */}
        <section className="py-12 sm:py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Our Shared Vision</h2>
            <p className="text-lg sm:text-xl text-[#8A9A5B] mb-6 sm:mb-8 px-2">
              Together, our founders bring a unique combination of technical expertise and business acumen 
              to drive Weblancer's mission of transforming businesses through innovative technology solutions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-gray-800/50 p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-[#B5FF6D] mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Team Leadership</h3>
                <p className="text-[#8A9A5B] text-sm sm:text-base">Guiding our talented team towards excellence</p>
              </div>
              
              <div className="bg-gray-800/50 p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-[#B5FF6D] mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Innovation</h3>
                <p className="text-[#8A9A5B] text-sm sm:text-base">Pioneering cutting-edge solutions</p>
              </div>
              
              <div className="bg-gray-800/50 p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
                <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-[#B5FF6D] mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Growth</h3>
                <p className="text-[#8A9A5B] text-sm sm:text-base">Driving sustainable business growth</p>
              </div>
              
              <div className="bg-gray-800/50 p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
                <Building className="w-8 h-8 sm:w-10 sm:h-10 text-[#B5FF6D] mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Enterprise</h3>
                <p className="text-[#8A9A5B] text-sm sm:text-base">Building enterprise-grade solutions</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Founders