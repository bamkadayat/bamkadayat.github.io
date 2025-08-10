"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiVuedotjs,
  SiTailwindcss, SiNodedotjs, SiGit, SiHtml5, SiCss3,
  SiRedux, SiExpress, SiPostgresql, SiPrisma, SiFramer
} from "react-icons/si";
import { FaWordpress } from "react-icons/fa";

export default function Skills() {
  // Map skills to their icons and categories
  const skillIcons: { [key: string]: any } = {
    "HTML": SiHtml5,
    "CSS": SiCss3,
    "JavaScript": SiJavascript,
    "TypeScript": SiTypescript,
    "Vuejs": SiVuedotjs,
    "React": SiReact,
    "Next.js": SiNextdotjs,
    "Node.js": SiNodedotjs,
    "Git": SiGit,
    "Tailwind": SiTailwindcss,
    "Prisma": SiPrisma,
    "Redux": SiRedux,
    "Express": SiExpress,
    "PostgreSQL": SiPostgresql,
    "Framer Motion": SiFramer,
    "wordPress": FaWordpress,
  };

  const skillCategories = {
    "Frontend": ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vuejs", "Next.js", "Redux"],
    "Backend": ["Node.js", "Express", "PostgreSQL", "Prisma"],
    "Tools & Others": ["Git", "Tailwind", "Framer Motion", "wordPress", "Vuetify"],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Technical Skills
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </motion.div>

      {/* Skills by Category */}
      <div className="space-y-12">
        {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-xl font-bold text-[#FFA324] mb-6">
              {category}
            </h3>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {skills.map((skill) => {
                const IconComponent = skillIcons[skill];
                const isInData = skillsData.includes(skill as any);
                
                if (!isInData) return null;

                return (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="group"
                  >
                    <div className="flex flex-col items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl
                                  hover:bg-white/10 hover:border-[#FFA324]/30 transition-all duration-300
                                  hover:shadow-lg hover:shadow-[#FFA324]/10">
                      {IconComponent ? (
                        <IconComponent 
                          size={32} 
                          className="text-gray-400 group-hover:text-[#FFA324] transition-colors duration-300" 
                        />
                      ) : (
                        <div className="w-8 h-8 bg-gradient-to-br from-[#FFA324]/20 to-[#FFA324]/10 rounded-lg" />
                      )}
                      <span className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors">
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Skill Level Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 bg-gradient-to-br from-[#FFA324]/10 to-[#FFA324]/5 border border-[#FFA324]/20 rounded-2xl p-6"
      >
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-[#FFA324] rounded-full animate-pulse" />
            <span className="text-gray-300">Currently Learning</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-green-500 rounded-full" />
            <span className="text-gray-300">Proficient</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-blue-500 rounded-full" />
            <span className="text-gray-300">Experienced</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}