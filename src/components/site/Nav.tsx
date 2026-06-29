import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, BookOpenCheck } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/subjects", label: "Tutoring" },
  { to: "/about", label: "CV & Portfolio" },
  { to: "/lesson-plan", label: "Journey" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/20 text-gold ring-1 ring-primary/40">
            <BookOpenCheck className="h-5 w-5" />
          </span>
          <span className="truncate">
            Tutor<span className="text-gold">Mentor</span> Near&nbsp;Me
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-gold" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary text-sm">
            Book Home Tutor
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden rounded-md p-2 text-foreground hover:bg-accent"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <div className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-gold" }}
                className="rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2 text-sm">
              Book Home Tutor
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
