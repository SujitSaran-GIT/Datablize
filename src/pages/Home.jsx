import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ArrowRight, Zap, Shield, Search, Cloud, Bot, Smartphone, RefreshCw, BarChart2, Settings, Cpu, Eye, Clock, Lock, Brain, Database, Users, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { } from 'lucide-react';

// import Navbar from './Navbar';

// Floating 3D Elements
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

// 3D Card Component
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

// Hero Section
const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      if (!isMobile) { // Only apply parallax on desktop
        setMousePos({
          x: (e.clientX / window.innerWidth - 0.5) * 50,
          y: (e.clientY / window.innerHeight - 0.5) * 50
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 lg:pt-0">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#DBE4C9] via-[#E9E9E9] to-[#FFFFF0]">
        {/* Floating Geometric Shapes - Reduced on mobile */}
        <div className="absolute inset-0">
          {[...Array(isMobile ? 10 : 20)].map((_, i) => (
            <FloatingElement key={i} delay={i * 0.5} amplitude={isMobile ? 5 + (i % 3) * 5 : 15 + (i % 3) * 10}>
              <div
                className="absolute rounded-full opacity-10"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${isMobile ? 10 + Math.random() * 30 : 20 + Math.random() * 60}px`,
                  height: `${isMobile ? 10 + Math.random() * 30 : 20 + Math.random() * 60}px`,
                  background: `linear-gradient(45deg, #FDF5AA, #58A0C8)`,
                  transform: isMobile ? '' : `translateX(${mousePos.x * (i % 3 + 1) * 0.1}px) translateY(${mousePos.y * (i % 3 + 1) * 0.1}px)`
                }}
              />
            </FloatingElement>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div
              className="transform transition-transform duration-1000"
              style={{
                transform: isMobile ? '' : `translateX(${mousePos.x * 0.1}px) translateY(${mousePos.y * 0.1}px)`
              }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#113F67] via-[#113F67] to-[#113F67] bg-clip-text text-transparent">
                  AI Powered
                </span>
                <br />
                <span className="text-[#113F67]">Document Intelligence</span>
                <br />
                <span className="bg-gradient-to-r from-[#113F67] to-[#34699A] bg-clip-text text-transparent">
                  for Modern Enterprises
                </span>
              </h1>
            </div>

            <div
              className="transform transition-transform duration-1000 delay-200"
              style={{
                transform: isMobile ? '' : `translateX(${mousePos.x * 0.05}px) translateY(${mousePos.y * 0.05}px)`
              }}
            >
              <p className="text-lg sm:text-xl lg:text-2xl mb-4 text-[#113F67]/80 font-medium leading-relaxed">
                Transform your document chaos into a streamlined, intelligent workflow.
              </p>
              <p className="text-base sm:text-lg text-[#113F67]/70 leading-relaxed">
                Datablize is a next-gen, cloud-native platform for intelligent document management.
                Built with adaptive AI and zero-touch automation, it empowers businesses to organize,
                analyze, and automate every document-driven process.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 transform transition-transform duration-1000 delay-400"
              style={{
                transform: isMobile ? '' : `translateX(${mousePos.x * 0.02}px) translateY(${mousePos.y * 0.02}px)`
              }}
            >
              <Link>
                <div>
                  <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#34699A] to-[#113F67] text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-xl sm:shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#58A0C8] to-[#34699A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <div className="relative flex items-center gap-2 sm:gap-3">
                      <span>Request a Demo</span>
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </button>
                </div>
              </Link>

              <Link to={"/features"}>
                <div>
                  <button className="group px-6 sm:px-8 py-3 sm:py-4 border-2 sm:border-3 border-[#113F67] text-[#113F67] rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-[#113F67] hover:text-white transition-all duration-300 transform hover:scale-105">
                    <span className="flex items-center gap-2 sm:gap-3">
                      Explore Features
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Animated Image Section */}
          <motion.div
            className="relative order-1 lg:order-2 mb-8 lg:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative max-w-md sm:max-w-lg mx-auto">
              {/* Main Image with Parallax Effect */}
              <motion.img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="AI Document Intelligence"
                className="w-full h-auto rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white/20"
                style={{
                  transform: isMobile ? '' : `translateX(${mousePos.x * 0.1}px) translateY(${mousePos.y * 0.1}px)`
                }}
              />

              {/* Floating Badge 1 - Smaller on mobile */}
              <motion.div
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg border border-gray-200"
                initial={{ scale: 0.8, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FDF5AA] rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#113F67" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="font-bold text-sm sm:text-base text-[#113F67]">AI-Powered</span>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Smaller on mobile */}
              <motion.div
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-[#113F67] p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg"
                initial={{ scale: 0.8, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{
                  duration: 2,
                  delay: 0.3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#113F67" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <span className="font-bold text-sm sm:text-base text-white">Document AI</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


const ComparisonTable = () => {
  const tableData = [
    {
      feature: "Document Capture",
      traditional: "Manual upload & tagging",
      datablize: "Auto-capture from multiple sources (email, scan, web, API)",
    },
    {
      feature: "Classification & Indexing",
      traditional: "Manual metadata entry",
      datablize: "AI-based auto-classification & smart indexing",
    },
    {
      feature: "Search Functionality",
      traditional: "Keyword-based search",
      datablize: "Semantic, contextual, and NLP-based search",
    },
    {
      feature: "Data Extraction",
      traditional: "Rule-based OCR",
      datablize: "AI/ML-based Intelligent Document Processing (IDP)",
    },
    {
      feature: "Workflow Automation",
      traditional: "Predefined templates",
      datablize: "AI-driven adaptive workflow automation",
    },
    {
      feature: "Version Control",
      traditional: "Basic versioning",
      datablize: "Intelligent version tracking & change prediction",
    },
    {
      feature: "User Access & Security",
      traditional: "Role-based access",
      datablize: "Context-aware access control, anomaly detection",
    },
    {
      feature: "Compliance Support",
      traditional: "Manual audit trails",
      datablize: "Auto-audit logs, policy-based data handling",
    },
    {
      feature: "Scalability",
      traditional: "Limited and expensive to scale",
      datablize: "Cloud-native and highly scalable",
    },
    {
      feature: "Integration",
      traditional: "Manual or basic APIs",
      datablize: "Seamless integration with SaaS, ERP, CRM systems",
    },
    {
      feature: "Learning & Adaptability",
      traditional: "Static processes",
      datablize: "Continuously learns from user behavior & documents",
    },
    {
      feature: "User Interface",
      traditional: "Functional, static",
      datablize: "Intuitive, adaptive with AI-suggestions",
    },
    {
      feature: "Support for Unstructured Data",
      traditional: "Limited",
      datablize: "Advanced NLP and ML for understanding unstructured content",
    },
    {
      feature: "Reporting & Insights",
      traditional: "Basic reporting",
      datablize: "Predictive analytics, usage trends, and insights",
    },
    {
      feature: "Cost Efficiency",
      traditional: "Higher manual intervention cost",
      datablize: "Reduced operational cost through automation",
    },
    {
      feature: "Time to Retrieve Documents",
      traditional: "Moderate to high",
      datablize: "Extremely fast due to smart indexing and search",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#DBE4C9] via-[#E9E9E9] to-[#FFFFF0] overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <FloatingElement key={i} delay={i * 0.5} amplitude={15 + (i % 3) * 10}>
            <div
              className="absolute rounded-full opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * 60}px`,
                height: `${20 + Math.random() * 60}px`,
                background: `linear-gradient(45deg, #FDF5AA, #58A0C8)`,
              }}
            />
          </FloatingElement>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#113F67] via-[#34699A] to-[#58A0C8] bg-clip-text text-transparent pb-2">
            Why Choose Datablize Solution?
          </h2>
          <h3 className="text-2xl lg:text-3xl font-medium text-[#113F67] mb-6">
            Is your organization still drowning in manual document processing?
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-[#58A0C8] to-[#34699A] mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-[#113F67]/80 max-w-3xl mx-auto leading-relaxed">
            Every hour spent on document management is an hour lost on innovation. Datablize's AI engine automatically processes documents, extracts insights, and streamlines workflows without human intervention.
          </p>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#113F67] to-[#34699A] text-white">
                  <th className="px-8 py-6 text-left font-semibold text-lg tracking-wider">
                    <div className="flex items-center gap-3">
                      <LayoutDashboard className="text-[#FDF5AA]" size={20} />
                      <span>Features</span>
                    </div>
                  </th>
                  <th className="px-8 py-6 text-left font-semibold text-lg tracking-wider">
                    <div className="flex items-center gap-3">
                      <Clock className="text-[#FDF5AA]" size={20} />
                      <span>Traditional DMS</span>
                    </div>
                  </th>
                  <th className="px-8 py-6 text-left font-semibold text-lg tracking-wider">
                    <div className="flex items-center gap-3">
                      <Zap className="text-[#FDF5AA]" size={20} />
                      <span>Datablize</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#113F67]/10">
                {tableData.map((row, index) => (
                  <motion.tr
                    key={index}
                    variants={rowVariants}
                    whileHover="hover"
                    className="hover:bg-[#FDF5AA]/10 transition-colors duration-200"
                  >
                    <td className="px-8 py-5 whitespace-nowrap font-medium text-[#113F67] text-lg">
                      {row.feature}
                    </td>
                    <td className="px-8 py-5 whitespace-normal text-[#113F67]/80">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 rounded-full bg-[#113F67]/50 flex-shrink-0"></div>
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5 whitespace-normal text-[#113F67]">
                      <div className="flex items-start gap-2">
                        <div className="w-5 h-5 bg-[#FDF5AA] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#113F67" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="font-medium">{row.datablize}</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="mt-16 text-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link to="/contact">
              <button className="group px-8 py-4 bg-gradient-to-r from-[#34699A] to-[#113F67] text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                <span className="flex items-center justify-center gap-3">
                  Ready to Transform Your Documents?
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section >
  );
};



// Value Proposition Section
// const ValueProposition = () => {
//   const comparisons = [
//     {
//       challenge: "Manual document processing consuming 30% of staff time",
//       solution: "AI-Based Intelligent Extraction",
//       description: "AI processes and categorizes documents in milliseconds",
//       icon: Bot
//     },
//     {
//       challenge: "Siloed Document Repositories",
//       solution: "Centralized Cloud Repository",
//       description: "Secure, scalable cloud storage with instant accessibility",
//       icon: Cloud
//     },
//     {
//       challenge: "Time-Consuming Search",
//       solution: "AI-Powered Smart Search",
//       description: "Intelligent search capabilities with natural language processing",
//       icon: Search
//     },
//     {
//       challenge: "Compliance Gaps",
//       solution: "Built-in Compliance Monitoring",
//       description: "Automated compliance tracking and regulatory adherence",
//       icon: Shield
//     },
//     {
//       challenge: "Rigid Workflow",
//       solution: "Adaptive Business Process Automation",
//       description: "Streamlined processes with intelligent automation tools",
//       icon: Zap
//     }
//   ];

//   return (
//     <section className="py-24 bg-gradient-to-b from-white to-[#FDF5AA]/10">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-20">
//           <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#113F67] via-[#34699A] to-[#58A0C8] bg-clip-text text-transparent pb-2">
//             Why Choose Datablize Solution?
//           </h2>
//           <h3 className="text-2xl lg:text-3xl font-medium text-[#113F67] mb-6">
//             Is your organization still drowning in manual document processing?
//           </h3>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#58A0C8] to-[#34699A] mx-auto rounded-full mb-8"></div>
//           <p className="text-xl text-[#113F67]/80 max-w-3xl mx-auto leading-relaxed">
//             Every hour spent on document management is an hour lost on innovation. Datablize's AI engine automatically processes documents, extracts insights, and streamlines workflows without human intervention.
//           </p>
//         </div>

//         <div className="grid gap-12 max-w-7xl mx-auto">
//           {comparisons.map((item, index) => (
//             <div key={index} className="relative">
//               <div className="h-full">
//                 <div className="group h-full p-8 bg-white rounded-3xl shadow-xl border border-[#113F67]/10 hover:shadow-2xl transition-all duration-500">
//                   <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
//                     {/* Traditional Challenge */}
//                     <div className="relative p-6 bg-gradient-to-br from-[#FDF5AA]/20 to-[#58A0C8]/10 rounded-2xl border border-[#113F67]/10">
//                       <div className="absolute -top-3 -left-3 px-3 py-1 bg-[#113F67] text-white text-xs font-bold rounded-full">
//                         TRADITIONAL
//                       </div>
//                       <p className="text-[#113F67] font-medium text-lg">{item.challenge}</p>
//                     </div>

//                     {/* Animated Arrow Transition */}
//                     <div className="hidden lg:flex justify-center items-center">
//                       <div className="relative w-full h-1 bg-gradient-to-r from-[#113F67]/20 to-[#113F67]/20">
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <div className="group-hover:scale-125 transition-transform duration-500">
//                             <svg
//                               width="60"
//                               height="60"
//                               viewBox="0 0 24 24"
//                               fill="none"
//                               className="text-[#34699A] group-hover:text-[#113F67] transition-colors duration-500"
//                             >
//                               <path
//                                 d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                               />
//                             </svg>
//                           </div>
//                         </div>
//                         <div className="absolute inset-0 bg-gradient-to-r from-[#58A0C8] to-[#34699A] w-0 group-hover:w-full transition-all duration-1000 origin-left"></div>
//                       </div>
//                     </div>

//                     {/* Datablize Solution */}
//                     <div className="relative p-6 bg-gradient-to-br from-[#113F67] to-[#34699A] rounded-2xl text-white">
//                       <div className="absolute -top-3 -right-3 px-3 py-1 bg-[#FDF5AA] text-[#113F67] text-xs font-bold rounded-full">
//                         DATABLIZE
//                       </div>
//                       <div className="flex items-start gap-4">
//                         <div className="flex-shrink-0">
//                           <FloatingElement delay={index * 0.5} amplitude={10}>
//                             <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
//                               <item.icon size={24} className="text-[#34699A]" />
//                             </div>
//                           </FloatingElement>
//                         </div>
//                         <div>
//                           <h3 className="text-xl font-bold mb-1">{item.solution}</h3>
//                           <p className="text-white/80 text-sm">{item.description}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// Feature Showcase Section

const FeatureShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [direction, setDirection] = useState(1);

  const showcaseFeatures = [
    { title: "Centralized Document Repository", description: "All your documents securely stored in one easily accessible location." },
    { title: "Fast & Intelligent Search", description: "Find any document instantly with AI-powered search capabilities." },
    { title: "Custom Workflow Automation", description: "Streamline your processes with tailored automation solutions." }
  ];

  const featureCardGroups = [
    [
      { icon: <Cloud size={24} />, text: "Centralized Repository", color: "from-[#58A0C8] to-[#34699A]" },
      { icon: <Search size={24} />, text: "Intelligent Search", color: "from-[#FDF5AA] to-[#FFD166]" },
      { icon: <Smartphone size={24} />, text: "Mobile-Friendly", color: "from-[#A1C4FD] to-[#C2E9FB]" },
      { icon: <Lock size={24} />, text: "End-to-End Encryption", color: "from-[#84FAB0] to-[#8FD3F4]" }
    ],
    [
      { icon: <RefreshCw size={24} />, text: "Seamless Integrations", color: "from-[#58A0C8] to-[#34699A]" },
      { icon: <BarChart2 size={24} />, text: "Reporting & Analytics", color: "from-[#FDF5AA] to-[#FFD166]" },
      { icon: <Settings size={24} />, text: "Workflow Automation", color: "from-[#A1C4FD] to-[#C2E9FB]" },
      { icon: <Cloud size={24} />, text: "Auto Backup", color: "from-[#84FAB0] to-[#8FD3F4]" }
    ],
    [
      { icon: <Cpu size={24} />, text: "AI Processing", color: "from-[#58A0C8] to-[#34699A]" },
      { icon: <Link size={24} />, text: "Smart Linking", color: "from-[#FDF5AA] to-[#FFD166]" },
      { icon: <Eye size={24} />, text: "Visual Recognition", color: "from-[#A1C4FD] to-[#C2E9FB]" },
      { icon: <Clock size={24} />, text: "Time Tracking", color: "from-[#84FAB0] to-[#8FD3F4]" }
    ]
  ];

  const handleFeatureChange = (newIndex) => {
    setDirection(newIndex > activeFeature ? 1 : -1);
    setActiveFeature(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveFeature((prev) => (prev + 1) % showcaseFeatures.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#113F67] via-[#34699A] to-[#58A0C8]">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <FloatingElement key={i} delay={i * 0.3} amplitude={25 + (i % 3) * 15}>
            <div
              className="absolute opacity-5"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${40 + Math.random() * 80}px`,
                height: `${40 + Math.random() * 80}px`,
              }}
            >
              <div className="w-full h-full bg-white rounded-full transform rotate-45"></div>
            </div>
          </FloatingElement>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 lg:p-12 rounded-3xl shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Column - Text Content */}
              <div className="lg:w-1/2 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <FloatingElement amplitude={20}>
                    <div className="w-20 h-20 bg-gradient-to-r from-[#FDF5AA] to-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                      <Bot size={36} className="text-[#113F67]" />
                    </div>
                  </FloatingElement>

                  <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white text-center lg:text-left">
                    Your Intelligent Document Infrastructure
                  </h2>

                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, x: direction * -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * 20 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                  >
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-[#FDF5AA] text-center lg:text-left">
                      {showcaseFeatures[activeFeature].title}
                    </h3>
                    <p className="text-xl lg:text-xl text-white/80 leading-relaxed text-center lg:text-left">
                      {showcaseFeatures[activeFeature].description}
                    </p>
                  </motion.div>

                  {/* Feature Indicators */}
                  <div className="flex justify-center lg:justify-start gap-3 mb-8">
                    {showcaseFeatures.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeFeature ? 'bg-[#FDF5AA] w-8' : 'bg-white/30'}`}
                        onClick={() => handleFeatureChange(index)}
                      />
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full lg:w-auto"
                >
                  <button className="group w-full px-8 py-3 bg-gradient-to-r from-[#FDF5AA] to-white text-[#113F67] rounded-2xl font-bold text-lg shadow-2xl hover:shadow-[#FDF5AA]/50 transition-all duration-300">
                    <Link to={"/contact"} className="flex items-center justify-center gap-3">
                      Get Started Today
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </button>
                </motion.div>
              </div>

              {/* Right Column - Feature Cards */}
              <div className="lg:w-1/2 relative overflow-hidden">
                <motion.div
                  className="grid grid-cols-2 gap-4 h-full"
                  key={activeFeature}
                  initial={{ opacity: 0, x: direction * 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -100 }}
                  transition={{ duration: 0.5 }}
                >
                  {featureCardGroups[activeFeature].map((feature, index) => (
                    <motion.div
                      key={`${activeFeature}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: index * 0.1 + 0.4 }
                      }}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)"
                      }}
                      className={`bg-gradient-to-br ${feature.color} rounded-xl p-4 text-white shadow-lg cursor-pointer h-full flex flex-col items-center justify-center`}
                    >
                      <motion.div
                        animate={{
                          y: [0, -5, 0],
                          transition: {
                            duration: 3 + index * 0.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                          }
                        }}
                        className="mb-2"
                      >
                        {feature.icon}
                      </motion.div>
                      <span className="font-medium text-center">{feature.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Transformation Banner Component
const TransformationBanner = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#FDF5AA] via-[#58A0C8] to-[#113F67]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <FloatingElement key={i} delay={i * 0.2} amplitude={10 + (i % 3) * 5}>
            <div
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${40 + Math.random() * 80}px`,
                height: `${40 + Math.random() * 80}px`,
                background: `linear-gradient(45deg, #FDF5AA, #58A0C8)`,
              }}
            >
              <div className="w-full h-full rounded-full"></div>
            </div>
          </FloatingElement>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="lg:w-1/2">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                  Intelligence That <span className="text-[#FDF5AA]">Transforms</span> Work
                </h2>
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  Experience the power of AI-driven document processing that adapts to your business needs,
                  automating complex workflows and delivering actionable insights in real-time.
                </p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button className="group px-8 py-4 bg-gradient-to-r from-[#113F67] to-[#34699A] text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-[#113F67]/50 transition-all duration-300">
                    <span className="flex items-center justify-center gap-3">
                      Discover the Possibilities
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </motion.div>
              </div>

              {/* Right Column - Visual */}
              <div className="lg:w-1/2 relative">
                <FloatingElement amplitude={30}>
                  <div className="relative">
                    {/* Abstract AI Graphic */}
                    <div className="relative w-full aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-2xl overflow-hidden border border-white/20">
                      {/* Abstract Nodes */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full">
                          {/* Central Node */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#FDF5AA] rounded-full flex items-center justify-center shadow-lg">
                            <Cpu size={28} className="text-[#113F67]" />
                          </div>

                          {/* Connecting Nodes */}
                          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                            <motion.div
                              key={i}
                              className="absolute top-1/2 left-1/2 w-10 h-10 bg-gradient-to-br from-[#58A0C8] to-[#34699A] rounded-full flex items-center justify-center"
                              style={{
                                x: `calc(150px * cos(${angle}deg) - 20px)`,
                                y: `calc(150px * sin(${angle}deg) - 20px)`,
                              }}
                              animate={{
                                scale: [1, 1.1, 1],
                                transition: {
                                  duration: 3 + i * 0.3,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }
                              }}
                            >
                              {[<RefreshCw size={16} />, <Settings size={16} />, <BarChart2 size={16} />][i % 3]}
                            </motion.div>
                          ))}

                          {/* Connecting Lines */}
                          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                              <line
                                key={i}
                                x1="50%"
                                y1="50%"
                                x2={`calc(50% + ${150 * Math.cos(angle * Math.PI / 180)}px)`}
                                y2={`calc(50% + ${150 * Math.sin(angle * Math.PI / 180)}px)`}
                                stroke="rgba(253, 245, 170, 0.4)"
                                strokeWidth="2"
                                strokeDasharray="5,5"
                              />
                            ))}
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </FloatingElement>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// FeaturesGrid Component
const FeaturesGrid = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#113F67] to-[#58A0C8]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            The Intelligent Document Revolution
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Our AI-powered platform transforms static documents into dynamic knowledge assets that work for you—not the other way around.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Brain size={24} />,
              title: "Intelligent Document Analysis",
              description: "AI automatically classifies, extracts key information, and summarizes documents, reducing processing time by 93%.",
              bgColor: "bg-[#FDF5AA]/20",
              textColor: "text-[#FDF5AA]"
            },
            {
              icon: <Zap size={24} />,
              title: "Zero-Touch Workflows",
              description: "Automated processes route documents, notify stakeholders, and trigger actions based on content—without manual intervention.",
              bgColor: "bg-[#FDF5AA]/20",
              textColor: "text-[#FDF5AA]"
            },
            {
              icon: <Search size={24} />,
              title: "Predictive Discovery",
              description: "AI anticipates document needs based on your behavior patterns and surfaces relevant content before you search.",
              bgColor: "bg-[#FDF5AA]/20",
              textColor: "text-[#FDF5AA]"
            },
            {
              icon: <Shield size={24} />,
              title: "Adaptive Security",
              description: "Context-aware protection automatically adjusts access controls based on document sensitivity and user behavior.",
              bgColor: "bg-[#FDF5AA]/20",
              textColor: "text-[#FDF5AA]"
            },
            {
              icon: <Database size={24} />,
              title: "Knowledge Network",
              description: "AI connects related documents across silos, exposing hidden relationships and building your organizational knowledge graph.",
              bgColor: "bg-[#FDF5AA]/20",
              textColor: "text-[#FDF5AA]"
            },
            {
              icon: <Users size={24} />,
              title: "Intelligent Collaboration",
              description: "Smart sharing suggests relevant collaborators and automatically manages permissions as projects evolve.",
              bgColor: "bg-[#FDF5AA]/20",
              textColor: "text-[#FDF5AA]"
            },
            {
              icon: <Clock size={24} />,
              title: "Time Reclamation",
              description: "Automated processing gives teams back 15+ hours per week previously spent on document management tasks.",
              bgColor: "bg-[#FDF5AA]/20",
              textColor: "text-[#FDF5AA]"
            },
            {
              icon: <LayoutDashboard size={24} />,
              title: "Insight Analytics",
              description: "AI surfaces patterns and anomalies across your document corpus, revealing business trends you'd otherwise miss.",
              bgColor: "bg-[#FDF5AA]/20",
              textColor: "text-[#FDF5AA]"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 ${feature.bgColor} ${feature.textColor} rounded-lg mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Home Component
const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* <Navbar /> */}
      <HeroSection />
      {/* <ValueProposition /> */}
      <ComparisonTable />
      <FeatureShowcase />
      <TransformationBanner />
      <FeaturesGrid />
    </div>
  );
};

export default Home;