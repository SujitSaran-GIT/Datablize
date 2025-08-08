import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, User, MessageSquare, ChevronRight, ArrowRight, Linkedin, Twitter, Facebook, Instagram, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { themeConfig } = useTheme();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className={`relative min-h-[60vh] flex items-center overflow-hidden ${themeConfig.background}`}>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * 60}px`,
                height: `${20 + Math.random() * 60}px`,
                background: `linear-gradient(45deg, ${themeConfig.gradientBubble1}, ${themeConfig.gradientBubble2})`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            >
              <span className={themeConfig.textPrimary}>Let's Connect</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className={`text-xl ${themeConfig.textPrimary}/80 mb-8 max-w-2xl mx-auto`}
            >
              Ready to transform your enterprise document management? Get in touch with our team to discuss how we can help.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={`py-20 ${themeConfig.sectionBackground}`}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className={`text-3xl font-bold ${themeConfig.textPrimary} mb-6`}>Contact Information</h2>
                <p className={`${themeConfig.textSecondary} mb-8`}>
                  Ready to Transform Your Document Management? Contact our enterprise solutions team to discuss your organization's needs.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${themeConfig.accentBackground} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Phone className={themeConfig.textInverted} size={20} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${themeConfig.textPrimary}`}>Phone</h3>
                    <p className={themeConfig.textSecondary}>+1 (88) 555-0123</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${themeConfig.featureShowcaseIconBackground} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Mail className={themeConfig.featureShowcaseIconColor} size={20} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${themeConfig.textPrimary}`}>Email</h3>
                    <p className={themeConfig.textSecondary}>sales@datablize.com</p>
                    <p className={`${themeConfig.textSecondary} mt-1`}>support@datablize.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${themeConfig.button.primary} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <MapPin className={themeConfig.textInverted} size={20} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${themeConfig.textPrimary}`}>Head Office</h3>
                    <p className={themeConfig.textSecondary}>Root2Rise, Plot No. GD 2/12 & 13</p>
                    <p className={themeConfig.textSecondary}>Chakadola Vihar, Chandrasekharpur</p>
                    <p className={themeConfig.textSecondary}>Bhubaneswar – 751023, Odisha, India</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className={`text-lg font-bold ${themeConfig.textPrimary} mb-4`}>Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className={`w-10 h-10 ${themeConfig.socialIconBackground} rounded-full flex items-center justify-center ${themeConfig.socialIconColor} hover:${themeConfig.socialIconHover} transition-colors duration-300`}>
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className={`w-10 h-10 ${themeConfig.socialIconBackground} rounded-full flex items-center justify-center ${themeConfig.socialIconColor} hover:${themeConfig.socialIconHover} transition-colors duration-300`}>
                    <FaXTwitter size={18} />
                  </a>
                  <a href="#" className={`w-10 h-10 ${themeConfig.socialIconBackground} rounded-full flex items-center justify-center ${themeConfig.socialIconColor} hover:${themeConfig.socialIconHover} transition-colors duration-300`}>
                    <Facebook size={18} />
                  </a>
                  <a href="#" className={`w-10 h-10 ${themeConfig.socialIconBackground} rounded-full flex items-center justify-center ${themeConfig.socialIconColor} hover:${themeConfig.socialIconHover} transition-colors duration-300`}>
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`${themeConfig.cardBackground} rounded-3xl p-8 shadow-xl border ${themeConfig.border}`}
            >
              <h2 className={`text-3xl font-bold ${themeConfig.textPrimary} mb-6`}>Send us a message</h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className={`block ${themeConfig.textSecondary} font-medium`}>First Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className={themeConfig.formIconColor} size={18} />
                      </div>
                      <input
                        type="text"
                        id="firstName"
                        className={`block w-full pl-10 pr-3 py-3 ${themeConfig.formInputBackground} border ${themeConfig.formInputBorder} rounded-lg focus:ring-2 ${themeConfig.formInputFocus} focus:border-transparent`}
                        placeholder="First Name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="lastName" className={`block ${themeConfig.textSecondary} font-medium`}>Last Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className={themeConfig.formIconColor} size={18} />
                      </div>
                      <input
                        type="text"
                        id="lastName"
                        className={`block w-full pl-10 pr-3 py-3 ${themeConfig.formInputBackground} border ${themeConfig.formInputBorder} rounded-lg focus:ring-2 ${themeConfig.formInputFocus} focus:border-transparent`}
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className={`block ${themeConfig.textSecondary} font-medium`}>Company Name</label>
                  <input
                    type="text"
                    id="company"
                    className={`block w-full px-4 py-3 ${themeConfig.formInputBackground} border ${themeConfig.formInputBorder} rounded-lg focus:ring-2 ${themeConfig.formInputFocus} focus:border-transparent`}
                    placeholder="Company Name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className={`block ${themeConfig.textSecondary} font-medium`}>Work Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className={themeConfig.formIconColor} size={18} />
                    </div>
                    <input
                      type="email"
                      id="email"
                      className={`block w-full pl-10 pr-3 py-3 ${themeConfig.formInputBackground} border ${themeConfig.formInputBorder} rounded-lg focus:ring-2 ${themeConfig.formInputFocus} focus:border-transparent`}
                      placeholder="Work Email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className={`block ${themeConfig.textSecondary} font-medium`}>Contact Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className={themeConfig.formIconColor} size={18} />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      className={`block w-full pl-10 pr-3 py-3 ${themeConfig.formInputBackground} border ${themeConfig.formInputBorder} rounded-lg focus:ring-2 ${themeConfig.formInputFocus} focus:border-transparent`}
                      placeholder="Contact Number"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="notes" className={`block ${themeConfig.textSecondary} font-medium`}>Additional Notes</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
                      <MessageSquare className={themeConfig.formIconColor} size={18} />
                    </div>
                    <textarea
                      id="notes"
                      rows={5}
                      className={`block w-full pl-10 pr-3 py-3 ${themeConfig.formInputBackground} border ${themeConfig.formInputBorder} rounded-lg focus:ring-2 ${themeConfig.formInputFocus} focus:border-transparent`}
                      placeholder="Additional Notes"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="policy"
                    type="checkbox"
                    className={`w-4 h-4 ${themeConfig.formCheckboxColor} ${themeConfig.formInputBackground} border ${themeConfig.formInputBorder} rounded focus:ring-2 ${themeConfig.formInputFocus}`}
                  />
                  <label htmlFor="policy" className={`ml-2 text-sm ${themeConfig.textSecondary}`}>
                    I agree to the <Link to={"/privacy-policy"} className={`${themeConfig.linkColor} hover:${themeConfig.linkHoverColor}`}>privacy policy</Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className={`group relative px-8 py-4 ${themeConfig.button.primary} text-white rounded-2xl font-bold text-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 w-full`}
                >
                  <div className={`absolute inset-0 ${themeConfig.button.hover} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <span>Submit</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className={`py-20 ${themeConfig.partnerSectionBackground}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className={`text-4xl font-bold ${themeConfig.textPrimary} mb-6`}>Partner with Datablize</h2>
            <div className={`w-24 h-1 ${themeConfig.gradientDivider} mx-auto rounded-full mb-6`}></div>
            <p className={`text-xl ${themeConfig.textSecondary}`}>
              Join our partner ecosystem to deliver innovative document management solutions to your clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {[
              {
                title: "Reseller and Implementation Partners",
                description: "Deliver our solutions to your clients with competitive commissions and implementation support",
                icon: "🤝"
              },
              {
                title: "Technology Integration Partners",
                description: "Integrate with our platform to enhance your offerings and create seamless workflows",
                icon: "🔌"
              },
              {
                title: "Industry Solution Partners",
                description: "Co-develop industry-specific document solutions tailored to vertical markets",
                icon: "🏗️"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${themeConfig.featureCardBackground} rounded-2xl p-8 shadow-lg border ${themeConfig.border} hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className={`text-xl font-bold ${themeConfig.textPrimary} mb-3`}>{item.title}</h3>
                <p className={themeConfig.textSecondary}>{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Partner Benefits Section */}
          <div className={`${themeConfig.cardBackground} rounded-3xl shadow-xl overflow-hidden border ${themeConfig.border} max-w-4xl mx-auto mb-12`}>
            <div className="p-8 md:p-12">
              <h3 className={`text-2xl font-bold ${themeConfig.textPrimary} mb-6 text-center`}>Partner Benefits</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Competitive commission structure",
                  "Dedicated partner support",
                  "Sales and technical training",
                  "Co-marketing opportunities",
                  "Partner portal access",
                  "Lead sharing and referrals"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-6 h-6 ${themeConfig.checkmarkBackground} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Check size={14} className={themeConfig.checkmarkIcon} />
                    </div>
                    <span className={themeConfig.textSecondary}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative px-8 py-4 ${themeConfig.button.primary} text-white rounded-2xl font-bold text-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300`}
            >
              <div className={`absolute inset-0 ${themeConfig.button.hover} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              <div className="relative flex items-center justify-center gap-3">
                <span>Partner Inquiry</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className={`py-20 ${themeConfig.sectionBackground}`}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-4xl font-bold ${themeConfig.textPrimary} mb-6`}>Careers at Datablize</h2>
              <div className={`w-24 h-1 ${themeConfig.gradientDivider} rounded-full mb-6`}></div>
              <p className={`text-xl ${themeConfig.textSecondary} mb-6`}>
                Have an Entrepreneurial Mindset? Let's Build Together.
              </p>
              <p className={`${themeConfig.textSecondary} mb-8`}>
                At Datablize, we're not just hiring employees—we're looking for co-creators, innovators, and builders who think like entrepreneurs and act like problem solvers.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  "Collaborate on enterprise-grade products solving real pain points",
                  "Take ownership from idea to execution",
                  "Work with a team that values skills over resumes",
                  "Remote-friendly and flexible working culture",
                  "Shape the product roadmap and influence the direction of our innovation"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-6 h-6 ${themeConfig.bulletPointBackground} rounded-full flex items-center justify-center mt-1 flex-shrink-0`}>
                      <div className={`w-2 h-2 ${themeConfig.bulletPointColor} rounded-full`}></div>
                    </div>
                    <p className={themeConfig.textSecondary}>{item}</p>
                  </div>
                ))}
              </div>

              <a href="mailto:Career@datablize.com">
                <button className={`group relative px-8 py-3 ${themeConfig.button.primary} text-white rounded-2xl font-bold text-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300`}>
                  <div className={`absolute inset-0 ${themeConfig.button.hover} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <span>Apply Now</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </a>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`${themeConfig.cardBackground} rounded-3xl p-8 shadow-xl border ${themeConfig.border}`}
            >
              <h3 className={`text-2xl font-bold ${themeConfig.textPrimary} mb-6`}>Who Are We Looking For?</h3>
              <p className={`${themeConfig.textSecondary} mb-6`}>
                We don't filter by Degrees, Grades, GPAs, and Titles as they don't define talent. At Datablize, we're looking for Hackers, Hipsters and Hustlers who are ready to make an impact. If that's you — we'd love to hear from you.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Hacker",
                    description: "You live and breathe code, and love building things that just work",
                    icon: "💻"
                  },
                  {
                    title: "Hipster",
                    description: "You care about design, user experience, and building lovable products",
                    icon: "🎨"
                  },
                  {
                    title: "Hustler",
                    description: "You're resourceful, driven, and know how to get things done",
                    icon: "🚀"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h4 className={`text-lg font-bold ${themeConfig.textPrimary}`}>{item.title}</h4>
                      <p className={themeConfig.textSecondary}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;