import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";
import { Code2, Server, Lightbulb } from "lucide-react";

const highlights = [
  { icon: Server, label: "Backend Systems", desc: "Passionate about building robust server-side architectures" },
  { icon: Code2, label: "Full-Stack Dev", desc: "End-to-end development from database to polished UI" },
  { icon: Lightbulb, label: "Modern Tech", desc: "Always exploring cutting-edge tools and frameworks" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading title="About Me" subtitle="A quick intro to who I am and what drives me." />
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            I'm a software engineering student with a deep passion for backend systems, full-stack development,
            and modern technologies. I thrive on solving complex problems and transforming ideas into clean,
            efficient code. My goal is to work at a top tech company and build systems that create meaningful impact.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <AnimatedSection key={h.label} delay={0.1 * i}>
              <div className="p-6 rounded-xl bg-card border border-border card-shadow hover:border-primary/30 transition-colors text-center">
                <h.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-foreground mb-2">{h.label}</h3>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
