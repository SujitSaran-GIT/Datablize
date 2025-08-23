import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, User, MessageSquare, ChevronRight, ArrowRight, Linkedin, ChevronDown, Users, GitBranch, Building, DollarSign, Headphones, BookOpen, Megaphone, LockKeyhole, Share2, Target, Award, Home, TrendingUp, Code, Palette, Rocket, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('contact-content');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Scroll Down Animation */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-white to-primary-light pt-20 pb-16 lg:pt-16 lg:pb-20">

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

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            >
              <span className="text-primary-blue">Get in Touch with</span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="bg-gradient-to-r from-primary-blue to-primary-orange text-transparent bg-clip-text"
              >
                Datablize
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-primary-blue max-w-2xl mx-auto mb-8"
            >
              Ready to transform your enterprise document management? Let's discuss how our solutions can help your organization.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            >
              <Link to="/contact-form">
                <button className="px-6 py-3 bg-gradient-to-r from-primary-blue to-primary-orange text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Contact Sales
                </button>
              </Link>
              <Link to="/demo">
                <button className="px-6 py-3 border-2 border-primary-orange text-primary-dark rounded-xl font-bold hover:bg-primary-orange hover:text-white transition-all duration-300">
                  Request Demo
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          onClick={scrollToNextSection}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-primary-blue mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="text-primary-orange" size={24} />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Content Section */}
      <section id="contact-content" className="py-20 bg-primary-light">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch"> {/* Changed to items-stretch */}
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 flex flex-col" // Added flex flex-col
            >
              <div className="flex-grow"> {/* Added flex-grow for equal height */}
                <div>
                  <h2 className="text-3xl font-bold text-primary-dark mb-6">Contact Information</h2>
                  <p className="text-slate-600 mb-8">
                    Ready to Transform Your Document Management? Contact our enterprise solutions team to discuss your organization's needs.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-blue to-primary-orange rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary-dark">Phone</h3>
                      <p className="text-slate-600">+1 (88) 555-0123</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-blue to-primary-orange rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary-dark">Email</h3>
                      <p className="text-slate-600">sales@datablize.com</p>
                      <p className="text-slate-600 mt-1">support@datablize.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-blue to-primary-orange rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary-dark">Head Office</h3>
                      <p className="text-slate-600">Root2Rise, Incubation Center, Plot No. GD 2/12 & 13</p>
                      <p className="text-slate-600">Chakadola Vihar, Chandrasekharpur</p>
                      <p className="text-slate-600">Bhubaneswar – 751023, Odisha, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-bold text-primary-dark mb-4">Follow Us</h3>
                <div className="flex ">
                  <a href="#" className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-primary-blue hover:text-primary-orange transition-colors duration-300">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-primary-blue hover:text-primary-orange transition-colors duration-300">
                    <FaXTwitter size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-primary-blue hover:text-primary-orange transition-colors duration-300">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-primary-blue hover:text-primary-orange transition-colors duration-300">
                    <Facebook size={18} />
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
              className="bg-primary-white rounded-3xl p-8 shadow-xl border border-primary-orange/20 h-full flex flex-col" // Added h-full flex flex-col
            >
              <div className="flex-grow"> {/* Added flex-grow for equal height */}
                <h2 className="text-3xl font-bold text-primary-dark mb-6">Send us a message</h2>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block text-slate-600 font-medium">First Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="text-primary-blue" size={18} />
                        </div>
                        <input
                          type="text"
                          id="firstName"
                          className="block w-full pl-10 pr-3 py-3 bg-primary-light border border-primary-blue/20 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                          placeholder="First Name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block text-slate-600 font-medium">Last Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="text-primary-blue" size={18} />
                        </div>
                        <input
                          type="text"
                          id="lastName"
                          className="block w-full pl-10 pr-3 py-3 bg-primary-light border border-primary-blue/20 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-slate-600 font-medium">Company Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="text-primary-blue" size={18} />
                      </div>
                      <input
                        type="text"
                        id="company"
                        className="block w-full pl-10 pr-3 py-3 bg-primary-light border border-primary-blue/20 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-slate-600 font-medium">Work Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="text-primary-blue" size={18} />
                      </div>
                      <input
                        type="email"
                        id="email"
                        className="block w-full pl-10 pr-3 py-3 bg-primary-light border border-primary-blue/20 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                        placeholder="Work Email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-slate-600 font-medium">Contact Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="text-primary-blue" size={18} />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        className="block w-full pl-10 pr-3 py-3 bg-primary-light border border-primary-blue/20 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                        placeholder="Contact Number"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="notes" className="block text-slate-600 font-medium">Additional Notes</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
                        <MessageSquare className="text-primary-blue" size={18} />
                      </div>
                      <textarea
                        id="notes"
                        rows={5}
                        className="block w-full pl-10 pr-3 py-3 bg-primary-light border border-primary-blue/20 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                        placeholder="Additional Notes"
                      />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="policy"
                      type="checkbox"
                      className="w-4 h-4 text-primary-orange bg-primary-light border border-primary-blue/20 rounded focus:ring-2 focus:ring-primary-orange"
                    />
                    <label htmlFor="policy" className="ml-2 text-sm text-slate-600">
                      I agree to the <Link to={"/privacy-policy"} className="text-primary-blue hover:text-primary-orange underline">privacy policy</Link>
                    </label>
                  </div>
                </form>
              </div>

              <button
                type="submit"
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-blue to-primary-orange text-white rounded-2xl font-bold text-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 w-full mt-6" // Added mt-6
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-orange to-primary-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <span>Submit</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Partner Section */}
      <section className="py-20 bg-gradient-to-br from-primary-blue/5 to-primary-orange/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-blue to-primary-orange text-transparent bg-clip-text mb-6">Partner with Datablize</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-primary-orange mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-600">
              Join our partner ecosystem to deliver innovative document management solutions to your clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {[
              {
                title: "Reseller and Implementation Partners",
                description: "Deliver our solutions to your clients with competitive commissions and implementation support",
                icon: Users,
                color: "from-primary-blue to-primary-orange"
              },
              {
                title: "Technology Integration Partners",
                description: "Integrate with our platform to enhance your offerings and create seamless workflows",
                icon: GitBranch,
                color: "from-primary-blue to-primary-orange"
              },
              {
                title: "Industry Solution Partners",
                description: "Co-develop industry-specific document solutions tailored to vertical markets",
                icon: Building,
                color: "from-primary-blue to-primary-orange"
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary-white rounded-2xl p-8 shadow-lg border border-primary-orange/20 hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Partner Benefits Section */}
          <div className="bg-primary-white rounded-3xl shadow-xl overflow-hidden border border-primary-orange/20 max-w-4xl mx-auto mb-12">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-primary-dark mb-6 text-center">Partner Benefits</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { text: "Competitive commission structure", icon: DollarSign },
                  { text: "Dedicated partner support", icon: Headphones },
                  { text: "Sales and technical training", icon: BookOpen },
                  { text: "Co-marketing opportunities", icon: Megaphone },
                  { text: "Partner portal access", icon: LockKeyhole },
                  { text: "Lead sharing and referrals", icon: Share2 }
                ].map((benefit, index) => {
                  const BenefitIcon = benefit.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <BenefitIcon size={14} className="text-primary-white" />
                      </div>
                      <span className="text-slate-600">{benefit.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-blue to-primary-orange text-white rounded-2xl font-bold text-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-orange to-primary-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="relative flex items-center justify-center gap-3">
                <span>Partner Inquiry</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-blue to-primary-orange text-transparent bg-clip-text mb-6">Careers at Datablize</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-primary-orange rounded-full mb-6"></div>
              <p className="text-xl text-slate-600 mb-6">
                Have an Entrepreneurial Mindset? Let's Build Together.
              </p>
              <p className="text-slate-600 mb-8">
                At Datablize, we're not just hiring employees—we're looking for co-creators, innovators, and builders who think like entrepreneurs and act like problem solvers.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  {
                    text: "Collaborate on enterprise-grade products solving real pain points",
                    icon: Users
                  },
                  {
                    text: "Take ownership from idea to execution",
                    icon: Target
                  },
                  {
                    text: "Work with a team that values skills over resumes",
                    icon: Award
                  },
                  {
                    text: "Remote-friendly and flexible working culture",
                    icon: Home
                  },
                  {
                    text: "Shape the product roadmap and influence the direction of our innovation",
                    icon: TrendingUp
                  }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary-orange/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <IconComponent size={14} className="text-primary-orange" />
                      </div>
                      <p className="text-slate-600">{item.text}</p>
                    </div>
                  );
                })}
              </div>

              <a href="mailto:Career@datablize.com">
                <button className="group relative px-8 py-3 bg-gradient-to-r from-primary-blue to-primary-orange text-white rounded-2xl font-bold text-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-orange to-primary-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
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
              className="bg-primary-white rounded-3xl p-8 shadow-xl border border-primary-orange/20"
            >
              <h3 className="text-2xl font-bold text-primary-dark mb-6">Who Are We Looking For?</h3>
              <p className="text-slate-600 mb-6">
                We don't filter by Degrees, Grades, GPAs, and Titles as they don't define talent. At Datablize, we're looking for Hackers, Hipsters and Hustlers who are ready to make an impact. If that's you — we'd love to hear from you.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Hacker",
                    description: "You live and breathe code, and love building things that just work",
                    icon: Code,
                    color: "from-primary-blue to-primary-orange"
                  },
                  {
                    title: "Hipster",
                    description: "You care about design, user experience, and building lovable products",
                    icon: Palette,
                    color: "from-primary-blue to-primary-orange"
                  },
                  {
                    title: "Hustler",
                    description: "You're resourceful, driven, and know how to get things done",
                    icon: Rocket,
                    color: "from-primary-blue to-primary-orange"
                  }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <IconComponent size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-primary-dark">{item.title}</h4>
                        <p className="text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;