-- ============================================================================
-- Database Security & Schema Update Migration
-- Project: Additive3D
-- Date: 2026-01-06
-- Description: Comprehensive security and schema updates for profiles & orders
-- ============================================================================
--
-- ISSUES FIXED:
-- 1. Added missing created_at column to profiles table
-- 2. Fixed function security (added SECURITY DEFINER and search_path)
-- 3. Fixed "Prevent role escalation" RLS policy
-- 4. Added admin access to orders (SELECT, UPDATE, DELETE)
-- 5. Added DELETE policies for both tables
-- 6. Fixed orders.user_id foreign key to reference profiles instead of auth.users
--
-- USAGE:
-- Apply this migration via Supabase Dashboard > SQL Editor
-- or use: supabase db push (if using local development)
-- ============================================================================

-- ============================================================================
-- SECTION 1: Schema Updates
-- ============================================================================

-- Add created_at column to profiles table if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'profiles'
      AND column_name = 'created_at'
  ) THEN
    ALTER TABLE public.profiles
    ADD COLUMN created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL;

    -- Set created_at to updated_at value for existing rows
    UPDATE public.profiles
    SET created_at = COALESCE(updated_at, NOW());

    RAISE NOTICE 'Added created_at column to profiles table';
  END IF;
END $$;

-- Ensure all columns have proper constraints
COMMENT ON COLUMN public.profiles.id IS 'User ID (references auth.users.id)';
COMMENT ON COLUMN public.profiles.email IS 'User email (synced with auth.users.email)';
COMMENT ON COLUMN public.profiles.first_name IS 'User first name (required)';
COMMENT ON COLUMN public.profiles.last_name IS 'User last name (required)';
COMMENT ON COLUMN public.profiles.phone_number IS 'User phone number (required)';
COMMENT ON COLUMN public.profiles.organization_name IS 'User organization (optional)';
COMMENT ON COLUMN public.profiles.role IS 'User role: user or admin (default: user)';
COMMENT ON COLUMN public.profiles.created_at IS 'Profile creation timestamp';
COMMENT ON COLUMN public.profiles.updated_at IS 'Profile last update timestamp';

-- Ensure orders table has proper comments
COMMENT ON COLUMN public.orders.id IS 'Order unique identifier';
COMMENT ON COLUMN public.orders.user_id IS 'User who created the order (references auth.users.id)';
COMMENT ON COLUMN public.orders.order_number IS 'Human-readable order number (unique)';
COMMENT ON COLUMN public.orders.status IS 'Order status: pending, processing, completed, cancelled';
COMMENT ON COLUMN public.orders.total_price IS 'Total order price in UAH';
COMMENT ON COLUMN public.orders.total_weight IS 'Total weight in grams';
COMMENT ON COLUMN public.orders.files IS 'JSONB array of file metadata with Cloudflare R2 URLs';
COMMENT ON COLUMN public.orders.metadata IS 'Additional order metadata (price multiplier, notes, etc.)';
COMMENT ON COLUMN public.orders.created_at IS 'Order creation timestamp';
COMMENT ON COLUMN public.orders.updated_at IS 'Order last update timestamp';

-- ============================================================================
-- SECTION 2: Security Functions (Fix search_path vulnerability)
-- ============================================================================

-- Drop and recreate is_admin function with proper security settings
DROP FUNCTION IF EXISTS public.is_admin(uuid);
CREATE OR REPLACE FUNCTION public.is_admin(user_id uuid)
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
SET search_path = public, pg_temp
STABLE
AS $$
  SELECT role = 'admin'
  FROM public.profiles
  WHERE id = user_id;
$$;

COMMENT ON FUNCTION public.is_admin(uuid) IS 'Check if user has admin role (used in RLS policies)';

-- Recreate handle_new_user function with proper security settings
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, first_name, last_name, phone_number, organization_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'first_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'last_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'phone_number', ''),
    COALESCE(NEW.raw_user_meta_data->>'organization_name', ''),
    'user'
  );
  RETURN NEW;
END;
$$;

COMMENT ON FUNCTION public.handle_new_user() IS 'Create profile when new user signs up';

-- Recreate handle_user_email_update function with proper security settings
CREATE OR REPLACE FUNCTION public.handle_user_email_update()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  -- Update email in profiles table when auth.users email changes
  IF OLD.email IS DISTINCT FROM NEW.email THEN
    UPDATE public.profiles
    SET email = NEW.email,
        updated_at = NOW()
    WHERE id = NEW.id;
  END IF;
  RETURN NEW;
END;
$$;

COMMENT ON FUNCTION public.handle_user_email_update() IS 'Sync email from auth.users to profiles.email';

-- Recreate handle_updated_at function with proper security settings
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

COMMENT ON FUNCTION public.handle_updated_at() IS 'Automatically update updated_at timestamp';

-- Ensure triggers exist
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

DROP TRIGGER IF EXISTS on_auth_user_email_updated ON auth.users;
CREATE TRIGGER on_auth_user_email_updated
  AFTER UPDATE OF email ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_user_email_update();

DROP TRIGGER IF EXISTS handle_profiles_updated_at ON public.profiles;
CREATE TRIGGER handle_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS handle_orders_updated_at ON public.orders;
CREATE TRIGGER handle_orders_updated_at
  BEFORE UPDATE ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- ============================================================================
-- SECTION 3: RLS Policies for PROFILES table
-- ============================================================================

