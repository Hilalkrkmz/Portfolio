import type { ReactNode } from "react";

type Props = {
  id: string;
  title?: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, subtitle, action, children, className }: Props) {
  return (
    <section id={id} className={`border-b border-border py-16 sm:py-20 ${className ?? ""}`}>
      <div className="mx-auto max-w-6xl px-5">
        {title && (
          <div className="mb-10 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
              {subtitle && <p className="mt-1 text-sm text-muted">{subtitle}</p>}
            </div>
            {action}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
