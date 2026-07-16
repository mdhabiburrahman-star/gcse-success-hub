
-- 1) ai_practice_sheets: scope SELECT policy to authenticated role
DROP POLICY IF EXISTS "view sheet if tutor or shared" ON public.ai_practice_sheets;

CREATE POLICY "view sheet if tutor or shared"
ON public.ai_practice_sheets
FOR SELECT
TO authenticated
USING (
  public.has_role(auth.uid(), 'tutor'::public.app_role)
  OR EXISTS (
    SELECT 1 FROM public.practice_sheet_shares s
    WHERE s.sheet_id = ai_practice_sheets.id
      AND s.student_id = auth.uid()
  )
);

-- 2) user_roles: explicitly deny client-side writes (only service_role / SECURITY DEFINER triggers may modify)
DROP POLICY IF EXISTS "No client inserts on user_roles" ON public.user_roles;
DROP POLICY IF EXISTS "No client updates on user_roles" ON public.user_roles;
DROP POLICY IF EXISTS "No client deletes on user_roles" ON public.user_roles;

CREATE POLICY "No client inserts on user_roles"
ON public.user_roles
FOR INSERT
TO authenticated, anon
WITH CHECK (false);

CREATE POLICY "No client updates on user_roles"
ON public.user_roles
FOR UPDATE
TO authenticated, anon
USING (false)
WITH CHECK (false);

CREATE POLICY "No client deletes on user_roles"
ON public.user_roles
FOR DELETE
TO authenticated, anon
USING (false);
