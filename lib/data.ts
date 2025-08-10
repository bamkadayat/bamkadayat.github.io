export const NavList = [
  {
    name: "Home",
    link: "/",
    id: "home",
  },
  {
    name: "Work",
    link: "/work",
    id: "",
  },
  {
    name: "About",
    link: "/about",
    id: "",
  },
  {
    name: "Contact",
    link: "/contact",
    id: "",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",

    date: "2019",
  },
  {
    title: "Front-End",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",

    date: "2019 - 2021",
  },
  {
    title: "UI/UX",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",

    date: "2021 - present",
  },
] as const;

export const worksData = [
  {
    title: "Vyver Group",
    description:
      "Modern branding and marketing website for a home & garden company. Built with performance and SEO optimization in mind, featuring smooth animations and responsive design.",
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
      "Comprehensive crowdlending platform for real estate investments. Features advanced filtering, real-time data updates, secure payment processing, and intuitive dashboard for investors.",
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
      "Elegant property development company website showcasing real estate projects. Features interactive property galleries, location maps, and inquiry forms.",
    tags: ["Vue.js", "SCSS", "HTML", "Figma"],
    imageUrl: "/images/bbutvikling.gif",
    liveUrl: "https://bbutvikling.no",
    githubUrl: undefined,
  },
  {
    title: "Admin Dashboard",
    description:
      "Sophisticated backoffice dashboard for platform management. Includes real-time analytics, user management, transaction monitoring, and comprehensive reporting tools.",
    tags: ["Vue.js", "TypeScript", "Vuetify", "SCSS", "Figma"],
    imageUrl: "/images/figma-sketch.gif",
    liveUrl: undefined,
    githubUrl: undefined,
  },
  {
    title: "Customer Portal",
    description:
      "User-friendly customer dashboard with investment tracking, document management, transaction history, and personalized analytics. Built with security and UX as top priorities.",
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

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Vuejs",
  "Vuetify",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "wordPress",
] as const;
