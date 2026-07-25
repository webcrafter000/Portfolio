import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
    >
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                Nalam Nagendra
              </h1>

              <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                Full Stack Engineer • AI native Full Stack Developer
              </span>
            </FadeUp>

            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="mt-8 max-w-4xl text-base font-semibold leading-relaxed text-zinc-900 dark:text-zinc-200 sm:text-lg md:text-xl">
                Full Stack Engineer with{" "}
                <span className="font-semibold text-accent">
                  1.5+ years of experience
                </span>{" "}
                building scalable web applications, AI-powered platforms, and
                distributed backend systems. I specialize in architecting
                production-ready solutions using{" "}
                <span className="font-semibold text-accent">React</span>,{" "}
                <span className="font-semibold text-accent">Next.js</span>,{" "}
                <span className="font-semibold text-accent">Node.js</span>,{" "}
                <span className="font-semibold text-accent">TypeScript</span>,
                and <span className="font-semibold text-accent">Python</span>.
                <br />
                <br />
                Experienced in developing{" "}
                <span className="font-semibold text-accent">
                  AI/LLM applications
                </span>
                ,{" "}
                <span className="font-semibold text-accent">RAG pipelines</span>
                , workflow automations, and cloud-native architectures with{" "}
                <span className="font-semibold text-accent">
                  AWS, Docker, PostgreSQL, Redis,
                </span>{" "}
                and{" "}
                <span className="font-semibold text-accent">Cloudflare R2</span>
                . Passionate about building secure, high-performance products
                that solve real-world problems and scale from prototype to
                production.
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
