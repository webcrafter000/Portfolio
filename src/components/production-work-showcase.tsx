import { EXPERIENCE } from "@/data/experience";

export default function ProductionWorkShowcase() {
  return (
    <section id="experience" className="px-6 py-16 sm:px-14 md:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Professional experience
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Engineering scalable web experiences with AI
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Selected production work across property technology, learning
            platforms, supply-chain monitoring, and AI-powered workflows.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {EXPERIENCE.map((experience) => (
            <article
              key={experience.organisation.name}
              className="rounded-xl border border-accent/20 bg-background p-6 shadow-sm sm:p-8"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {experience.organisation.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {experience.title}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {experience.date}
                </p>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {experience.location}
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-foreground/90 sm:text-base">
                {experience.description.split("\n").map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item.replace(/^•\s*/, "")}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
