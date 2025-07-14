import React from 'react';

const CornerTechModels: React.FC = () => {
  return (
    <>
      {/* Top Left: Rotating Cube */}
      <div className="pointer-events-none fixed top-8 left-8 z-10 w-28 h-28 perspective-[1000px] opacity-80">
        <div className="relative w-full h-full animate-spin-slow">
          <div className="absolute inset-0 w-full h-full transform rotate-y-[30deg] rotate-x-[25deg]">
            <div className="w-full h-full bg-gradient-to-br from-[#B5FF6D]/30 to-[#8A9A5B]/30 border-2 border-[#B5FF6D]/40 rounded-xl shadow-lg shadow-[#B5FF6D]/20"></div>
          </div>
        </div>
      </div>
      {/* Top Right: Floating Ring */}
      <div className="pointer-events-none fixed top-16 right-12 z-10 w-24 h-24 perspective-[1000px] opacity-70">
        <div className="relative w-full h-full animate-spin-reverse">
          <div className="absolute left-1/2 top-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 border-4 border-[#B5FF6D]/30 rounded-full"></div>
        </div>
      </div>
      {/* Bottom Left: Floating Particle */}
      <div className="pointer-events-none fixed bottom-16 left-16 z-10 w-12 h-12 opacity-60">
        <div className="w-full h-full bg-[#B5FF6D]/40 rounded-full animate-float"></div>
      </div>
      {/* Bottom Right: Rotating Tech Plate */}
      <div className="pointer-events-none fixed bottom-12 right-20 z-10 w-20 h-20 perspective-[1000px] opacity-70">
        <div className="relative w-full h-full animate-spin-slow">
          <div className="w-full h-full bg-gradient-to-br from-[#8A9A5B]/30 to-[#B5FF6D]/20 border border-[#B5FF6D]/30 rounded-lg"></div>
        </div>
      </div>
    </>
  );
};

export default CornerTechModels; 