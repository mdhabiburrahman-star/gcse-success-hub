import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, MessageCircle, GraduationCap, Sparkles, BookOpen, Code2, PenLine, CheckCircle2 } from "lucide-react";
import tutorImg from "@/assets/tutor.jpg";
import { WHATSAPP_URL } from "@/lib/site-config";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Tutor — GCSE Maths, CS & English | BrightMind Tutoring" },
      { name: "description", content: "Meet your UK GCSE tutor: 1-to-1 specialist in Maths, Computer Science and English, focused on students who struggle or lack confidence." },
      { property: "og:title", content: "About — BrightMind Tutoring" },
      { property: "og:description", content: "UK GCSE specialist tutor — confidence-first, step-by-step teaching." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="container-x py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[420px_1fr] lg:items-start">
          <div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/40 to-gold/30 blur-2xl" />
              <img
                src={tutorImg}
                alt="Portrait of the BrightMind tutor"
                width={900}
                height={1100}
                loading="lazy"
                className="w-full rounded-3xl border border-border object-cover shadow-2xl"
              />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#cv" className="btn-outline text-sm">
                <Download className="h-4 w-4" /> View Full CV
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm">
                <MessageCircle className="h-4 w-4" /> Message me
              </a>
            </div>
          </div>

          <div>
            <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> About me</span>
            <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
              <span className="text-gradient">Your dedicated GCSE tutor</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              I'm a UK-based private tutor specialising in GCSE Maths, Computer
              Science and English Grammar. My focus is simple: help students who
              struggle, lack confidence, or have been let down by big-class
              teaching — and turn that around into real exam results.
            </p>

            <div id="cv" className="mt-12 space-y-10">
              <CVBlock
                icon={GraduationCap}
                title="Profile"
                items={[
                  "GCSE Maths, Computer Science & English Tutor (UK Curriculum)",
                  "Focused on students who struggle or lack confidence",
                  "1-to-1 personalised tutoring approach, online and in-person (Essex)",
                ]}
              />
              <CVBlock
                icon={Sparkles}
                title="Teaching Philosophy"
                items={[
                  "Break complex topics into simple, manageable steps",
                  "Build confidence before chasing speed",
                  "Encourage students to ask questions without fear",
                  "Focus on exam success through structured, paced learning",
                ]}
              />
              <div>
                <h2 className="text-2xl font-bold">Skills</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <SkillCard icon={BookOpen} title="GCSE Maths" items={["Algebra", "Geometry", "Trigonometry", "Number & ratio"]} />
                  <SkillCard icon={Code2} title="GCSE Computer Science" items={["Algorithms", "Python", "Binary & data", "Logic gates"]} />
                  <SkillCard icon={PenLine} title="English Grammar" items={["Writing", "Reading", "Sentence structure", "Tenses"]} />
                </div>
              </div>
              <CVBlock
                icon={CheckCircle2}
                title="Approach"
                items={[
                  "Bespoke lesson plans built around the student",
                  "Clear weekly progression with measurable outcomes",
                  "Regular parent updates and progress reporting",
                  "Honest, supportive feedback — no fluff",
                ]}
              />
            </div>

            <div className="mt-12 rounded-2xl border border-border bg-card/60 p-6">
              <h3 className="text-xl font-bold">Ready to see if we're a good fit?</h3>
              <p className="mt-2 text-sm text-muted-foreground">Book a free 30-minute trial lesson — no obligation.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary text-sm">Book Free Trial</Link>
                <Link to="/pricing" className="btn-outline text-sm">See pricing</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CVBlock({ icon: Icon, title, items }: { icon: any; title: string; items: string[] }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/20 text-gold ring-1 ring-primary/40">
          <Icon className="h-5 w-5" />
        </span>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <ul className="mt-4 space-y-2 text-muted-foreground">
        {items.map((i) => (
          <li key={i} className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary" /> <span>{i}</span></li>
        ))}
      </ul>
    </div>
  );
}

function SkillCard({ icon: Icon, title, items }: { icon: any; title: string; items: string[] }) {
  return (
    <div className="card-glow">
      <Icon className="h-6 w-6 text-gold" />
      <h3 className="mt-3 font-semibold">{title}</h3>
      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
        {items.map((i) => <li key={i}>• {i}</li>)}
      </ul>
    </div>
  );
}
