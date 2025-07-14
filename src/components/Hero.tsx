import React, { useEffect, useState } from 'react';
import { ChevronDown, ArrowRight, Globe, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

// Counter component for animated numbers
interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}
function Counter({ end, duration = 1500, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    let frame: number;
    function animate() {
      start += increment;
      if ((increment > 0 && start < end) || (increment < 0 && start > end)) {
        setCount(Math.round(start));
        frame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, [end, duration]);
  return <span>{count}{suffix}</span>;
}

const Hero: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center"
    >
      {/* Massive 3D Tech Infrastructure Background */}
      <div className="absolute inset-0 perspective-[3000px]">
        {/* Giant 3D Server Racks */}
        <div className="absolute left-0 top-0 w-full h-full transform rotateY-15 rotateX-5">
          <div className="grid grid-cols-8 gap-8 h-full opacity-10">
            {Array.from({ length: 64 }).map((_, i) => (
              <div 
                key={i}
                className="bg-gradient-to-b from-[#B5FF6D]/20 to-[#8A9A5B]/20 border border-[#B5FF6D]/30 rounded-lg transform translateZ-[100px] animate-pulse"
                style={{ 
                  animationDelay: `${i * 100}ms`,
                  height: `${Math.random() * 300 + 200}px`
                }}
              >
                <div className="w-full h-4 bg-[#B5FF6D]/40 rounded-t-lg"></div>
                <div className="p-2 space-y-1">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <div key={j} className="h-1 bg-[#8A9A5B]/60 rounded animate-pulse"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating 3D Tech Cubes */}
        <div className="absolute right-20 top-20 perspective-[1000px]">
          <div className="relative w-64 h-64 animate-spin-slow">
            {Array.from({ length: 27 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-8 h-8 bg-gradient-to-br from-[#B5FF6D]/30 to-[#8A9A5B]/30 border border-[#B5FF6D]/50 rounded transform animate-float"
                style={{
                  left: `${(i % 3) * 80}px`,
                  top: `${Math.floor((i % 9) / 3) * 80}px`,
                  transform: `translateZ(${Math.floor(i / 9) * 80}px) rotateX(${i * 40}deg) rotateY(${i * 60}deg)`,
                  animationDelay: `${i * 200}ms`
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Massive Circuit Board Pattern */}
        <div className="absolute bottom-0 left-0 w-full h-96 transform rotateX-75 opacity-20">
          <div className="grid grid-cols-16 gap-2 h-full">
            {Array.from({ length: 256 }).map((_, i) => (
              <div
                key={i}
                className="bg-gradient-to-t from-[#B5FF6D]/20 to-transparent border-t border-[#B5FF6D]/40 animate-pulse"
                style={{ animationDelay: `${i * 50}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Company Badge */}
        <div className="inline-flex items-center space-x-2 px-6 py-3 bg-[#B5FF6D]/10 border border-[#B5FF6D]/30 rounded-full mb-8">
          <Shield className="w-5 h-5 text-[#B5FF6D]" />
          <span className="text-[#B5FF6D] font-semibold">Enterprise-Grade Solutions</span>
        </div>

        {/* Main Headline */}
        <div className="perspective-[2000px] mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-white mb-6 transform hover:rotateX-5 transition-transform duration-500">
            <span className="block mb-4">
              <span className="inline-block hover:text-[#B5FF6D] transition-colors duration-300">WEB</span>
              <span className="inline-block hover:text-[#B5FF6D] transition-colors duration-300 delay-150">LANCER</span>
            </span>
          </h1>
        </div>
        
        <div className="text-2xl md:text-3xl text-[#8A9A5B] mb-6 max-w-4xl mx-auto leading-relaxed font-light">
          Transforming businesses through cutting-edge digital solutions and innovative technology
        </div>

        <div className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          We deliver enterprise-level web applications, mobile solutions, and digital infrastructure 
          that scale with your business growth and exceed industry standards.
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group px-10 py-5 bg-[#B5FF6D] text-black font-bold rounded-lg hover:bg-[#A3E85C] transform hover:scale-105 transition-all duration-300 flex items-center space-x-3">
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button className="px-10 py-5 border-2 border-[#8A9A5B] text-white font-bold rounded-lg hover:border-[#B5FF6D] hover:text-[#B5FF6D] transform hover:scale-105 transition-all duration-300">
            View Case Studies
          </button>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="group perspective-[1000px]">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 group-hover:border-[#B5FF6D] transition-all duration-300 transform group-hover:rotateY-5">
              <div className="flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-[#B5FF6D] group-hover:animate-spin" />
              </div>
              <div className="text-3xl font-bold text-white mb-2"><Counter end={500} suffix="+" /></div>
              <div className="text-[#8A9A5B]">Global Clients</div>
            </div>
          </div>

          <div className="group perspective-[1000px]">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 group-hover:border-[#B5FF6D] transition-all duration-300 transform group-hover:rotateY-5">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-[#B5FF6D] group-hover:animate-pulse" />
              </div>
              <div className="text-3xl font-bold text-white mb-2"><Counter end={99.9} duration={1800} suffix="%" /></div>
              <div className="text-[#8A9A5B]">Uptime SLA</div>
            </div>
          </div>

          <div className="group perspective-[1000px]">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 group-hover:border-[#B5FF6D] transition-all duration-300 transform group-hover:rotateY-5">
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-[#B5FF6D] group-hover:animate-bounce" />
              </div>
              <div className="text-3xl font-bold text-white mb-2"><Counter end={24} suffix="/7" /></div>
              <div className="text-[#8A9A5B]">Support</div>
            </div>
          </div>
        </div>

        {/* Global Availability */}
        <div className="mt-12 flex items-center justify-center space-x-3 text-[#8A9A5B]">
          <div className="w-3 h-3 bg-[#B5FF6D] rounded-full animate-pulse"></div>
          <span className="text-lg">Serving Fortune 500 Companies Worldwide</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-[#B5FF6D]" />
      </div>
    </motion.section>
  );
};

export default Hero; 