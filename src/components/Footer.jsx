import { ArrowRight, Facebook, Linkedin, Instagram } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import Logo from './common/Logo';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { themeConfig } = useTheme();
  
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
    <footer className={`${themeConfig.footerBackground} ${themeConfig.footerText}`}>
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Logo className="h-6 w-6" />
              <span className={`font-bold text-lg ${themeConfig.footerLogoText}`}>
                Datablize
              </span>
            </Link>
            <p className={`text-sm ${themeConfig.footerTextSecondary}`}>
              Datablize empowers organizations in their digital transformation journey by delivering intelligent, end-to-end solutions that address industry challenges with precision and efficiency.
            </p>
            <p className={`text-xs ${themeConfig.footerTextTertiary}`}>
              Engineered in India, Empowering Enterprises Globally.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <svg className={`w-4 h-4 mt-0.5 ${themeConfig.footerIcon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className={`text-xs ${themeConfig.footerTextSecondary}`}>
                  Root2Rise, Bhubaneswar – 751023, Odisha, India
                </p>
              </div>
              <div className="flex items-center gap-2">
                <svg className={`w-4 h-4 ${themeConfig.footerIcon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className={`text-xs ${themeConfig.footerTextSecondary}`}>+91 80 1234 5678</p>
              </div>
              <div className="flex items-center gap-2">
                <svg className={`w-4 h-4 ${themeConfig.footerIcon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className={`text-xs ${themeConfig.footerTextSecondary}`}>info@datablize.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <a href="#" className={`${themeConfig.footerSocialIcon} hover:${themeConfig.footerSocialIconHover} transition-colors duration-300`}>
                <Facebook size={16} />
              </a>
              <a href="#" className={`${themeConfig.footerSocialIcon} hover:${themeConfig.footerSocialIconHover} transition-colors duration-300`}>
                <FaXTwitter size={16} />
              </a>
              <a href="#" className={`${themeConfig.footerSocialIcon} hover:${themeConfig.footerSocialIconHover} transition-colors duration-300`}>
                <Linkedin size={16} />
              </a>
              <a href="#" className={`${themeConfig.footerSocialIcon} hover:${themeConfig.footerSocialIconHover} transition-colors duration-300`}>
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-3">
              <h3 className={`text-base font-bold ${themeConfig.footerHeading}`}>{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link 
                      to={item.path}
                      className={`text-xs ${themeConfig.footerLink} hover:${themeConfig.footerLinkHover} transition-colors duration-300`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className={`border-t ${themeConfig.footerDivider} pt-6`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className={`text-xs ${themeConfig.footerTextTertiary}`}>
              © {new Date().getFullYear()} Datablize Analytics Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-3 text-xs">
              <Link to="/privacy-policy" className={`${themeConfig.footerLink} hover:${themeConfig.footerLinkHover} transition-colors duration-300`}>
                Privacy
              </Link>
              <Link to="/terms-of-use" className={`${themeConfig.footerLink} hover:${themeConfig.footerLinkHover} transition-colors duration-300`}>
                Terms of Use
              </Link>
              <Link to="/disclosure" className={`${themeConfig.footerLink} hover:${themeConfig.footerLinkHover} transition-colors duration-300`}>
                Responsible Disclosure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

