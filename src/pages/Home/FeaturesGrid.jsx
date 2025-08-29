// Optimized FeaturesGrid Component
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import Zap from 'lucide-react/dist/esm/icons/zap';
import Shield from 'lucide-react/dist/esm/icons/shield';
import Search from 'lucide-react/dist/esm/icons/search';
import Brain from 'lucide-react/dist/esm/icons/brain';
import Database from 'lucide-react/dist/esm/icons/database';
import Users from 'lucide-react/dist/esm/icons/users';
import Clock from 'lucide-react/dist/esm/icons/clock';
import LayoutDashboard from 'lucide-react/dist/esm/icons/layout-dashboard';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FeaturesGrid = React.memo(() => {
  const features = [
    {
      icon: <Brain size={24} />,
      title: "Intelligent Document Analysis",
      description: "AI automatically classifies, extracts key information, and summarizes documents, reducing processing time by 93%.",
    },
    {
      icon: <Zap size={24} />,
      title: "Zero-Touch Workflows",
      description: "Automated processes route documents, notify stakeholders, and trigger actions based on content—without manual intervention.",
    },
    {
      icon: <Search size={24} />,
      title: "Predictive Discovery",
      description: "AI anticipates document needs based on your behavior patterns and surfaces relevant content before you search.",
    },
    {
      icon: <Shield size={24} />,
      title: "Adaptive Security",
      description: "Context-aware protection automatically adjusts access controls based on document sensitivity and user behavior.",
    },
    {
      icon: <Database size={24} />,
      title: "Knowledge Network",
      description: "AI connects related documents across silos, exposing hidden relationships and building your organizational knowledge graph.",
    },
    {
      icon: <Users size={24} />,
      title: "Intelligent Collaboration",
      description: "Smart sharing suggests relevant collaborators and automatically manages permissions as projects evolve.",
    },
    {
      icon: <Clock size={24} />,
      title: "Time Reclamation",
      description: "Automated processing gives teams back 15+ hours per week previously spent on document management tasks.",
    },
    {
      icon: <LayoutDashboard size={24} />,
      title: "Insight Analytics",
      description: "AI surfaces patterns and anomalies across your document corpus, revealing business trends you'd otherwise miss.",
    }
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-primary-white to-primary-light">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-blue to-primary-orange bg-clip-text text-transparent pb-2">
            The Intelligent Document Revolution
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full mb-4 bg-gradient-to-r from-primary-blue to-primary-orange"></div>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-primary-dark">
            Our AI-powered platform transforms static documents into dynamic knowledge assets that work for you—not the other way around.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl shadow-md bg-primary-white border border-primary-orange transition-all duration-300 hover:translate-y-[-5px] hover:scale-[1.02] hover:bg-[#f3f7f8] hover:shadow-lg"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div 
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-gradient-to-r from-primary-blue to-primary-orange text-primary-white"
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-primary-dark">
                {feature.title}
              </h3>
              <p className="text-sm text-primary-dark opacity-80">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/features">
            <button 
              className="group px-6 py-3 rounded-xl font-bold text-md shadow-md transition-all duration-300 bg-gradient-to-r from-primary-blue to-primary-orange text-primary-white hover:translate-y-[-2px] hover:scale-[1.05]"
              aria-label="Explore all features of Datablize"
            >
              <span className="flex items-center justify-center gap-2">
                Explore All Features
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
});

export default FeaturesGrid;