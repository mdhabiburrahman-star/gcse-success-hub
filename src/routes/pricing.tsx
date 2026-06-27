import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MessageCircle, Sparkles } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site-config";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — £25/hour GCSE Tutoring UK | BrightMind Tutoring" },
      { name: "description", content: "Transparent GCSE tutoring pricing: £25 per hour, minimum 2-hour sessions, weekly packages available. Personalised teaching, real results." },
      { property: "og:title", content: "Pricing — BrightMind Tutoring" },
      { property: "og:description", content: "£25/hour 1-to-1 GCSE tutoring with weekly packages." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Trial Lesson",
    price: "Free",
    unit: "30 minutes",
    blurb: "No-obligation assessment & plan.",
    features: ["Level diagnostic", "Grade target agreed", "First 4 lessons outlined"],
    cta: "Book Free Trial",
    highlight: false,
  },
  {
    name: "Standard Session",
    price: "£50",
    unit: "Per session (2 hours min)",
    blurb: "£25 / hour. The core 1-to-1 lesson.",
    features: ["Fully personalised plan", "Custom homework", "Parent updates on request", "UK GCSE specification aligned"],
    cta: "Book a session",
    highlight: true,
  },
  {
    name: "Weekly Package",
    price: "From £95",
    unit: "Per week",
    blurb: "Consistent progress, structured pace.",
    features: ["2× weekly sessions", "Priority WhatsApp support", "Monthly progress report", "Best for exam terms"],
    cta: "Discuss a package",
    highlight: false,
  },
];

function PricingPage() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">Pricing</span>
        <h1 className="mt-5 text-4xl font-bold sm:text-5xl"><span className="text-gradient">Honest pricing. Real results.</span></h1>
        <p className="mt-4 text-muted-foreground">
          £25 per hour, minimum 2-hour sessions (£50). Weekly packages available
          for students working towards exams. No hidden fees, no long contracts.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={
              "card-glow flex flex-col " +
              (t.highlight ? "ring-2 ring-gold/70 shadow-[0_20px_60px_-20px_oklch(0.88_0.17_95/40%)]" : "")
            }
          >
            {t.highlight && (
              <span className="self-start rounded-full bg-gold px-3 py-1 text-xs font-bold text-gold-foreground">
                Most popular
              </span>
            )}
            <h2 className="mt-4 text-xl font-bold">{t.name}</h2>
            <p className="text-sm text-muted-foreground">{t.blurb}</p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-4xl font-bold">{t.price}</span>
              <span className="text-sm text-muted-foreground">{t.unit}</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {t.features.map((f) => (
                <li key={f} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-primary" /> {f}</li>
              ))}
            </ul>
            <Link to="/contact" className={(t.highlight ? "btn-primary" : "btn-outline") + " mt-8 text-sm"}>
              {t.cta}
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-border bg-card/60 p-8 sm:p-12">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> Best value</span>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Weekly packages get the biggest jumps</h2>
            <p className="mt-2 text-muted-foreground">
              Most students who improve by 2+ grades book a weekly package. Talk to me on WhatsApp and we'll design one around your child's timetable.
            </p>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <MessageCircle className="h-4 w-4" /> WhatsApp me
          </a>
        </div>
      </div>
    </section>
  );
}
