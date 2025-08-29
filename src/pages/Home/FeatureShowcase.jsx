// Optimized FeatureShowcase Component
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUnlink } from 'react-icons/fa';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import Bot from 'lucide-react/dist/esm/icons/bot';
import Cloud from 'lucide-react/dist/esm/icons/cloud';
import Search from 'lucide-react/dist/esm/icons/search';
import Smartphone from 'lucide-react/dist/esm/icons/smartphone';
import RefreshCw from 'lucide-react/dist/esm/icons/refresh-cw';
import BarChart2 from 'lucide-react/dist/esm/icons/bar-chart-2';
import Settings from 'lucide-react/dist/esm/icons/settings';
import Cpu from 'lucide-react/dist/esm/icons/cpu';
import Eye from 'lucide-react/dist/esm/icons/eye';
import Clock from 'lucide-react/dist/esm/icons/clock';
import Lock from 'lucide-react/dist/esm/icons/lock';

const FeatureShowcase = React.memo(() => {
  const [activeFeature, setActiveFeature] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: false });

  const showcaseFeatures = [
    { title: "Centralized Document Repository", description: "All your documents securely stored in one easily accessible location." },
    { title: "Fast & Intelligent Search", description: "Find any document instantly with AI-powered search capabilities." },
    { title: "Custom Workflow Automation", description: "Streamline your processes with tailored automation solutions." }
  ];

  const featureCardGroups = [
    [
      { icon: <Cloud size={24} />, text: "Centralized Repository" },
      { icon: <Search size={24} />, text: "Intelligent Search" },
      { icon: <Smartphone size={24} />, text: "Mobile-Friendly" },
      { icon: <Lock size={24} />, text: "End-to-End Encryption" }
    ],
    [
      { icon: <RefreshCw size={24} />, text: "Seamless Integrations" },
      { icon: <BarChart2 size={24} />, text: "Reporting & Analytics" },
      { icon: <Settings size={24} />, text: "Workflow Automation" },
      { icon: <Cloud size={24} />, text: "Auto Backup" }
    ],
    [
      { icon: <Cpu size={24} />, text: "AI Processing" },
      { icon: <FaUnlink size={24} />, text: "Smart Linking" },
      { icon: <Eye size={24} />, text: "Visual Recognition" },
      { icon: <Clock size={24} />, text: "Time Tracking" }
    ]
  ];

  const handleFeatureChange = useCallback((index) => {
    setActiveFeature(index);
  }, []);

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % showcaseFeatures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [inView, showcaseFeatures.length]);

  return (
    <section ref={ref} className="relative py-16 overflow-hidden bg-gradient-to-br from-primary-white to-primary-light">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="backdrop-blur-xl rounded-xl shadow-xl p-6 lg:p-8 bg-primary-white border border-primary-orange"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left Column - Text Content */}
              <div className="lg:w-1/2 flex flex-col justify-center">
                <div>
                  <motion.div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg bg-primary-orange"
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Bot size={28} className="text-primary-white" />
                  </motion.div>

                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left text-primary-dark">
                    Your Intelligent Document Infrastructure
                  </h2>

                  <motion.div
                    key={activeFeature}
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl lg:text-2xl font-bold mb-3 text-center lg:text-left text-primary-blue">
                      {showcaseFeatures[activeFeature].title}
                    </h3>
                    <p className="text-lg leading-relaxed text-center lg:text-left text-primary-dark">
                      {showcaseFeatures[activeFeature].description}
                    </p>
                  </motion.div>

                  {/* Feature Indicators */}
                  <div className="flex justify-center lg:justify-start gap-2 mb-6">
                    {showcaseFeatures.map((_, index) => (
                      <button
                        key={index}
                        className={`h-2 rounded-full transition-all duration-300 ${index === activeFeature ? 'w-6 bg-primary-orange' : 'w-2 bg-primary-light'}`}
                        onClick={() => handleFeatureChange(index)}
                        aria-label={`Show feature ${index + 1}: ${showcaseFeatures[index].title}`}
                        aria-pressed={index === activeFeature}
                      />
                    ))}
                  </div>
                </div>

                <Link to="/contact" className="w-full lg:w-auto">
                  <button
                    className="group w-full px-6 py-3 rounded-xl font-bold text-md shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary-blue to-primary-orange text-primary-white"
                    aria-label="Get started with Datablize"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Get Started Today
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </Link>
              </div>

              {/* Right Column - Feature Cards */}
              <div className="lg:w-1/2">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {featureCardGroups.map((group, groupIndex) => (
                    <motion.div
                      key={groupIndex}
                      className="space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: groupIndex * 0.2 }}
                    >
                      {group.map((card, cardIndex) => (
                        <div
                          key={cardIndex}
                          className="p-4 rounded-lg bg-primary-light border border-primary-orange shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] hover:bg-[#fca311] hover:text-white"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-md bg-primary-orange text-primary-white">
                              {card.icon}
                            </div>
                            <span className="text-sm font-medium">{card.text}</span>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default FeatureShowcase;