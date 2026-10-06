import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FileDown,
  FileText,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  BadgeCheck,
  GraduationCap,
  Award,
  FlaskConical,
  Cpu,
  Heart,
  Languages,
  Sparkles,
  CheckCircle2,
  Plane,
  ShieldCheck,
} from "lucide-react";
import { EMAIL, PHONE_DISPLAY, PHONE_E164, TUTOR_NAME, LINKEDIN_URL } from "@/lib/site-config";

const GRAD_PDF = "/habib-graduate-cv.pdf";
const GRAD_DOCX = "/habib-graduate-cv.docx";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "My CVs — Md Habibur Rahman | Graduate CV (PDF & Word)" },
      {
        name: "description",
        content:
          "Download the graduate CV of Md Habibur Rahman (MSc IT — Cybersecurity, Monash) in PDF or Word. London-based, full UK work rights, open to internships and entry-level roles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: `${TUTOR_NAME} — Graduate CV (PDF & Word)` },
      { name: "twitter:title", content: `${TUTOR_NAME} — Graduate CV (PDF & Word)` },
      {
        property: "og:description",
        content:
          "Graduate CV for internships and entry-level roles — MSc IT (Cybersecurity), PMI project management certified, London, full UK right to work.",
      },
      {
        name: "twitter:description",
        content:
          "Graduate CV for internships and entry-level roles — MSc IT (Cybersecurity), PMI project management certified, London, full UK right to work.",
      },
    ],
  }),
  component: CvPage,
});

const coreSkills = [
  "Cybersecurity fundamentals: threats, vulnerabilities, defence-in-depth",
  "Governance, Risk & Compliance: ISO/IEC 27001, NIST CSF, UK GDPR",
  "Project management: predictive (waterfall) and Agile/Scrum delivery",
  "Networking & systems: TCP/IP, DNS, VPN, firewalls, Windows & Linux",
  "Cloud basics: AWS and Azure core services, identity and access",
  "Data & reporting: SQL queries, Excel analysis, dashboards",
  "Documentation: policies, procedures, risk registers, test evidence",
  "Stakeholder communication and technical customer support",
];

const education = [
  {
    degree: "Master of Information Technology (Cybersecurity)",
    org: "Monash University, Australia",
    period: "2022 – 2024",
    points: [
      "Coursework in cybersecurity governance, risk management, network security, secure software development and digital forensics.",
      "Completed team-based capstone and lab projects using industry tooling and Agile ways of working.",
    ],
  },
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    org: "Stamford University Bangladesh",
    period: "2011 – 2017",
    points: [
      "Foundations in programming, data structures, databases, operating systems and computer networks.",
      "Final-year software project delivered end to end from requirements to deployment and documentation.",
    ],
  },
];

const projects = [
  {
    title: "Information Security Risk Assessment (ISO/IEC 27001)",
    points: [
      "Produced an asset inventory, risk register and treatment plan for a simulated SME environment.",
      "Mapped controls to ISO/IEC 27001 Annex A and presented prioritised remediation recommendations.",
    ],
  },
  {
    title: "Secure Web Application Assessment",
    points: [
      "Tested a sample web application for common OWASP Top 10 weaknesses using OWASP ZAP and Burp Suite.",
      "Documented findings with severity ratings, business impact and clear fix guidance.",
    ],
  },
  {
    title: "Agile Team Software Project",
    points: [
      "Worked in a Scrum team across sprints, contributing to backlog refinement, reviews and retrospectives.",
      "Maintained project documentation and traceability from user stories to test results.",
    ],
  },
  {
    title: "Network Design & Hardening Lab",
    points: [
      "Designed a segmented network with VLANs, firewall rules and secure remote access.",
      "Validated configuration against baseline hardening guidance and recorded evidence.",
    ],
  },
];

const technical: [string, string][] = [
  ["Security", "OWASP ZAP, Burp Suite, Nmap, Wireshark, SIEM concepts"],
  ["Frameworks", "ISO/IEC 27001, NIST CSF, CIS Controls, UK GDPR"],
  ["Programming", "Python, Java, C, JavaScript, SQL"],
  ["Cloud & OS", "AWS, Azure, Windows Server, Linux"],
  ["Tools", "Jira, Trello, Git, Microsoft 365, Google Workspace"],
];

