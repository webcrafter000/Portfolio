import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";
export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "CourseCrafter",
    href: "/projects",
    tags: ["Next.js", "React", "Tailwind CSS", "Gemini API", "Clerk"],
    image: {
      LIGHT: "/images/projects/cclm.webp",
      DARK: "/images/projects/ccdm.webp",
    },
  },
  {
    index: 1,
    title: "Interviewify",
    href: "/projects",
    tags: ["React", "Next.js", "Tailwind CSS", "Gemini API", "Drizzle ORM"],
    image: {
      LIGHT: "/images/projects/ivlm.webp",
      DARK: "/images/projects/ivdm.webp",
    },
  },
  {
    index: 2,
    title: "Circlify",
    href: "/projects",
    tags: ["Next.js", "React", "Firebase", "Gemini API"],
    image: {
      LIGHT: "/images/projects/cllm.webp",
      DARK: "/images/projects/cldm.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "CourseCrafter",
    favicon: "/images/projects/logos/cclogo.ico",
    imageUrl: ["/images/projects/cclm.webp", "/images/projects/ccdm.webp"],
    description:
      " Developed an website to generate course layouts and detailed content in domains like programming, health, and creative fields using Gemini API",
    sourceCodeHref: "https://github.com/webcrafter000/CourseCrafter",
    liveWebsiteHref: "https://course-crafter-lac.vercel.app/",
  },
  {
    name: "Interviewify",
    favicon: "/images/projects/logos/ivlogo.ico",
    imageUrl: ["/images/projects/ivlm.webp", "/images/projects/ivdm.webp"],
    description:
      "Implemented user-friendly AI-Powered website dashboards to record job answers and provide real-time AI feedback for virtual interviews",
    sourceCodeHref: "https://github.com/webcrafter000/Interviewify",
    liveWebsiteHref: "https://interviewify.vercel.app/",
  },
  {
    name: "Circlify",
    favicon: "/images/projects/logos/cllogo.ico",
    imageUrl: ["/images/projects/cllm.webp", "/images/projects/cldm.webp"],
    description:
      "Engineered a collaborative workspace application for team organization and communication where template content can be generated and customized with just a click!",
    sourceCodeHref: "https://github.com/webcrafter000/Circlify",
    liveWebsiteHref: "https://circlify-khaki.vercel.app/",
  },
  {
    name: "Personal Portfolio",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/home.webp", "/images/projects/about.webp"],
    description:
      "My personal portfolio website made using Nextjs, Tailwind CSS, Nodemailer and Framer motion.",
    sourceCodeHref: "https://github.com/webcrafter000",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
];
