
CREATE TYPE public.app_role AS ENUM ('tutor', 'student', 'parent');
CREATE TYPE public.booking_status AS ENUM ('pending', 'accepted', 'rejected', 'completed', 'cancelled');
CREATE TYPE public.invoice_status AS ENUM ('draft', 'sent', 'paid', 'overdue', 'void');
CREATE TYPE public.subject_kind AS ENUM ('maths', 'computer_science', 'english', 'other');

CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT, full_name TEXT, phone TEXT, avatar_url TEXT, year_group TEXT,
  parent_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN LANGUAGE SQL STABLE SECURITY DEFINER SET search_path = public
AS $$ SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role) $$;

CREATE POLICY "view own roles" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'tutor'));
CREATE POLICY "view all profiles" ON public.profiles FOR SELECT TO authenticated USING (true);
CREATE POLICY "insert own profile" ON public.profiles FOR INSERT TO authenticated WITH CHECK (auth.uid() = id);
CREATE POLICY "update own profile" ON public.profiles FOR UPDATE TO authenticated USING (auth.uid() = id OR public.has_role(auth.uid(), 'tutor'));

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
DECLARE v_role public.app_role;
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email));
  IF NEW.email = 'eng.habibur.cse@gmail.com' THEN v_role := 'tutor';
  ELSE v_role := COALESCE((NEW.raw_user_meta_data->>'role')::public.app_role, 'student');
  END IF;
  INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, v_role);
  RETURN NEW;
END $$;

CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

CREATE TABLE public.tutor_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tutor_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  hourly_rate_pence INTEGER NOT NULL DEFAULT 2500,
  currency TEXT NOT NULL DEFAULT 'GBP',
  min_lesson_hours NUMERIC NOT NULL DEFAULT 2,
  tax_rate_percent NUMERIC NOT NULL DEFAULT 20,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.tutor_settings TO authenticated;
GRANT ALL ON public.tutor_settings TO service_role;
ALTER TABLE public.tutor_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone signed in views rates" ON public.tutor_settings FOR SELECT TO authenticated USING (true);
CREATE POLICY "tutor manages own settings" ON public.tutor_settings FOR ALL TO authenticated USING (auth.uid() = tutor_id) WITH CHECK (auth.uid() = tutor_id);

CREATE TABLE public.availability_slots (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tutor_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  weekday SMALLINT NOT NULL CHECK (weekday BETWEEN 0 AND 6),
  start_time TIME NOT NULL, end_time TIME NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.availability_slots TO authenticated;
GRANT ALL ON public.availability_slots TO service_role;
ALTER TABLE public.availability_slots ENABLE ROW LEVEL SECURITY;
CREATE POLICY "view availability" ON public.availability_slots FOR SELECT TO authenticated USING (true);
CREATE POLICY "tutor manages availability" ON public.availability_slots FOR ALL TO authenticated USING (auth.uid() = tutor_id) WITH CHECK (auth.uid() = tutor_id);

CREATE TABLE public.availability_overrides (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tutor_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  starts_at TIMESTAMPTZ NOT NULL, ends_at TIMESTAMPTZ NOT NULL,
  is_busy BOOLEAN NOT NULL DEFAULT true, note TEXT
);
GRANT SELECT ON public.availability_overrides TO authenticated;
GRANT ALL ON public.availability_overrides TO service_role;
ALTER TABLE public.availability_overrides ENABLE ROW LEVEL SECURITY;
CREATE POLICY "view overrides" ON public.availability_overrides FOR SELECT TO authenticated USING (true);
CREATE POLICY "tutor manages overrides" ON public.availability_overrides FOR ALL TO authenticated USING (auth.uid() = tutor_id) WITH CHECK (auth.uid() = tutor_id);

CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tutor_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  student_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  requested_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  subject public.subject_kind NOT NULL DEFAULT 'maths',
  starts_at TIMESTAMPTZ NOT NULL, ends_at TIMESTAMPTZ NOT NULL,
  status public.booking_status NOT NULL DEFAULT 'pending',
  price_pence INTEGER, notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.bookings TO authenticated;
GRANT ALL ON public.bookings TO service_role;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "view related bookings" ON public.bookings FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'tutor') OR auth.uid() = student_id OR auth.uid() = requested_by
    OR EXISTS (SELECT 1 FROM public.profiles WHERE id = bookings.student_id AND parent_id = auth.uid()));
