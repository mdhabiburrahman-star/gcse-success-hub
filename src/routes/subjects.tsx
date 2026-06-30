import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Code2, CheckCircle2, ArrowRight, Clock } from "lucide-react";

export const Route = createFileRoute("/subjects")({
  head: () => ({
    meta: [
      { title: "Tutoring Services London — Maths & Computer Science | TutorMentor Near Me" },
      { name: "description", content: "Private home tutoring services in London. Maths (KS3, GCSE, A-Level) and Computer Science (school, college, university). One-to-one face-to-face only — I visit your home." },
      { name: "keywords", content: "private maths tutor London, computer science tutor London, A-Level computer science tutor, GCSE maths tutor, university programming tutor, home tuition London" },
      { property: "og:title", content: "Tutoring Services — TutorMentor Near Me" },
      { property: "og:description", content: "Maths and Computer Science home tutoring in London — book by topic." },
      { property: "og:url", content: "https://tutormentor.lovable.app/subjects" },
    ],
    links: [{ rel: "canonical", href: "https://tutormentor.lovable.app/subjects" }],
  }),
  component: SubjectsPage,
});

const maths = {
  icon: BookOpen,
  title: "Mathematics",
  intro: "UK curriculum aligned. KS3, GCSE and A-Level — built around your weak topics and exam targets.",
  levels: ["School — KS3", "GCSE", "A-Level"],
  topics: [
    "Algebra & equations",
    "Geometry & shape",
    "Trigonometry",
    "Statistics & probability",
    "Calculus basics (A-Level)",
    "Problem-solving skills",
    "Exam preparation & past papers",
    "Marking technique & timing",
  ],
};

const cs = {
  icon: Code2,
  title: "Computer Science",
  intro: "School, college and university level. Programming, theory, projects and exam prep — taught from first principles.",
  levels: ["School", "College", "University"],
  topics: [
    "Programming — Python, Java, JavaScript, PHP",
    "Data structures and algorithms",
    "Databases — SQL & MySQL",
    "Cybersecurity fundamentals",
    "Cloud computing basics — AWS, Oracle",
    "Software engineering, Agile & project work",
    "University assignments & coursework",
    "Exam preparation & revision",
  ],
};

function SubjectSection({ subject }: { subject: typeof maths }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-start">
      <div className="card-glow">
        <subject.icon className="h-9 w-9 text-gold" />
        <h2 className="mt-4 text-2xl font-bold">{subject.title}</h2>
        <p className="mt-3 text-sm text-muted-foreground">{subject.intro}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {subject.levels.map((l) => (
            <span key={l} className="rounded-md border border-border/60 bg-background/40 px-2 py-1 text-xs font-medium text-foreground">
              {l}
            </span>
          ))}
        </div>
        <Link to="/contact" className="btn-primary mt-6 text-sm">
          Request Support <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {subject.topics.map((t) => (
          <div key={t} className="flex items-start justify-between gap-3 rounded-2xl border border-border bg-card/60 p-4">
            <div className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{t}</span>
            </div>
            <Link
              to="/contact"
              className="text-xs font-semibold text-gold whitespace-nowrap hover:underline"
            >
              Book topic →
            </Link>
          </div>
        ))}
        <div className="sm:col-span-2 mt-2 flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5 text-gold" /> Minimum 2-hour session per booking.
        </div>
      </div>
    </div>
  );
}

function SubjectsPage() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">Tutoring services</span>
        <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
          <span className="text-gradient">Maths & Computer Science — at your home</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Pick a subject, choose the topics you need help with, and request a
          home visit. All sessions are face-to-face in your London home — no
          online classes.
        </p>
      </div>

      <div className="mt-16 space-y-20">
        <SubjectSection subject={maths} />
        <SubjectSection subject={cs} />
      </div>

      <div className="mt-20 rounded-3xl border border-border bg-card/60 p-8 sm:p-12 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">Don't see your exact topic?</h2>
        <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
          If your topic is in the wider Maths or Computer Science curriculum,
          I almost certainly cover it. Send me a quick message and I'll confirm.
        </p>
        <Link to="/contact" className="btn-primary mt-6 text-sm inline-flex">
          Ask about a topic <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
