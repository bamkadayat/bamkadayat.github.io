export default function About({ dict }: { dict: any }) {
  return (
    <div>
      <div className="space-y-4 text-gray-300 leading-7">
        <p>{dict.about.intro}</p>

        <p>{dict.about.currentWork}</p>

        <p>{dict.about.design}</p>

        <p>{dict.about.personal}</p>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold text-white mb-6">
          {dict.about.techTitle}
        </h3>

        <ul className="grid grid-cols-2 gap-3 text-sm text-gray-400">
          {dict.about.technologies.map((tech: string) => (
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
