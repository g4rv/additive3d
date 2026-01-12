-- ============================================================================
-- Fix Admin Access - RLS Policies
-- Project: Additive3D
-- Date: 2026-01-07
-- Description: Grant admin users full access to orders and profiles
-- ============================================================================

-- ============================================================================
-- PROFILES TABLE - Admin Access
-- ============================================================================

-- Allow admins to SELECT all profiles
CREATE POLICY IF NOT EXISTS "Admins can view all profiles"
ON profiles FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM profiles
    WHERE profiles.id = auth.uid()
    AND profiles.role = 'admin'
  )
);

-- Allow admins to UPDATE all profiles (including role changes)
CREATE POLICY IF NOT EXISTS "Admins can update all profiles"
ON profiles FOR UPDATE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM profiles
    WHERE profiles.id = auth.uid()
    AND profiles.role = 'admin'
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM profiles
    WHERE profiles.id = auth.uid()
    AND profiles.role = 'admin'
  )
);

-- Allow admins to DELETE profiles
CREATE POLICY IF NOT EXISTS "Admins can delete profiles"
ON profiles FOR DELETE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM profiles
    WHERE profiles.id = auth.uid()
    AND profiles.role = 'admin'
  )
);

-- ============================================================================
-- ORDERS TABLE - Admin Access
-- ============================================================================

-- Allow admins to SELECT all orders
CREATE POLICY IF NOT EXISTS "Admins can view all orders"
ON orders FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM profiles
    WHERE profiles.id = auth.uid()
    AND profiles.role = 'admin'
  )
);

-- Allow admins to UPDATE all orders
CREATE POLICY IF NOT EXISTS "Admins can update all orders"
ON orders FOR UPDATE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM profiles
    WHERE profiles.id = auth.uid()
    AND profiles.role = 'admin'
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM profiles
    WHERE profiles.id = auth.uid()
    AND profiles.role = 'admin'
  )
);

-- Allow admins to DELETE orders
CREATE POLICY IF NOT EXISTS "Admins can delete orders"
ON orders FOR DELETE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM profiles
    WHERE profiles.id = auth.uid()
    AND profiles.role = 'admin'
  )
);

-- ============================================================================
-- Verify policies were created
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
  AND tablename IN ('profiles', 'orders')
  AND policyname LIKE '%Admin%'
ORDER BY tablename, policyname;
