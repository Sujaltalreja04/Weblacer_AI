import React, { useRef } from 'react';
import { ExternalLink, Github, Monitor, Building, Smartphone, Database, Shield, TrendingUp } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Global Banking Platform",
      description: "Enterprise-grade banking solution serving 2M+ users across 15 countries with real-time transactions and advanced security",
      image: "https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "PostgreSQL", "Kubernetes", "AWS"],
      category: "Enterprise",
      icon: Building,
      metrics: { users: "2M+", countries: "15", uptime: "99.99%" }
    },
    {
      title: "Healthcare Management System",
      description: "HIPAA-compliant healthcare platform managing patient records, appointments, and telemedicine for 500+ hospitals",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Vue.js", "Python", "MongoDB", "Docker", "Azure"],
      category: "Healthcare",
      icon: Shield,
      metrics: { hospitals: "500+", patients: "10M+", compliance: "HIPAA" }
    },
    {
      title: "E-Commerce Marketplace",
      description: "Multi-vendor marketplace platform processing $100M+ in annual transactions with AI-powered recommendations",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Next.js", "Microservices", "Redis", "Elasticsearch", "GCP"],
      category: "E-Commerce",
      icon: TrendingUp,
      metrics: { revenue: "$100M+", vendors: "10K+", orders: "1M+" }
    },
    {
      title: "Smart City IoT Platform",
      description: "IoT infrastructure management system for smart cities, monitoring 50K+ sensors and optimizing urban resources",
      image: "https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Angular", "IoT", "Time Series DB", "Machine Learning", "Edge Computing"],
      category: "IoT",
      icon: Database,
      metrics: { sensors: "50K+", cities: "25", efficiency: "+30%" }
    },
    {
      title: "Financial Trading Platform",
      description: "High-frequency trading platform processing millions of transactions per second with microsecond latency",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=800",
      tech: ["C++", "Real-time Systems", "Low Latency", "Market Data", "Risk Management"],
      category: "FinTech",
      icon: TrendingUp,
      metrics: { latency: "<1ms", volume: "10M+/day", accuracy: "99.999%" }
    },
    {
      title: "Enterprise Mobile Suite",
      description: "Cross-platform mobile application suite for workforce management, deployed across Fortune 100 companies",
      image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React Native", "Flutter", "Mobile Security", "Offline Sync", "Enterprise MDM"],
      category: "Mobile",
      icon: Smartphone,
      metrics: { employees: "1M+", companies: "100+", satisfaction: "4.8/5" }
    }
  ];

  // Parallax tilt logic
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (e: React.MouseEvent, idx: number) => {
    const card = cardRefs.current[idx];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * -8;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04,1.04,1.04)`;
    card.style.boxShadow = `0 8px 32px 0 #B5FF6D33`;
    card.style.borderColor = '#B5FF6D';
  };

  const handleMouseLeave = (idx: number) => {
    const card = cardRefs.current[idx];
    if (!card) return;
    card.style.transform = '';
    card.style.boxShadow = '';
    card.style.borderColor = '';
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Massive 3D Project Showcase Background */}
      <div className="absolute inset-0 perspective-[6000px]">
        {/* 3D Project Gallery Structure */}
        <div className="absolute inset-0 transform rotateX-70 rotateY-20 scale-150 opacity-8">
          <div className="grid grid-cols-8 gap-8 h-[250vh] w-[250vw]">
            {Array.from({ length: 200 }).map((_, i) => (
              <div 
                key={i} 
                className="bg-gradient-to-t from-[#B5FF6D]/10 to-[#8A9A5B]/10 border border-[#B5FF6D]/20 rounded-lg animate-pulse"
                style={{ 
                  animationDelay: `${i * 50}ms`,
                  height: `${Math.random() * 250 + 150}px`,
                  transform: `translateZ(${Math.random() * 400}px) rotateX(${Math.random() * 30}deg)`
                }}
              >
                <div className="w-full h-4 bg-[#B5FF6D]/30 rounded-t"></div>
                <div className="p-2 space-y-1">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <div key={j} className="h-1 bg-[#8A9A5B]/40 rounded animate-pulse"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Success Metrics */}
        <div className="absolute top-40 right-20 perspective-[2000px]">
          <div className="relative w-80 h-80 animate-spin-slow">
            <div className="absolute inset-0 border-2 border-[#B5FF6D]/20 rounded-full"></div>
            <div className="absolute inset-8 border border-[#8A9A5B]/20 rounded-full"></div>
            
            {/* Floating Metrics */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 text-center">
              <div className="text-[#B5FF6D] font-bold text-lg">$500M+</div>
              <div className="text-[#8A9A5B] text-xs">Revenue Generated</div>
            </div>
            <div className="absolute right-0 top-1/2 transform translate-x-8 -translate-y-1/2 text-center">
              <div className="text-[#B5FF6D] font-bold text-lg">50M+</div>
              <div className="text-[#8A9A5B] text-xs">Users Served</div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 text-center">
              <div className="text-[#B5FF6D] font-bold text-lg">99.9%</div>
              <div className="text-[#8A9A5B] text-xs">Uptime SLA</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-[#B5FF6D]/10 border border-[#B5FF6D]/30 rounded-full mb-8">
            <Monitor className="w-5 h-5 text-[#B5FF6D]" />
            <span className="text-[#B5FF6D] font-semibold">Enterprise Case Studies</span>
          </div>
          
          <h2 className="text-5xl font-bold text-white mb-6">Transforming Industries Worldwide</h2>
          <p className="text-xl text-[#8A9A5B] max-w-3xl mx-auto">
            Discover how we've helped Fortune 500 companies and innovative startups achieve 
            breakthrough results through cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group perspective-[2000px]"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div 
                ref={el => { cardRefs.current[index] = el; }} 
                onMouseMove={e => handleMouseMove(e, index)} 
                onMouseLeave={() => handleMouseLeave(index)} 
                className="relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 group-hover:border-[#B5FF6D] transition-all duration-500 transform group-hover:rotateY-3 group-hover:scale-105"
              >
                {/* Project Image with 3D Effect */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* 3D Category Icon */}
                  <div className="absolute top-6 right-6 z-20 perspective-[1000px]">
                    <div className="w-12 h-12 bg-black/80 rounded-lg flex items-center justify-center border border-[#B5FF6D]/50 transform group-hover:rotateY-12 transition-transform duration-300">
                      <project.icon className="w-6 h-6 text-[#B5FF6D]" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <span className="px-4 py-2 bg-[#B5FF6D]/90 text-black text-sm font-bold rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Metrics Overlay */}
                  <div className="absolute bottom-4 left-6 right-6 z-20">
                    <div className="flex justify-between text-white text-sm">
                      {Object.entries(project.metrics).map(([key, value], i) => (
                        <div key={i} className="text-center">
                          <div className="font-bold text-[#B5FF6D]">{value}</div>
                          <div className="text-xs capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#B5FF6D] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#8A9A5B] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-white mb-3">Technology Stack:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700 text-[#B5FF6D] text-xs rounded-full border border-[#B5FF6D]/30 hover:bg-[#B5FF6D]/10 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <button className="flex-1 px-6 py-3 bg-[#B5FF6D] text-black font-bold rounded-lg hover:bg-[#A3E85C] transition-colors duration-300 flex items-center justify-center space-x-2 transform hover:scale-105">
                      <ExternalLink className="w-4 h-4" />
                      <span>View Case Study</span>
                    </button>
                    <button className="px-6 py-3 border border-[#8A9A5B] text-[#8A9A5B] rounded-lg hover:border-[#B5FF6D] hover:text-[#B5FF6D] transition-colors duration-300 transform hover:scale-105">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#B5FF6D]/5 to-[#8A9A5B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-2xl border border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Join Our Success Stories?</h3>
            <p className="text-lg text-[#8A9A5B] mb-8 max-w-2xl mx-auto">
              Partner with Weblancer to build the next generation of enterprise solutions 
              that will define your industry's future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#B5FF6D] text-black font-bold rounded-lg hover:bg-[#A3E85C] transform hover:scale-105 transition-all duration-300">
                Start Your Project
              </button>
              <button className="px-8 py-4 border-2 border-[#B5FF6D] text-[#B5FF6D] font-bold rounded-lg hover:bg-[#B5FF6D] hover:text-black transition-all duration-300">
                Download Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;