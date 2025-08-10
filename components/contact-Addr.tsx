"use client";

import { motion } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ContactAddr() {
  const contactInfo = [
    {
      icon: <HiMail size={20} />,
      label: "Email",
      value: "bamkadayat@gmail.com",
      href: "mailto:bamkadayat@gmail.com",
    },
    {
      icon: <HiPhone size={20} />,
      label: "Phone",
      value: "+47 99 851 486",
      href: "tel:+4799851486",
    },
    {
      icon: <HiLocationMarker size={20} />,
      label: "Location",
      value: "Norway",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={22} />,
      label: "GitHub",
      href: "https://github.com/bamkadayat",
      color: "hover:text-gray-400",
    },
    {
      icon: <FaLinkedin size={22} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/bam-kadayat/",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaTwitter size={22} />,
      label: "Twitter",
      href: "https://twitter.com/bamkadayat",
      color: "hover:text-sky-400",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Quick Connect Card */}
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10">
        <h3 className="text-2xl font-bold text-white mb-6">Quick Connect</h3>
        
        <div className="space-y-5">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 group"
            >
              <div className="p-3 bg-[#FFA324]/10 rounded-xl text-[#FFA324] group-hover:bg-[#FFA324]/20 transition-colors">
                {item.icon}
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-400 mb-0.5">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-white hover:text-[#FFA324] transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-white">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Social Links Card */}
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10">
        <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s Connect</h3>
        <p className="text-gray-400 mb-6">
          Follow me on social media for updates and insights
        </p>
        
        <div className="flex gap-3">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 
                         transition-all duration-300 hover:border-[#FFA324]/30 hover:bg-white/10 
                         hover:scale-110 hover:text-[#FFA324] ${social.color}`}
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Availability Status */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-green-500/10 to-green-500/5 border border-green-500/20 rounded-xl p-4"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
          </div>
          <p className="text-green-400 font-medium">
            Available for freelance projects
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}