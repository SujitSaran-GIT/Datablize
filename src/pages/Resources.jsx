import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { ArrowRight, BookOpen, ChevronRight, Download, FileAxis3d, FileBadge, FileBarChart, FileBox, FileCheck, FileClock, FileCode, FileCog, FileDigit, FileHeart, FileInput, FileKey, FileMinus, FileOutput, FilePen, FileQuestion, FileScan, FileSearch, FileSignature, FileSpreadsheet, FileStack, FileText, FileUp, FileVideo, Film, Headphones, Play, Youtube } from 'lucide-react';
import TabsNavigation from '../components/common/TabNavigation';

const ResourcesHero = () => {
  const { themeConfig } = useTheme();
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
    <section className={`relative flex items-center overflow-hidden min-h-full pt-20 pb-16 lg:pt-16 lg:pb-20 ${themeConfig.background}`}>
      <div className="container mx-auto px-4 sm:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className={`bg-gradient-to-r ${themeConfig.gradientText} bg-clip-text`}>
                  Resources & 
                </span>
                <br />
                <span className={themeConfig.textPrimary}>Insights</span>
                <br />
                <span className={`bg-gradient-to-r ${themeConfig.gradientTextSecondary} bg-clip-text`}>
                  for Intelligent Management
                </span>
              </h1>
            </div>

            <div>
              <p className={`text-md sm:text-lg lg:text-xl mb-4 ${themeConfig.textPrimary}/80 font-medium leading-relaxed`}>
                Explore our latest thinking on enterprise document management and process automation.
              </p>
              <p className={`text-sm sm:text-md ${themeConfig.textPrimary}/70 leading-relaxed`}>
                Gain valuable knowledge to accelerate your digital transformation with our comprehensive library of resources.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link to="/contact">
                <button className={`group relative px-5 sm:px-6 py-2 sm:py-3 ${themeConfig.button.primary} rounded-lg sm:rounded-xl font-bold text-sm sm:text-md shadow-lg sm:shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300`}>
                  <div className={`absolute inset-0 ${themeConfig.button.hover} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                  <div className="relative flex items-center gap-2 sm:gap-3">
                    <span>Subscribe for updates</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative max-w-md sm:max-w-lg mx-auto">
              <div className={`relative h-64 sm:h-80 md:h-96 w-full rounded-lg sm:rounded-xl overflow-hidden border-2 ${themeConfig.border} shadow-lg sm:shadow-xl`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${themeConfig.heroOverlayGradient} backdrop-blur-sm`}>
                  {resourceTypes.map((type, idx) => (
                    <div
                      key={type}
                      className={`absolute inset-0 flex items-center justify-center p-6 sm:p-8 transition-opacity duration-500 ${activeIndex === idx ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <div className="text-center">
                        <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 ${themeConfig.resourceIconBackground} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg`}>
                          {[
                            <FileText size={24} className={themeConfig.resourceIconColor} />,
                            <FileBarChart size={24} className={themeConfig.resourceIconColor} />,
                            <BookOpen size={24} className={themeConfig.resourceIconColor} />,
                            <FileCode size={24} className={themeConfig.resourceIconColor} />,
                            <FileQuestion size={24} className={themeConfig.resourceIconColor} />
                          ][idx]}
                        </div>
                        <h3 className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-3 ${themeConfig.textInverted}`}>{type}</h3>
                        <p className={`text-sm sm:text-base ${themeConfig.textInvertedSecondary}`}>
                          {[
                            "In-depth research and analysis on industry trends",
                            "Real-world implementations and success stories",
                            "Practical how-to guides and best practices",
                            "Technical documentation and specifications",
                            "Answers to common questions and challenges"
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

const ResourcesTabs = () => {
  const { themeConfig } = useTheme();
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
    <section className={`relative py-20 ${themeConfig.sectionBackground} overflow-hidden`}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${themeConfig.gradientText} pb-2`}>
            Knowledge Center
          </h2>
          <div className={`w-24 h-1 ${themeConfig.gradientDivider} mx-auto rounded-full mb-6`}></div>
          <p className={`text-xl ${themeConfig.textPrimary}/80 max-w-3xl mx-auto`}>
            Access our comprehensive library of resources to support your document management journey.
          </p>
        </div>

        {/* Tabs Navigation */}
        <TabsNavigation
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          activeTabColor={themeConfig.tabActiveBackground}
          inactiveTabColor={themeConfig.tabInactiveText}
          iconColor={themeConfig.tabIconColor}
          activeIconColor={themeConfig.tabActiveIconColor}
          gradientFadeColor={themeConfig.tabGradientFade}
        />

        {/* Tab Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {resources[activeTab].map((resource, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <div className={`group h-full p-6 ${themeConfig.resourceCardBackground} rounded-2xl shadow-xl border ${themeConfig.border} hover:shadow-2xl transition-all duration-500`}>
                <div className={`w-12 h-12 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <resource.icon size={20} className="text-white" />
                </div>
                <h3 className={`text-lg font-bold ${themeConfig.textPrimary} group-hover:${themeConfig.textHover} transition-colors duration-300 mb-2`}>
                  {resource.title}
                </h3>
                <p className={`text-sm ${themeConfig.textSecondary} leading-relaxed mb-4`}>
                  {resource.description}
                </p>
                <div className={`flex justify-between items-center text-xs ${themeConfig.textSecondary}/60`}>
                  <span>{resource.type} • {resource.size}</span>
                  <span>{resource.date}</span>
                </div>
                {resource.duration && (
                  <div className={`mt-2 text-xs ${themeConfig.textSecondary}/60`}>
                    Duration: {resource.duration}
                  </div>
                )}
                <div className="mt-4">
                  <button className={`group flex items-center gap-2 ${themeConfig.textPrimary} hover:${themeConfig.textHover} transition-colors duration-300`}>
                    <span className="font-medium">Download</span>
                    <Download size={16} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div>
            <div className={`bg-gradient-to-r ${themeConfig.ctaGradient} rounded-3xl p-8 text-center text-white shadow-2xl`}>
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className={`mb-6 ${themeConfig.textInvertedSecondary} max-w-2xl mx-auto`}>
                Subscribe to our newsletter to receive the latest insights, guides, and industry best practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className={`flex-grow px-4 py-3 rounded-xl ${themeConfig.inputBackground} border ${themeConfig.inputBorder} text-white placeholder-white/60 focus:outline-none focus:ring-2 ${themeConfig.inputFocusRing}`}
                />
                <button className={`group relative px-8 py-3 ${themeConfig.button.primary} rounded-2xl font-bold text-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300`}>
                  <div className={`absolute inset-0 ${themeConfig.button.hover} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <span>Subscribe</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </div>
              <p className={`mt-4 text-xs ${themeConfig.textInvertedSecondary}/60`}>
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Resources = () => {
  return (
    <div className="overflow-hidden">
      <ResourcesHero />
      <ResourcesTabs />
    </div>
  );
};

export default Resources;