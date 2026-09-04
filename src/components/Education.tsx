import { education } from "@/data/site";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-6">
        {education.map((ed) => (
          <article
            key={`${ed.school}-${ed.program}`}
            className="rounded-xl border border-border bg-surface p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">{ed.school}</h3>
              <span className="text-sm text-muted">
                {ed.period}
                {ed.note ? ` · ${ed.note}` : ""}
              </span>
            </div>
            <p className="mt-1 text-sm text-accent">
              {ed.degree} — {ed.program}
            </p>
            {ed.courses && ed.courses.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {ed.courses.map((c) => (
                  <li
                    key={c}
                    className="rounded border border-border px-1.5 py-0.5 text-[11px] text-muted"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
