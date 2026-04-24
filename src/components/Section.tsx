import type { ReactNode } from "react";

export function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 border-t border-border">
      <div
        aria-hidden="true"
        className=" pl-11 hidden lg:flex absolute left-4 top-24 flex-col items-center gap-3 select-none"
      >
        <span
          className="font-mono text-xs uppercase tracking-[0.3em] text-primary"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {label.replace("./", "")}
        </span>
        <span className="block w-px h-16" style={{ backgroundColor: "var(--primary)", opacity: 0.4 }} />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-10">
          {/* <span className="section-label">{label}</span> */}
          <h2 className="font-display text-3xl md:text-4xl font-bold">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
