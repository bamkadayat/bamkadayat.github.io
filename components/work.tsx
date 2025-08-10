"use client";

import { worksData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

type WorkProps = (typeof worksData)[number];

export default function Work({
  title,
  description,
  tags,
  imageUrl,
}: WorkProps) {
  return (
    <motion.div
      className="border rounded-lg border-[#5c5e5c] mb-4 mr-4 bg-[#25384d]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
        duration: 1.2,
        ease: [0.04, 0.62, 0.23, 0.98],
      }}
    >
      <div className="image-mobile">
        <Image
          className="rounded-t-lg "
          src={imageUrl}
          width={500}
          height={500}
          objectFit="cover"
          alt={title}
        />
      </div>

      <div className="p-2 my-4">
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="border border-[#6b450f] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
