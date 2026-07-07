
-- availability_slots: only tutor + their students (via bookings)
DROP POLICY "view availability" ON public.availability_slots;
CREATE POLICY "view availability" ON public.availability_slots FOR SELECT TO authenticated USING (
  auth.uid() = tutor_id
  OR EXISTS (SELECT 1 FROM public.bookings b WHERE b.tutor_id = availability_slots.tutor_id AND b.student_id = auth.uid())
);

-- availability_overrides: same rule
DROP POLICY "view overrides" ON public.availability_overrides;
CREATE POLICY "view overrides" ON public.availability_overrides FOR SELECT TO authenticated USING (
  auth.uid() = tutor_id
  OR EXISTS (SELECT 1 FROM public.bookings b WHERE b.tutor_id = availability_overrides.tutor_id AND b.student_id = auth.uid())
);

-- tutor_settings: only tutor + their students
DROP POLICY "anyone signed in views rates" ON public.tutor_settings;
CREATE POLICY "tutor and students view rates" ON public.tutor_settings FOR SELECT TO authenticated USING (
  auth.uid() = tutor_id
  OR EXISTS (SELECT 1 FROM public.bookings b WHERE b.tutor_id = tutor_settings.tutor_id AND b.student_id = auth.uid())
);

-- user_roles: only own row
DROP POLICY "view own roles" ON public.user_roles;
CREATE POLICY "view own roles" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);

-- has_role: switch to SECURITY INVOKER (RLS on user_roles now allows caller to read own row)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;
