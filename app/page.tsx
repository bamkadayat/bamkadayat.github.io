"use client";

import { useState, useEffect } from "react";
import About from "@/components/about";
import Works from "@/components/works";
import Experience from "@/components/experience";
import Sidebar from "@/components/sidebar";
import MobileHeader from "@/components/mobile-header";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for better detection

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
    <div className="flex min-h-screen max-w-screen-xl mx-auto">
      {/* Left Sidebar - Fixed */}
      <Sidebar activeSection={activeSection} handleNavClick={handleNavClick} />

      {/* Right Content - Scrollable */}
      <main className="w-full lg:ml-auto lg:w-[60%] lg:py-24 px-6 sm:px-12 xl:px-16">
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
