import { githubStats, profile } from "@/data/site";
import { Section } from "./Section";
import { GitHubIcon } from "./icons";

const WEEKS = 52;
const DAYS = 7;

// Deterministik desen — sunucu ve istemci aynı sonucu üretir (hydration güvenli).
// Gerçek veriyi istersen GitHub GraphQL API'sinden çekip buraya besleyebilirsin.
function level(week: number, day: number) {
  const n = Math.sin(week * 12.9898 + day * 78.233) * 43758.5453;
  const frac = n - Math.floor(n);
  if (frac < 0.5) return 0;
  if (frac < 0.72) return 1;
  if (frac < 0.87) return 2;
  if (frac < 0.96) return 3;
  return 4;
}

const levelClass = [
  "bg-surface-2",
  "bg-emerald-900",
  "bg-emerald-700",
  "bg-emerald-500",
  "bg-emerald-400",
];

export function GithubActivity() {
  return (
    <Section id="github" title="GitHub Activity">
      <div className="rounded-xl border border-border bg-surface p-6">
        <div className="mb-5 flex items-center gap-2 text-sm text-muted">
          <GitHubIcon />
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-foreground"
          >
            {profile.social.github.replace("https://", "")}
          </a>
        </div>

        <div className="-mx-1 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max gap-[3px]">
            {Array.from({ length: WEEKS }).map((_, week) => (
              <div key={week} className="flex flex-col gap-[3px]">
                {Array.from({ length: DAYS }).map((_, day) => (
                  <span
                    key={day}
                    className={`h-2.5 w-2.5 rounded-[2px] ${levelClass[level(week, day)]}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-6 sm:grid-cols-4">
          {githubStats.map((s) => (
            <div key={s.label}>
              <p className="text-xl font-bold text-accent">{s.value}</p>
              <p className="text-xs text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
