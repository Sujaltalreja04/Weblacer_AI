import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Users, Award, TrendingUp, Github, Linkedin, Twitter, Mail, Code, Database, Globe } from 'lucide-react';
import TechBackground from '../components/TechBackground';
import CornerTechModels from '../components/CornerTechModels';

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

// Add FlipCard wrapper for founder cards
function FlipCard({ front, back }: { front: React.ReactNode, back: React.ReactNode }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      style={{ perspective: '1200px' }}
    >
      <div
        className={`absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d] ${flipped ? 'rotate-y-180' : ''}`}
      >
        <div className="absolute inset-0 [backface-visibility:hidden]">
          {front}
        </div>
        <div className="absolute inset-0 [backface-visibility:hidden] rotate-y-180 flex items-center justify-center bg-black/80 rounded-2xl border border-[#B5FF6D]/30 shadow-2xl">
          {back}
        </div>
      </div>
    </div>
  );
}

const founders = [
  {
    name: 'Sujal Talreja',
    title: 'Co-Founder & Chief Marketing Officer',
    location: 'Ahmedabad, India',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQH6MXmr5U3dgg/profile-displayphoto-shrink_800_800/B4DZSivOX3GkAg-/0/1737897077615?e=1756944000&v=beta&t=7CLvtVDBXLeRKqe8fQc1iov3i9Zy5HtntJWwvnqZ5ak',
    expertise: 'Web Development • Marketing Strategy • Data Analytics',
    skills: ['React', 'Python', 'Flask', 'MySQL', 'MongoDB', 'Tableau', 'AI/ML'],
    achievements: [
      'Co-founded Weblancer',
      'Top 10% in coding',
      'National hackathon finalist',
      'Google Analytics Certified'
    ],
    social: {
      linkedin: 'https://www.linkedin.com/in/sujal-kishore-kumar-talreja-65975b216/',
      github: 'https://github.com/Sujaltalreja04',        
      twitter: 'https://x.com/SujalTalreja1',
      email: 'sujaltalreja04@gmail.com'
    },
    story: `As the Co-founder and CMO at Weblancer, a cutting-edge freelance tech company based in Ahmedabad, I bridge the gap between data, design, and digital growth. With a strong foundation in web development, data analytics, and AI-driven strategies, I specialize in building powerful digital experiences and scaling them through performance-driven marketing.`
  },
  {
    name: 'Hitanshu Patel',
    title: 'Co-Founder & Chief Technology Officer',
    location: 'Ahmedabad, India',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQF_HC2iiYOadQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721018178044?e=2147483647&v=beta&t=AkDZTmTlVZkyxUtq9IRAOOLwrv1WFviv7K-1FwHUMMY',
    expertise: 'Python Development • AI Solutions • Tech Strategy',
    skills: ['Python', 'Flask', 'Django', 'TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-learn', 'MySQL', 'PostgreSQL', 'MongoDB'],
    achievements: [
      'Co-founded Weblancer',
      'Led AI application development',
      'KRMU 4.0 Hackathon finalist',
      'Python & AI Development certified',
      'Built intelligent backend systems'
    ],
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#',
      email: 'hitanshu@weblancer.com'
    },
    story: `As the Co-founder and CTO at Weblancer, Hitanshu leads the innovation engine behind our tech stack. A passionate Python developer and AI problem solver, he specializes in building intelligent systems, automation pipelines, and scalable backend architectures that power high-performance applications.`
  }
];

