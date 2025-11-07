"use client";

import { useState, useEffect } from "react";
import About from "@/components/about";
import Works from "@/components/works";
import Experience from "@/components/experience";
import Sidebar from "@/components/sidebar";
import MobileHeader from "@/components/mobile-header";
import LanguageSwitcher from "@/components/language-switcher";

export default function ClientPage({ dict, lang }: { dict: any; lang: string }) {
  const [activeSection, setActiveSection] = useState("about");
  const [showTopBlur, setShowTopBlur] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      setShowTopBlur(window.scrollY > 50);

      const aboutSection = document.getElementById("about");
      const experienceSection = document.getElementById("experience");
      const workSection = document.getElementById("work");

      if (window.scrollY < 100) {
        setActiveSection("about");
        return;
      }

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
      <Sidebar
        activeSection={activeSection}
        handleNavClick={handleNavClick}
        dict={dict}
        lang={lang}
      />

      <main className="w-full lg:ml-auto lg:w-[70%] lg:py-24 px-6 sm:px-12 xl:px-8 relative">
        {showTopBlur && (
          <div className="fixed top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-900 via-slate-900/80 to-transparent backdrop-blur-sm z-10 pointer-events-none lg:left-[30%]" />
        )}

        <MobileHeader dict={dict} lang={lang} />

        <section id="about" className="mb-24 scroll-mt-24">
          <About dict={dict} />
        </section>

        <section id="experience" className="mb-24 scroll-mt-24">
          <Experience dict={dict} />
        </section>

        <section id="work" className="mb-24 scroll-mt-24">
          <Works dict={dict} />
        </section>

        <footer className="text-sm text-gray-500 pb-12 mt-32">
          <p className="whitespace-pre-line">{dict.footer}</p>
        </footer>
      </main>
    </div>
  );
}
