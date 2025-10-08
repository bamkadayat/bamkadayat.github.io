import { personalInfo, socialLinks } from "@/lib/data";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function MobileHeader() {
  return (
    <div className="lg:hidden mb-16 pt-20">
      <h1 className="text-5xl font-bold text-white mb-3">
        {personalInfo.name}
      </h1>
      <h2 className="text-xl font-medium text-white mb-4">
        {personalInfo.title}
      </h2>
      <p className="text-gray-400 mb-8">
        {personalInfo.tagline}
      </p>

      {/* Mobile Social Links */}
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
      </div>
    </div>
  );
}
