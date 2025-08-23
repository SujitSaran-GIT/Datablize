import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight, Zap, Shield, Search, Cloud, Bot, Smartphone, RefreshCw, BarChart2, Settings, Cpu, Eye, Clock, Lock, Brain, Database, Users, LayoutDashboard } from 'lucide-react';
import { FaUnlink } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
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
                >
                  AI Powered
                </motion.span>
                
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-primary-orange"
                >
                  Document Intelligence
                </motion.span>
                
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  for Modern Enterprises
                </motion.span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className={`text-md sm:text-lg lg:text-xl mb-4 font-medium leading-relaxed text-primary-blue`}>
                Transform your document chaos into a streamlined, intelligent workflow.
              </p>
              <p className={`text-sm sm:text-md leading-relaxed text-primary-dark`}>
                Datablize is a next-gen, cloud-native platform for intelligent document management.
                Built with adaptive AI and zero-touch automation, it empowers businesses to organize,
                analyze, and automate every document-driven process.
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

              <Link to={"/features"}>
                <motion.button 
                  className={`group px-5 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-sm sm:text-md transition-all duration-300 transform border border-primary-orange text-primary-dark hover:bg-primary-orange hover:text-primary-white`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2 sm:gap-3">
                    Explore Features
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative max-w-md sm:max-w-lg mx-auto">
              <motion.img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="AI Document Intelligence"
                className={`w-full h-auto rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl border-2 sm:border-4 border-primary-orange`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              />

              {/* Badge 1 */}
              <motion.div
                className={`absolute -top-3 -left-3 sm:-top-4 sm:-left-4 p-2 sm:p-3 rounded-md sm:rounded-lg shadow-sm sm:shadow-md border border-primary-orange bg-primary-white`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center bg-primary-orange text-primary-white`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className={`font-bold text-xs sm:text-sm text-primary-dark`}>AI-Powered</span>
                </div>
              </motion.div>

              {/* Badge 2 */}
              <motion.div
                className={`absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 p-2 sm:p-3 rounded-md sm:rounded-lg shadow-sm sm:shadow-md bg-gradient-to-r from-primary-blue to-primary-orange`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center bg-primary-white text-primary-dark`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <span className={`font-bold text-xs sm:text-sm text-primary-white`}>Document AI</span>
                </div>
              </motion.div>
            </div>
          </div>
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

  return (
    <section className={`relative py-12 overflow-hidden bg-primary-white`}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-6" // Reduced margin-bottom
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-3 bg-gradient-to-r from-primary-blue to-primary-orange bg-clip-text text-transparent`}>
            Why Choose Datablize Solution?
          </h2>
          <h3 className={`text-md sm:text-lg lg:text-xl font-medium mb-3 text-primary-dark`}>
            Is your organization still drowning in manual document processing?
          </h3>
          <div className={`w-12 h-1 mx-auto rounded-full mb-3 bg-gradient-to-r from-primary-blue to-primary-orange`}></div>
          <p className={`text-sm sm:text-base max-w-2xl mx-auto leading-relaxed text-primary-dark`}>
            Every hour spent on document management is an hour lost on innovation. Datablize's AI engine automatically processes documents, extracts insights, and streamlines workflows without human intervention.
          </p>
        </motion.div>

        <motion.div 
          className={`rounded-lg shadow-md overflow-hidden border border-primary-orange bg-primary-white max-h-96 overflow-y-auto mx-auto max-w-4xl`} // Added max height and scroll
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm"> 
              <thead>
                <tr className="bg-primary-light">
                  <th className="px-3 sm:px-4 py-2 text-left font-semibold tracking-wider text-primary-dark">
                    <div className="flex items-center gap-1">
                      <LayoutDashboard size={14} className="text-primary-blue" />
                      <span>Features</span>
                    </div>
                  </th>
                  <th className="px-3 sm:px-4 py-2 text-left font-semibold tracking-wider text-primary-dark">
                    <div className="flex items-center gap-1">
                      <Clock size={14} className="text-primary-orange opacity-60" />
                      <span>Traditional DMS</span>
                    </div>
                  </th>
                  <th className="px-3 sm:px-4 py-2 text-left font-semibold tracking-wider text-primary-dark">
                    <div className="flex items-center gap-1">
                      <Zap size={14} className="text-primary-orange" />
                      <span>Datablize</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className={`divide-y divide-primary-light`}>
                {tableData.map((row, index) => (
                  <motion.tr 
                    key={index} 
                    className={`transition-colors duration-200 hover:bg-primary-light`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <td className={`px-3 sm:px-4 py-2 whitespace-nowrap font-medium text-primary-dark`}>
                      {row.feature}
                    </td>
                    <td className={`px-3 sm:px-4 py-2 whitespace-normal text-primary-dark opacity-70`}>
                      <div className="flex items-start gap-1">
                        <div className={`w-1.5 h-1.5 mt-1 rounded-full flex-shrink-0 bg-primary-orange opacity-50`}></div>
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className={`px-3 sm:px-4 py-2 whitespace-normal text-primary-dark`}>
                      <div className="flex items-start gap-1">
                        <div className={`w-2.5 h-2.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-primary-orange`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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

        <motion.div 
          className="mt-6 text-center" // Reduced margin-top
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to={"/contact"}>
            <motion.button 
              className={`group px-4 sm:px-5 py-1.5 sm:py-2 rounded-lg font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-primary-blue to-primary-orange text-primary-white`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-1">
                Ready to Transform Your Documents?
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const showcaseFeatures = [
    { title: "Centralized Document Repository", description: "All your documents securely stored in one easily accessible location." },
    { title: "Fast & Intelligent Search", description: "Find any document instantly with AI-powered search capabilities." },
    { title: "Custom Workflow Automation", description: "Streamline your processes with tailored automation solutions." }
  ];

  const featureCardGroups = [
    [
      { icon: <Cloud size={24} />, text: "Centralized Repository" },
      { icon: <Search size={24} />, text: "Intelligent Search" },
      { icon: <Smartphone size={24} />, text: "Mobile-Friendly" },
      { icon: <Lock size={24} />, text: "End-to-End Encryption" }
    ],
    [
      { icon: <RefreshCw size={24} />, text: "Seamless Integrations" },
      { icon: <BarChart2 size={24} />, text: "Reporting & Analytics" },
      { icon: <Settings size={24} />, text: "Workflow Automation" },
      { icon: <Cloud size={24} />, text: "Auto Backup" }
    ],
    [
      { icon: <Cpu size={24} />, text: "AI Processing" },
      { icon: <FaUnlink size={24} />, text: "Smart Linking" },
      { icon: <Eye size={24} />, text: "Visual Recognition" },
      { icon: <Clock size={24} />, text: "Time Tracking" }
    ]
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % showcaseFeatures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-primary-white to-primary-light">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className={`backdrop-blur-xl rounded-xl shadow-xl p-6 lg:p-8 bg-primary-white border border-primary-orange`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left Column - Text Content */}
              <div className="lg:w-1/2 flex flex-col justify-center">
                <div>
                  <motion.div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg bg-primary-orange"
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Bot size={28} className="text-primary-white" />
                  </motion.div>

                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left text-primary-dark">
                    Your Intelligent Document Infrastructure
                  </h2>

                  <motion.div
                    key={activeFeature}
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl lg:text-2xl font-bold mb-3 text-center lg:text-left text-primary-blue">
                      {showcaseFeatures[activeFeature].title}
                    </h3>
                    <p className="text-lg leading-relaxed text-center lg:text-left text-primary-dark">
                      {showcaseFeatures[activeFeature].description}
                    </p>
                  </motion.div>

                  {/* Feature Indicators */}
                  <div className="flex justify-center lg:justify-start gap-2 mb-6">
                    {showcaseFeatures.map((_, index) => (
                      <button
                        key={index}
                        className={`h-2 rounded-full transition-all duration-300 ${index === activeFeature ? 'w-6 bg-primary-orange' : 'w-2 bg-primary-light'}`}
                        onClick={() => setActiveFeature(index)}
                      />
                    ))}
                  </div>
                </div>

                <Link to={"/contact"} className="w-full lg:w-auto">
                  <motion.button
                    className="group w-full px-6 py-3 rounded-xl font-bold text-md shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary-blue to-primary-orange text-primary-white"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Get Started Today
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </motion.button>
                </Link>
              </div>

              {/* Right Column - Feature Cards */}
              <div className="lg:w-1/2">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {featureCardGroups.map((group, groupIndex) => (
                    <motion.div
                      key={groupIndex}
                      className="space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: groupIndex * 0.2 }}
                    >
                      {group.map((card, cardIndex) => (
                        <motion.div
                          key={cardIndex}
                          className="p-4 rounded-lg bg-primary-light border border-primary-orange shadow-sm hover:shadow-md transition-all duration-300"
                          whileHover={{ y: -5, backgroundColor: "#fca311", color: "#ffffff" }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-md bg-primary-orange text-primary-white">
                              {card.icon}
                            </div>
                            <span className="text-sm font-medium">{card.text}</span>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeaturesGrid = () => {
  const features = [
    {
      icon: <Brain size={24} />,
      title: "Intelligent Document Analysis",
      description: "AI automatically classifies, extracts key information, and summarizes documents, reducing processing time by 93%.",
    },
    {
      icon: <Zap size={24} />,
      title: "Zero-Touch Workflows",
      description: "Automated processes route documents, notify stakeholders, and trigger actions based on content—without manual intervention.",
    },
    {
      icon: <Search size={24} />,
      title: "Predictive Discovery",
      description: "AI anticipates document needs based on your behavior patterns and surfaces relevant content before you search.",
    },
    {
      icon: <Shield size={24} />,
      title: "Adaptive Security",
      description: "Context-aware protection automatically adjusts access controls based on document sensitivity and user behavior.",
    },
    {
      icon: <Database size={24} />,
      title: "Knowledge Network",
      description: "AI connects related documents across silos, exposing hidden relationships and building your organizational knowledge graph.",
    },
    {
      icon: <Users size={24} />,
      title: "Intelligent Collaboration",
      description: "Smart sharing suggests relevant collaborators and automatically manages permissions as projects evolve.",
    },
    {
      icon: <Clock size={24} />,
      title: "Time Reclamation",
      description: "Automated processing gives teams back 15+ hours per week previously spent on document management tasks.",
    },
    {
      icon: <LayoutDashboard size={24} />,
      title: "Insight Analytics",
      description: "AI surfaces patterns and anomalies across your document corpus, revealing business trends you'd otherwise miss.",
    }
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-primary-white to-primary-light">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-blue to-primary-orange bg-clip-text text-transparent pb-2">
            The Intelligent Document Revolution
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full mb-4 bg-gradient-to-r from-primary-blue to-primary-orange"></div>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-primary-dark">
            Our AI-powered platform transforms static documents into dynamic knowledge assets that work for you—not the other way around.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-primary-white border border-primary-orange"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -5, 
                scale: 1.02,
                backgroundColor: "#f3f7f8",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-gradient-to-r from-primary-blue to-primary-orange text-primary-white"
                transition={{ duration: 0.2 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg font-semibold mb-2 text-primary-dark">
                {feature.title}
              </h3>
              <p className="text-sm text-primary-dark opacity-80">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/contact">
            <motion.button 
              className="group px-6 py-3 rounded-xl font-bold text-md shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-primary-blue to-primary-orange text-primary-white"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-2">
                Explore All Features
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// Main Home Page Component
const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ComparisonTable />
      <FeatureShowcase />
      <FeaturesGrid />
    </div>
  );
};

export default Home;