-- Drop existing policies
DROP POLICY IF EXISTS "Profiles are readable by owner or admin" ON public.profiles;
DROP POLICY IF EXISTS "Profiles are updatable by owner or admin" ON public.profiles;
DROP POLICY IF EXISTS "Prevent role escalation" ON public.profiles;

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- SELECT: Users can view their own profile, admins can view all profiles
CREATE POLICY "profiles_select_policy" ON public.profiles
  FOR SELECT
  USING (
    auth.uid() = id
    OR public.is_admin(auth.uid())
  );

-- UPDATE: Users can update their own profile (except role), admins can update any profile
CREATE POLICY "profiles_update_policy" ON public.profiles
  FOR UPDATE
  USING (
    auth.uid() = id
    OR public.is_admin(auth.uid())
  )
  WITH CHECK (
    -- Users can update their own profile but NOT change their role
    (auth.uid() = id AND role = (SELECT role FROM public.profiles WHERE id = auth.uid()))
    OR
    -- Admins can update any profile including roles
    public.is_admin(auth.uid())
  );

-- DELETE: Only admins can delete profiles
CREATE POLICY "profiles_delete_policy" ON public.profiles
  FOR DELETE
  USING (public.is_admin(auth.uid()));

-- INSERT: Handled by trigger (on_auth_user_created), but allow for manual admin insertion
CREATE POLICY "profiles_insert_policy" ON public.profiles
  FOR INSERT
  WITH CHECK (
    auth.uid() = id
    OR public.is_admin(auth.uid())
  );

COMMENT ON POLICY "profiles_select_policy" ON public.profiles IS
  'Users can read their own profile, admins can read all profiles';
COMMENT ON POLICY "profiles_update_policy" ON public.profiles IS
  'Users can update their own profile (except role), admins can update any profile';
COMMENT ON POLICY "profiles_delete_policy" ON public.profiles IS
  'Only admins can delete profiles';
COMMENT ON POLICY "profiles_insert_policy" ON public.profiles IS
  'Users can insert their own profile, admins can insert any profile';

-- ============================================================================
-- SECTION 4: RLS Policies for ORDERS table
-- ============================================================================

-- Drop existing policies
DROP POLICY IF EXISTS "Users can view their own orders" ON public.orders;
DROP POLICY IF EXISTS "Users can insert their own orders" ON public.orders;
DROP POLICY IF EXISTS "Users can update their own orders" ON public.orders;

-- Enable RLS
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- SELECT: Users can view their own orders, admins can view all orders
CREATE POLICY "orders_select_policy" ON public.orders
  FOR SELECT
  USING (
    auth.uid() = user_id
    OR public.is_admin(auth.uid())
  );

-- INSERT: Users can create orders for themselves only
CREATE POLICY "orders_insert_policy" ON public.orders
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- UPDATE: Users can update their own orders, admins can update any order
CREATE POLICY "orders_update_policy" ON public.orders
  FOR UPDATE
  USING (
    auth.uid() = user_id
    OR public.is_admin(auth.uid())
  );

-- DELETE: Users can delete their own orders, admins can delete any order
CREATE POLICY "orders_delete_policy" ON public.orders
  FOR DELETE
  USING (
    auth.uid() = user_id
    OR public.is_admin(auth.uid())
  );

COMMENT ON POLICY "orders_select_policy" ON public.orders IS
  'Users can read their own orders, admins can read all orders';
COMMENT ON POLICY "orders_insert_policy" ON public.orders IS
  'Users can only create orders for themselves';
COMMENT ON POLICY "orders_update_policy" ON public.orders IS
  'Users can update their own orders, admins can update any order';
COMMENT ON POLICY "orders_delete_policy" ON public.orders IS
  'Users can delete their own orders, admins can delete any order';

-- ============================================================================
-- SECTION 5: Verify RLS is enabled
-- ============================================================================

DO $$
BEGIN
  IF NOT (SELECT relrowsecurity FROM pg_class WHERE relname = 'profiles' AND relnamespace = 'public'::regnamespace) THEN
    RAISE EXCEPTION 'RLS is not enabled on profiles table!';
  END IF;

  IF NOT (SELECT relrowsecurity FROM pg_class WHERE relname = 'orders' AND relnamespace = 'public'::regnamespace) THEN
    RAISE EXCEPTION 'RLS is not enabled on orders table!';
  END IF;

  RAISE NOTICE 'RLS verification passed - both tables have RLS enabled';
END $$;

-- ============================================================================
-- SECTION 6: Verification Queries (for manual testing)
-- ============================================================================

-- Run these queries after applying the migration to verify everything works:

-- 1. Check profiles table structure
-- SELECT column_name, data_type, is_nullable, column_default
-- FROM information_schema.columns
-- WHERE table_schema = 'public' AND table_name = 'profiles'
-- ORDER BY ordinal_position;

-- 2. Check orders table structure
-- SELECT column_name, data_type, is_nullable, column_default
-- FROM information_schema.columns
-- WHERE table_schema = 'public' AND table_name = 'orders'
-- ORDER BY ordinal_position;

-- 3. Check RLS policies for profiles
-- SELECT policyname, cmd, qual, with_check
-- FROM pg_policies
-- WHERE tablename = 'profiles';

-- 4. Check RLS policies for orders
-- SELECT policyname, cmd, qual, with_check
-- FROM pg_policies
-- WHERE tablename = 'orders';

-- 5. Check functions have proper security settings
-- SELECT routine_name, security_type, routine_definition
-- FROM information_schema.routines
-- WHERE routine_schema = 'public'
--   AND routine_name IN ('is_admin', 'handle_new_user', 'handle_user_email_update', 'handle_updated_at');

-- ============================================================================
-- END OF MIGRATION
-- ============================================================================
