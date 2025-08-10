"use client";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

// Lazy load icons to improve initial load
const FaLaptopCode = dynamic(() => import("react-icons/fa6").then(mod => ({ default: mod.FaLaptopCode })), { ssr: false });
const IoMdDownload = dynamic(() => import("react-icons/io").then(mod => ({ default: mod.IoMdDownload })), { ssr: false });
const BsArrowRight = dynamic(() => import("react-icons/bs").then(mod => ({ default: mod.BsArrowRight })), { ssr: false });
const BsLinkedin = dynamic(() => import("react-icons/bs").then(mod => ({ default: mod.BsLinkedin })), { ssr: false });
const FaGithubSquare = dynamic(() => import("react-icons/fa").then(mod => ({ default: mod.FaGithubSquare })), { ssr: false });

import { motion } from "framer-motion";

export default function Intro() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center py-8 md:py-0 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-2 bg-[#FFA324]/10 text-[#FFA324] rounded-full text-sm font-semibold tracking-wide uppercase">
                Welcome to my portfolio
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="text-white">Hi, I&apos;m</span>
              <br />
              <span className="text-[#FFA324] inline-block mt-2">Bam Kadayat</span>
            </motion.h1>

            {/* Role */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-4 mb-6"
            >
              <div className="p-3 bg-[#FFA324]/10 rounded-2xl">
                <FaLaptopCode className="text-[#FFA324]" size={28} />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-semibold text-white">
                  Frontend Developer
                </p>
                <p className="text-gray-400 text-sm sm:text-base">
                  UI/UX Enthusiast
                </p>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-gray-300 text-base sm:text-lg mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Crafting beautiful, responsive web experiences with modern technologies. 
              Passionate about clean code and intuitive user interfaces.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8 max-w-md mx-auto lg:mx-0"
            >
              <Link 
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 px-6 py-3 bg-[#FFA324] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#FFA324]/25 hover:scale-105"
              >
                <span className="relative z-10">Contact Me</span>
                <BsArrowRight className="relative z-10 transition-transform group-hover:translate-x-1" size={20} />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFA324] to-[#ff8c00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <a
                href="/bam-kadayat-cv.pdf"
                download
                className="group inline-flex items-center justify-center gap-3 px-6 py-3 border-2 border-white/20 text-white font-semibold rounded-lg transition-all duration-300 hover:border-[#FFA324]/50 hover:bg-white/5 hover:scale-105"
              >
                <IoMdDownload className="transition-transform group-hover:-translate-y-0.5" size={20} />
                <span>Download CV</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <span className="text-gray-400 text-sm">Find me on:</span>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/bam-kadayat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2.5 bg-white/5 border border-white/10 rounded-lg transition-all duration-300 hover:bg-[#FFA324]/10 hover:border-[#FFA324]/30 hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <BsLinkedin className="text-[#FFA324] transition-transform group-hover:scale-110" size={20} />
                </a>
                <a
                  href="https://github.com/bamkadayat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2.5 bg-white/5 border border-white/10 rounded-lg transition-all duration-300 hover:bg-[#FFA324]/10 hover:border-[#FFA324]/30 hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <FaGithubSquare className="text-[#FFA324] transition-transform group-hover:scale-110" size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 relative"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:max-w-none">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-[#FFA324]/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
              
              {/* Main Image */}
              <div className="relative z-10">
                <Image
                  src="/images/hero.svg"
                  width={600}
                  height={600}
                  quality={100}
                  alt="Hero illustration"
                  priority
                  className="w-full h-auto max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-none mx-auto"
                />
              </div>

              {/* Floating Elements - Hidden on mobile */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="hidden md:block absolute top-10 left-0 p-3 bg-gradient-to-br from-[#FFA324] to-[#ff8c00] rounded-xl shadow-lg"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="hidden md:block absolute bottom-10 right-0 p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#FFA324]/5 to-transparent rounded-full blur-3xl" />
      </div>
    </section>
  );
}