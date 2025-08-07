import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ArrowRight, Zap, Shield, Search, Cloud, Bot, FileText, Lock, Cpu, Scan, Workflow, Fingerprint, Key, Clock, Activity, Database, ShieldCheck, Network, Check, Table } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Reusing the same components from Home page
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

const Card3D = ({ children, className = "", index = 0 }) => {
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

// Hero Section for Products Page
const ProductsHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const products = [
    "Document AI Processor",
    "Intelligent Workflow Engine",
    "Knowledge Graph Builder",
    "Secure Compliance Guardian"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 md:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#E3F2FD] via-[#E8F5E9] to-[#F1F8E9]">
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
          {/* Animated Product Showcase - Made responsive */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 mt-10 lg:mt-0">
            <motion.div 
              className="relative h-64 sm:h-80 md:h-96 w-full rounded-3xl overflow-hidden border-2 border-white/20 shadow-xl md:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#113F67]/30 to-[#58A0C8]/30 backdrop-blur-sm md:backdrop-blur-md">
                {products.map((product, idx) => (
                  <motion.div
                    key={product}
                    className="absolute inset-0 flex items-center justify-center p-6 sm:p-12"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: activeIndex === idx ? 1 : 0,
                      scale: activeIndex === idx ? 1 : 0.8
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-[#FDF5AA] to-[#58A0C8] rounded-2xl flex items-center justify-center shadow-lg">
                        {[
                          <FileText size={24} className="text-[#113F67]" />,
                          <Workflow size={24} className="text-[#113F67]" />,
                          <Network size={24} className="text-[#113F67]" />,
                          <Shield size={24} className="text-[#113F67]" />
                        ][idx]}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{product}</h3>
                      <p className="text-sm sm:text-base text-white/80">
                        {[
                          "AI-powered document processing at scale",
                          "Automate complex document workflows",
                          "Connect insights across your document universe",
                          "Enterprise-grade security and compliance"
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
                <span className="text-[#113F67]">Our </span>
                <span className="bg-gradient-to-r from-[#113F67] via-[#113F67] to-[#113F67] bg-clip-text text-transparent">
                  AI-Driven Products for Intelligent Document Ecosystems
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-[#113F67]/80 mb-4 sm:mb-6">
                Specialized AI solutions designed to transform every aspect of your document workflow.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-3 md:space-y-4"
            >
              {[
                "Automated document classification",
                "Intelligent data extraction",
                "Context-aware processing",
                "Real-time collaboration tools"
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
                <span>Explore Products</span>
                <ArrowRight size={16} />
              </button>
              <button className="px-6 py-2 sm:px-8 sm:py-3 bg-transparent border border-[#B3E5FC] text-[#0D47A1] rounded-lg sm:rounded-xl font-bold hover:bg-[#B3E5FC]/10 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base">
                <span>Compare Features</span>
                <Table size={16} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Docuverse IDP Product Section
const DocuverseIDP = () => {
  const features = [
    {
      title: "Document Management System (DMS)",
      description: "AI-powered platform to organize, version, secure, and approve documents at scale.",
      icon: FileText,
      color: "from-[#58A0C8] to-[#34699A]"
    },
    {
      title: "Intelligent Document Processing (IDP)",
      description: "Automate classification, data extraction, and validation across multiple document formats.",
      icon: Cpu,
      color: "from-[#FDF5AA] to-[#FFD166]"
    },
    {
      title: "Business Process Management (BPM)",
      description: "Design, automate, and monitor workflows that align with your business goals.",
      icon: Workflow,
      color: "from-[#A1C4FD] to-[#C2E9FB]"
    },
    {
      title: "Context-Aware Data Extraction",
      description: "Extract data intelligently using semantics, context, and layout-aware algorithms.",
      icon: Search,
      color: "from-[#84FAB0] to-[#8FD3F4]"
    },
    {
      title: "Optical Character Recognition (OCR)",
      description: "Convert scanned images and PDFs into searchable, structured information.",
      icon: Scan,
      color: "from-[#FF9A9E] to-[#FAD0C4]"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#FDF5AA]/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#113F67] via-[#34699A] to-[#58A0C8] bg-clip-text text-transparent pb-2">
            Docuverse Intelligent Document Processing
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#58A0C8] to-[#34699A] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-[#113F67]/80 max-w-3xl mx-auto">
            A comprehensive suite of AI-powered tools to revolutionize your document workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} index={index} className="h-full">
              <div className="group h-full p-8 bg-gradient-to-br from-white to-[#FDF5AA]/5 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <FloatingElement delay={index * 0.5} amplitude={10}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon size={28} className="text-white" />
                  </div>
                </FloatingElement>

                <h3 className="text-xl font-bold text-[#113F67] group-hover:text-[#34699A] transition-colors duration-300 mb-4">
                  {feature.title}
                </h3>

                <p className="text-[#113F67]/70 leading-relaxed mb-6">
                  {feature.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="w-0 h-0.5 bg-gradient-to-r from-[#58A0C8] to-[#34699A] group-hover:w-full transition-all duration-500"></div>
                  <Link to="#" className="flex items-center text-[#34699A] font-medium group-hover:text-[#113F67] transition-colors duration-300">
                    Learn more <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="h-full md:col-span-2 lg:col-span-3">
            <div className="group h-full p-8 bg-gradient-to-br from-[#113F67] to-[#34699A] rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex flex-col md:flex-row items-center justify-between h-full">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Ready to transform your document workflows?
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    Schedule a demo to see Docuverse IDP in action and discover how it can streamline your operations.
                  </p>
                </div>
                <button className="group relative px-8 py-3 bg-gradient-to-r from-[#FDF5AA] to-white text-[#113F67] rounded-2xl font-bold text-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-white/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <div className="relative flex items-center gap-3">
                    <span>Request Demo</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Guardian Authentication Core Product Section
const GuardianAuth = () => {
  const [activeTab, setActiveTab] = useState('features');

  const features = [
    {
      title: "Multi-Factor Authentication",
      description: "Protect access using OTPs, authenticator apps, email/SMS-based tokens, and biometric options.",
      icon: Lock,
      color: "from-[#58A0C8] to-[#34699A]"
    },
    {
      title: "Advanced Password Security",
      description: "Enforced complexity policies, password history & reuse restrictions with salted hashing.",
      icon: Key,
      color: "from-[#FDF5AA] to-[#FFD166]"
    },
    {
      title: "JWT-Based Authentication",
      description: "Stateless, secure, and scalable session management with JSON Web Tokens.",
      icon: Cpu,
      color: "from-[#A1C4FD] to-[#C2E9FB]"
    },
    {
      title: "Comprehensive Audit Logging",
      description: "Real-time logging of authentication attempts, login failures, and session activities.",
      icon: Activity,
      color: "from-[#84FAB0] to-[#8FD3F4]"
    },
    {
      title: "Session & Rate Limit Controls",
      description: "Prevent brute-force and abuse attacks with built-in rate limiting and IP blacklisting.",
      icon: Clock,
      color: "from-[#FF9A9E] to-[#FAD0C4]"
    },
    {
      title: "Biometric Authentication",
      description: "Support for fingerprint, facial recognition, and third-party biometric devices.",
      icon: Fingerprint,
      color: "from-[#A18CD1] to-[#FBC2EB]"
    },
    {
      title: "SSO Integration",
      description: "Seamless authentication across applications with OAuth2, SAML, and OpenID Connect.",
      icon: Shield,
      color: "from-[#FFC3A0] to-[#FFAFBD]"
    },
    {
      title: "Multi-Tenant Architecture",
      description: "Scalable foundation for managing identity across multiple tenants.",
      icon: Cloud,
      color: "from-[#E0C3FC] to-[#8EC5FC]"
    }
  ];

  const complianceStandards = [
    "ISO 27001, ISO 9001",
    "SOC 2 Type II",
    "GDPR (EU)",
    "HIPAA (US)",
    "DPDPA 2023 (India)",
    "PCI DSS",
    "FedRAMP Ready"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#113F67]/5 to-[#113F67]/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#113F67] via-[#34699A] to-[#58A0C8] bg-clip-text text-transparent">
            Guardian Authentication Core
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#58A0C8] to-[#34699A] mx-auto rounded-full mb-6"></div>
          <h3 className="text-2xl text-[#113F67] mb-4 font-medium">
            Next-Gen Authentication Engine for Modern Enterprises
          </h3>
          <p className="text-xl text-[#113F67]/80 max-w-3xl mx-auto">
            Secure. Scalable. Compliant. Military-grade security with complete regulatory compliance.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl bg-white/80 p-1 shadow-lg border border-white/20">
            <button
              onClick={() => setActiveTab('features')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${activeTab === 'features' ? 'bg-gradient-to-r from-[#34699A] to-[#113F67] text-white' : 'text-[#113F67] hover:bg-white/50'}`}
            >
              Key Features
            </button>
            <button
              onClick={() => setActiveTab('compliance')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${activeTab === 'compliance' ? 'bg-gradient-to-r from-[#34699A] to-[#113F67] text-white' : 'text-[#113F67] hover:bg-white/50'}`}
            >
              Compliance
            </button>
            <button
              onClick={() => setActiveTab('enterprise')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${activeTab === 'enterprise' ? 'bg-gradient-to-r from-[#34699A] to-[#113F67] text-white' : 'text-[#113F67] hover:bg-white/50'}`}
            >
              Enterprise Ready
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'features' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} index={index} className="h-full">
                <div className="group h-full p-6 bg-gradient-to-br from-white to-[#FDF5AA]/5 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#113F67] group-hover:text-[#34699A] transition-colors duration-300 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#113F67]/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'compliance' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white to-[#FDF5AA]/5 rounded-3xl shadow-xl border border-white/20 p-8">
              <h3 className="text-2xl font-bold text-[#113F67] mb-6 text-center">
                Compliance & Regulatory Standards
              </h3>
              <p className="text-[#113F67]/80 mb-8 text-center">
                Guardian Authentication Core is engineered to align with the most stringent security and privacy regulations:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {complianceStandards.map((standard, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-[#113F67]/10 rounded-full text-[#113F67] font-medium"
                  >
                    {standard}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'enterprise' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white to-[#FDF5AA]/5 rounded-3xl shadow-xl border border-white/20 p-8">
              <h3 className="text-2xl font-bold text-[#113F67] mb-6 text-center">
                Enterprise-Ready Security Suite
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#58A0C8] to-[#34699A] rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Zap size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#113F67]">Global Availability</h4>
                      <p className="text-sm text-[#113F67]/70">High availability architecture with global deployment options</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#FDF5AA] to-[#FFD166] rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Activity size={16} className="text-[#113F67]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#113F67]">Real-time Analytics</h4>
                      <p className="text-sm text-[#113F67]/70">Comprehensive dashboard with user/device activity insights</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#A1C4FD] to-[#C2E9FB] rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Bot size={16} className="text-[#113F67]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#113F67]">API-First Design</h4>
                      <p className="text-sm text-[#113F67]/70">Easy integration with existing systems and applications</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#84FAB0] to-[#8FD3F4] rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Shield size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#113F67]">Role-Based Access</h4>
                      <p className="text-sm text-[#113F67]/70">Granular control with role-based access control (RBAC)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div>
            <div className="bg-gradient-to-r from-[#113F67] to-[#34699A] rounded-3xl p-8 text-center text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Secure Your Enterprise?</h3>
              <p className="mb-6 text-white/90 max-w-2xl mx-auto">
                Guardian Authentication Core provides military-grade security with the flexibility modern enterprises need.
              </p>
              <button className="group relative px-8 py-3 bg-gradient-to-r from-[#FDF5AA] to-white text-[#113F67] rounded-2xl font-bold text-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-white/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <span>Get Started Today</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Products Page Main Component
const Products = () => {
  return (
    <div className="overflow-hidden">
      <ProductsHero />
      <DocuverseIDP />
      <GuardianAuth />
    </div>
  );
};

export default Products;