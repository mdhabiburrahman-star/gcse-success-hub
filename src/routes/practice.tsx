import { createFileRoute, Link } from "@tanstack/react-router";
import { Calculator, Code2, PenLine, Sparkles, Lock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/practice")({
  head: () => ({
    meta: [
      { title: "Practice Hub — Maths, Computer Science, English | BrightMind Tutoring" },
      { name: "description", content: "Our GCSE practice hub: Maths practice, Computer Science quizzes and English grammar exercises. AI-powered skill tracking coming soon." },
      { property: "og:title", content: "Practice Hub — BrightMind Tutoring" },
      { property: "og:description", content: "Practice GCSE Maths, Computer Science and English between lessons." },
      { property: "og:url", content: "/practice" },
    ],
    links: [{ rel: "canonical", href: "/practice" }],
  }),
  component: PracticePage,
});

const tiles = [
  { icon: Calculator, title: "Maths Practice", desc: "Topic-by-topic question sets with worked solutions.", count: "120+ questions" },
  { icon: Code2, title: "Computer Science Quizzes", desc: "Python, algorithms, binary and logic gate quizzes.", count: "40+ quizzes" },
  { icon: PenLine, title: "English Grammar Exercises", desc: "Sentence structure, tenses and writing drills.", count: "80+ exercises" },
];

function PracticePage() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> Practice hub</span>
          <h1 className="mt-5 text-4xl font-bold sm:text-5xl"><span className="text-gradient">Practice that actually moves the needle</span></h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Carefully selected practice resources for current students between
            lessons. Sign up for a free trial to unlock the full hub.
          </p>
        </div>
        <Link to="/contact" className="btn-primary">Get access <ArrowRight className="h-4 w-4" /></Link>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
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
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl">AI-powered skill tracking</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A personal dashboard that tracks every student's strengths, gaps and
            grade trajectory — automatically. Adapted practice, served weekly.
          </p>
        </div>
        <Link to="/contact" className="btn-outline">Join the waitlist</Link>
      </div>
    </section>
  );
}
