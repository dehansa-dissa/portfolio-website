import { useRef, useState } from "react";
import { Send, Mail} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Section } from "./Section";

function Field({ label, id, type }: { label: string; id: string; type: string }) {
  return (
    <div>
      <label htmlFor={id} className="font-mono text-xs" style={{ color: "var(--muted-foreground)" }}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        className="mt-1 w-full rounded-lg px-3 py-2 text-sm focus:outline-none transition-colors"
        style={{
          backgroundColor: "var(--background)",
          border: "1px solid var(--border)",
          color: "var(--foreground)",
        }}
        onFocus={(e) =>
          ((e.currentTarget as HTMLInputElement).style.borderColor = "var(--primary)")
        }
        onBlur={(e) =>
          ((e.currentTarget as HTMLInputElement).style.borderColor = "var(--border)")
        }
      />
    </div>
  );
}

function ContactLink({
  icon: Icon,
  label,
  href,
  target,
}: {
  icon: React.ElementType;
  label: string;
  href: string;
  target?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      className="flex items-center gap-3 rounded-lg px-4 py-3 transition-colors"
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--primary)";
        (e.currentTarget as HTMLAnchorElement).style.color = "var(--primary)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLAnchorElement).style.color = "";
      }}
    >
      <Icon size={16} className="text-primary" />
      <span className="font-mono text-sm">{label}</span>
    </a>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    formRef.current?.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <Section id="contact" label="contact" title="Let's build something together.">
      <div className="grid md:grid-cols-2 gap-10">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="reveal rounded-xl p-6 space-y-4"
          style={{
            backgroundColor: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <Field label="Name" id="name" type="text" />
          <Field label="Email" id="email" type="email" />
          <div>
            <label
              htmlFor="message"
              className="font-mono text-xs"
              style={{ color: "var(--muted-foreground)" }}
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              className="mt-1 w-full rounded-lg px-3 py-2 text-sm focus:outline-none transition-colors resize-none"
              style={{
                backgroundColor: "var(--background)",
                border: "1px solid var(--border)",
                color: "var(--foreground)",
              }}
              onFocus={(e) =>
                ((e.currentTarget as HTMLTextAreaElement).style.borderColor = "var(--primary)")
              }
              onBlur={(e) =>
                ((e.currentTarget as HTMLTextAreaElement).style.borderColor = "var(--border)")
              }
            />
          </div>
          <button
            type="submit"
            className="btn-glow w-full inline-flex items-center justify-center gap-2 font-medium px-5 py-3 rounded-lg transition-all"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)")
            }
          >
            <Send size={16} /> {sent ? "Message sent — thank you!" : "Send message"}
          </button>
        </form>
        <div className="reveal space-y-4">
          <p className="leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
            Open to internships and good conversations about engineering,
            design, and side projects.
          </p>
          <div className="space-y-3">
            <ContactLink icon={Mail} label="dehansa.dev@gmail.com" href="mailto:dehansa.dev@gmail.com" />
            <ContactLink icon={FaLinkedin} target="_blank" label="LinkedIn" href="https://linkedin.com/in/dehansadissa" />
            <ContactLink icon={FaGithub} target="_blank" label="GitHub" href="https://github.com/dehansa-dissa" />
          </div>
        </div>
      </div>
    </Section>
  );
}
