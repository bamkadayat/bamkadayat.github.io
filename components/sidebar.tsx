import { NavList } from "@/lib/data";
import { BsGithub, BsLinkedin } from "react-icons/bs";

interface SidebarProps {
  activeSection: string;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, link: string) => void;
}

export default function Sidebar({ activeSection, handleNavClick }: SidebarProps) {
  return (
    <aside className="hidden lg:flex lg:flex-col lg:justify-between lg:sticky lg:top-0 lg:h-screen lg:w-[40%] lg:py-24 lg:px-12 xl:px-16">
      <div>
        <h1 className="text-5xl font-bold text-white mb-3">
          Bam Kadayat
        </h1>
        <h2 className="text-xl font-medium text-white mb-4">
          Frontend Developer & UI/UX Designer
        </h2>
        <p className="text-gray-400 max-w-sm mb-16">
          I build clean, accessible, modern websites people love to use.
        </p>

        {/* Navigation */}
        <nav className="hidden lg:block">
          <ul className="space-y-4">
            {NavList.map((item) => (
              <li key={item.id}>
                <a
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
                    className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                      activeSection === item.id
                        ? "text-white"
                        : "text-gray-500 group-hover:text-white"
                    }`}
                  >
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-5 mt-8">
        <a
          href="https://github.com/bamkadayat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <BsGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/bam-kadayat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <BsLinkedin size={24} />
        </a>
      </div>
    </aside>
  );
}
