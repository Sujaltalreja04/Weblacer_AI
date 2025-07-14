import React from 'react';
import { Code, Palette, Smartphone, Server, Search, Zap, Database, Cloud, Shield, Cpu } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: "Enterprise Web Development",
      description: "Scalable web applications built with cutting-edge technologies",
      tech: ["React", "Node.js", "TypeScript", "Microservices"],
      category: "Development"
    },
    {
      icon: Smartphone,
      title: "Mobile App Solutions",
      description: "Native and cross-platform mobile applications for iOS and Android",
      tech: ["React Native", "Flutter", "Swift", "Kotlin"],
      category: "Mobile"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Big data solutions and analytics platforms",
      tech: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
      category: "Data"
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "Intelligent automation and predictive analytics",
      tech: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision"],
      category: "AI/ML"
    },
    {
      icon: Palette,
      title: "UX/UI Design",
      description: "User-centered design for optimal digital experiences",
      tech: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
      category: "Design"
    },
    {
      icon: Search,
      title: "Digital Marketing",
      description: "SEO optimization and digital growth strategies",
      tech: ["Analytics", "SEO", "SEM", "Content Strategy"],
      category: "Marketing"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Application performance tuning and monitoring",
      tech: ["CDN", "Caching", "Load Balancing", "Monitoring"],
      category: "Performance"
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Massive 3D Tech Grid Background */}
      <div className="absolute inset-0 perspective-[5000px]">
        <div className="absolute inset-0 transform rotateX-75 rotateY-15 scale-200 opacity-5">
          <div className="grid grid-cols-20 gap-3 h-[300vh] w-[300vw]">
            {Array.from({ length: 1200 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-[#B5FF6D]/30 bg-gradient-to-t from-[#B5FF6D]/10 to-transparent animate-pulse"
                style={{ 
                  animationDelay: `${i * 20}ms`,
                  height: `${Math.random() * 200 + 100}px`,
                  transform: `translateZ(${Math.random() * 300}px) rotateX(${Math.random() * 45}deg)`
                }}
              >
                <div className="w-full h-2 bg-[#B5FF6D]/40 rounded-t"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating 3D Service Cubes */}
        <div className="absolute top-20 left-20 perspective-[2000px]">
          <div className="relative w-64 h-64 animate-spin-slow">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-16 h-16 bg-gradient-to-br from-[#B5FF6D]/20 to-[#8A9A5B]/20 border border-[#B5FF6D]/40 rounded-lg transform animate-float"
                style={{
                  left: `${Math.cos(i * Math.PI / 4) * 100 + 100}px`,
                  top: `${Math.sin(i * Math.PI / 4) * 100 + 100}px`,
                  transform: `translateZ(${i * 30}px) rotateX(${i * 45}deg) rotateY(${i * 45}deg)`,
                  animationDelay: `${i * 300}ms`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-[#B5FF6D]/10 border border-[#B5FF6D]/30 rounded-full mb-8">
            <Server className="w-5 h-5 text-[#B5FF6D]" />
            <span className="text-[#B5FF6D] font-semibold">Enterprise Solutions</span>
          </div>
          
          <h2 className="text-5xl font-bold text-white mb-6">Comprehensive Technology Services</h2>
          <p className="text-xl text-[#8A9A5B] max-w-3xl mx-auto">
            End-to-end digital solutions designed to accelerate your business transformation 
            and maintain competitive advantage in the digital marketplace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group perspective-[1500px]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full">
                {/* Service Card */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 group-hover:border-[#B5FF6D] transition-all duration-500 transform group-hover:rotateY-5 group-hover:scale-105 h-full overflow-hidden">
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-[#B5FF6D]/10 text-[#B5FF6D] text-xs font-semibold rounded-full border border-[#B5FF6D]/30">
                      {service.category}
                    </span>
                  </div>

                  {/* Icon Uplift Animation */}
                  <div className="flex flex-col items-center justify-center mb-6 relative z-10">
                    <div className="w-16 h-16 bg-[#B5FF6D]/10 rounded-xl flex items-center justify-center border border-[#B5FF6D]/30 transition-all duration-500 group-hover:bg-[#B5FF6D]/20 group-hover:shadow-[0_8px_32px_0_#B5FF6D55] group-hover:scale-110 group-hover:-translate-y-8">
                      <service.icon className="w-8 h-8 text-[#B5FF6D] transition-all duration-500 group-hover:animate-pulse" />
                    </div>
                  </div>

                  {/* Content Reveal Animation */}
                  <div className="transition-all duration-500 delay-100 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#B5FF6D] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[#8A9A5B] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="space-y-2 mb-6">
                      <div className="text-sm font-semibold text-white mb-2">Technologies:</div>
                      <div className="flex flex-wrap gap-2">
                        {service.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-gray-700 text-[#B5FF6D] text-xs rounded-full border border-[#B5FF6D]/30 hover:bg-[#B5FF6D]/10 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full py-3 bg-[#B5FF6D]/10 text-[#B5FF6D] font-semibold rounded-lg border border-[#B5FF6D]/30 hover:bg-[#B5FF6D] hover:text-black transition-all duration-300 transform hover:scale-105">
                      Learn More
                    </button>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B5FF6D]/5 to-[#8A9A5B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-2xl border border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h3>
            <p className="text-lg text-[#8A9A5B] mb-8 max-w-2xl mx-auto">
              Partner with Weblancer to leverage cutting-edge technology solutions that drive 
              innovation and accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#B5FF6D] text-black font-bold rounded-lg hover:bg-[#A3E85C] transform hover:scale-105 transition-all duration-300">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border-2 border-[#B5FF6D] text-[#B5FF6D] font-bold rounded-lg hover:bg-[#B5FF6D] hover:text-black transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;