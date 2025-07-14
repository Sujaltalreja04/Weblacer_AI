'use client'

import React from 'react'

interface TechBackgroundProps {
  gridDensity?: number // number of grid cells (default: 800)
  gridOpacity?: number // 0-1 (default: 0.2)
  zIndex?: string // e.g. 'z-0', 'z-[-1]'
  className?: string
}

const TechBackground: React.FC<TechBackgroundProps> = ({
  gridDensity = 800,
  gridOpacity = 0.2,
  zIndex = 'z-0',
  className = '',
}) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${zIndex} ${className}`} style={{ perspective: '2000px' }}>
      {/* 3D Tech Grid */}
      {gridDensity > 0 && (
        <div className="absolute inset-0 transform rotate-x-[75deg] rotate-y-[15deg] scale-[1.5] sm:rotate-x-[75deg] sm:rotate-y-[15deg] sm:scale-[1.5]">
          <div
            className="grid grid-cols-10 sm:grid-cols-16 lg:grid-cols-20 gap-1 sm:gap-2 h-[200vh] w-[200vw]"
            style={{ opacity: gridOpacity }}
          >
            {Array.from({ length: gridDensity }).map((_, i) => (
              <div
                key={i}
                className="border border-[#B5FF6D]/30 bg-gradient-to-br from-[#B5FF6D]/5 to-transparent animate-pulse"
                style={{
                  animationDelay: `${i * 20}ms`,
                  height: Math.random() * 60 + 30 + 'px',
                }}
              ></div>
            ))}
          </div>
        </div>
      )}

      {/* Floating Tech Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 sm:w-32 h-16 sm:h-32 perspective-[1000px]">
          <div className="transform rotate-y-[45deg] rotate-x-[30deg] animate-spin-slow">
            <div className="w-full h-full bg-gradient-to-br from-[#B5FF6D]/20 to-[#8A9A5B]/20 border-2 border-[#B5FF6D]/50 rounded-lg"></div>
          </div>
        </div>
        <div className="absolute top-20 sm:top-40 right-16 sm:right-32 w-12 sm:w-24 h-12 sm:h-24 perspective-[1000px]">
          <div className="transform rotate-y-[60deg] rotate-x-[45deg] animate-spin-reverse">
            <div className="w-full h-full bg-gradient-to-br from-[#8A9A5B]/20 to-[#B5FF6D]/20 border border-[#B5FF6D]/40 rounded-full"></div>
          </div>
        </div>
        <div className="absolute bottom-16 sm:bottom-32 left-20 sm:left-40 w-10 sm:w-20 h-10 sm:h-20 perspective-[1000px]">
          <div className="transform rotate-y-[30deg] rotate-x-[60deg] animate-float">
            <div className="w-full h-full bg-gradient-to-br from-[#B5FF6D]/30 to-transparent border border-[#B5FF6D]/60 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Ambient Lighting Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-[#B5FF6D]/5 via-transparent to-transparent animate-pulse"></div>
    </div>
  )
}

export default TechBackground