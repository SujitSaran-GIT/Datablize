import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ArrowRight, Zap, Shield, Search, Cloud, Bot, FileText, Lock, Cpu, Scan, Workflow, Fingerprint, Key, Clock, Activity, Database, ShieldCheck, Network, Check, Table, Folder, Tag, Trash2, LayoutDashboard, Send, Users, PenTool, BarChart2, Smartphone, Palette, Server, GitBranch, ChevronDown, X, ChevronUp, List, Settings, Wrench, ClipboardList, BookOpen, FileDigit, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../components/common/Logo';
import TabsNavigation from '../components/common/TabNavigation';

// Reusing components from Features page
const FloatingElement = ({ children, delay = 0, amplitude = 20 }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prev => prev + 0.02);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="transition-transform duration-100"
      style={{
        transform: `translateY(${Math.sin(offset + delay) * amplitude}px) rotateY(${Math.sin(offset * 0.5) * 10}deg)`
      }}
    >
      {children}
    </div>
  );
};

const div = ({ children, className = "", index = 0 }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePos({ x: x * 20, y: y * -20 });
  };

  return (
    <div
      ref={cardRef}
      className={`relative perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      style={{
        transform: `rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
        transition: isHovered ? 'none' : 'transform 0.5s ease-out',
        transformStyle: 'preserve-3d'
      }}
    >
      <div className="relative transform-gpu" style={{ transform: 'translateZ(50px)' }}>
        {children}
      </div>
    </div>
  );
};

