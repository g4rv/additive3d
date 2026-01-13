-- ============================================================================
-- Fix User Order Insert Policy
-- Project: Additive3D
-- Date: 2026-01-12
-- Description: Allow regular users (not just admins) to insert/create orders
-- ============================================================================
--
-- PROBLEM: The fix-admin-rls-policies.sql only creates admin-specific policies
-- for SELECT, UPDATE, DELETE but doesn't have an INSERT policy for regular users.
--
-- SOLUTION: Add a policy that allows authenticated users to create orders for themselves
-- ============================================================================

-- Allow authenticated users to INSERT their own orders
CREATE POLICY IF NOT EXISTS "Users can insert their own orders"
ON orders FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- ============================================================================
-- Verify the policy was created
-- ============================================================================

SELECT
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd
FROM pg_policies
WHERE schemaname = 'public'
  AND tablename = 'orders'
  AND cmd = 'INSERT'
ORDER BY policyname;
