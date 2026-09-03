import { heroCode } from "@/data/site";

// Basit Java sözdizimi vurgulama — düzenli ifadelerle, bağımlılık yok.
const KEYWORDS =
  /\b(public|private|final|class|return|void|new|import|package|extends|implements|static|this)\b/g;

function highlight(line: string, key: number) {
  const parts: React.ReactNode[] = [];
  let rest = line;

  // Anotasyonlar
  const annMatch = rest.match(/^(\s*)(@\w+)/);
  if (annMatch) {
    parts.push(annMatch[1]);
    parts.push(
      <span key={`a-${key}`} className="text-accent">
        {annMatch[2]}
      </span>,
    );
    rest = rest.slice(annMatch[0].length);
  }

  const chunks = rest.split(/("[^"]*")/g).map((chunk, i) => {
    if (chunk.startsWith('"')) {
      return (
        <span key={`s-${key}-${i}`} className="text-emerald-400">
          {chunk}
        </span>
      );
    }
    const withKeywords: React.ReactNode[] = [];
    let last = 0;
    let m: RegExpExecArray | null;
    KEYWORDS.lastIndex = 0;
    while ((m = KEYWORDS.exec(chunk))) {
      withKeywords.push(chunk.slice(last, m.index));
      withKeywords.push(
        <span key={`k-${key}-${i}-${m.index}`} className="text-sky-400">
          {m[0]}
        </span>,
      );
      last = m.index + m[0].length;
    }
    withKeywords.push(chunk.slice(last));
    return <span key={`c-${key}-${i}`}>{withKeywords}</span>;
  });

  return [...parts, ...chunks];
}

export function CodeWindow() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-[#0b0f1a] shadow-2xl shadow-black/30">
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs text-slate-400">{heroCode.fileName}</span>
        </div>
        <span className="text-xs text-slate-500">{heroCode.label}</span>
      </div>
      <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed">
        <code className="font-mono text-slate-300">
          {heroCode.lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="mr-4 w-6 select-none text-right text-slate-600">
                {i + 1}
              </span>
              <span className="whitespace-pre">{highlight(line, i)}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
