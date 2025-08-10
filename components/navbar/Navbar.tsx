"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./navbar.scss";
import { NavList } from "@/lib/data";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isIconActive, setIsIconActive] = useState(false);
  const currentPath = usePathname();

  const navToggle = () => {
    setIsActive(!isActive);
    setIsIconActive(!isIconActive);
  };

  const closeMenu = () => {
    setIsActive(false);
    setIsIconActive(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 header-wrap">
      <nav className="nav container">
        <Link href="/" className="nav__brand">
          <Image src="logo.svg" width={70} height={40} alt="logo" />
        </Link>
        <ul className={`nav__menu ${isActive ? "nav__active" : ""}`}>
          {NavList.map((item, index) => (
            <li className="nav__item" key={index}>
              <Link
                href={item.link}
                className={currentPath === item.link ? "active" : ""}
                onClick={closeMenu}
                id={item.id}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={navToggle}
          className={`nav__toggler ${isIconActive ? "toggle" : ""}`}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
}
