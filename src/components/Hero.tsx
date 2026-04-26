import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { TYPE_ROLES, SOCIALS } from "./data";
import  Dehansa_CV  from "../assets/Dehansa_CV.pdf";

export function Hero() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = TYPE_ROLES[roleIdx];
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = role.slice(0, text.length + 1);
        setText(next);
        if (next === role) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = role.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIdx((roleIdx + 1) % TYPE_ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  const dots = useMemo(
    () =>
      Array.from({ length: 25 }).map((_, i) => ({
        left: `${(i * 53) % 100}%`,
        top: `${(i * 37) % 100}%`,
        delay: `${(i % 6) * 0.6}s`,
        size: 3 + (i % 4),
      })),
    []
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        {dots.map((d, i) => (
          <span
            key={i}
            className="absolute rounded-full float-dot"
            style={{
              left: d.left,
              top: d.top,
              width: d.size,
              height: d.size,
              animationDelay: d.delay,
              backgroundColor: "var(--primary)",
              opacity: 0.4,
            }}
          />
        ))}
      </div>
      <div className="relative mx-auto max-w-6xl px-6 w-full">
        <p className="font-mono text-sm text-primary mb-4">{"// Hi, I'm —"}</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-4">
          Dehansa Dissanayake.
        </h1>
        <h2
          className="font-display text-2xl md:text-4xl mb-6"
          style={{ color: "var(--muted-foreground)", minHeight: "2.5rem" }}
        >
          <span style={{ color: "var(--foreground)" }}>{text}</span>
          <span className="text-primary animate-pulse">|</span>
        </h2>
        <p
          className="max-w-xl text-base md:text-lg mb-8 leading-relaxed"
          style={{ color: "var(--muted-foreground)" }}
        >
          {/* I’m a second-year software engineering undergraduate who likes building simple, fast, and user-friendly applications.  */}
          I enjoy turning ideas into real world projects and improving them step by step.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          <a
            href="#projects"
            className="btn-glow inline-flex items-center gap-2 font-medium px-5 py-3 rounded-lg transition-all"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
              transform: "translateY(0)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)")
            }
          >
            View My Work <ArrowRight size={16} />
          </a>
          <a
            href={Dehansa_CV}
            download
            className="inline-flex items-center gap-2 font-medium px-5 py-3 rounded-lg transition-colors"
            style={{ border: "1px solid var(--border)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--primary)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--primary)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLAnchorElement).style.color = "";
            }}
          >
            <Download size={16} /> Download CV
          </a>
        </div>
        <div className="flex items-center gap-4">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              target="_blank"
              href={href}
              aria-label={label}
              className="transition-colors"
              style={{ color: "var(--muted-foreground)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--primary)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--muted-foreground)")
              }
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
