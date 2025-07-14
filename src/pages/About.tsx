import React, { useEffect, useState } from 'react';
import { Building, Users, Award, TrendingUp, Server, Database, Cloud, Shield, Globe, Zap, User } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TechBackground from '../components/TechBackground';
import CornerTechModels from '../components/CornerTechModels';

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
];
const team = [
  { name: 'Alice Smith', title: 'Lead Designer', image: '', bio: 'Passionate about UI/UX and digital art.' },
  { name: 'Bob Lee', title: 'Senior Developer', image: '', bio: 'Loves building scalable web apps.' },
  { name: 'Carol Jones', title: 'Project Manager', image: '', bio: 'Ensures every project is a success.' },
  { name: 'David Kim', title: 'QA Engineer', image: '', bio: 'Quality is his top priority.' },
];

// 3D Parallax Card Component
import { useRef } from 'react';
function ParallaxCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  function handleMouseMove(e: React.MouseEvent) {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
  }
  function handleMouseLeave() {
    const card = ref.current;
    if (card) card.style.transform = '';
  }
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-300"
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
  );
}

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}
function Counter({ end, duration = 1500, suffix = '', decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration / 16);
    let frame: number;
    function animate() {
      start += increment;
      if ((increment > 0 && start < end) || (increment < 0 && start > end)) {
        setCount(start);
        frame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, [end, duration, inView]);
  return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>;
}

const About: React.FC = () => {
  // Remove framer-motion animation logic
  // const controls = useAnimation();
  // const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  // useEffect(() => {
  //   if (inView) {
  //     controls.start({ opacity: 1, y: 0 });
  //   }
  // }, [controls, inView]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated green glow at the top */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-48 z-10" style={{
        background: 'radial-gradient(ellipse 60% 100% at 50% 0%, #B5FF6D 0%, transparent 80%)',
        filter: 'blur(32px)',
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
        <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 perspective-[4000px]">
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
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-[#B5FF6D]/10 border border-[#B5FF6D]/30 rounded-full mb-8">
                <Building className="w-5 h-5 text-[#B5FF6D]" />
                <span className="text-[#B5FF6D] font-semibold">About Weblancer</span>
              </div>
              
              <h1 className="text-6xl font-bold text-white mb-6">Leading Digital Innovation Company</h1>
              <p className="text-xl text-[#8A9A5B] max-w-4xl mx-auto">
                Weblancer is a premier technology company specializing in enterprise-grade 
                digital solutions. We partner with Fortune 500 companies and emerging startups 
                to deliver scalable, secure, and innovative technology platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-16 bg-black relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-white mb-10 text-center">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <a href="/services#web-development" className="group bg-gray-800/60 p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300 flex flex-col items-center text-center relative shadow-lg hover:shadow-[0_0_24px_4px_#B5FF6D55]">
                <Building className="w-10 h-10 text-[#B5FF6D] mb-4 group-hover:animate-pulse" />
                <h3 className="text-xl font-bold text-white mb-2">Web Development</h3>
                <p className="text-[#8A9A5B] mb-2">Modern, responsive websites for your business growth.</p>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#B5FF6D] text-black text-xs font-semibold px-3 py-1 rounded shadow-lg z-20 pointer-events-none whitespace-nowrap">“Websites promote you 24/7: No employee will do that.”</span>
              </a>
              <a href="/services#app-development" className="group bg-gray-800/60 p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300 flex flex-col items-center text-center relative shadow-lg hover:shadow-[0_0_24px_4px_#B5FF6D55]">
                <Users className="w-10 h-10 text-[#B5FF6D] mb-4 group-hover:animate-pulse" />
                <h3 className="text-xl font-bold text-white mb-2">App Development</h3>
                <p className="text-[#8A9A5B] mb-2">Mobile and web apps tailored to your needs.</p>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#B5FF6D] text-black text-xs font-semibold px-3 py-1 rounded shadow-lg z-20 pointer-events-none whitespace-nowrap">“The future of mobile is the future of online. It is how people access online content now.”</span>
              </a>
              <a href="/services#video-editing" className="group bg-gray-800/60 p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300 flex flex-col items-center text-center relative shadow-lg hover:shadow-[0_0_24px_4px_#B5FF6D55]">
                <Award className="w-10 h-10 text-[#B5FF6D] mb-4 group-hover:animate-pulse" />
                <h3 className="text-xl font-bold text-white mb-2">Video Editing</h3>
                <p className="text-[#8A9A5B] mb-2">Professional video editing for marketing and branding.</p>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#B5FF6D] text-black text-xs font-semibold px-3 py-1 rounded shadow-lg z-20 pointer-events-none whitespace-nowrap">“The art of video editing is the art of storytelling.”</span>
              </a>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900 relative z-10">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Our Core Values</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="group bg-gray-800/60 p-6 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300 flex flex-col items-center relative shadow-lg hover:shadow-[0_0_24px_4px_#B5FF6D55]">
                <Shield className="w-8 h-8 text-[#B5FF6D] mb-2 group-hover:animate-pulse" />
                <h4 className="text-lg font-semibold text-white mb-1">Integrity</h4>
                <p className="text-[#8A9A5B] text-sm">We act with honesty and transparency in all we do.</p>
                {/* Tooltip feature */}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#B5FF6D] text-black text-xs font-semibold px-3 py-1 rounded shadow-lg z-20 pointer-events-none whitespace-nowrap">“Honesty is the first chapter in the book of wisdom.”</span>
              </div>
              <div className="group bg-gray-800/60 p-6 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300 flex flex-col items-center relative shadow-lg hover:shadow-[0_0_24px_4px_#B5FF6D55]">
                <Zap className="w-8 h-8 text-[#B5FF6D] mb-2 group-hover:animate-pulse" />
                <h4 className="text-lg font-semibold text-white mb-1">Innovation</h4>
                <p className="text-[#8A9A5B] text-sm">We embrace creativity and new ideas to drive progress.</p>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#B5FF6D] text-black text-xs font-semibold px-3 py-1 rounded shadow-lg z-20 pointer-events-none whitespace-nowrap">“Innovation distinguishes between a leader and a follower.”</span>
              </div>
              <div className="group bg-gray-800/60 p-6 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300 flex flex-col items-center relative shadow-lg hover:shadow-[0_0_24px_4px_#B5FF6D55]">
                <Users className="w-8 h-8 text-[#B5FF6D] mb-2 group-hover:animate-pulse" />
                <h4 className="text-lg font-semibold text-white mb-1">Customer Focus</h4>
                <p className="text-[#8A9A5B] text-sm">We put our clients’ needs at the center of every decision.</p>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#B5FF6D] text-black text-xs font-semibold px-3 py-1 rounded shadow-lg z-20 pointer-events-none whitespace-nowrap">“Your most unhappy customers are your greatest source of learning.”</span>
              </div>
              <div className="group bg-gray-800/60 p-6 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300 flex flex-col items-center relative shadow-lg hover:shadow-[0_0_24px_4px_#B5FF6D55]">
                <Award className="w-8 h-8 text-[#B5FF6D] mb-2 group-hover:animate-pulse" />
                <h4 className="text-lg font-semibold text-white mb-1">Excellence</h4>
                <p className="text-[#8A9A5B] text-sm">We strive for the highest quality in our work and results.</p>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#B5FF6D] text-black text-xs font-semibold px-3 py-1 rounded shadow-lg z-20 pointer-events-none whitespace-nowrap">“Excellence is not a skill, it’s an attitude.”</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 bg-black relative z-10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Our Mission & Vision</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group bg-gray-800/60 p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300 flex flex-col items-center relative shadow-lg hover:shadow-[0_0_24px_4px_#B5FF6D55]">
                <h3 className="text-2xl font-bold text-[#B5FF6D] mb-2">Mission</h3>
                <p className="text-[#8A9A5B] text-lg">To empower businesses with innovative digital solutions that drive growth and success.</p>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#B5FF6D] text-black text-xs font-semibold px-3 py-1 rounded shadow-lg z-20 pointer-events-none whitespace-nowrap">“Empowering others is the key to success.”</span>
              </div>
              <div className="group bg-gray-800/60 p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300 flex flex-col items-center relative shadow-lg hover:shadow-[0_0_24px_4px_#B5FF6D55]">
                <h3 className="text-2xl font-bold text-[#B5FF6D] mb-2">Vision</h3>
                <p className="text-[#8A9A5B] text-lg">To become a trusted technology partner for businesses worldwide, shaping the future of digital innovation.</p>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#B5FF6D] text-black text-xs font-semibold px-3 py-1 rounded shadow-lg z-20 pointer-events-none whitespace-nowrap">“The future belongs to those who believe in the beauty of their dreams.”</span>
              </div>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Founded with a vision to bridge the gap between cutting-edge technology and business success, 
                  Weblancer has grown from a small team of passionate developers to a global technology powerhouse.
                </p>
                <p className="text-lg text-[#8A9A5B] leading-relaxed">
                  Our journey began with a simple belief: that technology should empower businesses, not complicate them. 
                  Today, we continue to uphold this principle while serving clients across 25+ countries.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                    <div className="text-3xl font-bold text-[#B5FF6D] mb-2"><Counter end={2025} duration={1200} /></div>
                    <div className="text-[#8A9A5B]">Founded in 2025</div>
                  </div>
                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                    <div className="text-3xl font-bold text-[#B5FF6D] mb-2"><Counter end={500} duration={1200} suffix="+" /></div>
                    <div className="text-[#8A9A5B]">Projects Delivered</div>
                  </div>
                </div>
              </div>

              <div className="relative perspective-[2000px]">
                <div className="transform rotateY-12 hover:rotateY-0 transition-transform duration-700">
                  <div className="p-8 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center backdrop-blur-xl" style={{ minHeight: '320px', background: 'rgba(0,0,0,0.55)', boxShadow: '0 0 60px 10px #B5FF6D22, 0 0 120px 30px #8A9A5B22' }}>
                    {/* Glowing Logo */}
                    <div className="relative flex items-center justify-center mb-8">
                      <div className="absolute inset-0 rounded-full" style={{
                        boxShadow: '0 0 80px 20px #B5FF6D88, 0 0 160px 40px #8A9A5B44',
                        zIndex: 0
                      }}></div>
                      <img
                        src="https://i.postimg.cc/DwwNNDsr/Whats-App-Image-2025-06-26-at-17-33-59-a813e2b2.jpg"
                        alt="Weblancer Logo"
                        className="w-40 h-40 rounded-2xl shadow-lg border-4 border-[#B5FF6D] bg-white object-contain relative z-10"
                      />
                    </div>
                    {/* Status Card */}
                    <div className="w-full max-w-md h-32 bg-black rounded-lg p-4 relative overflow-hidden border border-[#B5FF6D]/50">
                      <div className="text-[#B5FF6D] text-xs font-mono space-y-1">
                        <div className="flex justify-between">
                          <span>WEB DEVELOPMENT STATUS</span>
                          <span className="text-[#8A9A5B]">LIVE</span>
                        </div>
                        <div className="text-[#8A9A5B]">Frontend & API Health</div>
                        <div className="grid grid-cols-3 gap-2 mt-2">
                          <div className="text-xs">
                            <div className="text-white">Frontend Uptime: 99.99%</div>
                            <div className="w-full h-1 bg-[#B5FF6D] rounded"></div>
                          </div>
                          <div className="text-xs">
                            <div className="text-white">API Response: 120ms</div>
                            <div className="w-full h-1 bg-[#B5FF6D] rounded"></div>
                          </div>
                          <div className="text-xs">
                            <div className="text-white">Deployment Success: 100%</div>
                            <div className="w-full h-1 bg-[#B5FF6D] rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Meet Our Founders</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {founders.map((founder) => (
                <div key={founder.name} className="flex flex-col items-center">
                  <div className="relative group w-[34rem] h-[26rem] mb-6 rounded-[3rem] bg-black shadow-2xl"
                    style={{
                      boxShadow: '0 0 60px 0 #183c1b, 0 0 120px 10px #B5FF6D33',
                      background: 'rgba(10,10,10,0.65)',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    {/* Founder Photo */}
                    {founder.name === 'Hitanshu Patel' ? (
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="absolute inset-0 w-full h-full object-cover rounded-[3rem] transition-all duration-500 group-hover:blur-md group-hover:scale-105 opacity-90"
                      />
                    ) : (
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="absolute inset-0 w-full h-full object-cover rounded-[3rem] transition-all duration-500 group-hover:blur-md group-hover:scale-105 opacity-90"
                      />
                    )}
                    {/* Netflix-Style Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/10 rounded-[3rem] backdrop-blur-md"
                      style={{ zIndex: 2 }}
                    >
                      <div className="p-8 w-full text-center text-white bg-black/10 rounded-2xl backdrop-blur-xl border border-[#B5FF6D]/30 shadow-xl animate-fadeInUp">
                        <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">{founder.name}</h3>
                        <h4 className="text-xl text-[#B5FF6D] font-semibold mb-2">{founder.title}</h4>
                        <p className="text-base text-[#B5FF6D] mb-2">{founder.expertise || ''}</p>
                        <p className="text-gray-200 text-base leading-relaxed">{founder.story}</p>
                      </div>
                    </div>
                    {/* Glowing Effect */}
                    <div className="pointer-events-none absolute inset-0 rounded-[3rem] z-10" style={{
                      boxShadow: '0 0 80px 10px #B5FF6D55, 0 0 160px 40px #183c1b55',
                      opacity: 0.7
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-5xl font-bold text-white mb-6">Our Mission & Vision</h2>
            <p className="text-xl text-[#8A9A5B] mb-8">At Weblancer, our mission is to empower businesses with innovative digital solutions that drive growth and success. We believe in building strong partnerships and delivering real value to every client. Our vision is to become a trusted technology partner for businesses worldwide.</p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Us</h2>
            <ul className="text-xl text-[#8A9A5B] mb-8 space-y-4 list-disc list-inside text-left mx-auto max-w-2xl">
              <li>Client-focused approach and personalized solutions</li>
              <li>Commitment to quality and transparency</li>
              <li>Passion for innovation and continuous improvement</li>
              <li>Reliable support and clear communication</li>
            </ul>
          </div>
        </section>

        {/* Founders’ Message */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Founders’ Message</h2>
            <p className="text-xl text-[#8A9A5B] mb-8">Thank you for visiting Weblancer. As founders, we started this company with a simple belief: technology should empower, not complicate. We are dedicated to helping your business grow and succeed in the digital world. We look forward to working with you!</p>
          </div>
        </section>

        {/* Team & Culture */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">What Makes Us Unique</h2>
              <p className="text-xl text-[#8A9A5B] max-w-3xl mx-auto">
                As a new freelance business, we offer a fresh, client-focused approach and unique advantages you won't find with larger agencies.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="group bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300 flex flex-col items-center text-center relative shadow-lg hover:shadow-[0_0_24px_4px_#B5FF6D55]">
                <Users className="w-8 h-8 text-[#B5FF6D] mb-3 group-hover:animate-pulse" />
                <h4 className="text-lg font-bold text-white mb-2">Personalized Attention</h4>
                <p className="text-[#8A9A5B] text-sm">Work directly with our founders and core team for a truly tailored experience.</p>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#B5FF6D] text-black text-xs font-semibold px-3 py-1 rounded shadow-lg z-20 pointer-events-none whitespace-nowrap">“Your project, our passion.”</span>
              </div>
              <div className="group bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300 flex flex-col items-center text-center relative shadow-lg hover:shadow-[0_0_24px_4px_#B5FF6D55]">
                <Zap className="w-8 h-8 text-[#B5FF6D] mb-3 group-hover:animate-bounce" />
                <h4 className="text-lg font-bold text-white mb-2">Agile & Flexible</h4>
                <p className="text-[#8A9A5B] text-sm">We adapt quickly to your needs and deliver solutions with speed and creativity.</p>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#B5FF6D] text-black text-xs font-semibold px-3 py-1 rounded shadow-lg z-20 pointer-events-none whitespace-nowrap">“Agility is our superpower.”</span>
              </div>
              <div className="group bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300 flex flex-col items-center text-center relative shadow-lg hover:shadow-[0_0_24px_4px_#B5FF6D55]">
                <User className="w-8 h-8 text-[#B5FF6D] mb-3 group-hover:animate-spin" />
                <h4 className="text-lg font-bold text-white mb-2">Direct Founder Access</h4>
                <p className="text-[#8A9A5B] text-sm">You always have a direct line to the people who care most about your project.</p>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#B5FF6D] text-black text-xs font-semibold px-3 py-1 rounded shadow-lg z-20 pointer-events-none whitespace-nowrap">“Founders at your fingertips.”</span>
              </div>
              <div className="group bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300 flex flex-col items-center text-center relative shadow-lg hover:shadow-[0_0_24px_4px_#B5FF6D55]">
                <Award className="w-8 h-8 text-[#B5FF6D] mb-3 group-hover:animate-pulse" />
                <h4 className="text-lg font-bold text-white mb-2">Early Adopter Benefits</h4>
                <p className="text-[#8A9A5B] text-sm">Get special pricing, extra support, and priority as one of our first clients.</p>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#B5FF6D] text-black text-xs font-semibold px-3 py-1 rounded shadow-lg z-20 pointer-events-none whitespace-nowrap">“Your trust, our gratitude.”</span>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">Our Technology Stack</h2>
              <p className="text-xl text-[#8A9A5B] max-w-3xl mx-auto">
                We leverage the latest technologies and frameworks to deliver robust, scalable, and future-proof solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
                <Server className="w-12 h-12 text-[#B5FF6D] mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Backend Technologies</h3>
                <div className="space-y-2 text-[#8A9A5B]">
                  <div>• Node.js & Express</div>
                  <div>• Python & Django</div>
                  <div>• Java & Spring Boot</div>
                  <div>• .NET Core</div>
                  <div>• Microservices Architecture</div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
                <Globe className="w-12 h-12 text-[#B5FF6D] mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Frontend Technologies</h3>
                <div className="space-y-2 text-[#8A9A5B]">
                  <div>• React & Next.js</div>
                  <div>• Vue.js & Nuxt.js</div>
                  <div>• Angular</div>
                  <div>• TypeScript</div>
                  <div>• Progressive Web Apps</div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
                <Database className="w-12 h-12 text-[#B5FF6D] mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Database & Storage</h3>
                <div className="space-y-2 text-[#8A9A5B]">
                  <div>• PostgreSQL & MySQL</div>
                  <div>• MongoDB & Redis</div>
                  <div>• Elasticsearch</div>
                  <div>• AWS S3 & CloudFront</div>
                  <div>• Data Warehousing</div>
                </div>
              </div>

              {/* Social Media Management */}
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
                <Users className="w-12 h-12 text-[#B5FF6D] mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Social Media Management</h3>
                <div className="space-y-2 text-[#8A9A5B]">
                  <div>• Strategy & Planning</div>
                  <div>• Content Scheduling</div>
                  <div>• Engagement & Analytics</div>
                  <div>• Platform Optimization</div>
                </div>
              </div>

              {/* Video Editing */}
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
                <Zap className="w-12 h-12 text-[#B5FF6D] mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Video Editing</h3>
                <div className="space-y-2 text-[#8A9A5B]">
                  <div>• Promotional Videos</div>
                  <div>• Social Media Clips</div>
                  <div>• Motion Graphics</div>
                  <div>• Post-Production</div>
                </div>
              </div>

              {/* Content Creation */}
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
                <Award className="w-12 h-12 text-[#B5FF6D] mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Content Creation</h3>
                <div className="space-y-2 text-[#8A9A5B]">
                  <div>• Blog & Article Writing</div>
                  <div>• Visual Content</div>
                  <div>• Infographics</div>
                  <div>• Creative Campaigns</div>
                </div>
              </div>

              {/* Copywriting */}
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
                <User className="w-12 h-12 text-[#B5FF6D] mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Copywriting</h3>
                <div className="space-y-2 text-[#8A9A5B]">
                  <div>• Website Copy</div>
                  <div>• Ad Copy</div>
                  <div>• Product Descriptions</div>
                  <div>• Brand Messaging</div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
                <Zap className="w-12 h-12 text-[#B5FF6D] mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">AI & Machine Learning</h3>
                <div className="space-y-2 text-[#8A9A5B]">
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
  );
};

export default About;