const soft = [
  "Communication & presenting",
  "Analytical thinking",
  "Problem solving",
  "Teamwork & collaboration",
  "Time management",
  "Attention to detail",
  "Adaptability",
  "Continuous learning",
];

function CvPage() {
  return (
    <section className="container-x py-14 md:py-20">
      <div className="mx-auto max-w-4xl">
        <span className="eyebrow">
          <FileText className="h-3.5 w-3.5" /> My CVs
        </span>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          <span className="text-gradient">Curriculum Vitae</span>
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Four tailored versions of my CV. The graduate CV below is available as both a PDF and an
          editable Word document.
        </p>

        {/* CV switcher */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-primary/50 bg-card/70 p-4">
            <div className="text-sm font-semibold text-gold">Graduate / Internship CV</div>
            <p className="mt-1 text-xs text-muted-foreground">
              Entry-level IT, cybersecurity & project roles. PDF + Word.
            </p>
            <span className="mt-3 inline-block text-xs font-medium text-foreground">You are here ↓</span>
          </div>
          <Link to="/portfolio" className="rounded-2xl border border-border bg-card/40 p-4 transition-colors hover:border-primary/40">
            <div className="text-sm font-semibold text-foreground">Cybersecurity CV</div>
            <p className="mt-1 text-xs text-muted-foreground">GRC, risk, compliance, SOC & customer success.</p>
            <span className="mt-3 inline-block text-xs font-medium text-gold">View →</span>
          </Link>
          <Link to="/about" className="rounded-2xl border border-border bg-card/40 p-4 transition-colors hover:border-primary/40">
            <div className="text-sm font-semibold text-foreground">Tutoring CV</div>
            <p className="mt-1 text-xs text-muted-foreground">Teaching experience, subjects and qualifications.</p>
            <span className="mt-3 inline-block text-xs font-medium text-gold">View →</span>
          </Link>
          <Link to="/ecommerce-cv" className="rounded-2xl border border-border bg-card/40 p-4 transition-colors hover:border-primary/40">
            <div className="text-sm font-semibold text-foreground">E-Commerce CV</div>
            <p className="mt-1 text-xs text-muted-foreground">Operations, partnerships &amp; product management. PDF + Word.</p>
            <span className="mt-3 inline-block text-xs font-medium text-gold">View →</span>
          </Link>
        </div>

        {/* CV document */}
        <article className="mt-10 overflow-hidden rounded-3xl border border-border bg-card/50 shadow-2xl backdrop-blur-xl">
          <header className="border-b border-border/70 bg-primary/10 p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground">{TUTOR_NAME}</h2>
                <p className="mt-1 text-sm font-medium text-gold">
                  Recent MSc Graduate — IT &amp; Cybersecurity · Seeking Graduate / Internship Opportunities
                </p>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-gold" /> London, United Kingdom
                  </span>
                  <a href={`tel:+${PHONE_E164}`} className="flex items-center gap-1.5 hover:text-foreground">
                    <Phone className="h-4 w-4 text-gold" /> {PHONE_DISPLAY}
                  </a>
                  <a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 hover:text-foreground">
                    <Mail className="h-4 w-4 text-gold" /> {EMAIL}
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-foreground"
                  >
                    <Linkedin className="h-4 w-4 text-gold" /> LinkedIn
                  </a>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-foreground">
                    <BadgeCheck className="h-3.5 w-3.5 text-gold" /> Full UK right to work — HPI visa, no sponsorship
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1 text-muted-foreground">
                    <Plane className="h-3.5 w-3.5 text-gold" /> Open to relocation, UK or international
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <a href={GRAD_PDF} download="Md-Habibur-Rahman-Graduate-CV.pdf" className="btn-primary text-sm">
                  <FileDown className="h-4 w-4" /> Download PDF
                </a>
                <a href={GRAD_DOCX} download="Md-Habibur-Rahman-Graduate-CV.docx" className="btn-outline text-sm">
                  <FileText className="h-4 w-4" /> Download Word (.docx)
                </a>
              </div>
            </div>
          </header>

          <div className="space-y-9 p-6 sm:p-8">
            <Block icon={Sparkles} title="Professional Profile">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Motivated Master of IT (Cybersecurity) graduate with a Computer Science &amp; Engineering
                background, seeking a graduate or internship role in IT, cybersecurity, project delivery or
                technical client-facing teams. Strong academic grounding in{" "}
                <strong className="text-foreground">
                  security governance, risk and compliance, networking and secure software practices
                </strong>
                , combined with certified project management knowledge (PMI Predictive Project Management).
                Recognised for clear communication, structured problem solving and rapid learning; comfortable
                documenting processes, analysing data and collaborating across multicultural teams.
              </p>
            </Block>

            <Block icon={ShieldCheck} title="Core Skills">
              <div className="grid gap-2 sm:grid-cols-2">
                {coreSkills.map((s) => (
                  <div key={s} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{s}</span>
                  </div>
                ))}
              </div>
            </Block>

            <Block icon={GraduationCap} title="Education">
              {education.map((e) => (
                <div key={e.degree} className="relative border-l border-border/60 pl-5 pb-6 last:pb-0">
                  <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-gold ring-2 ring-background" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-foreground">{e.degree}</h3>
                    <span className="text-xs font-medium text-muted-foreground">{e.period}</span>
                  </div>
                  <div className="text-sm text-gold/90">{e.org}</div>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Block>

            <Block icon={Award} title="Certifications">
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Predictive Project Management — PMI.org",
                  "Self-directed study in information security governance and cloud fundamentals",
                ].map((c) => (
                  <li key={c} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {c}
                  </li>
                ))}
              </ul>
            </Block>

            <Block icon={FlaskConical} title="Academic & Personal Projects">
              <div className="grid gap-3 sm:grid-cols-2">
                {projects.map((p) => (
                  <div key={p.title} className="rounded-xl border border-border bg-card/40 p-4">
                    <div className="text-sm font-semibold text-foreground">{p.title}</div>
                    <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Block>

            <Block icon={Cpu} title="Technical Skills">
              <div className="grid gap-3 sm:grid-cols-2">
                {technical.map(([k, v]) => (
                  <div key={k} className="text-sm text-muted-foreground">
                    <strong className="text-foreground">{k}:</strong> {v}
                  </div>
                ))}
              </div>
            </Block>

            <Block icon={Heart} title="Soft Skills">
              <div className="flex flex-wrap gap-2">
                {soft.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-card/60 px-3 py-1 text-sm text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Block>

            <Block icon={Languages} title="Languages & Interests">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Languages:</strong> English (Fluent) · Bengali (Native) ·
                Hindi &amp; Urdu (Conversational)
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong className="text-foreground">Interests:</strong> Cybersecurity news and CTF challenges,
                tutoring and mentoring students in maths and computer science, technology communities and
                volunteering.
              </p>
            </Block>
          </div>
        </article>

        <div className="mt-10 rounded-2xl border border-border bg-card/60 p-6 text-center">
          <h3 className="text-xl font-bold">Hiring for a graduate role or internship?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Grab the PDF for applications, or the Word file if you need an editable copy.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a href={GRAD_PDF} download="Md-Habibur-Rahman-Graduate-CV.pdf" className="btn-primary text-sm">
              <FileDown className="h-4 w-4" /> PDF
            </a>
            <a href={GRAD_DOCX} download="Md-Habibur-Rahman-Graduate-CV.docx" className="btn-outline text-sm">
              <FileText className="h-4 w-4" /> Word (.docx)
            </a>
            <a href={`mailto:${EMAIL}`} className="btn-outline text-sm">
              <Mail className="h-4 w-4" /> Email me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Block({
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
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/20 text-gold ring-1 ring-primary/40">
          <Icon className="h-4.5 w-4.5" />
        </span>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
