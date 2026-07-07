import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, MessageCircle, ArrowRight, Home, MapPin, ShieldCheck } from "lucide-react";
import tutorHero from "@/assets/tutor-hero.jpg";
import { WHATSAPP_URL, BRAND_NAME, TUTOR_SHORT_NAME } from "@/lib/site-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Private Home Tutor London — Maths, CS & English" },
      { name: "description", content: "Expert mentor in London for Maths and Computer Science. One-to-one face-to-face home tutoring for school, GCSE, A-Level, college and university students." },
      { name: "keywords", content: "private home tutor London, math tutor near me, computer science tutor London, expert mentor London, GCSE maths tutor, A-Level computer science tutor, TutorMentor Near Me" },
      { property: "og:title", content: "Expert Mentor — Private Home Tutor London" },
      { property: "og:description", content: "Face-to-face one-to-one home tutoring in London. Maths & Computer Science." },
      { property: "og:url", content: "https://tutormentor.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://tutormentor.lovable.app/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: BRAND_NAME,
        description: "Private one-to-one home tutoring in London for Maths and Computer Science.",
        areaServed: { "@type": "City", name: "London" },
        address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
        priceRange: "££",
      }),
    }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-x grid gap-12 py-16 md:py-28 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> London · Home tuition</span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
            <span className="text-gradient">Expert Mentor</span>
            <br />
            <span className="text-foreground/85 text-2xl sm:text-3xl md:text-4xl">
              Private home tutor for Maths, Computer Science &amp; English
            </span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            I come to your home in London — patient, one-to-one mentoring for
            school, GCSE, A-Level and university students.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">
              Book a Session <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Home className="h-4 w-4 text-gold" /> Home visits</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Across London</div>
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> 13+ years</div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/40 via-[oklch(0.5_0.13_200/30%)] to-gold/20 blur-3xl" />
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl float-y">
            <img
              src={tutorHero}
              alt={`${TUTOR_SHORT_NAME} — expert private home tutor in London for GCSE Maths and Computer Science`}
              title="Expert Mentor — Private Home Tutor London (TutorMentor Near Me)"
              width={1024}
              height={1024}
              loading="eager"
              fetchPriority="high"
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-4 hidden sm:block">
            <div className="card-glow w-56">
              <p className="text-sm font-semibold">{TUTOR_SHORT_NAME}</p>
              <p className="mt-1 text-xs text-muted-foreground">MSc Cybersecurity · 13+ years teaching</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
