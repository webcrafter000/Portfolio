import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Nalam Nagendra | Full Stack Engineer"
        description="Learn more about Nalam Nagendra, a dedicated Full Stack Engineer specializing in scalable distributed systems and AI-native architectures. Discover the journey, skills, and passion that drive me to create innovative web solutions."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About Nalam Nagendra - Full Stack Engineer",
          description:
            "Dive into the story of Nalam Nagendra, a Full Stack Engineer. Uncover the experiences, skills, and passion that fuel a commitment to delivering exceptional web solutions.",
          images: [
            {
              url: `${siteMetadata.siteUrl}`,
              alt: "Nalam Nagendra - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        // twitter={{
        //   cardType: "summary_large_image",
        // }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Software Developer portfolio, Software Developer, React Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Professional Journey, Skills, Passion for Web Development",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
