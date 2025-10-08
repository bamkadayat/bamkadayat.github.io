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
