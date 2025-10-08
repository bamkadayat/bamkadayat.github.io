// Personal Info
export const personalInfo = {
  name: "Bam Kadayat",
  title: "Frontend Developer & UI/UX Designer",
  tagline: "I build clean, accessible, modern websites people love to use.",
  currentCompany: {
    name: "Oblinor",
    url: "https://oblinor.no",
  },
} as const;

// Social Links
export const socialLinks = {
  github: "https://github.com/bamkadayat",
  linkedin: "https://www.linkedin.com/in/bam-kadayat",
} as const;

// Navigation
export const NavList = [
  {
    name: "About",
    link: "#about",
    id: "about",
  },
  {
    name: "Experience",
    link: "#experience",
    id: "experience",
  },
  {
    name: "Work",
    link: "#work",
    id: "work",
  },
] as const;

// About Section
export const aboutData = {
  paragraphs: [
    "I'm a frontend developer and UI/UX designer who loves building digital experiences that feel as good as they look. I care about the little details and write clean, maintainable code, turning ideas into fast, friendly web apps.",
    "Good design isn't just appearance—it's how something works and feels. Every project is a chance to solve real problems and make someone's day a bit easier.",
    "When I'm not coding, I'm cycling, playing football, hanging out with my wife and two kids, or running the trails between Haraløkka and Østmarksetra.",
  ],
  technologies: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React & Next.js",
    "Vue.js & Vuetify",
    "Tailwind CSS",
    "Node.js & Express",
    "PostgreSQL & MySQL",
    "Git & GitHub",
  ],
} as const;

export const experiencesData = [
  {
    title: "Frontend Developer",
    location: "Oblinor AS, Oslo, Norway",
    description:
      "Developing and maintaining web and mobile applications using React (Next.js) and Vue.js. Focused on building responsive user interfaces, integrating REST APIs, optimizing performance, and collaborating with backend teams to deliver user-friendly solutions.",
    date: "August 2020 - Present",
  },
  {
    title: "Web Developer",
    location: "Responsive Pixel Pvt. Ltd., Kathmandu, Nepal",
    description:
      "Designed, coded, and maintained websites with strong functionality and appealing design. Ensured cross-device compatibility and accessibility for all users.",
    date: "July 2014 - July 2016",
  },
] as const;

export const worksData = [
  {
    title: "Vyver Group",
    description:
      "Marketing website for a home & garden company.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "Figma",
    ],
    imageUrl: "/images/vyver-group.gif",
    liveUrl: "https://vdv-retail.vercel.app",
    githubUrl: undefined,
  },
  {
    title: "Oblinor Platform",
    description:
      "Crowdlending platform for real estate investments.",
    tags: [
      "Vue.js",
      "TypeScript",
      "WordPress",
      "JavaScript",
      "PHP",
      "Vuetify",
      "MySQL",
      "Figma",
    ],
    imageUrl: "/images/oblinor.gif",
    liveUrl: "https://oblinor.no",
    githubUrl: undefined,
  },
  {
    title: "BB Utvikling",
    description:
      "Property development company website.",
    tags: ["Vue.js", "SCSS", "HTML", "Figma"],
    imageUrl: "/images/bbutvikling.gif",
    liveUrl: "https://bbutvikling.no",
    githubUrl: undefined,
  },
  {
    title: "Admin Dashboard",
    description:
      "Dashboard for platform management and analytics.",
    tags: ["Vue.js", "TypeScript", "Vuetify", "SCSS", "Figma"],
    imageUrl: "/images/figma-sketch.gif",
    liveUrl: undefined,
    githubUrl: undefined,
  },
  {
    title: "Customer Portal",
    description:
      "Investment tracking and document management portal.",
    tags: [
      "Vue.js",
      "TypeScript",
      "Vuetify",
      "Vuex",
      "PHP",
      "JavaScript",
      "MySQL",
      "Figma",
    ],
    imageUrl: "/images/oblinor-mypage.gif",
    liveUrl: undefined,
    githubUrl: undefined,
  },
] as const;
