"use client";

import { useState, useEffect } from "react";
import About from "@/components/about";
import Works from "@/components/works";
import Experience from "@/components/experience";
import Sidebar from "@/components/sidebar";
import MobileHeader from "@/components/mobile-header";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [showTopBlur, setShowTopBlur] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for better detection

      // Show blur effect when scrolled down
      setShowTopBlur(window.scrollY > 50);

      // Get all section elements
      const aboutSection = document.getElementById("about");
      const experienceSection = document.getElementById("experience");
      const workSection = document.getElementById("work");

      // Check if we're at the top
      if (window.scrollY < 100) {
        setActiveSection("about");
        return;
      }

      // Check each section's position
      if (workSection && scrollPosition >= workSection.offsetTop) {
        setActiveSection("work");
      } else if (experienceSection && scrollPosition >= experienceSection.offsetTop) {
        setActiveSection("experience");
      } else if (aboutSection && scrollPosition >= aboutSection.offsetTop) {
        setActiveSection("about");
      } else {
        setActiveSection("about");
      }
    };

    // Run on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    const targetId = link.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex min-h-screen max-w-screen-lg mx-auto">
      {/* Left Sidebar - Fixed */}
      <Sidebar activeSection={activeSection} handleNavClick={handleNavClick} />

      {/* Right Content - Scrollable */}
      <main className="w-full lg:ml-auto lg:w-[70%] lg:py-24 px-6 sm:px-12 xl:px-8 relative">
        {/* Top Blur Overlay */}
        {showTopBlur && (
          <div className="fixed top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-900 via-slate-900/80 to-transparent backdrop-blur-sm z-10 pointer-events-none lg:left-[30%]" />
        )}

        {/* Mobile Header */}
        <MobileHeader />

        {/* Sections */}
        <section id="about" className="mb-24 scroll-mt-24">
          <About />
        </section>

        <section id="experience" className="mb-24 scroll-mt-24">
          <Experience />
        </section>

        <section id="work" className="mb-24 scroll-mt-24">
          <Works />
        </section>

        {/* Footer */}
        <footer className="text-sm text-gray-500 pb-12 mt-32">
          <p>
            Built with Next.js, TypeScript & Tailwind CSS. Deployed on GitHub Pages.
          </p>
        </footer>
      </main>
    </div>
  );
}
