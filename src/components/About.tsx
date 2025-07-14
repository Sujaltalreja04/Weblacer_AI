import React from 'react';
import { Building, Users, Award, TrendingUp, Server, Database, Cloud } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Massive 3D Data Center Visualization */}
      <div className="absolute inset-0 perspective-[4000px]">
        {/* 3D Server Infrastructure */}
        <div className="absolute inset-0 transform rotateX-60 rotateY-10 scale-150 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-[200vh] w-[200vw]">
            {Array.from({ length: 288 }).map((_, i) => (
              <div 
                key={i} 
                className="bg-gradient-to-t from-[#B5FF6D]/20 to-[#8A9A5B]/20 border border-[#B5FF6D]/30 rounded animate-pulse"
                style={{ 
                  animationDelay: `${i * 30}ms`,
                  height: `${Math.random() * 150 + 100}px`,
                  transform: `translateZ(${Math.random() * 200}px)`
                }}
              >
                <div className="w-full h-2 bg-[#B5FF6D]/60 rounded-t animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Tech Architecture */}
        <div className="absolute top-20 right-20 perspective-[1500px]">
          <div className="relative w-96 h-96 animate-spin-slow">
            <div className="absolute inset-0 border-2 border-[#B5FF6D]/30 rounded-full"></div>
            <div className="absolute inset-8 border border-[#8A9A5B]/30 rounded-full"></div>
            <div className="absolute inset-16 border border-[#B5FF6D]/20 rounded-full"></div>
            
            {/* Orbiting Tech Icons */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
              <Server className="w-8 h-8 text-[#B5FF6D] animate-float" />
            </div>
            <div className="absolute right-0 top-1/2 transform translate-x-4 -translate-y-1/2">
              <Database className="w-8 h-8 text-[#8A9A5B] animate-float-delayed" />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
              <Cloud className="w-8 h-8 text-[#B5FF6D] animate-float-slow" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: 3D Company Visualization */}
          <div className="relative perspective-[2000px]">
            <div className="transform rotateY-12 hover:rotateY-0 transition-transform duration-700">
              {/* 3D Corporate Headquarters */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 relative overflow-hidden">
                {/* Building Structure */}
                <div className="grid grid-cols-4 gap-2 mb-6">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div 
                      key={i}
                      className="h-8 bg-gradient-to-t from-[#8A9A5B]/30 to-[#B5FF6D]/30 border border-[#B5FF6D]/40 rounded animate-pulse"
                      style={{ animationDelay: `${i * 200}ms` }}
                    >
                      <div className="w-full h-1 bg-[#B5FF6D]/80 rounded-t"></div>
                    </div>
                  ))}
                </div>
                
                {/* Command Center Display */}
                <div className="w-full h-32 bg-black rounded-lg p-4 relative overflow-hidden border border-[#B5FF6D]/50">
                  <div className="text-[#B5FF6D] text-xs font-mono space-y-1">
                    <div className="flex justify-between">
                      <span>WEBLANCER SYSTEMS</span>
                      <span className="text-[#8A9A5B]">ONLINE</span>
                    </div>
                    <div className="text-[#8A9A5B]">Global Infrastructure Status</div>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      <div className="text-xs">
                        <div className="text-white">Servers: 99.9%</div>
                        <div className="w-full h-1 bg-[#B5FF6D] rounded"></div>
                      </div>
                      <div className="text-xs">
                        <div className="text-white">Network: 100%</div>
                        <div className="w-full h-1 bg-[#B5FF6D] rounded"></div>
                      </div>
                      <div className="text-xs">
                        <div className="text-white">Security: 100%</div>
                        <div className="w-full h-1 bg-[#B5FF6D] rounded"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 w-2 h-2 bg-[#B5FF6D] rounded-full animate-pulse"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#B5FF6D]/30 to-[#8A9A5B]/30 rounded-lg border border-[#B5FF6D]/50 flex items-center justify-center">
                  <Building className="w-6 h-6 text-[#B5FF6D]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Company Information */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#B5FF6D]/10 border border-[#B5FF6D]/30 rounded-full mb-6">
                <Building className="w-4 h-4 text-[#B5FF6D]" />
                <span className="text-[#B5FF6D] font-semibold">About Weblancer</span>
              </div>
              
              <h2 className="text-5xl font-bold text-white mb-6">
                Leading Digital Innovation Company
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Weblancer is a premier technology company specializing in enterprise-grade 
                digital solutions. We partner with Fortune 500 companies and emerging startups 
                to deliver scalable, secure, and innovative technology platforms.
              </p>
              <p className="text-lg text-[#8A9A5B] leading-relaxed">
                Our team of expert engineers, designers, and strategists work collaboratively 
                to transform complex business challenges into elegant digital solutions that 
                drive growth and competitive advantage.
              </p>
            </div>

            {/* Company Metrics */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300 group">
                <div className="flex items-center space-x-3 mb-3">
                  <Users className="w-6 h-6 text-[#B5FF6D] group-hover:animate-pulse" />
                  <span className="text-white font-semibold">Team Size</span>
                </div>
                <p className="text-3xl font-bold text-[#B5FF6D]">150+</p>
                <p className="text-[#8A9A5B] text-sm">Expert Professionals</p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300 group">
                <div className="flex items-center space-x-3 mb-3">
                  <TrendingUp className="w-6 h-6 text-[#B5FF6D] group-hover:animate-bounce" />
                  <span className="text-white font-semibold">Growth Rate</span>
                </div>
                <p className="text-3xl font-bold text-[#B5FF6D]">300%</p>
                <p className="text-[#8A9A5B] text-sm">Year over Year</p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300 group">
                <div className="flex items-center space-x-3 mb-3">
                  <Award className="w-6 h-6 text-[#B5FF6D] group-hover:animate-spin" />
                  <span className="text-white font-semibold">Industry Awards</span>
                </div>
                <p className="text-3xl font-bold text-[#B5FF6D]">25+</p>
                <p className="text-[#8A9A5B] text-sm">Recognition & Certifications</p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300 group">
                <div className="flex items-center space-x-3 mb-3">
                  <Building className="w-6 h-6 text-[#B5FF6D] group-hover:animate-pulse" />
                  <span className="text-white font-semibold">Enterprise Clients</span>
                </div>
                <p className="text-3xl font-bold text-[#B5FF6D]">50+</p>
                <p className="text-[#8A9A5B] text-sm">Fortune 500 Companies</p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-br from-[#B5FF6D]/5 to-[#8A9A5B]/5 p-6 rounded-xl border border-[#B5FF6D]/30">
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-[#8A9A5B] leading-relaxed">
                To empower businesses worldwide with cutting-edge technology solutions that 
                drive innovation, enhance efficiency, and create sustainable competitive advantages 
                in the digital economy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;