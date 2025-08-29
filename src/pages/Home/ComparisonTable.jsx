// Optimized ComparisonTable Component
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import Zap from 'lucide-react/dist/esm/icons/zap';
import Clock from 'lucide-react/dist/esm/icons/clock';
import LayoutDashboard from 'lucide-react/dist/esm/icons/layout-dashboard';

const ComparisonTable = React.memo(() => {
  

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
    <section className="relative py-12 overflow-hidden bg-primary-white">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 bg-gradient-to-r from-primary-blue to-primary-orange bg-clip-text text-transparent">
            Why Choose Datablize Solution?
          </h2>
          <h3 className="text-md sm:text-lg lg:text-xl font-medium mb-3 text-primary-dark">
            Is your organization still drowning in manual document processing?
          </h3>
          <div className="w-12 h-1 mx-auto rounded-full mb-3 bg-gradient-to-r from-primary-blue to-primary-orange"></div>
          <p className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed text-primary-dark">
            Every hour spent on document management is an hour lost on innovation. Datablize's AI engine automatically processes documents, extracts insights, and streamlines workflows without human intervention.
          </p>
        </motion.div>

        <motion.div 
          className="rounded-lg shadow-md overflow-hidden border border-primary-orange bg-primary-white max-h-96 overflow-y-auto mx-auto max-w-4xl"
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
              <tbody className="divide-y divide-primary-light">
                {tableData.map((row, index) => (
                  <motion.tr 
                    key={index} 
                    className="transition-colors duration-200 hover:bg-primary-light"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <td className="px-3 sm:px-4 py-2 whitespace-nowrap font-medium text-primary-dark">
                      {row.feature}
                    </td>
                    <td className="px-3 sm:px-4 py-2 whitespace-normal text-primary-dark opacity-70">
                      <div className="flex items-start gap-1">
                        <div className="w-1.5 h-1.5 mt-1 rounded-full flex-shrink-0 bg-primary-orange opacity-50"></div>
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="px-3 sm:px-4 py-2 whitespace-normal text-primary-dark">
                      <div className="flex items-start gap-1">
                        <div className="w-2.5 h-2.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-primary-orange">
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
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/contact">
            <button 
              className="group px-4 sm:px-5 py-1.5 sm:py-2 rounded-lg font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-primary-blue to-primary-orange text-primary-white"
              aria-label="Transform your document management"
            >
              <span className="flex items-center justify-center gap-1">
                Ready to Transform Your Documents?
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
});

export default ComparisonTable;