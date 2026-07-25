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
      "• Built a property insights and LMS platform with multi-source search across 25+ property data APIs, WhatsApp ingestion via state machines, and Stripe subscription management.\n" +
      "• Designed a production-ready RAG chatbot with hybrid retrieval, tier-based access, real-time streaming, and automated quality testing, achieving sub-2s response latency.\n" +
      "• Developed a full-featured LMS with video streaming, gamification (badges and leaderboards), and tiered course access, increasing student retention and monthly active users by 35%.\n" +
      "• Optimized infrastructure using Cloudflare R2, PostgreSQL indexing, and Redis caching, reducing storage costs by 45% while maintaining 100% data accuracy.\n" +
      "• Implemented CI/CD pipelines with GitHub Actions and end-to-end testing using Playwright, ensuring zero regressions across 50+ production deployments.",
  },
  {
    title: "Full Stack Developer (Remote)",
    organisation: {
      name: "Vistras",
    },
    date: "Jan 2025 – Aug 2025",
    location: "Remote",
    description:
      "• Built a QR-based supply chain platform that reduced manual tracking efforts by 45%, featuring real-time dashboards powered by WebSockets and Chart.js for operational monitoring.\n" +
      "• Engineered a multi-tenant MongoDB architecture with JWT-based tenant routing, handling over 2,000 daily API requests across multiple tenants.\n" +
      "• Integrated the Gemini API for predictive analytics, improving reporting accuracy from 75% to 92%, and developed a Telegram alert engine for real-time sensor notifications.\n" +
      "• Optimized backend performance by 30% using Redis caching and RBAC while designing a local RAG pipeline with LangChain and FAISS for intelligent document querying.",
  },
];
