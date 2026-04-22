import { Medal, HeartHandshake } from "lucide-react";
import { Section } from "./Section";
import { SPORTS, VOLUNTEER } from "./data";

function ListItem({
  title,
  org,
  date,
  desc,
}: {
  title: string;
  org: string;
  date: string;
  desc: string;
}) {
  return (
    <div
      className="reveal rounded-xl p-4 transition-colors"
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border)",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLDivElement).style.borderColor = "var(--primary)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)")
      }
    >
      <div className="flex items-baseline justify-between gap-3 mb-1">
        <p className="font-medium">{title}</p>
        <span
          className="font-mono text-[11px] shrink-0"
          style={{ color: "var(--muted-foreground)" }}
        >
          {date}
        </span>
      </div>
      <p className="text-xs font-mono text-primary mb-1">{org}</p>
      <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
        {desc}
      </p>
    </div>
  );
}

export function Extracurricular() {
  return (
    <Section id="extracurricular" label="./extracurricular" title="Off the keyboard.">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="font-display font-semibold mb-4 inline-flex items-center gap-2">
            <Medal size={18} className="text-primary" /> Sports
          </h3>
          <div className="space-y-3">
            {SPORTS.map((s) => (
              <ListItem key={s.title} {...s} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display font-semibold mb-4 inline-flex items-center gap-2">
            <HeartHandshake size={18} className="text-primary" /> Volunteering
          </h3>
          <div className="space-y-3">
            {VOLUNTEER.map((v) => (
              <ListItem key={v.title} {...v} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
