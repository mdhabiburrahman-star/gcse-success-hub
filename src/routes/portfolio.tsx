import { createFileRoute } from "@tanstack/react-router";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ShieldCheck,
  GraduationCap,
  Award,
  Briefcase,
  Sparkles,
  CheckCircle2,
  FlaskConical,
  Cpu,
  Languages,
  Heart,
} from "lucide-react";
import {
  EMAIL,
  PHONE_DISPLAY,
  PHONE_E164,
  TUTOR_NAME,
  LINKEDIN_URL,
} from "@/lib/site-config";

const CYBER_CV_PDF = "/habib-cybersecurity-cv.pdf";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Cybersecurity CV — Md Habibur Rahman | London" },
      {
        name: "description",
        content:
          "Entry-level cybersecurity graduate CV — GRC, Risk, Compliance, SOC & Customer Success roles in London. ATS-optimised. Download PDF.",
      },
      { property: "og:title", content: `${TUTOR_NAME} — Cybersecurity CV` },
      {
        property: "og:description",
        content:
          "ATS-friendly cybersecurity graduate CV for GRC, Risk, Compliance, SOC Analyst and Technical Customer Success roles in London.",
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" /> Cybersecurity Portfolio
            </span>
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
              <span className="text-gradient">{TUTOR_NAME}</span>
            </h1>
            <p className="mt-2 text-lg text-gold font-medium">
              Cybersecurity Graduate — GRC · Risk · Compliance · SOC · Customer Success
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-gold" /> London, UK</span>
              <a href={`tel:+${PHONE_E164}`} className="flex items-center gap-1.5 hover:text-foreground">
                <Phone className="h-4 w-4 text-gold" /> {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 hover:text-foreground">
                <Mail className="h-4 w-4 text-gold" /> {EMAIL}
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-foreground">
                <Linkedin className="h-4 w-4 text-gold" /> LinkedIn
              </a>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Full UK Work Rights · Available Immediately · Open to relocation
            </p>
          </div>
          <a href={CYBER_CV_PDF} download="Md-Habibur-Rahman-Cybersecurity-CV.pdf" className="btn-primary text-sm">
            <Download className="h-4 w-4" /> Download PDF CV
          </a>
        </div>

        <div className="mt-10 space-y-10">
          <Block icon={Sparkles} title="Professional Summary">
            <p className="text-muted-foreground">
              Master of Cybersecurity graduate (Monash University) with a strong academic foundation in{" "}
              <strong className="text-foreground">Governance, Risk & Compliance (GRC), ISO 27001, NIST CSF, GDPR</strong>,
              audit & assurance, SOC/SIEM fundamentals and human-factor security. Combines 5+ years of software
              engineering and 13+ years of teaching/mentoring with excellent stakeholder communication,
              documentation and analytical skills. Seeking an{" "}
              <strong className="text-foreground">entry-level GRC, compliance, risk, SOC or technical customer
              success role</strong> in London where academic knowledge, transferable skills and hands-on project
              experience can deliver immediate value.
            </p>
          </Block>

          <Block icon={ShieldCheck} title="Key Skills">
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                "Governance, Risk & Compliance (GRC)",
                "ISO 27001 · NIST CSF · CIS Controls",
                "UK GDPR · Data Protection Act 2018",
                "Audit & Assurance · Controls Testing",
                "SOC Fundamentals · SIEM Concepts",
                "Incident Response Basics",
                "Human-Factor Security · Awareness",
                "Scam, Phishing & Fraud Prevention",
                "Technical Customer Success",
                "Technical Account Management",
                "Stakeholder Communication",
                "Policy Writing & Documentation",
              ].map((s) => (
                <div key={s} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{s}</span>
                </div>
              ))}
            </div>
          </Block>

          <Block icon={GraduationCap} title="Education">
            <Item title="Master of Cybersecurity" org="Monash University, Australia" period="2022 – 2024" />
            <Item
              title="Bachelor of Computer Science & Engineering"
              org="Stamford University Bangladesh"
              period="2011 – 2017"
            />
          </Block>

          <Block icon={ShieldCheck} title="Relevant Academic Knowledge">
            <ul className="space-y-2 text-muted-foreground text-sm">
              {[
                "Information security governance frameworks: ISO/IEC 27001, NIST CSF, CIS Controls",
                "Data protection & privacy: UK GDPR, Data Protection Act 2018",
                "Risk management lifecycle: identification, assessment, treatment, monitoring",
                "Audit & assurance principles, controls testing and evidence collection",
                "Human-factor cybersecurity, security awareness and behavioural risk",
                "Incident response basics, SOC operations and SIEM fundamentals (log analysis, alert triage)",
                "Scam, phishing and fraud prevention; social-engineering defences",
                "Cryptography, network security, digital forensics and secure SDLC",
              ].map((s) => (
                <li key={s} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />{s}</li>
              ))}
            </ul>
          </Block>

          <Block icon={FlaskConical} title="Key Academic Projects">
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                ["Security Policy & Risk Assessment (ISO 27001)", "Authored security policies, risk register and treatment plan."],
                ["Audit & Controls Coursework", "Controls assessment vs NIST CSF; findings and remediation report."],
                ["Agile Secure SDLC Project (UN SDG)", "Scrum delivery; OWASP ZAP, Burp Suite, Nmap security testing."],
                ["Cryptography & Network Security", "Implemented encryption/hashing; simulated attacks & mitigations."],
                ["Database Security & Digital Forensics", "Threat analysis, evidence handling, incident documentation."],
                ["Cloud-Based Image Recognition (Secure)", "Docker/Kubernetes deployment with security review."],
              ].map(([t, d]) => (
                <li key={t} className="rounded-xl border border-border bg-card/40 p-4">
                  <div className="font-semibold text-foreground text-sm">{t}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{d}</div>
                </li>
              ))}
            </ul>
          </Block>

          <Block icon={Award} title="Certifications (In Progress)">
            <ul className="space-y-2 text-muted-foreground text-sm">
              {[
                "CompTIA Security+ (in progress)",
                "ISO/IEC 27001 Lead Implementer (in progress)",
                "ITIL 4 Foundation (in progress)",
                "Completed: Cyber Security Management Simulation — ANZ / Forage (2025)",
                "Completed: Deloitte Cyber Security Simulation — Forage (2025)",
              ].map((c) => (
                <li key={c} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{c}</li>
              ))}
            </ul>
          </Block>

          <Block icon={Cpu} title="Technical Skills">
            <div className="grid gap-3 sm:grid-cols-2 text-sm text-muted-foreground">
              <div><strong className="text-foreground">GRC Tooling Concepts:</strong> Risk registers, policy repositories, control libraries</div>
              <div><strong className="text-foreground">Security Tools:</strong> OWASP ZAP, Burp Suite, Nmap, Wireshark, SIEM basics</div>
              <div><strong className="text-foreground">Cloud & Networking:</strong> AWS, Oracle Cloud, TCP/IP, VLANs</div>
              <div><strong className="text-foreground">Collaboration:</strong> MS Office, Jira, Trello, Confluence-style docs, Git</div>
            </div>
          </Block>

          <Block icon={Briefcase} title="Achievements & Transferable Experience">
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" /><span><strong className="text-foreground">13+ years tutoring & mentoring</strong> — delivered ICT, programming and security-awareness sessions; strong training and communication skills transferable to customer success and awareness roles.</span></li>
              <li className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" /><span><strong className="text-foreground">Customer Technical Advisor</strong> at Futu Securities (2024) — supported users on a regulated financial platform; explained security features and handled escalations.</span></li>
              <li className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" /><span>Delivered security-awareness presentations covering phishing, scams and safe online behaviour.</span></li>
              <li className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" /><span>Completed multiple industry job simulations (ANZ, Deloitte) covering incident response, risk and compliance workflows.</span></li>
            </ul>
          </Block>

          <Block icon={Heart} title="Soft Skills">
            <div className="flex flex-wrap gap-2">
              {["Communication", "Training & Mentoring", "Leadership", "Analytical Thinking", "Problem Solving", "Time Management", "Cross-Cultural Collaboration", "Attention to Detail"].map((s) => (
                <span key={s} className="rounded-full border border-border bg-card/60 px-3 py-1 text-sm text-muted-foreground">{s}</span>
              ))}
            </div>
          </Block>

          <Block icon={Languages} title="Interests & Languages">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Interests:</strong> Governance, Risk & Compliance · Audit · Human Factors · Policy · Cybercrime & Fraud Prevention · Customer Success
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              <strong className="text-foreground">Languages:</strong> English (Fluent) · Bengali (Native) · Hindi · Urdu
            </p>
          </Block>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card/60 p-6 text-center">
          <h3 className="text-xl font-bold">Hiring for a GRC, SOC or Customer Success role?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Download the ATS-optimised PDF version, or reach out directly.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a href={CYBER_CV_PDF} download="Md-Habibur-Rahman-Cybersecurity-CV.pdf" className="btn-primary text-sm">
              <Download className="h-4 w-4" /> Download PDF CV
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
              <Linkedin className="h-4 w-4" /> LinkedIn
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

function Block({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
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

function Item({ title, org, period }: { title: string; org: string; period: string }) {
  return (
    <div className="relative border-l border-border/60 pl-5 pb-6 last:pb-0">
      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-gold ring-2 ring-background" />
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-semibold text-foreground">{title}</h3>
        <span className="text-xs font-medium text-muted-foreground">{period}</span>
      </div>
      <div className="text-sm text-gold/90">{org}</div>
    </div>
  );
}
