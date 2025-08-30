import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, ChevronRight, Download, FileAxis3d, FileBadge, FileBarChart, FileBox, FileCheck, FileClock, FileCode, FileCog, FileDigit, FileHeart, FileInput, FileKey, FileMinus, FileOutput, FilePen, FileQuestion, FileScan, FileSearch, FileSignature, FileSpreadsheet, FileStack, FileText, FileUp, FileVideo, Film, Headphones, Play, Youtube, ExternalLink, AlertCircle } from 'lucide-react';
import dotenv from 'dotenv';

dotenv.config();

// TabsNavigation Component
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
  const [activeTab, setActiveTab] = useState('casestudies');

  // Determine base URL based on environment
  const BASE_URL = 'http://localhost:5173/' || 'www.datablize.com/'

  // File paths for local PDFs (relative to the public folder, with base URL prepended)
  const whitepaperFiles = [
    `${BASE_URL}/documents/whitepaper/Whitepaper_Document_Intelligence_Processing.pdf`,
    `${BASE_URL}/documents/whitepaper/Whitepaper_DPDPA_2023_Compliance_Strategies.pdf`,
    `${BASE_URL}/documents/whitepaper/Whitepaper_HIPAA_GDPR_DPDPA_Unified_Approach.pdf`,
    `${BASE_URL}/documents/whitepaper/Whitepaper_IDP_Cost_Reduction_Study.pdf`,
    `${BASE_URL}/documents/whitepaper/Whitepaper_Zero_Paper_Offices.pdf`,
  ];

  const casestudyFiles = [
    `${BASE_URL}/documents/casestudy/Case_Study_Record_Management.pdf`,
    `${BASE_URL}/documents/casestudy/Case_Study_Automated_Invoice_Processing.pdf`,
    `${BASE_URL}/documents/casestudy/Case_Study_Datablize_Analytics_Solution_Secure_Document_Storage.pdf`,
    `${BASE_URL}/documents/casestudy/Case_Study_Digital_Archive_Migration.pdf`,
    `${BASE_URL}/documents/casestudy/Case_Study_EHR_Digitization_for_Hospitals.pdf`,
    `${BASE_URL}/documents/casestudy/Case_Study_G2C_Automation_Platform.pdf`,
    `${BASE_URL}/documents/casestudy/Case_Study_Health_Insurance_Claims_Automation.pdf`,
    `${BASE_URL}/documents/casestudy/Case_Study_KYC_AML_Automation.pdf`,
  ];

  const guideFiles = [
    `${BASE_URL}/documents/guide/Guide_Digitization_Strategy_Guide_2025.pdf`,
    `${BASE_URL}/documents/guide/Guide_DMS_Buyers_Guide_2025.pdf`,
    `${BASE_URL}/documents/guide/Guide_Implementation_Checklist_Step_by_Step_Guide.pdf`,
    `${BASE_URL}/documents/guide/Guide_Workflow_Automation_Playbook_2025.pdf`,
  ];

  const productdocsFiles = [
    `${BASE_URL}/documents/products/Transforming_Document_Processing.pdf`,
    `${BASE_URL}/documents/products/Datablize_Analytics_Product_Brochure.pdf`,
  ];

  const faqsFiles = [
    `${BASE_URL}/documents/faqs/General_FAQs_Datablize_Analytics.pdf`,
    `${BASE_URL}/documents/faqs/Implementation_FAQs_Datablize_Analytics_Deployment_and_Configuration.pdf`,
    `${BASE_URL}/documents/faqs/Security_FAQs_Compliance_and_Data_Protection.pdf`,
  ];

  const tabs = [
    { id: 'whitepapers', label: 'Whitepapers', icon: FileText },
    { id: 'casestudies', label: 'Case Studies', icon: FileBarChart },
    { id: 'guides', label: 'Guides', icon: BookOpen },
    { id: 'productdocs', label: 'Product Docs', icon: FileCode },
    { id: 'faqs', label: 'FAQs', icon: FileQuestion },
    { id: 'videos', label: 'Videos', icon: Play },
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
        file: whitepaperFiles[0],
      },
      {
        title: "DPDPA 2023 Compliance Strategies",
        description: "Document-centric workflows that comply with India's new data protection law",
        icon: FileKey,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "1.8 MB",
        file: whitepaperFiles[1],
      },
      {
        title: "HIPAA, GDPR & DPDPA",
        description: "Strategies for multi-regulation compliance using Datablize solutions",
        icon: FileKey,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "2.1 MB",
        file: whitepaperFiles[2],
      },
      {
        title: "Intelligent Document Processing (IDP)",
        description: "A deep dive into cost-saving benefits of IDP technologies",
        icon: FileCog,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "2.3 MB",
        file: whitepaperFiles[3],
      },
      {
        title: "Zero Paper Offices",
        description: "Exploring the shift to paperless operations in government and banking sectors",
        icon: FileText,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "2.0 MB",
        file: whitepaperFiles[4],
      },
    ],
    casestudies: [
      {
        title: "Intelligent Record Management",
        description: "Streamlining Document Management and Workflow Automation through AI-Powered Solutions",
        icon: FileBadge,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "4.2 MB",
        file: casestudyFiles[0],
      },
      {
        title: "Automated Invoice Processing",
        description: "Transforming Financial Operations with Datablize Analytics's Automated Invoice Processing",
        icon: FileHeart,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "3.8 MB",
        file: casestudyFiles[1],
      },
      {
        title: "Secure Document Storage",
        description: "Enhancing Compliance and Access Control through Advanced Encryption and Policy Management",
        icon: FileStack,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "5.1 MB",
        date: "October 2024",
        file: casestudyFiles[2],
      },
      {
        title: "Transforming Digital Archives",
        description: "A Case Study on Seamless Migration and Enhanced Efficiency with Datablize DMS",
        icon: FileSignature,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "2.9 MB",
        file: casestudyFiles[3],
      },
      {
        title: "EHR Digitization for Hospitals",
        description: "Achieving HIPAA Compliance and Operational Efficiency with AI-Powered EHR Digitization",
        icon: FileScan,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "3.5 MB",
        file: casestudyFiles[4],
      },
      {
        title: "G2C Document Automation",
        description: "State IT Department's Citizen Service Transformation with Datablize Analytics' G2C Automation Platform",
        icon: FileInput,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "4.7 MB",
        file: casestudyFiles[5],
      },
      {
        title: "Health Insurance Claims Automation",
        description: "Transforming Claims Processing with AI-Powered Automation",
        icon: FileKey,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "3.2 MB",
        file: casestudyFiles[6],
      },
      {
        title: "KYC & AML Automation",
        description: "Financial Institution's Compliance Transformation with Datablize Analytics",
        icon: FileText,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "5.3 MB",
        file: casestudyFiles[7],
      },
    ],
    guides: [
      {
        title: "DMS Buyer's Guide 2025",
        description: "Comprehensive guide for evaluating enterprise document management systems",
        icon: FileUp,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "6.2 MB",
        file: guideFiles[0],
      },
      {
        title: "Implementation Checklist",
        description: "Step-by-step guide for getting started with Datablize",
        icon: FileCheck,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "1.2 MB",
        file: guideFiles[1],
      },
      {
        title: "Workflow Automation Playbook",
        description: "Practical guide for admin and operations teams",
        icon: FilePen,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "3.4 MB",
        file: guideFiles[2],
      },
      {
        title: "DPDPA Compliance Template",
        description: "Data Processing Agreement template compliant with India's 2023 law",
        icon: FileKey,
        color: "from-primary-blue to-primary-orange",
        type: "DOCX",
        size: "0.8 MB",
        file: guideFiles[3],
      },
    ],
    productdocs: [
      {
        title: "Product Brochure",
        description: "Overview of features, capabilities and benefits",
        icon: FileText,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "8.4 MB",
        file: productdocsFiles[0],
      },
      {
        title: "DMS Handbook",
        description: "Complete reference guide for administrators",
        icon: BookOpen,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "12.1 MB",
        file: productdocsFiles[1],
      },
    ],
    faqs: [
      {
        title: "General FAQs",
        description: "Common questions about our products and services",
        icon: FileQuestion,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "1.1 MB",
        file: faqsFiles[0],
      },
      {
        title: "Implementation FAQs",
        description: "Questions about deployment and configuration",
        icon: FileOutput,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "0.9 MB",
        file: faqsFiles[1],
      },
      {
        title: "Compliance and Data Protection FAQs",
        description: "A Comprehensive Guide to Datablize Analytics' Robust Data Protection Strategies",
        icon: FileKey,
        color: "from-primary-blue to-primary-orange",
        type: "PDF",
        size: "0.9 MB",
        file: faqsFiles[2],
      },
    ],
    videos: [
      {
        title: "Product Overview Demo",
        description: "15-minute walkthrough of key features and capabilities",
        icon: Play,
        color: "from-primary-blue to-primary-orange",
        type: "Video",
        size: "45 MB",
        duration: "15:22",
      },
      {
        title: "Use Case: Insurance Claims",
        description: "How a leading insurer automated claims processing",
        icon: Film,
        color: "from-primary-blue to-primary-orange",
        type: "Video",
        size: "68 MB",
        duration: "22:15",
      },
    ],
  };

  // Function to handle preview
  const handlePreview = (file) => {
    if (!file) {
      alert('File not found. Please check the file path.');
      return;
    }
    const previewWindow = window.open(file, '_blank');
    if (!previewWindow) {
      alert('Unable to open preview. Please allow popups or check the file URL.');
    }
  };

  // Function to handle download
  const handleDownload = (file) => {
    if (!file) {
      alert('File not found. Please check the file path.');
      return;
    }
    const link = document.createElement('a');
    link.href = file;
    link.download = file.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-blue to-primary-orange bg-clip-text text-transparent pb-2">
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
                <h3 className="text-lg font-bold text-primary-dark transition-colors duration-300 mb-2">
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
                <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-2">
                  <button 
                    className="group flex items-center gap-2 text-primary-dark hover:text-primary-orange transition-colors duration-300"
                    onClick={() => handlePreview(resource.file)}
                  >
                    <span className="font-medium">Preview</span>
                    <ExternalLink size={16} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                  </button>
                  <button 
                    className="group flex items-center gap-2 text-primary-dark hover:text-primary-orange transition-colors duration-300"
                    onClick={() => handleDownload(resource.file)}
                  >
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

// Function to handle download
const handleDownload = (file) => {
  if (file) {
    const link = document.createElement('a');
    link.href = file;
    link.download = file.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

export default Resources;