import dynamic from "next/dynamic";

// Lazy load components for better performance
const About = dynamic(() => import("@/components/about"), {
  loading: () => <div className="animate-pulse h-96 bg-gray-800/50 rounded-lg mb-8" />,
});

const Skills = dynamic(() => import("@/components/skills"), {
  loading: () => <div className="animate-pulse h-64 bg-gray-800/50 rounded-lg" />,
});

export default function AboutPage() {
  return (
    <div className="container">
      <About />
      <Skills />
    </div>
  );
}