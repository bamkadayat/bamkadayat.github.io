"use client";

import { worksData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

type WorkProps = (typeof worksData)[number];

export default function Work({
  title,
  description,
  tags,
  imageUrl,
  liveUrl,
  githubUrl,
}: WorkProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e2936] to-[#2a3f56] border border-white/10 hover:border-[#FFA324]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFA324]/10">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#16222e] via-transparent to-transparent z-10" />
          <Image
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={imageUrl}
            width={500}
            height={300}
            alt={title}
            quality={75}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          
          {/* Overlay with Links */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#FFA324] text-white rounded-full hover:bg-[#ff8c00] transition-colors duration-200 hover:scale-110"
                aria-label="View live site"
              >
                <FaExternalLinkAlt size={20} />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors duration-200 hover:scale-110"
                aria-label="View source code"
              >
                <FaGithub size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFA324] transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-sm mb-4 line-clamp-2">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 text-gray-300 rounded-full hover:border-[#FFA324]/50 hover:text-[#FFA324] transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#FFA324]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}