CREATE POLICY "create booking request" ON public.bookings FOR INSERT TO authenticated WITH CHECK (auth.uid() = requested_by);
CREATE POLICY "tutor updates bookings" ON public.bookings FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'tutor'));

CREATE TABLE public.conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tutor_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  participant_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  subject TEXT,
  last_message_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(tutor_id, participant_id)
);
GRANT SELECT, INSERT, UPDATE ON public.conversations TO authenticated;
GRANT ALL ON public.conversations TO service_role;
ALTER TABLE public.conversations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "view own conversations" ON public.conversations FOR SELECT TO authenticated
  USING (auth.uid() = tutor_id OR auth.uid() = participant_id);
CREATE POLICY "create conversation" ON public.conversations FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = tutor_id OR auth.uid() = participant_id);
CREATE POLICY "update own conversation" ON public.conversations FOR UPDATE TO authenticated
  USING (auth.uid() = tutor_id OR auth.uid() = participant_id);

CREATE TABLE public.messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID NOT NULL REFERENCES public.conversations(id) ON DELETE CASCADE,
  sender_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  body TEXT NOT NULL,
  is_stuck_alert BOOLEAN NOT NULL DEFAULT false,
  read_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.messages TO authenticated;
GRANT ALL ON public.messages TO service_role;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "view messages in own convo" ON public.messages FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM public.conversations c WHERE c.id = conversation_id
    AND (c.tutor_id = auth.uid() OR c.participant_id = auth.uid())));
CREATE POLICY "send message in own convo" ON public.messages FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = sender_id AND EXISTS (SELECT 1 FROM public.conversations c
    WHERE c.id = conversation_id AND (c.tutor_id = auth.uid() OR c.participant_id = auth.uid())));
CREATE POLICY "mark messages read" ON public.messages FOR UPDATE TO authenticated
  USING (EXISTS (SELECT 1 FROM public.conversations c WHERE c.id = conversation_id
    AND (c.tutor_id = auth.uid() OR c.participant_id = auth.uid())));

ALTER PUBLICATION supabase_realtime ADD TABLE public.messages;
ALTER PUBLICATION supabase_realtime ADD TABLE public.conversations;
ALTER PUBLICATION supabase_realtime ADD TABLE public.bookings;

CREATE TABLE public.invoices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tutor_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  client_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  booking_id UUID REFERENCES public.bookings(id) ON DELETE SET NULL,
  number TEXT NOT NULL,
  status public.invoice_status NOT NULL DEFAULT 'draft',
  issued_at DATE NOT NULL DEFAULT CURRENT_DATE,
  due_at DATE, paid_at TIMESTAMPTZ,
  subtotal_pence INTEGER NOT NULL DEFAULT 0,
  tax_pence INTEGER NOT NULL DEFAULT 0,
  total_pence INTEGER NOT NULL DEFAULT 0,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.invoices TO authenticated;
GRANT ALL ON public.invoices TO service_role;
ALTER TABLE public.invoices ENABLE ROW LEVEL SECURITY;
CREATE POLICY "tutor or client views invoice" ON public.invoices FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'tutor') OR auth.uid() = client_id);
CREATE POLICY "tutor manages invoices" ON public.invoices FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'tutor'));
CREATE POLICY "tutor updates invoices" ON public.invoices FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'tutor'));
CREATE POLICY "tutor deletes invoices" ON public.invoices FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'tutor'));

