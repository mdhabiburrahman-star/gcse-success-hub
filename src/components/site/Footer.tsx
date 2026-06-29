import { Link } from "@tanstack/react-router";
import { BookOpenCheck, Mail, MessageCircle, Phone } from "lucide-react";
import { WHATSAPP_URL, EMAIL, PHONE_DISPLAY, PHONE_E164, BRAND_NAME } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/60">
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/20 text-gold ring-1 ring-primary/40">
              <BookOpenCheck className="h-5 w-5" />
            </span>
            Tutor<span className="text-gold">Mentor</span> Near&nbsp;Me
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Private one-to-one home tutoring in London for Mathematics and
            Computer Science. Face-to-face support for school, college and
            university students. I help weak learners become confident, strong
            and exam-ready.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a href={`tel:+${PHONE_E164}`} className="btn-outline text-sm">
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="btn-outline text-sm">
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/subjects" className="hover:text-foreground">Tutoring services</Link></li>
            <li><Link to="/about" className="hover:text-foreground">CV & portfolio</Link></li>
            <li><Link to="/lesson-plan" className="hover:text-foreground">Student journey</Link></li>
            <li><Link to="/practice" className="hover:text-foreground">Practice hub</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Get started</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Book a tutor</Link></li>
            <li><a href={WHATSAPP_URL} className="hover:text-foreground">Chat on WhatsApp</a></li>
            <li><Link to="/auth" className="hover:text-foreground">Tutor admin sign-in</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-x py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} {BRAND_NAME} · London, UK</span>
          <span>Mathematics · Computer Science · Home tutoring only</span>
        </div>
      </div>
    </footer>
  );
}
