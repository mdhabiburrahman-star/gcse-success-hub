import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles, MessageCircle, BookOpen, ShieldCheck, Target,
  Code2, ArrowRight, CheckCircle2, Quote, Headphones, MessageSquare,
  Eye, PenLine, Brain, Dumbbell, Lightbulb, Home, MapPin,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { WHATSAPP_URL, BRAND_NAME } from "@/lib/site-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Private Home Tutor London — Maths & Computer Science | TutorMentor Near Me" },
      { name: "description", content: "Private one-to-one home tutor in London for Mathematics and Computer Science. Face-to-face tuition for school, GCSE, A-Level, college and university students. I come to you." },
      { name: "keywords", content: "private home tutor London, math tutor near me, computer science tutor London, one to one tutoring London, home tuition London, GCSE maths tutor, A-Level computer science tutor, university programming tutor, TutorMentor Near Me" },
      { property: "og:title", content: "Private Home Tutor London — Maths & Computer Science" },
      { property: "og:description", content: "Face-to-face one-to-one home tutoring in London. Maths & Computer Science for school, college and university students." },
      { property: "og:url", content: "https://tutormentor.lovable.app/" },
      { property: "og:image", content: "https://tutormentor.lovable.app/og-home.jpg" },
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
        serviceType: ["Private home tutoring", "Maths tutoring", "Computer Science tutoring"],
      }),
    }],
  }),
  component: HomePage,
});

const journey = [
  { icon: Headphones, label: "Listening" },
  { icon: MessageSquare, label: "Speaking" },
  { icon: Eye, label: "Reading" },
  { icon: PenLine, label: "Writing" },
  { icon: Lightbulb, label: "Problem Solving" },
  { icon: Dumbbell, label: "Practice" },
  { icon: Brain, label: "Brain Boosting" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-x grid gap-12 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> London · Home tuition · Maths & CS</span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
              <span className="text-gradient">Private One-to-One Home Tutoring in London</span>
              <br /><span className="text-foreground/85 text-3xl sm:text-4xl md:text-5xl">Maths & Computer Science</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              I come to you — personalised, patient and practical tutoring at your
              home in London. No online classes. Just real, face-to-face support
              that turns weak students into confident, strong learners.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Book a Home Tutor in London <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="btn-outline">
                View My CV & Portfolio
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Home className="h-4 w-4 text-gold" /> I visit your home</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Covering London</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> 13+ years teaching</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/40 via-[oklch(0.5_0.13_200/30%)] to-gold/20 blur-3xl" />
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl float-y">
              <img
                src={heroImg}
                alt="Private home tutor in London helping a student with Maths and Computer Science on a laptop, with notebook, pencil and textbooks on a cosy home study desk"
                title="Private home tutor London — Maths & Computer Science (TutorMentor Near Me)"
                width={1536}
                height={1024}
                loading="eager"
                fetchPriority="high"
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden sm:block">
              <div className="card-glow w-60">
                <p className="text-sm">"Weak in Maths to a confident A-Level student in one year."</p>
                <p className="mt-2 text-xs text-gold font-semibold">— parent, North London</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY POINTS */}
      <section className="section-pad">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">What I offer</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Calm, personal, face-to-face tutoring</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Home, title: "Home visits only", text: "I travel to your home in London. No online lessons — students learn best in their own focused environment." },
              { icon: Target, title: "Personalised plan", text: "Every lesson is built around your level, your weak topics, and your real exam targets." },
              { icon: Brain, title: "Confidence first", text: "I rebuild self-belief before chasing speed. Weak learners become strong, independent thinkers." },
              { icon: BookOpen, title: "UK curriculum", text: "KS3, GCSE, A-Level, college and university — aligned with what you actually sit in your exam." },
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

      {/* JOURNEY FLOW */}
      <section className="section-pad">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">The student journey</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">From confusion to confidence</h2>
            <p className="mt-3 text-muted-foreground">
              A philosophical, structured path I guide every student through —
              one small step at a time.
            </p>
          </div>

          <div className="mt-14 relative">
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
              {journey.map((j, i) => (
                <li key={j.label} className="relative">
                  <div className="card-glow text-center">
                    <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/20 text-gold ring-1 ring-primary/40">
                      <j.icon className="h-5 w-5" />
                    </span>
                    <p className="mt-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Step {i + 1}</p>
                    <p className="mt-1 text-sm font-semibold">{j.label}</p>
                  </div>
                  {i < journey.length - 1 && (
                    <span className="flow-line absolute top-1/2 right-[-12px] hidden h-px w-6 bg-gradient-to-r from-gold/70 to-transparent lg:block" />
                  )}
                </li>
              ))}
            </ol>
            <p className="mt-8 text-center text-sm text-muted-foreground italic">
              Student → guided by mentor → strong, exam-ready learner.
            </p>
          </div>
        </div>
      </section>

      {/* SUBJECTS PREVIEW */}
      <section className="section-pad">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <span className="eyebrow">Subjects taught</span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Two subjects. Real depth.</h2>
            </div>
            <Link to="/subjects" className="text-sm font-semibold text-gold hover:underline">
              See full topic list →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                icon: BookOpen,
                title: "Mathematics (UK curriculum)",
                levels: "KS3 · GCSE · A-Level",
                topics: ["Algebra & equations", "Geometry & trigonometry", "Statistics & probability", "Calculus basics", "Exam practice & problem solving"],
              },
              {
                icon: Code2,
                title: "Computer Science",
                levels: "School · College · University",
                topics: ["Python, Java, JavaScript, PHP", "Data structures & algorithms", "Databases (SQL/MySQL)", "Cybersecurity & cloud (AWS, Oracle)", "Software engineering & Agile projects"],
              },
            ].map((s) => (
              <div key={s.title} className="card-glow flex flex-col">
                <s.icon className="h-8 w-8 text-gold" />
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-gold/80">{s.levels}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {s.topics.map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-outline mt-6 text-sm self-start">
                  Request Support by Topic <ArrowRight className="h-4 w-4" />
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
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Real progress in real homes</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { name: "Sarah, parent — Camden", quote: "He travels to our home every week. My son went from dreading Maths to actually leading his class." },
              { name: "Daniel, university student", quote: "Python and data structures finally clicked. Habib breaks everything down without making you feel stupid." },
              { name: "Aisha, parent — East London", quote: "Patient, professional and on-time every visit. We tried online tutors — nothing worked like having him here in person." },
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
                <h2 className="text-3xl font-bold sm:text-4xl">Ready for a tutor who visits your home?</h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  Tell me your level, your subject and your London area. I'll
                  reply with availability and a clear plan for the first session.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">Book a Home Tutor</Link>
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
