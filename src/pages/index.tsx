import Head from "next/head";
import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProductionWorkShowcase from "@/components/production-work-showcase";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Nalam Nagendra | Full Stack Developer"
        description="Nalam Nagendra is a full stack developer building production web applications, backend systems, and AI-powered workflows."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Nalam Nagendra | Full Stack Developer",
          description:
            "Production experience across property technology, learning platforms, supply-chain systems, and AI-powered workflows.",
          images: [
            {
              url: `${siteMetadata.siteUrl}`,
              alt: "Nalam Nagendra portfolio",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Full Stack Developer, React, Next.js, Node.js, TypeScript, Python, PostgreSQL, Redis, RAG, LangChain",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <LandingHero />
      <ProductionWorkShowcase />
      <SkillsShowcase skills={SKILLS_DATA} />
    </>
  );
}
