import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight, FileText, Database, Lock, Users, Check, Table, Search,
  ShieldCheck, BarChart2, Activity, Shield, Server, Send,
  PenTool, Settings, FileDigit, ChevronDown, Download,
  Stethoscope,
  ClipboardList,
  FilePlus2,
  FileSearch
} from 'lucide-react';
import { motion } from 'framer-motion';
import TabsNavigation from '../components/common/TabNavigation';

// Reusable Components
// const FloatingElement = ({ children, delay = 0, amplitude = 20 }) => {
//   const [offset, setOffset] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setOffset(prev => prev + 0.02);
//     }, 16);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       className="transition-transform duration-100"
//       style={{
//         transform: `translateY(${Math.sin(offset + delay) * amplitude}px) rotateY(${Math.sin(offset * 0.5) * 10}deg)`
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// const Card3D = ({ children, className = "", index = 0 }) => {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [isHovered, setIsHovered] = useState(false);
//   const cardRef = useRef(null);

//   const handleMouseMove = (e) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
//     const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
//     setMousePos({ x: x * 20, y: y * -20 });
//   };

//   return (
//     <div
//       ref={cardRef}
//       className={`relative perspective-1000 ${className}`}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => {
//         setIsHovered(false);
//         setMousePos({ x: 0, y: 0 });
//       }}
//       style={{
//         transform: `rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
//         transition: isHovered ? 'none' : 'transform 0.5s ease-out',
//         transformStyle: 'preserve-3d'
//       }}
//     >
//       <div className="relative transform-gpu" style={{ transform: 'translateZ(50px)' }}>
//         {children}
//       </div>
//     </div>
//   );
// };

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
    <section className="relative py-20 md:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#E3F2FD] via-[#E8F5E9] to-[#F1F8E9]">
      {/* Background Elements - Reduced on mobile */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-6 md:grid-cols-12 grid-rows-12 h-full w-full">
          {[...Array(72)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-white/10"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.3, 0],
                transition: {
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Orbs - Smaller on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {[15, 25, 35, 45].map((size, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-[#B3E5FC] to-[#58A0C8]"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${5 + i * 20}%`,
              top: `${15 + i * 10}%`,
              filter: 'blur(10px)',
              opacity: 0.3
            }}
            animate={{
              y: [0, 20, 0],
              x: [0, 15, 0],
              transition: {
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
          {/* Animated Showcase - Made responsive */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 mt-10 lg:mt-0">
            <motion.div
              className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/20 shadow-xl md:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#113F67]/30 to-[#58A0C8]/30 backdrop-blur-sm md:backdrop-blur-md">
                {useCases.map((useCase, idx) => (
                  <motion.div
                    key={useCase}
                    className="absolute inset-0 flex items-center justify-center p-6 sm:p-12"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: activeIndex === idx ? 1 : 0,
                      scale: activeIndex === idx ? 1 : 0.8
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-[#B3E5FC] to-[#4FC3F7] rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                        {[
                          <FileText size={24} className="text-[#113F67]" />,
                          <Database size={24} className="text-[#113F67]" />,
                          <Lock size={24} className="text-[#113F67]" />,
                          <Users size={24} className="text-[#113F67]" />
                        ][idx]}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{useCase}</h3>
                      <p className="text-sm sm:text-base text-white/80">
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
            </motion.div>
          </div>

          {/* Content - Made responsive */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="text-[#0D47A1]">Real-World </span>
                <span className="bg-gradient-to-r from-[#0D47A1] via-[#1976D2] to-[#42A5F5] bg-clip-text text-transparent">
                  Use Cases Solved
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-[#0D47A1] mb-4 sm:mb-6">
                Discover how Datablize transforms document workflows across industries with intelligent automation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-3 md:space-y-4"
            >
              {[
                "Industry-specific document automation",
                "AI-powered classification and extraction",
                "Compliance-ready secure storage",
                "End-to-end workflow automation",
                "Seamless integration with existing systems"
              ].map((feature, i) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#B3E5FC] rounded-full flex items-center justify-center shrink-0">
                    <Check className="text-[#113F67]" size={14} />
                  </div>
                  <span className="text-sm sm:text-base text-[#0D47A1]/80">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6"
            >
              <button className="px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-[#0D47A1] to-[#1976D2] text-white rounded-lg sm:rounded-xl font-bold hover:shadow-lg hover:shadow-[#0D47A1]/30 sm:hover:shadow-[#0D47A1]/50 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base">
                <span>Get a Demo</span>
                <ArrowRight size={16} />
              </button>
              <button className="px-6 py-2 sm:px-8 sm:py-3 bg-transparent border border-[#B3E5FC] text-[#0D47A1] rounded-lg sm:rounded-xl font-bold hover:bg-[#B3E5FC]/10 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base">
                <span>Explore by Industry</span>
                <Table size={16} />
              </button>
            </motion.div>
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
      color: "from-[#58A0C8] to-[#34699A]",
    },
    {
      name: "Financial Services",
      icon: BarChart2,
      description: "Banking and insurance document workflows",
      color: "from-[#FDF5AA] to-[#FFD166]"
    },
    {
      name: "Healthcare",
      icon: Activity,
      description: "Secure patient record management",
      color: "from-[#A1C4FD] to-[#C2E9FB]"
    },
    {
      name: "Insurance",
      icon: Shield,
      description: "Policy and claims documentation",
      color: "from-[#84FAB0] to-[#8FD3F4]"
    },
    {
      name: "Manufacturing",
      icon: Server,
      description: "Supply chain document automation",
      color: "from-[#FF9A9E] to-[#FAD0C4]"
    },
    {
      name: "Shared Services",
      icon: Users,
      description: "Document processing at scale",
      color: "from-[#58A0C8] to-[#113F67]"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#FDF5AA]/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#113F67] via-[#34699A] to-[#58A0C8] bg-clip-text text-transparent pb-2">
            Industry Solutions
          </h2>
          <p className="text-xl text-[#113F67]/80 max-w-3xl mx-auto">
            Tailored document automation for your industry's unique challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} index={index} className="h-full">
              <div className="group h-full p-6 bg-white rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className={`w-12 h-12 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#113F67] group-hover:text-[#34699A] transition-colors duration-300 mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-[#113F67]/80 mb-4">
                  {industry.description}
                </p>
                <button className="mt-4 text-sm font-medium text-[#34699A] flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                  <span>Explore solutions</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
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
      color: "from-[#58A0C8] to-[#34699A]",
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
      color: "from-[#FDF5AA] to-[#FFD166]",
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
      color: "from-[#A1C4FD] to-[#C2E9FB]",
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
      color: "from-[#84FAB0] to-[#8FD3F4]",
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
      color: "from-[#FF9A9E] to-[#FAD0C4]",
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
      color: "from-[#A78BFA] to-[#7C3AED]",
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
      color: "from-[#FCA5A5] to-[#F87171]",
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
      color: "from-[#6EE7B7] to-[#10B981]",
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
      color: "from-[#FCD34D] to-[#F59E0B]",
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
    <section className="py-20 bg-gradient-to-b from-[#113F67]/5 to-[#113F67]/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#113F67] via-[#34699A] to-[#58A0C8] bg-clip-text text-transparent pb-2">
            Featured Use Cases
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#58A0C8] to-[#34699A] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-[#113F67]/80 max-w-3xl mx-auto">
            Explore how Datablize solves critical document challenges across industries with intelligent automation.
          </p>
        </div>

        {/* Tabs Navigation */}
        <TabsNavigation
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          activeTabColor="from-[#34699A] to-[#113F67]"
          inactiveTabColor="text-[#113F67] hover:bg-[#113F67]/10"
          iconColor="text-[#34699A]"
          activeIconColor="text-white"
          gradientFadeColor="from-[#113F67]/5"
        />

        {/* Tab Content */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-white/20">
          <div className="md:flex">
            {/* Left Side - Overview */}
            <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-white to-[#FDF5AA]/10">
              <div className={`w-16 h-16 bg-gradient-to-r ${useCases[activeTab].color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                {React.createElement(useCases[activeTab].icon, { size: 24, className: "text-white" })}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-[#113F67] mb-4">
                {useCases[activeTab].title}
              </h3>
              <p className="text-[#113F67]/90 mb-8">
                {useCases[activeTab].description}
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-[#113F67] mb-3">Key Actors</h4>
                <div className="flex flex-wrap gap-2">
                  {useCases[activeTab].actors.map((actor, i) => (
                    <span key={i} className="px-3 py-1 bg-[#113F67]/5 rounded-full text-sm text-[#113F67]">
                      {actor}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#113F67] mb-3">Primary Benefits</h4>
                <div className="space-y-3">
                  {useCases[activeTab].benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#113F67]/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check size={12} className="text-[#113F67]" />
                      </div>
                      <span className="text-[#113F67]/90">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Flow */}
            <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-[#113F67]/5 to-[#113F67]/10">
              <h4 className="text-lg font-semibold text-[#113F67] mb-6">Primary Workflow</h4>
              <div className="space-y-6">
                {useCases[activeTab].flow.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${i === useCases[activeTab].flow.length - 1 ? 'bg-gradient-to-r from-[#FDF5AA] to-[#FFD166]' : 'bg-[#113F67]/10'}`}>
                        {i === useCases[activeTab].flow.length - 1 ? (
                          <Check size={16} className="text-[#113F67]" />
                        ) : (
                          <span className="text-sm font-medium text-[#113F67]">{i + 1}</span>
                        )}
                      </div>
                      {i < useCases[activeTab].flow.length - 1 && (
                        <div className="w-0.5 h-6 bg-[#113F67]/20 my-1"></div>
                      )}
                    </div>
                    <div>
                      <p className="text-[#113F67]/90">{step}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <button className="group relative px-6 py-2 bg-gradient-to-r from-[#113F67] to-[#34699A] text-white rounded-xl font-medium overflow-hidden transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
                  <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <span>View Detailed Case Study</span>
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

// Process Section
const UseCaseProcess = () => {
  const steps = [
    {
      title: "Identify Pain Points",
      description: "We analyze your current document workflows to identify bottlenecks and inefficiencies.",
      icon: Search,
      color: "from-[#58A0C8] to-[#34699A]"
    },
    {
      title: "Solution Design",
      description: "Our experts design a tailored solution addressing your specific challenges and requirements.",
      icon: PenTool,
      color: "from-[#FDF5AA] to-[#FFD166]"
    },
    {
      title: "Implementation",
      description: "We deploy the solution with minimal disruption, following industry best practices.",
      icon: Settings,
      color: "from-[#A1C4FD] to-[#C2E9FB]"
    },
    {
      title: "Training & Adoption",
      description: "Comprehensive training ensures your team can leverage the solution effectively.",
      icon: Users,
      color: "from-[#84FAB0] to-[#8FD3F4]"
    },
    {
      title: "Continuous Improvement",
      description: "Ongoing optimization ensures you get maximum value from your investment.",
      icon: BarChart2,
      color: "from-[#FF9A9E] to-[#FAD0C4]"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#113F67]/10 to-[#113F67]/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#113F67] via-[#34699A] to-[#58A0C8] bg-clip-text text-transparent pb-2">
            Our Approach to Solving Your Challenges
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#58A0C8] to-[#34699A] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-[#113F67]/80 max-w-3xl mx-auto">
            A structured methodology that ensures success at every stage of your document automation journey.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#58A0C8] to-[#113F67] transform -translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative lg:flex lg:items-center lg:justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Left side (even) */}
                {index % 2 === 0 ? (
                  <>
                    <div className="lg:w-5/12 lg:pr-12 mb-8 lg:mb-0">
                      <div>
                        <div className="p-6 bg-white rounded-2xl shadow-xl border border-white/20">
                          <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                            <step.icon size={20} className="text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-[#113F67] mb-2">
                            {step.title}
                          </h3>
                          <p className="text-[#113F67]/70">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-[#113F67] to-[#58A0C8] rounded-full items-center justify-center shadow-lg z-10">
                      <div className="w-5 h-5 bg-white rounded-full"></div>
                    </div>

                    {/* Right empty space */}
                    <div className="lg:w-5/12"></div>
                  </>
                ) : (
                  <>
                    {/* Left empty space */}
                    <div className="lg:w-5/12"></div>

                    {/* Center dot */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-[#113F67] to-[#58A0C8] rounded-full items-center justify-center shadow-lg z-10">
                      <div className="w-5 h-5 bg-white rounded-full"></div>
                    </div>

                    {/* Right side (odd) */}
                    <div className="lg:w-5/12 lg:pl-12">
                      <div>
                        <div className="p-6 bg-white rounded-2xl shadow-xl border border-white/20">
                          <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                            <step.icon size={20} className="text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-[#113F67] mb-2">
                            {step.title}
                          </h3>
                          <p className="text-[#113F67]/70">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// New Components to add to the file

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Operational Efficiency",
      description: "Improve operational efficiency by 40-60% across document workflows",
      icon: BarChart2,
      color: "from-[#58A0C8] to-[#34699A]",
      metrics: ["40-60% faster processing", "95% accuracy in extraction"]
    },
    {
      title: "Compliance & Security",
      description: "Achieve compliance with ISO 27001, GDPR, DPDPA 2023 and more",
      icon: ShieldCheck,
      color: "from-[#FDF5AA] to-[#FFD166]",
      metrics: ["100% audit readiness", "Role-based access control"]
    },
    {
      title: "Cost Savings",
      description: "Reduce manual labor costs and eliminate paper-based processes",
      icon: Activity,
      color: "from-[#A1C4FD] to-[#C2E9FB]",
      metrics: ["60% cost reduction", "80% less storage costs"]
    },
    {
      title: "Integration Ready",
      description: "Seamless integration with legacy and modern IT systems",
      icon: Server,
      color: "from-[#84FAB0] to-[#8FD3F4]",
      metrics: ["Pre-built connectors", "API-first architecture"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#FDF5AA]/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#113F67] via-[#34699A] to-[#58A0C8] bg-clip-text text-transparent pb-2">
            Measurable Business Impact
          </h2>
          <p className="text-xl text-[#113F67]/80 max-w-3xl mx-auto">
            Datablize delivers tangible results across all key performance indicators
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} index={index} className="h-full">
              <div className="group h-full p-6 bg-white rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#113F67] group-hover:text-[#34699A] transition-colors duration-300 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#113F67]/80 mb-4">
                  {benefit.description}
                </p>
                <div className="space-y-2 mt-4">
                  {benefit.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#34699A] rounded-full"></div>
                      <span className="text-sm text-[#113F67]/90">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IntegrationCapabilities = () => {
  const integrations = [
    {
      category: "Enterprise Systems",
      items: ["SAP", "Oracle", "Microsoft Dynamics", "Tally", "Zoho"],
      icon: Server
    },
    {
      category: "CRM",
      items: ["Salesforce", "HubSpot", "Zoho CRM", "Microsoft CRM"],
      icon: Users
    },
    {
      category: "HRMS",
      items: ["Workday", "SuccessFactors", "Zoho People", "BambooHR"],
      icon: Users
    },
    {
      category: "Cloud Storage",
      items: ["SharePoint", "Google Drive", "OneDrive", "Dropbox"],
      icon: Database
    },
    {
      category: "Communication",
      items: ["Microsoft Teams", "Slack", "Email (SMTP/IMAP)", "Twilio"],
      icon: Send
    },
    {
      category: "Industry Standards",
      items: ["HL7/FHIR (Healthcare)", "SWIFT (Banking)", "EDI", "ISO Standards"],
      icon: Shield
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#113F67]/5 to-[#113F67]/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#113F67] via-[#34699A] to-[#58A0C8] bg-clip-text text-transparent pb-2">
            Seamless Integration Ecosystem
          </h2>
          <p className="text-xl text-[#113F67]/80 max-w-3xl mx-auto">
            Datablize connects with your existing tech stack for end-to-end automation
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-white/20 p-8 md:p-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#113F67]/10 rounded-lg flex items-center justify-center group-hover:bg-[#113F67] transition-colors duration-300">
                    <integration.icon size={18} className="text-[#113F67] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-[#113F67]">{integration.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {integration.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-[#113F67]/5 rounded-full text-sm text-[#113F67]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="group relative px-8 py-3 bg-gradient-to-r from-[#113F67] to-[#34699A] text-white rounded-xl font-medium overflow-hidden transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
              <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span>Explore All Integration Options</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

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
    <section className="py-20 bg-gradient-to-b from-white to-[#113F67]/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#113F67] via-[#34699A] to-[#58A0C8] bg-clip-text text-transparent">
            Built for Compliance
          </h2>
          <p className="text-xl text-[#113F67]/80 max-w-3xl mx-auto">
            Enterprise-grade security and regulatory compliance across industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {standards.map((standard, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl border border-white/20 p-6 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#113F67]/10 rounded-xl flex items-center justify-center">
                  <standard.icon size={20} className="text-[#113F67]" />
                </div>
                <h3 className="text-xl font-bold text-[#113F67]">{standard.name}</h3>
              </div>
              <p className="text-[#113F67]/80">{standard.description}</p>
              {/* <div className="mt-4 flex justify-end">
                <button className="text-sm font-medium text-[#34699A] flex items-center gap-1 hover:gap-2 transition-all duration-300">
                  <span>Learn more</span>
                  <ArrowRight size={16} className="hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div> */}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#113F67] to-[#34699A] rounded-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Security Features</h3>
              <div className="space-y-4">
                {[
                  "AES-256 Encryption (at rest and in transit)",
                  "Role-Based Access Control (RBAC)",
                  "Multi-Factor Authentication (MFA)",
                  "Tamper-Proof Audit Trails",
                  "Data Retention & Auto-Archival Policies",
                  "Watermarking & Digital Rights Management (DRM)"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Check size={12} className="text-white" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-lg font-semibold mb-4">Compliance Dashboard</h4>
                <p className="mb-6">Real-time visibility into your compliance status across all regulations and standards.</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "DPDPA Ready", value: "100%" },
                    { label: "Data Encrypted", value: "100%" },
                    { label: "Access Logged", value: "100%" },
                    { label: "Audit Ready", value: "100%" }
                  ].map((item, i) => (
                    <div key={i} className="bg-white/20 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold">{item.value}</div>
                      <div className="text-sm">{item.label}</div>
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

// Use Case Page
const UseCase = () => {
  return (
    <div className="overflow-hidden">
      <UseCaseHero />
      <IndustrySolutions />
      <FeaturedUseCases />
      <UseCaseProcess />
      <BenefitsSection />
      <IntegrationCapabilities />
      <ComplianceSection />
    </div>
  );
};

export default UseCase;