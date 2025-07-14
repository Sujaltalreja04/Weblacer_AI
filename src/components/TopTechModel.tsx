import React from 'react';

const TopTechModel: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center w-full" style={{ pointerEvents: 'none' }}>
      <div className="w-40 h-40 md:w-56 md:h-56 perspective-[1200px]">
        <div className="relative w-full h-full animate-spin-slow">
          {/* Rotating 3D Cube */}
          <div className="absolute inset-0 w-full h-full transform rotate-y-[30deg] rotate-x-[25deg]">
            <div className="w-full h-full bg-gradient-to-br from-[#B5FF6D]/30 to-[#8A9A5B]/30 border-4 border-[#B5FF6D]/60 rounded-xl shadow-2xl shadow-[#B5FF6D]/30"></div>
          </div>
          {/* Floating Ring */}
          <div className="absolute left-1/2 top-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 border-4 border-[#B5FF6D]/40 rounded-full animate-spin-reverse"></div>
          {/* Floating Particles */}
          <div className="absolute top-4 left-1/2 w-4 h-4 bg-[#B5FF6D] rounded-full animate-float" style={{ marginLeft: '-8px' }}></div>
          <div className="absolute bottom-4 right-8 w-3 h-3 bg-[#8A9A5B] rounded-full animate-float-delayed"></div>
          <div className="absolute top-1/2 right-4 w-2 h-2 bg-[#B5FF6D] rounded-full animate-float-slow"></div>
        </div>
      </div>
    </div>
  );
};

export default TopTechModel; 