"use client";

import React from "react";
import { motion } from "framer-motion";
import { worksData } from "@/lib/data";
import Work from "./work";
import { MdWorkHistory } from "react-icons/md";

export default function Works() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  return (
    <section className="min-h-screen py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header Section - Centered like other pages */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-[#FFA324]/10 rounded-2xl mb-6">
            <MdWorkHistory className="text-[#FFA324]" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Work
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing projects that blend creativity with functionality
          </p>
        </div>

        {/* Enhanced Description */}
        <div className="space-y-4 max-w-4xl mx-auto mb-12 text-center">
          <p className="text-lg text-gray-300 leading-relaxed">
            Welcome to my portfolio showcase! Here you&apos;ll discover a collection of my 
            <span className="text-[#FFA324] font-semibold"> frontend</span>, 
            <span className="text-[#FFA324] font-semibold"> backend</span>, and 
            <span className="text-[#FFA324] font-semibold"> UI/UX design</span> projects.
          </p>
          <p className="text-base text-gray-400 leading-relaxed">
            Each project represents my commitment to creating beautiful, performant, and 
            user-centric digital experiences. From responsive web applications to complex 
            dashboards, I focus on writing clean, maintainable code while delivering 
            exceptional user interfaces.
          </p>
        </div>

        {/* Stats or highlights - Centered */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#FFA324] rounded-full animate-pulse" />
            <span className="text-gray-300">
              <span className="font-bold text-white">{worksData.length}+</span> Projects Completed
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-gray-300">
              <span className="font-bold text-white">5+</span> Technologies Used
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-gray-300">
              <span className="font-bold text-white">100%</span> Responsive Design
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {worksData.map((project, index) => (
            <Work key={index} {...project} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4">
            Interested in working together?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFA324] text-white font-semibold rounded-lg hover:bg-[#ff8c00] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FFA324]/25"
          >
            Let&apos;s Connect
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#FFA324]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}