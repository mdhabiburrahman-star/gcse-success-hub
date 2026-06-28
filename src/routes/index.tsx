import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles, MessageCircle, GraduationCap, Star, ShieldCheck, Target,
  BookOpen, Code2, PenLine, ArrowRight, CheckCircle2, Quote,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { WHATSAPP_URL } from "@/lib/site-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GCSE Maths, Computer Science & English Tutor UK | BrightMind Tutoring" },
      { name: "description", content: "Improve your GCSE grades with personal 1-to-1 tutoring in Maths, Computer Science and English. UK curriculum, confidence-first teaching. Book a lesson today." },
      { property: "og:title", content: "GCSE Tutor UK — Maths, Computer Science, English" },
      { property: "og:description", content: "1-to-1 GCSE tutoring focused on struggling students. Step-by-step, confidence first." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "BrightMind Tutoring",
        areaServed: "United Kingdom",
        description: "1-to-1 GCSE tutoring in Maths, Computer Science and English.",
      }),
    }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-x grid gap-12 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> UK GCSE Specialist Tutor</span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
              <span className="text-gradient">Improve Your GCSE Grades</span>
              <br />with Personal 1-to-1 Tutoring in Maths, Computer Science & English
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Built for students who struggle, lose confidence, or fall behind.
              Step-by-step lessons that turn weak areas into exam strengths —
              with a calm, patient tutor who actually cares.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Book a Lesson <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle className="h-4 w-4" /> WhatsApp Chat
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> DBS-checked tutor</div>
              <div className="flex items-center gap-2"><Star className="h-4 w-4 text-gold" /> 5-star parent feedback</div>
              <div className="flex items-center gap-2"><Target className="h-4 w-4 text-gold" /> Grade-focused method</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/40 via-fuchsia-500/20 to-gold/20 blur-3xl" />
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
              <img
                src={heroImg}
                alt="UK GCSE tutor smiling at desk with laptop"
                width={1536}
                height={1024}
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden sm:block">
              <div className="card-glow w-56">
                <div className="flex items-center gap-2 text-gold"><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /></div>
                <p className="mt-2 text-sm">"My son went from a 4 to a 7 in Maths in one term."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-pad">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Why parents choose us</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">A teaching approach built around your child</h2>
            <p className="mt-3 text-muted-foreground">
              No one-size-fits-all worksheets. Every lesson is tailored to what your child actually needs.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Target, title: "Personalised learning", text: "Every plan is shaped around your child's grade target, weak topics and learning style." },
              { icon: GraduationCap, title: "Step-by-step teaching", text: "Hard topics broken into small, confidence-building steps — no skipping ahead." },
              { icon: BookOpen, title: "UK GCSE aligned", text: "Lessons mirror the exact AQA, Edexcel and OCR specifications students sit." },
              { icon: ShieldCheck, title: "Confidence first", text: "We rebuild self-belief before chasing speed. Confident students score higher." },
            ].map((b) => (
              <div key={b.title} className="card-glow">
                <b.icon className="h-7 w-7 text-gold" />
                <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBJECTS PREVIEW */}
      <section className="section-pad">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <span className="eyebrow">Subjects taught</span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Three core GCSE subjects, taught with depth</h2>
            </div>
            <Link to="/subjects" className="text-sm font-semibold text-gold hover:underline">
              View all subjects →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: BookOpen, title: "GCSE Maths", topics: ["Number", "Algebra", "Geometry", "Trigonometry"] },
              { icon: Code2, title: "GCSE Computer Science", topics: ["Algorithms", "Python", "Binary & data", "Logic gates"] },
              { icon: PenLine, title: "English Grammar", topics: ["Sentence structure", "Tenses", "Writing skills", "Reading"] },
            ].map((s) => (
              <div key={s.title} className="card-glow flex flex-col">
                <s.icon className="h-8 w-8 text-gold" />
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {s.topics.map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-outline mt-6 text-sm self-start">
                  Book lesson <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Parents & students</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Real results, real confidence</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { name: "Sarah, parent", quote: "My daughter went from dreading Maths homework to actually asking when her next lesson is. Grades jumped two levels." },
              { name: "Daniel, Year 11", quote: "Computer Science finally clicked. Python and logic gates aren't scary anymore — I actually enjoy them." },
              { name: "Aisha, parent", quote: "Patient, professional and properly prepared. Worth every penny — my son got a grade 8 in English." },
            ].map((t) => (
              <figure key={t.name} className="card-glow">
                <Quote className="h-6 w-6 text-gold" />
                <blockquote className="mt-3 text-sm text-foreground/90">"{t.quote}"</blockquote>
                <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  — {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="section-pad">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/30 via-background to-background p-10 sm:p-14">
            <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl">Start improving your grades today</h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  Book a lesson and we'll assess your child's level, agree a grade target, and outline the next 4 lessons.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">Book a Lesson</Link>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
