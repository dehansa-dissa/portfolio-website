import { Section } from "./Section";
import { SKILL_GROUPS } from "./data";

export function Skills() {
  return (
    <Section id="skills" label="./skills" title="The toolbox.">
      <div className="space-y-10">
        {SKILL_GROUPS.map(({ title, icon: Icon, items }) => (
          <div key={title} className="reveal">
            <div
              className="flex items-center gap-2 mb-4 pb-2"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <Icon size={16} className="text-primary" />
              <h3
                className="font-mono text-xs uppercase tracking-[0.2em]"
                style={{ color: "var(--muted-foreground)" }}
              >
                {title}
              </h3>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {items.map((s) => (
                <li
                  key={s}
                  className="font-display text-base md:text-lg transition-colors cursor-default"
                  style={{ color: "var(--foreground)", opacity: 0.8 }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLLIElement).style.color = "var(--primary)";
                    (e.currentTarget as HTMLLIElement).style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLLIElement).style.color = "var(--foreground)";
                    (e.currentTarget as HTMLLIElement).style.opacity = "0.8";
                  }}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
