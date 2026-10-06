import { createFileRoute, Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Lock, LogIn, ShieldCheck } from "lucide-react";
import { BRAND_NAME } from "@/lib/site-config";

export const Route = createFileRoute("/auth")({
  ssr: false,
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Tutor sign in — TutorMentor Near Me" },
      { property: "og:description", content: "Sign in to manage TutorMentor student requests and bookings." },
      { title: "Tutor sign in — TutorMentor Near Me admin" },
      { name: "description", content: "Sign in to the TutorMentor Near Me admin panel to manage student requests and bookings." },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const search = useRouterState({ select: (s) => s.location.search as { redirect?: string } });
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  // Redirect away if already signed in
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) navigate({ to: search?.redirect ?? "/admin", replace: true });
    });
  }, [navigate, search]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setInfo(null);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate({ to: search?.redirect ?? "/admin", replace: true });
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth`,
            data: { full_name: fullName },
          },
        });
        if (error) throw error;
        setInfo("Check your email to confirm your account, then sign in.");
        setMode("signin");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign-in failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="container-x py-16 md:py-24">
      <div className="mx-auto max-w-md">
        <div className="text-center">
          <span className="eyebrow"><ShieldCheck className="h-3.5 w-3.5" /> Admin sign-in</span>
          <h1 className="mt-5 text-3xl font-bold">
            <span className="text-gradient">{BRAND_NAME}</span>
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Tutor & student account access.
          </p>
        </div>

        <form onSubmit={onSubmit} className="card-glow mt-8 space-y-4">
          <div className="flex gap-2 rounded-lg border border-border bg-background/40 p-1">
            {(["signin", "signup"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => { setMode(m); setError(null); setInfo(null); }}
                className={
                  "flex-1 rounded-md px-3 py-2 text-sm font-semibold transition " +
                  (mode === m ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground")
                }
              >
                {m === "signin" ? "Sign in" : "Create account"}
              </button>
            ))}
          </div>

          {mode === "signup" && (
            <div>
              <label htmlFor="fullName" className="text-sm font-medium">Full name</label>
              <input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                maxLength={120}
                className="mt-1.5 w-full rounded-lg border border-input bg-card/60 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold" /> Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              maxLength={200}
              className="mt-1.5 w-full rounded-lg border border-input bg-card/60 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium flex items-center gap-2">
              <Lock className="h-4 w-4 text-gold" /> Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete={mode === "signin" ? "current-password" : "new-password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              maxLength={120}
              className="mt-1.5 w-full rounded-lg border border-input bg-card/60 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}
          {info && <p className="text-sm text-[color:var(--whatsapp)]">{info}</p>}

          <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">
            <LogIn className="h-4 w-4" />
            {loading ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
          </button>

          <p className="text-xs text-muted-foreground text-center">
            <Link to="/" className="hover:text-foreground">← Back to TutorMentor Near Me</Link>
          </p>
        </form>
      </div>
    </section>
  );
}
