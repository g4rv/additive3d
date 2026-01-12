-- ============================================================================
-- Add PPG (Price Per Gram) Field to Profiles
-- Project: Additive3D
-- Date: 2026-01-07
-- Description: Adds ppg field to profiles table for per-user pricing
-- ============================================================================
--
-- CHANGES:
-- 1. Add ppg column to profiles table (default: 40)
-- 2. Add positive constraint check (ppg > 0)
--
-- USAGE:
-- Apply this migration via Supabase Dashboard > SQL Editor
-- or use: supabase db push (if using local development)
-- ============================================================================

-- Add ppg column to profiles table if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'profiles'
      AND column_name = 'ppg'
  ) THEN
    ALTER TABLE profiles
    ADD COLUMN ppg NUMERIC DEFAULT 40 NOT NULL;

    -- Add comment for documentation
    COMMENT ON COLUMN profiles.ppg IS 'Price per gram for user orders (default: 40 UAH/gram)';

    RAISE NOTICE 'Added ppg column to profiles table';
  ELSE
    RAISE NOTICE 'ppg column already exists in profiles table';
  END IF;
END $$;

-- Add constraint to ensure ppg is positive if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.constraint_column_usage
    WHERE table_schema = 'public'
      AND table_name = 'profiles'
      AND constraint_name = 'ppg_positive'
  ) THEN
    ALTER TABLE profiles
    ADD CONSTRAINT ppg_positive CHECK (ppg > 0);

    RAISE NOTICE 'Added ppg_positive constraint';
  ELSE
    RAISE NOTICE 'ppg_positive constraint already exists';
  END IF;
END $$;

-- Verify the changes
SELECT
  column_name,
  data_type,
  column_default,
  is_nullable
FROM information_schema.columns
WHERE table_schema = 'public'
  AND table_name = 'profiles'
  AND column_name = 'ppg';
