import { ArrowRight } from "lucide-react";
import { Section } from "./Section";
import { POSTS } from "./data";

export function Blog() {
  return (
    <Section id="blog" label="./blog" title="Notes & writing.">
      <div className="grid md:grid-cols-3 gap-6">
        {POSTS.map((p) => (
          <a
            key={p.title}
            href={p.Link}
            target="_blank"
            className="reveal card-hover rounded-xl overflow-hidden flex flex-col group"
            style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <div
              className="h-32 w-full relative flex items-center justify-center overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-glow), transparent 70%), var(--surface-2)",
              }}
            >
              {p.img && (
                <img
                  src={p.img}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              )}
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <span className="font-mono text-[11px] text-primary mb-2">#{p.tag}</span>
              <h3 className="font-display font-semibold mb-3 leading-snug transition-colors group-hover:text-primary">
                {p.title}
              </h3>
              <p className="text-xs mb-4" style={{ color: "var(--muted-foreground)" }}>
                {p.date} · {p.read} read
              </p>
              <span className="font-mono text-xs text-primary mt-auto inline-flex items-center gap-1">
                  Read <ArrowRight size={12} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
