import { createFileRoute, Link } from "@tanstack/react-router";
import { Calculator, Code2, Sparkles, Lock, ArrowRight, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/practice")({
  head: () => ({
    meta: [
      { title: "Practice Hub — Maths & Computer Science | TutorMentor Near Me" },
      { name: "description", content: "Practice resources for active home-tutoring students in London. Maths and Computer Science exercises plus links to Moodle and external practice platforms." },
      { property: "og:title", content: "Practice Hub — TutorMentor Near Me" },
      { property: "og:description", content: "Practice Maths and Computer Science between home visits." },
      { property: "og:url", content: "https://tutormentor.lovable.app/practice" },
    ],
    links: [{ rel: "canonical", href: "https://tutormentor.lovable.app/practice" }],
  }),
  component: PracticePage,
});

const tiles = [
  { icon: Calculator, title: "Maths Practice", desc: "Topic-by-topic question sets with worked solutions for KS3, GCSE and A-Level.", count: "200+ questions" },
  { icon: Code2, title: "Computer Science", desc: "Python, algorithms, databases, cybersecurity and project tasks.", count: "60+ exercises" },
];

function PracticePage() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> Practice hub</span>
          <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
            <span className="text-gradient">Practice that moves the needle</span>
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Curated practice for current students between home visits. Assigned
            personally — and tracked from the tutor admin panel.
          </p>
        </div>
        <Link to="/contact" className="btn-primary">Get access <ArrowRight className="h-4 w-4" /></Link>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {tiles.map((t) => (
          <div key={t.title} className="card-glow flex flex-col">
            <div className="flex items-center justify-between">
              <t.icon className="h-9 w-9 text-gold" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.count}</span>
            </div>
            <h2 className="mt-4 text-xl font-bold">{t.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
            <div className="mt-6 flex items-center gap-2 text-sm text-gold">
              <Lock className="h-4 w-4" /> Student-only access
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-8 rounded-3xl border border-border bg-gradient-to-br from-primary/20 via-card/60 to-card/60 p-8 sm:p-12 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <span className="eyebrow">Coming soon</span>
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Moodle & external practice platforms</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Active students will be given access to a personal practice
            workspace — with Moodle exercises and curated external resources —
            tracked by the tutor through the admin panel.
          </p>
        </div>
        <Link to="/contact" className="btn-outline">
          <ExternalLink className="h-4 w-4" /> Request access
        </Link>
      </div>
    </section>
  );
}
