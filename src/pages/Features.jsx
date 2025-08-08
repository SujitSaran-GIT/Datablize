import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ArrowRight, Zap, Shield, Search, Cloud, Bot, FileText, Lock, Cpu, Scan, Workflow, Fingerprint, Key, Clock, Activity, Database, ShieldCheck, Network, Check, Table, Folder, Tag, Trash2, LayoutDashboard, Send, Users, PenTool, BarChart2, Smartphone, Palette, Server, GitBranch, ChevronDown, X, ChevronUp, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../components/common/Logo';
import TabsNavigation from '../components/common/TabNavigation';
import { useTheme } from '../context/ThemeContext';

// Features Hero Section
const FeaturesHero = () => {
  const { themeConfig } = useTheme();
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
    <section className={`relative flex items-center overflow-hidden min-h-full pt-20 pb-16 lg:pt-16 lg:pb-20 ${themeConfig.background}`}>
      <div className="container mx-auto px-4 sm:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className={themeConfig.textPrimary}>End-to-End </span>
                <span className={`bg-gradient-to-r ${themeConfig.gradientText} bg-clip-text`}>
                  Intelligent Document
                </span>
                <br />
                <span className={themeConfig.textPrimary}>Capabilities for</span>
                <br />
                <span className={`bg-gradient-to-r ${themeConfig.gradientTextSecondary} bg-clip-text`}>
                  Modern Enterprises
                </span>
              </h1>
            </div>

            <div>
              <p className={`text-md sm:text-lg lg:text-xl mb-4 ${themeConfig.textPrimary}/80 font-medium leading-relaxed`}>
                Comprehensive features designed to transform every aspect of your document workflow.
              </p>
              <p className={`text-sm sm:text-md ${themeConfig.textPrimary}/70 leading-relaxed`}>
                From organization to automation, our platform provides everything you need to manage
                documents intelligently and efficiently.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link to="/contact">
                <button className={`group relative px-5 sm:px-6 py-2 sm:py-3 ${themeConfig.button.primary} rounded-lg sm:rounded-xl font-bold text-sm sm:text-md shadow-lg sm:shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300`}>
                  <div className={`absolute inset-0 ${themeConfig.button.hover} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                  <div className="relative flex items-center gap-2 sm:gap-3">
                    <span>Request a Demo</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </Link>

              <Link to={"/features"}>
                <button className={`group px-5 sm:px-6 py-2 sm:py-3 ${themeConfig.button.secondary} rounded-lg sm:rounded-xl font-bold text-sm sm:text-md transition-all duration-300 transform hover:scale-105`}>
                  <span className="flex items-center gap-2 sm:gap-3">
                    Explore All Features
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative max-w-md sm:max-w-lg mx-auto">
              <div className={`relative h-64 sm:h-80 md:h-96 w-full rounded-lg sm:rounded-xl overflow-hidden border-2 ${themeConfig.border} shadow-lg sm:shadow-xl`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${themeConfig.featureShowcaseBackground} backdrop-blur-sm`}>
                  {features.map((feature, idx) => (
                    <div
                      key={feature}
                      className={`absolute inset-0 flex items-center justify-center p-6 sm:p-8 transition-opacity duration-500 ${activeIndex === idx ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <div className="text-center">
                        <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 ${themeConfig.featureShowcaseIconBackground} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg`}>
                          {[
                            <Cpu size={24} className={themeConfig.featureShowcaseIconColor} />,
                            <Shield size={24} className={themeConfig.featureShowcaseIconColor} />,
                            <Users size={24} className={themeConfig.featureShowcaseIconColor} />,
                            <Workflow size={24} className={themeConfig.featureShowcaseIconColor} />
                          ][idx]}
                        </div>
                        <h3 className={`text-xl sm:text-2xl font-bold ${themeConfig.textInverted} mb-2 sm:mb-3`}>{feature}</h3>
                        <p className={`text-sm sm:text-base ${themeConfig.textInvertedSecondary}`}>
                          {[
                            "Transform documents into actionable data with AI",
                            "Military-grade encryption and access controls",
                            "Real-time collaboration with AI assistance",
                            "Automate complex document workflows"
                          ][idx]}
                        </p>
                      </div>
                    </div>
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

// Features Tabs Section
const FeaturesTabs = () => {
  const { themeConfig } = useTheme();
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
    <section className={`relative py-16 ${themeConfig.sectionBackground} overflow-hidden`}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${themeConfig.gradientText}`}>
            Comprehensive Feature Set
          </h2>
          <div className={`w-20 h-1 ${themeConfig.gradientDivider} mx-auto rounded-full mb-4`}></div>
          <p className={`text-lg ${themeConfig.textSecondary} max-w-3xl mx-auto`}>
            Explore the powerful capabilities that make our platform the most advanced document solution available.
          </p>
        </div>

        {/* Tabs Navigation */}
        <TabsNavigation
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          activeTabColor={themeConfig.button.primary}
          inactiveTabColor={themeConfig.button.secondary}
          iconColor={themeConfig.textSecondary}
          activeIconColor={themeConfig.textInverted}
          gradientFadeColor={themeConfig.sectionBackground}
        />

        {/* Tab Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features[activeTab].map((feature, index) => (
            <motion.div 
              key={index} 
              className="h-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`h-full p-6 ${themeConfig.featureCardBackground} rounded-xl shadow-lg border ${themeConfig.border} hover:shadow-xl transition-shadow duration-300`}>
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon size={20} className="text-white" />
                </div>
                <h3 className={`text-lg font-bold ${themeConfig.textPrimary} mb-2`}>
                  {feature.title}
                </h3>
                <p className={`text-sm ${themeConfig.textSecondary} leading-relaxed`}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className={`${themeConfig.transformationBannerCard} rounded-xl p-6 text-center shadow-lg`}>
            <h3 className={`text-xl font-bold mb-2 ${themeConfig.textInverted}`}>Want to See These Features in Action?</h3>
            <p className={`mb-4 ${themeConfig.textInvertedSecondary} text-sm`}>
              Our team would love to show you how these features can transform your document workflows.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className={`px-6 py-2 ${themeConfig.button.primary} rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300`}>
                Request Demo
              </Link>
              <Link to="/contact" className={`px-6 py-2 ${themeConfig.button.secondary} rounded-lg font-bold text-sm hover:bg-white/10 transition-all duration-300`}>
                Contact Sales
              </Link>
            </div>
          </div>
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
    </div>
  );
};

export default Features;