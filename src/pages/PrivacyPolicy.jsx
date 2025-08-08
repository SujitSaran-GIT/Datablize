import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Logo from '../components/common/Logo';

const PrivacyPolicy = () => {
  const { themeConfig } = useTheme();

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${themeConfig.background}`}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Logo className="h-16 mx-auto mb-6" />
          <h1 className={`text-4xl font-bold mb-4 ${themeConfig.textPrimary}`}>Datablize Data Privacy Policy</h1>
        </motion.div>

        <div>
          <div className={`p-8 rounded-xl shadow-lg ${themeConfig.cardBackground} border ${themeConfig.border}`}>
            <div className="prose max-w-none">
              {/* 1. Introduction */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.sectionTitle}`}>1. Introduction</h2>
                <p className={`${themeConfig.textPrimary} mb-4`}>
                  Datablize Technologies Pvt. Ltd. ("Datablize", "we", "our", or "us") is committed to safeguarding the privacy of all individuals—including internal stakeholders (employees, contractors) and external users (customers, visitors, partners)—whose personal data we collect through our website, products, services, and business operations.
                </p>
                <p className={themeConfig.textPrimary}>
                  This privacy policy describes how we collect, use, disclose, store, and protect personal information in relation to our document-centric product offerings, including but not limited to Its Product and Services i.e. Document Management System (DMS), Intelligent Document Processing (IDP), Workflow Automation, and Optical Character Recognition (OCR) technologies.
                </p>
              </motion.div>

              {/* 2. Scope */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.sectionTitle}`}>2. Scope</h2>
                <p className={`${themeConfig.textPrimary} mb-4`}>
                  This Privacy Policy applies to all internal and external stakeholders whose personal information we process in connection with:
                </p>
                <ul className={`list-disc pl-6 space-y-2 ${themeConfig.textPrimary}`}>
                  <li>Use of our products, services, and platforms</li>
                  <li>Access to our websites, portals, and applications</li>
                  <li>Interactions with our support, sales, HR, or business development teams</li>
                  <li>Employment and contractual relationships</li>
                  <li>Participation in events, research, marketing, or other Datablize activities</li>
                </ul>
              </motion.div>

              {/* 3. Personal Information We Collect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.sectionTitle}`}>3. Personal Information We Collect</h2>
                <p className={`${themeConfig.textPrimary} mb-4`}>
                  We may collect the following categories of personal information:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Contact Information",
                      description: "Name, email address, phone number, mailing address",
                      color: "from-blue-500 to-blue-600"
                    },
                    {
                      title: "Identifiers",
                      description: "IP address, browser type, device information, cookies, session data",
                      color: "from-purple-500 to-purple-600"
                    },
                    {
                      title: "Professional Details",
                      description: "Company name, job title, department, employee ID (for internal users)",
                      color: "from-green-500 to-green-600"
                    },
                    {
                      title: "Document Metadata",
                      description: "Names, IDs, tags, references embedded within uploaded documents",
                      color: "from-amber-500 to-amber-600"
                    }
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className={`bg-gradient-to-br ${item.color} p-4 rounded-lg shadow-md`}
                    >
                      <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-white/90">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 4. How We Collect Data */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.sectionTitle}`}>4. How We Collect Data</h2>
                <p className={`${themeConfig.textPrimary} mb-4`}>
                  We collect personal information through:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Direct submission via forms (e.g., contact, demo requests, job applications, onboarding)",
                    "Interactions with our support, HR, legal, or sales teams",
                    "Use of our software platforms and web interfaces",
                    "Cookies and analytics tools on our website"
                  ].map((item, index) => (
                    <div key={index} className={`flex items-start gap-3 ${themeConfig.textPrimary}`}>
                      <div className={`${themeConfig.accentBackground} rounded-full p-1 mt-1`}>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 5. How We Use Personal Information */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.sectionTitle}`}>5. How We Use Personal Information</h2>
                <p className={`${themeConfig.textPrimary} mb-4`}>
                  We use personal information to:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Provide, manage, and improve our products, services, and support",
                    "Facilitate onboarding, HR processes, and internal operations",
                    "Personalize user experiences and enable automated workflows",
                    "Respond to inquiries, issues, or requests from users and stakeholders",
                    "Send operational updates, service notifications, and relevant marketing communications (with consent where applicable)",
                    "Monitor and secure our infrastructure and services",
                    "Fulfill legal, regulatory, contractual, and audit obligations"
                  ].map((item, index) => (
                    <div key={index} className={`flex items-start gap-3 p-4 rounded-lg ${themeConfig.listItemBackground}`}>
                      <div className={`${themeConfig.accentBackground} p-1 rounded-full mt-1`}>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className={themeConfig.textPrimary}>{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 6. Data Retention */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.sectionTitle}`}>6. Data Retention</h2>
                <p className={`${themeConfig.textPrimary} mb-4`}>
                  We retain personal information only as long as necessary to:
                </p>
                <ul className={`list-disc pl-6 space-y-2 mb-4 ${themeConfig.textPrimary}`}>
                  <li>Fulfill the purposes described in this policy</li>
                  <li>Comply with applicable laws, tax, audit, and employment obligations</li>
                  <li>Respect data retention obligations as per internal policy, contracts, or regulatory standards</li>
                </ul>
                <p className={themeConfig.textPrimary}>
                  Once the retention period expires, personal data is securely deleted, anonymized, or archived.
                </p>
              </motion.div>

              {/* 7. Children and Privacy */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.sectionTitle}`}>7. Children and Privacy</h2>
                <p className={`${themeConfig.textPrimary} mb-4`}>
                  We encourage parents and guardians to take an active role in their children's online activities. Datablize's services, product campaigns, and marketing materials are designed for adults aged 18 and above.
                </p>
                <div className={`border-l-4 p-4 mb-4 ${themeConfig.warningBackground} ${themeConfig.warningBorder}`}>
                  <p className={themeConfig.warningText}>
                    <strong>Note:</strong> We do not knowingly collect or process personal information from anyone under the age of 13. If we become aware that we have inadvertently collected personal data from a child under 13, we will take prompt action to delete such information from our systems.
                  </p>
                </div>
              </motion.div>

              {/* 8. Third-Party and Linked Websites */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.sectionTitle}`}>8. Third-Party and Linked Websites</h2>
                <p className={`${themeConfig.textPrimary} mb-4`}>
                  Our websites and platforms may contain links to third-party websites or services. We are not responsible for the privacy practices, security, or content of those external platforms. Users are encouraged to review third-party privacy policies before sharing any personal data.
                </p>
                <p className={themeConfig.textPrimary}>
                  We may also work with trusted third-party service providers (e.g., cloud hosting, analytics, HR tools, marketing platforms), all of whom are contractually obligated to process data in accordance with applicable privacy regulations.
                </p>
              </motion.div>

              {/* 9. Governing Law */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.sectionTitle}`}>9. Governing Law</h2>
                <p className={`${themeConfig.textPrimary} mb-4`}>
                  This Privacy Policy shall be governed by and construed in accordance with the laws of India, including the Digital Personal Data Protection Act, 2023 (DPDPA) and other applicable privacy regulations.
                </p>
                <p className={themeConfig.textPrimary}>
                  Any disputes shall fall under the exclusive jurisdiction of the courts located in Bhubaneswar, Odisha, India.
                </p>
              </motion.div>

              {/* 10. Updates to This Policy */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.sectionTitle}`}>10. Updates to This Policy</h2>
                <p className={`${themeConfig.textPrimary} mb-4`}>
                  We may update this Privacy Policy periodically to reflect changes in technology, legal requirements, or business operations. Updated versions will be posted on our website with a new "Effective Date". Users are advised to review this policy regularly.
                </p>
              </motion.div>

              {/* 11. Contact Us */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="mb-6"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.sectionTitle}`}>11. Contact Us</h2>
                <p className={`${themeConfig.textPrimary} mb-6`}>
                  For questions, concerns, or requests related to this Privacy Policy or your personal information, please contact support@datablize.com
                </p>
              </motion.div>

              {/* Closing */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 }}
                className={`text-center mt-12 pt-6 border-t ${themeConfig.border}`}
              >
                <p className={`text-lg ${themeConfig.textPrimary}`}>
                  Thank you for trusting Datablize. We are committed to ensuring the privacy, transparency, and accountability of your personal data, whether you are a client, visitor, employee, or partner.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;