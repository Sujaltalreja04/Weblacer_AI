'use client'

import React, { useEffect, useState, useRef } from 'react'
import { ChevronDown, ArrowRight, Globe, Zap, Shield, Building, Users, Award, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import TechBackground from './TechBackground'
import CornerTechModels from './CornerTechModels'
import { useInView } from 'react-intersection-observer'

// Counter component for animated numbers
interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  decimals?: number
  onUpdate?: (value: number) => void
}
function Counter({ end, duration = 1500, suffix = '', decimals = 0, onUpdate }: CounterProps) {
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

  useEffect(() => {
    if (onUpdate) {
      onUpdate(count)
    }
  }, [count, onUpdate])

  return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>
}

// Typewriter effect hook
function useTypewriter(words: string[], speed = 120, pause = 1200) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pause)
      return
    }
    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1))
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [subIndex, index, deleting, words, speed, pause])

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((v) => !v), 500)
    return () => clearInterval(blinkInterval)
  }, [])

  return `${words[index].substring(0, subIndex)}${blink ? '|' : ' '}`
}

function CircularProgress({ value, max = 100, size = 56, stroke = 6, color = '#B5FF6D', bg = '#222' }: { value: number, max?: number, size?: number, stroke?: number, color?: string, bg?: string }) {
  const radius = (size - stroke) / 2
  const circ = 2 * Math.PI * radius
  const pct = Math.min(value / max, 1)
  return (
    <svg width={size} height={size} className="block mx-auto" style={{ transform: 'rotate(-90deg)' }}>
      <circle cx={size/2} cy={size/2} r={radius} stroke={bg} strokeWidth={stroke} fill="none" />
      <circle cx={size/2} cy={size/2} r={radius} stroke={color} strokeWidth={stroke} fill="none" strokeDasharray={circ} strokeDashoffset={circ * (1 - pct)} style={{ transition: 'stroke-dashoffset 0.6s cubic-bezier(.4,2,.6,1)' }} />
    </svg>
  )
}

