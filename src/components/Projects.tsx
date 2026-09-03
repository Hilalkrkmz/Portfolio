import { projects } from "@/data/site";
import { Section } from "./Section";
import { ExternalIcon, GitHubIcon } from "./icons";

export function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Some of the projects I've worked on."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((p) => (
          <article
            key={p.title}
            className="flex flex-col rounded-xl border border-border bg-surface p-5 transition hover:border-accent"
          >
            <span className="w-fit rounded-md bg-surface-2 px-2 py-1 text-xs text-muted">
              {p.category}
            </span>
            <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 flex-1 text-sm text-muted">{p.description}</p>

            <ul className="mt-4 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <li
                  key={t}
                  className="rounded border border-border px-1.5 py-0.5 text-[11px] text-muted"
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-center gap-4 border-t border-border pt-4 text-sm">
              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-accent transition hover:opacity-80"
                >
                  Live Demo <ExternalIcon />
                </a>
              )}
              {p.githubUrl && (
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-muted transition hover:text-foreground"
                >
                  <GitHubIcon /> Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
