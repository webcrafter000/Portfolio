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
      "• Architected a property insights platform using React and Node.js, automating data discovery across multiple APIs and reducing research time by 80%.\n" +
      "• Engineered an asynchronous WhatsApp ingestion pipeline with backend state machines to automate field asset categorization via Twilio.\n" +
      "• Developed high-performance Python data pipelines with custom caching to ensure 100% reliability for market yields and price trends.\n" +
      "• Optimized infrastructure using Cloudflare R2 and PostgreSQL indexing, reducing database load and operational storage costs by 45%.",
  },
  {
    title: "Full Stack Developer (Remote)",
    organisation: {
      name: "Vistras",
    },
    date: "Jan 2025 – Aug 2025",
    location: "Remote",
    description:
      "• Built a robust supply chain platform with QR-based tracking, cutting manual tracking efforts by 45%.\n" +
      "• Designed a real-time dashboard using Chart.js and WebSockets that improved operational visibility for over 50 users.\n" +
      "• Integrated the Gemini API for predictive analytics, increasing reporting accuracy from 75% to 92%.\n" +
      "• Optimized backend performance by 30% through strategic Redis caching implementation and a granular RBAC architecture.",
  },
];
