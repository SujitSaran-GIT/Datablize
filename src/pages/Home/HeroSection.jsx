import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import datablize from "../../assets/datablize.jpeg";

const headingVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
};

const HeroSection = React.memo(() => {
    return (
        <section className="relative flex items-center overflow-hidden min-h-full pt-20 pb-16 lg:pt-16 lg:pb-20 bg-gradient-to-br from-primary-white to-primary-light">
            <div className="absolute inset-0 opacity-5">
                <motion.div
                    className="absolute w-96 h-96 bg-primary-orange rounded-full -top-48 -left-48"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                    className="absolute w-64 h-64 bg-primary-blue rounded-full -bottom-32 -right-32"
                    animate={{ scale: [1.1, 1, 1.1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-24 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-primary-blue flex flex-col gap-2">
                                <motion.span variants={headingVariants} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.2 }}>
                                    AI Powered
                                </motion.span>
                                <motion.span variants={headingVariants} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.4 }} className="text-primary-orange">
                                    Document Intelligence
                                </motion.span>
                                <motion.span variants={headingVariants} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.6 }}>
                                    for Modern Enterprises
                                </motion.span>
                            </h1>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
                            <p className="text-md sm:text-lg lg:text-xl mb-4 font-medium leading-relaxed text-primary-blue">
                                Transform your document chaos into a streamlined, intelligent workflow.
                            </p>
                            <p className="text-sm sm:text-md leading-relaxed text-primary-dark">
                                Datablize is a next-gen, cloud-native platform for intelligent document management. Built with adaptive AI and zero-touch automation, it empowers businesses to organize, analyze, and automate every document-driven process.
                            </p>
                        </motion.div>
                        <motion.div className="flex flex-col sm:flex-row gap-4 sm:gap-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1 }}>
                            <Link to="/contact">
                                <motion.button
                                    className="group relative px-5 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-sm sm:text-md shadow-lg sm:shadow-xl overflow-hidden transform transition-all duration-300 bg-gradient-to-r from-primary-blue to-primary-orange text-primary-white"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label="Request a Demo"
                                >
                                    <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-gradient-to-r from-primary-orange to-primary-blue"></div>
                                    <div className="relative flex items-center gap-2 sm:gap-3">
                                        <span>Request a Demo</span>
                                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </motion.button>
                            </Link>
                            <Link to="/features">
                                <motion.button
                                    className="group px-5 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-sm sm:text-md transition-all duration-300 transform border border-primary-orange text-primary-dark hover:bg-primary-orange hover:text-primary-white"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label="Explore Features"
                                >
                                    <span className="flex items-center gap-2 sm:gap-3">
                                        Explore Features
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                                    </span>
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                    <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
                        <div className="relative max-w-md sm:max-w-lg mx-auto">

                            <motion.img
                                src={"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"}
                                // srcSet="/images/hero-image-optimized-300.webp 300w, /images/hero-image-optimized-600.webp 600w, /images/hero-image-optimized-1200.webp 1200w"
                                sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 1200px"
                                alt="AI Document Intelligence platform showing organized documents with AI analysis"
                                className="w-full h-auto rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl border-2 sm:border-4 border-primary-orange"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7 }}
                            />

                            <motion.div
                                className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 p-2 sm:p-3 rounded-md sm:rounded-lg shadow-sm sm:shadow-md border border-primary-orange bg-primary-white"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center bg-primary-orange text-primary-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </div>
                                    <span className="font-bold text-xs sm:text-sm text-primary-dark">AI-Powered</span>
                                </div>
                            </motion.div>
                            <motion.div
                                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 p-2 sm:p-3 rounded-md sm:rounded-lg shadow-sm sm:shadow-md bg-gradient-to-r from-primary-blue to-primary-orange"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center bg-primary-white text-primary-dark">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                            <line x1="16" y1="13" x2="8" y2="13"></line>
                                            <line x1="16" y1="17" x2="8" y2="17"></line>
                                            <polyline points="10 9 9 9 8 9"></polyline>
                                        </svg>
                                    </div>
                                    <span className="font-bold text-xs sm:text-sm text-primary-white">Document AI</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default HeroSection;