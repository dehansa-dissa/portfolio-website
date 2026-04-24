import { Award, Trophy } from "lucide-react";
import { Section } from "./Section";
import { CERTS, AWARDS } from "./data";

export function Certs() {
  return (
    <Section id="certs" label="./certifications" title="Proof of work.">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3
            className="font-mono text-xs uppercase tracking-wider mb-4"
            style={{ color: "var(--muted-foreground)" }}
          >
            Certifications
          </h3>
          <div className="space-y-3">
            {CERTS.map((c) => (
              <div
                key={c.name}
                className="reveal card-hover rounded-xl p-4 flex items-center gap-4"
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="h-12 w-12 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: "var(--background)",
                    border: "1px solid var(--border)",
                    color: "var(--primary)",
                  }}
                >
                  <Award size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{c.name}</p>
                  <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                    {c.issuer} · {c.date}
                  </p>
                </div>
                <a
                  href={c.verify}
                  target="_blank"
                  className="font-mono text-xs shrink-0 text-primary hover:underline"
                >
                  verify →
                </a>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3
            className="font-mono text-xs uppercase tracking-wider mb-4"
            style={{ color: "var(--muted-foreground)" }}
          >
            Recognition / Awards
          </h3>
          <div className="space-y-3">
            {AWARDS.map((a) => (
              <div
                key={a.title}
                className="reveal card-hover rounded-xl p-4 flex items-start gap-4"
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <Trophy size={20} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">{a.title}</p>
                  <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                    {a.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
