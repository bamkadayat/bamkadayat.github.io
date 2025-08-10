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
    title: "Vyver group",
    description:
      "It is the branding and marketing website for a company that sells products for the home and garden.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "Figma",
    ],
    imageUrl: "/images/vyver-group.gif",
  },
  {
    title: "Oblinor AS",
    description:
      "Crowdlending platform for real estate. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: [
      "Vue js",
      "TypeScript",
      "WordPress",
      "JavaScript",
      "PHP",
      "Vuetify",
      "MySQL",
      "Figma",
    ],
    imageUrl: "/images/oblinor.gif",
  },
  {
    title: "BB Utvikling",
    description:
      "It is property sale company.",
    tags: ["Vue js", "SCSS", "HTML", "Figma"],
    imageUrl: "/images/bbutvikling.gif",
  },
  {
    title: "Oblinor backoffice dashboard",
    description:
      "Oblinor backoffice dashboard for managing the platform. I was the front-end developer.",
    tags: ["Vue js", "TypeScript", "Vuetify", "SCSS", "Figma"],
    imageUrl: "/images/figma-sketch.gif",
  },
  {
    title: "Oblinor AS",
    description:
      "Oblinor customer dashboard for managing the platform. I was the front-end developer.",
    tags: [
      "Vue js",
      "TypeScript",
      "Vuetify",
      "Vuex",
      "PHP",
      "JavaScript",
      "MySQL",
      "Figma",
    ],
    imageUrl: "/images/oblinor-mypage.gif",
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
