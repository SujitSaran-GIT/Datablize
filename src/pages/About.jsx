import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Check, ChevronRight, Target, Users, 
  BarChart2, Shield, Zap, Globe, Flag, Heart, 
  FileText, Settings, Wrench, ClipboardList, FileDigit,
  Brain, Cloud, Search, Smartphone, Lock, Cpu, Eye, Clock, Database, LayoutDashboard
} from 'lucide-react';

// About Us Hero Section
const AboutHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
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
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-primary-blue">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  About{" "}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-gradient-to-r from-primary-blue to-primary-orange text-transparent bg-clip-text"
                >
                  Datablize
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-primary-blue/80 max-w-2xl"
              >
                Transforming enterprise data into actionable intelligence through AI-powered document solutions.
              </motion.p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link to="/contact">
                <motion.button 
                  className={`group relative px-5 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-sm sm:text-md shadow-lg sm:shadow-xl overflow-hidden transform transition-all duration-300 bg-gradient-to-r from-primary-blue to-primary-orange text-primary-white`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-gradient-to-r from-primary-orange to-primary-blue`}></div>
                  <div className="relative flex items-center gap-2 sm:gap-3">
                    <span>Contact Us</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative max-w-md sm:max-w-lg mx-auto">
              <motion.div
                className={`relative h-64 sm:h-80 md:h-96 w-full rounded-lg sm:rounded-xl overflow-hidden border-2 border-primary-orange shadow-lg sm:shadow-xl bg-gradient-to-br from-primary-blue/20 to-primary-orange/20 backdrop-blur-sm flex items-center justify-center`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                <div className="text-center p-6 sm:p-8">
                  <motion.div
                    className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-primary-orange rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg`}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Users size={24} className="text-primary-white" />
                  </motion.div>
                  <h3 className={`text-xl sm:text-2xl font-bold text-primary-blue mb-2 sm:mb-3`}>Our Story</h3>
                  <p className={`text-sm sm:text-base text-primary-blue`}>
                    Founded by technologists with over 20 years of industry expertise, combining deep technical knowledge with user-first design.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Who We Are Section
