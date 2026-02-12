import Image from "next/image";
import Link from "next/link";

import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";
import heroProfileImg from "@/public/images/heroProfile.png";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
      <div className="w-full sm:w-1/2 md:w-2/3 lg:inline-block lg:h-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="hero-image" duration={0.6}>
            <Image
              src={heroProfileImg}
              width={100}
              height={100}
              className="h-auto w-full px-0 xl:px-16"
              alt="hero image"
              unoptimized
            />
          </FadeUp>
        </AnimatePresence>
      </div>
      <div className="sm:1/2 mt-10 w-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="text-6xl font-bold text-accent sm:text-7xl md:text-6xl lg:text-5xl xl:text-7xl">
              Hi, I&apos;m Nalam Nagendra
            </h1>
          </FadeUp>
          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              I transform ideas into functional and impactful digital solutions,
              leveraging cutting-edge AI technologies to deliver innovative,
              design-precise, and user-centric web applications.
            </p>
          </FadeUp>
          <FadeUp key="description-2" duration={0.6} delay={0.4}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              Explore my latest{" "}
              <Link href="/projects" className="underline underline-offset-4">
                <span className="text-accent">projects</span>
              </Link>{" "}
              highlighting my skills in React.js, Next.js, TypeScript, AI
              Integration and web development.
            </p>
          </FadeUp>
          <FadeUp key="achievements" duration={0.6} delay={0.6}>
            <div className="mt-8 text-left">
              <h2 className="text-xl font-bold text-accent">Key Achievements</h2>
              <ul className="mt-4 list-disc pl-5 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg">
                <li>Built and pitched MVPs in 24–48 hours during hackathons, rapidly validating user flows.</li>
                <li>Solved 150+ LeetCode problems (85% medium/hard) with focus on algorithm efficiency.</li>
                <li>Published 5+ technical articles on GeeksforGeeks reaching 2,000+ developers.</li>
                <li>Ranked in top 0.1% in Andhra Pradesh Higher Secondary Board examination.</li>
              </ul>
            </div>
          </FadeUp>
          <FadeRight
            key="hero-location"
            duration={0.6}
            delay={0.8}
            className="mr-0 mt-8 flex items-center justify-center gap-4 lg:mr-8 lg:justify-end"
          >
            <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
              <Image
                className="-z-10 h-full w-full bg-cover bg-no-repeat"
                alt="Indian flag"
                src="https://flagcdn.com/in.svg"
                width={15}
                height={15}
              />
            </div>
            <span className="text-lg font-medium text-foreground">
              Andhra Pradesh, India
            </span>
          </FadeRight>
        </AnimatePresence>
      </div>
    </div>
  );
}
