import { GraduationCap, Award } from "lucide-react";
import { Section } from "./Section";
import { EDUCATION } from "./data";

export function Education() {
  return (
    <Section id="education" label="./education" title="Where I've studied.">
      <div className="relative pl-8">
        <div
          className="absolute left-2 top-2 bottom-2 w-px"
          style={{ backgroundColor: "var(--border)" }}
        />
        {EDUCATION.map((e) => (
          <div key={e.school} className="reveal relative mb-8 last:mb-0">
            <span
              className="absolute h-3 w-3 rounded-full"
              style={{
                left: "-24px", 
                top: "50%", 
                transform: "translate(-50%, -50%)",
                backgroundColor: "var(--primary)",
                outline: "4px solid var(--background)",
              }}
            />
            <div
              className="rounded-xl p-5"
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
            <div className="flex items-center gap-2 text-primary mb-2">
                <GraduationCap size={16} />
                <span className="font-mono text-xs">{e.date}</span>
              </div>
              <h3 className="font-display font-semibold text-lg">{e.school}</h3>
              <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                {e.degree}
              </p>
              {e.note && (
                <p
                  className="text-xs mt-2 font-mono"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <Award size={11} style={{ display: "inline", marginRight: 4 }} />
                  {e.note}
                </p>
              )}
            </div>            
          </div>
        ))}
      </div>
    </Section>
  );
}
