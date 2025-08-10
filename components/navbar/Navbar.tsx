"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NavList } from "@/lib/data";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const currentPath = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-[#16222e]/95 backdrop-blur-md shadow-lg" : "bg-[#16222e] shadow-md"
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 transition-transform hover:scale-105">
            <Image src="/logo.svg" width={70} height={40} alt="logo" priority />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {NavList.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  prefetch={true}
                  className={`relative px-4 lg:px-6 py-2 text-white font-semibold text-base lg:text-lg transition-all duration-300 hover:text-white/90 group ${
                    currentPath === item.link ? "text-white" : ""
                  }`}
                  id={item.id}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className={`absolute bottom-0 left-4 lg:left-6 right-4 lg:right-6 h-0.5 bg-[#FFA324] transition-all duration-300 ${
                    currentPath === item.link 
                      ? "opacity-100 scale-x-100" 
                      : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                  }`} />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center focus:outline-none group"
            aria-label="Toggle menu"
          >
            <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`} />
            <span className={`block w-7 h-0.5 bg-white transition-all duration-300 my-1.5 ${
              isMenuOpen ? "opacity-0 scale-x-0" : ""
            }`} />
            <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <ul className="py-4 space-y-1 border-t border-white/10">
            {NavList.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  onClick={closeMenu}
                  className={`block px-4 py-3 text-white font-medium text-base transition-all duration-200 hover:bg-white/5 hover:pl-6 ${
                    currentPath === item.link 
                      ? "bg-white/10 border-l-4 border-[#FFA324]" 
                      : ""
                  }`}
                  id={item.id}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-[-1]" 
          onClick={closeMenu}
        />
      )}
    </header>
  );
}