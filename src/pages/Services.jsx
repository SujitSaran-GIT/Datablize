import React, { useState, useEffect } from 'react';
import {
  ChevronRight, ArrowRight, Settings, Wrench, ClipboardList, FileDigit, 
  Layers, Zap, Users, ShieldCheck, Database, Clock, Server, 
  Search, Workflow, Activity, Shield, BarChart2, Palette, 
  GitBranch, Check, Send, PenTool, Shield as ShieldIcon,
  Scan,
  FileText,
  Tag
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import TabsNavigation from '../components/common/TabNavigation';

// Services Hero Section
const ServicesHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const services = [
    "Implementation Services",
    "Managed Services",
    "Process Consulting",
    "Document Digitization"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-primary-blue flex flex-col gap-2">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Professional Services
                </motion.span>
                
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-primary-orange"
                >
                  Designed for Your
                </motion.span>
               
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-primary-blue"
                >
                  Business Needs
                </motion.span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className={`text-md sm:text-lg lg:text-xl mb-4 font-medium leading-relaxed text-primary-blue`}>
                Our services don't just support your digital transformation — they accelerate it.
              </p>
              <p className={`text-sm sm:text-md leading-relaxed text-primary-dark`}>
                From implementation to integration, we're your partner every step of the way with
                expert services tailored to your unique requirements.
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
                  className={`group relative px-5 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-sm sm:text-md shadow-lg sm:shadow-xl overflow-hidden transform transition-all duration-300 bg-gradient-to-r from-primary-blue to-primary-orange text-primary-white`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-gradient-to-r from-primary-orange to-primary-blue`}></div>
                  <div className="relative flex items-center gap-2 sm:gap-3">
                    <span>Book Consultation</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative max-w-md sm:max-w-lg mx-auto">
              <div className={`relative h-64 sm:h-80 md:h-96 w-full rounded-lg sm:rounded-xl overflow-hidden border-2 border-primary-orange shadow-lg sm:shadow-xl`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-primary-blue/20 to-primary-orange/20 backdrop-blur-sm`}>
                  {services.map((service, idx) => (
                    <motion.div
                      key={service}
                      className={`absolute inset-0 flex items-center justify-center p-6 sm:p-8`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeIndex === idx ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-center">
                        <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-primary-orange rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg`}>
                          {[
                            <Settings size={24} className="text-primary-white" />,
                            <Wrench size={24} className="text-primary-white" />,
                            <ClipboardList size={24} className="text-primary-white" />,
                            <FileDigit size={24} className="text-primary-white" />
                          ][idx]}
                        </div>
                        <h3 className={`text-xl sm:text-2xl font-bold text-primary-blue mb-2 sm:mb-3`}>{service}</h3>
                        <p className={`text-sm sm:text-base text-primary-blue`}>
                          {[
                            "Quick start with expert-led deployment and configuration",
                            "Let us manage, monitor and optimize your environment",
                            "Re-engineer processes for higher efficiency",
                            "Convert legacy paper records into digital files"
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

// Simple Tabs Navigation Component
const TabsNavigation = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {tabs.map((tab) => (
        <motion.button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
            activeTab === tab.id
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

// Services Tabs Section
const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState('implementation');

  const tabs = [
    { id: 'implementation', label: 'Implementation', icon: Settings },
    { id: 'managed', label: 'Managed', icon: Wrench },
    { id: 'consulting', label: 'Consulting', icon: ClipboardList },
    { id: 'digitization', label: 'Digitization', icon: FileDigit },
    { id: 'custom', label: 'Custom', icon: Layers }
  ];

  const services = {
    implementation: [
      {
        title: "Quick Start Deployment",
        description: "Accelerated onboarding with pre-configured templates and best practices",
        icon: Zap,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Configuration & Customization",
        description: "Tailored setup to match your business processes and requirements",
        icon: Settings,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "User Training & Adoption",
        description: "Comprehensive training programs for all user levels",
        icon: Users,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Integration Services",
        description: "Seamless connection with your existing systems and applications",
        icon: GitBranch,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Go-Live Support",
        description: "Dedicated assistance during and after launch",
        icon: ShieldCheck,
        color: "from-primary-blue to-primary-orange"
      }
    ],
    managed: [
      {
        title: "24/7 Monitoring",
        description: "Proactive system monitoring and alerting",
        icon: Activity,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Performance Optimization",
        description: "Continuous tuning for optimal performance",
        icon: BarChart2,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Security Management",
        description: "Ongoing security updates and vulnerability management",
        icon: Shield,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Backup & Disaster Recovery",
        description: "Automated backups and recovery planning",
        icon: Database,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "SLA Guaranteed Support",
        description: "Priority response with service level agreements",
        icon: Clock,
        color: "from-primary-blue to-primary-orange"
      }
    ],
    consulting: [
      {
        title: "Process Assessment",
        description: "Comprehensive analysis of current workflows",
        icon: Search,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Workflow Redesign",
        description: "Optimized process maps with automation opportunities",
        icon: Workflow,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Compliance Review",
        description: "Alignment with industry regulations and standards",
        icon: ShieldCheck,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Change Management",
        description: "Strategies for smooth organizational adoption",
        icon: Users,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "ROI Analysis",
        description: "Quantifiable benefits and efficiency gains",
        icon: BarChart2,
        color: "from-primary-blue to-primary-orange"
      }
    ],
    digitization: [
      {
        title: "Document Scanning",
        description: "High-volume scanning with quality control",
        icon: Scan,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "OCR Processing",
        description: "Advanced optical character recognition",
        icon: FileText,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Metadata Tagging",
        description: "Intelligent classification and indexing",
        icon: Tag,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Digital Archiving",
        description: "Secure long-term storage solutions",
        icon: Database,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Legacy System Migration",
        description: "Data transfer from old systems with validation",
        icon: Server,
        color: "from-primary-blue to-primary-orange"
      }
    ],
    custom: [
      {
        title: "API Development",
        description: "Custom integrations with third-party systems",
        icon: GitBranch,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Module Development",
        description: "Vertical-specific functionality extensions",
        icon: Layers,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "UI Customization",
        description: "Branded interfaces and user experiences",
        icon: Palette,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Workflow Automation",
        description: "Custom business process automation",
        icon: Workflow,
        color: "from-primary-blue to-primary-orange"
      },
      {
        title: "Data Analytics",
        description: "Custom reports and dashboards",
        icon: BarChart2,
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
            Comprehensive Service Offerings
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-blue to-primary-orange mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-primary-dark max-w-3xl mx-auto">
            End-to-end services to support your digital transformation journey at every stage.
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <TabsNavigation
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Tab Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services[activeTab].map((service, index) => (
            <motion.div 
              key={index} 
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="h-full p-6 bg-primary-white rounded-xl shadow-lg border border-primary-orange hover:shadow-xl transition-shadow duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-primary-dark leading-relaxed">
                  {service.description}
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
            <h3 className="text-xl font-bold mb-2 text-primary-white">Need Expert Help?</h3>
            <p className="mb-4 text-primary-light text-sm">
              Our team would love to show you how our services can transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <motion.button 
                  className="px-6 py-2 bg-primary-white text-primary-dark rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Sales
                </motion.button>
              </Link>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Services Process Section
const ServicesProcess = () => {
  const steps = [
    {
      title: "Discovery",
      description: "We begin by understanding your unique requirements, challenges, and goals through in-depth discussions.",
      icon: Search,
      color: "from-primary-blue to-primary-orange"
    },
    {
      title: "Planning",
      description: "Our experts create a tailored roadmap with clear milestones, deliverables, and success metrics.",
      icon: ClipboardList,
      color: "from-primary-blue to-primary-orange"
    },
    {
      title: "Implementation",
      description: "We deploy the solution with minimal disruption, following industry best practices and your preferences.",
      icon: Settings,
      color: "from-primary-blue to-primary-orange"
    },
    {
      title: "Training",
      description: "Comprehensive training ensures your team is fully equipped to leverage the new system effectively.",
      icon: Users,
      color: "from-primary-blue to-primary-orange"
    },
    {
      title: "Optimization",
      description: "Continuous monitoring and refinement to ensure you're getting maximum value from your investment.",
      icon: BarChart2,
      color: "from-primary-blue to-primary-orange"
    }
  ];

  return (
    <section className="relative py-16 bg-primary-light overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-blue to-primary-orange bg-clip-text text-transparent pb-2">
            Our Proven Service Methodology
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-blue to-primary-orange mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-primary-dark max-w-3xl mx-auto">
            A structured approach that ensures success at every stage of your digital transformation journey.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary-blue to-primary-orange transform -translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-0 lg:px-24 md:px-20 sm:px-16 ">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative lg:flex lg:items-center lg:justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Left side (even) */}
                {index % 2 === 0 ? (
                  <>
                    <div className="lg:w-5/12 lg:pr-12 mb-8 lg:mb-0">
                      <div>
                        <div className="p-6 bg-primary-white rounded-xl shadow-lg border border-primary-orange">
                          <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center mb-4`}>
                            <step.icon size={20} className="text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-primary-dark mb-2">
                            {step.title}
                          </h3>
                          <p className="text-sm text-primary-dark">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-orange rounded-full items-center justify-center shadow-lg z-10">
                      <div className="w-5 h-5 bg-primary-white rounded-full"></div>
                    </div>

                    {/* Right empty space */}
                    <div className="lg:w-5/12"></div>
                  </>
                ) : (
                  <>
                    {/* Left empty space */}
                    <div className="lg:w-5/12"></div>

                    {/* Center dot */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-orange rounded-full items-center justify-center shadow-lg z-10">
                      <div className="w-5 h-5 bg-primary-white rounded-full"></div>
                    </div>

                    {/* Right side (odd) */}
                    <div className="lg:w-5/12 lg:pl-12">
                      <div>
                        <div className="p-6 bg-primary-white rounded-xl shadow-lg border border-primary-orange">
                          <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center mb-4`}>
                            <step.icon size={20} className="text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-primary-dark mb-2">
                            {step.title}
                          </h3>
                          <p className="text-sm text-primary-dark">
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

// Services Page Main Component
const Services = () => {
  return (
    <div className="overflow-hidden">
      <ServicesHero />
      <ServicesTabs />
      <ServicesProcess />
    </div>
  );
};

export default Services;