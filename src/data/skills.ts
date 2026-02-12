import {
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiNextdotjs,
  SiFlask,
  SiFastapi,
  SiMysql,
  SiCloudflare,
  SiAmazonaws,
  SiGooglecloud,
  SiVercel,
  SiGithubactions,
  SiLinux,
  SiRedis,
  SiSupabase,
  SiJest,
  SiVitest,
  SiPlaywright,
  SiChakraui,
  SiMui,
} from "react-icons/si";
import { Bot, Cpu, Database } from "lucide-react";
import { FramerMotionIcon } from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "MySQL",
        icon: SiMysql,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "FastAPI",
        icon: SiFastapi,
      },
      {
        name: "Flask",
        icon: SiFlask,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindcssSvg,
      },
      {
        name: "Material UI",
        icon: SiMui,
      },
      {
        name: "Chakra UI",
        icon: SiChakraui,
      },
      {
        name: "Framer motion",
        icon: FramerMotionIcon,
      },
      {
        name: "Redux",
        icon: ReduxSvg,
      },
    ],
  },
  {
    sectionName: "Backend & AI",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
      },
      {
        name: "LLM Integration",
        icon: Bot,
      },
      {
        name: "RAG Pipelines",
        icon: Cpu,
      },
    ],
  },
  {
    sectionName: "Databases & ORMs",
    skills: [
      {
        name: "PostgreSQL",
        icon: PostgressSvg,
      },
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "Redis",
        icon: SiRedis,
      },
      {
        name: "Prisma",
        icon: SiPrisma,
      },
      {
        name: "Drizzle ORM",
        icon: Database,
      },
      {
        name: "Supabase",
        icon: SiSupabase,
      },
    ],
  },
  {
    sectionName: "DevOps & Cloud",
    skills: [
      {
        name: "AWS",
        icon: SiAmazonaws,
      },
      {
        name: "GCP",
        icon: SiGooglecloud,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
      {
        name: "Cloudflare R2",
        icon: SiCloudflare,
      },
      {
        name: "GitHub Actions",
        icon: SiGithubactions,
      },
      {
        name: "Vercel",
        icon: SiVercel,
      },
      {
        name: "Linux",
        icon: SiLinux,
      },
    ],
  },
  {
    sectionName: "Tools & Testing",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
      {
        name: "Jest",
        icon: SiJest,
      },
      {
        name: "Vitest",
        icon: SiVitest,
      },
      {
        name: "Playwright",
        icon: SiPlaywright,
      },
    ],
  },
];
