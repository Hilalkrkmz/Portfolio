import { experience } from "@/data/site";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-6">
        {experience.map((job) => (
          <article
            key={`${job.role}-${job.company}`}
            className="rounded-xl border border-border bg-surface p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">{job.role}</h3>
              <span className="text-sm text-muted">
                {job.period}
                {job.note ? ` · ${job.note}` : ""}
              </span>
            </div>
            <p className="mt-1 text-sm text-accent">{job.company}</p>
            <ul className="mt-4 space-y-1.5">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
