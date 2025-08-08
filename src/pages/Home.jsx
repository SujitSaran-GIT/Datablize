import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight, Zap, Shield, Search, Cloud, Bot, Smartphone, RefreshCw, BarChart2, Settings, Cpu, Eye, Clock, Lock, Brain, Database, Users, LayoutDashboard } from 'lucide-react';
import { FaUnlink } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const HeroSection = () => {
  const { themeConfig } = useTheme();
  
  return (
    <section className={`relative flex items-center overflow-hidden min-h-full pt-20 pb-16 lg:pt-16 lg:pb-20 ${themeConfig.background}`}>
      <div className="container mx-auto px-4 sm:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className={`bg-gradient-to-r ${themeConfig.gradientText} bg-clip-text`}>
                  AI Powered
                </span>
                <br />
                <span className={themeConfig.textPrimary}>Document Intelligence</span>
                <br />
                <span className={`bg-gradient-to-r ${themeConfig.gradientTextSecondary} bg-clip-text`}>
                  for Modern Enterprises
                </span>
              </h1>
            </div>

            <div>
              <p className={`text-md sm:text-lg lg:text-xl mb-4 ${themeConfig.textPrimary}/80 font-medium leading-relaxed`}>
                Transform your document chaos into a streamlined, intelligent workflow.
              </p>
              <p className={`text-sm sm:text-md ${themeConfig.textPrimary}/70 leading-relaxed`}>
                Datablize is a next-gen, cloud-native platform for intelligent document management.
                Built with adaptive AI and zero-touch automation, it empowers businesses to organize,
                analyze, and automate every document-driven process.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link to="/contact">
                <button className={`group relative px-5 sm:px-6 py-2 sm:py-3 ${themeConfig.button.primary} rounded-lg sm:rounded-xl font-bold text-sm sm:text-md shadow-lg sm:shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300`}>
                  <div className={`absolute inset-0 ${themeConfig.button.hover} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                  <div className="relative flex items-center gap-2 sm:gap-3">
                    <span>Request a Demo</span>
                  </div>
                </button>
              </Link>

              <Link to={"/features"}>
                <button className={`group px-5 sm:px-6 py-2 sm:py-3 ${themeConfig.button.secondary} rounded-lg sm:rounded-xl font-bold text-sm sm:text-md transition-all duration-300 transform hover:scale-105`}>
                  <span className="flex items-center gap-2 sm:gap-3">
                    Explore Features
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative max-w-md sm:max-w-lg mx-auto">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="AI Document Intelligence"
                className={`w-full h-auto rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl border-2 sm:border-4 ${themeConfig.border}`}
              />

              {/* Badge 1 */}
              <div className={`absolute -top-3 -left-3 sm:-top-4 sm:-left-4 ${themeConfig.cardBackground} p-2 sm:p-3 rounded-md sm:rounded-lg shadow-sm sm:shadow-md border ${themeConfig.border}`}>
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className={`w-5 h-5 sm:w-6 sm:h-6 ${themeConfig.accentBackground} rounded-full flex items-center justify-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className={`font-bold text-xs sm:text-sm ${themeConfig.textPrimary}`}>AI-Powered</span>
                </div>
              </div>

              {/* Badge 2 */}
              <div className={`absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 ${themeConfig.button.primary} p-2 sm:p-3 rounded-md sm:rounded-lg shadow-sm sm:shadow-md`}>
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className={`w-5 h-5 sm:w-6 sm:h-6 ${themeConfig.cardBackground} rounded-full flex items-center justify-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <span className={`font-bold text-xs sm:text-sm ${themeConfig.textInverted}`}>Document AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ComparisonTable = () => {
  const { themeConfig } = useTheme();
  
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
    <section className={`relative py-12 ${themeConfig.sectionBackground} overflow-hidden`}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8">
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 ${themeConfig.gradientText}`}>
            Why Choose Datablize Solution?
          </h2>
          <h3 className={`text-lg sm:text-xl lg:text-2xl font-medium ${themeConfig.textPrimary} mb-4`}>
            Is your organization still drowning in manual document processing?
          </h3>
          <div className={`w-16 h-1 ${themeConfig.gradientDivider} mx-auto rounded-full mb-4`}></div>
          <p className={`text-base sm:text-lg ${themeConfig.textSecondary} max-w-3xl mx-auto leading-relaxed`}>
            Every hour spent on document management is an hour lost on innovation. Datablize's AI engine automatically processes documents, extracts insights, and streamlines workflows without human intervention.
          </p>
        </div>

        <div className={`${themeConfig.cardBackground} backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border ${themeConfig.border}`}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`${themeConfig.tableHeader}`}>
                  <th className="px-4 sm:px-6 py-3 text-left font-semibold text-sm sm:text-base tracking-wider">
                    <div className="flex items-center gap-2">
                      <LayoutDashboard className={themeConfig.tableIcon} size={16} />
                      <span>Features</span>
                    </div>
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left font-semibold text-sm sm:text-base tracking-wider">
                    <div className="flex items-center gap-2">
                      <Clock className={themeConfig.tableIcon} size={16} />
                      <span>Traditional DMS</span>
                    </div>
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left font-semibold text-sm sm:text-base tracking-wider">
                    <div className="flex items-center gap-2">
                      <Zap className={themeConfig.tableIcon} size={16} />
                      <span>Datablize</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className={`divide-y ${themeConfig.tableDivider}`}>
                {tableData.map((row, index) => (
                  <tr key={index} className={`hover:${themeConfig.tableRowHover} transition-colors duration-200`}>
                    <td className={`px-4 sm:px-6 py-3 whitespace-nowrap font-medium ${themeConfig.textPrimary} text-sm sm:text-base`}>
                      {row.feature}
                    </td>
                    <td className={`px-4 sm:px-6 py-3 whitespace-normal ${themeConfig.textSecondary}`}>
                      <div className="flex items-start gap-2">
                        <div className={`w-2 h-2 mt-1.5 rounded-full ${themeConfig.bulletPoint} flex-shrink-0`}></div>
                        <span className="text-xs sm:text-sm">{row.traditional}</span>
                      </div>
                    </td>
                    <td className={`px-4 sm:px-6 py-3 whitespace-normal ${themeConfig.textPrimary}`}>
                      <div className="flex items-start gap-2">
                        <div className={`w-3 h-3 sm:w-4 sm:h-4 ${themeConfig.checkmarkBackground} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={themeConfig.checkmarkIcon} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="font-medium text-xs sm:text-sm">{row.datablize}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/contact">
            <button className={`group px-5 sm:px-6 py-2 sm:py-3 ${themeConfig.button.primary} rounded-lg font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300`}>
              <span className="flex items-center justify-center gap-2">
                Ready to Transform Your Documents?
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const FeatureShowcase = () => {
  const { themeConfig } = useTheme();
  const [activeFeature, setActiveFeature] = useState(0);

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
      { icon: <FaUnlink size={24} />, text: "Smart Linking", color: "from-[#FDF5AA] to-[#FFD166]" },
      { icon: <Eye size={24} />, text: "Visual Recognition", color: "from-[#A1C4FD] to-[#C2E9FB]" },
      { icon: <Clock size={24} />, text: "Time Tracking", color: "from-[#84FAB0] to-[#8FD3F4]" }
    ]
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % showcaseFeatures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`relative py-16 overflow-hidden ${themeConfig.featureShowcaseBackground}`}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`${themeConfig.featureShowcaseCard} backdrop-blur-xl border ${themeConfig.border} p-6 lg:p-8 rounded-xl shadow-xl`}>
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left Column - Text Content */}
              <div className="lg:w-1/2 flex flex-col justify-center">
                <div>
                  <div className={`w-16 h-16 ${themeConfig.featureShowcaseIconBackground} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <Bot size={28} className={themeConfig.featureShowcaseIconColor} />
                  </div>

                  <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${themeConfig.textInverted} text-center lg:text-left`}>
                    Your Intelligent Document Infrastructure
                  </h2>

                  <div key={activeFeature} className="mb-4">
                    <h3 className={`text-xl lg:text-2xl font-bold mb-3 ${themeConfig.featureShowcaseHighlight} text-center lg:text-left`}>
                      {showcaseFeatures[activeFeature].title}
                    </h3>
                    <p className={`text-lg ${themeConfig.textInvertedSecondary} leading-relaxed text-center lg:text-left`}>
                      {showcaseFeatures[activeFeature].description}
                    </p>
                  </div>

                  {/* Feature Indicators */}
                  <div className="flex justify-center lg:justify-start gap-2 mb-6">
                    {showcaseFeatures.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeFeature ? `${themeConfig.featureShowcaseActiveIndicator} w-6` : themeConfig.featureShowcaseInactiveIndicator}`}
                        onClick={() => setActiveFeature(index)}
                      />
                    ))}
                  </div>
                </div>

                <Link to={"/contact"} className="w-full lg:w-auto">
                  <button className={`group w-full px-6 py-3 ${themeConfig.featureShowcaseButton} rounded-xl font-bold text-md shadow-lg hover:shadow-xl transition-all duration-300`}>
                    <div className="flex items-center justify-center gap-2">
                      Get Started Today
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </button>
                </Link>
              </div>

              {/* Right Column - Feature Cards */}
              <div className="lg:w-1/2 relative overflow-hidden">
                <div className="grid grid-cols-2 gap-3 h-full">
                  {featureCardGroups[activeFeature].map((feature, index) => (
                    <div
                      key={`${activeFeature}-${index}`}
                      className={`bg-gradient-to-br ${feature.color} rounded-lg p-3 text-white shadow-md cursor-pointer h-full flex flex-col items-center justify-center hover:-translate-y-1 transition-transform`}
                    >
                      <div className="mb-1">
                        {feature.icon}
                      </div>
                      <span className="font-medium text-sm text-center">{feature.text}</span>
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

const TransformationBanner = () => {
  const { themeConfig } = useTheme();
  
  return (
    <section className={`relative py-16 overflow-hidden ${themeConfig.transformationBannerBackground}`}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`${themeConfig.transformationBannerCard} backdrop-blur-lg border ${themeConfig.border} rounded-xl p-8 shadow-xl overflow-hidden`}>
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Left Column - Text Content */}
              <div className="lg:w-1/2">
                <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${themeConfig.textInverted}`}>
                  Intelligence That <span className={themeConfig.transformationBannerHighlight}>Transforms</span> Work
                </h2>
                <p className={`text-lg ${themeConfig.textInvertedSecondary} mb-6 leading-relaxed`}>
                  Experience the power of AI-driven document processing that adapts to your business needs,
                  automating complex workflows and delivering actionable insights in real-time.
                </p>
                <Link to="/use-cases">
                  <button className={`group px-6 py-3 ${themeConfig.button.primary} rounded-xl font-bold text-md shadow-lg hover:shadow-xl transition-all duration-300`}>
                    <span className="flex items-center justify-center gap-2">
                      Discover the Possibilities
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </Link>
              </div>

              {/* Right Column - Static Image */}
              <div className="lg:w-1/2 relative">
                <div className={`relative w-full aspect-video ${themeConfig.transformationBannerImageBackground} rounded-lg overflow-hidden border ${themeConfig.border} flex items-center justify-center`}>
                  <img
                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
                    alt="AI Document Processing"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesGrid = () => {
  const { themeConfig } = useTheme();
  
  return (
    <section className={`py-12 px-4 ${themeConfig.featuresGridBackground}`}>
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${themeConfig.textInverted}`}>
            The Intelligent Document Revolution
          </h2>
          <p className={`text-md ${themeConfig.textInvertedSecondary} max-w-2xl mx-auto`}>
            Our AI-powered platform transforms static documents into dynamic knowledge assets that work for you—not the other way around.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              className={`${themeConfig.featureCardBackground} backdrop-blur-sm rounded-lg p-4 border ${themeConfig.border} shadow-md hover:shadow-lg transition-all hover:-translate-y-1`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`inline-flex items-center justify-center w-10 h-10 ${feature.bgColor} ${feature.textColor} rounded-md mb-3`}>
                {feature.icon}
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${themeConfig.textInverted}`}>{feature.title}</h3>
              <p className={`text-sm ${themeConfig.textInvertedSecondary}`}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ComparisonTable />
      <FeatureShowcase />
      <TransformationBanner />
      <FeaturesGrid />
    </div>
  );
};

export default Home;