import { ArrowRight, Facebook, Linkedin, Instagram } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import Logo from './common/Logo';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerSections = [
    {
      title: "Products",
      items: [
        { name: "Features", path: "/features" },
        { name: "Security", path: "/products" },
        { name: "Integration", path: "/use-cases" },
        { name: "Pricing", path: "/pricing" },
        { name: "Source Code Escrow", path: "/source-code-escrow" },
        { name: "Deployment", path: "/deployment" }
      ]
    },
    {
      title: "Resources",
      items: [
        { name: "Case Studies", path: "/case-studies" },
        { name: "Documentation", path: "/resources" },
        { name: "Guides", path: "/resources" },
        { name: "Demo Videos", path: "/resources" },
        { name: "FAQ", path: "/faq" }
      ]
    },
    {
      title: "About",
      items: [
        { name: "Company", path: "/about" },
        { name: "Careers", path: "/contact" },
        { name: "Partners", path: "/contact" },
        { name: "Contact", path: "/contact" }
      ]
    }
  ];

  return (
    <footer className="bg-primary-blue text-primary-light relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute w-64 h-64 bg-primary-orange rounded-full -top-32 -left-32"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute w-48 h-48 bg-primary-orange rounded-full -bottom-24 -right-24"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link to="/" className="flex items-center gap-2 group">
              <motion.div
                transition={{ duration: 0.8 }}
              >
                <Logo size={40} showText={true} />
              </motion.div>
              {/* <span className="font-bold text-lg text-primary-white group-hover:text-primary-orange transition-colors duration-300">
                Datablize
              </span> */}
            </Link>
            <motion.p 
              className="text-sm text-primary-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Datablize empowers organizations in their digital transformation journey by delivering intelligent, end-to-end solutions that address industry challenges with precision and efficiency.
            </motion.p>
            <motion.p 
              className="text-xs text-primary-orange font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Engineered in India, Empowering Enterprises Globally.
            </motion.p>
            <div className="space-y-2">
              <motion.div 
                className="flex items-start gap-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-4 h-4 mt-0.5 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-xs text-primary-light">
                  Root2Rise, Incubation Center, Bhubaneswar – 751023, Odisha, India
                </p>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-4 h-4 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-xs text-primary-light">+91 80 1234 5678</p>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-4 h-4 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-xs text-primary-light">info@datablize.com</p>
              </motion.div>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <motion.a 
                href="#" 
                className="text-primary-orange hover:text-primary-white transition-colors duration-300 p-2 rounded-full hover:bg-primary-orange hover:bg-opacity-20"
                // whileHover={{ scale: 1.2, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={16} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-primary-orange hover:text-primary-white transition-colors duration-300 p-2 rounded-full hover:bg-primary-orange hover:bg-opacity-20"
                // whileHover={{ scale: 1.2, rotate: -15 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaXTwitter size={16} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-primary-orange hover:text-primary-white transition-colors duration-300 p-2 rounded-full hover:bg-primary-orange hover:bg-opacity-20"
                // whileHover={{ scale: 1.2, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={16} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-primary-orange hover:text-primary-white transition-colors duration-300 p-2 rounded-full hover:bg-primary-orange hover:bg-opacity-20"
                // whileHover={{ scale: 1.2, rotate: -15 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={16} />
              </motion.a>
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div 
              key={index} 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <h3 className="text-base font-bold text-primary-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <motion.li 
                    key={itemIndex}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      to={item.path}
                      className="text-xs text-primary-light hover:text-primary-orange transition-colors duration-300 relative group"
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-orange transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Footer Bottom */}
        <motion.div 
          className="border-t border-primary-orange border-opacity-30 pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div 
              className="text-xs text-primary-light"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              © {new Date().getFullYear()} Datablize Analytics Pvt. Ltd. All rights reserved.
            </motion.div>
            <motion.div 
              className="flex flex-wrap justify-center gap-3 text-xs"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link to={"/privacy-policy"} className="text-primary-light hover:text-primary-orange transition-colors duration-300 relative group">
                <span className="relative">
                  Privacy
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-orange transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
              <Link to={"/terms-of-use"} className="text-primary-light hover:text-primary-orange transition-colors duration-300 relative group">
                <span className="relative">
                  Terms of Use
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-orange transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
              <Link to={"/disclosure"} className="text-primary-light hover:text-primary-orange transition-colors duration-300 relative group">
                <span className="relative">
                  Responsible Disclosure
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-orange transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;