import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MessageCircle,
  GraduationCap,
  Sparkles,
  BookOpen,
  Code2,
  PenLine,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Award,
  Briefcase,
  FlaskConical,
  Linkedin,
  ShieldCheck,
  Cloud,
  Network,
  Cpu,
  Download,
  Users,
  Target,
  Headphones,
} from "lucide-react";
import tutorImg from "@/assets/tutor-hero.jpg";
import {
  WHATSAPP_URL,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_E164,
  TUTOR_NAME,
  TUTOR_SHORT_NAME,
  LINKEDIN_URL,
  CV_PDF_URL,
} from "@/lib/site-config";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `${TUTOR_NAME} (Habib) — CV & Portfolio · Private Home Tutor London | TutorMentor Near Me` },
      {
        name: "description",
        content:
          "Meet Habib — Master of Cybersecurity (Monash University), Bachelor in CSE (Stamford), 13+ years teaching Maths, Programming and Computer Science. Private home tutor in London for school, college and university students.",
      },
      { property: "og:title", content: `${TUTOR_NAME} (Habib) — Private Home Tutor London` },
      {
        property: "og:description",
        content:
          "Master of Cybersecurity, 13+ years teaching. Private one-to-one home tutoring in London — Maths & Computer Science.",
      },
      { property: "og:url", content: "https://tutormentor.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://tutormentor.lovable.app/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: TUTOR_NAME,
          alternateName: "Habib",
          jobTitle: "Private Home Tutor — Mathematics & Computer Science",
          email: `mailto:${EMAIL}`,
          telephone: `+${PHONE_E164}`,
          address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
          alumniOf: [
            { "@type": "CollegeOrUniversity", name: "Monash University, Australia" },
            { "@type": "CollegeOrUniversity", name: "Stamford University Bangladesh" },
          ],
          knowsAbout: ["Mathematics", "Computer Science", "Programming", "Cybersecurity", "Cloud Computing", "Databases", "Python", "Java"],
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[420px_1fr] lg:items-start">
        {/* LEFT: photo + contact card */}
        <aside className="lg:sticky lg:top-24 space-y-6">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/40 to-gold/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-2 shadow-2xl backdrop-blur-xl ring-1 ring-white/10">
              <img
                src={tutorImg}
                alt={`${TUTOR_NAME} (Habib) — private home tutor in London for Maths and Computer Science, Master of Cybersecurity`}
                title={`${TUTOR_NAME} — Private home tutor, London`}
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full rounded-2xl object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 via-transparent to-white/5" />
            </div>
          </div>

          <div className="card-glow space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-gold" />
              <span>London, United Kingdom</span>
            </div>
            <a href={`tel:+${PHONE_E164}`} className="flex items-center gap-3 hover:text-foreground">
              <Phone className="h-4 w-4 text-gold" />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 break-all hover:text-foreground">
              <Mail className="h-4 w-4 text-gold" />
              <span>{EMAIL}</span>
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-foreground"
            >
              <Linkedin className="h-4 w-4 text-gold" />
              <span>LinkedIn profile</span>
            </a>
            <div className="pt-2 text-xs text-muted-foreground">
              Available immediately · Full UK work rights · Open to relocation across the UK
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={CV_PDF_URL}
              download="Md-Habibur-Rahman-CV.pdf"
              className="btn-primary text-sm"
            >
              <Download className="h-4 w-4" /> Download CV (PDF)
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm">
              <MessageCircle className="h-4 w-4" /> Message me
            </a>
            <Link to="/contact" className="btn-outline text-sm">
              Hire me / Book a session
            </Link>
          </div>
        </aside>

        {/* RIGHT: CV body */}
        <div>
          <span className="eyebrow">
            <Sparkles className="h-3.5 w-3.5" /> About me
          </span>
          <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
            <span className="text-gradient">{TUTOR_NAME}</span>{" "}
            <span className="text-foreground/80">({TUTOR_SHORT_NAME})</span>
          </h1>
          <p className="mt-3 text-lg text-gold font-medium">
            Private Home Tutor · Mathematics & Computer Science · London, UK
          </p>

          <p className="mt-6 text-lg text-muted-foreground">
            Master of Cybersecurity graduate from <strong className="text-foreground">Monash University, Australia</strong>,
            and a Bachelor's in Computer Science & Engineering from{" "}
            <strong className="text-foreground">Stamford University Bangladesh</strong>. Over{" "}
            <strong className="text-foreground">5 years</strong> of software engineering experience and{" "}
            <strong className="text-foreground">13+ years</strong> teaching ICT, Programming, Databases and Computer
            Science to students from HSC through university level.
          </p>
          <p className="mt-4 text-muted-foreground">
            My focus as a tutor is simple: help students who struggle, lack confidence, or have been let down by
            big-class teaching — and turn that around into real GCSE exam results. I break complex topics into small,
            manageable steps, and build confidence before chasing speed.
          </p>

          <div className="mt-12 space-y-12">
            {/* EDUCATION */}
            <CVBlock icon={GraduationCap} title="Education">
              <TimelineItem
                title="Master of Cybersecurity"
                org="Monash University, Australia"
                period="2022 – 2024"
              />
              <TimelineItem
                title="Bachelor of Computer Science & Engineering"
                org="Stamford University Bangladesh"
                period="2011 – 2017"
              />
            </CVBlock>

            {/* CERTIFICATIONS */}
            <CVBlock icon={Award} title="Certifications">
              <ul className="space-y-2 text-muted-foreground">
                {[
                  "Cyber Security Management Job Simulation — ANZ Australia / Forage (Jul 2025)",
                  "Cyber Security Job Simulation — Deloitte Australia / Forage (Mar 2025)",
                  "Big Data Security and Database — Ethical Hacking (Hays)",
                  "Java Programming & Android Development — The George Washington University, USA (Mar 2018)",
                ].map((c) => (
                  <li key={c} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </CVBlock>

            {/* EXPERIENCE */}
            <CVBlock icon={Briefcase} title="Work & Teaching Experience">
              <TimelineItem
                title="Teaching Experience — Tutor / Mentor"
                org="Bangladesh & Australia"
                period="2008 – 2024"
                bullets={[
                  "Delivered ICT, Programming, Mathematics, Physics and Computer Science",
                  "Taught HSC and university-level students one-to-one and in groups",
                  "Created structured lesson plans and revision materials",
                  "Simplified complex concepts: digital logic, number systems, databases",
                ]}
              />
              <TimelineItem
                title="Customer Technical Advisor"
                org="Futu Securities Ltd · Melbourne, Australia"
                period="2024"
                bullets={[
                  "Supported users of the Moomoo trading platform",
                  "Explained charts, indicators and trading tools",
                  "Guided onboarding, market analysis and investment workflows",
                  "Explained platform security features and user protection systems",
                ]}
              />
              <TimelineItem
                title="Software Engineer"
                org="SolverCircle.com · Dhaka, Bangladesh"
                period="2014 – 2020"
                bullets={[
                  "Developed web applications and supported full-stack systems",
                  "Software testing, debugging and system analysis",
                  "IoT R&D with Arduino and embedded systems",
                  "Database management and technical documentation",
                ]}
              />
              <TimelineItem
                title="Industry Experience — Agile Software Engineering (UN Sustainable Project)"
                org="FIT5120 / FIT5122 · Monash University, Australia"
                period="2024"
                bullets={[
                  "Agile/Scrum team building GreenMelb, aligned with UN SDG 11 & SDG 4",
                  "Sprint planning, user stories, retrospectives, acceptance criteria",
                  "Persona design, empathy mapping, ethics canvas, system architecture",
                  "Security testing (SQLi, XSS, CSRF) using OWASP ZAP, Burp Suite, Nmap",
                  "AWS cloud architecture and secure SDLC principles",
                ]}
              />
            </CVBlock>

            {/* PROJECTS */}
            <CVBlock icon={FlaskConical} title="Research & Projects">
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Agile Software Engineering (UN SDG)", "React, Python, REST API, Mapbox, AWS Lambda & S3"],
                  ["Cloud-Based Image Recognition", "YOLO, Python, Flask, Oracle Cloud, Docker, Kubernetes"],
                  ["University Management System", "Agile SDLC, SQL, system design"],
                  ["E-Library Web Application", "XAMPP, MySQL, PHP, JavaScript, HTML, CSS"],
                  ["Enterprise Network Design", "Networking, VLANs, security architecture"],
                  ["IoT Home Automation System", "Arduino, embedded C++, sensor integration"],
                  ["Database Security Research", "Python, SQL security, threat analysis, IT forensics"],
                  ["Cryptography & Network Security", "Encryption, hashing, authentication, attack simulation"],
                ].map(([t, d]) => (
                  <li key={t} className="rounded-xl border border-border bg-card/40 p-4">
                    <div className="font-semibold text-foreground">{t}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{d}</div>
                  </li>
                ))}
              </ul>
            </CVBlock>

            {/* TUTORING SUBJECTS */}
            <div>
              <h2 className="text-2xl font-bold">Subjects I Tutor</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <SkillCard
                  icon={BookOpen}
                  title="Mathematics (KS3, GCSE, A-Level)"
                  items={["Algebra & equations", "Geometry & trigonometry", "Statistics & probability", "Calculus basics", "Exam technique"]}
                />
                <SkillCard
                  icon={Code2}
                  title="Computer Science (School → University)"
                  items={["Python, Java, JavaScript, PHP", "Algorithms & data structures", "Databases (SQL/MySQL)", "Cybersecurity & cloud", "Project work & assignments"]}
                />
              </div>
            </div>

            {/* TECHNICAL SKILLS */}
            <CVBlock icon={Cpu} title="Technical Skills">
              <div className="grid gap-4 sm:grid-cols-2">
                <SkillGroup
                  icon={Code2}
                  label="Programming"
                  tags={["C", "C++", "Java", "Python", "PHP", "JavaScript", "SQL", "MySQL", "HTML", "CSS"]}
                />
                <SkillGroup
                  icon={ShieldCheck}
                  label="Cybersecurity"
                  tags={["OWASP ZAP", "Burp Suite", "Nmap", "Nikto", "SQLMap", "Metasploit"]}
                />
                <SkillGroup
                  icon={Cloud}
                  label="Cloud & DevOps"
                  tags={["AWS Lambda", "S3", "EC2", "Docker", "Kubernetes", "Oracle Cloud"]}
                />
                <SkillGroup icon={BookOpen} label="Databases" tags={["MySQL", "MongoDB", "Oracle"]} />
                <SkillGroup
                  icon={Network}
                  label="Networking"
                  tags={["TCP/IP", "VLANs", "GNS3", "Wireshark"]}
                />
                <SkillGroup
                  icon={Cpu}
                  label="Embedded / IoT"
                  tags={["Arduino", "ESP32", "C++", "NodeMCU"]}
                />
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <strong className="text-foreground">Tools:</strong> Git, Trello, LeanKit, MS Teams
              </div>
            </CVBlock>

            {/* LANGUAGES */}
            <CVBlock icon={PenLine} title="Languages">
              <ul className="flex flex-wrap gap-2">
                {[
                  "English (Fluent)",
                  "Bengali (Native)",
                  "Hindi",
                  "Urdu",
                ].map((l) => (
                  <li
                    key={l}
                    className="rounded-full border border-border bg-card/60 px-3 py-1 text-sm text-muted-foreground"
                  >
                    {l}
                  </li>
                ))}
              </ul>
            </CVBlock>
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-card/60 p-6">
            <h3 className="text-xl font-bold">Ready to see if we're a good fit?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Book a free 30-minute trial lesson — no obligation.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary text-sm">
                Book Free Trial
              </Link>
              <Link to="/pricing" className="btn-outline text-sm">
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CVBlock({
  icon: Icon,
  title,
  children,
}: {
  icon: any;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/20 text-gold ring-1 ring-primary/40">
          <Icon className="h-5 w-5" />
        </span>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function TimelineItem({
  title,
  org,
  period,
  bullets,
}: {
  title: string;
  org: string;
  period: string;
  bullets?: string[];
}) {
  return (
    <div className="relative border-l border-border/60 pl-5 pb-6 last:pb-0">
      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-gold ring-2 ring-background" />
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-semibold text-foreground">{title}</h3>
        <span className="text-xs font-medium text-muted-foreground">{period}</span>
      </div>
      <div className="text-sm text-gold/90">{org}</div>
      {bullets && (
        <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SkillCard({ icon: Icon, title, items }: { icon: any; title: string; items: string[] }) {
  return (
    <div className="card-glow">
      <Icon className="h-6 w-6 text-gold" />
      <h3 className="mt-3 font-semibold">{title}</h3>
      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i}>• {i}</li>
        ))}
      </ul>
    </div>
  );
}

function SkillGroup({ icon: Icon, label, tags }: { icon: any; label: string; tags: string[] }) {
  return (
    <div className="rounded-xl border border-border bg-card/40 p-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <Icon className="h-4 w-4 text-gold" />
        {label}
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-md border border-border/60 bg-background/40 px-2 py-0.5 text-xs text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
