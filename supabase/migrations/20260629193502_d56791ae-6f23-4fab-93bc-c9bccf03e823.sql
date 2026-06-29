
-- Tighten profiles RLS: users see/update only their own profile; tutors can view (read-only) profiles of students they have bookings with.
DROP POLICY IF EXISTS "view all profiles" ON public.profiles;
DROP POLICY IF EXISTS "update own profile" ON public.profiles;

CREATE POLICY "users view own profile"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "tutors view their students profile"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (
    public.has_role(auth.uid(), 'tutor'::public.app_role)
    AND EXISTS (
      SELECT 1 FROM public.bookings b
      WHERE b.tutor_id = auth.uid() AND b.student_id = profiles.id
    )
  );

CREATE POLICY "parents view their child profile"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (parent_id = auth.uid());

CREATE POLICY "users update own profile"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);
