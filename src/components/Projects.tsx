import {  ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { PROJECTS } from "./data";
import { FaGithub } from "react-icons/fa";

export function Projects() {
  return (
    <Section id="projects" label="./projects" title="Things I've built.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <article
            key={p.name}
            className="reveal card-hover rounded-xl p-6 flex flex-col"
            style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <h3 className="font-display text-lg font-semibold mb-2">{p.name}</h3>
            <p
              className="text-sm mb-4 flex-1"
              style={{ color: "var(--muted-foreground)" }}
            >
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] px-2 py-0.5 rounded-md"
                  style={{
                    backgroundColor: "var(--background)",
                    border: "1px solid var(--border)",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div
              className="flex items-center gap-3 pt-2"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <a
                href={p.github}
                target="_blank"
                aria-label={`${p.name} GitHub`}
                className="transition-colors"
                style={{ color: "var(--muted-foreground)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--primary)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--muted-foreground)")
                }
              >
                <FaGithub size={16} />
              </a>
              <a
                href={p.demo}
                className="font-mono text-xs transition-colors inline-flex items-center gap-1"
                style={{ color: "var(--muted-foreground)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--primary)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--muted-foreground)")
                }
              >
                Live demo <ExternalLink size={12} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
