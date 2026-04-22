import { SOCIALS } from "./data";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)" }} className="py-10">
      <div className="my-4 mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs" style={{ color: "var(--muted-foreground)" }}>
          dehansa.d · Built with <span className="text-primary">♥</span> and{" "}
          <span className="text-primary">☕</span>
        </p>
        <div className="flex items-center gap-4">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
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
              <Icon size={16} />
            </a>
          ))}
        </div>
        <p className="font-mono text-xs" style={{ color: "var(--muted-foreground)" }}>
          © {new Date().getFullYear()} Dehansa Dissanayake. All rights reserved. <br className="md:hidden" />
        </p>
      </div>
    </footer>
  );
}
