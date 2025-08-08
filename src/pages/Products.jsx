import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight, FileText, Cpu, Workflow, Search, Scan, Lock, Key, Activity, Clock, Fingerprint, Shield, Cloud, Zap, Bot, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const ProductsHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { themeConfig } = useTheme();
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
    <section className={`relative flex items-center overflow-hidden min-h-full pt-20 pb-16 lg:pt-16 lg:pb-20 ${themeConfig.background}`}>
      <div className="container mx-auto px-4 sm:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className={themeConfig.textPrimary}>Our </span>
                <span className={`bg-gradient-to-r ${themeConfig.gradientText} bg-clip-text`}>
                  AI-Driven Products
                </span>
                <br />
                <span className={themeConfig.textPrimary}>for Intelligent</span>
                <br />
                <span className={`bg-gradient-to-r ${themeConfig.gradientTextSecondary} bg-clip-text`}>
                  Document Ecosystems
                </span>
              </h1>
            </div>

            <div>
              <p className={`text-md sm:text-lg lg:text-xl mb-4 ${themeConfig.textPrimary}/80 font-medium leading-relaxed`}>
                Specialized AI solutions designed to transform every aspect of your document workflow.
              </p>
              <p className={`text-sm sm:text-md ${themeConfig.textPrimary}/70 leading-relaxed`}>
                From automated classification to intelligent data extraction, our products work together
                to create a seamless document management experience.
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

              <Link to={"/products"}>
                <button className={`group px-5 sm:px-6 py-2 sm:py-3 ${themeConfig.button.secondary} rounded-lg sm:rounded-xl font-bold text-sm sm:text-md transition-all duration-300 transform hover:scale-105`}>
                  <span className="flex items-center gap-2 sm:gap-3">
                    View All Products
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
                <div className={`absolute inset-0 ${themeConfig.cardBackground} backdrop-blur-sm`}>
                  {products.map((product, idx) => (
                    <div
                      key={product}
                      className={`absolute inset-0 flex items-center justify-center p-6 sm:p-8 transition-opacity duration-500 ${activeIndex === idx ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <div className="text-center">
                        <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 ${themeConfig.accentBackground} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg`}>
                          {[
                            <FileText size={24} className={themeConfig.textInverted} />,
                            <Workflow size={24} className={themeConfig.textInverted} />,
                            <Cloud size={24} className={themeConfig.textInverted} />,
                            <Shield size={24} className={themeConfig.textInverted} />
                          ][idx]}
                        </div>
                        <h3 className={`text-xl sm:text-2xl font-bold ${themeConfig.textPrimary} mb-2 sm:mb-3`}>{product}</h3>
                        <p className={`text-sm sm:text-base ${themeConfig.textPrimary}/80`}>
                          {[
                            "AI-powered document processing at scale",
                            "Automate complex document workflows",
                            "Connect insights across your document universe",
                            "Enterprise-grade security and compliance"
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

const DocuverseIDP = () => {
  const { themeConfig } = useTheme();
  const features = [
    {
      title: "Document Management System (DMS)",
      description: "AI-powered platform to organize, version, secure, and approve documents at scale.",
      icon: FileText,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Intelligent Document Processing (IDP)",
      description: "Automate classification, data extraction, and validation across multiple document formats.",
      icon: Cpu,
      color: "from-yellow-300 to-amber-400"
    },
    {
      title: "Business Process Management (BPM)",
      description: "Design, automate, and monitor workflows that align with your business goals.",
      icon: Workflow,
      color: "from-cyan-300 to-blue-400"
    },
    {
      title: "Context-Aware Data Extraction",
      description: "Extract data intelligently using semantics, context, and layout-aware algorithms.",
      icon: Search,
      color: "from-blue-300 to-teal-300"
    },
    {
      title: "Optical Character Recognition (OCR)",
      description: "Convert scanned images and PDFs into searchable, structured information.",
      icon: Scan,
      color: "from-amber-200 to-yellow-300"
    }
  ];

  return (
    <section className={`relative py-16 ${themeConfig.sectionBackground} overflow-hidden`}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${themeConfig.gradientText}`}>
            Docuverse Intelligent Document Processing
          </h2>
          <div className={`w-20 h-1 ${themeConfig.gradientDivider} mx-auto rounded-full mb-4`}></div>
          <p className={`text-lg ${themeConfig.textPrimary}/80 max-w-3xl mx-auto`}>
            A comprehensive suite of AI-powered tools to revolutionize your document workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="h-full">
              <div className={`h-full p-6 ${themeConfig.cardBackground} rounded-xl shadow-lg border ${themeConfig.border} hover:shadow-xl transition-shadow duration-300`}>
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
            </div>
          ))}

          {/* CTA Card */}
          <div className="md:col-span-2 lg:col-span-3">
            <div className={`p-6 ${themeConfig.button.primary} rounded-xl shadow-lg border ${themeConfig.border}`}>
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0 md:mr-8">
                  <h3 className={`text-xl font-bold ${themeConfig.textInverted} mb-2`}>
                    Ready to transform your document workflows?
                  </h3>
                  <p className={`${themeConfig.textInverted}/80 text-sm`}>
                    Schedule a demo to see Docuverse IDP in action.
                  </p>
                </div>
                <Link to="/contact" className={`px-6 py-2 ${themeConfig.button.secondary} rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2`}>
                  Request Demo
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GuardianAuth = () => {
  const { themeConfig } = useTheme();
  const [activeTab, setActiveTab] = useState('features');

  const features = [
    {
      title: "Multi-Factor Authentication",
      description: "Protect access using OTPs, authenticator apps, email/SMS-based tokens, and biometric options.",
      icon: Lock,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Advanced Password Security",
      description: "Enforced complexity policies, password history & reuse restrictions with salted hashing.",
      icon: Key,
      color: "from-yellow-300 to-amber-400"
    },
    {
      title: "JWT-Based Authentication",
      description: "Stateless, secure, and scalable session management with JSON Web Tokens.",
      icon: Cpu,
      color: "from-cyan-300 to-blue-400"
    },
    {
      title: "Comprehensive Audit Logging",
      description: "Real-time logging of authentication attempts, login failures, and session activities.",
      icon: Activity,
      color: "from-green-300 to-teal-400"
    },
    {
      title: "Session & Rate Limit Controls",
      description: "Prevent brute-force and abuse attacks with built-in rate limiting and IP blacklisting.",
      icon: Clock,
      color: "from-pink-300 to-red-300"
    },
    {
      title: "Biometric Authentication",
      description: "Support for fingerprint, facial recognition, and third-party biometric devices.",
      icon: Fingerprint,
      color: "from-purple-300 to-pink-300"
    },
    {
      title: "SSO Integration",
      description: "Seamless authentication across applications with OAuth2, SAML, and OpenID Connect.",
      icon: Shield,
      color: "from-orange-300 to-pink-400"
    },
    {
      title: "Multi-Tenant Architecture",
      description: "Scalable foundation for managing identity across multiple tenants.",
      icon: Cloud,
      color: "from-indigo-300 to-blue-300"
    }
  ];

  const complianceStandards = [
    "ISO 27001, ISO 9001",
    "SOC 2 Type II",
    "GDPR (EU)",
    "HIPAA (US)",
    "DPDPA 2023 (India)",
    "PCI DSS",
    "FedRAMP Ready"
  ];

  return (
    <section className={`relative py-16 ${themeConfig.featureShowcaseBackground} overflow-hidden`}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${themeConfig.gradientText}`}>
            Guardian Authentication Core
          </h2>
          <div className={`w-20 h-1 ${themeConfig.gradientDivider} mx-auto rounded-full mb-4`}></div>
          <h3 className={`text-xl ${themeConfig.textPrimary} mb-2 font-medium`}>
            Next-Gen Authentication Engine for Modern Enterprises
          </h3>
          <p className={`text-lg ${themeConfig.textPrimary}/80 max-w-3xl mx-auto`}>
            Secure. Scalable. Compliant. Military-grade security with complete regulatory compliance.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className={`inline-flex rounded-lg ${themeConfig.cardBackground} p-1 shadow-md border ${themeConfig.border}`}>
            <button
              onClick={() => setActiveTab('features')}
              className={`px-4 py-1 rounded-md font-medium text-sm ${activeTab === 'features' ? `${themeConfig.button.primary} text-white` : `${themeConfig.textPrimary} hover:${themeConfig.cardHoverBackground}`}`}
            >
              Key Features
            </button>
            <button
              onClick={() => setActiveTab('compliance')}
              className={`px-4 py-1 rounded-md font-medium text-sm ${activeTab === 'compliance' ? `${themeConfig.button.primary} text-white` : `${themeConfig.textPrimary} hover:${themeConfig.cardHoverBackground}`}`}
            >
              Compliance
            </button>
            <button
              onClick={() => setActiveTab('enterprise')}
              className={`px-4 py-1 rounded-md font-medium text-sm ${activeTab === 'enterprise' ? `${themeConfig.button.primary} text-white` : `${themeConfig.textPrimary} hover:${themeConfig.cardHoverBackground}`}`}
            >
              Enterprise Ready
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'features' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="h-full">
                <div className={`h-full p-4 ${themeConfig.cardBackground} rounded-lg shadow-md border ${themeConfig.border} hover:${themeConfig.cardHoverBackground} transition-colors`}>
                  <div className={`w-10 h-10 bg-gradient-to-r ${feature.color} rounded-md flex items-center justify-center mb-2`}>
                    <feature.icon size={16} className="text-white" />
                  </div>
                  <h3 className={`text-base font-bold ${themeConfig.textPrimary} mb-1`}>
                    {feature.title}
                  </h3>
                  <p className={`text-xs ${themeConfig.textSecondary}`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'compliance' && (
          <div className="max-w-3xl mx-auto">
            <div className={`${themeConfig.cardBackground} rounded-lg shadow-md border ${themeConfig.border} p-6`}>
              <h3 className={`text-xl font-bold ${themeConfig.textPrimary} mb-4 text-center`}>
                Compliance & Regulatory Standards
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {complianceStandards.map((standard, index) => (
                  <div key={index} className={`px-3 py-1 ${themeConfig.accentBackground} rounded-full ${themeConfig.textInverted} text-xs font-medium`}>
                    {standard}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'enterprise' && (
          <div className="max-w-3xl mx-auto">
            <div className={`${themeConfig.cardBackground} rounded-lg shadow-md border ${themeConfig.border} p-6`}>
              <h3 className={`text-xl font-bold ${themeConfig.textPrimary} mb-4 text-center`}>
                Enterprise-Ready Security Suite
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    icon: <Zap size={16} className="text-white" />,
                    title: "Global Availability",
                    desc: "High availability architecture with global deployment options",
                    color: "from-blue-400 to-blue-600"
                  },
                  {
                    icon: <Activity size={16} className={themeConfig.textInverted} />,
                    title: "Real-time Analytics",
                    desc: "Comprehensive dashboard with user/device activity insights",
                    color: "from-yellow-300 to-amber-400"
                  },
                  {
                    icon: <Bot size={16} className={themeConfig.textInverted} />,
                    title: "API-First Design",
                    desc: "Easy integration with existing systems and applications",
                    color: "from-cyan-300 to-blue-400"
                  },
                  {
                    icon: <ShieldCheck size={16} className="text-white" />,
                    title: "Role-Based Access",
                    desc: "Granular control with role-based access control (RBAC)",
                    color: "from-green-300 to-teal-400"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-md flex items-center justify-center mr-3 mt-1`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className={`font-bold ${themeConfig.textPrimary} text-sm`}>{item.title}</h4>
                      <p className={`text-xs ${themeConfig.textSecondary}`}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className={`${themeConfig.button.primary} rounded-xl p-6 text-center shadow-lg`}>
            <h3 className={`text-xl font-bold ${themeConfig.textInverted} mb-2`}>Ready to Secure Your Enterprise?</h3>
            <p className={`mb-4 ${themeConfig.textInverted}/90 text-sm`}>
              Guardian Authentication Core provides military-grade security with the flexibility modern enterprises need.
            </p>
            <Link to="/contact" className={`inline-block px-6 py-2 ${themeConfig.button.secondary} rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300`}>
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Products = () => {
  return (
    <div className="overflow-hidden">
      <ProductsHero />
      <DocuverseIDP />
      <GuardianAuth />
    </div>
  );
};

export default Products;