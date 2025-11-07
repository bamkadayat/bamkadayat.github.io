import { socialLinks } from "@/lib/data";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import LanguageSwitcher from "./language-switcher";

export default function MobileHeader({ dict, lang }: { dict: any; lang: string }) {
  return (
    <div className="lg:hidden mb-16 pt-20">
      <h1 className="text-5xl font-bold text-white mb-3">
        {dict.personal.name}
      </h1>
      <h2 className="text-xl font-medium text-white mb-4">
        {dict.personal.title}
      </h2>
      <p className="text-gray-400 mb-8">
        {dict.personal.tagline}
      </p>

      {/* Mobile Social Links & Language Switcher */}
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
    </div>
  );
}
