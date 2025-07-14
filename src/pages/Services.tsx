import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect, useState } from 'react';
import { Code, Palette, Smartphone, Video, Share2, Star, Check, ArrowRight, Zap, Shield, Globe } from 'lucide-react';
import TechBackground from '../components/TechBackground';
import CornerTechModels from '../components/CornerTechModels';
import { useRef } from 'react';
import Link from 'next/link';
import { useForm, ValidationError } from '@formspree/react';

function PlanModal({ open, onClose, subject }: { open: boolean, onClose: () => void, subject: string }) {
  const [state, handleSubmit] = useForm("xzzgqlqn");
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-black p-8 rounded-2xl border-2 border-[#B5FF6D] shadow-2xl relative max-w-md w-full" style={{ boxShadow: '0 0 32px 8px #B5FF6D88' }}>
        <button onClick={onClose} className="absolute top-4 right-4 text-[#B5FF6D] text-2xl font-bold">&times;</button>
        <h2 className="text-2xl font-bold text-white mb-4">Get Started with {subject}</h2>
        {state.succeeded ? (
          <p className="text-[#B5FF6D] text-lg font-semibold">Thanks for your interest! We'll contact you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-[#B5FF6D] font-semibold mb-1">Name</label>
              <input id="name" type="text" name="name" required className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-[#B5FF6D]/40 text-white focus:border-[#B5FF6D] outline-none" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-[#B5FF6D] font-semibold mb-1">Phone Number</label>
              <input id="phone" type="tel" name="phone" required className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-[#B5FF6D]/40 text-white focus:border-[#B5FF6D] outline-none" />
            </div>
            <div>
              <label htmlFor="email" className="block text-[#B5FF6D] font-semibold mb-1">Email</label>
              <input id="email" type="email" name="email" required className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-[#B5FF6D]/40 text-white focus:border-[#B5FF6D] outline-none" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="subject" className="block text-[#B5FF6D] font-semibold mb-1">Subject</label>
              <input id="subject" type="text" name="subject" value={subject} readOnly className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-[#B5FF6D]/40 text-white focus:border-[#B5FF6D] outline-none" />
            </div>
            <div>
              <label htmlFor="message" className="block text-[#B5FF6D] font-semibold mb-1">Message</label>
              <textarea id="message" name="message" rows={3} className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-[#B5FF6D]/40 text-white focus:border-[#B5FF6D] outline-none" placeholder="Anything else you'd like to share?" />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <button type="submit" disabled={state.submitting} className="w-full py-3 bg-[#B5FF6D] text-black font-bold rounded-lg hover:bg-[#A3E85C] transition-all duration-300 mt-2">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

const Services: React.FC = () => {
  const services = {
    web: {
      icon: Code,
      title: "Web Development",
      description: "Professional websites that drive business growth",
      packages: [
        {
          name: "Basic Site",
          price: "₹5,000",
          description: "Static Site perfect for Market Presence and ADS",
          features: [
            "Static Website Design",
            "Responsive Layout",
            "Contact Form",
            "Basic SEO Setup",
            "Social Media Integration",
            "1 Year Support"
          ],
          popular: false
        },
        {
          name: "Medium Site",
          price: "₹18,000",
          description: "Dynamic site with custom UI/UX and good animations",
          features: [
            "Dynamic Website",
            "Custom UI/UX Design",
            "Good Level Animations",
            "Admin Panel Included",
            "Hosting & Domain Included",
            "Content Management System",
            "Mobile Optimized",
            "Basic Analytics"
          ],
          popular: false
        },
        {
          name: "Advance Site",
          price: "₹30,000",
          description: "Customized Dynamic UI/UX with advance animations and services",
          features: [
            "Customized Dynamic UI/UX",
            "Advanced Animations",
            "High Level Services",
            "SEO Optimization",
            "Payment Integration",
            "Custom Forms",
            "4 Months Free Management",
            "Advanced Analytics",
            "Security Features"
          ],
          popular: true
        },
        {
          name: "Platinum Site",
          price: "₹50,000",
          description: "Enterprise-level website with AI and full backend",
          features: [
            "High Level Enterprise Site",
            "SEO + Content AI",
            "Google Analytics Integration",
            "Full Payment Integration",
            "Company Level Backend",
            "Advanced Security",
            "Performance Optimization",
            "24/7 Monitoring",
            "Unlimited Revisions",
            "1 Year Free Maintenance"
          ],
          popular: false
        }
      ]
    },
    app: {
      icon: Smartphone,
      title: "Application Development",
      description: "Mobile and web applications for modern businesses",
      packages: [
        {
          name: "Basic App",
          price: "₹15,000",
          description: "Simple mobile app with core functionality",
          features: [
            "Native Mobile App",
            "Basic UI/UX Design",
            "Core Functionality",
            "User Authentication",
            "Push Notifications",
            "App Store Submission"
          ],
          popular: false
        },
        {
          name: "Medium App",
          price: "₹35,000",
          description: "Feature-rich app with custom design and integrations",
          features: [
            "Cross-Platform App",
            "Custom UI/UX Design",
            "Advanced Features",
            "API Integrations",
            "Offline Functionality",
            "Analytics Integration",
            "Admin Dashboard",
            "3 Months Support"
          ],
          popular: false
        },
        {
          name: "Advanced App",
          price: "₹60,000",
          description: "Enterprise app with advanced features and backend",
          features: [
            "Enterprise-Grade App",
            "Advanced UI/UX",
            "Real-time Features",
            "Payment Integration",
            "Custom Backend",
            "Advanced Security",
            "Performance Optimization",
            "6 Months Support",
            "App Store Optimization"
          ],
          popular: true
        },
        {
          name: "Platinum App",
          price: "₹1,00,000",
          description: "Full-scale enterprise application with AI features",
          features: [
            "Full Enterprise Solution",
            "AI-Powered Features",
            "Advanced Analytics",
            "Multi-platform Support",
            "Scalable Architecture",
            "24/7 Monitoring",
            "Advanced Security",
            "1 Year Maintenance",
            "Dedicated Support Team",
            "Custom Integrations"
          ],
          popular: false
        }
      ]
    },
    video: {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing for all your content needs",
      packages: [
        {
          name: "Basic Editing",
          price: "₹2,000",
          description: "Simple video editing for social media content",
          features: [
            "Basic Video Editing",
            "Color Correction",
            "Audio Enhancement",
            "Simple Transitions",
            "Text Overlays",
            "Social Media Formats"
          ],
          popular: false
        },
        {
          name: "Medium Editing",
          price: "₹5,000",
          description: "Professional editing with motion graphics",
          features: [
            "Professional Editing",
            "Motion Graphics",
            "Advanced Transitions",
            "Sound Design",
            "Color Grading",
            "Multiple Formats",
            "Thumbnail Design",
            "2 Revisions"
          ],
          popular: false
        },
        {
          name: "Advanced Editing",
          price: "₹10,000",
          description: "High-end video production with special effects",
          features: [
            "High-End Production",
            "Special Effects (VFX)",
            "3D Graphics",
            "Professional Color Grading",
            "Advanced Sound Design",
            "Multiple Camera Angles",
            "Custom Animations",
            "Unlimited Revisions",
            "Fast Delivery"
          ],
          popular: true
        },
        {
          name: "Platinum Editing",
          price: "₹20,000",
          description: "Cinematic quality with full post-production services",
          features: [
            "Cinematic Quality",
            "Full Post-Production",
            "Advanced VFX",
            "3D Modeling & Animation",
            "Professional Audio Mix",
            "Color Correction Suite",
            "Multiple Versions",
            "Priority Support",
            "Same Day Delivery",
            "Commercial License"
          ],
          popular: false
        }
      ]
    },
    social: {
      icon: Share2,
      title: "Social Media Management",
      description: "Complete social media strategy and management",
      packages: [
        {
          name: "Basic Management",
          price: "₹8,000/month",
          description: "Essential social media presence management",
          features: [
            "2 Platforms Management",
            "10 Posts per Month",
            "Basic Content Creation",
            "Engagement Monitoring",
            "Monthly Analytics",
            "Community Management"
          ],
          popular: false
        },
        {
          name: "Medium Management",
          price: "₹15,000/month",
          description: "Comprehensive social media strategy",
          features: [
            "4 Platforms Management",
            "20 Posts per Month",
            "Custom Content Creation",
            "Story Management",
            "Paid Ad Management",
            "Weekly Analytics",
            "Influencer Outreach",
            "Brand Monitoring"
          ],
          popular: false
        },
        {
          name: "Advanced Management",
          price: "₹25,000/month",
          description: "Full-scale social media marketing",
          features: [
            "All Major Platforms",
            "Daily Content Creation",
            "Video Content",
            "Advanced Ad Campaigns",
            "Influencer Partnerships",
            "Real-time Monitoring",
            "Competitor Analysis",
            "Monthly Strategy Review",
            "Crisis Management"
          ],
          popular: true
        },
        {
          name: "Platinum Management",
          price: "₹40,000/month",
          description: "Enterprise social media with AI-powered insights",
          features: [
            "Enterprise-Level Management",
            "AI-Powered Content",
            "Advanced Analytics",
            "Multi-brand Management",
            "24/7 Monitoring",
            "Custom Campaigns",
            "Dedicated Account Manager",
            "Performance Optimization",
            "Brand Reputation Management",
            "Global Strategy"
          ],
          popular: false
        }
      ]
    },
    logo: {
      icon: Palette,
      title: "Logo Designing",
      description: "Professional logo design and brand identity",
      packages: [
        {
          name: "Basic Logo",
          price: "₹3,000",
          description: "Simple and clean logo design",
          features: [
            "3 Logo Concepts",
            "2 Revisions",
            "High-Resolution Files",
            "Basic Color Variations",
            "Standard Formats (PNG, JPG)",
            "Commercial License"
          ],
          popular: false
        },
        {
          name: "Medium Logo",
          price: "₹7,000",
          description: "Professional logo with brand guidelines",
          features: [
            "5 Logo Concepts",
            "Unlimited Revisions",
            "Vector Files (AI, EPS)",
            "Color & B&W Versions",
            "Brand Guidelines",
            "Business Card Design",
            "Social Media Kit",
            "Font Recommendations"
          ],
          popular: false
        },
        {
          name: "Advanced Logo",
          price: "₹12,000",
          description: "Complete brand identity package",
          features: [
            "Complete Brand Identity",
            "Logo Animation",
            "Letterhead Design",
            "Brand Style Guide",
            "Social Media Templates",
            "Packaging Design Concepts",
            "Website Header Design",
            "3 Months Support",
            "Trademark Guidance"
          ],
          popular: true
        },
        {
          name: "Platinum Logo",
          price: "₹20,000",
          description: "Enterprise branding with full marketing materials",
          features: [
            "Enterprise Brand Package",
            "3D Logo Rendering",
            "Complete Marketing Kit",
            "Brand Strategy Document",
            "Multiple Logo Variations",
            "Animated Logo Versions",
            "Print & Digital Assets",
            "Brand Implementation Guide",
            "6 Months Support",
            "Brand Protection Services"
          ],
          popular: false
        }
      ]
    }
  };

  const serviceKeys = Object.keys(services) as Array<keyof typeof services>;
  const [activeService, setActiveService] = useState<keyof typeof services>(serviceKeys[0]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState('');
  const [modalKey, setModalKey] = useState(0); // Add a key to force remount

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

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
      {/* Glowing 3D Tech Background */}
      <TechBackground zIndex="z-[-1]" gridDensity={1200} gridOpacity={0.35} />
      {/* Corner Tech Models (animated, in corners) */}
      <CornerTechModels />
      {/* Floating Tech Icons (background, above TechBackground) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="absolute top-10 left-10 w-12 h-12 animate-float-slow opacity-30" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="absolute bottom-20 right-20 w-14 h-14 animate-float-reverse opacity-30" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="absolute top-1/2 left-1/4 w-10 h-10 animate-float opacity-20" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" className="absolute bottom-10 left-1/2 w-10 h-10 animate-float-slow opacity-20" />
      </div>
      {/* Main Services Content */}
      <motion.div className="relative z-10" ref={ref} initial={{ opacity: 0, y: 40 }} animate={controls} transition={{ duration: 1, ease: 'easeOut' }}>
        {/* Hero Section */}
        <section className="py-20 bg-transparent relative overflow-hidden">
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
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-4">
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-[#B5FF6D]/10 border border-[#B5FF6D]/30 rounded-full mb-2">
                <Star className="w-5 h-5 text-[#B5FF6D]" />
                <span className="text-[#B5FF6D] font-semibold">Services & Packages</span>
              </div>
              
              <h1 className="text-6xl font-bold text-white mb-2">Our Services & Packages</h1>
              <p className="text-xl text-[#8A9A5B] max-w-4xl mx-auto">
                Choose from our comprehensive range of digital services designed to accelerate your business growth 
                and establish a strong online presence.
              </p>
            </div>

            {/* Service Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-0">
              {serviceKeys.map((key) => {
                const service = services[key];
                return (
                  <motion.button
                    whileHover={{ scale: 1.08, boxShadow: '0 0 16px #B5FF6D55' }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    key={key}
                    onClick={() => setActiveService(key)}
                    className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      activeService === key
                        ? 'bg-[#B5FF6D] text-black'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    <service.icon className="w-5 h-5" />
                    <span>{service.title}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-20 bg-transparent relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-2">
              <h2 className="text-4xl font-bold text-white mb-2">{services[activeService].title}</h2>
              <p className="text-lg text-[#8A9A5B]">{services[activeService].description}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {services[activeService].packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
                  className="group"
                >
                  <div
                    className={`relative bg-gray-800/50 p-8 rounded-xl border border-gray-700 shadow-2xl flex flex-col justify-between items-center text-center transition-all duration-500 hover:border-[#B5FF6D] hover:shadow-[#B5FF6D]/40`}
                    style={{ minHeight: '420px', minWidth: '260px', maxWidth: '320px', aspectRatio: '1 / 1', overflow: 'visible', perspective: '800px' }}
                    onMouseMove={e => {
                      const card = e.currentTarget;
                      const rect = card.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;
                      const rotateX = ((y - centerY) / centerY) * 10;
                      const rotateY = ((x - centerX) / centerX) * 10;
                      card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04,1.04,1.04)`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = '';
                    }}
                  >
                    {/* Weblancer Logo Animation + Card Name */}
                    <div className="flex flex-col items-center justify-center absolute inset-0 z-20 transition-all duration-500 group-hover:-translate-y-16 group-hover:scale-90 group-hover:opacity-0">
                      <img src="https://i.postimg.cc/DwwNNDsr/Whats-App-Image-2025-06-26-at-17-33-59-a813e2b2.jpg" alt="Weblancer Logo" className="w-20 h-20 rounded-2xl shadow-lg border-4 border-[#B5FF6D] bg-white object-contain" />
                      <span className="mt-4 text-lg font-bold text-[#B5FF6D] drop-shadow-[0_0_8px_#B5FF6D] animate-pulse">{pkg.name}</span>
                    </div>

                    {/* Content Reveal Animation */}
                    <div className="opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 relative z-10 flex flex-col h-full w-full items-center justify-center">
                      {pkg.popular && (
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-30 flex justify-center w-full pointer-events-none">
                          <span className="px-4 py-1 bg-[#B5FF6D] text-black text-xs font-bold rounded-full shadow-md border border-[#B5FF6D]/40 pointer-events-auto animate-pulse" style={{ minWidth: '110px', textAlign: 'center' }}>
                            Most Popular
                          </span>
                        </div>
                      )}

                      {/* Card Name moved below logo, so remove from here */}
                      <div className="mb-2 mt-10">
                        {/* <h3 className="text-lg font-bold text-white mb-1 drop-shadow-lg">{pkg.name}</h3> */}
                        <div className="text-2xl font-bold text-[#B5FF6D] mb-1">{pkg.price}</div>
                        <p className="text-[#8A9A5B] text-xs">{pkg.description}</p>
                      </div>

                      {/* Features list is now always fully visible, no scroll bar */}
                      <div className="space-y-2 mb-4 flex-1 w-full px-1">
                        {pkg.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-[#B5FF6D] flex-shrink-0" />
                            <span className="text-gray-300 text-xs text-left">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="w-full max-w-[90%] mx-auto">
                        <motion.button
                          whileHover={{ scale: 1.08, boxShadow: '0 0 16px #B5FF6D55' }}
                          whileTap={{ scale: 0.96 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                          onClick={() => {
                            setModalOpen(true);
                            setModalSubject(pkg.name);
                            setModalKey(prev => prev + 1); // Increment key to remount modal
                          }}
                          className={`py-2 rounded-lg font-bold transition-all duration-300 flex items-center justify-center space-x-2 text-sm relative overflow-hidden ripple-btn w-full` + (pkg.popular ? ' bg-[#B5FF6D] text-black hover:bg-[#A3E85C]' : ' bg-gray-700 text-white hover:bg-[#B5FF6D] hover:text-black')}
                        >
                          <span>Choose Plan</span>
                          <motion.span
                            initial={{ x: 0 }}
                            whileHover={{ x: 8 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.span>
                          {/* Ripple animation */}
                          <span className="absolute inset-0 pointer-events-none">
                            <span className="ripple-effect"></span>
                          </span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-transparent relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">Why Choose Weblancer?</h2>
              <p className="text-xl text-[#8A9A5B] max-w-3xl mx-auto">
                We combine cutting-edge technology with creative excellence to deliver solutions that exceed expectations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300 relative shadow-lg hover:shadow-[0_0_24px_4px_#B5FF6D55] flex flex-col items-center">
                <Zap className="w-12 h-12 text-[#B5FF6D] mb-6 group-hover:animate-pulse" />
                <h3 className="text-2xl font-bold text-white mb-4">Fast Delivery</h3>
                <p className="text-[#8A9A5B] leading-relaxed">
                  Quick turnaround times without compromising on quality. We understand the importance of meeting deadlines.
                </p>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#B5FF6D] text-black text-xs font-semibold px-3 py-1 rounded shadow-lg z-20 pointer-events-none whitespace-nowrap">“Speed is the currency of business.”</span>
              </div>
              <div className="group bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300 relative shadow-lg hover:shadow-[0_0_24px_4px_#B5FF6D55] flex flex-col items-center">
                <Shield className="w-12 h-12 text-[#B5FF6D] mb-6 group-hover:animate-pulse" />
                <h3 className="text-2xl font-bold text-white mb-4">Quality Assurance</h3>
                <p className="text-[#8A9A5B] leading-relaxed">
                  Rigorous testing and quality checks ensure that every project meets the highest standards of excellence.
                </p>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#B5FF6D] text-black text-xs font-semibold px-3 py-1 rounded shadow-lg z-20 pointer-events-none whitespace-nowrap">“Quality means doing it right when no one is looking.”</span>
              </div>
              <div className="group bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300 relative shadow-lg hover:shadow-[0_0_24px_4px_#B5FF6D55] flex flex-col items-center">
                <Globe className="w-12 h-12 text-[#B5FF6D] mb-6 group-hover:animate-pulse" />
                <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
                <p className="text-[#8A9A5B] leading-relaxed">
                  Round-the-clock support to ensure your business operations run smoothly without any interruptions.
                </p>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#B5FF6D] text-black text-xs font-semibold px-3 py-1 rounded shadow-lg z-20 pointer-events-none whitespace-nowrap">“We’re here for you, anytime, anywhere.”</span>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
      <PlanModal
        key={modalKey} // Add key prop to force remount
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        subject={modalSubject}
      />
    </div>
  );
};

export default Services;