import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Code2, PenLine, CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/subjects")({
  head: () => ({
    meta: [
      { title: "GCSE Subjects — Maths, Computer Science & English | BrightMind Tutoring" },
      { name: "description", content: "Detailed GCSE subject coverage: Maths (algebra, geometry, trigonometry), Computer Science (Python, algorithms, binary, logic gates) and English Grammar." },
      { property: "og:title", content: "Subjects — BrightMind Tutoring" },
      { property: "og:description", content: "Full GCSE topic coverage across Maths, Computer Science and English." },
      { property: "og:url", content: "/subjects" },
    ],
    links: [{ rel: "canonical", href: "/subjects" }],
  }),
  component: SubjectsPage,
});

const subjects = [
  {
    icon: BookOpen,
    title: "GCSE Maths",
    intro: "Build a rock-solid foundation, then layer exam technique on top.",
    topics: [
      { name: "Number", items: ["Fractions & decimals", "Percentages", "Ratio & proportion", "Standard form"] },
      { name: "Algebra", items: ["Equations & formulae", "Quadratics", "Simultaneous equations", "Sequences"] },
      { name: "Geometry", items: ["Angles & polygons", "Circles", "Transformations", "Vectors"] },
      { name: "Trigonometry", items: ["SOH CAH TOA", "Sine & cosine rules", "3D problems"] },
      { name: "Exam practice", items: ["Past paper drills", "Marking technique", "Timed conditions"] },
    ],
  },
  {
    icon: Code2,
    title: "GCSE Computer Science",
    intro: "From confused to confident — Python, theory, and problem-solving.",
    topics: [
      { name: "Algorithms & flowcharts", items: ["Pseudocode", "Search & sort", "Trace tables"] },
      { name: "Python programming", items: ["Variables & data types", "Loops & conditionals", "Functions", "Files & errors"] },
      { name: "Binary & data representation", items: ["Binary, hex, denary", "Characters & ASCII", "Images & sound"] },
      { name: "Logic gates & systems", items: ["AND, OR, NOT, XOR", "Truth tables", "Boolean expressions"] },
    ],
  },
  {
    icon: PenLine,
    title: "English Grammar",
    intro: "Clear writing, strong reading, and full marks for technique.",
    topics: [
      { name: "Sentence structure", items: ["Clauses & phrases", "Punctuation", "Sentence variety"] },
      { name: "Tenses", items: ["Past, present, future", "Perfect & continuous", "Consistency"] },
      { name: "Writing skills", items: ["Descriptive writing", "Persuasive writing", "Structuring responses"] },
      { name: "Reading comprehension", items: ["Inference", "Language analysis", "PEEL paragraphs"] },
      { name: "Exam preparation", items: ["Question breakdown", "Time management", "Mark scheme thinking"] },
    ],
  },
];

function SubjectsPage() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">Subjects</span>
        <h1 className="mt-5 text-4xl font-bold sm:text-5xl"><span className="text-gradient">Three subjects. Total focus.</span></h1>
        <p className="mt-4 text-muted-foreground">
          Each subject is taught against the latest UK GCSE specifications. Pick a subject, see the topics covered, and book your first lesson.
        </p>
      </div>

      <div className="mt-16 space-y-16">
        {subjects.map((s) => (
          <div key={s.title} className="grid gap-8 lg:grid-cols-[300px_1fr] lg:items-start">
            <div className="card-glow">
              <s.icon className="h-9 w-9 text-gold" />
              <h2 className="mt-4 text-2xl font-bold">{s.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{s.intro}</p>
              <Link to="/contact" className="btn-primary mt-6 text-sm">
                Book Lesson <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {s.topics.map((t) => (
                <div key={t.name} className="rounded-2xl border border-border bg-card/60 p-5">
                  <h3 className="font-semibold text-foreground">{t.name}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {t.items.map((i) => (
                      <li key={i} className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
