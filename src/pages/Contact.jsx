import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, User, MessageSquare, ChevronRight, ArrowRight, Linkedin, Twitter, Facebook, Instagram, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-[#DBE4C9] via-[#E9E9E9] to-[#FFFFF0]">
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
                background: `linear-gradient(45deg, #FDF5AA, #58A0C8)`,
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
              <span className="text-[#113F67]">Let's Connect</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl text-[#113F67]/80 mb-8 max-w-2xl mx-auto"
            >
              Ready to transform your enterprise document management? Get in touch with our team to discuss how we can help.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
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
                <h2 className="text-3xl font-bold text-[#113F67] mb-6">Contact Information</h2>
                <p className="text-[#113F67]/80 mb-8">
                  Ready to Transform Your Document Management? Contact our enterprise solutions team to discuss your organization's needs.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#113F67] to-[#34699A] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#113F67]">Phone</h3>
                    <p className="text-[#113F67]/80">+1 (88) 555-0123</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FDF5AA] to-[#FFD166] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#113F67]" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#113F67]">Email</h3>
                    <p className="text-[#113F67]/80">sales@datablize.com</p>
                    <p className="text-[#113F67]/80 mt-1">support@datablize.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#58A0C8] to-[#34699A] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#113F67]">Head Office</h3>
                    <p className="text-[#113F67]/80">Root2Rise, Plot No. GD 2/12 & 13</p>
                    <p className="text-[#113F67]/80">Chakadola Vihar, Chandrasekharpur</p>
                    <p className="text-[#113F67]/80">Bhubaneswar – 751023, Odisha, India</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-bold text-[#113F67] mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-[#113F67]/10 rounded-full flex items-center justify-center text-[#113F67] hover:bg-[#113F67] hover:text-white transition-colors duration-300">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#113F67]/10 rounded-full flex items-center justify-center text-[#113F67] hover:bg-[#113F67] hover:text-white transition-colors duration-300">
                    <FaXTwitter  size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#113F67]/10 rounded-full flex items-center justify-center text-[#113F67] hover:bg-[#113F67] hover:text-white transition-colors duration-300">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#113F67]/10 rounded-full flex items-center justify-center text-[#113F67] hover:bg-[#113F67] hover:text-white transition-colors duration-300">
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
              className="bg-gradient-to-br from-[#FFFFF0] to-[#E9E9E9] rounded-3xl p-8 shadow-xl border border-white/20"
            >
              <h2 className="text-3xl font-bold text-[#113F67] mb-6">Send us a message</h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-[#113F67]/80 font-medium">Full name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="text-[#34699A]" size={18} />
                      </div>
                      <input
                        type="text"
                        id="name"
                        className="block w-full pl-10 pr-3 py-3 bg-white/80 border border-[#113F67]/20 rounded-lg focus:ring-2 focus:ring-[#34699A] focus:border-transparent"
                        placeholder="Jane Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-[#113F67]/80 font-medium">Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="text-[#34699A]" size={18} />
                      </div>
                      <input
                        type="email"
                        id="email"
                        className="block w-full pl-10 pr-3 py-3 bg-white/80 border border-[#113F67]/20 rounded-lg focus:ring-2 focus:ring-[#34699A] focus:border-transparent"
                        placeholder="jane.doe@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="block text-[#113F67]/80 font-medium">Company</label>
                  <input
                    type="text"
                    id="company"
                    className="block w-full px-4 py-3 bg-white/80 border border-[#113F67]/20 rounded-lg focus:ring-2 focus:ring-[#34699A] focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-[#113F67]/80 font-medium">Message</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
                      <MessageSquare className="text-[#34699A]" size={18} />
                    </div>
                    <textarea
                      id="message"
                      rows={5}
                      className="block w-full pl-10 pr-3 py-3 bg-white/80 border border-[#113F67]/20 rounded-lg focus:ring-2 focus:ring-[#34699A] focus:border-transparent"
                      placeholder="Tell us about your document management needs"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="policy"
                    type="checkbox"
                    className="w-4 h-4 text-[#34699A] bg-white/80 border border-[#113F67]/20 rounded focus:ring-[#34699A]"
                  />
                  <label htmlFor="policy" className="ml-2 text-sm text-[#113F67]/80">
                    I agree to the <Link to={"/privacy-policy"}>privacy policy</Link> 
                  </label>
                </div>

                <button
                  type="submit"
                  className="group relative px-8 py-4 bg-gradient-to-r from-[#34699A] to-[#113F67] text-white rounded-2xl font-bold text-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 w-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#58A0C8] to-[#34699A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <span>Request Demo</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            {/* <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-[#113F67] mb-6">Contact Information</h2>
                <p className="text-[#113F67]/80 mb-8">
                  Ready to Transform Your Document Management? Contact our enterprise solutions team to discuss your organization's needs.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#113F67] to-[#34699A] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#113F67]">Phone</h3>
                    <p className="text-[#113F67]/80">+1 (88) 555-0123</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FDF5AA] to-[#FFD166] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#113F67]" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#113F67]">Email</h3>
                    <p className="text-[#113F67]/80">enterprise@docuverse.com</p>
                    <p className="text-[#113F67]/80 mt-1">support@docuverse.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#58A0C8] to-[#34699A] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#113F67]">Head Office</h3>
                    <p className="text-[#113F67]/80">Root2Rise, Plot No. GD 2/12 & 13</p>
                    <p className="text-[#113F67]/80">Chakadola Vihar, Chandrasekharpur</p>
                    <p className="text-[#113F67]/80">Bhubaneswar – 751023, Odisha, India</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-bold text-[#113F67] mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-[#113F67]/10 rounded-full flex items-center justify-center text-[#113F67] hover:bg-[#113F67] hover:text-white transition-colors duration-300">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#113F67]/10 rounded-full flex items-center justify-center text-[#113F67] hover:bg-[#113F67] hover:text-white transition-colors duration-300">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#113F67]/10 rounded-full flex items-center justify-center text-[#113F67] hover:bg-[#113F67] hover:text-white transition-colors duration-300">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#113F67]/10 rounded-full flex items-center justify-center text-[#113F67] hover:bg-[#113F67] hover:text-white transition-colors duration-300">
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* Partner Section */}
      {/* Partner Section */}
      <section className="py-20 bg-gradient-to-b from-[#113F67]/5 to-[#113F67]/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-[#113F67] mb-6">Partner with Datablize</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#58A0C8] to-[#34699A] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-[#113F67]/80">
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
                className="bg-white rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#113F67] mb-3">{item.title}</h3>
                <p className="text-[#113F67]/70">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Partner Benefits Section */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-white/20 max-w-4xl mx-auto mb-12">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-[#113F67] mb-6 text-center">Partner Benefits</h3>
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
                    <div className="w-6 h-6 bg-gradient-to-r from-[#58A0C8] to-[#34699A] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-white" />
                    </div>
                    <span className="text-[#113F67]/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#34699A] to-[#113F67] text-white rounded-2xl font-bold text-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#58A0C8] to-[#34699A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="relative flex items-center justify-center gap-3">
                <span>Partner Inquiry</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#113F67] mb-6">Careers at Datablize</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#58A0C8] to-[#34699A] rounded-full mb-6"></div>
              <p className="text-xl text-[#113F67]/80 mb-6">
                Have an Entrepreneurial Mindset? Let's Build Together.
              </p>
              <p className="text-[#113F67]/80 mb-8">
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
                    <div className="w-6 h-6 bg-[#113F67]/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-[#34699A] rounded-full"></div>
                    </div>
                    <p className="text-[#113F67]/80">{item}</p>
                  </div>
                ))}
              </div>

              <button className="group relative px-8 py-3 bg-gradient-to-r from-[#34699A] to-[#113F67] text-white rounded-2xl font-bold text-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-[#58A0C8] to-[#34699A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <span>Apply Now</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#FFFFF0] to-[#E9E9E9] rounded-3xl p-8 shadow-xl border border-white/20"
            >
              <h3 className="text-2xl font-bold text-[#113F67] mb-6">Who Are We Looking For?</h3>
              <p className="text-[#113F67]/80 mb-6">
                We don't filter by degrees, GPAs, or fancy titles. We believe great contributors come in many forms:
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
                      <h4 className="text-lg font-bold text-[#113F67]">{item.title}</h4>
                      <p className="text-[#113F67]/80">{item.description}</p>
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