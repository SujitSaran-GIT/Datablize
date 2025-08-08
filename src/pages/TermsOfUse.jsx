import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../components/common/Logo';
import { useTheme } from '../context/ThemeContext';

const TermsOfUse = () => {
  const { themeConfig } = useTheme();

  return (
    <div className={`min-h-screen ${themeConfig.background} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Logo className="h-16 mx-auto mb-6" />
          <h1 className={`text-4xl font-bold mb-4 ${themeConfig.textPrimary}`}>
            Datablize Terms of Use
          </h1>
        </motion.div>

        <div>
          <div className={`${themeConfig.cardBackground} p-8 rounded-xl shadow-lg border ${themeConfig.border}`}>
            <div className="prose max-w-none">
              {/* 1. Acceptance of Terms */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.textPrimary}`}>
                  1. Acceptance of Terms
                </h2>
                <p className={`${themeConfig.textSecondary} mb-4`}>
                  By accessing or using the Datablize website, its products, services, documentation, portals, and platforms (collectively, the "Services"), you agree to be legally bound by these Terms of Use (the "Terms"). These Terms constitute a binding agreement between you ("User", "you") and Datablize Technologies Pvt. Ltd. ("Datablize", "we", "our", or "us").
                </p>
                <div className={`${themeConfig.accentBackground} border-l-4 ${themeConfig.border} p-4`}>
                  <p className={themeConfig.textInverted}>
                    <strong>Important:</strong> If you do not agree to these Terms, please discontinue the use of our Services immediately.
                  </p>
                </div>
              </motion.div>

              {/* 2. Definitions and Applicability of Agreement */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.textPrimary}`}>
                  2. Definitions and Applicability of Agreement
                </h2>
                <p className={themeConfig.textSecondary}>
                  "Services" refers to all Datablize software offerings including DMS, IDP, Workflow Automation, OCR, websites, portals, and APIs. These Terms govern your use of the Services whether as a customer, partner, visitor, or user.
                </p>
              </motion.div>

              {/* 3. Eligibility */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.textPrimary}`}>
                  3. Eligibility
                </h2>
                <p className={`${themeConfig.textSecondary} mb-4`}>
                  Our Services are intended for users who are at least 18 years of age. By using the Services, you affirm that you are of legal age to enter into a binding agreement and meet all eligibility requirements under applicable law.
                </p>
                <p className={themeConfig.textSecondary}>
                  If you are using the Services on behalf of an organization, you represent and warrant that you have the authority to bind such organization to these Terms.
                </p>
              </motion.div>

              {/* 4. Scope of Services */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.textPrimary}`}>
                  4. Scope of Services
                </h2>
                <p className={`${themeConfig.textSecondary} mb-4`}>
                  Datablize provides document-centric software products, including:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Document Management System (DMS)",
                    "Intelligent Document Processing (IDP)",
                    "Workflow Automation",
                    "Optical Character Recognition (OCR) tools"
                  ].map((item, index) => (
                    <div key={index} className={`flex items-start gap-3 ${themeConfig.cardHoverBackground} p-4 rounded-lg`}>
                      <div className={`${themeConfig.accentBackground} p-1 rounded-full mt-1`}>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className={themeConfig.textSecondary}>{item}</p>
                    </div>
                  ))}
                </div>
                <p className={`${themeConfig.textSecondary} mt-4`}>
                  These Services may be delivered via web applications, APIs, cloud-based platforms, or partner integrations.
                </p>
              </motion.div>

              {/* 5. Rights Granted */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.textPrimary}`}>
                  5. Rights Granted
                </h2>
                <p className={`${themeConfig.textSecondary} mb-4`}>
                  Datablize grants you a limited, revocable, non-exclusive, non-transferable right to access and use the Services in accordance with these Terms.
                </p>
                <div className={`${themeConfig.errorBackground} border-l-4 ${themeConfig.errorBorder} p-4`}>
                  <p className={themeConfig.errorText}>
                    <strong>Restriction:</strong> You may not sublicense, rent, or lease the Services or any portion thereof.
                  </p>
                </div>
              </motion.div>

              {/* 6. Ownership and Restrictions */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.textPrimary}`}>
                  6. Ownership and Restrictions
                </h2>
                <p className={`${themeConfig.textSecondary} mb-4`}>
                  All intellectual property rights in the Services and their underlying components belong exclusively to Datablize or its licensors.
                </p>
                <p className={`${themeConfig.textSecondary} mb-4`}>
                  You agree not to:
                </p>
                <ul className={`list-disc pl-6 ${themeConfig.textSecondary} space-y-2`}>
                  <li>Copy, modify, or create derivative works of the Services</li>
                  <li>Use the Services for commercial resale or unauthorized distribution</li>
                  <li>Remove or alter any proprietary notices</li>
                </ul>
              </motion.div>

              {/* 7. Restrictions on Use of the Services and Tools */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.textPrimary}`}>
                  7. Restrictions on Use of the Services and Tools
                </h2>
                <p className={`${themeConfig.textSecondary} mb-4`}>
                  You may not:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Reverse-engineer, disassemble, or decompile any software or functionality",
                    "Circumvent technical limitations or security features",
                    "Use automated tools to access, extract or download data",
                    "Use the Services in a way that violates laws or infringes third-party rights"
                  ].map((item, index) => (
                    <div key={index} className={`flex items-start gap-3 ${themeConfig.cardHoverBackground} p-4 rounded-lg`}>
                      <div className={`${themeConfig.errorBackground} p-1 rounded-full mt-1`}>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </div>
                      <p className={themeConfig.textSecondary}>{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 8. User Accounts */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.textPrimary}`}>
                  8. User Accounts
                </h2>
                <p className={`${themeConfig.textSecondary} mb-4`}>
                  To access certain features of the Services, you may be required to register an account. You agree to:
                </p>
                <ul className={`list-disc pl-6 ${themeConfig.textSecondary} space-y-2 mb-4`}>
                  <li>Provide accurate and complete registration information</li>
                  <li>Keep your login credentials confidential and secure</li>
                  <li>Immediately notify us of any unauthorized access or suspicious activity under your account</li>
                </ul>
              </motion.div>

              {/* 9. Privacy and Data Processing */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.textPrimary}`}>
                  9. Privacy and Data Processing
                </h2>
                <p className={themeConfig.textSecondary}>
                  Your use of the Services is subject to our Privacy Policy, which outlines how we collect, process, store, and protect your personal data.
                </p>
              </motion.div>

              {/* 10. Fees and Taxes */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.textPrimary}`}>
                  10. Fees and Taxes
                </h2>
                <p className={`${themeConfig.textSecondary} mb-4`}>
                  Fees for paid Services are defined in your contract, invoice, or subscription plan. You are responsible for:
                </p>
                <ul className={`list-disc pl-6 ${themeConfig.textSecondary} space-y-2`}>
                  <li>Paying all applicable fees on time</li>
                  <li>Bearing all taxes, duties, and government levies (excluding taxes on Datablize's income)</li>
                </ul>
              </motion.div>

              {/* 11. Nondisclosure */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.textPrimary}`}>
                  11. Non Disclosure
                </h2>
                <p className={themeConfig.textSecondary}>
                  You agree to maintain the confidentiality of any non-public information shared by Datablize, including but not limited to business, technical, or product information, unless disclosure is required by law.
                </p>
              </motion.div>

              {/* 12. Included Third-Party Software */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.textPrimary}`}>
                  12. Included Third-Party Software
                </h2>
                <p className={themeConfig.textSecondary}>
                  Our Services may include or interface with third-party software or components subject to their own license terms. Datablize makes no warranties regarding these third-party tools and is not liable for any issues arising from their use.
                </p>
              </motion.div>

              {/* 13. Third-Party Web Sites, Content, Products, and Services */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.textPrimary}`}>
                  13. Third-Party Web Sites, Content, Products, and Services
                </h2>
                <p className={themeConfig.textSecondary}>
                  Links or integrations to third-party websites and services are provided for convenience. We do not control, endorse, or assume responsibility for third-party content, terms, or functionality. Use at your own risk.
                </p>
              </motion.div>

              {/* 14. Service Availability and Modifications */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.textPrimary}`}>
                  14. Service Availability and Modifications
                </h2>
                <p className={`${themeConfig.textSecondary} mb-4`}>
                  We aim for high availability but do not guarantee uninterrupted access. We may update, change, or suspend any feature at our discretion and without notice.
                </p>
                <p className={themeConfig.textSecondary}>
                  Material changes will be communicated as appropriate.
                </p>
              </motion.div>

              {/* 15. Warranties, Disclaimers, and Exclusive Remedies */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.textPrimary}`}>
                  15. Warranties, Disclaimers, and Exclusive Remedies
                </h2>
                <p className={`${themeConfig.textSecondary} mb-4`}>
                  The Services are provided "as is" without warranties of any kind. To the maximum extent allowed by law, we disclaim:
                </p>
                <ul className={`list-disc pl-6 ${themeConfig.textSecondary} space-y-2 mb-4`}>
                  <li>All express or implied warranties</li>
                  <li>Any liability for errors, delays, or service interruptions</li>
                </ul>
                <p className={themeConfig.textSecondary}>
                  Your exclusive remedy is to discontinue using the Services.
                </p>
              </motion.div>

              {/* 16. Limitation of Liability */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.textPrimary}`}>
                  16. Limitation of Liability
                </h2>
                <p className={`${themeConfig.textSecondary} mb-4`}>
                  To the fullest extent permitted by law, Datablize shall not be liable for:
                </p>
                <ul className={`list-disc pl-6 ${themeConfig.textSecondary} space-y-2 mb-4`}>
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Data loss, revenue loss, or business interruption</li>
                </ul>
                <p className={themeConfig.textSecondary}>
                  Our total aggregate liability under these Terms shall not exceed the fees paid by you in the 6 months preceding the event giving rise to the claim.
                </p>
              </motion.div>

              {/* 17. Indemnification */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.6 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.textPrimary}`}>
                  17. Indemnification
                </h2>
                <p className={themeConfig.textSecondary}>
                  You agree to indemnify and hold harmless Datablize and its affiliates against claims, liabilities, or losses arising from your use of the Services, violation of these Terms, or breach of applicable law.
                </p>
              </motion.div>

              {/* 18. Force Majeure */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.7 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.textPrimary}`}>
                  18. Force Majeure
                </h2>
                <p className={themeConfig.textSecondary}>
                  Datablize shall not be held liable for delays or failures caused by events beyond its reasonable control, including but not limited to natural disasters, strikes, war, internet failures, or government actions.
                </p>
              </motion.div>

              {/* 19. Termination */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.8 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.textPrimary}`}>
                  19. Termination
                </h2>
                <p className={`${themeConfig.textSecondary} mb-4`}>
                  We may suspend or terminate your access to the Services if you breach these Terms.
                </p>
                <div className={`${themeConfig.errorBackground} border-l-4 ${themeConfig.errorBorder} p-4`}>
                  <p className={themeConfig.errorText}>
                    <strong>Note:</strong> Upon termination, your right to use the Services will cease immediately.
                  </p>
                </div>
              </motion.div>

              {/* 20. Governing Law and Jurisdiction */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.9 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.textPrimary}`}>
                  20. Governing Law and Jurisdiction
                </h2>
                <p className={`${themeConfig.textSecondary} mb-4`}>
                  These Terms shall be governed by and interpreted in accordance with the laws of India.
                </p>
                <p className={themeConfig.textSecondary}>
                  Disputes shall fall under the exclusive jurisdiction of courts in Bhubaneswar, Odisha.
                </p>
              </motion.div>

              {/* 21. Changes to Terms */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2 }}
                className="mb-10"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.textPrimary}`}>
                  21. Changes to Terms
                </h2>
                <p className={`${themeConfig.textSecondary} mb-4`}>
                  We may update these Terms at our discretion. Updated versions will be posted online with a revised effective date. Continued use of the Services indicates acceptance of the new terms.
                </p>
              </motion.div>

              {/* 22. Contact Us */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.1 }}
                className="mb-6"
              >
                <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${themeConfig.textPrimary}`}>
                  22. Contact Us
                </h2>
                <p className={`${themeConfig.textSecondary} mb-6`}>
                  For questions about these Terms of Use, please contact support@datablize.com
                </p>
              </motion.div>

              {/* Closing */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.2 }}
                className="text-center mt-12 pt-6 border-t"
              >
                <p className={`text-lg ${themeConfig.textSecondary}`}>
                  By using Datablize Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;