import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Check, ChevronRight, Target, Users, 
  BarChart2, Shield, Zap, Globe, Flag, Heart, 
  FileText, Settings, Wrench, ClipboardList, FileDigit 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

// About Us Hero Section
const AboutHero = () => {
  const { themeConfig } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className={`relative flex items-center overflow-hidden min-h-full pt-20 pb-16 lg:pt-16 lg:pb-20 ${themeConfig.background}`}>
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 60}px`,
              height: `${20 + Math.random() * 60}px`,
              background: themeConfig.floatingOrbsBackground,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className={themeConfig.textPrimary}>About </span>
                <span className={`bg-gradient-to-r ${themeConfig.gradientText} bg-clip-text`}>
                  Datablize
                </span>
              </h1>
              <p className={`text-xl ${themeConfig.textPrimary}/80 max-w-2xl`}>
                Transforming enterprise data into actionable intelligence through AI-powered document solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link to="/contact">
                <button className={`group relative px-5 sm:px-6 py-2 sm:py-3 ${themeConfig.button.primary} rounded-lg sm:rounded-xl font-bold text-sm sm:text-md shadow-lg sm:shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300`}>
                  <div className={`absolute inset-0 ${themeConfig.button.hover} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                  <div className="relative flex items-center gap-2 sm:gap-3">
                    <span>Contact Us</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative max-w-md sm:max-w-lg mx-auto">
              <div className={`relative h-64 sm:h-80 md:h-96 w-full rounded-lg sm:rounded-xl overflow-hidden border-2 ${themeConfig.border} shadow-lg sm:shadow-xl ${themeConfig.heroOverlayGradient} backdrop-blur-sm flex items-center justify-center`}>
                <div className="text-center p-6 sm:p-8">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 ${themeConfig.featureIconBackground} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg`}>
                    <Users size={24} className={themeConfig.featureIconColor} />
                  </div>
                  <h3 className={`text-xl sm:text-2xl font-bold ${themeConfig.textInverted} mb-2 sm:mb-3`}>Our Story</h3>
                  <p className={`text-sm sm:text-base ${themeConfig.textInvertedSecondary}`}>
                    Founded by technologists with over 20 years of industry expertise, combining deep technical knowledge with user-first design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Who We Are Section
const WhoWeAre = () => {
  const { themeConfig } = useTheme();
  
  return (
    <section className={`py-20 ${themeConfig.sectionBackground}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${themeConfig.textPrimary}`}>Who We Are</h2>
          <div className={`w-24 h-1 ${themeConfig.gradientDivider} mx-auto rounded-full mb-6`}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className={`text-lg ${themeConfig.textSecondary}`}>
              At <span className="font-bold">Datablize Analytics Pvt. Ltd.</span>, we are a new-age technology company on a mission to unlock the true potential of enterprise data. We specialize in AI-powered Document Management, Intelligent Data Extraction, and Workflow Automation that help organizations drive smarter decisions, enhance compliance, and accelerate digital transformation.
            </p>
            <p className={`text-lg ${themeConfig.textSecondary}`}>
              Founded by experienced technologists with over two decades of industry expertise, Datablize combines deep technical knowledge with a user-first design philosophy — making complex document workflows simple, intelligent, and future-ready.
            </p>
          </div>
          
          <div className={`${themeConfig.cardBackground} rounded-3xl p-8 shadow-xl border ${themeConfig.border}`}>
            <div className="flex items-start gap-4 mb-6">
              <div className={`w-12 h-12 ${themeConfig.accentBackground} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <Target className={themeConfig.textInverted} size={20} />
              </div>
              <div>
                <h3 className={`text-xl font-bold ${themeConfig.textPrimary}`}>Our Name</h3>
                <p className={themeConfig.textSecondary}>
                  "Datablize" is a fusion of "Data" and "blize" — inspired by the verb-forming suffix in words like analyze, mobilize, and stabilize. It reflects our core purpose: to transform, enable, and activate data for intelligent enterprise use.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 ${themeConfig.accentBackgroundSecondary} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <Flag className={themeConfig.textInverted} size={20} />
              </div>
              <div>
                <h3 className={`text-xl font-bold ${themeConfig.textPrimary}`}>Make in India</h3>
                <p className={themeConfig.textSecondary}>
                  Proudly developed in India by a lean, passionate team of engineers, domain experts, and designers working toward one common goal: simplifying the complex world of enterprise document intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Our Mission Section
