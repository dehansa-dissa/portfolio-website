import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

const categories = [
  { title: "Languages", items: ["Java", "Python", "JavaScript"] },
  { title: "Frameworks", items: ["React", "Spring Boot"] },
  { title: "Tools", items: ["Git", "Docker", "Figma"] },
  { title: "Concepts", items: ["REST APIs", "Authentication", "OOP"] },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading title="Skills" subtitle="Technologies and concepts I work with." />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <AnimatedSection key={cat.title} delay={0.1 * i}>
              <div className="p-6 rounded-xl bg-card border border-border card-shadow">
                <h3 className="font-heading font-semibold text-primary mb-4 text-sm uppercase tracking-wider">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="text-foreground text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
