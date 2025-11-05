import { aboutData, personalInfo } from "@/lib/data";

export default function About() {
  return (
    <div>
      <div className="space-y-4 text-gray-300 leading-7">
        <p>{aboutData.paragraphs[0]}</p>

        <p>
          Currently, I&apos;m working as a full-stack developer at{" "}
          <a
            href={personalInfo.currentCompany.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFA324] hover:underline"
          >
            {personalInfo.currentCompany.name}
          </a>
          , where I lead frontend development and contribute to building
          scalable web solutions using React, Next.js, and Vue.js.
        </p>

        <p>{aboutData.paragraphs[1]}</p>

        <p>{aboutData.paragraphs[2]}</p>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold text-white mb-6">
          Technologies I work with:
        </h3>

        <ul className="grid grid-cols-2 gap-3 text-sm text-gray-400">
          {aboutData.technologies.map((tech) => (
            <li key={tech} className="flex items-center gap-2">
              <span className="text-[#FFA324]">▹</span>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
