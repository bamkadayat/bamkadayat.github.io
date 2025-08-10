"use client";
import React from "react";
import Image from "next/image";
import { FaLaptopCode } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { motion } from "framer-motion";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";

export default function Intro() {
  const textName = "I'm Bam Kadayat";
  return (
    <div className="container">
      <div className="grid md:grid-cols-2 items-center justify-between gap-1 page-margin">
        <div>
          <h1 className="text-3xl text-[#FFA324] mb-2">Hello,</h1>
          {textName.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.1,
              }}
              tabIndex={0}
              className="md:text-5xl text-4xl font-bold uppercase tracking-normal leading-normal font-sans w-[600px]"
            >
              {letter}
            </motion.span>
          ))}

          <div>
            <p className="my-8 flex items-center">
              <span>
                <FaLaptopCode className="mr-4" size={60} />
              </span>
              <span className="md:text-3xl text-2xl uppercase tracking-wide font-sans">
                Front-end, UI/UX developer
              </span>
            </p>
            <div className=" md:grid md:grid-cols-2 grid grid-cols-1 gap-4 md:w-[400px]">
              <button className="bg-transparent hover:bg-[#FFA324] text-white-700 font-semibold hover:text-white py-2 px-4 border border-[#FFA324] hover:border-transparent rounded uppercase whitespace-nowrap">
                <Link
                  href={`/contact`}
                  className="flex items-center justify-center md:gap-4 gap-1"
                >
                  <BsArrowRight size={20} />
                  <span className="text-[16px]"> Contact me</span>
                </Link>
              </button>
              <button className="bg-transparent hover:none text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:none rounded uppercase whitespace-nowrap">
                <a
                  href="/bam-kadayat-cv.pdf"
                  download
                  className="flex items-center justify-center md:gap-4 gap-1"
                >
                  <IoMdDownload size={20} />

                  <span className="text-[16px]">Download cv</span>
                </a>
              </button>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <a
                className=" inline-block text-gray-700 hover:text-gray-950 rounded-full focus:scale-[1.15] hover:scale-[1.1] active:scale-80 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://www.linkedin.com/in/bam-kadayat"
                target="_blank"
              >
                <BsLinkedin color="#FFA324" size={30} />
              </a>

              <a
                className="inline-block text-gray-700  rounded-full focus:scale-[1.1] hover:scale-[1.1] hover:text-gray-950 active:scale-80 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://github.com/bamkadayat"
                target="_blank"
              >
                <FaGithubSquare color="#FFA324" size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="justify-self-end">
          <Image
            src="/images/hero.svg"
            width={500}
            height={500}
            quality={100}
            alt="hero image"
          />
        </div>
      </div>
    </div>
  );
}
