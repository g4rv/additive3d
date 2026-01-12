-- ========================================
-- Fix: Add search_path to cleanup functions
-- ========================================
-- Date: 2026-01-11
-- Issue: Functions missing search_path protection
-- Severity: Low (admin-only functions, but best practice)

-- Fix 1: Recreate cleanup_auth_logs with search_path
CREATE OR REPLACE FUNCTION cleanup_auth_logs()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  DELETE FROM public.auth_logs
  WHERE created_at < now() - interval '90 days';
END;
$$;

-- Fix 2: Recreate cleanup_auth_rate_limits with search_path
CREATE OR REPLACE FUNCTION cleanup_auth_rate_limits()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  DELETE FROM public.auth_rate_limits
  WHERE last_attempt_at < now() - interval '24 hours'
    AND (locked_until IS NULL OR locked_until < now());
END;
$$;

-- Verify the fixes
SELECT
  routine_name,
  routine_type,
  security_type,
  external_language
FROM information_schema.routines
WHERE routine_schema = 'public'
  AND routine_name IN ('cleanup_auth_logs', 'cleanup_auth_rate_limits');

COMMENT ON FUNCTION cleanup_auth_logs() IS 'Cleanup auth logs older than 90 days (SECURITY DEFINER with search_path protection)';
COMMENT ON FUNCTION cleanup_auth_rate_limits() IS 'Cleanup expired rate limit records (SECURITY DEFINER with search_path protection)';
