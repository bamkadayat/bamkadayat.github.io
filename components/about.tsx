"use client";
import { ImProfile } from "react-icons/im";
import { motion } from "framer-motion";
import Image from "next/image";
export default function About() {
  return (
    <div className="container">
      <div className="page-margin flex items-center gap-4">
        <ImProfile color="#FFA324" size={40} />
        <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-normal leading-normal font-sans">
          About me
        </h1>
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 1.2,
            ease: [0.04, 0.62, 0.23, 0.98],
          }}
          className="flex flex-col md:flex-row items-center justify-between "
        >
          <p className="text-xl mb-8 mt-4 md:w-[600px]">
          Hi, {" I'm "} Bam Kadayat, a front-end and UI/UX developer. I specialize in designing and building web applications that deliver engaging user experiences with smooth, seamless functionality.
          </p>
          <Image
            src="/images/profile.svg"
            width={150}
            height={140}
            alt="profile image"
            className="justify-self-start"
          />
        </motion.div>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="rounded border border-[#6b450f] p-4">
            <h2 className="text-2xl font-semibold mb-4">Design</h2>
            <p className="font-medium">
              I create beautiful, responsive, user friendly websites that
              showcase your brand. I believe in a mobile-first approach to web
              design. I deliver strong and user-friendly digital designs that
              are easy for everyone to use.
            </p>
          </div>
          <div className="rounded border border-[#6b450f] p-4">
            <h2 className="text-2xl font-semibold mb-4">Development</h2>
            <p className="font-medium">
              I build websites that are designed to grow with your needs. I pay
              special attention to the small details that make a site feel alive
              for example: like tiny animations and smooth changes that make
              your website fun to use.
            </p>
          </div>
          <div className="rounded border border-[#6b450f] p-4">
            <h2 className="text-2xl font-semibold mb-4">UI/UX</h2>
            <p className="font-medium">
              I follow a color theory, basics of UI/UX design principles that
              focuses on the users overall experience when interacting with a
              product. Usability, accessiblity, clarity, simplicity and feedback
              are some of the key elements of UI/UX design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
