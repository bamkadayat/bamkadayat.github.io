import { worksStaticData } from "@/lib/data";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function Works({ dict }: { dict: any }) {
  const worksData = dict.work.items.map((item: any, index: number) => ({
    ...item,
    ...worksStaticData[index],
  }));

  return (
    <div>
      <div className="space-y-16">
        {worksData.map((project: any, index: number) => (
          <div
            key={index}
            className="group relative"
          >
            {/* Project Card */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg bg-gray-800/50 border border-gray-700/50">
                <Image
                  src={project.imageUrl}
                  width={600}
                  height={500}
                  alt={project.title}
                  className="w-full h-autogroup-hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white group-hover:text-[#FFA324] transition-colors">
                  {project.title} 
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag: string, tagIndex: number) => (
                    <span
                      key={tagIndex}
                      className="text-xs text-gray-400 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#FFA324] transition-colors"
                      aria-label="View source code"
                    >
                      <FiGithub size={22} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#FFA324] transition-colors"
                      aria-label="View live site"
                    >
                      <FiExternalLink size={22} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
