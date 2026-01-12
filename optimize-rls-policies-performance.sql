-- ========================================
-- Fix: Optimize RLS policies for better performance
-- ========================================
-- Date: 2026-01-11
-- Issue: Using auth.uid() directly causes function re-evaluation per row
-- Fix: Wrap in (SELECT auth.uid()) to evaluate once per query
-- Severity: Performance optimization (not critical for small scale)

-- Drop old policies and recreate optimized versions

-- ========================================
-- PROFILES TABLE - Optimized Policies
-- ========================================

DROP POLICY IF EXISTS "profiles_select_policy" ON profiles;
CREATE POLICY "profiles_select_policy" ON profiles
  FOR SELECT
  TO public
  USING ((SELECT auth.uid()) = id OR is_admin((SELECT auth.uid())));

DROP POLICY IF EXISTS "profiles_update_policy" ON profiles;
CREATE POLICY "profiles_update_policy" ON profiles
  FOR UPDATE
  TO public
  USING ((SELECT auth.uid()) = id OR is_admin((SELECT auth.uid())))
  WITH CHECK (
    ((SELECT auth.uid()) = id AND role = (SELECT p.role FROM profiles p WHERE p.id = (SELECT auth.uid())))
    OR is_admin((SELECT auth.uid()))
  );

DROP POLICY IF EXISTS "profiles_delete_policy" ON profiles;
CREATE POLICY "profiles_delete_policy" ON profiles
  FOR DELETE
  TO public
  USING (is_admin((SELECT auth.uid())));

DROP POLICY IF EXISTS "profiles_insert_policy" ON profiles;
CREATE POLICY "profiles_insert_policy" ON profiles
  FOR INSERT
  TO public
  WITH CHECK (((SELECT auth.uid()) = id) OR is_admin((SELECT auth.uid())));

-- ========================================
-- ORDERS TABLE - Optimized Policies
-- ========================================

DROP POLICY IF EXISTS "orders_select_policy" ON orders;
CREATE POLICY "orders_select_policy" ON orders
  FOR SELECT
  TO public
  USING (((SELECT auth.uid()) = user_id) OR is_admin((SELECT auth.uid())));

DROP POLICY IF EXISTS "orders_update_policy" ON orders;
CREATE POLICY "orders_update_policy" ON orders
  FOR UPDATE
  TO public
  USING (((SELECT auth.uid()) = user_id) OR is_admin((SELECT auth.uid())));

DROP POLICY IF EXISTS "orders_delete_policy" ON orders;
CREATE POLICY "orders_delete_policy" ON orders
  FOR DELETE
  TO public
  USING (((SELECT auth.uid()) = user_id) OR is_admin((SELECT auth.uid())));

DROP POLICY IF EXISTS "orders_insert_policy" ON orders;
CREATE POLICY "orders_insert_policy" ON orders
  FOR INSERT
  TO public
  WITH CHECK ((SELECT auth.uid()) = user_id);

-- ========================================
-- AUTH_LOGS TABLE - Optimized Policies
-- ========================================

DROP POLICY IF EXISTS "Users can view their own auth logs" ON auth_logs;
CREATE POLICY "Users can view their own auth logs" ON auth_logs
  FOR SELECT
  TO public
  USING ((SELECT auth.uid()) = user_id);

-- Note: We keep "Service role full access" policy as is (USING (false))

-- ========================================
-- Verification Query
-- ========================================

-- Check all policies are using optimized syntax
SELECT
  tablename,
  policyname,
  cmd,
  qual
FROM pg_policies
WHERE schemaname = 'public'
  AND (
    qual LIKE '%SELECT auth.uid()%' OR
    with_check LIKE '%SELECT auth.uid()%'
  )
ORDER BY tablename, cmd;
