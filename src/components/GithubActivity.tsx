import { profile } from "@/data/site";
import { Section } from "./Section";
import { GitHubIcon } from "./icons";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

type GitHubData = {
  days: Day[];
  totalLastYear: number;
  publicRepos: number | null;
  followers: number | null;
};

const username = profile.social.github.split("/").filter(Boolean).pop() ?? "";

const levelClass = [
  "bg-surface-2",
  "bg-emerald-900",
  "bg-emerald-700",
  "bg-emerald-500",
  "bg-emerald-400",
];

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

// Gerçek katkı verisi — token gerektirmeyen ücretsiz API'den, günde bir yenilenir.
async function getGitHubData(): Promise<GitHubData | null> {
  if (!username) return null;
  try {
    const [contribRes, userRes] = await Promise.all([
      fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`, {
        next: { revalidate: 86400 },
      }),
      fetch(`https://api.github.com/users/${username}`, {
        next: { revalidate: 86400 },
        headers: { "User-Agent": "portfolio" },
      }),
    ]);

    if (!contribRes.ok) return null;
    const contrib = (await contribRes.json()) as {
      total?: Record<string, number>;
      contributions: Day[];
    };
    const user = userRes.ok
      ? ((await userRes.json()) as { public_repos?: number; followers?: number })
      : null;

    return {
      days: contrib.contributions ?? [],
      totalLastYear:
        contrib.total?.lastYear ??
        (contrib.contributions ?? []).reduce((s, d) => s + d.count, 0),
      publicRepos: user?.public_repos ?? null,
      followers: user?.followers ?? null,
    };
  } catch {
    return null;
  }
}

function toWeeks(days: Day[]): (Day | null)[][] {
  if (days.length === 0) return [];
  const firstWeekday = new Date(`${days[0].date}T00:00:00Z`).getUTCDay();
  const cells: (Day | null)[] = [
    ...Array<null>(firstWeekday).fill(null),
    ...days,
  ];
  const weeks: (Day | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) {
    const week = cells.slice(i, i + 7);
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }
  return weeks;
}

function monthFor(week: (Day | null)[]): number {
  const firstDay = week.find(Boolean) as Day | undefined;
  return firstDay ? new Date(`${firstDay.date}T00:00:00Z`).getUTCMonth() : -1;
}

export async function GithubActivity() {
  const data = await getGitHubData();
  const weeks = data ? toWeeks(data.days) : [];

  const stats: { value: string; label: string }[] = [];
  if (data) {
    if (data.publicRepos != null) {
      stats.push({ value: String(data.publicRepos), label: "Public repositories" });
    }
    stats.push({
      value: String(data.totalLastYear),
      label: "Contributions (last year)",
    });
    if (data.followers != null) {
      stats.push({ value: String(data.followers), label: "Followers" });
    }
  }

  return (
    <Section id="github" title="GitHub Activity">
      <div className="rounded-xl border border-border bg-surface p-6">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-2 text-sm text-muted">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition hover:text-foreground"
          >
            <GitHubIcon /> {profile.social.github.replace("https://", "")}
          </a>
          {data && (
            <span>{data.totalLastYear} contributions in the last year</span>
          )}
        </div>

        {weeks.length > 0 ? (
          <div className="-mx-1 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="w-max">
              <div className="mb-1 flex gap-[3px] text-[10px] text-muted">
                {weeks.map((week, wi) => {
                  const m = monthFor(week);
                  const prevM = wi > 0 ? monthFor(weeks[wi - 1]) : -1;
                  return (
                    <div key={wi} className="relative h-3 w-2.5">
                      {m !== prevM && m !== -1 && (
                        <span className="absolute left-0 top-0">{MONTHS[m]}</span>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-[3px]">
                {weeks.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-[3px]">
                    {week.map((day, di) => (
                      <span
                        key={di}
                        title={
                          day ? `${day.count} contributions on ${day.date}` : undefined
                        }
                        className={`h-2.5 w-2.5 rounded-[2px] ${
                          day ? levelClass[day.level] : "bg-transparent"
                        }`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-sm text-muted">
            Live activity graph loads on the deployed site.{" "}
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:opacity-80"
            >
              View on GitHub →
            </a>
          </p>
        )}

        {stats.length > 0 && (
          <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-6 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-xl font-bold text-accent">{s.value}</p>
                <p className="text-xs text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
