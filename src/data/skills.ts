import {
  SiJest,
  SiVitest,
  SiChakraui,
  SiMui,
  SiGithub,
  SiCypress,
  SiExpress,
  SiNextdotjs,
  SiFlask,
  SiFastapi,
  SiMysql,
  SiCloudflare,
  SiVercel,
  SiGithubactions,
  SiLinux,
  SiRedis,
  SiSupabase,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";
import {
  Bot,
  Cpu,
  Database,
  Workflow,
  ShieldCheck,
  Network,
  Pencil,
  Play,
} from "lucide-react";

import { FramerMotionIcon } from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";

// Frameworks
import ReactjsSvg from "@/public/icons/reactjs.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import NodejsSvg from "@/public/icons/nodejs.svg";

// Databases
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";

// Tools
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "JavaScript",
        icon: JavascriptSvg,
      },
      {
        name: "TypeScript",
        icon: TypescriptSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "SQL",
        icon: SiMysql,
      },
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
    ],
  },
  {
    sectionName: "Frameworks",
    skills: [
      {
        name: "React",
        icon: ReactjsSvg,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "Node.js",
        icon: NodejsSvg,
      },
      {
        name: "Express.js",
        icon: SiExpress,
      },
      {
        name: "FastAPI",
        icon: SiFastapi,
      },
      {
        name: "Flask",
        icon: SiFlask,
      },
    ],
  },
  {
    sectionName: "UI",
    skills: [
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
        name: "Framer Motion",
        icon: FramerMotionIcon,
      },
    ],
  },
  {
    sectionName: "AI / LLM",
    skills: [
      {
        name: "RAG Pipelines",
        icon: Cpu,
      },
      {
        name: "LangChain",
        icon: Bot,
      },
      {
        name: "n8n",
        icon: Workflow,
      },
      {
        name: "Prompt Engineering",
        icon: Pencil,
      },
      {
        name: "LLM Integration",
        icon: Bot,
      },
      {
        name: "Automations",
        icon: Workflow,
      },
    ],
  },
  {
    sectionName: "Databases",
    skills: [
      {
        name: "PostgreSQL",
        icon: PostgressSvg,
      },
      {
        name: "MySQL",
        icon: SiMysql,
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
    sectionName: "Cloud / DevOps",
    skills: [
      {
        name: "AWS",
        icon: FaAws,
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
    sectionName: "Architecture",
    skills: [
      {
        name: "REST APIs",
        icon: Network,
      },
      {
        name: "Microservices",
        icon: Workflow,
      },
      {
        name: "State Machines",
        icon: Workflow,
      },
      {
        name: "RBAC",
        icon: ShieldCheck,
      },
      {
        name: "System Design",
        icon: Database,
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
        name: "GitHub",
        icon: SiGithub,
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
        icon: Play,
      },
      {
        name: "Cypress",
        icon: SiCypress,
      },
    ],
  },
];
