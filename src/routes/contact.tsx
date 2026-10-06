import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, MessageCircle, MapPin, Send, CheckCircle2, Phone, Home } from "lucide-react";
import { WHATSAPP_URL, EMAIL, LOCATION, PHONE_DISPLAY, PHONE_E164, WHATSAPP_DISPLAY } from "@/lib/site-config";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Contact — Book a Home Tutor in London | TutorMentor Near Me" },
      { name: "description", content: "Book a private home tutor in London for Maths or Computer Science. Call, email or WhatsApp. Face-to-face one-to-one home tuition only — I visit your home." },
      { property: "og:title", content: "Contact — Book a Home Tutor in London" },
      { property: "og:description", content: "Request a private home tutor across London for Maths or Computer Science." },
      { property: "og:url", content: "https://tutormentor.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://tutormentor.lovable.app/contact" }],
  }),
  component: ContactPage,
});

const LEVELS = ["School (KS3)", "GCSE", "A-Level", "College", "University"] as const;
const SUBJECTS = ["Mathematics", "Computer Science", "Both"] as const;

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(80),
  level: z.string().trim().min(1, "Please choose a level"),
  subject: z.string().trim().min(1, "Please choose a subject"),
  topics: z.string().trim().max(300).optional(),
  area: z.string().trim().min(1, "Please enter your London area").max(80),
  times: z.string().trim().max(120).optional(),
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
      level: String(fd.get("level") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      topics: String(fd.get("topics") ?? ""),
      area: String(fd.get("area") ?? ""),
      times: String(fd.get("times") ?? ""),
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
    const text =
`Hi Habib! I'd like to book a private home tutor in London.

Name: ${data.name}
Level: ${data.level}
Subject: ${data.subject}
Topics: ${data.topics || "(see message)"}
London area: ${data.area}
Preferred days/times: ${data.times || "(flexible)"}

Message:
${data.message}`;
    const url = `${WHATSAPP_URL.split("?")[0]}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section className="container-x py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <span className="eyebrow">Get in touch</span>
          <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
            <span className="text-gradient">Book a Home Tutor in London</span>
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Face-to-face home tutoring only — I visit the student's home in
            London. Send the details below or message me directly on WhatsApp
            for the fastest reply.
          </p>

          <div className="mt-10 space-y-4">
            <a href={`tel:+${PHONE_E164}`} className="card-glow flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/20 text-primary ring-1 ring-primary/40">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-semibold">Call now (UK)</div>
                  <div className="text-sm text-muted-foreground">{PHONE_DISPLAY}</div>
                </div>
              </div>
              <span className="text-sm font-semibold text-gold">Call →</span>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="card-glow flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--whatsapp)]/20 text-[color:var(--whatsapp)] ring-1 ring-[color:var(--whatsapp)]/40">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-semibold">Chat on WhatsApp</div>
                  <div className="text-sm text-muted-foreground">{WHATSAPP_DISPLAY} — fastest reply</div>
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
                  <div className="font-semibold">Email me</div>
                  <div className="text-sm text-muted-foreground break-all">{EMAIL}</div>
                </div>
              </div>
              <span className="text-sm font-semibold text-gold">Send →</span>
            </a>
            <div className="card-glow flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/20 text-gold ring-1 ring-gold/40">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="font-semibold">Where I teach</div>
                <div className="text-sm text-muted-foreground">{LOCATION}</div>
              </div>
            </div>
            <div className="card-glow flex items-center gap-4 border border-gold/40 bg-gold/5">
              <Home className="h-5 w-5 text-gold shrink-0" />
              <p className="text-sm">
                <strong className="text-foreground">Face-to-face home tutoring only.</strong>{" "}
                I do not offer online classes — every session is delivered in
                person at the student's home in London.
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="card-glow space-y-5">
          <h2 className="text-2xl font-bold">Request a home tutor</h2>
          <Field label="Your name" name="name" error={errors.name} placeholder="e.g. Sarah Johnson" />
          <Select label="Student level" name="level" options={LEVELS} error={errors.level} />
          <Select label="Subject" name="subject" options={SUBJECTS} error={errors.subject} />
          <Field label="Topics (optional)" name="topics" placeholder="e.g. algebra, trigonometry, Python loops" />
          <Field label="Your London area / postcode" name="area" error={errors.area} placeholder="e.g. Camden NW1, Stratford E15" />
          <Field label="Preferred days / times (optional)" name="times" placeholder="e.g. weekday evenings, Saturday mornings" />
          <div>
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              maxLength={1000}
              placeholder="Tell me about the student's situation, target grade, and anything they're struggling with."
              className="mt-1.5 w-full rounded-lg border border-input bg-card/60 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
          </div>
          <button type="submit" className="btn-primary w-full">
            <Send className="h-4 w-4" /> Send request via WhatsApp
          </button>
          {sent && (
            <p className="flex items-center gap-2 text-sm text-[color:var(--whatsapp)]">
              <CheckCircle2 className="h-4 w-4" /> Opening WhatsApp with your request…
            </p>
          )}
          <p className="text-xs text-muted-foreground">
            Your request opens in WhatsApp so I receive it instantly. No data
            is stored on this site.
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
        maxLength={150}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-input bg-card/60 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function Select({ label, name, options, error }: { label: string; name: string; options: readonly string[]; error?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="mt-1.5 w-full rounded-lg border border-input bg-card/60 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      >
        <option value="" disabled>Choose…</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
