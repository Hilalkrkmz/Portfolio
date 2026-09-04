import { profile } from "@/data/site";
import { DownloadIcon } from "./icons";

// 0 CV → hiç gösterme. 1 CV → düz link. 2+ CV → açılır menü (dil seçimi).
export function ResumeMenu() {
  const resumes = profile.resumes;
  if (resumes.length === 0) return null;

  const base =
    "inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium transition hover:border-accent";

  if (resumes.length === 1) {
    return (
      <a href={resumes[0].href} target="_blank" rel="noreferrer" className={base}>
        <DownloadIcon /> {resumes[0].label}
      </a>
    );
  }

  return (
    <details className="group relative">
      <summary className={`${base} cursor-pointer list-none [&::-webkit-details-marker]:hidden`}>
        <DownloadIcon /> Résumé
        <svg
          className="transition group-open:rotate-180"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>
      <div className="absolute left-0 z-20 mt-2 w-40 overflow-hidden rounded-lg border border-border bg-surface shadow-lg">
        {resumes.map((r) => (
          <a
            key={r.href}
            href={r.href}
            target="_blank"
            rel="noreferrer"
            className="block px-4 py-2.5 text-sm transition hover:bg-surface-2"
          >
            {r.label}
          </a>
        ))}
      </div>
    </details>
  );
}
