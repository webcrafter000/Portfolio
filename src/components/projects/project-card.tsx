import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

import { GithubIcon } from "@/components/icons";

export interface ProjectCardProps {
  name: string;
  description: string;
  sourceCodeHref: string;
  liveWebsiteHref?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <motion.article
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ type: "spring", duration: 0.4 }}
      className="flex h-full w-full flex-col rounded-lg border border-accent/20 bg-background p-5 shadow-sm transition-shadow duration-150 hover:shadow-md hover:shadow-accent/20 dark:bg-zinc-800 sm:p-6"
    >
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-accent">PROJECT</span>
        <span className="h-px flex-1 bg-accent/20" />
      </div>
      <h2 className="mt-4 text-lg font-bold text-foreground">{props.name}</h2>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/85 md:text-base">
        {props.description}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
        <a
          href={props.sourceCodeHref}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-xs underline underline-offset-4 md:text-sm"
        >
          <GithubIcon className="h-5 w-5" /> Source code
        </a>
        {props.liveWebsiteHref && (
          <a
            href={props.liveWebsiteHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs underline underline-offset-4 md:text-sm"
          >
            <FiExternalLink className="h-4 w-4" /> Live demo
          </a>
        )}
      </div>
    </motion.article>
  );
}
