import { about, skills } from "@/data/site";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="mb-4 text-muted">
              {p}
            </p>
          ))}
          <ul className="mt-6 flex flex-wrap gap-2">
            {about.badges.map((b) => (
              <li
                key={b}
                className="rounded-lg border border-border bg-surface px-3 py-2 text-sm"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-semibold">Skills</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-border bg-surface p-4"
              >
                <p className="text-sm font-medium">{group.title}</p>
                <p className="mt-1 text-sm text-muted">
                  {group.items.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
