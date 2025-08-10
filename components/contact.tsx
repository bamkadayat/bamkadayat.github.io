"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import SubmitBtn from "./submit-btn";
import { HiMail } from "react-icons/hi";
import { BiSolidUser } from "react-icons/bi";
import { BsChatTextFill } from "react-icons/bs";

export default function Contact() {
  const [message, setMessage] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-base">
          Have a project in mind? Let&apos;s create something amazing together.
        </p>
      </div>

      {/* Contact Form */}
      <form
        className="space-y-6"
        onSubmit={async (e) => {
          e.preventDefault();
          setPending(true);
          const formData = new FormData(e.currentTarget);
          
          try {
            const response = await fetch('/api/send-email', {
              method: 'POST',
              body: formData,
            });
            
            const result = await response.json();
            
            if (!response.ok) {
              setMessage(result.error);
            } else {
              setMessage("Message sent successfully! I'll get back to you soon.");
              
              // Clear the input fields after successful submission
              if (emailRef.current && nameRef.current && messageRef.current) {
                emailRef.current.value = "";
                nameRef.current.value = "";
                messageRef.current.value = "";
              }
            }
          } catch (error) {
            setMessage("Failed to send message. Please try again.");
          } finally {
            setPending(false);
          }
        }}
      >
        {/* Name Input */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <BiSolidUser className="text-gray-500 group-focus-within:text-[#FFA324] transition-colors" size={20} />
          </div>
          <input
            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 
                     focus:border-[#FFA324]/50 focus:bg-white/10 focus:outline-none transition-all duration-300
                     hover:border-white/20"
            name="senderName"
            type="text"
            required
            maxLength={100}
            placeholder="Your name"
            ref={nameRef}
          />
        </div>

        {/* Email Input */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <HiMail className="text-gray-500 group-focus-within:text-[#FFA324] transition-colors" size={20} />
          </div>
          <input
            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 
                     focus:border-[#FFA324]/50 focus:bg-white/10 focus:outline-none transition-all duration-300
                     hover:border-white/20"
            name="senderEmail"
            type="email"
            required
            maxLength={100}
            placeholder="Your email"
            ref={emailRef}
          />
        </div>

        {/* Message Textarea */}
        <div className="relative group">
          <div className="absolute top-4 left-0 pl-4 pointer-events-none">
            <BsChatTextFill className="text-gray-500 group-focus-within:text-[#FFA324] transition-colors" size={20} />
          </div>
          <textarea
            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 
                     focus:border-[#FFA324]/50 focus:bg-white/10 focus:outline-none transition-all duration-300
                     hover:border-white/20 resize-none"
            name="message"
            placeholder="Your message"
            required
            maxLength={1000}
            rows={6}
            ref={messageRef}
          />
        </div>

        {/* Submit Button */}
        <SubmitBtn pending={pending} />

        {/* Message Display */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg ${
              message.includes("successfully") 
                ? "bg-green-500/10 border border-green-500/30 text-green-400" 
                : "bg-red-500/10 border border-red-500/30 text-red-400"
            }`}
          >
            <p className="text-sm font-medium">{message}</p>
          </motion.div>
        )}
      </form>

      {/* Decorative Element */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FFA324]/10 rounded-full blur-3xl" />
    </motion.section>
  );
}