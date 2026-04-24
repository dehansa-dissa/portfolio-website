import { Section } from "./Section";
import { SKILL_GROUPS } from "./data";

export function Skills() {
  return (
    <Section id="skills" label="./skills" title="The toolbox.">
      <div className="grid sm:grid-cols-2 gap-6">
        {SKILL_GROUPS.map(({ title, icon: Icon, items }) => (
          <div
            key={title}
            className="reveal bg-surface border border-border rounded-xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Icon size={18} className="text-primary" />
              <h3 className="font-display font-semibold">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-border bg-background hover:border-primary hover:text-primary transition-colors cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
