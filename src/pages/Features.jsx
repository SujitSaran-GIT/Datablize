import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ArrowRight, Zap, Shield, Search, Cloud, Bot, FileText, Lock, Cpu, Scan, Workflow, Fingerprint, Key, Clock, Activity, Database, ShieldCheck, Network, Check, Table, Folder, Tag, Trash2, LayoutDashboard, Send, Users, PenTool, BarChart2, Smartphone, Palette, Server, GitBranch, ChevronDown, X, ChevronUp, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../components/common/Logo';
import TabsNavigation from '../components/common/TabNavigation';

// Reusing the same components from Products page
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

// Features Hero Section
const FeaturesHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const features = [
    "AI-Powered Document Processing",
    "Enterprise-Grade Security",
    "Smart Collaboration Tools",
    "Seamless Workflow Automation"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
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
          {/* Animated Feature Showcase - Made responsive */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 mt-10 lg:mt-0">
            <motion.div
              className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/20 shadow-xl md:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#113F67]/30 to-[#58A0C8]/30 backdrop-blur-sm md:backdrop-blur-md">
                {features.map((feature, idx) => (
                  <motion.div
                    key={feature}
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
                          <Cpu size={24} className="text-[#113F67]" />,
                          <Shield size={24} className="text-[#113F67]" />,
                          <Users size={24} className="text-[#113F67]" />,
                          <Workflow size={24} className="text-[#113F67]" />
                        ][idx]}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{feature}</h3>
                      <p className="text-sm sm:text-base text-white/80">
                        {[
                          "Transform documents into actionable data with AI",
                          "Military-grade encryption and access controls",
                          "Real-time collaboration with AI assistance",
                          "Automate complex document workflows"
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
                <span className="text-[#113F67]">End-to-End </span>
                <span className="bg-gradient-to-r from-[#113F67] via-[#113F67] to-[#113F67] bg-clip-text text-transparent">
                  Intelligent Document Capabilities
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-[#113F67] mb-4 sm:mb-6">
                Comprehensive features designed to transform every aspect of your document workflow from organization to automation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-3 md:space-y-4"
            >
              {[
                "AI-powered document classification",
                "Intelligent data extraction",
                "Real-time collaboration tools",
                "Enterprise-grade security",
                "Automated workflow pipelines"
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
                <span>Explore Features</span>
                <ArrowRight size={16} />
              </button>
              <button className="px-6 py-2 sm:px-8 sm:py-3 bg-transparent border border-[#B3E5FC] text-[#0D47A1] rounded-lg sm:rounded-xl font-bold hover:bg-[#B3E5FC]/10 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base">
                <span>See All Categories</span>
                <Table size={16} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Tabs Section
const FeaturesTabs = () => {
  const [activeTab, setActiveTab] = useState('organize');

  const tabs = [
    { id: 'organize', label: 'Organize & Discover', icon: Folder },
    { id: 'ai', label: 'AI & Automation', icon: Bot },
    { id: 'collaborate', label: 'Collaborate & Share', icon: Users },
    { id: 'security', label: 'Security & Control', icon: Shield },
    { id: 'productivity', label: 'Productivity', icon: BarChart2 },
    { id: 'ux', label: 'User Experience', icon: Smartphone },
    { id: 'technical', label: 'Technical', icon: Server }
  ];

  const features = {
    organize: [
      {
        title: "File Management & Folder Organization",
        description: "Intuitive hierarchical structure with drag-and-drop capabilities and bulk operations",
        icon: Folder,
        color: "from-[#58A0C8] to-[#34699A]"
      },
      {
        title: "Tag-Based Optimization",
        description: "Flexible tagging system with color coding and smart tag suggestions",
        icon: Tag,
        color: "from-[#FDF5AA] to-[#FFD166]"
      },
      {
        title: "Search Capabilities",
        description: "Full-text search with filters, semantic understanding, and saved searches",
        icon: Search,
        color: "from-[#A1C4FD] to-[#C2E9FB]"
      },
      {
        title: "Trash & Recovery",
        description: "Versioned trash with configurable retention policies and easy restoration",
        icon: Trash2,
        color: "from-[#84FAB0] to-[#8FD3F4]"
      },
      {
        title: "Dashboard & Navigation",
        description: "Customizable dashboard with quick access to recent and starred items",
        icon: LayoutDashboard,
        color: "from-[#FF9A9E] to-[#FAD0C4]"
      }
    ],
    ai: [
      {
        title: "Automated Document Classification",
        description: "AI-powered categorization based on content, context, and document type",
        icon: FileText,
        color: "from-[#58A0C8] to-[#34699A]"
      },
      {
        title: "Intelligent Data Extraction",
        description: "Extract structured data from unstructured documents with high accuracy",
        icon: Cpu,
        color: "from-[#FDF5AA] to-[#FFD166]"
      },
      {
        title: "Workflow Automation",
        description: "Visual workflow builder with conditional logic and approvals",
        icon: Workflow,
        color: "from-[#A1C4FD] to-[#C2E9FB]"
      },
      {
        title: "AI Document Analysis",
        description: "Content summarization, sentiment analysis, and key point extraction",
        icon: Bot,
        color: "from-[#84FAB0] to-[#8FD3F4]"
      },
      {
        title: "Intelligent Routing",
        description: "Smart document routing based on content, metadata, and business rules",
        icon: Send,
        color: "from-[#FF9A9E] to-[#FAD0C4]"
      },
      {
        title: "Automated Processing Pipelines",
        description: "End-to-end document processing with customizable stages",
        icon: GitBranch,
        color: "from-[#A18CD1] to-[#FBC2EB]"
      }
    ],
    collaborate: [
      {
        title: "Sharing & Collaboration",
        description: "Granular permission controls with link sharing and expiration",
        icon: Users,
        color: "from-[#58A0C8] to-[#34699A]"
      },
      {
        title: "File Requests",
        description: "Create secure upload portals for external contributors",
        icon: Send,
        color: "from-[#FDF5AA] to-[#FFD166]"
      },
      {
        title: "Real-Time AI Co-Authoring",
        description: "AI-assisted content creation with style suggestions",
        icon: PenTool,
        color: "from-[#A1C4FD] to-[#C2E9FB]"
      },
      {
        title: "Smart Content Recommendations",
        description: "Context-aware suggestions for related documents and resources",
        icon: Search,
        color: "from-[#84FAB0] to-[#8FD3F4]"
      },
      {
        title: "Electronic Signature",
        description: "Legally binding e-signatures with audit trails",
        icon: Fingerprint,
        color: "from-[#FF9A9E] to-[#FAD0C4]"
      }
    ],
    security: [
      {
        title: "Authentication & User Management",
        description: "Multi-factor authentication and granular role-based access",
        icon: Lock,
        color: "from-[#58A0C8] to-[#34699A]"
      },
      {
        title: "End-to-End Encryption",
        description: "Military-grade encryption for data at rest and in transit",
        icon: ShieldCheck,
        color: "from-[#FDF5AA] to-[#FFD166]"
      },
      {
        title: "Privacy & Security Features",
        description: "Data residency controls, audit logs, and compliance reporting",
        icon: Database,
        color: "from-[#A1C4FD] to-[#C2E9FB]"
      }
    ],
    productivity: [
      {
        title: "Task Management",
        description: "Document-centric task assignment with due dates and reminders",
        icon: Check,
        color: "from-[#58A0C8] to-[#34699A]"
      },
      {
        title: "Notification System",
        description: "Customizable alerts for document changes and workflow steps",
        icon: Zap,
        color: "from-[#FDF5AA] to-[#FFD166]"
      },
      {
        title: "Statistics & Analytics",
        description: "Usage analytics and document lifecycle reporting",
        icon: BarChart2,
        color: "from-[#A1C4FD] to-[#C2E9FB]"
      }
    ],
    ux: [
      {
        title: "Modern UI",
        description: "Clean, intuitive interface with keyboard shortcuts",
        icon: LayoutDashboard,
        color: "from-[#58A0C8] to-[#34699A]"
      },
      {
        title: "Theme Support",
        description: "Light/dark mode and customizable color schemes",
        icon: Palette,
        color: "from-[#FDF5AA] to-[#FFD166]"
      },
      {
        title: "Mobile Applications",
        description: "Full-featured iOS and Android apps with offline access",
        icon: Smartphone,
        color: "from-[#A1C4FD] to-[#C2E9FB]"
      },
      {
        title: "Business Workflows on the Go",
        description: "Complete workflow functionality from mobile devices",
        icon: Workflow,
        color: "from-[#84FAB0] to-[#8FD3F4]"
      }
    ],
    technical: [
      {
        title: "Modern Architecture",
        description: "Microservices-based with API-first design",
        icon: Server,
        color: "from-[#58A0C8] to-[#34699A]"
      },
      {
        title: "Powerful Backend",
        description: "Scalable processing engine with queue management",
        icon: Cpu,
        color: "from-[#FDF5AA] to-[#FFD166]"
      },
      {
        title: "Flexible Deployment",
        description: "Cloud, on-premise, or hybrid deployment options",
        icon: Cloud,
        color: "from-[#A1C4FD] to-[#C2E9FB]"
      },
      {
        title: "Enterprise Scalability",
        description: "Horizontal scaling for high-volume document processing",
        icon: Network,
        color: "from-[#84FAB0] to-[#8FD3F4]"
      },
      {
        title: "On-Premise Hosting",
        description: "Full functionality for air-gapped environments",
        icon: Database,
        color: "from-[#FF9A9E] to-[#FAD0C4]"
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#FDF5AA]/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#113F67] via-[#34699A] to-[#58A0C8] bg-clip-text text-transparent">
            Comprehensive Feature Set
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#58A0C8] to-[#34699A] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-[#113F67]/80 max-w-3xl mx-auto">
            Explore the powerful capabilities that make our platform the most advanced document solution available.
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
          {features[activeTab].map((feature, index) => (
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

        {/* CTA */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div>
            <div className="bg-gradient-to-r from-[#113F67] to-[#34699A] rounded-3xl p-8 text-center text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Want to See These Features in Action?</h3>
              <p className="mb-6 text-white/90 max-w-2xl mx-auto">
                Our team would love to show you how these features can transform your document workflows.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="group relative px-8 py-3 bg-gradient-to-r from-[#FDF5AA] to-white text-[#113F67] rounded-2xl font-bold text-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-white/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <span>Request Demo</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
                <button className="group relative px-8 py-3 bg-transparent border-2 border-white text-white rounded-2xl font-bold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <span>Contact Sales</span>
                    <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
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

// Features Comparison Section
// const FeaturesComparison = () => {
//   const tiers = [
//     {
//       name: "Starter",
//       price: "$29",
//       description: "For individuals and small teams",
//       features: [
//         "Basic document management",
//         "Standard search",
//         "Limited AI features",
//         "Basic sharing",
//         "2GB storage"
//       ]
//     },
//     {
//       name: "Professional",
//       price: "$99",
//       description: "For growing businesses",
//       features: [
//         "Advanced document management",
//         "AI-powered search",
//         "Workflow automation",
//         "Enhanced sharing",
//         "50GB storage",
//         "Basic analytics"
//       ]
//     },
//     {
//       name: "Enterprise",
//       price: "Custom",
//       description: "For large organizations",
//       features: [
//         "All Professional features",
//         "Advanced AI processing",
//         "Custom workflows",
//         "Enterprise security",
//         "Unlimited storage",
//         "Advanced analytics",
//         "Dedicated support",
//         "On-premise options"
//       ]
//     }
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-[#113F67]/5 to-[#113F67]/20">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#113F67] via-[#34699A] to-[#58A0C8] bg-clip-text text-transparent">
//             Choose Your Plan
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#58A0C8] to-[#34699A] mx-auto rounded-full mb-6"></div>
//           <p className="text-xl text-[#113F67]/80 max-w-3xl mx-auto">
//             Select the package that matches your needs. All plans include our core features with varying levels of access.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {tiers.map((tier, index) => (
//             <Card3D key={index} index={index} className="h-full">
//               <div className={`group h-full p-8 rounded-3xl shadow-xl border transition-all duration-500 transform hover:-translate-y-2 ${index === 1
//                   ? 'bg-gradient-to-br from-[#113F67] to-[#34699A] border-white/20 hover:shadow-2xl'
//                   : 'bg-white border-white/20 hover:shadow-lg'
//                 }`}>
//                 <h3 className={`text-2xl font-bold mb-2 ${index === 1 ? 'text-white' : 'text-[#113F67]'
//                   }`}>
//                   {tier.name}
//                 </h3>
//                 <p className={`text-xl mb-6 ${index === 1 ? 'text-white/80' : 'text-[#113F67]/80'
//                   }`}>
//                   {tier.description}
//                 </p>
//                 <div className="mb-8">
//                   <span className={`text-4xl font-bold ${index === 1 ? 'text-white' : 'text-[#113F67]'
//                     }`}>
//                     {tier.price}
//                   </span>
//                   <span className={`ml-1 ${index === 1 ? 'text-white/70' : 'text-[#113F67]/70'
//                     }`}>
//                     {tier.price !== "Custom" ? "/month" : "pricing"}
//                   </span>
//                 </div>
//                 <ul className="space-y-3 mb-8">
//                   {tier.features.map((feature, i) => (
//                     <li key={i} className="flex items-start">
//                       <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 ${index === 1 ? 'bg-[#FDF5AA] text-[#113F67]' : 'bg-[#113F67]/10 text-[#113F67]'
//                         }`}>
//                         <Check size={12} />
//                       </div>
//                       <span className={`${index === 1 ? 'text-white/90' : 'text-[#113F67]/90'
//                         }`}>
//                         {feature}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//                 <button className={`w-full py-3 rounded-xl font-bold transition-all ${index === 1
//                     ? 'bg-[#FDF5AA] text-[#113F67] hover:bg-[#FDF5AA]/90'
//                     : 'bg-gradient-to-r from-[#113F67] to-[#34699A] text-white hover:shadow-lg'
//                   }`}>
//                   Get Started
//                 </button>
//               </div>
//             </Card3D>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

const ComparisonSheet = () => {
  const [expandedRows, setExpandedRows] = useState([]);
  const [hoveredColumn, setHoveredColumn] = useState(null);

  const toggleRow = (index) => {
    if (expandedRows.includes(index)) {
      setExpandedRows(expandedRows.filter(i => i !== index));
    } else {
      setExpandedRows([...expandedRows, index]);
    }
  };

  const comparisonData = [
    {
      feature: "Core Offering",
      databitze: "DMS, IDP, Workflow, OCR",
      folderit: "DMS & Document Storage",
      newgen: "DMS, BPM, ECM, Case Management",
      icon: <FileText size={18} className="text-[#113F67]" />,
      expanded: false
    },
    {
      feature: "Deployment Options",
      databitze: "Cloud & On-Premises",
      folderit: "Cloud only",
      newgen: "Cloud, On-Prem, Hybrid",
      icon: <Cloud size={18} className="text-[#113F67]" />,
      expanded: false
    },
    {
      feature: "AI-Powered Document Processing",
      databitze: "Yes (AI/ML for IDP, NLP)",
      folderit: "Limited AI (mostly rule-based)",
      newgen: "Yes (Advanced AI/ML)",
      icon: <Bot size={18} className="text-[#113F67]" />,
      expanded: false
    },
    {
      feature: "Workflow Automation",
      databitze: "Yes (Drag & Drop Builder)",
      folderit: "Basic Approval Workflows",
      newgen: "Yes (Low-code Platform)",
      icon: <Workflow size={18} className="text-[#113F67]" />,
      expanded: false
    },
    {
      feature: "OCR Capabilities",
      databitze: "Advanced (Printed & Handwritten)",
      folderit: "OCR for scanned PDFs",
      newgen: "Advanced (Printed & Handwritten)",
      icon: <Scan size={18} className="text-[#113F67]" />,
      expanded: false
    },
    {
      feature: "Multi-language Support",
      databitze: "Yes (Indian & Global languages)",
      folderit: "Limited",
      newgen: "Yes (Extensive)",
      icon: <Users size={18} className="text-[#113F67]" />,
      expanded: false
    },
    {
      feature: "Compliance (HIPAA, GDPR, DPDPA)",
      databitze: "HIPAA, GDPR, DPDPA 2023",
      folderit: "HIPAA, GDPR",
      newgen: "HIPAA, GDPR, Industry-specific",
      icon: <ShieldCheck size={18} className="text-[#113F67]" />,
      expanded: false
    },
    {
      feature: "Integration APIs",
      databitze: "Open APIs, Webhooks, AD/LDAP",
      folderit: "Basic API",
      newgen: "Comprehensive API Suite",
      icon: <GitBranch size={18} className="text-[#113F67]" />,
      expanded: false
    },
    {
      feature: "User Access Control & RBAC",
      databitze: "Role-based + MFA + SSO",
      folderit: "2FA, Basic RBAC",
      newgen: "Advanced (RBAC, MFA, AD/LDAP)",
      icon: <Lock size={18} className="text-[#113F67]" />,
      expanded: false
    },
    {
      feature: "Audit Trails",
      databitze: "Yes (Immutable & Exportable)",
      folderit: "Yes (Basic Logs)",
      newgen: "Yes (Granular & Compliant)",
      icon: <Activity size={18} className="text-[#113F67]" />,
      expanded: false
    },
    {
      feature: "Custom Workflow Builder (No-code/Low-code)",
      databitze: "Yes (No-code Designer)",
      folderit: "Limited (Predefined Actions)",
      newgen: "Yes (Low-code Platform)",
      icon: <Cpu size={18} className="text-[#113F67]" />,
      expanded: false
    },
    {
      feature: "Document Versioning",
      databitze: "Yes",
      folderit: "Yes",
      newgen: "Yes",
      icon: <Database size={18} className="text-[#113F67]" />,
      expanded: false
    },
    {
      feature: "Cloud Infrastructure",
      databitze: "AWS, Azure (Secure Hosting)",
      folderit: "AWS",
      newgen: "Private Cloud, Azure, On-Prem",
      icon: <Server size={18} className="text-[#113F67]" />,
      expanded: false
    },
    {
      feature: "On-premises Support",
      databitze: "Yes",
      folderit: "No",
      newgen: "Yes",
      icon: <Network size={18} className="text-[#113F67]" />,
      expanded: false
    },
    {
      feature: "Mobile Access",
      databitze: "Yes",
      folderit: "Yes",
      newgen: "Yes",
      icon: <Smartphone size={18} className="text-[#113F67]" />,
      expanded: false
    },
    {
      feature: "Pricing Model",
      databitze: "Subscription-based (tiered plans)",
      folderit: "Subscription-based",
      newgen: "Enterprise Licensing + Subscription",
      icon: <Key size={18} className="text-[#113F67]" />,
      expanded: false
    },
    {
      feature: "Industry-Specific Solutions",
      databitze: "Government, Finance, Healthcare, BPO",
      folderit: "General Business Use",
      newgen: "Government, BFSI, Healthcare, Telecom",
      icon: <Shield size={18} className="text-[#113F67]" />,
      expanded: false
    },
    {
      feature: "Customer Support Tiers",
      databitze: "Standard, Premium, Enterprise",
      folderit: "Email Support, SLA for Business Plans",
      newgen: "Standard, Premium, Enterprise with SLAs",
      icon: <Zap size={18} className="text-[#113F67]" />,
      expanded: false
    }
  ];

  const renderFeatureValue = (value) => {
    if (value === "Yes") {
      return (
        <div className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
          <Check size={16} className="text-green-600" />
        </div>
      );
    } else if (value === "No") {
      return (
        <div className="flex items-center justify-center w-6 h-6 bg-red-100 rounded-full">
          <X size={16} className="text-red-600" />
        </div>
      );
    }
    return <span className="text-[#113F67]">{value}</span>;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#FDF5AA]/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#113F67] via-[#34699A] to-[#58A0C8] bg-clip-text text-transparent">
            Competitive Comparison
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#58A0C8] to-[#34699A] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-[#113F67]/80 max-w-3xl mx-auto">
            See how Databitze stacks up against leading document management solutions
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[900px]">
            {/* Header */}
            <div className="grid grid-cols-12 gap-4 mb-4">
              {/* Features Column Header */}
              <div className="col-span-3 p-4 rounded-xl bg-gradient-to-br from-[#113F67]/5 to-[#58A0C8]/5">
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#113F67] to-[#58A0C8] rounded-2xl flex items-center justify-center shadow-lg">
                    <List size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#113F67]">Features</h3>
                  <p className="text-sm text-[#113F67]/70">Capabilities Comparison</p>
                </motion.div>
              </div>

              {/* Databitze Column Header */}
              <div
                className={`col-span-3 p-4 rounded-xl transition-all duration-300 ${hoveredColumn === 'databitze' ? 'bg-gradient-to-br from-[#113F67]/10 to-[#58A0C8]/20 shadow-xl' : 'bg-white/70 shadow-lg'}`}
                onMouseEnter={() => setHoveredColumn('databitze')}
                onMouseLeave={() => setHoveredColumn(null)}
              >
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-white to-[#58A0C8] rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center">
                      <Logo className="text-[#113F67] w-10 h-10" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#113F67]">Databitze</h3>
                  <p className="text-sm text-[#113F67]/70">Intelligent Document Platform</p>
                  {hoveredColumn === 'databitze' && (
                    <motion.div
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#113F67] rotate-45"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500 }}
                    />
                  )}
                </motion.div>
              </div>

              {/* Folderit Column Header */}
              <div
                className={`col-span-3 p-4 rounded-xl transition-all duration-300 ${hoveredColumn === 'folderit' ? 'bg-gradient-to-br from-[#FDF5AA]/20 to-[#FFD166]/20 shadow-xl' : 'bg-white/70 shadow-lg'}`}
                onMouseEnter={() => setHoveredColumn('folderit')}
                onMouseLeave={() => setHoveredColumn(null)}
              >
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#FDF5AA] to-[#FFD166] rounded-2xl flex items-center justify-center shadow-lg">
                    <Folder size={28} className="text-[#113F67]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#113F67]">Folderit</h3>
                  <p className="text-sm text-[#113F67]/70">Document Management</p>
                  {hoveredColumn === 'folderit' && (
                    <motion.div
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FFD166] rotate-45"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500 }}
                    />
                  )}
                </motion.div>
              </div>

              {/* Newgen Column Header */}
              <div
                className={`col-span-3 p-4 rounded-xl transition-all duration-300 ${hoveredColumn === 'newgen' ? 'bg-gradient-to-br from-[#A1C4FD]/20 to-[#C2E9FB]/20 shadow-xl' : 'bg-white/70 shadow-lg'}`}
                onMouseEnter={() => setHoveredColumn('newgen')}
                onMouseLeave={() => setHoveredColumn(null)}
              >
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#A1C4FD] to-[#C2E9FB] rounded-2xl flex items-center justify-center shadow-lg">
                    <Database size={28} className="text-[#113F67]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#113F67]">Newgen</h3>
                  <p className="text-sm text-[#113F67]/70">Enterprise ECM</p>
                  {hoveredColumn === 'newgen' && (
                    <motion.div
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#A1C4FD] rotate-45"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500 }}
                    />
                  )}
                </motion.div>
              </div>
            </div>

            {/* Rows */}
            <div className="space-y-3">
              {comparisonData.map((row, index) => (
                <motion.div
                  key={index}
                  className={`grid grid-cols-12 gap-4 rounded-xl p-4 border transition-all ${hoveredColumn === 'databitze' ? 'border-[#58A0C8]/30' :
                    hoveredColumn === 'folderit' ? 'border-[#FFD166]/30' :
                      hoveredColumn === 'newgen' ? 'border-[#A1C4FD]/30' :
                        'border-white/20'
                    } ${index % 2 === 0 ? 'bg-white/70' : 'bg-white/50'
                    } shadow-sm hover:shadow-md`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, type: 'spring', stiffness: 100 }}
                  whileHover={{
                    scale: 1.005,
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div
                    className="col-span-3 flex items-center gap-3 cursor-pointer group"
                    onClick={() => toggleRow(index)}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-[#113F67]/10 to-[#58A0C8]/10 rounded-lg flex items-center justify-center transition-all group-hover:bg-[#113F67]/20">
                      {row.icon}
                    </div>
                    <span className="font-medium text-[#113F67] group-hover:text-[#34699A] transition-colors">
                      {row.feature}
                    </span>
                    {expandedRows.includes(index) ? (
                      <ChevronUp
                        size={18}
                        className="text-[#113F67]/60 ml-auto transition-transform group-hover:text-[#34699A]"
                      />
                    ) : (
                      <ChevronDown
                        size={18}
                        className="text-[#113F67]/60 ml-auto transition-transform group-hover:text-[#34699A]"
                      />
                    )}
                  </div>

                  {/* Databitze Cell */}
                  <div
                    className={`col-span-3 flex items-center justify-center p-2 rounded-lg transition-all ${hoveredColumn === 'databitze' ? 'bg-[#58A0C8]/10' : ''
                      }`}
                  >
                    {renderFeatureValue(row.databitze)}
                  </div>

                  {/* Folderit Cell */}
                  <div
                    className={`col-span-3 flex items-center justify-center p-2 rounded-lg transition-all ${hoveredColumn === 'folderit' ? 'bg-[#FFD166]/10' : ''
                      }`}
                  >
                    {renderFeatureValue(row.folderit)}
                  </div>

                  {/* Newgen Cell */}
                  <div
                    className={`col-span-3 flex items-center justify-center p-2 rounded-lg transition-all ${hoveredColumn === 'newgen' ? 'bg-[#A1C4FD]/10' : ''
                      }`}
                  >
                    {renderFeatureValue(row.newgen)}
                  </div>

                  {/* Expanded content */}
                  {expandedRows.includes(index) && (
                    <motion.div
                      className="col-span-12 pt-4 mt-2 border-t border-[#113F67]/10"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-3"></div>
                        <div className="col-span-3 text-sm text-[#113F67]/80 px-2 py-1 bg-[#58A0C8]/5 rounded">
                          {row.databitze === "Yes" || row.databitze === "No" ? "" : row.databitze}
                        </div>
                        <div className="col-span-3 text-sm text-[#113F67]/80 px-2 py-1 bg-[#FFD166]/5 rounded">
                          {row.folderit === "Yes" || row.folderit === "No" ? "" : row.folderit}
                        </div>
                        <div className="col-span-3 text-sm text-[#113F67]/80 px-2 py-1 bg-[#A1C4FD]/5 rounded">
                          {row.newgen === "Yes" || row.newgen === "No" ? "" : row.newgen}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-r from-[#113F67] to-[#34699A] rounded-3xl p-8 text-center text-white shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4">Ready to See Databitze in Action?</h3>
            <p className="mb-6 text-white/90 max-w-2xl mx-auto">
              Our team would love to show you how Databitze outperforms the competition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                className="group relative px-8 py-3 bg-gradient-to-r from-[#FDF5AA] to-white text-[#113F67] rounded-2xl font-bold text-lg shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-white/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <span>Request Demo</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.button>
              <motion.button
                className="group relative px-8 py-3 bg-transparent border-2 border-white text-white rounded-2xl font-bold text-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <span>Download Full Comparison</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Features Page Main Component
const Features = () => {
  return (
    <div className="overflow-hidden">
      <FeaturesHero />
      <FeaturesTabs />
      {/* <FeaturesComparison /> */}
      {/* <ComparisonSheet /> */}
    </div>
  );
};

export default Features;