const Founders: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated green glow at the top */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-48 z-10" style={{
        background: 'radial-gradient(ellipse 60% 100% at 50% 0%, #B5FF6D 0%, transparent 80%)',
        filter: 'blur(32px)',
        opacity: 0.7,
        animation: 'glowPulse 3s ease-in-out infinite',
      }} />

      {/* 3D Animated Glowing Grid Background (from About page) */}
      <div className="absolute inset-0 perspective-[4000px] z-0 pointer-events-none">
        <div className="absolute inset-0 transform rotate-x-60 rotate-y-10 scale-150 opacity-10">
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

      {/* Corner Tech Models (animated, in corners) */}
      <CornerTechModels />

      {/* Tech Background */}
      <TechBackground zIndex="z-0" />

      {/* Main Founders Content */}
      {/* Animated Background Particles/Tech Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              zIndex: 0,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [0.7, 1.2, 0.7],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {/* Use a tech icon or a glowing dot */}
            <span className="block w-3 h-3 rounded-full bg-gradient-to-br from-[#B5FF6D] to-[#8AFF8A] opacity-70 shadow-lg" />
          </motion.div>
        ))}
      </div>
      <motion.div className="relative z-10" ref={ref} initial={{ opacity: 0, y: 40 }} animate={controls} transition={{ duration: 1, ease: 'easeOut' }}>
        <section className="py-10">
          <div className="max-w-5xl mx-auto px-6 text-center mb-8 flex flex-col items-center">
            <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full mb-4">
              <Users className="w-5 h-5 text-[#B5FF6D]" />
              <span className="text-[#B5FF6D] font-semibold">Founders' Story</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Journey as Founders</h1>
            <p className="text-xl text-[#8A9A5B] max-w-3xl mx-auto">
              Discover how two friends turned a shared vision into a thriving company, overcoming challenges and celebrating every win together.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-12 px-6">
          {founders.map((founder, idx) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 + idx * 0.2, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >
              {founder.image ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {founder.name === 'Hitanshu Patel' ? (
                    <>
                      {/* Card with photo at left */}
                      <motion.div
                        className="relative overflow-hidden rounded-2xl h-96 cursor-pointer group flex flex-col items-center justify-start"
                        onHoverStart={() => setHoveredCard(idx)}
                        onHoverEnd={() => setHoveredCard(null)}
                        whileHover={{
                          scale: 1.02,
                          transition: { duration: 0.3 }
                        }}
                        style={{
                          transformStyle: 'preserve-3d',
                          perspective: '1000px',
                          backdropFilter: 'blur(10px)',
                          background: 'rgba(24, 24, 27, 0.25)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(181, 255, 109, 0.1)'
                        }}
                      >
                        {/* Premium Animated Border */}
                        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                          <div className="absolute inset-0 bg-gradient-to-r from-[#B5FF6D] via-[#8AFF8A] to-[#B5FF6D] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                          <div className="absolute inset-[2px] rounded-2xl bg-black" />
                        </div>

                        {/* Animated Particles Background */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                          {[...Array(20)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-gradient-to-r from-[#B5FF6D] to-[#8AFF8A] rounded-full"
                              style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                              }}
                              animate={{
                                y: [0, -20, 0],
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                              }}
                              transition={{
                                duration: 2 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                              }}
                            />
                          ))}
                        </div>

                        {/* Premium Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        {/* Premium Glow Effect */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                          style={{
                            background: 'radial-gradient(circle at 50% 50%, rgba(181, 255, 109, 0.2) 0%, transparent 70%)',
                            filter: 'blur(20px)'
                          }}
                        />

                        {/* Floating Tech Icons with Premium Styling */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 pointer-events-none">
                          <div className="flex space-x-2">
                            <motion.div
                              className="w-10 h-10 bg-gradient-to-br from-[#B5FF6D]/20 to-[#8AFF8A]/20 rounded-xl flex items-center justify-center border border-[#B5FF6D]/30 backdrop-blur-sm shadow-lg"
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              style={{
                                boxShadow: '0 4px 15px rgba(181, 255, 109, 0.3)'
                              }}
                            >
                              <Code className="w-5 h-5 text-[#B5FF6D]" />
                            </motion.div>
                            <motion.div
                              className="w-10 h-10 bg-gradient-to-br from-[#B5FF6D]/20 to-[#8AFF8A]/20 rounded-xl flex items-center justify-center border border-[#B5FF6D]/30 backdrop-blur-sm shadow-lg"
                              whileHover={{ scale: 1.2, rotate: -5 }}
                              style={{
                                boxShadow: '0 4px 15px rgba(181, 255, 109, 0.3)'
                              }}
                            >
                              <Database className="w-5 h-5 text-[#B5FF6D]" />
                            </motion.div>
                            <motion.div
                              className="w-10 h-10 bg-gradient-to-br from-[#B5FF6D]/20 to-[#8AFF8A]/20 rounded-xl flex items-center justify-center border border-[#B5FF6D]/30 backdrop-blur-sm shadow-lg"
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              style={{
                                boxShadow: '0 4px 15px rgba(181, 255, 109, 0.3)'
                              }}
                            >
                              <Globe className="w-5 h-5 text-[#B5FF6D]" />
                            </motion.div>
                          </div>
                        </div>

                        {/* PHOTO AT TOP OF CARD */}
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="w-28 h-28 rounded-full object-cover border-4 border-[#B5FF6D] shadow-lg mt-6 mb-2 z-10"
                          style={{ background: '#18181b' }}
                        />

                        {/* Minimal Content Inside Card */}
                        <div className="flex flex-col items-center justify-start w-full px-2">
                          {/* Premium Animated Badge */}
                          <motion.div
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#B5FF6D]/20 to-[#8AFF8A]/20 border border-[#B5FF6D]/40 rounded-full mb-2 backdrop-blur-sm shadow-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: hoveredCard === idx ? 1 : 0 }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                            style={{
                              boxShadow: '0 4px 15px rgba(181, 255, 109, 0.3)'
                            }}
                          >
                            <span className="text-[#B5FF6D] text-sm font-bold tracking-wide">Co-Founder</span>
                          </motion.div>
                          <h2 className="text-2xl font-bold mb-1 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent text-center">{founder.name}</h2>
                          <h3 className="text-base text-[#B5FF6D] font-semibold mb-1 tracking-wide text-center">{founder.title}</h3>
                          <p className="text-xs text-gray-200 font-medium mb-2 text-center">{founder.expertise}</p>
                        </div>

                        {/* Technical Expertise Section */}
                        <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0 pointer-events-none">
                          <div className="text-white relative z-10">
                            {/* Animated Technical Expertise Cards */}
                            {(founder.name as string) === 'Sujal Talreja' && (
                              <div className="space-y-2">
                                <motion.div
                                  className="bg-gradient-to-r from-[#B5FF6D]/10 to-[#8AFF8A]/10 rounded-lg p-3 border border-[#B5FF6D]/20 backdrop-blur-sm"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: hoveredCard === idx ? 1 : 0, x: hoveredCard === idx ? 0 : -20 }}
                                  transition={{ delay: 0.4 }}
                                >
                                  <div className="flex items-center mb-1">
                                    <span className="text-[#B5FF6D] mr-2">🌐</span>
                                    <span className="text-xs font-semibold text-[#B5FF6D]">Web Development</span>
                                  </div>
                                  <p className="text-xs text-gray-300">Full-stack solutions, React, Flask, REST APIs</p>
                                </motion.div>
                                <motion.div
                                  className="bg-gradient-to-r from-[#B5FF6D]/10 to-[#8AFF8A]/10 rounded-lg p-3 border border-[#B5FF6D]/20 backdrop-blur-sm"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: hoveredCard === idx ? 1 : 0, x: hoveredCard === idx ? 0 : -20 }}
                                  transition={{ delay: 0.5 }}
                                >
                                  <div className="flex items-center mb-1">
                                    <span className="text-[#B5FF6D] mr-2">📊</span>
                                    <span className="text-xs font-semibold text-[#B5FF6D]">Data Analytics</span>
                                  </div>
                                  <p className="text-xs text-gray-300">Python, SQL, MongoDB, Tableau insights</p>
                                </motion.div>
                                <motion.div
                                  className="bg-gradient-to-r from-[#B5FF6D]/10 to-[#8AFF8A]/10 rounded-lg p-3 border border-[#B5FF6D]/20 backdrop-blur-sm"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: hoveredCard === idx ? 1 : 0, x: hoveredCard === idx ? 0 : -20 }}
                                  transition={{ delay: 0.6 }}
                                >
                                  <div className="flex items-center mb-1">
                                    <span className="text-[#B5FF6D] mr-2">📈</span>
                                    <span className="text-xs font-semibold text-[#B5FF6D]">Digital Marketing</span>
                                  </div>
                                  <p className="text-xs text-gray-300">SEO, growth hacking, data-driven campaigns</p>
                                </motion.div>
                              </div>
                            )}
                            {(founder.name as string) === 'Hitanshu Patel' && (
                              <div className="space-y-2">
                                <motion.div
                                  className="bg-gradient-to-r from-[#B5FF6D]/10 to-[#8AFF8A]/10 rounded-lg p-3 border border-[#B5FF6D]/20 backdrop-blur-sm"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: hoveredCard === idx ? 1 : 0, x: hoveredCard === idx ? 0 : -20 }}
                                  transition={{ delay: 0.4 }}
                                >
                                  <div className="flex items-center mb-1">
                                    <span className="text-[#B5FF6D] mr-2">🐍</span>
                                    <span className="text-xs font-semibold text-[#B5FF6D]">Python Development</span>
                                  </div>
                                  <p className="text-xs text-gray-300">Flask, Django, REST APIs, databases</p>
                                </motion.div>
                                <motion.div
                                  className="bg-gradient-to-r from-[#B5FF6D]/10 to-[#8AFF8A]/10 rounded-lg p-3 border border-[#B5FF6D]/20 backdrop-blur-sm"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: hoveredCard === idx ? 1 : 0, x: hoveredCard === idx ? 0 : -20 }}
                                  transition={{ delay: 0.5 }}
                                >
                                  <div className="flex items-center mb-1">
                                    <span className="text-[#B5FF6D] mr-2">🧠</span>
                                    <span className="text-xs font-semibold text-[#B5FF6D]">AI/ML Engineering</span>
                                  </div>
                                  <p className="text-xs text-gray-300">TensorFlow, PyTorch, OpenCV, NLP</p>
                                </motion.div>
                                <motion.div
                                  className="bg-gradient-to-r from-[#B5FF6D]/10 to-[#8AFF8A]/10 rounded-lg p-3 border border-[#B5FF6D]/20 backdrop-blur-sm"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: hoveredCard === idx ? 1 : 0, x: hoveredCard === idx ? 0 : -20 }}
                                  transition={{ delay: 0.6 }}
                                >
                                  <div className="flex items-center mb-1">
                                    <span className="text-[#B5FF6D] mr-2">🔐</span>
                                    <span className="text-xs font-semibold text-[#B5FF6D]">Tech Leadership</span>
                                  </div>
                                  <p className="text-xs text-gray-300">Architecture design, deployment, innovation</p>
                                </motion.div>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Premium Ripple Effect */}
                        <div className="absolute inset-0 rounded-2xl overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B5FF6D]/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </div>

                        {/* Premium Corner Accents */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#B5FF6D]/50 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-[#B5FF6D]/50 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-[#B5FF6D]/50 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#B5FF6D]/50 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      </motion.div>
                      {/* Info Side Panel at right */}
                      <div className="flex flex-col items-start lg:items-end lg:text-right">
                        <h2 className="text-4xl font-bold mb-1 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent text-left">{founder.name}</h2>
                        <h3 className="text-xl text-[#B5FF6D] font-semibold mb-1 tracking-wide text-left">{founder.title}</h3>
                        {founder.location && (
                          <p className="text-lg text-gray-300 mb-2 font-medium text-left">{founder.location}</p>
                        )}
                        <p className="text-lg text-gray-200 mb-4 font-medium text-left">{founder.expertise}</p>
                        {/* Animated Social Media Icons */}
                        <div className={`flex space-x-4 mt-4 w-full ${founder.name === 'Hitanshu Patel' ? 'justify-end' : 'justify-start'}`}>
                          {founder.social.linkedin && (
                            <a href={founder.social.linkedin} target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-125 hover:text-[#0A66C2]">
                              <Linkedin className="w-6 h-6 text-[#B5FF6D] hover:text-[#0A66C2] animate-pulse" />
                            </a>
                          )}
                          {founder.social.github && (
                            <a href={founder.social.github} target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-125 hover:text-white">
                              <Github className="w-6 h-6 text-[#B5FF6D] hover:text-white animate-pulse" />
                            </a>
                          )}
                          {founder.social.twitter && (
                            <a href={founder.social.twitter} target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-125 hover:text-[#1DA1F2]">
                              <Twitter className="w-6 h-6 text-[#B5FF6D] hover:text-[#1DA1F2] animate-pulse" />
                            </a>
                          )}
                          {founder.social.email && (
                            <a href={`mailto:${founder.social.email}`} className="transition-transform duration-300 hover:scale-125 hover:text-[#EA4335]">
                              <Mail className="w-6 h-6 text-[#B5FF6D] hover:text-[#EA4335] animate-pulse" />
                            </a>
                          )}
                        </div>
                        {/* Animated Achievement Badges */}
                        <div className={`flex flex-wrap gap-2 mt-4 ${founder.name === 'Hitanshu Patel' ? 'justify-end' : 'justify-start'}`}>
                          {founder.achievements && founder.achievements.map((ach, i) => (
                            <motion.div
                              key={ach}
                              initial={{ opacity: 0, x: founder.name === 'Hitanshu Patel' ? 40 : -40 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: 'easeOut' }}
                              viewport={{ once: true }}
                              className="px-3 py-1 rounded-full bg-gradient-to-r from-[#B5FF6D]/20 to-[#8AFF8A]/20 border border-[#B5FF6D]/30 text-xs font-semibold text-[#B5FF6D] shadow-md backdrop-blur-sm"
                            >
                              {ach}
                            </motion.div>
                          ))}
                        </div>
                        {/* Signature or Quote */}
                        <div className={`mt-4 ${founder.name === 'Hitanshu Patel' ? 'text-right' : 'text-left'}`}>
                          <span className="block text-lg font-signature text-[#B5FF6D] animate-pulse drop-shadow-lg" style={{
                            textShadow: '0 0 8px #B5FF6D, 0 0 16px #B5FF6D',
                            fontFamily: 'cursive, "Pacifico", "Dancing Script", sans-serif',
                          }}>
                            {(founder.name as string) === 'Sujal Talreja'
                              ? '“Building bridges between data, design, and digital growth.”'
                              : '“Innovating intelligent systems for a smarter tomorrow.”'}
                          </span>
                        </div>
                        {/* Mini Timeline */}
                        <div className={`flex items-center gap-4 mt-6 ${founder.name === 'Hitanshu Patel' ? 'justify-end' : 'justify-start'}`}>
                          {((founder.name as string) === 'Sujal Talreja'
                            ? [
                                { year: '2025', label: 'Global Expansion', quote: '“A single year can change the world.”' },
                              ]
                            : [
                                { year: '2025', label: 'AI Breakthrough', quote: '“Innovation is the calling of the future.”' }
                              ]
                          ).map((milestone, i) => (
                            <motion.div
                              key={milestone.year}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: 'easeOut' }}
                              viewport={{ once: true }}
                              className="flex flex-col items-center"
                            >
                              <span className="w-6 h-6 rounded-full bg-[#B5FF6D] mb-2 animate-pulse shadow-2xl border-4 border-[#8AFF8A]" />
                              <span className="text-lg text-[#B5FF6D] font-extrabold mb-1 bg-black px-4 py-1 rounded-full shadow-lg border border-[#B5FF6D]">{milestone.year}</span>
                              <span className="text-base text-white font-bold mb-1">{milestone.label}</span>
                              {milestone.quote && (
                                <span className="text-xs text-[#8A9A5B] italic text-center">{milestone.quote}</span>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Info Side Panel at left (default) */}
                      <div className="flex flex-col items-start">
                        <h2 className="text-4xl font-bold mb-1 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent text-left">{founder.name}</h2>
                        <h3 className="text-xl text-[#B5FF6D] font-semibold mb-1 tracking-wide text-left">{founder.title}</h3>
                        {founder.location && (
                          <p className="text-lg text-gray-300 mb-2 font-medium text-left">{founder.location}</p>
                        )}
                        <p className="text-lg text-gray-200 mb-4 font-medium text-left">{founder.expertise}</p>
                        {/* Animated Social Media Icons */}
                        <div className={`flex space-x-4 mt-4 w-full ${founder.name === 'Hitanshu Patel' ? 'justify-end' : 'justify-start'}`}>
                          {founder.social.linkedin && (
                            <a href={founder.social.linkedin} target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-125 hover:text-[#0A66C2]">
                              <Linkedin className="w-6 h-6 text-[#B5FF6D] hover:text-[#0A66C2] animate-pulse" />
                            </a>
                          )}
                          {founder.social.github && (
                            <a href={founder.social.github} target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-125 hover:text-white">
                              <Github className="w-6 h-6 text-[#B5FF6D] hover:text-white animate-pulse" />
                            </a>
                          )}
                          {founder.social.twitter && (
                            <a href={founder.social.twitter} target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-125 hover:text-[#1DA1F2]">
                              <Twitter className="w-6 h-6 text-[#B5FF6D] hover:text-[#1DA1F2] animate-pulse" />
                            </a>
                          )}
                          {founder.social.email && (
                            <a href={`mailto:${founder.social.email}`} className="transition-transform duration-300 hover:scale-125 hover:text-[#EA4335]">
                              <Mail className="w-6 h-6 text-[#B5FF6D] hover:text-[#EA4335] animate-pulse" />
                            </a>
                          )}
                        </div>
                        {/* Animated Achievement Badges */}
                        <div className={`flex flex-wrap gap-2 mt-4 ${founder.name === 'Hitanshu Patel' ? 'justify-end' : 'justify-start'}`}>
                          {founder.achievements && founder.achievements.map((ach, i) => (
                            <motion.div
                              key={ach}
                              initial={{ opacity: 0, x: founder.name === 'Hitanshu Patel' ? 40 : -40 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: 'easeOut' }}
                              viewport={{ once: true }}
                              className="px-3 py-1 rounded-full bg-gradient-to-r from-[#B5FF6D]/20 to-[#8AFF8A]/20 border border-[#B5FF6D]/30 text-xs font-semibold text-[#B5FF6D] shadow-md backdrop-blur-sm"
                            >
                              {ach}
                            </motion.div>
                          ))}
                        </div>
                        {/* Signature or Quote */}
                        <div className={`mt-4 ${founder.name === 'Hitanshu Patel' ? 'text-right' : 'text-left'}`}>
                          <span className="block text-lg font-signature text-[#B5FF6D] animate-pulse drop-shadow-lg" style={{
                            textShadow: '0 0 8px #B5FF6D, 0 0 16px #B5FF6D',
                            fontFamily: 'cursive, "Pacifico", "Dancing Script", sans-serif',
                          }}>
                            {(founder.name as string) === 'Sujal Talreja'
                              ? '“Building bridges between data, design, and digital growth.”'
                              : '“Innovating intelligent systems for a smarter tomorrow.”'}
                          </span>
                        </div>
                        {/* Mini Timeline */}
                        <div className={`flex items-center gap-4 mt-6 ${founder.name === 'Hitanshu Patel' ? 'justify-end' : 'justify-start'}`}>
                          {((founder.name as string) === 'Sujal Talreja'
                            ? [
                                { year: '2025', label: 'Global Expansion', quote: '“A single year can change the world.”' },
                              ]
                            : [
                                { year: '2025', label: 'AI Breakthrough', quote: '“Innovation is the calling of the future.”' }
                              ]
                          ).map((milestone, i) => (
                            <motion.div
                              key={milestone.year}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: 'easeOut' }}
                              viewport={{ once: true }}
                              className="flex flex-col items-center"
                            >
                              <span className="w-6 h-6 rounded-full bg-[#B5FF6D] mb-2 animate-pulse shadow-2xl border-4 border-[#8AFF8A]" />
                              <span className="text-lg text-[#B5FF6D] font-extrabold mb-1 bg-black px-4 py-1 rounded-full shadow-lg border border-[#B5FF6D]">{milestone.year}</span>
                              <span className="text-base text-white font-bold mb-1">{milestone.label}</span>
                              {milestone.quote && (
                                <span className="text-xs text-[#8A9A5B] italic text-center">{milestone.quote}</span>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      {/* Card with photo at right (default) */}
                      <motion.div
                        className="relative overflow-hidden rounded-2xl h-96 cursor-pointer group flex flex-col items-center justify-start"
                        onHoverStart={() => setHoveredCard(idx)}
                        onHoverEnd={() => setHoveredCard(null)}
                        whileHover={{
                          scale: 1.02,
                          transition: { duration: 0.3 }
                        }}
                        style={{
                          transformStyle: 'preserve-3d',
                          perspective: '1000px',
                          backdropFilter: 'blur(10px)',
                          background: 'rgba(24, 24, 27, 0.25)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(181, 255, 109, 0.1)'
                        }}
                      >
                        {/* Premium Animated Border */}
                        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                          <div className="absolute inset-0 bg-gradient-to-r from-[#B5FF6D] via-[#8AFF8A] to-[#B5FF6D] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                          <div className="absolute inset-[2px] rounded-2xl bg-black" />
                        </div>

                        {/* Animated Particles Background */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                          {[...Array(20)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-gradient-to-r from-[#B5FF6D] to-[#8AFF8A] rounded-full"
                              style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                              }}
                              animate={{
                                y: [0, -20, 0],
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                              }}
                              transition={{
                                duration: 2 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                              }}
                            />
                          ))}
                        </div>

                        {/* Premium Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        {/* Premium Glow Effect */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                          style={{
                            background: 'radial-gradient(circle at 50% 50%, rgba(181, 255, 109, 0.2) 0%, transparent 70%)',
                            filter: 'blur(20px)'
                          }}
                        />

                        {/* Floating Tech Icons with Premium Styling */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 pointer-events-none">
                          <div className="flex space-x-2">
                            <motion.div
                              className="w-10 h-10 bg-gradient-to-br from-[#B5FF6D]/20 to-[#8AFF8A]/20 rounded-xl flex items-center justify-center border border-[#B5FF6D]/30 backdrop-blur-sm shadow-lg"
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              style={{
                                boxShadow: '0 4px 15px rgba(181, 255, 109, 0.3)'
                              }}
                            >
                              <Code className="w-5 h-5 text-[#B5FF6D]" />
                            </motion.div>
                            <motion.div
                              className="w-10 h-10 bg-gradient-to-br from-[#B5FF6D]/20 to-[#8AFF8A]/20 rounded-xl flex items-center justify-center border border-[#B5FF6D]/30 backdrop-blur-sm shadow-lg"
                              whileHover={{ scale: 1.2, rotate: -5 }}
                              style={{
                                boxShadow: '0 4px 15px rgba(181, 255, 109, 0.3)'
                              }}
                            >
                              <Database className="w-5 h-5 text-[#B5FF6D]" />
                            </motion.div>
                            <motion.div
                              className="w-10 h-10 bg-gradient-to-br from-[#B5FF6D]/20 to-[#8AFF8A]/20 rounded-xl flex items-center justify-center border border-[#B5FF6D]/30 backdrop-blur-sm shadow-lg"
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              style={{
                                boxShadow: '0 4px 15px rgba(181, 255, 109, 0.3)'
                              }}
                            >
                              <Globe className="w-5 h-5 text-[#B5FF6D]" />
                            </motion.div>
                          </div>
                        </div>

                        {/* PHOTO AT TOP OF CARD */}
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="w-28 h-28 rounded-full object-cover border-4 border-[#B5FF6D] shadow-lg mt-6 mb-2 z-10"
                          style={{ background: '#18181b' }}
                        />

                        {/* Minimal Content Inside Card */}
                        <div className="flex flex-col items-center justify-start w-full px-2">
                          {/* Premium Animated Badge */}
                          <motion.div
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#B5FF6D]/20 to-[#8AFF8A]/20 border border-[#B5FF6D]/40 rounded-full mb-2 backdrop-blur-sm shadow-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: hoveredCard === idx ? 1 : 0 }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                            style={{
                              boxShadow: '0 4px 15px rgba(181, 255, 109, 0.3)'
                            }}
                          >
                            <span className="text-[#B5FF6D] text-sm font-bold tracking-wide">Co-Founder</span>
                          </motion.div>
                          <h2 className="text-2xl font-bold mb-1 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent text-center">{founder.name}</h2>
                          <h3 className="text-base text-[#B5FF6D] font-semibold mb-1 tracking-wide text-center">{founder.title}</h3>
                          <p className="text-xs text-gray-200 font-medium mb-2 text-center">{founder.expertise}</p>
                        </div>

                        {/* Technical Expertise Section */}
                        <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0 pointer-events-none">
                          <div className="text-white relative z-10">
                            {/* Animated Technical Expertise Cards */}
                            {(founder.name as string) === 'Sujal Talreja' && (
                              <div className="space-y-2">
                                <motion.div
                                  className="bg-gradient-to-r from-[#B5FF6D]/10 to-[#8AFF8A]/10 rounded-lg p-3 border border-[#B5FF6D]/20 backdrop-blur-sm"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: hoveredCard === idx ? 1 : 0, x: hoveredCard === idx ? 0 : -20 }}
                                  transition={{ delay: 0.4 }}
                                >
                                  <div className="flex items-center mb-1">
                                    <span className="text-[#B5FF6D] mr-2">🌐</span>
                                    <span className="text-xs font-semibold text-[#B5FF6D]">Web Development</span>
                                  </div>
                                  <p className="text-xs text-gray-300">Full-stack solutions, React, Flask, REST APIs</p>
                                </motion.div>
                                <motion.div
                                  className="bg-gradient-to-r from-[#B5FF6D]/10 to-[#8AFF8A]/10 rounded-lg p-3 border border-[#B5FF6D]/20 backdrop-blur-sm"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: hoveredCard === idx ? 1 : 0, x: hoveredCard === idx ? 0 : -20 }}
                                  transition={{ delay: 0.5 }}
                                >
                                  <div className="flex items-center mb-1">
                                    <span className="text-[#B5FF6D] mr-2">📊</span>
                                    <span className="text-xs font-semibold text-[#B5FF6D]">Data Analytics</span>
                                  </div>
                                  <p className="text-xs text-gray-300">Python, SQL, MongoDB, Tableau insights</p>
                                </motion.div>
                                <motion.div
                                  className="bg-gradient-to-r from-[#B5FF6D]/10 to-[#8AFF8A]/10 rounded-lg p-3 border border-[#B5FF6D]/20 backdrop-blur-sm"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: hoveredCard === idx ? 1 : 0, x: hoveredCard === idx ? 0 : -20 }}
                                  transition={{ delay: 0.6 }}
                                >
                                  <div className="flex items-center mb-1">
                                    <span className="text-[#B5FF6D] mr-2">📈</span>
                                    <span className="text-xs font-semibold text-[#B5FF6D]">Digital Marketing</span>
                                  </div>
                                  <p className="text-xs text-gray-300">SEO, growth hacking, data-driven campaigns</p>
                                </motion.div>
                              </div>
                            )}
                            {(founder.name as string) === 'Hitanshu Patel' && (
                              <div className="space-y-2">
                                <motion.div
                                  className="bg-gradient-to-r from-[#B5FF6D]/10 to-[#8AFF8A]/10 rounded-lg p-3 border border-[#B5FF6D]/20 backdrop-blur-sm"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: hoveredCard === idx ? 1 : 0, x: hoveredCard === idx ? 0 : -20 }}
                                  transition={{ delay: 0.4 }}
                                >
                                  <div className="flex items-center mb-1">
                                    <span className="text-[#B5FF6D] mr-2">🐍</span>
                                    <span className="text-xs font-semibold text-[#B5FF6D]">Python Development</span>
                                  </div>
                                  <p className="text-xs text-gray-300">Flask, Django, REST APIs, databases</p>
                                </motion.div>
                                <motion.div
                                  className="bg-gradient-to-r from-[#B5FF6D]/10 to-[#8AFF8A]/10 rounded-lg p-3 border border-[#B5FF6D]/20 backdrop-blur-sm"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: hoveredCard === idx ? 1 : 0, x: hoveredCard === idx ? 0 : -20 }}
                                  transition={{ delay: 0.5 }}
                                >
                                  <div className="flex items-center mb-1">
                                    <span className="text-[#B5FF6D] mr-2">🧠</span>
                                    <span className="text-xs font-semibold text-[#B5FF6D]">AI/ML Engineering</span>
                                  </div>
                                  <p className="text-xs text-gray-300">TensorFlow, PyTorch, OpenCV, NLP</p>
                                </motion.div>
                                <motion.div
                                  className="bg-gradient-to-r from-[#B5FF6D]/10 to-[#8AFF8A]/10 rounded-lg p-3 border border-[#B5FF6D]/20 backdrop-blur-sm"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: hoveredCard === idx ? 1 : 0, x: hoveredCard === idx ? 0 : -20 }}
                                  transition={{ delay: 0.6 }}
                                >
                                  <div className="flex items-center mb-1">
                                    <span className="text-[#B5FF6D] mr-2">🔐</span>
                                    <span className="text-xs font-semibold text-[#B5FF6D]">Tech Leadership</span>
                                  </div>
                                  <p className="text-xs text-gray-300">Architecture design, deployment, innovation</p>
                                </motion.div>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Premium Ripple Effect */}
                        <div className="absolute inset-0 rounded-2xl overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B5FF6D]/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </div>

                        {/* Premium Corner Accents */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#B5FF6D]/50 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-[#B5FF6D]/50 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-[#B5FF6D]/50 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#B5FF6D]/50 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      </motion.div>
                    </>
                  )}
                </div>
              ) : (
                <div>No image available</div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Founders;