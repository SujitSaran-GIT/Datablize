import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight, Zap, Shield, Search, Cloud, Bot, FileText, Lock, Cpu, Scan, Workflow, Fingerprint, Key, Clock, Activity, Database, ShieldCheck, Network, Check, Table, Folder, Tag, Trash2, LayoutDashboard, Send, Users, PenTool, BarChart2, Smartphone, Palette, Server, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    <section className={`relative flex items-center overflow-hidden min-h-full pt-20 pb-16 lg:pt-16 lg:pb-20 bg-gradient-to-br from-primary-white to-primary-light`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute w-96 h-96 bg-primary-orange rounded-full -top-48 -left-48"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-primary-blue rounded-full -bottom-32 -right-32"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-primary-blue flex flex-col gap-2">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-primary-orange"
                >
                  End-to-End Intelligent{" "}
                </motion.span>
                
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Document Capabilities for
                </motion.span>
                
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-primary-blue"
                >
                  Modern Enterprises
                </motion.span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className={`text-md sm:text-lg lg:text-xl mb-4 font-medium leading-relaxed text-primary-blue`}>
                Comprehensive features designed to transform every aspect of your document workflow.
              </p>
              <p className={`text-sm sm:text-md leading-relaxed text-primary-dark`}>
                From organization to automation, our platform provides everything you need to manage
                documents intelligently and efficiently.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Link to="/contact">
                <motion.button 
                  className={`group relative px-5 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-sm sm:text-md shadow-lg sm:shadow-xl overflow-hidden transform transition-all duration-300 bg-gradient-to-r from-primary-blue to-primary-orange text-primary-white`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-gradient-to-r from-primary-orange to-primary-blue`}></div>
                  <div className="relative flex items-center gap-2 sm:gap-3">
                    <span>Request a Demo</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.button>
              </Link>

              <Link to={"/use-cases"}>
                <motion.button 
                  className={`group px-5 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-sm sm:text-md transition-all duration-300 transform border border-primary-orange text-primary-dark hover:bg-primary-orange hover:text-primary-white`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2 sm:gap-3">
                    Explore Use Cases
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative max-w-md sm:max-w-lg mx-auto">
              <div className={`relative h-64 sm:h-80 md:h-96 w-full rounded-lg sm:rounded-xl overflow-hidden border-2 border-primary-orange shadow-lg sm:shadow-xl`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-primary-blue/20 to-primary-orange/20 backdrop-blur-sm`}>
                  {features.map((feature, idx) => (
                    <motion.div
                      key={feature}
                      className={`absolute inset-0 flex items-center justify-center p-6 sm:p-8`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeIndex === idx ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-center">
                        <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-primary-orange rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg`}>
                          {[
                            <Cpu size={24} className="text-primary-white" />,
                            <Shield size={24} className="text-primary-white" />,
                            <Users size={24} className="text-primary-white" />,
                            <Workflow size={24} className="text-primary-white" />
                          ][idx]}
                        </div>
                        <h3 className={`text-xl sm:text-2xl font-bold text-primary-blue mb-2 sm:mb-3`}>{feature}</h3>
                        <p className={`text-sm sm:text-base text-primary-blue`}>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple Tabs Navigation Component
const TabsNavigation = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {tabs.map((tab) => (
        <motion.button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
            activeTab === tab.id
              ? 'bg-gradient-to-r from-primary-blue to-primary-orange text-primary-white shadow-md'
              : 'bg-primary-light text-primary-dark hover:bg-primary-orange/20'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <tab.icon size={16} />
          {tab.label}
        </motion.button>
      ))}
    </div>
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
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Tag-Based Optimization",
        description: "Flexible tagging system with color coding and smart tag suggestions",
        icon: Tag,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Search Capabilities",
        description: "Full-text search with filters, semantic understanding, and saved searches",
        icon: Search,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Trash & Recovery",
        description: "Versioned trash with configurable retention policies and easy restoration",
        icon: Trash2,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Dashboard & Navigation",
        description: "Customizable dashboard with quick access to recent and starred items",
        icon: LayoutDashboard,
        color: "from-primary-blue to-primary-orange"
      }
    ],
    ai: [
      {
        title: "Automated Document Classification",
        description: "AI-powered categorization based on content, context, and document type",
        icon: FileText,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Intelligent Data Extraction",
        description: "Extract structured data from unstructured documents with high accuracy",
        icon: Cpu,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Workflow Automation",
        description: "Visual workflow builder with conditional logic and approvals",
        icon: Workflow,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "AI Document Analysis",
        description: "Content summarization, sentiment analysis, and key point extraction",
        icon: Bot,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Intelligent Routing",
        description: "Smart document routing based on content, metadata, and business rules",
        icon: Send,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Automated Processing Pipelines",
        description: "End-to-end document processing with customizable stages",
        icon: GitBranch,
        color: "from-primary-blue to-primary-orange"
      }
    ],
    collaborate: [
      {
        title: "Sharing & Collaboration",
        description: "Granular permission controls with link sharing and expiration",
        icon: Users,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "File Requests",
        description: "Create secure upload portals for external contributors",
        icon: Send,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Real-Time AI Co-Authoring",
        description: "AI-assisted content creation with style suggestions",
        icon: PenTool,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Smart Content Recommendations",
        description: "Context-aware suggestions for related documents and resources",
        icon: Search,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Electronic Signature",
        description: "Legally binding e-signatures with audit trails",
        icon: Fingerprint,
        color: "from-primary-blue to-primary-orange"
      }
    ],
    security: [
      {
        title: "Authentication & User Management",
        description: "Multi-factor authentication and granular role-based access",
        icon: Lock,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "End-to-End Encryption",
        description: "Military-grade encryption for data at rest and in transit",
        icon: ShieldCheck,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Privacy & Security Features",
        description: "Data residency controls, audit logs, and compliance reporting",
        icon: Database,
        color: "from-primary-blue to-primary-orange"
      }
    ],
    productivity: [
      {
        title: "Task Management",
        description: "Document-centric task assignment with due dates and reminders",
        icon: Check,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Notification System",
        description: "Customizable alerts for document changes and workflow steps",
        icon: Zap,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Statistics & Analytics",
        description: "Usage analytics and document lifecycle reporting",
        icon: BarChart2,
        color: "from-primary-blue to-primary-orange"
      }
    ],
    ux: [
      {
        title: "Modern UI",
        description: "Clean, intuitive interface with keyboard shortcuts",
        icon: LayoutDashboard,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Theme Support",
        description: "Light/dark mode and customizable color schemes",
        icon: Palette,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Mobile Applications",
        description: "Full-featured iOS and Android apps with offline access",
        icon: Smartphone,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Business Workflows on the Go",
        description: "Complete workflow functionality from mobile devices",
        icon: Workflow,
        color: "from-primary-blue to-primary-orange"
      }
    ],
    technical: [
      {
        title: "Modern Architecture",
        description: "Microservices-based with API-first design",
        icon: Server,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Powerful Backend",
        description: "Scalable processing engine with queue management",
        icon: Cpu,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Flexible Deployment",
        description: "Cloud, on-premise, or hybrid deployment options",
        icon: Cloud,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Enterprise Scalability",
        description: "Horizontal scaling for high-volume document processing",
        icon: Network,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "On-Premise Hosting",
        description: "Full functionality for air-gapped environments",
        icon: Database,
        color: "from-primary-blue to-primary-orange"
      }
    ]
  };

  return (
    <section className="relative py-16 bg-primary-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-blue to-primary-orange bg-clip-text text-transparent pb-2">
            Comprehensive Feature Set
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-blue to-primary-orange mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-primary-dark max-w-3xl mx-auto">
            Explore the powerful capabilities that make our platform the most advanced document solution available.
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <TabsNavigation
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Tab Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features[activeTab].map((feature, index) => (
            <motion.div 
              key={index} 
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="h-full p-6 bg-primary-white rounded-xl shadow-lg border border-primary-orange hover:shadow-xl transition-shadow duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-primary-dark leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="mt-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-primary-blue to-primary-orange rounded-xl p-6 text-center shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-primary-white">Want to See These Features in Action?</h3>
            <p className="mb-4 text-primary-light text-sm">
              Our team would love to show you how these features can transform your document workflows.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to={"/contact"}>
                <motion.button 
                  className="px-6 py-2 bg-primary-white text-primary-dark rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Demo
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
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
    </div>
  );
};

export default Features;