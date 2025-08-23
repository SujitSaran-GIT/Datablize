import React from "react";
import { motion } from "framer-motion";
import Logo from "../components/common/Logo";
import { Check, X } from "lucide-react";

const ResponsibleDisclosure = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-white to-primary-light py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col justify-center items-center mb-12"
        >
          <Logo className="" />
          <h1 className="text-4xl font-bold text-primary-dark mb-4">Datablize Responsible Disclosure Policy</h1>
          <p className="text-xl text-primary-blue">
            Security is our top priority
          </p>
        </motion.div>

        <div>
          <div className="bg-primary-white p-8 rounded-xl shadow-lg border border-primary-orange">
            <div className="prose max-w-none">
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <p className="text-primary-dark mb-4">
                  At Datablize, we are committed to maintaining the security and privacy of our users and systems. We greatly value the contributions of independent security researchers who help us identify and address vulnerabilities responsibly.
                </p>
                <p className="text-primary-dark">
                  If you are a security researcher and believe you have discovered a security vulnerability in any of Datablize's services, applications, or platforms, we sincerely thank you for reporting it responsibly. We are committed to working with you to understand and resolve the issue quickly and responsibly.
                </p>
              </motion.div>

              {/* Scope */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mb-10"
              >
                <h2 className="text-2xl font-bold text-primary-dark mb-4 border-b border-primary-orange/20 pb-2">Scope</h2>
                <p className="text-primary-dark mb-4">
                  This policy applies to the identification of potential security vulnerabilities found in:
                </p>
                <ul className="list-disc pl-6 text-primary-dark space-y-2">
                  <li>Datablize's public websites and subdomains (e.g., *.datablize.com)</li>
                  <li>Product and Services offered by Datablize</li>
                  <li>Any publicly accessible systems owned and operated by Datablize Analytics Pvt. Ltd.</li>
                </ul>
              </motion.div>

              {/* Good Faith Reporting */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-10"
              >
                <h2 className="text-2xl font-bold text-primary-dark mb-4 border-b border-primary-orange/20 pb-2">Good Faith Reporting</h2>
                <p className="text-primary-dark mb-4">
                  Datablize currently does not operate a bug bounty program and does not offer compensation, rewards, or public recognition for vulnerability submissions.
                </p>
                <div className="bg-primary-blue p-4 rounded-lg">
                  <p className="text-white">
                    However, we appreciate the community's efforts and are open to meaningful collaboration.
                  </p>
                </div>
              </motion.div>

              {/* Reporting Guidelines */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mb-10"
              >
                <h2 className="text-2xl font-bold text-primary-dark mb-4 border-b border-primary-orange/20 pb-2">Reporting Guidelines</h2>
                <p className="text-primary-dark mb-4">
                  We ask all researchers to adhere to the following principles while conducting testing:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Do not attempt to access or modify Datablize data or user/customer data.",
                    "Do not exploit the vulnerability beyond what is necessary to confirm its existence.",
                    "Avoid any actions that could negatively affect the availability, performance, or integrity of our systems (including denial of service attacks).",
                    "If you encounter personal information (e.g., names, emails, identifiers, financial data), stop immediately and notify us.",
                    "Do not attempt fraudulent transactions or simulate attacks on financial workflows.",
                    "Conduct all research in a manner that avoids privacy violations, service disruption, or destruction of data."
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-3"
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-primary-orange p-1 rounded-full mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-primary-dark">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* How to Report */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mb-10"
              >
                <h2 className="text-2xl font-bold text-primary-dark mb-4 border-b border-primary-orange/20 pb-2">How to Report</h2>
                <p className="text-primary-dark mb-4">
                  Please send your findings to: <span className="font-semibold text-primary-blue">security@datablize.com</span>
                </p>
                <p className="text-primary-dark mb-4">
                  Include the following details to help us investigate efficiently:
                </p>
                <ul className="list-disc pl-6 text-primary-dark space-y-2 mb-4">
                  <li>A clear and detailed description of the vulnerability</li>
                  <li>Tools, techniques, and steps used to identify the issue</li>
                  <li>Supporting materials (e.g., screenshots, logs, PoC)</li>
                  <li>Your contact information for follow-up</li>
                </ul>
                <p className="text-primary-dark">
                  We will acknowledge your report within 10 business days and may reach out for clarification or additional details.
                </p>
              </motion.div>

              {/* Our Commitment to Security Researchers */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mb-10"
              >
                <h2 className="text-2xl font-bold text-primary-dark mb-4 border-b border-primary-orange/20 pb-2">Our Commitment to Security Researchers</h2>
                <p className="text-primary-dark mb-4">
                  If your report complies with this policy and is submitted in good faith:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    "We will not initiate legal action against you.",
                    "We will treat your submission confidentially.",
                    "We will work with you to validate and address the issue responsibly."
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="bg-primary-blue p-4 rounded-lg"
                      whileHover={{ y: -3 }}
                    >
                      <p className="text-white">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Out-of-Scope Submissions */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mb-10"
              >
                <h2 className="text-2xl font-bold text-primary-dark mb-4 border-b border-primary-orange/20 pb-2">Out-of-Scope Submissions</h2>
                <p className="text-primary-dark mb-4">
                  The following issues are not eligible for responsible disclosure:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Social engineering or phishing attempts",
                    "Resource exhaustion or denial of service (DoS/DDoS)",
                    "Spam or brute-force attacks",
                    "Vulnerabilities in third-party systems or services not owned by Datablize",
                    "Physical attacks on Datablize premises or personnel",
                    "Use of automated tools or scanners that degrade system performance",
                    "Posting or uploading malware or malicious payloads"
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-3"
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-red-500 p-1 rounded-full mt-1">
                        <X className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-primary-dark">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Legal Notice */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mb-10"
              >
                <h2 className="text-2xl font-bold text-primary-dark mb-4 border-b border-primary-orange/20 pb-2">Legal Notice</h2>
                <p className="text-primary-dark mb-4">
                  This policy is intended to align with safe harbor principles. However, any activities that violate applicable laws or cause harm to Datablize, its users, or partners may not be protected.
                </p>
                <p className="text-primary-dark">
                  Datablize reserves the right to modify this policy at any time. For questions or clarifications, please contact us at security@datablize.com.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsibleDisclosure;