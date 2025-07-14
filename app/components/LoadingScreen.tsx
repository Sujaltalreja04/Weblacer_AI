'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onLoadingComplete, 1000)
          return 100
        }
        return prev + 1.5
      })
    }, 40)

    return () => clearInterval(timer)
  }, [onLoadingComplete])

  const LOGO_URL = "https://i.postimg.cc/DwwNNDsr/Whats-App-Image-2025-06-26-at-17-33-59-a813e2b2.jpg"

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black px-4">
      <div className="flex flex-col items-center">
        {/* Main Logo with Glow */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mb-8 sm:mb-12 flex items-center justify-center">
          <Image
            src={LOGO_URL}
            alt="Weblancer Logo"
            width={160}
            height={160}
            className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-2xl shadow-lg border-4 border-[#B5FF6D] bg-white object-contain animate-pulse"
            style={{ boxShadow: '0 0 40px 8px #B5FF6D55, 0 0 80px 16px #B5FF6D33' }}
          />
          {/* Floating Particles */}
          <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-3 h-3 sm:w-4 sm:h-4 bg-[#B5FF6D] rounded-full animate-float"></div>
          <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-2 h-2 sm:w-3 sm:h-3 bg-[#8A9A5B] rounded-full animate-float-delayed"></div>
          <div className="absolute top-1/2 -right-3 sm:-right-6 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#B5FF6D] rounded-full animate-float-slow"></div>
        </div>
        {/* Company Loading Interface */}
        <div className="text-center space-y-4 sm:space-y-6 w-full max-w-sm">
          <div className="space-y-1 sm:space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wider">WEBLANCER</h1>
            <p className="text-[#8A9A5B] text-base sm:text-lg font-light">Digital Innovation Company</p>
          </div>

          {/* Advanced Progress System */}
          <div className="w-full mx-auto space-y-3 sm:space-y-4">
            {/* Main Progress Bar */}
            <div className="relative h-1.5 sm:h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-[#B5FF6D] via-[#8A9A5B] to-[#B5FF6D] transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>

            {/* Loading Stats */}
            <div className="flex justify-between text-xs sm:text-sm text-[#8A9A5B]">
              <span>Initializing Systems</span>
              <span>{progress.toFixed(0)}%</span>
            </div>

            {/* Loading Steps */}
            <div className="space-y-1 text-xs text-[#8A9A5B]">
              {progress > 20 && <div className="animate-fade-in">✓ Loading 3D Engine</div>}
              {progress > 40 && <div className="animate-fade-in">✓ Initializing UI Components</div>}
              {progress > 60 && <div className="animate-fade-in">✓ Connecting Services</div>}
              {progress > 80 && <div className="animate-fade-in">✓ Optimizing Performance</div>}
              {progress > 95 && <div className="animate-fade-in text-[#B5FF6D]">✓ Ready to Launch</div>}
            </div>
          </div>
        </div>

        {/* Massive 3D Tech Grid Background */}
        <div className="absolute inset-0 perspective-[2000px]">
          <div className="absolute inset-0 transform rotateX-75 rotateY-15 scale-150">
            <div className="grid grid-cols-10 sm:grid-cols-15 lg:grid-cols-20 gap-1 sm:gap-2 h-[200vh] w-[200vw] opacity-20">
              {Array.from({ length: 400 }).map((_, i) => (
                <div 
                  key={i} 
                  className="border border-[#B5FF6D]/30 bg-gradient-to-br from-[#B5FF6D]/5 to-transparent animate-pulse"
                  style={{ 
                    animationDelay: `${i * 20}ms`,
                    height: Math.random() * 60 + 30 + 'px'
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Tech Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 perspective-[1000px]">
            <div className="transform rotateY-45 rotateX-30 animate-spin-slow">
              <div className="w-full h-full bg-gradient-to-br from-[#B5FF6D]/20 to-[#8A9A5B]/20 border-2 border-[#B5FF6D]/50 rounded-lg"></div>
            </div>
          </div>
          
          <div className="absolute top-20 sm:top-40 right-16 sm:right-32 w-12 h-12 sm:w-24 sm:h-24 perspective-[1000px]">
            <div className="transform rotateY-60 rotateX-45 animate-spin-reverse">
              <div className="w-full h-full bg-gradient-to-br from-[#8A9A5B]/20 to-[#B5FF6D]/20 border border-[#B5FF6D]/40 rounded-full"></div>
            </div>
          </div>

          <div className="absolute bottom-16 sm:bottom-32 left-20 sm:left-40 w-10 h-10 sm:w-20 sm:h-20 perspective-[1000px]">
            <div className="transform rotateY-30 rotateX-60 animate-float">
              <div className="w-full h-full bg-gradient-to-br from-[#B5FF6D]/30 to-transparent border border-[#B5FF6D]/60 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Ambient Lighting Effects */}
        <div className="absolute inset-0 bg-gradient-radial from-[#B5FF6D]/5 via-transparent to-transparent animate-pulse"></div>
      </div>
    </div>
  )
}

export default LoadingScreen