import { createFileRoute, Link } from "@tanstack/react-router";
import { Sprout, Brain, Dumbbell, Trophy, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/lesson-plan")({
  head: () => ({
    meta: [
      { title: "GCSE Lesson Plan & Roadmap | BrightMind Tutoring" },
      { name: "description", content: "Our structured UK GCSE roadmap: Beginner → Understanding → Practice → Exam Preparation. A clear path for struggling students to reach top grades." },
      { property: "og:title", content: "Lesson Plan & Roadmap — BrightMind Tutoring" },
      { property: "og:description", content: "Structured GCSE roadmap built for confidence and results." },
      { property: "og:url", content: "/lesson-plan" },
    ],
    links: [{ rel: "canonical", href: "/lesson-plan" }],
  }),
  component: LessonPlanPage,
});

const stages = [
  { icon: Sprout, title: "1. Beginner", subtitle: "Foundations & gaps", points: [
    "Diagnostic to find weak topics", "Rebuild missing basics", "No judgment — just clarity",
  ]},
  { icon: Brain, title: "2. Understanding", subtitle: "Concepts that stick", points: [
    "Topics taught in small steps", "Worked examples together", "Why it works, not just how",
  ]},
  { icon: Dumbbell, title: "3. Practice", subtitle: "Build fluency", points: [
    "Targeted practice questions", "Spaced repetition", "Mistake-review loop",
  ]},
  { icon: Trophy, title: "4. Exam Preparation", subtitle: "Grade-ready", points: [
    "Past paper mastery", "Exam technique & timing", "Mark scheme thinking",
  ]},
];

function LessonPlanPage() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">The roadmap</span>
        <h1 className="mt-5 text-4xl font-bold sm:text-5xl"><span className="text-gradient">A clear path from struggling to top grades</span></h1>
        <p className="mt-4 text-muted-foreground">
          Every student follows the same structured four-stage roadmap — but the
          pace, depth and starting point are personal to them.
        </p>
      </div>

      <div className="relative mt-16">
        <div className="absolute inset-x-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent lg:block" />
        <ol className="grid gap-6 lg:grid-cols-4">
          {stages.map((s, i) => (
            <li key={s.title} className="card-glow relative">
              <span className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-xs font-bold text-gold-foreground">
                Stage {i + 1}
              </span>
              <s.icon className="mt-2 h-9 w-9 text-gold" />
              <h2 className="mt-4 text-xl font-bold">{s.title}</h2>
              <p className="text-sm text-muted-foreground">{s.subtitle}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {s.points.map((p) => <li key={p} className="flex gap-2"><span className="text-primary">•</span> {p}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-16 rounded-3xl border border-border bg-card/60 p-8 sm:p-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Built for weak & struggling students</h2>
            <p className="mt-3 text-muted-foreground">
              Most tutors race ahead. We slow down where it matters and speed up
              once a topic is truly understood. The result: real confidence,
              measurable progress, better grades.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link to="/contact" className="btn-primary">Start the roadmap <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/subjects" className="btn-outline">See subjects</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
