import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, MessageCircle, MapPin, Send, CheckCircle2 } from "lucide-react";
import { WHATSAPP_URL, EMAIL, LOCATION } from "@/lib/site-config";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book GCSE Tutoring UK | BrightMind Tutoring" },
      { name: "description", content: "Book a GCSE tutoring lesson with Habib. Get in touch via contact form, WhatsApp or email. Fast, friendly response." },
      { property: "og:title", content: "Contact — BrightMind Tutoring" },
      { property: "og:description", content: "Start improving your grades today — book a lesson." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(80),
  subject: z.string().trim().min(1, "Please choose a subject").max(60),
  message: z.string().trim().min(5, "Please write a short message").max(1000),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) errs[String(issue.path[0])] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    // Open WhatsApp with prefilled message as a reliable delivery method.
    const text = `Hi! I'd like to book GCSE tutoring.\n\nName: ${data.name}\nSubject: ${data.subject}\nMessage: ${data.message}`;
    const url = `${WHATSAPP_URL.split("?")[0]}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section className="container-x py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <span className="eyebrow">Get in touch</span>
          <h1 className="mt-5 text-4xl font-bold sm:text-5xl"><span className="text-gradient">Start Improving Your Grades Today</span></h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Send a quick message and we'll come back to you within 24 hours.
            Prefer to chat? Message on WhatsApp for the fastest response.
          </p>

          <div className="mt-10 space-y-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="card-glow flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--whatsapp)]/20 text-[color:var(--whatsapp)] ring-1 ring-[color:var(--whatsapp)]/40">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-sm text-muted-foreground">Fastest response — usually within an hour</div>
                </div>
              </div>
              <span className="text-sm font-semibold text-gold">Chat →</span>
            </a>
            <a href={`mailto:${EMAIL}`} className="card-glow flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/20 text-primary ring-1 ring-primary/40">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-muted-foreground">{EMAIL}</div>
                </div>
              </div>
              <span className="text-sm font-semibold text-gold">Send →</span>
            </a>
            <div className="card-glow flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/20 text-gold ring-1 ring-gold/40">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="font-semibold">Where we teach</div>
                <div className="text-sm text-muted-foreground">{LOCATION}</div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="card-glow space-y-5">
          <h2 className="text-2xl font-bold">Book a lesson</h2>
          <Field label="Your name" name="name" error={errors.name} placeholder="e.g. Sarah Johnson" />
          <div>
            <label htmlFor="subject" className="text-sm font-medium">Subject of interest</label>
            <select
              id="subject"
              name="subject"
              defaultValue=""
              className="mt-1.5 w-full rounded-lg border border-input bg-card/60 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="" disabled>Choose a subject…</option>
              <option>GCSE Maths</option>
              <option>GCSE Computer Science</option>
              <option>English Grammar</option>
              <option>Multiple subjects</option>
            </select>
            {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject}</p>}
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              maxLength={1000}
              placeholder="Tell us about your child's year group, target grade and any topics they're struggling with."
              className="mt-1.5 w-full rounded-lg border border-input bg-card/60 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
          </div>
          <button type="submit" className="btn-primary w-full">
            <Send className="h-4 w-4" /> Send message
          </button>
          {sent && (
            <p className="flex items-center gap-2 text-sm text-[color:var(--whatsapp)]">
              <CheckCircle2 className="h-4 w-4" /> Opening WhatsApp with your message…
            </p>
          )}
          <p className="text-xs text-muted-foreground">
            Your message opens in WhatsApp so the tutor receives it instantly. No data is stored on this site.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, error, placeholder }: { label: string; name: string; error?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      <input
        id={name}
        name={name}
        type="text"
        maxLength={120}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-input bg-card/60 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