// Services Hero Section
const ServicesHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const services = [
    "Implementation Services",
    "Managed Services",
    "Process Consulting",
    "Document Digitization"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 md:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#DBE4C9] via-[#E9E9E9] to-[#FFFFF0]">
      {/* Dynamic Grid Background - Reduced on mobile */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-6 md:grid-cols-12 grid-rows-12 h-full w-full">
          {[...Array(72)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-white/10"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.3, 0],
                transition: {
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Orbs - Smaller on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {[15, 25, 35, 45].map((size, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-[#FDF5AA] to-[#58A0C8]"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${5 + i * 20}%`,
              top: `${15 + i * 10}%`,
              filter: 'blur(10px)',
              opacity: 0.3
            }}
            animate={{
              y: [0, 20, 0],
              x: [0, 15, 0],
              transition: {
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
          {/* Animated Services Showcase - Made responsive */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 mt-10 lg:mt-0">
            <motion.div
              className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/20 shadow-xl md:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#113F67]/30 to-[#58A0C8]/30 backdrop-blur-sm md:backdrop-blur-md">
                {services.map((service, idx) => (
                  <motion.div
                    key={service}
                    className="absolute inset-0 flex items-center justify-center p-6 sm:p-12"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: activeIndex === idx ? 1 : 0,
                      scale: activeIndex === idx ? 1 : 0.8
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-[#FDF5AA] to-[#58A0C8] rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                        {[
                          <Settings size={24} className="text-[#113F67]" />,
                          <Wrench size={24} className="text-[#113F67]" />,
                          <ClipboardList size={24} className="text-[#113F67]" />,
                          <FileDigit size={24} className="text-[#113F67]" />
                        ][idx]}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{service}</h3>
                      <p className="text-sm sm:text-base text-white/80">
                        {[
                          "Quick start with expert-led deployment and configuration",
                          "Let us manage, monitor and optimize your environment",
                          "Re-engineer processes for higher efficiency",
                          "Convert legacy paper records into digital files"
                        ][idx]}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Content - Made responsive */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="text-[#113F67]">Professional Services </span>
                <span className="bg-gradient-to-r from-[#113F67] via-[#113F67] to-[#113F67] bg-clip-text text-transparent">
                  Designed Around You
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-[#113F67] mb-4 sm:mb-6">
                At Databitze, our services don't just support your digital transformation — they accelerate it. From implementation to integration, we're your partner every step of the way.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-3 md:space-y-4"
            >
              {[
                "Tailored implementation plans",
                "24/7 monitoring and support",
                "Process optimization consulting",
                "Legacy document digitization",
                "Custom integration development"
              ].map((feature, i) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#B3E5FC] rounded-full flex items-center justify-center shrink-0">
                    <Check className="text-[#113F67]" size={14} />
                  </div>
                  <span className="text-sm sm:text-base text-[#113F67]/80">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6"
            >
              <button className="px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-[#113F67] to-[#34699A] text-white rounded-lg sm:rounded-xl font-bold hover:shadow-lg hover:shadow-[#113F67]/30 sm:hover:shadow-[#113F67]/50 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base">
                <span>Explore Services</span>
                <ArrowRight size={16} />
              </button>
              <button className="px-6 py-2 sm:px-8 sm:py-3 bg-transparent border border-[#B3E5FC] text-[#0D47A1] rounded-lg sm:rounded-xl font-bold hover:bg-[#B3E5FC]/10 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base">
                <span>Book Consultation</span>
                <Table size={16} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Tabs Section
const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState('implementation');

  const tabs = [
    { id: 'implementation', label: 'Implementation', icon: Settings },
    { id: 'managed', label: 'Managed', icon: Wrench },
    { id: 'consulting', label: 'Consulting', icon: ClipboardList },
    { id: 'digitization', label: 'Digitization', icon: FileDigit },
    { id: 'custom', label: 'Custom', icon: Layers }
  ];

  const services = {
    implementation: [
      {
        title: "Quick Start Deployment",
        description: "Accelerated onboarding with pre-configured templates and best practices",
        icon: Zap,
        color: "from-[#58A0C8] to-[#34699A]"
      },
      {
        title: "Configuration & Customization",
        description: "Tailored setup to match your business processes and requirements",
        icon: Settings,
        color: "from-[#FDF5AA] to-[#FFD166]"
      },
      {
        title: "User Training & Adoption",
        description: "Comprehensive training programs for all user levels",
        icon: Users,
        color: "from-[#A1C4FD] to-[#C2E9FB]"
      },
      {
        title: "Integration Services",
        description: "Seamless connection with your existing systems and applications",
        icon: GitBranch,
        color: "from-[#84FAB0] to-[#8FD3F4]"
      },
      {
        title: "Go-Live Support",
        description: "Dedicated assistance during and after launch",
        icon: ShieldCheck,
        color: "from-[#FF9A9E] to-[#FAD0C4]"
      }
    ],
    managed: [
      {
        title: "24/7 Monitoring",
        description: "Proactive system monitoring and alerting",
        icon: Activity,
        color: "from-[#58A0C8] to-[#34699A]"
      },
      {
        title: "Performance Optimization",
        description: "Continuous tuning for optimal performance",
        icon: BarChart2,
        color: "from-[#FDF5AA] to-[#FFD166]"
      },
      {
        title: "Security Management",
        description: "Ongoing security updates and vulnerability management",
        icon: Shield,
        color: "from-[#A1C4FD] to-[#C2E9FB]"
      },
      {
        title: "Backup & Disaster Recovery",
        description: "Automated backups and recovery planning",
        icon: Database,
        color: "from-[#84FAB0] to-[#8FD3F4]"
      },
      {
        title: "SLA Guaranteed Support",
        description: "Priority response with service level agreements",
        icon: Clock,
        color: "from-[#FF9A9E] to-[#FAD0C4]"
      }
    ],
    consulting: [
      {
        title: "Process Assessment",
        description: "Comprehensive analysis of current workflows",
        icon: Search,
        color: "from-[#58A0C8] to-[#34699A]"
      },
      {
        title: "Workflow Redesign",
        description: "Optimized process maps with automation opportunities",
        icon: Workflow,
        color: "from-[#FDF5AA] to-[#FFD166]"
      },
      {
        title: "Compliance Review",
        description: "Alignment with industry regulations and standards",
        icon: ShieldCheck,
        color: "from-[#A1C4FD] to-[#C2E9FB]"
      },
      {
        title: "Change Management",
        description: "Strategies for smooth organizational adoption",
        icon: Users,
        color: "from-[#84FAB0] to-[#8FD3F4]"
      },
      {
        title: "ROI Analysis",
        description: "Quantifiable benefits and efficiency gains",
        icon: BarChart2,
        color: "from-[#FF9A9E] to-[#FAD0C4]"
      }
    ],
    digitization: [
      {
        title: "Document Scanning",
        description: "High-volume scanning with quality control",
        icon: Scan,
        color: "from-[#58A0C8] to-[#34699A]"
      },
      {
        title: "OCR Processing",
        description: "Advanced optical character recognition",
        icon: FileText,
        color: "from-[#FDF5AA] to-[#FFD166]"
      },
      {
        title: "Metadata Tagging",
        description: "Intelligent classification and indexing",
        icon: Tag,
        color: "from-[#A1C4FD] to-[#C2E9FB]"
      },
      {
        title: "Digital Archiving",
        description: "Secure long-term storage solutions",
        icon: Database,
        color: "from-[#84FAB0] to-[#8FD3F4]"
      },
      {
        title: "Legacy System Migration",
        description: "Data transfer from old systems with validation",
        icon: Server,
        color: "from-[#FF9A9E] to-[#FAD0C4]"
      }
    ],
    custom: [
      {
        title: "API Development",
        description: "Custom integrations with third-party systems",
        icon: GitBranch,
        color: "from-[#58A0C8] to-[#34699A]"
      },
      {
        title: "Module Development",
        description: "Vertical-specific functionality extensions",
        icon: Layers,
        color: "from-[#FDF5AA] to-[#FFD166]"
      },
      {
        title: "UI Customization",
        description: "Branded interfaces and user experiences",
        icon: Palette,
        color: "from-[#A1C4FD] to-[#C2E9FB]"
      },
      {
        title: "Workflow Automation",
        description: "Custom business process automation",
        icon: Workflow,
        color: "from-[#84FAB0] to-[#8FD3F4]"
      },
      {
        title: "Data Analytics",
        description: "Custom reports and dashboards",
        icon: BarChart2,
        color: "from-[#FF9A9E] to-[#FAD0C4]"
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#FDF5AA]/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#113F67] via-[#34699A] to-[#58A0C8] bg-clip-text text-transparent pb-2">
            Comprehensive Service Offerings
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#58A0C8] to-[#34699A] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-[#113F67]/80 max-w-3xl mx-auto">
            End-to-end services to support your digital transformation journey at every stage.
          </p>
        </div>

        {/* Tabs Navigation */}
        <TabsNavigation
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          activeTabColor="from-[#34699A] to-[#113F67]"
          inactiveTabColor="text-[#113F67] hover:bg-[#113F67]/10"
          iconColor="text-[#34699A]"
          activeIconColor="text-white"
          gradientFadeColor="from-[#113F67]/5"
        />

        {/* Tab Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services[activeTab].map((service, index) => (
            <div key={index} index={index} className="h-full">
              <div className="group h-full p-6 bg-gradient-to-br from-white to-[#FDF5AA]/5 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#113F67] group-hover:text-[#34699A] transition-colors duration-300 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#113F67]/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div>
            <div className="bg-gradient-to-r from-[#113F67] to-[#34699A] rounded-3xl p-8 text-center text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Need Expert Help?</h3>
              <p className="mb-6 text-white/90 max-w-2xl mx-auto">
                Let's build something impactful together. Our team of experts is ready to help you achieve your digital transformation goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="group relative px-8 py-3 bg-gradient-to-r from-[#FDF5AA] to-white text-[#113F67] rounded-2xl font-bold text-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-white/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <span>Book an Appointment</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
                {/* <button className="group relative px-8 py-3 bg-transparent border-2 border-white text-white rounded-2xl font-bold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <span>Contact Our Team</span>
                    <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Process Section
const ServicesProcess = () => {
  const steps = [
    {
      title: "Discovery",
      description: "We begin by understanding your unique requirements, challenges, and goals through in-depth discussions.",
      icon: Search,
      color: "from-[#58A0C8] to-[#34699A]"
    },
    {
      title: "Planning",
      description: "Our experts create a tailored roadmap with clear milestones, deliverables, and success metrics.",
      icon: ClipboardList,
      color: "from-[#FDF5AA] to-[#FFD166]"
    },
    {
      title: "Implementation",
      description: "We deploy the solution with minimal disruption, following industry best practices and your preferences.",
      icon: Settings,
      color: "from-[#A1C4FD] to-[#C2E9FB]"
    },
    {
      title: "Training",
      description: "Comprehensive training ensures your team is fully equipped to leverage the new system effectively.",
      icon: Users,
      color: "from-[#84FAB0] to-[#8FD3F4]"
    },
    {
      title: "Optimization",
      description: "Continuous monitoring and refinement to ensure you're getting maximum value from your investment.",
      icon: BarChart2,
      color: "from-[#FF9A9E] to-[#FAD0C4]"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#113F67]/5 to-[#113F67]/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#113F67] via-[#34699A] to-[#58A0C8] bg-clip-text text-transparent pb-2">
            Our Proven Service Methodology
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#58A0C8] to-[#34699A] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-[#113F67]/80 max-w-3xl mx-auto">
            A structured approach that ensures success at every stage of your digital transformation journey.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#58A0C8] to-[#113F67] transform -translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative lg:flex lg:items-center lg:justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Left side (even) */}
                {index % 2 === 0 ? (
                  <>
                    <div className="lg:w-5/12 lg:pr-12 mb-8 lg:mb-0">
                      <div>
                        <div className="p-6 bg-white rounded-2xl shadow-xl border border-white/20">
                          <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                            <step.icon size={20} className="text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-[#113F67] mb-2">
                            {step.title}
                          </h3>
                          <p className="text-[#113F67]/70">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-[#113F67] to-[#58A0C8] rounded-full items-center justify-center shadow-lg z-10">
                      <div className="w-5 h-5 bg-white rounded-full"></div>
                    </div>

                    {/* Right empty space */}
                    <div className="lg:w-5/12"></div>
                  </>
                ) : (
                  <>
                    {/* Left empty space */}
                    <div className="lg:w-5/12"></div>

                    {/* Center dot */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-[#113F67] to-[#58A0C8] rounded-full items-center justify-center shadow-lg z-10">
                      <div className="w-5 h-5 bg-white rounded-full"></div>
                    </div>

                    {/* Right side (odd) */}
                    <div className="lg:w-5/12 lg:pl-12">
                      <div>
                        <div className="p-6 bg-white rounded-2xl shadow-xl border border-white/20">
                          <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                            <step.icon size={20} className="text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-[#113F67] mb-2">
                            {step.title}
                          </h3>
                          <p className="text-[#113F67]/70">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile steps */}
        {/* <div className="lg:hidden mt-12 space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`w-10 h-10 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center mt-1 flex-shrink-0`}>
                <step.icon size={16} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#113F67]">{step.title}</h3>
                <p className="text-[#113F67]/70 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

// Services Page Main Component
const Services = () => {
  return (
    <div className="overflow-hidden">
      <ServicesHero />
      <ServicesTabs />
      <ServicesProcess />
    </div>
  );
};

export default Services;