import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, Zap, Shield, Search, Cloud, Bot, FileText, Lock, Cpu, Scan, Workflow, Fingerprint, Key, Clock, Activity, Database, ShieldCheck, Network, Check, Table, Folder, Tag, Trash2, LayoutDashboard, Send, Users, PenTool, BarChart2, Smartphone, Palette, Server, GitBranch } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  // Define the color palette to match Features component
  const colors = {
    primaryBlue: '#2563eb',
    primaryOrange: '#f97316',
    primaryWhite: '#ffffff',
    primaryLight: '#f0f9ff',
    primaryDark: '#1e293b',
  };

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is Datablize cloud-based or on-premises?",
      answer: "Datablize supports only On-Premise deployment models based on customer needs and compliance requirements."
    },
    {
      question: "Does your DMS support version control and access rights?",
      answer: "Yes, Datablize DMS includes version control, role-based access, audit trails, and document lifecycle management."
    },
    {
      question: "What document formats are supported?",
      answer: "We support a wide range of formats including PDF, DOCX, XLSX, TIFF, PNG, JPG, and more."
    },
    {
      question: "Does Datablize support automated document classification?",
      answer: "Yes, our AI-based IDP engine can classify documents automatically based on content and structure."
    },
    {
      question: "Can Datablize extract information from handwritten documents?",
      answer: "Yes, our OCR engine supports handwritten text recognition with reasonable accuracy depending on legibility."
    },
    {
      question: "How accurate is the OCR and data extraction?",
      answer: "Docuverse uses advanced AI-powered OCR and Intelligent Document Processing (IDP) algorithms. Accuracy levels typically exceed 90–95% for printed documents and structured forms. Handwritten and unstructured content are also supported, with trainable models that improve accuracy over time."
    },
    {
      question: "Is there a no-code workflow builder?",
      answer: "Yes, our Workflow Automation module comes with a drag-and-drop no-code builder for quick process creation and deployment."
    },
    {
      question: "Is Docuverse compliant with industry regulations?",
      answer: "Yes. Docuverse is built with compliance in mind. It aligns with ISO 27001, DPDPA 2023, GDPR, and other global data protection standards. The platform supports role-based access, audit trails, and data retention policies to meet regulatory needs across sectors like finance, healthcare, and government."
    },
    {
      question: "Is my data encrypted?",
      answer: "All data is encrypted at rest and in transit using industry-standard encryption protocols."
    },
    {
      question: "Can Docuverse integrate with our existing systems?",
      answer: "Absolutely. Docuverse provides robust APIs, webhooks, and pre-built connectors for common platforms like SAP, Salesforce, Microsoft Dynamics, SharePoint, and more. We also support custom integrations through RESTful APIs and third-party tools."
    },
    {
      question: "Is Active Directory or LDAP supported?",
      answer: "Yes, we support integration with Active Directory (AD) and LDAP for user authentication and management."
    },
    {
      question: "Can I connect my document scanner or email inbox for ingestion?",
      answer: "Yes, documents can be ingested via scanners, email, FTP/SFTP, APIs, and web portals."
    },
    {
      question: "Do you support intelligent validations and business rule automation?",
      answer: "Yes, you can define custom rules for field-level validation, calculations, and conditional workflows."
    },
    {
      question: "Can Docuverse handle documents in multiple languages?",
      answer: "Yes. Docuverse supports multi-language OCR and data extraction, including major Indian and international languages such as English, Hindi, Bengali, Tamil, Arabic, French, German, and more National and International Languages. Language-specific models can be customized based on your regional needs."
    },
    {
      question: "Do you offer implementation services?",
      answer: "Yes, our professional services team will assist you with end-to-end deployment, configuration, and customization."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-white to-primary-light py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-blue to-primary-orange rounded-xl flex items-center justify-center shadow-lg">
              <FileText size={24} className="text-primary-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-br from-primary-blue to-primary-orange text-transparent bg-clip-text mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-600">
            Find answers to common questions about Datablize
          </p>
        </motion.div>

        <div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-primary-orange/20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <p className="text-slate-600 mb-8 text-center">
                Welcome to the Datablize FAQ hub. We've compiled answers to the most commonly asked questions to help you better understand our platform, solutions, and services.
              </p>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="border border-primary-blue/20 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
                  >
                    <button
                      className={`w-full flex justify-between items-center p-4 text-left ${activeIndex === index ? 'bg-primary-light' : 'bg-white'}`}
                      onClick={() => toggleFAQ(index)}
                    >
                      <h3 className="text-lg font-semibold text-primary-dark">{faq.question}</h3>
                      <svg
                        className={`w-5 h-5 text-primary-blue transition-transform ${activeIndex === index ? 'transform rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: activeIndex === index ? 1 : 0,
                        height: activeIndex === index ? 'auto' : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-0 text-slate-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center mt-12 pt-6 border-t border-primary-blue/20"
            >
              <p className="text-lg text-slate-700 mb-4">
                Still have questions?
              </p>
              <a 
                href="mailto:support@datablize.com" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-blue to-primary-orange text-white rounded-xl font-medium hover:shadow-md transition-all duration-300"
              >
                Contact Support
                <ArrowRight size={16} className="ml-2" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;