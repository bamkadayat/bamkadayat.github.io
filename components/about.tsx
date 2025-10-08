export default function About() {
  return (
    <div>
      <div className="space-y-4 text-gray-400 leading-relaxed">
        <p>
          I&apos;m a frontend developer and UI/UX designer who loves building digital experiences that feel as good as they look. I care about the little details and write clean, maintainable code, turning ideas into fast, friendly web apps. 
        </p>

        <p>
          Currently, I&apos;m working as a full-stack developer at{" "}
          <a href="https://oblinor.no" target="_blank" rel="noopener noreferrer" className="text-[#FFA324] hover:underline">
            Oblinor
          </a>
          , where I lead frontend development and contribute to building scalable web solutions using React, Next.js, and Vue.js.
        </p>

        <p>
          Good design isn&apos;t just appearance—it&apos;s how something works and feels. Every project is a chance to solve real problems and make someone&apos;s day a bit easier.
        </p>

        <p>
          When I&apos;m not coding, I&apos;m cycling, playing football, hanging out with my wife and two kids, or running the trails between Haraløkka and Østmarksetra.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold text-white mb-6">
          Technologies I work with:
        </h3>

        <ul className="grid grid-cols-2 gap-3 text-sm text-gray-400">
          <li className="flex items-center gap-2">
            <span className="text-[#FFA324]">▹</span>
            JavaScript (ES6+)
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#FFA324]">▹</span>
            TypeScript
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#FFA324]">▹</span>
            React & Next.js
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#FFA324]">▹</span>
            Vue.js & Vuetify
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#FFA324]">▹</span>
            Tailwind CSS
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#FFA324]">▹</span>
            Node.js & Express
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#FFA324]">▹</span>
            PostgreSQL & MySQL
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#FFA324]">▹</span>
            Git & GitHub
          </li>
        </ul>
      </div>
    </div>
  );
}
