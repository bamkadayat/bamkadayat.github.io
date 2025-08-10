"use client";

import React from "react";

import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  return (
    <section className="container">
      <h2 className="text-3xl font-bold uppercase tracking-normal leading-normal font-sans mb-4">
        Skills
      </h2>
      <ul className="flex flex-wrap md:w-[800px] justify-start gap-3 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="border border-[#6b450f] text-white rounded-lg px-4 py-2 "
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
