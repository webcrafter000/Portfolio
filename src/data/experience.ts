import { type ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";

export const EXPERIENCE: ExperienceShowcaseListItemProps[] = [
  {
    title: "Full Stack Developer (Remote)",
    organisation: {
      name: "Premier Property",
    },
    date: "Sep 2025 – Present",
    location: "Remote",
    description:
      "• Built property search, deal calculators, and comparable-property workflows across 25+ property data APIs.\n" +
      "• Integrated Gemini-powered property photo assessment, reducing manual assessment time by 60%.\n" +
      "• Connected Google Maps and geocoding workflows across 90,000+ property records.\n" +
      "• Developed an LMS with video streaming, gamification, and Stripe subscription management, and automated Vimeo video workflows to remove manual uploads.\n" +
      "• Built a production RAG chatbot with hybrid retrieval and streaming responses, keeping response latency under 2 seconds.\n" +
      "• Optimized media storage and data access with Cloudflare R2, PostgreSQL indexing, and Redis, reducing storage costs by 45%.\n" +
      "• Automated email workflows with Brevo, reducing manual operational effort by 90%, and added GitHub Actions and Playwright to the delivery workflow.",
  },
  {
    title: "Full Stack Developer (Remote)",
    organisation: {
      name: "Vistras",
    },
    date: "Jan 2025 – Aug 2025",
    location: "Remote",
    description:
      "• Built a QR-based supply-chain platform with real-time WebSocket dashboards and Chart.js, reducing manual tracking effort by 45%.\n" +
      "• Developed a multi-tenant MongoDB backend with JWT-based access, handling 2,000+ API requests per day.\n" +
      "• Integrated Gemini-powered analytics, improving reporting accuracy from 75% to 92%.\n" +
      "• Built a Telegram alert engine for sensor notifications, improving incident response time by 60%.\n" +
      "• Improved backend performance by 30% with Redis caching and role-based access control (RBAC).\n" +
      "• Developed a local retrieval-augmented generation pipeline using LangChain and FAISS for document querying.",
  },
];
