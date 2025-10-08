import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function MobileHeader() {
  return (
    <div className="lg:hidden mb-16 pt-20">
      <h1 className="text-5xl font-bold text-white mb-3">
        Bam Kadayat
      </h1>
      <h2 className="text-xl font-medium text-white mb-4">
        Frontend Developer & UI/UX Designer
      </h2>
      <p className="text-gray-400 mb-8">
        I build clean, accessible, modern websites people love to use.
      </p>

      {/* Mobile Social Links */}
      <div className="flex items-center gap-5">
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
    </div>
  );
}
