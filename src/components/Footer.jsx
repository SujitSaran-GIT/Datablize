import { motion } from 'framer-motion';
import { ArrowRight, Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import Logo from './common/Logo';
import { Link } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const footerSections = [
    {
      title: "Products",
      items: [
        "Features",
        "Security",
        "Integration",
        "Pricing",
        "Source Code Escrow",
        "Deployment",
        // "Tech Support – SLA, Upgrade, OEM Support"
      ]
    },
    {
      title: "Resources",
      items: [
        "Case Studies",
        "Documentation",
        "Guides",
        "API References",
        "Demo Videos",
        "FAQ"
      ]
    },
    {
      title: "About Datablize",
      items: [
        "About",
        "Careers",
        "Partners",
        "Contact"
      ]
    }
  ];

  return (
    <footer className="relative bg-[#FFFFF0] text-gray-800 overflow-hidden">
      {/* Background elements */}
      {/* <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: 0.05,
              y: 0,
              transition: { 
                delay: i * 0.1,
                duration: 1
              }
            }}
            className="absolute bg-gray-800 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 60}px`,
              height: `${20 + Math.random() * 60}px`,
            }}
          />
        ))}
      </div> */}

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* New Company Info Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <Logo className="h-8" />
              <span className="font-bold text-xl bg-gradient-to-r from-[#113F67] via-[#34699A] to-[#58A0C8] bg-clip-text text-transparent">
                Datablize
              </span>
            </div>

            <p className="text-gray-700">
              Empowering businesses with cutting-edge analytics solutions since 2015.
            </p>

            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 text-[#34699A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-700">
                  Root2Rise, Plot No. GD 2/12 & 13 <br/>

                  Chakadola Vihar, Chandrasekharpur <br/>

                  Bhubaneswar – 751023, Odisha, India
                </p>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#34699A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-gray-700">+91 80 1234 5678</p>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#34699A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-700">info@datablize.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-gray-600 hover:text-[#34699A] transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#34699A] transition-colors duration-300">
                <FaXTwitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#34699A] transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#34699A] transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          {/* Existing columns */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-[#34699A] pl-3">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link to={"/privacy-policy"}
                      className="text-gray-700 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2"
                    >
                      <div className="w-1 h-1 bg-[#34699A] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">


            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center md:text-right text-gray-600 text-sm"
            >
              © {new Date().getFullYear()} Datablize Analytics Pvt. Ltd. All rights reserved.
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 text-sm "
            >
              <Link to={"/privacy-policy"} className="text-gray-600 hover:text-gray-900 transition-colors duration-300 hover:[#34699A]">Privacy</Link>
              <Link to={"/terms-of-use"} className="text-gray-600 hover:text-gray-900 transition-colors duration-300 hover:[#34699A]">Terms of Use</Link>
              <Link to={"/disclosure"} className="text-gray-600 hover:text-gray-900 transition-colors duration-300 hover:[#34699A]">Responsible Disclosure Policy</Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;