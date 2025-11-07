import Link from "next/link";
import { socialLinks } from "@/lib/data";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import LanguageSwitcher from "./language-switcher";

interface SidebarProps {
  activeSection: string;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, link: string) => void;
  dict: any;
  lang: string;
}

export default function Sidebar({ activeSection, handleNavClick, dict, lang }: SidebarProps) {
  const navItems = [
    { name: dict.nav.about, link: "#about", id: "about" },
    { name: dict.nav.experience, link: "#experience", id: "experience" },
    { name: dict.nav.work, link: "#work", id: "work" },
  ];

  return (
    <aside className="hidden lg:flex lg:flex-col lg:justify-between lg:sticky lg:top-0 lg:h-screen lg:w-[30%] lg:py-24 lg:px-12 xl:px-8">
      <div>
        <h1 className="text-5xl font-bold text-white mb-3">
          {dict.personal.name}
        </h1>
        <h2 className="text-xl font-medium text-white mb-4">
          {dict.personal.title}
        </h2>
        <p className="text-gray-400 max-w-sm mb-16">
          {dict.personal.tagline}
        </p>

        {/* Navigation */}
        <nav className="hidden lg:block">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  onClick={(e) => handleNavClick(e, item.link)}
                  className="group flex items-center gap-4 py-2"
                >
                  <span
                    className={`h-px transition-all duration-300 ${
                      activeSection === item.id
                        ? "w-16 bg-white"
                        : "w-8 bg-gray-600 group-hover:w-16 group-hover:bg-white"
                    }`}
                  ></span>
                  <span
                    className={` text-md font-semibold uppercase tracking-widest transition-colors duration-300 ${
                      activeSection === item.id
                        ? "text-white"
                        : "text-gray-500 group-hover:text-white"
                    }`}
                  >
                    {item.name} 
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Social Links & Language Switcher */}
      <div className="flex items-center gap-5">
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <BsGithub size={24} />
        </a>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <BsLinkedin size={24} />
        </a>
        <LanguageSwitcher currentLang={lang} />
      </div>
    </aside>
  );
}
