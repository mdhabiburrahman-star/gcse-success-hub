import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MessageCircle, Sparkles, AlertCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site-config";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Private Home Tutor London | TutorMentor Near Me" },
      { name: "description", content: "From £25/hour for private home tutoring in London. Minimum 2-hour sessions plus travel cost. No free trials — every session is fully paid and professionally delivered." },
      { property: "og:title", content: "Pricing — TutorMentor Near Me" },
      { property: "og:description", content: "From £25/hr home tutoring in London. Maths & Computer Science." },
      { property: "og:url", content: "https://tutormentor.lovable.app/pricing" },
    ],
    links: [{ rel: "canonical", href: "https://tutormentor.lovable.app/pricing" }],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Standard Home Session",
    price: "From £25",
    unit: "per hour · 2 hr minimum",
    blurb: "The core one-to-one home lesson, delivered at your address in London.",
    features: [
      "Minimum 2-hour booking",
      "+ £25 travel cost (varies by distance)",
      "Maths or Computer Science",
      "Fully personalised lesson plan",
    ],
    cta: "Book a session",
    highlight: true,
  },
  {
    name: "Weekly Mentoring",
    price: "From £100",
    unit: "per week (2hr × 2)",
    blurb: "Consistent weekly visits during exam terms — biggest grade jumps.",
    features: [
      "2 home visits per week",
      "Priority WhatsApp support",
      "Personal homework & practice",
      "Best for GCSE / A-Level run-up",
    ],
    cta: "Discuss a package",
    highlight: false,
  },
  {
    name: "University / Project",
    price: "Custom",
    unit: "rate by topic & depth",
    blurb: "Programming projects, dissertations, advanced CS topics, assignments.",
    features: [
      "Quoted per project / topic",
      "Includes 2hr minimum visits",
      "Code review & mentoring",
      "Cybersecurity / cloud / databases",
    ],
    cta: "Request a quote",
    highlight: false,
  },
];

function PricingPage() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">Pricing</span>
        <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
          <span className="text-gradient">Honest, transparent rates</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          From <strong className="text-foreground">£25 per hour</strong>, with a
          minimum 2-hour session, plus a travel cost (typically{" "}
          <strong className="text-foreground">£25</strong>, varying by distance
          across London). Final rate depends on your level, the topic and the
          travel involved.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={
              "card-glow flex flex-col " +
              (t.highlight ? "ring-2 ring-gold/70 shadow-[0_20px_60px_-20px_oklch(0.78_0.12_168/40%)]" : "")
            }
          >
            {t.highlight && (
              <span className="self-start rounded-full bg-gold px-3 py-1 text-xs font-bold text-gold-foreground">
                Most booked
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

      <div className="mt-12 rounded-3xl border border-gold/40 bg-gold/5 p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/20 text-gold ring-1 ring-gold/40">
            <AlertCircle className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-lg font-bold">No free trial classes</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              All sessions are fully paid and professionally delivered. Rates
              vary based on the student's level, topic difficulty and the
              travel distance within London. You'll always get a clear, written
              quote before you confirm a booking — no surprises.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-3xl border border-border bg-card/60 p-8 sm:p-12">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> Get a quote</span>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Tell me your area and I'll quote your weekly plan</h2>
            <p className="mt-2 text-muted-foreground">
              Travel cost depends on where in London you are. Send your
              postcode area and I'll come back with a clear total.
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
