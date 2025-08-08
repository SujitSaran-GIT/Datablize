import React, { useState, useEffect } from 'react';
import {
  ChevronRight, ArrowRight, FileText, Database, Lock, Users, Check, 
  ShieldCheck, BarChart2, Activity, Shield, Server, Send,
  PenTool, Settings, FileDigit, ClipboardList, Stethoscope,
  FileSearch, FilePlus2, Search, Workflow
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TabsNavigation from '../components/common/TabNavigation';
import { useTheme } from '../context/ThemeContext';

// Hero Section
const UseCaseHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { themeConfig } = useTheme();
  const useCases = [
    "Automated Invoice Processing",
    "Intelligent Record Management",
    "Secure Document Storage",
    "Customer & Vendor Onboarding"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % useCases.length);
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
                <span className={themeConfig.textPrimary}>Real-World </span>
                <span className={`bg-gradient-to-r ${themeConfig.gradientText} bg-clip-text`}>
                  Use Cases
                </span>
                <br />
                <span className={themeConfig.textPrimary}>for Intelligent</span>
                <br />
                <span className={`bg-gradient-to-r ${themeConfig.gradientTextSecondary} bg-clip-text`}>
                  Document Management
                </span>
              </h1>
            </div>

            <div>
              <p className={`text-md sm:text-lg lg:text-xl mb-4 ${themeConfig.textPrimary}/80 font-medium leading-relaxed`}>
                Discover how Datablize transforms document workflows across industries.
              </p>
              <p className={`text-sm sm:text-md ${themeConfig.textPrimary}/70 leading-relaxed`}>
                From automated classification to intelligent data extraction, our solutions address
                the most challenging document management scenarios.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link to="/contact">
                <button className={`group relative px-5 sm:px-6 py-2 sm:py-3 ${themeConfig.button.primary} rounded-lg sm:rounded-xl font-bold text-sm sm:text-md shadow-lg sm:shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300`}>
                  <div className={`absolute inset-0 ${themeConfig.button.hover} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                  <div className="relative flex items-center gap-2 sm:gap-3">
                    <span>Get a Demo</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </Link>

              <Link to="/use-cases">
                <button className={`group px-5 sm:px-6 py-2 sm:py-3 ${themeConfig.button.secondary} rounded-lg sm:rounded-xl font-bold text-sm sm:text-md transition-all duration-300 transform hover:scale-105`}>
                  <span className="flex items-center gap-2 sm:gap-3">
                    Explore by Industry
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
                  {useCases.map((useCase, idx) => (
                    <div
                      key={useCase}
                      className={`absolute inset-0 flex items-center justify-center p-6 sm:p-8 transition-opacity duration-500 ${activeIndex === idx ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <div className="text-center">
                        <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 ${themeConfig.accentBackground} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg`}>
                          {[
                            <FileText size={24} className={themeConfig.textInverted} />,
                            <Database size={24} className={themeConfig.textInverted} />,
                            <Lock size={24} className={themeConfig.textInverted} />,
                            <Users size={24} className={themeConfig.textInverted} />
                          ][idx]}
                        </div>
                        <h3 className={`text-xl sm:text-2xl font-bold ${themeConfig.textPrimary} mb-2 sm:mb-3`}>{useCase}</h3>
                        <p className={`text-sm sm:text-base ${themeConfig.textPrimary}/80`}>
                          {[
                            "Automate invoice processing from capture to payment",
                            "Digitize, classify and manage records with AI",
                            "Enterprise-grade secure storage with compliance controls",
                            "Streamline onboarding with automated workflows"
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

// Industry Solutions Section
const IndustrySolutions = () => {
  const { themeConfig } = useTheme();
  const industries = [
    {
      name: "Government",
      icon: ShieldCheck,
      description: "Empowering digital governance with intelligent automation",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Financial Services",
      icon: BarChart2,
      description: "Banking and insurance document workflows",
      color: "from-yellow-300 to-amber-400"
    },
    {
      name: "Healthcare",
      icon: Activity,
      description: "Secure patient record management",
      color: "from-cyan-300 to-blue-400"
    },
    {
      name: "Insurance",
      icon: Shield,
      description: "Policy and claims documentation",
      color: "from-green-300 to-teal-400"
    },
    {
      name: "Manufacturing",
      icon: Server,
      description: "Supply chain document automation",
      color: "from-pink-300 to-red-300"
    },
    {
      name: "Shared Services",
      icon: Users,
      description: "Document processing at scale",
      color: "from-blue-400 to-blue-800"
    }
  ];

  return (
    <section className={`relative py-16 ${themeConfig.sectionBackground} overflow-hidden`}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${themeConfig.gradientText}`}>
            Industry Solutions
          </h2>
          <div className={`w-20 h-1 ${themeConfig.gradientDivider} mx-auto rounded-full mb-4`}></div>
          <p className={`text-lg ${themeConfig.textPrimary}/80 max-w-3xl mx-auto`}>
            Tailored document automation for your industry's unique challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <div key={index} className="h-full">
              <div className={`h-full p-6 ${themeConfig.cardBackground} rounded-xl shadow-lg border ${themeConfig.border} hover:shadow-xl transition-shadow duration-300`}>
                <div className={`w-12 h-12 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center mb-4`}>
                  <industry.icon size={20} className="text-white" />
                </div>
                <h3 className={`text-lg font-bold ${themeConfig.textPrimary} mb-2`}>
                  {industry.name}
                </h3>
                <p className={`text-sm ${themeConfig.textSecondary} leading-relaxed`}>
                  {industry.description}
                </p>
                <button className={`mt-4 text-sm font-medium ${themeConfig.accentText} flex items-center gap-1 hover:gap-2 transition-all duration-300`}>
                  <span>Explore solutions</span>
                  <ArrowRight size={16} className="hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Featured Use Cases Section
const FeaturedUseCases = () => {
  const { themeConfig } = useTheme();
  const [activeTab, setActiveTab] = useState('record');

  const tabs = [
    { id: 'record', label: 'Record Management', icon: Database },
    { id: 'storage', label: 'Secure Storage', icon: Lock },
    { id: 'retrieval', label: 'Document Retrieval', icon: FileSearch },
    { id: 'invoice', label: 'Invoice Processing', icon: FilePlus2 },
    { id: 'contract', label: 'Contract Management', icon: ClipboardList },
    { id: 'medical', label: 'Medical Records', icon: Stethoscope }
  ];

  const useCases = {
    record: {
      title: "Intelligent Record Management",
      description: "AI-powered solution that unifies Document Management and Workflow Automation under its Intelligent Document Processing platform.",
      icon: Database,
      color: "from-blue-400 to-blue-600",
      benefits: [
        "Unified record repository across departments",
        "Workflow Automation reduces manual work",
        "Secure & Compliant with requirements",
        "AI-Driven Search for faster decisions"
      ],
      flow: [
        "Document submission from multiple channels",
        "Auto-classification & metadata extraction",
        "Secure storage in centralized system",
        "Workflow initiation based on document type",
        "Audit trail and advanced search"
      ]
    },
    invoice: {
      title: "Automated Invoice Processing",
      description: "Automates the entire invoice lifecycle from ingestion and validation to approval and archiving.",
      icon: FileText,
      color: "from-yellow-300 to-amber-400",
      benefits: [
        "Eliminates manual data entry and errors",
        "Ensures only validated invoices are approved",
        "Speeds up multi-level approvals",
        "Seamless financial posting to ERP"
      ],
      flow: [
        "Invoice capture via multiple channels",
        "AI-powered data extraction",
        "Auto-matching with PO & GRN",
        "Approval workflow routing",
        "ERP integration for payment"
      ]
    },
    storage: {
      title: "Secure Document Storage",
      description: "Enterprise-grade secure document storage with policy-based access and compliance controls.",
      icon: Lock,
      color: "from-cyan-300 to-blue-400",
      benefits: [
        "Prevents unauthorized access",
        "Ensures only authorized personnel can access",
        "Meets compliance needs",
        "Provides full traceability"
      ],
      flow: [
        "Document ingestion from sources",
        "Classification & tagging",
        "Enterprise-grade encryption",
        "Role-based access control",
        "Search & retrieval with audit"
      ]
    }
  };

  return (
    <section className={`relative py-16 ${themeConfig.sectionBackground} overflow-hidden`}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${themeConfig.gradientText}`}>
            Featured Use Cases
          </h2>
          <div className={`w-20 h-1 ${themeConfig.gradientDivider} mx-auto rounded-full mb-4`}></div>
          <p className={`text-lg ${themeConfig.textPrimary}/80 max-w-3xl mx-auto`}>
            Explore how Datablize solves critical document challenges with intelligent automation.
          </p>
        </div>

        {/* Tabs Navigation */}
        <TabsNavigation
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          activeTabColor={themeConfig.button.primary}
          inactiveTabColor={themeConfig.textPrimary}
          iconColor={themeConfig.textPrimary}
          activeIconColor={themeConfig.textInverted}
          gradientFadeColor={themeConfig.cardBackground}
        />

        {/* Tab Content */}
        <div className={`${themeConfig.cardBackground} rounded-xl shadow-xl overflow-hidden border ${themeConfig.border}`}>
          <div className="md:flex">
            {/* Left Side - Overview */}
            <div className="md:w-1/2 p-6 md:p-8">
              <div className={`w-12 h-12 bg-gradient-to-r ${useCases[activeTab].color} rounded-lg flex items-center justify-center mb-4`}>
                {React.createElement(useCases[activeTab].icon, { size: 20, className: "text-white" })}
              </div>
              <h3 className={`text-xl lg:text-2xl font-bold ${themeConfig.textPrimary} mb-4`}>
                {useCases[activeTab].title}
              </h3>
              <p className={`${themeConfig.textPrimary}/90 mb-6`}>
                {useCases[activeTab].description}
              </p>

              <div>
                <h4 className={`text-lg font-semibold ${themeConfig.textPrimary} mb-3`}>Key Benefits</h4>
                <div className="space-y-3">
                  {useCases[activeTab].benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-5 h-5 ${themeConfig.accentBackground} rounded-full flex items-center justify-center mt-0.5 flex-shrink-0`}>
                        <Check size={12} className={themeConfig.textInverted} />
                      </div>
                      <span className={`${themeConfig.textPrimary}/90`}>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Flow */}
            <div className={`md:w-1/2 p-6 md:p-8 ${themeConfig.cardHoverBackground}`}>
              <h4 className={`text-lg font-semibold ${themeConfig.textPrimary} mb-6`}>Primary Workflow</h4>
              <div className="space-y-4">
                {useCases[activeTab].flow.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${i === useCases[activeTab].flow.length - 1 ? themeConfig.accentBackground : themeConfig.cardBackground}`}>
                        {i === useCases[activeTab].flow.length - 1 ? (
                          <Check size={16} className={themeConfig.textInverted} />
                        ) : (
                          <span className={`text-sm font-medium ${themeConfig.textPrimary}`}>{i + 1}</span>
                        )}
                      </div>
                      {i < useCases[activeTab].flow.length - 1 && (
                        <div className={`w-0.5 h-6 ${themeConfig.divider} my-1`}></div>
                      )}
                    </div>
                    <div>
                      <p className={`${themeConfig.textPrimary}/90`}>{step}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button className={`group relative px-6 py-2 ${themeConfig.button.primary} rounded-lg font-medium overflow-hidden transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto`}>
                  <div className={`absolute inset-0 ${themeConfig.button.hover} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                  <span className="relative">View Detailed Case Study</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Benefits Section
const BenefitsSection = () => {
  const { themeConfig } = useTheme();
  const benefits = [
    {
      title: "Operational Efficiency",
      description: "Improve operational efficiency by 40-60% across document workflows",
      icon: BarChart2,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Compliance & Security",
      description: "Achieve compliance with ISO 27001, GDPR, DPDPA 2023 and more",
      icon: ShieldCheck,
      color: "from-yellow-300 to-amber-400"
    },
    {
      title: "Cost Savings",
      description: "Reduce manual labor costs and eliminate paper-based processes",
      icon: Activity,
      color: "from-cyan-300 to-blue-400"
    },
    {
      title: "Integration Ready",
      description: "Seamless integration with legacy and modern IT systems",
      icon: Server,
      color: "from-green-300 to-teal-400"
    }
  ];

  return (
    <section className={`relative py-16 ${themeConfig.sectionBackground} overflow-hidden`}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${themeConfig.gradientText}`}>
            Measurable Business Impact
          </h2>
          <div className={`w-20 h-1 ${themeConfig.gradientDivider} mx-auto rounded-full mb-4`}></div>
          <p className={`text-lg ${themeConfig.textPrimary}/80 max-w-3xl mx-auto`}>
            Datablize delivers tangible results across all key performance indicators
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="h-full">
              <div className={`h-full p-6 ${themeConfig.cardBackground} rounded-xl shadow-lg border ${themeConfig.border} hover:shadow-xl transition-shadow duration-300`}>
                <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-lg flex items-center justify-center mb-4`}>
                  <benefit.icon size={20} className="text-white" />
                </div>
                <h3 className={`text-lg font-bold ${themeConfig.textPrimary} mb-2`}>
                  {benefit.title}
                </h3>
                <p className={`text-sm ${themeConfig.textSecondary} leading-relaxed`}>
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ComplianceSection.jsx
const ComplianceSection = () => {
  const { themeConfig } = useTheme();
  const standards = [
    {
      name: "DPDPA 2023",
      description: "India's Digital Personal Data Protection Act compliance",
      icon: ShieldCheck
    },
    {
      name: "ISO 27001",
      description: "Information security management system certification",
      icon: Shield
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act",
      icon: Stethoscope
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation (EU)",
      icon: ShieldCheck
    },
    {
      name: "NABH",
      description: "National Accreditation Board for Hospitals & Healthcare",
      icon: Activity
    },
    {
      name: "RBI/SEBI",
      description: "Financial sector regulatory compliance",
      icon: BarChart2
    }
  ];

  return (
    <section className={`relative py-16 ${themeConfig.sectionBackground} overflow-hidden`}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${themeConfig.gradientText}`}>
            Built for Compliance
          </h2>
          <div className={`w-20 h-1 ${themeConfig.gradientDivider} mx-auto rounded-full mb-4`}></div>
          <p className={`text-lg ${themeConfig.textPrimary}/80 max-w-3xl mx-auto`}>
            Enterprise-grade security and regulatory compliance across industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {standards.map((standard, index) => (
            <div key={index} className="h-full">
              <div className={`h-full p-6 ${themeConfig.cardBackground} rounded-xl shadow-lg border ${themeConfig.border} hover:shadow-xl transition-shadow duration-300`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${themeConfig.accentBackground} rounded-lg flex items-center justify-center`}>
                    <standard.icon size={20} className={themeConfig.textInverted} />
                  </div>
                  <h3 className={`text-lg font-bold ${themeConfig.textPrimary}`}>{standard.name}</h3>
                </div>
                <p className={`text-sm ${themeConfig.textSecondary}`}>{standard.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 ${themeConfig.button.primary} rounded-xl p-6 md:p-8`}>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2">
              <h3 className={`text-xl lg:text-2xl font-bold ${themeConfig.textInverted} mb-4`}>Security Features</h3>
              <div className="space-y-3">
                {[
                  "AES-256 & TLS1.3 Encryption",
                  "Role-Based Access Control (RBAC)",
                  "Multi-Factor Authentication (MFA)",
                  "Tamper-Proof Audit Trails",
                  "Data Retention Policies",
                  "Digital Rights Management (DRM)"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-5 h-5 ${themeConfig.accentBackground} rounded-full flex items-center justify-center mt-0.5 flex-shrink-0`}>
                      <Check size={12} className={themeConfig.textInverted} />
                    </div>
                    <span className={themeConfig.textInverted}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className={`${themeConfig.cardBackground} rounded-lg p-4 backdrop-blur-sm`}>
                <h4 className={`text-lg font-semibold ${themeConfig.textPrimary} mb-3`}>Compliance Dashboard</h4>
                <p className={`mb-4 text-sm ${themeConfig.textPrimary}`}>Real-time visibility into your compliance status.</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "DPDPA Ready", value: "100%" },
                    { label: "Data Encrypted", value: "100%" },
                    { label: "Access Logged", value: "100%" },
                    { label: "Audit Ready", value: "100%" }
                  ].map((item, i) => (
                    <div key={i} className={`${themeConfig.accentBackground} rounded-lg p-2 text-center`}>
                      <div className={`text-xl font-bold ${themeConfig.textInverted}`}>{item.value}</div>
                      <div className={`text-xs ${themeConfig.textInverted}`}>{item.label}</div>
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

// Updated UseCaseProcess.jsx with consistent styling
const UseCaseProcess = () => {
  const { themeConfig } = useTheme();
  const steps = [
    {
      title: "Identify Pain Points",
      description: "We analyze your current document workflows to identify bottlenecks and inefficiencies.",
      icon: Search,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Solution Design",
      description: "Our experts design a tailored solution addressing your specific challenges and requirements.",
      icon: PenTool,
      color: "from-yellow-300 to-amber-400"
    },
    {
      title: "Implementation",
      description: "We deploy the solution with minimal disruption, following industry best practices.",
      icon: Settings,
      color: "from-cyan-300 to-blue-400"
    },
    {
      title: "Training & Adoption",
      description: "Comprehensive training ensures your team can leverage the solution effectively.",
      icon: Users,
      color: "from-green-300 to-teal-400"
    },
    {
      title: "Continuous Improvement",
      description: "Ongoing optimization ensures you get maximum value from your investment.",
      icon: BarChart2,
      color: "from-pink-300 to-red-300"
    }
  ];

  return (
    <section className={`relative py-16 ${themeConfig.sectionBackground} overflow-hidden`}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${themeConfig.gradientText}`}>
            Our Proven Methodology
          </h2>
          <div className={`w-20 h-1 ${themeConfig.gradientDivider} mx-auto rounded-full mb-4`}></div>
          <p className={`text-lg ${themeConfig.textPrimary}/80 max-w-3xl mx-auto`}>
            A structured approach that ensures success at every stage of your document automation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <div className={`h-full p-6 ${themeConfig.cardBackground} rounded-xl shadow-lg border ${themeConfig.border}`}>
                <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center mb-4`}>
                  <step.icon size={20} className="text-white" />
                </div>
                <h3 className={`text-lg font-bold ${themeConfig.textPrimary} mb-2`}>
                  {step.title}
                </h3>
                <p className={`text-sm ${themeConfig.textSecondary}`}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Final UseCase component with all sections
const UseCase = () => {
  return (
    <div className="overflow-hidden">
      <UseCaseHero />
      <IndustrySolutions />
      <FeaturedUseCases />
      <UseCaseProcess />
      <BenefitsSection />
      <ComplianceSection />
    </div>
  );
};

export default UseCase;