const Home: React.FC = () => {
  const keywords = [
    'Enterprise-Grade Solutions',
    'Web & Mobile Innovation',
    'AI-Driven Growth',
    'Digital Transformation',
  ]
  const typewriterText = useTypewriter(keywords)
  const [uptime, setUptime] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
  const uptimeRef = useRef(false)
  // Fix: Responsive circle size for CircularProgress
  const [circleSize, setCircleSize] = useState(56);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCircleSize(window.innerWidth < 640 ? 48 : 56);
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="block w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-gradient-to-br from-[#B5FF6D] to-[#8AFF8A] opacity-30 animate-float"
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      {/* Animated green glow at the top */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] sm:w-[80vw] h-32 sm:h-48 z-10" style={{
        background: 'radial-gradient(ellipse 60% 100% at 50% 0%, #B5FF6D 0%, transparent 80%)',
        filter: 'blur(24px) sm:blur(32px)',
        opacity: 0.7,
        animation: 'glowPulse 3s ease-in-out infinite',
      }} />
      {/* Corner Tech Models (animated, in corners) */}
      <CornerTechModels />
      {/* Hero Section */}
      <section className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center pt-16 sm:pt-20">
        {/* Main Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">
          {/* Company Badge */}
          <div className="inline-flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#B5FF6D]/10 border border-[#B5FF6D]/30 rounded-full mb-6 sm:mb-8">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#B5FF6D]" />
            <span className="text-[#B5FF6D] font-semibold text-sm sm:text-base">Enterprise-Grade Solutions</span>
          </div>

          {/* Main Headline */}
          <div className="perspective-[2000px] mb-6 sm:mb-8">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-4 sm:mb-6 transform hover:rotateX-5 transition-transform duration-500">
              <span className="block mb-2 sm:mb-4">
                <span className="inline-block hover:text-[#B5FF6D] transition-colors duration-300">WEB</span>
                <span className="inline-block hover:text-[#B5FF6D] transition-colors duration-300 delay-150">LANCER</span>
              </span>
            </h1>
          </div>
          
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#8A9A5B] mb-4 sm:mb-6 max-w-4xl mx-auto leading-relaxed font-light px-2">
            Transforming businesses through cutting-edge digital solutions and innovative technology
          </div>

          <div className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto px-2">
            We deliver enterprise-level web applications, mobile solutions, and digital infrastructure 
            that scale with your business growth and exceed industry standards.
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
            <Link 
              href="/services"
              className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-[#B5FF6D] text-black font-bold rounded-lg hover:bg-[#A3E85C] transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link 
              href="/about"
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 border-[#8A9A5B] text-white font-bold rounded-lg hover:border-[#B5FF6D] hover:text-[#B5FF6D] transform hover:scale-105 transition-all duration-300 text-center"
            >
              Learn More
            </Link>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto px-4">
            <div className="group perspective-[1000px]">
              <div className="bg-gray-800/50 p-4 sm:p-6 rounded-xl border border-gray-700 group-hover:border-[#B5FF6D] transition-all duration-300 transform group-hover:rotateY-5">
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-[#B5FF6D] group-hover:animate-spin" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2"><Counter end={500} suffix="+" /></div>
                <div className="text-[#8A9A5B] text-sm sm:text-base">Global Clients</div>
              </div>
            </div>

            {/* Uptime Stat Card */}
            <div className="group perspective-[1000px]">
              <div className="bg-gray-800/50 p-4 sm:p-6 rounded-xl border border-gray-700 group-hover:border-[#B5FF6D] transition-all duration-300 transform group-hover:rotateY-5 relative">
                <div className="flex items-center justify-center mb-3 sm:mb-4 relative">
                  <span className="absolute inset-0 flex items-center justify-center">
                    <CircularProgress value={uptime} max={100} size={circleSize} stroke={6} color="#B5FF6D" bg="#222" />
                  </span>
                  <Zap className={`w-6 h-6 sm:w-8 sm:h-8 text-[#B5FF6D] group-hover:animate-pulse transition-transform duration-500 ${uptime >= 99.9 ? 'animate-bounce' : ''}`} />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 flex items-center justify-center">
                  <Counter end={99.9} duration={1800} suffix="%" decimals={1} onUpdate={val => {
                    setUptime(val)
                    if (!uptimeRef.current && val >= 99.9) {
                      setShowConfetti(true)
                      uptimeRef.current = true
                      setTimeout(() => setShowConfetti(false), 2000)
                    }
                  }} />
                </div>
                <div className="text-[#8A9A5B] text-sm sm:text-base">Uptime SLA</div>
                {showConfetti && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                    {[...Array(24)].map((_, i) => (
                      <span
                        key={i}
                        className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-[#B5FF6D] opacity-80 animate-confetti"
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: `rotate(${(360/24)*i}deg) translateY(-30px) sm:translateY(-40px)`
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="group perspective-[1000px]">
              <div className="bg-gray-800/50 p-4 sm:p-6 rounded-xl border border-gray-700 group-hover:border-[#B5FF6D] transition-all duration-300 transform group-hover:rotateY-5">
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-[#B5FF6D] group-hover:animate-bounce" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2"><Counter end={24} suffix="/7" /></div>
                <div className="text-[#8A9A5B] text-sm sm:text-base">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-[#B5FF6D]" />
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#B5FF6D]/10 border border-[#B5FF6D]/30 rounded-full mb-6 sm:mb-8">
              <Building className="w-4 h-4 sm:w-5 sm:h-5 text-[#B5FF6D]" />
              <span className="text-[#B5FF6D] font-semibold text-sm sm:text-base">Our Vision</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Shaping the Digital Future</h2>
            <p className="text-lg sm:text-xl text-[#8A9A5B] max-w-3xl mx-auto px-2">
              We envision a world where technology seamlessly integrates with business objectives, 
              creating unprecedented opportunities for growth and innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            {/* Vision Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Innovation First</h3>
                <p className="text-[#8A9A5B] leading-relaxed text-sm sm:text-base">
                  We believe in pushing the boundaries of what's possible, constantly exploring 
                  emerging technologies and methodologies to deliver solutions that set new industry standards.
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Client Success</h3>
                <p className="text-[#8A9A5B] leading-relaxed text-sm sm:text-base">
                  Your success is our success. We partner with you to understand your unique challenges 
                  and create tailored solutions that drive measurable business outcomes.
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Global Impact</h3>
                <p className="text-[#8A9A5B] leading-relaxed text-sm sm:text-base">
                  Through our work, we aim to create positive change that extends beyond individual businesses to benefit communities and industries worldwide.
                </p>
              </div>
            </div>

            {/* 3D Vision Visualization */}
            <div className="relative perspective-[2000px]">
              <div className="transform rotateY-12 hover:rotateY-0 transition-transform duration-700">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-700 relative overflow-hidden">
                  {/* Vision Metrics */}
                  <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-[#B5FF6D] mb-1 sm:mb-2"><Counter end={150} suffix="+" /></div>
                      <div className="text-[#8A9A5B] text-xs sm:text-sm">Expert Team</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-[#B5FF6D] mb-1 sm:mb-2"><Counter end={25} suffix="+" /></div>
                      <div className="text-[#8A9A5B] text-xs sm:text-sm">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-[#B5FF6D] mb-1 sm:mb-2"><Counter end={500} suffix="+" /></div>
                      <div className="text-[#8A9A5B] text-xs sm:text-sm">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-[#B5FF6D] mb-1 sm:mb-2"><Counter end={99.9} duration={1800} suffix="%" decimals={1} /></div>
                      <div className="text-[#8A9A5B] text-xs sm:text-sm">Success Rate</div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-[#B5FF6D]/30 to-[#8A9A5B]/30 rounded-lg border border-[#B5FF6D]/50 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 sm:w-6 sm:h-6 text-[#B5FF6D]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home