CREATE TABLE public.expenses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tutor_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  category TEXT NOT NULL, description TEXT,
  amount_pence INTEGER NOT NULL,
  spent_at DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.expenses TO authenticated;
GRANT ALL ON public.expenses TO service_role;
ALTER TABLE public.expenses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "tutor manages expenses" ON public.expenses FOR ALL TO authenticated
  USING (auth.uid() = tutor_id) WITH CHECK (auth.uid() = tutor_id);

CREATE TABLE public.student_performance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  subject public.subject_kind NOT NULL,
  topic TEXT,
  score_percent NUMERIC,
  time_spent_minutes INTEGER,
  is_stuck BOOLEAN NOT NULL DEFAULT false,
  note TEXT,
  recorded_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.student_performance TO authenticated;
GRANT ALL ON public.student_performance TO service_role;
ALTER TABLE public.student_performance ENABLE ROW LEVEL SECURITY;
CREATE POLICY "view own or child perf" ON public.student_performance FOR SELECT TO authenticated
  USING (auth.uid() = student_id OR public.has_role(auth.uid(), 'tutor')
    OR EXISTS (SELECT 1 FROM public.profiles WHERE id = student_id AND parent_id = auth.uid()));
CREATE POLICY "student or tutor inserts perf" ON public.student_performance FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = student_id OR public.has_role(auth.uid(), 'tutor'));

CREATE TABLE public.ai_practice_sheets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tutor_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  subject public.subject_kind NOT NULL,
  topic TEXT, prompt TEXT, content TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.ai_practice_sheets TO authenticated;
GRANT ALL ON public.ai_practice_sheets TO service_role;
ALTER TABLE public.ai_practice_sheets ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.practice_sheet_shares (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sheet_id UUID NOT NULL REFERENCES public.ai_practice_sheets(id) ON DELETE CASCADE,
  student_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  shared_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(sheet_id, student_id)
);
GRANT SELECT, INSERT, DELETE ON public.practice_sheet_shares TO authenticated;
GRANT ALL ON public.practice_sheet_shares TO service_role;
ALTER TABLE public.practice_sheet_shares ENABLE ROW LEVEL SECURITY;
CREATE POLICY "view own shares" ON public.practice_sheet_shares FOR SELECT TO authenticated
  USING (auth.uid() = student_id OR public.has_role(auth.uid(), 'tutor'));
CREATE POLICY "tutor inserts shares" ON public.practice_sheet_shares FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'tutor'));
CREATE POLICY "tutor deletes shares" ON public.practice_sheet_shares FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'tutor'));

CREATE POLICY "view sheet if tutor or shared" ON public.ai_practice_sheets FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'tutor')
    OR EXISTS (SELECT 1 FROM public.practice_sheet_shares s WHERE s.sheet_id = id AND s.student_id = auth.uid()));
CREATE POLICY "tutor inserts sheets" ON public.ai_practice_sheets FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'tutor'));
CREATE POLICY "tutor updates sheets" ON public.ai_practice_sheets FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'tutor'));
CREATE POLICY "tutor deletes sheets" ON public.ai_practice_sheets FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'tutor'));

CREATE TABLE public.notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  kind TEXT NOT NULL, title TEXT NOT NULL, body TEXT, link TEXT,
  read_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.notifications TO authenticated;
GRANT ALL ON public.notifications TO service_role;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "view own notifications" ON public.notifications FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "mark own notif read" ON public.notifications FOR UPDATE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "create notif" ON public.notifications FOR INSERT TO authenticated WITH CHECK (true);

ALTER PUBLICATION supabase_realtime ADD TABLE public.notifications;

CREATE INDEX idx_bookings_tutor_start ON public.bookings(tutor_id, starts_at);
CREATE INDEX idx_messages_conversation ON public.messages(conversation_id, created_at);
CREATE INDEX idx_notifications_user ON public.notifications(user_id, read_at);
CREATE INDEX idx_perf_student ON public.student_performance(student_id, recorded_at DESC);
