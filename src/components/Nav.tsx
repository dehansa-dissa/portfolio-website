import { Sun, Moon, Menu, X } from "lucide-react";
import { NAV } from "./data";

export function Nav({
  active,
  scrolled,
  theme,
  toggleTheme,
  menuOpen,
  setMenuOpen,
}: {
  active: string;
  scrolled: boolean;
  theme: "dark" | "light";
  toggleTheme: () => void;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
        backgroundColor: scrolled ? "color-mix(in srgb, var(--background) 80%, transparent)" : "color-mix(in srgb, var(--background) 40%, transparent)",
        padding: scrolled ? "0.5rem 0" : "1rem 0",
        transition: "all 0.3s ease",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        <a href="#hero" className="font-mono text-base font-semibold cursor-blink">
          alex
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="font-mono text-sm px-3 py-2 rounded-md transition-colors"
              style={{
                color: active === n.id ? "var(--primary)" : "var(--muted-foreground)",
              }}
              onMouseEnter={(e) => {
                if (active !== n.id)
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground)";
              }}
              onMouseLeave={(e) => {
                if (active !== n.id)
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--muted-foreground)";
              }}
            >
              {n.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-2 p-2 rounded-md transition-colors"
            style={{ border: "1px solid var(--border)" }}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-md"
            style={{ border: "1px solid var(--border)" }}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-md"
            style={{ border: "1px solid var(--border)" }}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav
          className="md:hidden"
          style={{
            borderTop: "1px solid var(--border)",
            backgroundColor: "var(--background)",
          }}
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-sm py-2"
                style={{ color: active === n.id ? "var(--primary)" : "var(--muted-foreground)" }}
              >
                {n.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
