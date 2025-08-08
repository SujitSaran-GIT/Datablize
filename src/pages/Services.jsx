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
import TabsNavigation from '../components/common/TabNavigation';
import { useTheme } from '../context/ThemeContext';

// Services Hero Section
const ServicesHero = () => {
  const { themeConfig } = useTheme();
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
    <section className={`relative flex items-center overflow-hidden min-h-full pt-20 pb-16 lg:pt-16 lg:pb-20 ${themeConfig.background}`}>
      <div className="container mx-auto px-4 sm:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className={themeConfig.textPrimary}>Professional </span>
                <span className={`bg-gradient-to-r ${themeConfig.gradientText} bg-clip-text`}>
                  Services
                </span>
                <br />
                <span className={themeConfig.textPrimary}>Designed for Your</span>
                <br />
                <span className={`bg-gradient-to-r ${themeConfig.gradientTextSecondary} bg-clip-text`}>
                  Business Needs
                </span>
              </h1>
            </div>

            <div>
              <p className={`text-md sm:text-lg lg:text-xl mb-4 ${themeConfig.textPrimary}/80 font-medium leading-relaxed`}>
                Our services don't just support your digital transformation — they accelerate it.
              </p>
              <p className={`text-sm sm:text-md ${themeConfig.textPrimary}/70 leading-relaxed`}>
                From implementation to integration, we're your partner every step of the way with
                expert services tailored to your unique requirements.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link to="/contact">
                <button className={`group relative px-5 sm:px-6 py-2 sm:py-3 ${themeConfig.button.primary} rounded-lg sm:rounded-xl font-bold text-sm sm:text-md shadow-lg sm:shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300`}>
                  <div className={`absolute inset-0 ${themeConfig.button.hover} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                  <div className="relative flex items-center gap-2 sm:gap-3">
                    <span>Book Consultation</span>
                  </div>
                </button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative max-w-md sm:max-w-lg mx-auto">
              <div className={`relative h-64 sm:h-80 md:h-96 w-full rounded-lg sm:rounded-xl overflow-hidden border-2 ${themeConfig.border} shadow-lg sm:shadow-xl`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${themeConfig.heroOverlayGradient} backdrop-blur-sm`}>
                  {services.map((service, idx) => (
                    <div
                      key={service}
                      className={`absolute inset-0 flex items-center justify-center p-6 sm:p-8 transition-opacity duration-500 ${activeIndex === idx ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <div className="text-center">
                        <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 ${themeConfig.featureIconBackground} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg`}>
                          {[
                            <Settings size={24} className={themeConfig.featureIconColor} />,
                            <Wrench size={24} className={themeConfig.featureIconColor} />,
                            <ClipboardList size={24} className={themeConfig.featureIconColor} />,
                            <FileDigit size={24} className={themeConfig.featureIconColor} />
                          ][idx]}
                        </div>
                        <h3 className={`text-xl sm:text-2xl font-bold ${themeConfig.textInverted} mb-2 sm:mb-3`}>{service}</h3>
                        <p className={`text-sm sm:text-base ${themeConfig.textInvertedSecondary}`}>
                          {[
                            "Quick start with expert-led deployment and configuration",
                            "Let us manage, monitor and optimize your environment",
                            "Re-engineer processes for higher efficiency",
                            "Convert legacy paper records into digital files"
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

// Services Tabs Section
const ServicesTabs = () => {
  const { themeConfig } = useTheme();
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
        color: "from-[#58A0C8] to-[#34699A]"
      },
      {
        title: "Configuration & Customization",
        description: "Tailored setup to match your business processes and requirements",
        icon: Settings,
        color: "from-[#FDF5AA] to-[#FFD166]"
      },
      {
        title: "User Training & Adoption",
        description: "Comprehensive training programs for all user levels",
        icon: Users,
        color: "from-[#A1C4FD] to-[#C2E9FB]"
      },
      {
        title: "Integration Services",
        description: "Seamless connection with your existing systems and applications",
        icon: GitBranch,
        color: "from-[#84FAB0] to-[#8FD3F4]"
      },
      {
        title: "Go-Live Support",
        description: "Dedicated assistance during and after launch",
        icon: ShieldCheck,
        color: "from-[#FF9A9E] to-[#FAD0C4]"
      }
    ],
    managed: [
      {
        title: "24/7 Monitoring",
        description: "Proactive system monitoring and alerting",
        icon: Activity,
        color: "from-[#58A0C8] to-[#34699A]"
      },
      {
        title: "Performance Optimization",
        description: "Continuous tuning for optimal performance",
        icon: BarChart2,
        color: "from-[#FDF5AA] to-[#FFD166]"
      },
      {
        title: "Security Management",
        description: "Ongoing security updates and vulnerability management",
        icon: Shield,
        color: "from-[#A1C4FD] to-[#C2E9FB]"
      },
      {
        title: "Backup & Disaster Recovery",
        description: "Automated backups and recovery planning",
        icon: Database,
        color: "from-[#84FAB0] to-[#8FD3F4]"
      },
      {
        title: "SLA Guaranteed Support",
        description: "Priority response with service level agreements",
        icon: Clock,
        color: "from-[#FF9A9E] to-[#FAD0C4]"
      }
    ],
    consulting: [
      {
        title: "Process Assessment",
        description: "Comprehensive analysis of current workflows",
        icon: Search,
        color: "from-[#58A0C8] to-[#34699A]"
      },
      {
        title: "Workflow Redesign",
        description: "Optimized process maps with automation opportunities",
        icon: Workflow,
        color: "from-[#FDF5AA] to-[#FFD166]"
      },
      {
        title: "Compliance Review",
        description: "Alignment with industry regulations and standards",
        icon: ShieldCheck,
        color: "from-[#A1C4FD] to-[#C2E9FB]"
      },
      {
        title: "Change Management",
        description: "Strategies for smooth organizational adoption",
        icon: Users,
        color: "from-[#84FAB0] to-[#8FD3F4]"
      },
      {
        title: "ROI Analysis",
        description: "Quantifiable benefits and efficiency gains",
        icon: BarChart2,
        color: "from-[#FF9A9E] to-[#FAD0C4]"
      }
    ],
    digitization: [
      {
        title: "Document Scanning",
        description: "High-volume scanning with quality control",
        icon: Scan,
        color: "from-[#58A0C8] to-[#34699A]"
      },
      {
        title: "OCR Processing",
        description: "Advanced optical character recognition",
        icon: FileText,
        color: "from-[#FDF5AA] to-[#FFD166]"
      },
      {
        title: "Metadata Tagging",
        description: "Intelligent classification and indexing",
        icon: Tag,
        color: "from-[#A1C4FD] to-[#C2E9FB]"
      },
      {
        title: "Digital Archiving",
        description: "Secure long-term storage solutions",
        icon: Database,
        color: "from-[#84FAB0] to-[#8FD3F4]"
      },
      {
        title: "Legacy System Migration",
        description: "Data transfer from old systems with validation",
        icon: Server,
        color: "from-[#FF9A9E] to-[#FAD0C4]"
      }
    ],
    custom: [
      {
        title: "API Development",
        description: "Custom integrations with third-party systems",
        icon: GitBranch,
        color: "from-[#58A0C8] to-[#34699A]"
      },
      {
        title: "Module Development",
        description: "Vertical-specific functionality extensions",
        icon: Layers,
        color: "from-[#FDF5AA] to-[#FFD166]"
      },
      {
        title: "UI Customization",
        description: "Branded interfaces and user experiences",
        icon: Palette,
        color: "from-[#A1C4FD] to-[#C2E9FB]"
      },
      {
        title: "Workflow Automation",
        description: "Custom business process automation",
        icon: Workflow,
        color: "from-[#84FAB0] to-[#8FD3F4]"
      },
      {
        title: "Data Analytics",
        description: "Custom reports and dashboards",
        icon: BarChart2,
        color: "from-[#FF9A9E] to-[#FAD0C4]"
      }
    ]
  };

  return (
    <section className={`relative py-16 ${themeConfig.sectionBackground} overflow-hidden`}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${themeConfig.gradientText}`}>
            Comprehensive Service Offerings
          </h2>
          <div className={`w-20 h-1 ${themeConfig.gradientDivider} mx-auto rounded-full mb-4`}></div>
          <p className={`text-lg ${themeConfig.textPrimary}/80 max-w-3xl mx-auto`}>
            End-to-end services to support your digital transformation journey at every stage.
          </p>
        </div>

        {/* Tabs Navigation */}
        <TabsNavigation
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          activeTabColor={themeConfig.tabActiveBackground}
          inactiveTabColor={themeConfig.tabInactiveBackground}
          iconColor={themeConfig.tabInactiveIcon}
          activeIconColor={themeConfig.tabActiveIcon}
          gradientFadeColor={themeConfig.tabGradientFade}
        />

        {/* Tab Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services[activeTab].map((service, index) => (
            <motion.div 
              key={index} 
              className="h-full"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`h-full p-6 ${themeConfig.featureCardBackground} rounded-xl shadow-lg border ${themeConfig.border} hover:shadow-xl transition-shadow duration-300`}>
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon size={20} className="text-white" />
                </div>
                <h3 className={`text-lg font-bold ${themeConfig.textPrimary} mb-2`}>
                  {service.title}
                </h3>
                <p className={`text-sm ${themeConfig.textSecondary} leading-relaxed`}>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className={`bg-gradient-to-r ${themeConfig.ctaGradient} rounded-xl p-6 text-center text-white shadow-lg`}>
            <h3 className="text-xl font-bold mb-2">Need Expert Help?</h3>
            <p className="mb-4 text-white/90 text-sm">
              Our team would love to show you how our services can transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className={`px-6 py-2 ${themeConfig.button.secondary} rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300`}>
                Request Demo
              </Link>
              <Link to="/contact" className={`px-6 py-2 bg-transparent border-2 ${themeConfig.button.outline} rounded-lg font-bold text-sm hover:${themeConfig.button.outlineHover} transition-all duration-300`}>
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Process Section
const ServicesProcess = () => {
  const { themeConfig } = useTheme();
  const steps = [
    {
      title: "Discovery",
      description: "We begin by understanding your unique requirements, challenges, and goals through in-depth discussions.",
      icon: Search,
      color: "from-[#58A0C8] to-[#34699A]"
    },
    {
      title: "Planning",
      description: "Our experts create a tailored roadmap with clear milestones, deliverables, and success metrics.",
      icon: ClipboardList,
      color: "from-[#FDF5AA] to-[#FFD166]"
    },
    {
      title: "Implementation",
      description: "We deploy the solution with minimal disruption, following industry best practices and your preferences.",
      icon: Settings,
      color: "from-[#A1C4FD] to-[#C2E9FB]"
    },
    {
      title: "Training",
      description: "Comprehensive training ensures your team is fully equipped to leverage the new system effectively.",
      icon: Users,
      color: "from-[#84FAB0] to-[#8FD3F4]"
    },
    {
      title: "Optimization",
      description: "Continuous monitoring and refinement to ensure you're getting maximum value from your investment.",
      icon: BarChart2,
      color: "from-[#FF9A9E] to-[#FAD0C4]"
    }
  ];

  return (
    <section className={`relative py-16 ${themeConfig.alternateSectionBackground} overflow-hidden`}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${themeConfig.gradientText}`}>
            Our Proven Service Methodology
          </h2>
          <div className={`w-20 h-1 ${themeConfig.gradientDivider} mx-auto rounded-full mb-4`}></div>
          <p className={`text-lg ${themeConfig.textPrimary}/80 max-w-3xl mx-auto`}>
            A structured approach that ensures success at every stage of your digital transformation journey.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className={`hidden lg:block absolute left-1/2 top-0 h-full w-1 ${themeConfig.timelineLine} transform -translate-x-1/2`}></div>

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
                        <div className={`p-6 ${themeConfig.cardBackground} rounded-xl shadow-lg border ${themeConfig.border}`}>
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
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className={`hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 ${themeConfig.timelineDot} rounded-full items-center justify-center shadow-lg z-10`}>
                      <div className={`w-5 h-5 ${themeConfig.timelineDotCenter} rounded-full`}></div>
                    </div>

                    {/* Right empty space */}
                    <div className="lg:w-5/12"></div>
                  </>
                ) : (
                  <>
                    {/* Left empty space */}
                    <div className="lg:w-5/12"></div>

                    {/* Center dot */}
                    <div className={`hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 ${themeConfig.timelineDot} rounded-full items-center justify-center shadow-lg z-10`}>
                      <div className={`w-5 h-5 ${themeConfig.timelineDotCenter} rounded-full`}></div>
                    </div>

                    {/* Right side (odd) */}
                    <div className="lg:w-5/12 lg:pl-12">
                      <div>
                        <div className={`p-6 ${themeConfig.cardBackground} rounded-xl shadow-lg border ${themeConfig.border}`}>
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