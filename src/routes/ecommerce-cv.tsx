import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, FileDown, FileText, Linkedin, Mail, Phone, MapPin, BriefcaseBusiness } from "lucide-react";
import { Button } from "@/components/ui/button";
import cv from "@/lib/ecommerce-cv.json";

export const Route = createFileRoute("/ecommerce-cv")({
  head: () => ({ meta: [
    { title: "E-Commerce CV — Md Habibur Rahman | TutorMentor" },
    { name: "description", content: "Md Habibur Rahman's e-commerce operations and partnership CV: Shopify, product management, client relations and project coordination. Download PDF or Word." },
    { property: "og:title", content: "Md Habibur Rahman — E-Commerce Operations CV" },
    { property: "og:description", content: "E-commerce operations, partnerships and product delivery experience. View the CV and download PDF or Word versions." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: EcommerceCvPage,
});

function Downloads() {
  return <div className="flex flex-wrap gap-3">
    <Button asChild><a href="/habib-ecommerce-cv.pdf" download="Md-Habibur-Rahman-Ecommerce-CV.pdf"><FileDown />Download PDF</a></Button>
    <Button variant="outline" asChild><a href="/habib-ecommerce-cv.docx" download="Md-Habibur-Rahman-Ecommerce-CV.docx"><FileText />Download Word</a></Button>
  </div>;
}

function Points({ items }: { items: string[] }) {
  return <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">{items.map(item => <li key={item}>{item}</li>)}</ul>;
}

function EcommerceCvPage() {
  return <main className="container-x py-10 md:py-16">
    <div className="mx-auto max-w-4xl">
      <Button variant="ghost" asChild><Link to="/cv"><ArrowLeft />My CVs</Link></Button>
      <header className="mt-6 border-b border-border pb-8">
        <div className="flex items-center gap-2 text-sm font-medium text-gold"><BriefcaseBusiness className="h-4 w-4" />E-Commerce CV</div>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Md Habibur Rahman</h1>
        <p className="mt-2 text-lg font-medium text-gold">{cv.role}</p>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0" />London, United Kingdom</span>
          <a className="flex items-center gap-2 hover:text-foreground" href="tel:+447983751732"><Phone className="h-4 w-4 shrink-0" />+44 7983 751732</a>
          <a className="flex min-w-0 items-center gap-2 hover:text-foreground" href="mailto:eng.habibur.cse@gmail.com"><Mail className="h-4 w-4 shrink-0" /><span className="break-all">eng.habibur.cse@gmail.com</span></a>
          <a className="flex items-center gap-2 hover:text-foreground" href={cv.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="h-4 w-4" />LinkedIn</a>
        </div>
        <p className="mb-6 mt-4 text-sm text-muted-foreground">{cv.availability}</p>
        <Downloads />
      </header>
      <article className="space-y-9 py-9">
        <section><h2 className="text-xl font-bold">Professional Summary</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cv.summary}</p></section>
        <section><h2 className="text-xl font-bold">Core Competencies</h2><div className="mt-4 grid gap-6 sm:grid-cols-3">{cv.competencies.map(group => <div key={group.title}><h3 className="text-sm font-semibold text-gold">{group.title}</h3><Points items={group.items} /></div>)}</div></section>
        <section><h2 className="text-xl font-bold">Professional Experience</h2><div className="mt-5 space-y-7">{cv.experience.map(role => <div key={role.heading} className="border-l border-border pl-5"><h3 className="font-semibold">{role.heading}</h3><p className="mt-1 text-sm text-gold">{role.detail}</p><Points items={role.points} /></div>)}</div></section>
        <section><h2 className="text-xl font-bold">Education</h2><div className="mt-4 space-y-5">{cv.education.map(education => <div key={education.degree}><h3 className="font-semibold">{education.degree}</h3><p className="mt-1 text-sm text-gold">{education.detail}</p><Points items={education.points} /></div>)}</div></section>
        <section><h2 className="text-xl font-bold">Licenses &amp; Certifications</h2><Points items={cv.certifications} /></section>
        <section><h2 className="text-xl font-bold">Verification Statement</h2><Points items={cv.verification} /></section>
      </article>
      <footer className="border-t border-border pt-7"><Downloads /></footer>
    </div>
  </main>;
}