import { motion } from "framer-motion";
import { ArrowDown, Send } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-4">Hello, I'm</p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-4">
            Dehansa<br />
            <span className="text-gradient">Dissanayake</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            Software Engineering Student · Full-Stack Developer
          </p>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Building scalable, secure, and elegant applications that make a real-world impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-medium text-sm hover:opacity-90 transition-opacity glow"
          >
            View Projects <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-heading font-medium text-sm hover:bg-secondary transition-colors"
          >
            Contact Me <Send className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
