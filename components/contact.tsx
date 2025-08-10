"use client";

import React, { useState, useRef } from "react";

import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import { MdContactMail } from "react-icons/md";

export default function Contact() {
  const [message, setMessage] = useState<string | null>(null);
  
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="flex items-center gap-4">
        <MdContactMail color="#FFA324" size={40} />
        <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-normal leading-normal font-sans">
          Contact
        </h1>
      </div>

      <form
        className="mt-5 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            setMessage(error);
          } else {
            setMessage("Email sent successfully!");
            
            // Clear the input fields after successful submission
            if (emailRef.current && messageRef.current) {
              emailRef.current.value = "";
              messageRef.current.value = "";
            }
          }
        }}
      >
        <input
          className="h-14 px-4 text-gray-900 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={100}
          placeholder="Your email"
          ref={emailRef} 
        />
        <textarea
          className="h-52 my-3 text-gray-900 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={1000}
          ref={messageRef} 
        />
        <SubmitBtn />
      </form>
      <p>
        {message && (
          <div className="mt-5">
            <p className="text-white dark:text-white/80">{message}</p>
          </div>
        )}
      </p>
    </motion.section>
  );
}
