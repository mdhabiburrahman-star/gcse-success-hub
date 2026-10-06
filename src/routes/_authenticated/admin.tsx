import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { LogOut, ShieldCheck, BookOpenCheck, Users, Calendar, AlertCircle, Loader2 } from "lucide-react";

type Booking = {
  id: string;
  subject: string;
  status: string;
  starts_at: string;
  ends_at: string;
  notes: string | null;
  student_id: string;
  price_pence: number | null;
};

type Profile = {
  id: string;
  full_name: string | null;
  email: string | null;
  phone: string | null;
  year_group: string | null;
};

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "description", content: "Private TutorMentor administration for student requests, practice assignments and progress notes." },
      { property: "og:title", content: "Admin panel — TutorMentor Near Me" },
      { property: "og:description", content: "Private administration for TutorMentor students and tutoring requests." },
      { title: "Admin panel — TutorMentor Near Me" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isTutor, setIsTutor] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [students, setStudents] = useState<Profile[]>([]);
  const [meEmail, setMeEmail] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data: userData } = await supabase.auth.getUser();
        const user = userData.user;
        if (!user) { navigate({ to: "/auth" }); return; }
        setMeEmail(user.email ?? null);

        const { data: roleRow } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", user.id)
          .eq("role", "tutor")
          .maybeSingle();

        const tutor = !!roleRow;
        setIsTutor(tutor);

        if (tutor) {
          const [{ data: bookingRows }, { data: studentRows }] = await Promise.all([
            supabase
              .from("bookings")
              .select("id, subject, status, starts_at, ends_at, notes, student_id, price_pence")
              .order("starts_at", { ascending: false })
              .limit(100),
            supabase
              .from("profiles")
              .select("id, full_name, email, phone, year_group")
              .limit(100),
          ]);
          setBookings((bookingRows ?? []) as Booking[]);
          setStudents((studentRows ?? []) as Profile[]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load admin data");
      } finally {
        setLoading(false);
      }
    })();
  }, [navigate]);

  async function signOut() {
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  if (loading) {
    return (
      <section className="container-x py-24 text-center text-muted-foreground">
        <Loader2 className="mx-auto h-6 w-6 animate-spin text-gold" />
        <p className="mt-3 text-sm">Loading admin panel…</p>
      </section>
    );
  }

  if (!isTutor) {
    return (
      <section className="container-x py-24">
        <div className="mx-auto max-w-md card-glow text-center">
          <AlertCircle className="mx-auto h-8 w-8 text-gold" />
          <h1 className="mt-4 text-2xl font-bold">Tutor access only</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Your account ({meEmail}) is signed in but doesn't have tutor
            permissions. Contact Habib if you believe this is an error.
          </p>
          <button onClick={signOut} className="btn-outline mt-6 text-sm">
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="container-x py-12 md:py-16 space-y-10">
      {/* HEADER */}
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="eyebrow"><ShieldCheck className="h-3.5 w-3.5" /> Admin panel</span>
          <h1 className="mt-3 text-3xl font-bold">
            <span className="text-gradient">Tutor dashboard</span>
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">Signed in as {meEmail}</p>
        </div>
        <button onClick={signOut} className="btn-outline text-sm">
          <LogOut className="h-4 w-4" /> Sign out
        </button>
      </header>

      {error && (
        <div className="rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </div>
      )}

      {/* STATS */}
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard icon={Calendar} label="Bookings" value={bookings.length} />
        <StatCard icon={Users} label="Student profiles" value={students.length} />
        <StatCard
          icon={BookOpenCheck}
          label="Upcoming"
          value={bookings.filter((b) => new Date(b.starts_at) > new Date()).length}
        />
      </div>

      {/* BOOKINGS */}
      <div className="card-glow">
        <h2 className="text-xl font-bold">Recent student requests & bookings</h2>
        {bookings.length === 0 ? (
          <p className="mt-3 text-sm text-muted-foreground">
            No bookings yet. New requests submitted through the contact form
            will appear here once linked.
          </p>
        ) : (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
                  <th className="py-2 pr-3">When</th>
                  <th className="py-2 pr-3">Subject</th>
                  <th className="py-2 pr-3">Status</th>
                  <th className="py-2 pr-3">Student</th>
                  <th className="py-2 pr-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {bookings.map((b) => {
                  const student = students.find((s) => s.id === b.student_id);
                  return (
                    <tr key={b.id}>
                      <td className="py-3 pr-3 text-foreground">
                        {new Date(b.starts_at).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" })}
                      </td>
                      <td className="py-3 pr-3 capitalize">{b.subject}</td>
                      <td className="py-3 pr-3">
                        <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-semibold text-gold ring-1 ring-primary/40">
                          {b.status}
                        </span>
                      </td>
                      <td className="py-3 pr-3 text-muted-foreground">
                        {student?.full_name ?? student?.email ?? b.student_id.slice(0, 8)}
                      </td>
                      <td className="py-3 pr-3 text-muted-foreground max-w-xs truncate">{b.notes ?? "—"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* STUDENTS */}
      <div className="card-glow">
        <h2 className="text-xl font-bold">Student profiles</h2>
        {students.length === 0 ? (
          <p className="mt-3 text-sm text-muted-foreground">No student profiles yet.</p>
        ) : (
          <ul className="mt-4 divide-y divide-border/60">
            {students.map((s) => (
              <li key={s.id} className="flex flex-wrap items-center justify-between gap-3 py-3 text-sm">
                <div>
                  <div className="font-semibold text-foreground">{s.full_name ?? "Unnamed"}</div>
                  <div className="text-xs text-muted-foreground">{s.email ?? "no email"} · {s.year_group ?? "level not set"}</div>
                </div>
                {s.phone && (
                  <a href={`tel:${s.phone}`} className="text-xs font-semibold text-gold hover:underline">
                    {s.phone}
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="text-center text-xs text-muted-foreground">
        Practice tracking, Moodle integration and richer assignment tools are coming soon.
      </p>
    </section>
  );
}

function StatCard({ icon: Icon, label, value }: { icon: any; label: string; value: number }) {
  return (
    <div className="card-glow">
      <div className="flex items-center justify-between">
        <Icon className="h-7 w-7 text-gold" />
        <span className="text-3xl font-bold">{value}</span>
      </div>
      <p className="mt-2 text-sm font-semibold text-muted-foreground">{label}</p>
    </div>
  );
}