const WhoWeAre = () => {
  return (
    <section className="py-20 bg-primary-light">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-blue to-primary-orange bg-clip-text text-transparent pb-2">Who We Are</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-primary-orange mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-slate-600">
              At <span className="font-bold text-primary-dark">Datablize Analytics Pvt. Ltd.</span>, we are a new-age technology company on a mission to unlock the true potential of enterprise data. We specialize in AI-powered Document Management, Intelligent Data Extraction, and Workflow Automation that help organizations drive smarter decisions, enhance compliance, and accelerate digital transformation.
            </p>
            <p className="text-lg text-slate-600">
              Founded by experienced technologists with over two decades of industry expertise, Datablize combines deep technical knowledge with a user-first design philosophy — making complex document workflows simple, intelligent, and future-ready.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-primary-white rounded-3xl p-8 shadow-xl border border-primary-orange/20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-blue to-primary-orange rounded-xl flex items-center justify-center flex-shrink-0">
                <Target className="text-primary-white" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-dark">Our Name</h3>
                <p className="text-slate-600">
                  "Datablize" is a fusion of "Data" and "blize" — inspired by the verb-forming suffix in words like analyze, mobilize, and stabilize. It reflects our core purpose: to transform, enable, and activate data for intelligent enterprise use.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-blue to-primary-orange rounded-xl flex items-center justify-center flex-shrink-0">
                <Flag className="text-primary-white" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-dark">Make in India</h3>
                <p className="text-slate-600">
                  Proudly developed in India by a lean, passionate team of engineers, domain experts, and designers working toward one common goal: simplifying the complex world of enterprise document intelligence.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Our Mission Section
const OurMission = () => {
  return (
    <section className="py-20 bg-primary-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-blue to-primary-orange bg-clip-text text-transparent pb-2">Our Mission</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-primary-orange mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            To empower businesses with intelligent, secure, and scalable document solutions that transform unstructured data into actionable insights — enabling faster decisions, greater agility, and measurable impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Document Intelligence",
              description: "AI-powered solutions that extract meaning from unstructured documents",
              icon: <FileText size={24} className="text-primary-white" />,
              color: "from-primary-blue to-primary-orange"
            },
            {
              title: "Workflow Automation",
              description: "Streamline business processes with intelligent automation",
              icon: <Zap size={24} className="text-primary-white" />,
              color: "from-primary-blue to-primary-orange"
            },
            {
              title: "Compliance & Security",
              description: "Enterprise-grade security and regulatory compliance built-in",
              icon: <Shield size={24} className="text-primary-white" />,
              color: "from-primary-blue to-primary-orange"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary-white rounded-2xl p-8 shadow-lg border border-primary-orange/20 hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Our Values Section
const OurValues = () => {
  return (
    <section className="py-20 bg-primary-light">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-blue to-primary-orange bg-clip-text text-transparent pb-2">Our Values</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-primary-orange mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            These principles guide everything we do at Datablize
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Customer First",
              description: "We design solutions that solve real customer pain points, not just technology for technology's sake.",
              icon: <Heart size={20} className="text-primary-white" />,
              color: "from-primary-blue to-primary-orange"
            },
            {
              title: "Innovation",
              description: "We challenge the status quo and continuously push boundaries to deliver cutting-edge solutions.",
              icon: <Zap size={20} className="text-primary-white" />,
              color: "from-primary-blue to-primary-orange"
            },
            {
              title: "Integrity",
              description: "We build trust through transparency, honesty, and ethical business practices.",
              icon: <Shield size={20} className="text-primary-white" />,
              color: "from-primary-blue to-primary-orange"
            },
            {
              title: "Collaboration",
              description: "We believe the best solutions emerge from diverse perspectives working together.",
              icon: <Users size={20} className="text-primary-white" />,
              color: "from-primary-blue to-primary-orange"
            },
            {
              title: "Impact",
              description: "We measure success by the tangible value we create for our customers and society.",
              icon: <BarChart2 size={20} className="text-primary-white" />,
              color: "from-primary-blue to-primary-orange"
            },
            {
              title: "Global Mindset",
              description: "We build solutions that work locally but are designed for global scalability.",
              icon: <Globe size={20} className="text-primary-white" />,
              color: "from-primary-blue to-primary-orange"
            }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-full p-6 bg-primary-white rounded-2xl shadow-lg border border-primary-orange/20 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-primary-dark mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
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
  return (
    <section className="py-20 bg-primary-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-blue to-primary-orange bg-clip-text text-transparent pb-2">What We Offer</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-primary-orange mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive solutions for enterprise document intelligence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "AI-Powered Document Management",
              description: "Next-generation DMS with built-in intelligence for classification, extraction, and analysis",
              icon: Brain,
              color: "from-primary-blue to-primary-orange"
            },
            {
              title: "Intelligent Data Extraction",
              description: "Transform unstructured documents into structured, actionable data with our IDP solutions",
              icon: FileDigit,
              color: "from-primary-blue to-primary-orange"
            },
            {
              title: "Workflow Automation",
              description: "Automate document-centric business processes end-to-end with configurable workflows",
              icon: Zap,
              color: "from-primary-blue to-primary-orange"
            },
            {
              title: "Compliance Solutions",
              description: "Built-in compliance for DPDPA, GDPR, HIPAA and other regulatory frameworks",
              icon: Shield,
              color: "from-primary-blue to-primary-orange"
            },
            {
              title: "Enterprise Search",
              description: "Find any document or data point across your organization in seconds",
              icon: Search,
              color: "from-primary-blue to-primary-orange"
            },
            {
              title: "Integration Ecosystem",
              description: "Seamless connectivity with ERP, CRM, and legacy systems",
              icon: Settings,
              color: "from-primary-blue to-primary-orange"
            }
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary-white rounded-2xl p-8 shadow-lg border border-primary-orange/20 hover:shadow-xl transition-shadow duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            );
          })}
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