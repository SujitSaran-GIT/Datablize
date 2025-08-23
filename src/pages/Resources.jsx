import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, ChevronRight, Download, FileAxis3d, FileBadge, FileBarChart, FileBox, FileCheck, FileClock, FileCode, FileCog, FileDigit, FileHeart, FileInput, FileKey, FileMinus, FileOutput, FilePen, FileQuestion, FileScan, FileSearch, FileSignature, FileSpreadsheet, FileStack, FileText, FileUp, FileVideo, Film, Headphones, Play, Youtube } from 'lucide-react';

// TabsNavigation Component (aligned with Features and UseCase)
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
          <tab.icon size={16} className={activeTab === tab.id ? 'text-primary-white' : 'text-primary-dark'} />
          {tab.label}
        </motion.button>
      ))}
    </div>
  );
};

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
    <section className="relative flex items-center overflow-hidden min-h-full pt-20 pb-16 lg:pt-16 lg:pb-20 bg-gradient-to-br from-primary-white to-primary-light">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute w-96 h-96 bg-primary-orange rounded-full -top-48 -left-48"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-primary-blue rounded-full -bottom-32 -right-32"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
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
                  className="bg-gradient-to-r from-primary-blue to-primary-orange bg-clip-text text-transparent"
                >
                  Resources & 
                </motion.span>
                
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Insights
                </motion.span>
                
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-primary-orange"
                >
                  for Intelligent Management
                </motion.span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-md sm:text-lg lg:text-xl mb-4 font-medium leading-relaxed text-primary-blue">
                Explore our latest thinking on enterprise document management and process automation.
              </p>
              <p className="text-sm sm:text-md leading-relaxed text-primary-dark">
                Gain valuable knowledge to accelerate your digital transformation with our comprehensive library of resources.
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
                  className="group relative px-5 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-sm sm:text-md shadow-lg sm:shadow-xl overflow-hidden transform transition-all duration-300 bg-gradient-to-r from-primary-blue to-primary-orange text-primary-white"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-gradient-to-r from-primary-orange to-primary-blue"></div>
                  <div className="relative flex items-center gap-2 sm:gap-3">
                    <span>Subscribe for updates</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative max-w-md sm:max-w-lg mx-auto">
              <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-lg sm:rounded-xl overflow-hidden border-2 border-primary-orange shadow-lg sm:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 to-primary-orange/20 backdrop-blur-sm">
                  {resourceTypes.map((type, idx) => (
                    <motion.div
                      key={type}
                      className="absolute inset-0 flex items-center justify-center p-6 sm:p-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeIndex === idx ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-primary-orange rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                          {[
                            <FileText size={24} className="text-primary-white" />,
                            <FileBarChart size={24} className="text-primary-white" />,
                            <BookOpen size={24} className="text-primary-white" />,
                            <FileCode size={24} className="text-primary-white" />,
                            <FileQuestion size={24} className="text-primary-white" />
                          ][idx]}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-primary-blue mb-2 sm:mb-3">{type}</h3>
                        <p className="text-sm sm:text-base text-primary-blue">
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
              </div>
            </div>
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
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "2.4 MB",
        date: "May 2025"
      },
      {
        title: "DPDPA 2023 Compliance Strategies",
        description: "Document-centric workflows that comply with India's new data protection law",
        icon: FileKey,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "1.8 MB",
        date: "March 2025"
      },
      {
        title: "Zero Paper Offices",
        description: "How government and BFSI sectors are achieving paperless operations",
        icon: FileMinus,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "3.1 MB",
        date: "January 2025"
      },
      {
        title: "HIPAA, GDPR & DPDPA Unified Approach",
        description: "Meeting multiple compliance requirements with a single framework",
        icon: FileCheck,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "2.7 MB",
        date: "February 2025"
      },
      {
        title: "IDP Cost Reduction Study",
        description: "How Intelligent Document Processing reduces operational costs by 50%",
        icon: FileSpreadsheet,
        color: "from-primary-blue to-primary-orange",
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
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "4.2 MB",
        date: "December 2024"
      },
      {
        title: "Health Insurance Claims Automation",
        description: "How a leading provider reduced claims processing time by 70%",
        icon: FileHeart,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "3.8 MB",
        date: "November 2024"
      },
      {
        title: "Digital Archive Migration",
        description: "National PSU's journey migrating 10M+ documents to our DMS",
        icon: FileStack,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "5.1 MB",
        date: "October 2024"
      },
      {
        title: "KYC & AML Automation",
        description: "Financial institution's compliance transformation case study",
        icon: FileSignature,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "2.9 MB",
        date: "September 2024"
      },
      {
        title: "EHR Digitization for Hospitals",
        description: "HIPAA-compliant electronic health records implementation",
        icon: FileScan,
        color: "from-primary-blue to-primary-orange",
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
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "6.2 MB",
        date: "July 2025"
      },
      {
        title: "Implementation Checklist",
        description: "Step-by-step guide for getting started with Datablize",
        icon: FileCheck,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "1.2 MB",
        date: "June 2025"
      },
      {
        title: "Workflow Automation Playbook",
        description: "Practical guide for admin and operations teams",
        icon: FilePen,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "3.4 MB",
        date: "May 2025"
      },
      {
        title: "DPDPA Compliance Template",
        description: "Data Processing Agreement template compliant with India's 2023 law",
        icon: FileKey,
        color: "from-primary-blue to-primary-orange",
        type: "DOCX",
        size: "0.8 MB",
        date: "April 2025"
      },
      {
        title: "Digitization Strategy Guide",
        description: "From scanner to structured data - complete roadmap",
        icon: FileDigit,
        color: "from-primary-blue to-primary-orange",
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
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "8.4 MB",
        date: "June 2025"
      },
      {
        title: "DMS Handbook",
        description: "Complete reference guide for administrators",
        icon: BookOpen,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "12.1 MB",
        date: "May 2025"
      },
      {
        title: "OnPrem Deployment Guide",
        description: "Detailed instructions for on-premises installation",
        icon: FileBox,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "5.7 MB",
        date: "April 2025"
      },
      {
        title: "Hardware Sizing Guide",
        description: "Specifications for optimal performance at scale",
        icon: FileCog,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "2.3 MB",
        date: "March 2025"
      },
      {
        title: "Integration Guide",
        description: "Connecting with ERP, CRM and legacy systems",
        icon: FileAxis3d,
        color: "from-primary-blue to-primary-orange",
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
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "1.1 MB",
        date: "June 2025"
      },
      {
        title: "Implementation FAQs",
        description: "Questions about deployment and configuration",
        icon: FileOutput,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "0.9 MB",
        date: "May 2025"
      },
      {
        title: "Security FAQs",
        description: "Information about compliance and data protection",
        icon: FileKey,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "1.3 MB",
        date: "April 2025"
      },
      {
        title: "Pricing FAQs",
        description: "Questions about licensing and subscription models",
        icon: FileSpreadsheet,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "0.7 MB",
        date: "March 2025"
      },
      {
        title: "Training FAQs",
        description: "Information about certification and learning resources",
        icon: FileClock,
        color: "from-primary-blue to-primary-orange",
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
        color: "from-primary-blue to-primary-orange",
        type: "Video",
        size: "45 MB",
        date: "June 2025",
        duration: "15:22"
      },
      {
        title: "Use Case: Insurance Claims",
        description: "How a leading insurer automated claims processing",
        icon: Film,
        color: "from-primary-blue to-primary-orange",
        type: "Video",
        size: "68 MB",
        date: "May 2025",
        duration: "22:15"
      },
      {
        title: "Implementation Webinar",
        description: "Best practices for successful deployment",
        icon: Youtube,
        color: "from-primary-blue to-primary-orange",
        type: "Video",
        size: "92 MB",
        date: "April 2025",
        duration: "32:45"
      },
      {
        title: "IDP Feature Deep Dive",
        description: "Advanced document intelligence capabilities",
        icon: FileVideo,
        color: "from-primary-blue to-primary-orange",
        type: "Video",
        size: "56 MB",
        date: "March 2025",
        duration: "18:30"
      },
      {
        title: "Customer Testimonial",
        description: "How State IT Dept transformed citizen services",
        icon: Headphones,
        color: "from-primary-blue to-primary-orange",
        type: "Video",
        size: "38 MB",
        date: "February 2025",
        duration: "12:10"
      }
    ]
  };

  return (
    <section className="relative py-20 bg-primary-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-blue to-primary-orange bg-clip-text text-transparent">
            Knowledge Center
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-primary-orange mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-primary-dark max-w-3xl mx-auto">
            Access our comprehensive library of resources to support your document management journey.
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
          {resources[activeTab].map((resource, index) => (
            <motion.div
              key={index}
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="group h-full p-6 bg-primary-white rounded-2xl shadow-xl border border-primary-orange hover:shadow-2xl transition-all duration-500">
                <div className={`w-12 h-12 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <resource.icon size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary-dark  transition-colors duration-300 mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-primary-dark leading-relaxed mb-4">
                  {resource.description}
                </p>
                <div className="flex justify-between items-center text-xs text-primary-dark/60">
                  <span>{resource.type} • {resource.size}</span>
                  <span>{resource.date}</span>
                </div>
                {resource.duration && (
                  <div className="mt-2 text-xs text-primary-dark/60">
                    Duration: {resource.duration}
                  </div>
                )}
                <div className="mt-4">
                  <button className="group flex items-center gap-2 text-primary-dark hover:text-primary-orange transition-colors duration-300">
                    <span className="font-medium">Download</span>
                    <Download size={16} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-primary-blue to-primary-orange rounded-3xl p-8 text-center text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="mb-6 text-primary-white/90 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest insights, guides, and industry best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-xl bg-primary-white/10 border border-primary-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-orange"
              />
              <motion.button
                className="group relative px-8 py-3 bg-primary-white text-primary-dark rounded-2xl font-bold text-lg shadow-2xl overflow-hidden transform transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-gradient-to-r from-primary-orange to-primary-blue"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <span>Subscribe</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.button>
            </div>
            <p className="mt-4 text-xs text-primary-white/60">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Resources Main Component
const Resources = () => {
  return (
    <div className="overflow-hidden">
      <ResourcesHero />
      <ResourcesTabs />
    </div>
  );
};

export default Resources;