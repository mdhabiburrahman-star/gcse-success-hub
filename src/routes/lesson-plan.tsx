import { createFileRoute, Link } from "@tanstack/react-router";
import { Sprout, Brain, Dumbbell, Trophy, ArrowRight, Headphones, MessageSquare, Eye, PenLine, Lightbulb } from "lucide-react";

export const Route = createFileRoute("/lesson-plan")({
  head: () => ({
    meta: [
      { title: "Student Journey & Lesson Plan — Private Home Tutoring London | TutorMentor Near Me" },
      { name: "description", content: "A structured journey for every London home-tutoring student: listening, speaking, reading, writing, problem solving, practice and brain boosting. From confusion to clarity." },
      { property: "og:title", content: "Student Journey — TutorMentor Near Me" },
      { property: "og:description", content: "Philosophical, motivational, structured learning path." },
      { property: "og:url", content: "https://brightmindtutoring.lovable.app/lesson-plan" },
    ],
    links: [{ rel: "canonical", href: "https://brightmindtutoring.lovable.app/lesson-plan" }],
  }),
  component: LessonPlanPage,
});

const stages = [
  { icon: Sprout, title: "1. Beginner", subtitle: "Foundations & confidence",
    points: ["Listening & understanding", "Speaking — say it back in your own words", "No judgment, just clarity"] },
  { icon: Brain, title: "2. Understanding", subtitle: "Concepts that stick",
    points: ["Reading & explaining the topic", "Writing it out by hand (khata work)", "Why it works, not just how"] },
  { icon: Dumbbell, title: "3. Practice", subtitle: "Build real fluency",
    points: ["Targeted problem solving", "Spaced repetition", "Mistake-review loop"] },
  { icon: Trophy, title: "4. Brain Boosting", subtitle: "Exam-ready and beyond",
    points: ["Past papers & timing", "Independent thinking", "Confidence under pressure"] },
];

const skills = [
  { icon: Headphones, label: "Listening" },
  { icon: MessageSquare, label: "Speaking" },
  { icon: Eye, label: "Reading" },
  { icon: PenLine, label: "Writing" },
  { icon: Lightbulb, label: "Problem Solving" },
  { icon: Dumbbell, label: "Practice" },
  { icon: Brain, label: "Brain Boosting" },
];

function LessonPlanPage() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">The journey</span>
        <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
          <span className="text-gradient">From struggling student to confident learner</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Every student I tutor follows the same philosophical journey — but
          the pace, depth and starting point are personal to them.
        </p>
      </div>

      {/* Flow diagram */}
      <div className="mt-16">
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
          {skills.map((s, i) => (
            <li key={s.label} className="card-glow text-center">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/20 text-gold ring-1 ring-primary/40">
                <s.icon className="h-5 w-5" />
              </span>
              <p className="mt-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Step {i + 1}</p>
              <p className="mt-1 text-sm font-semibold">{s.label}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-center text-sm text-muted-foreground italic">
          Student → guided by mentor → strong, independent thinker.
        </p>
      </div>

      {/* Stages */}
      <div className="relative mt-20">
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
            <h2 className="text-2xl font-bold sm:text-3xl">Weak today, strong tomorrow</h2>
            <p className="mt-3 text-muted-foreground">
              Most tutors race ahead. I slow down where it matters, then speed
              up once the topic is genuinely understood. The result is real
              confidence, measurable progress and better grades.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link to="/contact" className="btn-primary">Start the journey <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/subjects" className="btn-outline">See subjects</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
