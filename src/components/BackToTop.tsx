import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="btn-glow fixed bottom-6 right-6 z-40 h-11 w-11 rounded-full flex items-center justify-center transition-transform hover:-translate-y-0.5"
      style={{
        backgroundColor: "var(--primary)",
        color: "var(--primary-foreground)",
        boxShadow: "0 4px 20px var(--accent-glow)",
      }}
    >
      <ArrowUp size={18} />
    </button>
  );
}
