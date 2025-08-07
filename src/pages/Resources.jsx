import React, { useState, useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../components/common/Logo';
import { ArrowRight, BookOpen, Check, Download, FileAxis3d, FileBadge, FileBarChart, FileBox, FileCheck, FileClock, FileCode, FileCog, FileDigit, FileHeart, FileInput, FileKey, FileMinus, FileOutput, FilePen, FileQuestion, FileScan, FileSearch, FileSignature, FileSpreadsheet, FileStack, FileText, FileUp, FileVideo, Film, Headphones, Play, Youtube } from 'lucide-react';
import TabsNavigation from '../components/common/TabNavigation';

// Reusing components from Services page
// const FloatingElement = ({ children, delay = 0, amplitude = 20 }) => {
//   const [offset, setOffset] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setOffset(prev => prev + 0.02);
//     }, 16);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       className="transition-transform duration-100"
//       style={{
//         transform: `translateY(${Math.sin(offset + delay) * amplitude}px) rotateY(${Math.sin(offset * 0.5) * 10}deg)`
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// const Card3D = ({ children, className = "", index = 0 }) => {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [isHovered, setIsHovered] = useState(false);
//   const cardRef = useRef(null);

//   const handleMouseMove = (e) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
//     const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
//     setMousePos({ x: x * 20, y: y * -20 });
//   };

//   return (
//     <div
//       ref={cardRef}
//       className={`relative perspective-1000 ${className}`}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => {
//         setIsHovered(false);
//         setMousePos({ x: 0, y: 0 });
//       }}
//       style={{
//         transform: `rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
//         transition: isHovered ? 'none' : 'transform 0.5s ease-out',
//         transformStyle: 'preserve-3d'
//       }}
//     >
//       <div className="relative transform-gpu" style={{ transform: 'translateZ(50px)' }}>
//         {children}
//       </div>
//     </div>
//   );
// };

// Resources Hero Section
const ResourcesHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const resourceTypes = [
    "Whitepapers",
    "Case Studies",
    "Guides",
    "Product Docs",
    "FAQs"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % resourceTypes.length);
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
            className="absolute rounded-full bg-gradient-to-br from-[#B3E5FC] to-[#4FC3F7]"
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
          {/* Animated Resources Showcase - Made responsive */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 mt-10 lg:mt-0">
            <motion.div
              className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/20 shadow-xl md:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D47A1]/30 to-[#42A5F5]/30 backdrop-blur-sm md:backdrop-blur-md">
                {resourceTypes.map((type, idx) => (
                  <motion.div
                    key={type}
                    className="absolute inset-0 flex items-center justify-center p-6 sm:p-12"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: activeIndex === idx ? 1 : 0,
                      scale: activeIndex === idx ? 1 : 0.8
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-[#B3E5FC] to-[#4FC3F7] rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                        {[
                          <FileText size={24} className="text-[#0D47A1]" />,
                          <FileBarChart size={24} className="text-[#0D47A1]" />,
                          <BookOpen size={24} className="text-[#0D47A1]" />,
                          <FileCode size={24} className="text-[#0D47A1]" />,
                          <FileQuestion size={24} className="text-[#0D47A1]" />
                        ][idx]}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{type}</h3>
                      <p className="text-sm sm:text-base text-white/80">
                        {[
                          "In-depth research and analysis on industry trends",
                          "Real-world implementations and success stories",
                          "Practical how-to guides and best practices",
                          "Technical documentation and specifications",
                          "Answers to common questions and challenges"
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
                <span className="text-[#0D47A1]">Resources & </span>
                <span className="bg-gradient-to-r from-[#0D47A1] via-[#1976D2] to-[#42A5F5] bg-clip-text text-transparent">
                  Insights
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-[#0D47A1] mb-4 sm:mb-6">
                Explore our latest thinking on enterprise document management and process automation. Gain valuable knowledge to accelerate your digital transformation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-3 md:space-y-4"
            >
              {[
                "Industry-leading whitepapers",
                "Comprehensive case studies",
                "Practical implementation guides",
                "Detailed product documentation",
                "Expert-curated webinars"
              ].map((feature, i) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#B3E5FC] rounded-full flex items-center justify-center shrink-0">
                    <Check className="text-[#0D47A1]" size={14} />
                  </div>
                  <span className="text-sm sm:text-base text-[#0D47A1]/80">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6"
            >
              <button className="px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-[#0D47A1] to-[#1976D2] text-white rounded-lg sm:rounded-xl font-bold hover:shadow-lg hover:shadow-[#0D47A1]/30 sm:hover:shadow-[#0D47A1]/50 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base">
                <span>Browse Resources</span>
                <ArrowRight size={16} />
              </button>
              <button className="px-6 py-2 sm:px-8 sm:py-3 bg-transparent border border-[#B3E5FC] text-[#0D47A1] rounded-lg sm:rounded-xl font-bold hover:bg-[#B3E5FC]/10 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base">
                <span>Subscribe for Updates</span>
                <FileInput size={16} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Resources Tabs Section
const ResourcesTabs = () => {
  const [activeTab, setActiveTab] = useState('whitepapers');

  const tabs = [
    { id: 'whitepapers', label: 'Whitepapers', icon: FileText },
    { id: 'casestudies', label: 'Case Studies', icon: FileBarChart },
    { id: 'guides', label: 'Guides', icon: BookOpen },
    { id: 'productdocs', label: 'Product Docs', icon: FileCode },
    { id: 'faqs', label: 'FAQs', icon: FileQuestion },
    { id: 'videos', label: 'Videos', icon: Play }
  ];

  const resources = {
    whitepapers: [
      {
        title: "AI-Powered Document Intelligence",
        description: "The Future of Enterprise DMS and how AI is transforming document processing",
        icon: FileSearch,
        color: "from-[#0D47A1] to-[#1976D2]",
        type: "PDF",
        size: "2.4 MB",
        date: "May 2025"
      },
      {
        title: "DPDPA 2023 Compliance Strategies",
        description: "Document-centric workflows that comply with India's new data protection law",
        icon: FileKey,
        color: "from-[#00796B] to-[#4DB6AC]",
        type: "PDF",
        size: "1.8 MB",
        date: "March 2025"
      },
      {
        title: "Zero Paper Offices",
        description: "How government and BFSI sectors are achieving paperless operations",
        icon: FileMinus,
        color: "from-[#E65100] to-[#FF9800]",
        type: "PDF",
        size: "3.1 MB",
        date: "January 2025"
      },
      {
        title: "HIPAA, GDPR & DPDPA Unified Approach",
        description: "Meeting multiple compliance requirements with a single framework",
        icon: FileCheck,
        color: "from-[#4A148C] to-[#7B1FA2]",
        type: "PDF",
        size: "2.7 MB",
        date: "February 2025"
      },
      {
        title: "IDP Cost Reduction Study",
        description: "How Intelligent Document Processing reduces operational costs by 50%",
        icon: FileSpreadsheet,
        color: "from-[#BF360C] to-[#E64A19]",
        type: "PDF",
        size: "1.5 MB",
        date: "April 2025"
      }
    ],
    casestudies: [
      {
        title: "G2C Service Automation",
        description: "State IT Department's citizen service transformation with our platform",
        icon: FileBadge,
        color: "from-[#0D47A1] to-[#1976D2]",
        type: "PDF",
        size: "4.2 MB",
        date: "December 2024"
      },
      {
        title: "Health Insurance Claims Automation",
        description: "How a leading provider reduced claims processing time by 70%",
        icon: FileHeart,
        color: "from-[#00796B] to-[#4DB6AC]",
        type: "PDF",
        size: "3.8 MB",
        date: "November 2024"
      },
      {
        title: "Digital Archive Migration",
        description: "National PSU's journey migrating 10M+ documents to our DMS",
        icon: FileStack,
        color: "from-[#E65100] to-[#FF9800]",
        type: "PDF",
        size: "5.1 MB",
        date: "October 2024"
      },
      {
        title: "KYC & AML Automation",
        description: "Financial institution's compliance transformation case study",
        icon: FileSignature,
        color: "from-[#4A148C] to-[#7B1FA2]",
        type: "PDF",
        size: "2.9 MB",
        date: "September 2024"
      },
      {
        title: "EHR Digitization for Hospitals",
        description: "HIPAA-compliant electronic health records implementation",
        icon: FileScan,
        color: "from-[#BF360C] to-[#E64A19]",
        type: "PDF",
        size: "3.5 MB",
        date: "August 2024"
      }
    ],
    guides: [
      {
        title: "DMS Buyer's Guide 2025",
        description: "Comprehensive guide for evaluating enterprise document management systems",
        icon: FileUp,
        color: "from-[#0D47A1] to-[#1976D2]",
        type: "PDF",
        size: "6.2 MB",
        date: "July 2025"
      },
      {
        title: "Implementation Checklist",
        description: "Step-by-step guide for getting started with Datablize",
        icon: FileCheck,
        color: "from-[#00796B] to-[#4DB6AC]",
        type: "PDF",
        size: "1.2 MB",
        date: "June 2025"
      },
      {
        title: "Workflow Automation Playbook",
        description: "Practical guide for admin and operations teams",
        icon: FilePen,
        color: "from-[#E65100] to-[#FF9800]",
        type: "PDF",
        size: "3.4 MB",
        date: "May 2025"
      },
      {
        title: "DPDPA Compliance Template",
        description: "Data Processing Agreement template compliant with India's 2023 law",
        icon: FileKey,
        color: "from-[#4A148C] to-[#7B1FA2]",
        type: "DOCX",
        size: "0.8 MB",
        date: "April 2025"
      },
      {
        title: "Digitization Strategy Guide",
        description: "From scanner to structured data - complete roadmap",
        icon: FileDigit,
        color: "from-[#BF360C] to-[#E64A19]",
        type: "PDF",
        size: "2.9 MB",
        date: "March 2025"
      }
    ],
    productdocs: [
      {
        title: "Product Brochure",
        description: "Overview of features, capabilities and benefits",
        icon: FileText,
        color: "from-[#0D47A1] to-[#1976D2]",
        type: "PDF",
        size: "8.4 MB",
        date: "June 2025"
      },
      {
        title: "DMS Handbook",
        description: "Complete reference guide for administrators",
        icon: BookOpen,
        color: "from-[#00796B] to-[#4DB6AC]",
        type: "PDF",
        size: "12.1 MB",
        date: "May 2025"
      },
      {
        title: "OnPrem Deployment Guide",
        description: "Detailed instructions for on-premises installation",
        icon: FileBox,
        color: "from-[#E65100] to-[#FF9800]",
        type: "PDF",
        size: "5.7 MB",
        date: "April 2025"
      },
      {
        title: "Hardware Sizing Guide",
        description: "Specifications for optimal performance at scale",
        icon: FileCog,
        color: "from-[#4A148C] to-[#7B1FA2]",
        type: "PDF",
        size: "2.3 MB",
        date: "March 2025"
      },
      {
        title: "Integration Guide",
        description: "Connecting with ERP, CRM and legacy systems",
        icon: FileAxis3d,
        color: "from-[#BF360C] to-[#E64A19]",
        type: "PDF",
        size: "4.8 MB",
        date: "February 2025"
      }
    ],
    faqs: [
      {
        title: "General FAQs",
        description: "Common questions about our products and services",
        icon: FileQuestion,
        color: "from-[#0D47A1] to-[#1976D2]",
        type: "PDF",
        size: "1.1 MB",
        date: "June 2025"
      },
      {
        title: "Implementation FAQs",
        description: "Questions about deployment and configuration",
        icon: FileOutput,
        color: "from-[#00796B] to-[#4DB6AC]",
        type: "PDF",
        size: "0.9 MB",
        date: "May 2025"
      },
      {
        title: "Security FAQs",
        description: "Information about compliance and data protection",
        icon: FileKey,
        color: "from-[#E65100] to-[#FF9800]",
        type: "PDF",
        size: "1.3 MB",
        date: "April 2025"
      },
      {
        title: "Pricing FAQs",
        description: "Questions about licensing and subscription models",
        icon: FileSpreadsheet,
        color: "from-[#4A148C] to-[#7B1FA2]",
        type: "PDF",
        size: "0.7 MB",
        date: "March 2025"
      },
      {
        title: "Training FAQs",
        description: "Information about certification and learning resources",
        icon: FileClock,
        color: "from-[#BF360C] to-[#E64A19]",
        type: "PDF",
        size: "0.8 MB",
        date: "February 2025"
      }
    ],
    videos: [
      {
        title: "Product Overview Demo",
        description: "15-minute walkthrough of key features and capabilities",
        icon: Play,
        color: "from-[#0D47A1] to-[#1976D2]",
        type: "Video",
        size: "45 MB",
        date: "June 2025",
        duration: "15:22"
      },
      {
        title: "Use Case: Insurance Claims",
        description: "How a leading insurer automated claims processing",
        icon: Film,
        color: "from-[#00796B] to-[#4DB6AC]",
        type: "Video",
        size: "68 MB",
        date: "May 2025",
        duration: "22:15"
      },
      {
        title: "Implementation Webinar",
        description: "Best practices for successful deployment",
        icon: Youtube,
        color: "from-[#E65100] to-[#FF9800]",
        type: "Video",
        size: "92 MB",
        date: "April 2025",
        duration: "32:45"
      },
      {
        title: "IDP Feature Deep Dive",
        description: "Advanced document intelligence capabilities",
        icon: FileVideo,
        color: "from-[#4A148C] to-[#7B1FA2]",
        type: "Video",
        size: "56 MB",
        date: "March 2025",
        duration: "18:30"
      },
      {
        title: "Customer Testimonial",
        description: "How State IT Dept transformed citizen services",
        icon: Headphones,
        color: "from-[#BF360C] to-[#E64A19]",
        type: "Video",
        size: "38 MB",
        date: "February 2025",
        duration: "12:10"
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#E3F2FD]/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0D47A1] via-[#1976D2] to-[#42A5F5] bg-clip-text text-transparent pb-2">
            Knowledge Center
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#42A5F5] to-[#0D47A1] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-[#0D47A1]/80 max-w-3xl mx-auto">
            Access our comprehensive library of resources to support your document management journey.
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
          {resources[activeTab].map((resource, index) => (
            <div key={index} index={index} className="h-full">
              <div className="group h-full p-6 bg-gradient-to-br from-white to-[#E3F2FD]/10 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className={`w-12 h-12 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <resource.icon size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0D47A1] group-hover:text-[#1976D2] transition-colors duration-300 mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-[#0D47A1]/70 leading-relaxed mb-4">
                  {resource.description}
                </p>
                <div className="flex justify-between items-center text-xs text-[#0D47A1]/60">
                  <span>{resource.type} • {resource.size}</span>
                  <span>{resource.date}</span>
                </div>
                {resource.duration && (
                  <div className="mt-2 text-xs text-[#0D47A1]/60">
                    Duration: {resource.duration}
                  </div>
                )}
                <div className="mt-4">
                  <button className="group flex items-center gap-2 text-[#0D47A1] hover:text-[#1976D2] transition-colors duration-300">
                    <span className="font-medium">Download</span>
                    <Download size={16} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div>
            <div className="bg-gradient-to-r from-[#0D47A1] to-[#1976D2] rounded-3xl p-8 text-center text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="mb-6 text-white/90 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest insights, guides, and industry best practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="group relative px-8 py-3 bg-gradient-to-r from-[#B3E5FC] to-white text-[#0D47A1] rounded-2xl font-bold text-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-white/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <span>Subscribe</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </div>
              <p className="mt-4 text-xs text-white/60">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Resources Page Main Component
const Resources = () => {
  return (
    <div className="overflow-hidden">
      <ResourcesHero />
      <ResourcesTabs />
    </div>
  );
};

export default Resources;