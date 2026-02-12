import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";
export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "CourseCrafter",
    href: "/projects",
    tags: ["Next.js", "Gemini API", "Drizzle ORM", "Redis", "SEO"],
    image: {
      LIGHT: "/images/projects/cclm.webp",
      DARK: "/images/projects/ccdm.webp",
    },
  },
  {
    index: 1,
    title: "Interviewify",
    href: "/projects",
    tags: ["Next.js", "RAG", "Gemini API", "Clerk Auth", "Tailwind CSS"],
    image: {
      LIGHT: "/images/projects/ivlm.webp",
      DARK: "/images/projects/ivdm.webp",
    },
  },
  {
    index: 2,
    title: "Circlify",
    href: "/projects",
    tags: ["Next.js", "Firebase", "WebSockets", "RBAC", "AI Templates"],
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
      "Developed an AI course generator reducing content creation time by 60% for 200+ educators. Built a multi-stage background worker system using Redis queues to process YouTube metadata and achieved 40% organic growth via SEO optimization.",
    sourceCodeHref: "https://github.com/webcrafter000/CourseCrafter",
    liveWebsiteHref: "https://course-crafter-lac.vercel.app/",
  },
  {
    name: "Interviewify",
    favicon: "/images/projects/logos/ivlogo.ico",
    imageUrl: ["/images/projects/ivlm.webp", "/images/projects/ivdm.webp"],
    description:
      "Built an AI interview platform for 500+ users, implementing RAG to provide context-aware feedback and reducing LLM hallucinations by 40%. Integrated Gemini API for real-time scoring with 92% accuracy.",
    sourceCodeHref: "https://github.com/webcrafter000/Interviewify",
    liveWebsiteHref: "https://interviewify.vercel.app/",
  },
  {
    name: "Circlify",
    favicon: "/images/projects/logos/cllogo.ico",
    imageUrl: ["/images/projects/cllm.webp", "/images/projects/cldm.webp"],
    description:
      "Engineered real-time state synchronization using Firebase and WebSockets, maintaining sub-100ms latency. Implemented granular RBAC for secure multi-tenant isolation and an AI-powered template system that reduced onboarding time by 35%.",
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
