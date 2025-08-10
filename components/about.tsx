"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaPalette, FaCode, FaLightbulb } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

export default function About() {
  const services = [
    {
      icon: <FaPalette size={24} />,
      title: "Design",
      description: "Creating beautiful, responsive, and user-friendly interfaces that showcase your brand. Mobile-first approach with attention to visual hierarchy and modern aesthetics.",
      highlights: ["Responsive Design", "Brand Identity", "User-Centered"],
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      iconBg: "bg-purple-500/20",
    },
    {
      icon: <FaCode size={24} />,
      title: "Development",
      description: "Building scalable web applications with clean, maintainable code. Focus on performance, accessibility, and smooth animations that bring interfaces to life.",
      highlights: ["Clean Code", "Performance", "Scalability"],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      iconBg: "bg-blue-500/20",
    },
    {
      icon: <FaLightbulb size={24} />,
      title: "UI/UX",
      description: "Following design principles that prioritize user experience. Creating intuitive interfaces with clear navigation, consistent patterns, and meaningful interactions.",
      highlights: ["Usability", "Accessibility", "Clarity"],
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      iconBg: "bg-green-500/20",
    },
  ];

  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
  ];

  return (
    <section className="py-16 md:py-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center p-3 bg-[#FFA324]/10 rounded-2xl mb-6">
          <HiSparkles className="text-[#FFA324]" size={32} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          About Me
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Passionate about creating digital experiences that make a difference
        </p>
      </motion.div>

      {/* Introduction Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-20"
      >
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-white mb-6">
                Hi, I&apos;m <span className="text-[#FFA324]">Bam Kadayat</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  A passionate <span className="text-[#FFA324] font-semibold">Frontend Developer</span> and 
                  <span className="text-[#FFA324] font-semibold"> UI/UX Designer</span> dedicated to crafting 
                  exceptional digital experiences that blend beautiful design with seamless functionality.
                </p>
                <p>
                  With a keen eye for detail and a love for clean code, I transform ideas into 
                  engaging web applications that users love to interact with. My approach combines 
                  modern design principles with cutting-edge development practices.
                </p>
                <p>
                  I believe that great design is not just about how something looks, but how it 
                  works and feels. Every project is an opportunity to create something meaningful 
                  that solves real problems and delights users.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-[#FFA324]">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="order-1 md:order-2 relative"
            >
              <div className="relative w-full max-w-sm mx-auto">
                {/* Decorative circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFA324]/20 to-transparent rounded-full blur-2xl" />
                <Image
                  src="/images/profile.svg"
                  width={400}
                  height={400}
                  alt="Profile illustration"
                  className="relative z-10 w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          What I Do
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`relative bg-gradient-to-br ${service.color} backdrop-blur-sm rounded-2xl p-6 border ${service.borderColor} group hover:shadow-xl transition-all duration-300`}
            >
              {/* Icon */}
              <div className={`inline-flex p-3 ${service.iconBg} rounded-xl text-white mb-4 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {service.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-gray-300"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-[#FFA324]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Background decorations */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#FFA324]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}