const OurMission = () => {
  const { themeConfig } = useTheme();
  
  return (
    <section className={`py-20 ${themeConfig.alternateSectionBackground}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${themeConfig.textPrimary}`}>Our Mission</h2>
          <div className={`w-24 h-1 ${themeConfig.gradientDivider} mx-auto rounded-full mb-6`}></div>
          <p className={`text-xl ${themeConfig.textSecondary} max-w-3xl mx-auto`}>
            To empower businesses with intelligent, secure, and scalable document solutions that transform unstructured data into actionable insights — enabling faster decisions, greater agility, and measurable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Document Intelligence",
              description: "AI-powered solutions that extract meaning from unstructured documents",
              icon: <FileText size={24} className={themeConfig.textPrimary} />,
              color: themeConfig.missionCardGradient1
            },
            {
              title: "Workflow Automation",
              description: "Streamline business processes with intelligent automation",
              icon: <Zap size={24} className={themeConfig.textPrimary} />,
              color: themeConfig.missionCardGradient2
            },
            {
              title: "Compliance & Security",
              description: "Enterprise-grade security and regulatory compliance built-in",
              icon: <Shield size={24} className={themeConfig.textPrimary} />,
              color: themeConfig.missionCardGradient3
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${themeConfig.cardBackground} rounded-2xl p-8 shadow-lg border ${themeConfig.border} hover:shadow-xl transition-shadow duration-300`}
            >
              <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                {item.icon}
              </div>
              <h3 className={`text-xl font-bold ${themeConfig.textPrimary} mb-3`}>{item.title}</h3>
              <p className={themeConfig.textSecondary}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Our Values Section
const OurValues = () => {
  const { themeConfig } = useTheme();
  
  return (
    <section className={`py-20 ${themeConfig.sectionBackground}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${themeConfig.textPrimary}`}>Our Values</h2>
          <div className={`w-24 h-1 ${themeConfig.gradientDivider} mx-auto rounded-full mb-6`}></div>
          <p className={`text-xl ${themeConfig.textSecondary} max-w-3xl mx-auto`}>
            These principles guide everything we do at Datablize
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Customer First",
              description: "We design solutions that solve real customer pain points, not just technology for technology's sake.",
              icon: <Heart size={20} className={themeConfig.textInverted} />,
              color: themeConfig.valueCardGradient1
            },
            {
              title: "Innovation",
              description: "We challenge the status quo and continuously push boundaries to deliver cutting-edge solutions.",
              icon: <Zap size={20} className={themeConfig.textInverted} />,
              color: themeConfig.valueCardGradient2
            },
            {
              title: "Integrity",
              description: "We build trust through transparency, honesty, and ethical business practices.",
              icon: <Shield size={20} className={themeConfig.textInverted} />,
              color: themeConfig.valueCardGradient3
            },
            {
              title: "Collaboration",
              description: "We believe the best solutions emerge from diverse perspectives working together.",
              icon: <Users size={20} className={themeConfig.textInverted} />,
              color: themeConfig.valueCardGradient4
            },
            {
              title: "Impact",
              description: "We measure success by the tangible value we create for our customers and society.",
              icon: <BarChart2 size={20} className={themeConfig.textInverted} />,
              color: themeConfig.valueCardGradient5
            },
            {
              title: "Global Mindset",
              description: "We build solutions that work locally but are designed for global scalability.",
              icon: <Globe size={20} className={themeConfig.textInverted} />,
              color: themeConfig.valueCardGradient6
            }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="h-full"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`h-full p-6 ${themeConfig.cardBackground} rounded-2xl shadow-lg border ${themeConfig.border} hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2`}>
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className={`text-lg font-bold ${themeConfig.textPrimary} mb-2`}>{item.title}</h3>
                <p className={`text-sm ${themeConfig.textSecondary} leading-relaxed`}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// What We Offer Section
const WhatWeOffer = () => {
  const { themeConfig } = useTheme();
  
  return (
    <section className={`py-20 ${themeConfig.alternateSectionBackground}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${themeConfig.textPrimary}`}>What We Offer</h2>
          <div className={`w-24 h-1 ${themeConfig.gradientDivider} mx-auto rounded-full mb-6`}></div>
          <p className={`text-xl ${themeConfig.textSecondary} max-w-3xl mx-auto`}>
            Comprehensive solutions for enterprise document intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "AI-Powered Document Management",
              description: "Next-generation DMS with built-in intelligence for classification, extraction, and analysis",
              icon: "🤖",
              color: themeConfig.offerCardGradient1
            },
            {
              title: "Intelligent Data Extraction",
              description: "Transform unstructured documents into structured, actionable data with our IDP solutions",
              icon: "🔍",
              color: themeConfig.offerCardGradient2
            },
            {
              title: "Workflow Automation",
              description: "Automate document-centric business processes end-to-end with configurable workflows",
              icon: "⚡",
              color: themeConfig.offerCardGradient3
            },
            {
              title: "Compliance Solutions",
              description: "Built-in compliance for DPDPA, GDPR, HIPAA and other regulatory frameworks",
              icon: "🛡️",
              color: themeConfig.offerCardGradient4
            },
            {
              title: "Enterprise Search",
              description: "Find any document or data point across your organization in seconds",
              icon: "🔎",
              color: themeConfig.offerCardGradient5
            },
            {
              title: "Integration Ecosystem",
              description: "Seamless connectivity with ERP, CRM, and legacy systems",
              icon: "🔄",
              color: themeConfig.offerCardGradient6
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${themeConfig.cardBackground} rounded-2xl p-8 shadow-lg border ${themeConfig.border} hover:shadow-xl transition-shadow duration-300`}
            >
              <div className={`text-4xl mb-4 ${item.color}`}>{item.icon}</div>
              <h3 className={`text-xl font-bold ${themeConfig.textPrimary} mb-3`}>{item.title}</h3>
              <p className={themeConfig.textSecondary}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Us Page Main Component
const About = () => {
  return (
    <div className="overflow-hidden">
      <AboutHero />
      <WhoWeAre />
      <OurMission />
      <OurValues />
      <WhatWeOffer />
    </div>
  );
};

export default About;