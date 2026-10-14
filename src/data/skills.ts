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
  Code,
} from "lucide-react";

import { FramerMotionIcon } from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";
import ReactjsSvg from "@/public/icons/reactjs.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import NodejsSvg from "@/public/icons/nodejs.svg";
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      { name: "JavaScript", icon: JavascriptSvg },
      { name: "TypeScript", icon: TypescriptSvg },
      { name: "Python", icon: PythonSvg },
      { name: "SQL", icon: SiMysql },
      { name: "HTML", icon: Code },
      { name: "CSS", icon: Code },
    ],
  },
  {
    sectionName: "Frameworks",
    skills: [
      { name: "React", icon: ReactjsSvg },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: NodejsSvg },
      { name: "Express.js", icon: SiExpress },
      { name: "Django", icon: Database },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Flask", icon: SiFlask },
    ],
  },
  {
    sectionName: "UI & Design",
    skills: [
      { name: "Tailwind CSS", icon: TailwindcssSvg },
      { name: "Material UI", icon: SiMui },
      { name: "Chakra UI", icon: SiChakraui },
      { name: "Framer Motion", icon: FramerMotionIcon },
      { name: "Figma", icon: Pencil },
    ],
  },
  {
    sectionName: "AI / LLM",
    skills: [
      { name: "RAG Pipelines", icon: Cpu },
      { name: "LangChain", icon: Bot },
      { name: "LangGraph", icon: Workflow },
      { name: "Vector Databases", icon: Database },
      { name: "MCP", icon: Workflow },
      { name: "LLM Integration", icon: Bot },
    ],
  },
  {
    sectionName: "Databases",
    skills: [
      { name: "PostgreSQL", icon: PostgressSvg },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: MongoDBSvg },
      { name: "Redis", icon: SiRedis },
      { name: "Drizzle ORM", icon: Database },
      { name: "Supabase", icon: SiSupabase },
    ],
  },
  {
    sectionName: "Cloud / DevOps",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: DockerSvg },
      { name: "Cloudflare R2", icon: SiCloudflare },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Vercel", icon: SiVercel },
      { name: "Linux", icon: SiLinux },
    ],
  },
  {
    sectionName: "APIs & Architecture",
    skills: [
      { name: "REST APIs", icon: Network },
      { name: "Microservices", icon: Workflow },
      { name: "System Design", icon: Network },
      { name: "WebSockets", icon: Network },
      { name: "JWT", icon: ShieldCheck },
      { name: "OAuth 2.0", icon: ShieldCheck },
      { name: "RBAC", icon: ShieldCheck },
    ],
  },
  {
    sectionName: "Tools & Testing",
    skills: [
      { name: "Git", icon: GitSvg },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: PostmanSvg },
      { name: "Jest", icon: SiJest },
      { name: "Vitest", icon: SiVitest },
      { name: "Playwright", icon: Network },
      { name: "Cypress", icon: SiCypress },
      { name: "k6", icon: Cpu },
      { name: "Sentry", icon: ShieldCheck },
      { name: "PostHog", icon: Bot },
      { name: "n8n", icon: Workflow },
      { name: "Zapier", icon: Workflow },
    ],
  },
];
