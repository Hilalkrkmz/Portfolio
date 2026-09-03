import { profile } from "@/data/site";
import { Section } from "./Section";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export function Contact() {
  return (
    <Section id="contact" title="Let's Connect" className="border-b-0">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <p className="max-w-md text-muted">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-fg transition hover:bg-accent-strong"
          >
            <MailIcon /> Contact Me
          </a>
        </div>

        <ul className="space-y-3">
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 text-sm transition hover:border-accent"
            >
              <MailIcon className="text-accent" />
              <span>
                <span className="block font-medium">Email</span>
                <span className="text-muted">{profile.email}</span>
              </span>
            </a>
          </li>
          <li>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 text-sm transition hover:border-accent"
            >
              <GitHubIcon className="text-accent" />
              <span>
                <span className="block font-medium">GitHub</span>
                <span className="text-muted">
                  {profile.social.github.replace("https://", "")}
                </span>
              </span>
            </a>
          </li>
          <li>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 text-sm transition hover:border-accent"
            >
              <LinkedInIcon className="text-accent" />
              <span>
                <span className="block font-medium">LinkedIn</span>
                <span className="text-muted">
                  {profile.social.linkedin.replace("https://", "")}
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </Section>
  );
}
