import { profile, heroSkills } from "@/data/site";
import { CodeWindow } from "./CodeWindow";
import { ResumeMenu } from "./ResumeMenu";
import { ArrowIcon, GitHubIcon, LinkedInIcon } from "./icons";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-border">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-80 w-80 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--accent)" }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
        <div className="flex flex-col justify-center">
          <p className="text-lg text-muted">
            Hi, I&apos;m {profile.name} <span className="inline-block">👋</span>
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            {profile.role}
            <br />
            <span className="text-accent">{profile.roleAccent}</span>
          </h1>
          <p className="mt-5 max-w-md text-muted">{profile.tagline}</p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {heroSkills.map((s) => (
              <li
                key={s}
                className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
              >
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-fg transition hover:bg-accent-strong"
            >
              View Projects <ArrowIcon />
            </a>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium transition hover:border-accent"
            >
              <GitHubIcon /> GitHub
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium transition hover:border-accent"
            >
              <LinkedInIcon /> LinkedIn
            </a>
            <ResumeMenu />
          </div>
        </div>

        <div className="flex items-center">
          <CodeWindow />
        </div>
      </div>
    </section>
  );
}
