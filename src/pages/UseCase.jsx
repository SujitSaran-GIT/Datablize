import React, { useState, useEffect } from 'react';
import {
  ChevronRight, ArrowRight, FileText, Database, Lock, Users, Check,
  ShieldCheck, BarChart2, Activity, Shield, Server, Send,
  PenTool, Settings, FileDigit, ClipboardList, Stethoscope,
  FileSearch, FilePlus2, Search, Workflow
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Assuming TabsNavigation is the same as in Features
const TabsNavigation = ({ tabs, activeTab, setActiveTab }) => {
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
          <tab.icon size={16} className={activeTab === tab.id ? 'text-primary-white' : 'text-primary-dark'} />
          {tab.label}
        </motion.button>
      ))}
    </div>
  );
};

// Hero Section
const UseCaseHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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
                >
                  Real-World Use Cases
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  for {" "}
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className='text-primary-orange'
                  >
                    Intelligent
                  </motion.span>
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-primary-orange"
                >
                  Document Management
                </motion.span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-md sm:text-lg lg:text-xl mb-4 font-medium leading-relaxed text-primary-blue">
                Discover how Datablize transforms document workflows across industries.
              </p>
              <p className="text-sm sm:text-md leading-relaxed text-primary-dark">
                From automated classification to intelligent data extraction, our solutions address
                the most challenging document management scenarios.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Link to={"/contact"}>
                <motion.button
                  className="group relative px-5 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-sm sm:text-md shadow-lg sm:shadow-xl overflow-hidden transform transition-all duration-300 bg-gradient-to-r from-primary-blue to-primary-orange text-primary-white"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-gradient-to-r from-primary-orange to-primary-blue"></div>
                  <div className="relative flex items-center gap-2 sm:gap-3">
                    <span>Get a Demo</span>
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
                  {useCases.map((useCase, idx) => (
                    <motion.div
                      key={useCase}
                      className="absolute inset-0 flex items-center justify-center p-6 sm:p-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeIndex === idx ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-primary-orange rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                          {[
                            <FileText size={24} className="text-primary-white" />,
                            <Database size={24} className="text-primary-white" />,
                            <Lock size={24} className="text-primary-white" />,
                            <Users size={24} className="text-primary-white" />
                          ][idx]}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-primary-blue mb-2 sm:mb-3">{useCase}</h3>
                        <p className="text-sm sm:text-base text-primary-blue">
                          {[
                            "Automate invoice processing from capture to payment",
                            "Digitize, classify and manage records with AI",
                            "Enterprise-grade secure storage with compliance controls",
                            "Streamline onboarding with automated workflows"
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

// Industry Solutions Section
const IndustrySolutions = () => {
  const industries = [
    {
      name: "Government",
      icon: ShieldCheck,
      description: "Empowering digital governance with intelligent automation",
      color: "from-primary-blue to-primary-orange"
    },
    {
      name: "Financial Services",
      icon: BarChart2,
      description: "Banking and insurance document workflows",
      color: "from-primary-blue to-primary-orange"
    },
    {
      name: "Healthcare",
      icon: Activity,
      description: "Secure patient record management",
      color: "from-primary-blue to-primary-orange"
    },
    {
      name: "Insurance",
      icon: Shield,
      description: "Policy and claims documentation",
      color: "from-primary-blue to-primary-orange"
    },
    {
      name: "Manufacturing",
      icon: Server,
      description: "Supply chain document automation",
      color: "from-primary-blue to-primary-orange"
    },
    {
      name: "Shared Services",
      icon: Users,
      description: "Document processing at scale",
      color: "from-primary-blue to-primary-orange"
    }
  ];

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
            Industry Solutions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-blue to-primary-orange mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-primary-dark max-w-3xl mx-auto">
            Tailored document automation for your industry's unique challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-full p-6 bg-primary-white rounded-xl shadow-lg border border-primary-orange hover:shadow-xl transition-shadow duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center mb-4`}>
                  <industry.icon size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary-dark mb-2">{industry.name}</h3>
                <p className="text-sm text-primary-dark leading-relaxed">{industry.description}</p>
                <button className="mt-4 text-sm font-medium text-primary-orange flex items-center gap-1 hover:gap-2 transition-all duration-300">
                  <span>Explore solutions</span>
                  <ArrowRight size={16} className="hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Featured Use Cases Section
const FeaturedUseCases = () => {
  const [activeTab, setActiveTab] = useState('record');

  const tabs = [
    { id: 'record', label: 'Record Management', icon: Database },
    { id: 'storage', label: 'Secure Storage', icon: Lock },
    { id: 'retrieval', label: 'Document Retrieval', icon: FileSearch },
    { id: 'invoice', label: 'Invoice Processing', icon: FilePlus2 },
    { id: 'contract', label: 'Contract Management', icon: ClipboardList },
    { id: 'medical', label: 'Medical Records', icon: Stethoscope },
    { id: 'resume', label: 'Resume Screening', icon: FileText },
    { id: 'onboarding', label: 'Onboarding', icon: Users },
    { id: 'public', label: 'Public Record', icon: FileDigit }
  ];

  const useCases = {
    record: {
      title: "Intelligent Record Management",
      description: "Datablize offers an AI-powered Record Management solution that unifies Document Management and Workflow Automation under its Intelligent Document Processing (IDP) platform. The system enables organizations to ingest, classify, extract, store, retrieve, and route business records efficiently while ensuring compliance, security, and auditability.",
      icon: Database,
      color: "from-primary-blue to-primary-orange",
      actors: [
        "Business Users (HR, Legal, Finance)",
        "System Administrator",
        "AI/ML Engine",
        "Document Workflow Engine",
        "External Integrations"
      ],
      features: [
        "Intelligent Document Ingestion (via Email, Scanner, Uploads, APIs)",
        "Auto-classification & Metadata Extraction",
        "Centralized Digital Record Repository (DMS)",
        "Role-based Access & Retention Policies",
        "Workflow Automation (Approval, Escalation, Archival)",
        "Compliance (ISO 27001, DPDPA 2023 Ready)",
        "Industry-Specific Templates & Integrations"
      ],
      flow: [
        "Document submission from multiple channels",
        "Auto-classification & metadata extraction",
        "Secure storage in centralized DMS",
        "Workflow initiation based on document type",
        "Audit trail and advanced search",
        "Retention policy enforcement"
      ],
      benefits: [
        "Unified record repository across departments",
        "Workflow Automation reduces manual dependencies",
        "Secure & Compliant with ISO/DPDPA requirements",
        "AI-Driven Search & Insights for faster decisions",
        "Time & Cost Efficiency in document handling"
      ]
    },
    invoice: {
      title: "Automated Invoice Processing",
      description: "Datablize automates the entire invoice lifecycle — from ingestion and validation to approval and archiving — using AI/ML-driven data extraction and workflow routing.",
      icon: FileText,
      color: "from-primary-blue to-primary-orange",
      actors: [
        "Accounts Payable Team",
        "Vendors/Suppliers",
        "Finance Department",
        "AI/ML Engine",
        "ERP System Integration"
      ],
      flow: [
        "Invoice capture via multiple channels",
        "AI-powered data extraction",
        "Auto-matching with PO & GRN",
        "Approval workflow routing",
        "ERP integration for payment processing",
        "Secure archival with audit trail"
      ],
      benefits: [
        "Eliminates manual data entry and errors",
        "Ensures only validated invoices are approved",
        "Speeds up multi-level approvals",
        "Seamless financial posting to ERP",
        "Compliant storage with audit history"
      ]
    },
    onboarding: {
      title: "Customer & Vendor Onboarding",
      description: "Datablize streamlines customer and vendor onboarding by automating document collection, verification, and approval workflows with AI-driven validation.",
      icon: Users,
      color: "from-primary-blue to-primary-orange",
      actors: [
        "Sales/Procurement Team",
        "Compliance Officers",
        "Customers/Vendors",
        "Document Verifier",
        "ERP/CRM Systems"
      ],
      flow: [
        "Document submission via portal or email",
        "OCR-based document extraction",
        "Auto-validation (PAN, GSTIN, etc.)",
        "KYC/Compliance workflow routing",
        "Approval & system synchronization",
        "Secure archival with retention policies"
      ],
      benefits: [
        "Reduces onboarding time from days to minutes",
        "Ensures data accuracy with AI validation",
        "Meets audit and compliance requirements",
        "Automatically creates records in business systems",
        "Protects sensitive data with role-based access"
      ]
    },
    storage: {
      title: "Secure Document Storage",
      description: "Enterprise-grade secure document storage with policy-based access, multi-level encryption, and compliance controls for contracts, financial records, and more.",
      icon: Lock,
      color: "from-primary-blue to-primary-orange",
      actors: [
        "Employees (HR, Finance, Legal)",
        "IT Security Administrator",
        "Compliance/Audit Team",
        "External Stakeholders",
        "Datablize DMS & Workflow Engine"
      ],
      flow: [
        "Document ingestion from multiple sources",
        "Classification & tagging",
        "Enterprise-grade encryption",
        "Role-based access control",
        "Search & retrieval with audit logging",
        "Retention policy enforcement"
      ],
      benefits: [
        "Prevents unauthorized access and breaches",
        "Ensures only authorized personnel can access",
        "Meets industry-specific compliance needs",
        "Reduces storage costs with auto-archival",
        "Provides full traceability of all actions"
      ]
    },
    contract: {
      title: "Contract Lifecycle Management",
      description: "AI-powered contract management from creation to renewal with version control, eSign integration, and obligation tracking for reduced legal risks.",
      icon: FileDigit,
      color: "from-primary-blue to-primary-orange",
      actors: [
        "Legal Team",
        "Procurement/Vendor Management",
        "Sales/Account Management",
        "Finance & Compliance",
        "External Stakeholders"
      ],
      flow: [
        "Contract upload or template creation",
        "AI-based metadata extraction",
        "Multi-stage review & approval",
        "Version control & redlining",
        "eSignature & execution",
        "Renewal alerts & archival"
      ],
      benefits: [
        "Accelerates contract cycle time",
        "Increases on-time renewals by 90%",
        "Provides 100% traceability for audits",
        "Reduces manual follow-ups by 80%",
        "Centralizes all contract documents"
      ]
    },
    retrieval: {
      title: "Document Automated Retrieval Technology",
      description: "Datablize's Document Automated Retrieval Technology uses AI and context-aware logic to fetch relevant documents instantly based on metadata, content, user queries, and business context — eliminating the need for manual navigation through large document repositories.",
      icon: FileSearch,
      color: "from-primary-blue to-primary-orange",
      actors: [
        "Business Users (HR, Legal, Finance)",
        "System Administrator",
        "AI/ML Engine",
        "Document Workflow Engine",
        "External Integrations"
      ],
      features: [
        "Natural Language Querying",
        "Metadata & Content-Based Search",
        "Role-Based Results & Access Control",
        "Integration with Workflow & External Systems",
        "Relevance Ranking & Smart Suggestions"
      ],
      flow: [
        "User initiates search query",
        "AI parses query using NLP",
        "System scans indexed content",
        "Contextual filtering based on user role",
        "Results presented with preview options",
        "Audit logging of all retrieval actions"
      ],
      benefits: [
        "Cuts retrieval time from minutes to seconds",
        "Pulls exactly what's relevant across fragmented sources",
        "Ensures documents are accessed only by authorized users",
        "Enables traceability for regulatory audits",
        "Works across industries and multiple file types"
      ]
    },
    medical: {
      title: "Medical Record Management",
      description: "Secure, AI-driven management of patient medical records including diagnostics, prescriptions, imaging, and discharge summaries with HIPAA/DPDPA-compliant access controls.",
      icon: Stethoscope,
      color: "from-primary-blue to-primary-orange",
      actors: [
        "Doctors & Specialists",
        "Medical Record Officers",
        "Nurses & Care Coordinators",
        "Patients",
        "Hospital IT Team"
      ],
      flow: [
        "Ingestion of medical records",
        "AI-based classification & extraction",
        "Secure storage with encryption",
        "Role-based access control",
        "Instant retrieval by authorized personnel",
        "Retention policy enforcement"
      ],
      benefits: [
        "Single source of truth for clinical decisions",
        "Speeds up classification and retrieval",
        "Protects patient confidentiality",
        "Improves response time in critical care",
        "Full traceability for medico-legal purposes"
      ]
    },
    public: {
      title: "Public Record Management",
      description: "End-to-end digitization and management of public records like land records, birth/death certificates, licenses and permits with secure citizen access and audit trails.",
      icon: FileDigit,
      color: "from-primary-blue to-primary-orange",
      actors: [
        "Government Officers",
        "Citizens and Public Users",
        "Data Entry Operators",
        "Compliance Authorities",
        "Audit Teams"
      ],
      flow: [
        "Bulk digitization of physical records",
        "AI-based classification & indexing",
        "Secure digital storage",
        "Role-based access control",
        "Public portal integration",
        "Compliance reporting"
      ],
      benefits: [
        "Ensures easy access across departments",
        "Saves time organizing historical records",
        "Protects sensitive information from misuse",
        "Reduces file search time significantly",
        "Enhances transparency and citizen trust"
      ]
    },
    resume: {
      title: "Automated Resume Screening",
      description: "AI-driven resume screening and candidate shortlisting that automatically extracts, analyzes, and ranks profiles based on job-specific criteria, integrating with HR systems.",
      icon: FileText,
      color: "from-primary-blue to-primary-orange",
      actors: [
        "HR Recruiters",
        "Hiring Managers",
        "Job Applicants",
        "AI/NLP Engine",
        "Applicant Tracking Systems"
      ],
      flow: [
        "Bulk resume upload",
        "AI-based parsing & classification",
        "Skill & experience matching",
        "Smart ranking & scoring",
        "Workflow-based shortlisting",
        "Secure storage & history tracking"
      ],
      benefits: [
        "Eliminates manual screening effort",
        "Increases quality of shortlisted candidates",
        "Reduces turnaround for shortlisting",
        "Ensures seamless hiring pipeline",
        "Provides analytics on talent availability"
      ]
    }
  };

  return (
    <section className="py-16 bg-primary-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-blue to-primary-orange bg-clip-text text-transparent pb-2">
            Featured Use Cases
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-blue to-primary-orange mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-primary-dark max-w-3xl mx-auto">
            Explore how Datablize solves critical document challenges with intelligent automation.
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <TabsNavigation
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Tab Content */}
        <motion.div
          className="bg-primary-white rounded-xl shadow-xl overflow-hidden border border-primary-orange"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:flex">
            {/* Left Side - Overview */}
            <div className="md:w-1/2 p-6 md:p-8">
              <div className={`w-12 h-12 bg-gradient-to-r ${useCases[activeTab].color} rounded-lg flex items-center justify-center mb-4`}>
                {React.createElement(useCases[activeTab].icon, { size: 20, className: "text-white" })}
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-primary-dark mb-4">{useCases[activeTab].title}</h3>
              <p className="text-primary-dark/90 mb-6">{useCases[activeTab].description}</p>

              <div>
                <h4 className="text-lg font-semibold text-primary-dark mb-3">Key Benefits</h4>
                <div className="space-y-3">
                  {useCases[activeTab].benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <div className="w-5 h-5 bg-primary-orange rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check size={12} className="text-primary-white" />
                      </div>
                      <span className="text-primary-dark/90">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Flow */}
            <div className="md:w-1/2 p-6 md:p-8 bg-primary-light/20">
              <h4 className="text-lg font-semibold text-primary-dark mb-6">Primary Workflow</h4>
              <div className="space-y-4">
                {useCases[activeTab].flow.map((step, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${i === useCases[activeTab].flow.length - 1 ? 'bg-primary-orange' : 'bg-primary-white border border-primary-orange'}`}>
                        {i === useCases[activeTab].flow.length - 1 ? (
                          <Check size={16} className="text-primary-white" />
                        ) : (
                          <span className="text-sm font-medium text-primary-dark">{i + 1}</span>
                        )}
                      </div>
                      {i < useCases[activeTab].flow.length - 1 && (
                        <div className="w-0.5 h-6 bg-primary-orange my-1"></div>
                      )}
                    </div>
                    <div>
                      <p className="text-primary-dark/90">{step}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <button className="group relative px-6 py-2 bg-gradient-to-r from-primary-blue to-primary-orange rounded-lg font-medium text-primary-white overflow-hidden transform transition-all duration-300 flex items-center gap-2 mx-auto">
                  <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-gradient-to-r from-primary-orange to-primary-blue"></div>
                  <span className="relative">View Detailed Case Study</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Benefits Section
const BenefitsSection = () => {
  const benefits = [
    {
      title: "Operational Efficiency",
      description: "Improve operational efficiency by 40-60% across document workflows",
      icon: BarChart2,
      color: "from-primary-blue to-primary-orange"
    },
    {
      title: "Compliance & Security",
      description: "Achieve compliance with ISO 27001, GDPR, DPDPA 2023 and more",
      icon: ShieldCheck,
      color: "from-primary-blue to-primary-orange"
    },
    {
      title: "Cost Savings",
      description: "Reduce manual labor costs and eliminate paper-based processes",
      icon: Activity,
      color: "from-primary-blue to-primary-orange"
    },
    {
      title: "Integration Ready",
      description: "Seamless integration with legacy and modern IT systems",
      icon: Server,
      color: "from-primary-blue to-primary-orange"
    }
  ];

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
            Measurable Business Impact
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-blue to-primary-orange mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-primary-dark max-w-3xl mx-auto">
            Datablize delivers tangible results across all key performance indicators
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-full p-6 bg-primary-white rounded-xl shadow-lg border border-primary-orange hover:shadow-xl transition-shadow duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-lg flex items-center justify-center mb-4`}>
                  <benefit.icon size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary-dark mb-2">{benefit.title}</h3>
                <p className="text-sm text-primary-dark leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Compliance Section
const ComplianceSection = () => {
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
            Built for Compliance
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-blue to-primary-orange mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-primary-dark max-w-3xl mx-auto">
            Enterprise-grade security and regulatory compliance across industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {standards.map((standard, index) => (
            <motion.div
              key={index}
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-full p-6 bg-primary-white rounded-xl shadow-lg border border-primary-orange hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-orange rounded-lg flex items-center justify-center">
                    <standard.icon size={20} className="text-primary-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-dark">{standard.name}</h3>
                </div>
                <p className="text-sm text-primary-dark">{standard.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 bg-gradient-to-r from-primary-blue to-primary-orange rounded-xl p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2">
              <h3 className="text-xl lg:text-2xl font-bold text-primary-white mb-4">Security Features</h3>
              <div className="space-y-3">
                {[
                  "AES-256 & TLS1.3 Encryption",
                  "Role-Based Access Control (RBAC)",
                  "Multi-Factor Authentication (MFA)",
                  "Tamper-Proof Audit Trails",
                  "Data Retention Policies",
                  "Digital Rights Management (DRM)"
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="w-5 h-5 bg-primary-white rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Check size={12} className="text-primary-blue" />
                    </div>
                    <span className="text-primary-white">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-primary-white/10 rounded-lg p-4 backdrop-blur-sm">
                <h4 className="text-lg font-semibold text-primary-dark mb-3">Compliance Dashboard</h4>
                <p className="mb-4 text-sm text-primary-dark">Real-time visibility into your compliance status.</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "DPDPA Ready", value: "100%" },
                    { label: "Data Encrypted", value: "100%" },
                    { label: "Access Logged", value: "100%" },
                    { label: "Audit Ready", value: "100%" }
                  ].map((item, i) => (
                    <div key={i} className="bg-primary-orange rounded-lg p-2 text-center">
                      <div className="text-xl font-bold text-primary-white">{item.value}</div>
                      <div className="text-xs text-primary-white">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// UseCase Process Section
const UseCaseProcess = () => {
  const steps = [
    {
      title: "Identify Pain Points",
      description: "We analyze your current document workflows to identify bottlenecks and inefficiencies.",
      icon: Search,
      color: "from-primary-blue to-primary-orange"
    },
    {
      title: "Solution Design",
      description: "Our experts design a tailored solution addressing your specific challenges and requirements.",
      icon: PenTool,
      color: "from-primary-blue to-primary-orange"
    },
    {
      title: "Implementation",
      description: "We deploy the solution with minimal disruption, following industry best practices.",
      icon: Settings,
      color: "from-primary-blue to-primary-orange"
    },
    {
      title: "Training & Adoption",
      description: "Comprehensive training ensures your team can leverage the solution effectively.",
      icon: Users,
      color: "from-primary-blue to-primary-orange"
    },
    {
      title: "Continuous Improvement",
      description: "Ongoing optimization ensures you get maximum value from your investment.",
      icon: BarChart2,
      color: "from-primary-blue to-primary-orange"
    }
  ];

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
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-blue to-primary-orange bg-clip-text text-transparent">
            Our Proven Methodology
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-blue to-primary-orange mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-primary-dark max-w-3xl mx-auto">
            A structured approach that ensures success at every stage of your document automation journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-full p-6 bg-primary-white rounded-xl shadow-lg border border-primary-orange hover:shadow-xl transition-shadow duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center mb-4`}>
                  <step.icon size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary-dark mb-2">{step.title}</h3>
                <p className="text-sm text-primary-dark">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Final UseCase Component
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