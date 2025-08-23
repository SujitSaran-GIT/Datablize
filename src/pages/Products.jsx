import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight, FileText, Cpu, Workflow, Search, Scan, Lock, Key, Activity, Clock, Fingerprint, Shield, Cloud, Zap, Bot, ShieldCheck, Users, Database, Network, BarChart2, Smartphone, Server, Check, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductsHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const products = [
    "Document AI Processor",
    "Intelligent Workflow Engine",
    "Knowledge Graph Builder",
    "Secure Compliance Guardian"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex items-center overflow-hidden min-h-full pt-20 pb-16 lg:pt-16 lg:pb-20 bg-gradient-to-br from-primary-white to-primary-light">
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
                  Our{" "}
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-primary-orange"
                  >
                    AI-Driven Product
                  </motion.span>
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Suite for Intelligent
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Document Ecosystems
                </motion.span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className={`text-md sm:text-lg lg:text-xl mb-4 font-medium leading-relaxed text-primary-blue`}>
                Specialized AI solutions designed to transform every aspect of your document workflow.
              </p>
              <p className={`text-sm sm:text-md leading-relaxed text-primary-dark`}>
                From automated classification to intelligent data extraction, our products work together
                to create a seamless document management experience.
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
                    View All Features
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
                  {products.map((product, idx) => (
                    <motion.div
                      key={product}
                      className={`absolute inset-0 flex items-center justify-center p-6 sm:p-8`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeIndex === idx ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-center">
                        <motion.div
                          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-primary-orange rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg"
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {[
                            <FileText size={24} className="text-primary-white" />,
                            <Workflow size={24} className="text-primary-white" />,
                            <Cloud size={24} className="text-primary-white" />,
                            <Shield size={24} className="text-primary-white" />
                          ][idx]}
                        </motion.div>
                        <h3 className={`text-xl sm:text-2xl font-bold text-primary-blue mb-2 sm:mb-3`}>{product}</h3>
                        <p className={`text-sm sm:text-base text-primary-blue`}>
                          {[
                            "AI-powered document processing at scale",
                            "Automate complex document workflows",
                            "Connect insights across your document universe",
                            "Enterprise-grade security and compliance"
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

// Simple Tabs Navigation Component for Products
const ProductsTabsNavigation = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {tabs.map((tab) => (
        <motion.button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
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

// Products Tabs Section
const ProductsTabs = () => {
  const [activeTab, setActiveTab] = useState('docuverse');

  const tabs = [
    { id: 'docuverse', label: 'Docuverse IDP', icon: FileText },
    { id: 'guardian', label: 'Guardian Auth', icon: Shield },
    { id: 'workflow', label: 'Workflow Engine', icon: Workflow },
    { id: 'analytics', label: 'Analytics Suite', icon: BarChart2 }
  ];

  const products = {
    docuverse: [
      {
        title: "Document Management System",
        description: "AI-powered platform to organize, version, secure, and approve documents at scale.",
        icon: FileText,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Intelligent Document Processing",
        description: "Automate classification, data extraction, and validation across multiple formats.",
        icon: Cpu,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Business Process Management",
        description: "Design, automate, and monitor workflows that align with your business goals.",
        icon: Workflow,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Context-Aware Data Extraction",
        description: "Extract data intelligently using semantics, context, and layout-aware algorithms.",
        icon: Search,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Optical Character Recognition",
        description: "Convert scanned images and PDFs into searchable, structured information.",
        icon: Scan,
        color: "from-primary-blue to-primary-orange"
      }
    ],
    guardian: [
      {
        title: "Multi-Factor Authentication",
        description: "Protect access using OTPs, authenticator apps, and biometric options.",
        icon: Lock,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Advanced Password Security",
        description: "Enforced complexity policies with salted hashing and reuse restrictions.",
        icon: Key,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "JWT-Based Authentication",
        description: "Stateless, secure, and scalable session management with JSON Web Tokens.",
        icon: Cpu,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Comprehensive Audit Logging",
        description: "Real-time logging of authentication attempts and session activities.",
        icon: Activity,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Session & Rate Limit Controls",
        description: "Prevent brute-force and abuse attacks with built-in rate limiting.",
        icon: Clock,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Biometric Authentication",
        description: "Support for fingerprint, facial recognition, and third-party biometric devices.",
        icon: Fingerprint,
        color: "from-primary-blue to-primary-orange"
      }
    ],
    workflow: [
      {
        title: "Visual Workflow Builder",
        description: "Drag-and-drop interface for designing complex document workflows.",
        icon: Workflow,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Conditional Logic Engine",
        description: "Smart routing based on document content, metadata, and business rules.",
        icon: Cpu,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Approval Automation",
        description: "Streamline review and approval processes with automated notifications.",
        icon: Check,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Integration Hub",
        description: "Connect with existing systems and applications seamlessly.",
        icon: Network,
        color: "from-primary-blue to-primary-orange"
      }
    ],
    analytics: [
      {
        title: "Usage Analytics",
        description: "Comprehensive insights into document usage patterns and user behavior.",
        icon: BarChart2,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Performance Metrics",
        description: "Track system performance, processing times, and workflow efficiency.",
        icon: Activity,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Custom Reporting",
        description: "Create tailored reports for different stakeholders and use cases.",
        icon: FileText,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Real-time Dashboard",
        description: "Live monitoring of document processing and system health.",
        icon: LayoutDashboard,
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
            Our Product Ecosystem
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-blue to-primary-orange mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-primary-dark max-w-3xl mx-auto">
            A comprehensive suite of AI-powered products designed to work together seamlessly.
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <ProductsTabsNavigation
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Tab Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products[activeTab].map((product, index) => (
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
                <div className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center mb-4`}>
                  <product.icon size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary-dark mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-primary-dark leading-relaxed">
                  {product.description}
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
            <h3 className="text-xl font-bold mb-2 text-primary-white">Ready to Transform Your Document Workflows?</h3>
            <p className="mb-4 text-primary-light text-sm">
              Our product suite offers everything you need for intelligent document management.
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

const Products = () => {
  return (
    <div className="overflow-hidden">
      <ProductsHero />
      <ProductsTabs />
    </div>
  );
};

export default Products;