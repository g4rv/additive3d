-- Add file sharing consent fields to profiles table
-- These fields protect the business by ensuring users explicitly consent to file sharing

ALTER TABLE profiles
ADD COLUMN IF NOT EXISTS agree_to_share_files BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS has_not_signed_nda BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS consent_given_at TIMESTAMPTZ;

-- Add comment explaining the fields
COMMENT ON COLUMN profiles.agree_to_share_files IS 'User agrees to share files with third-party manufacturing partners';
COMMENT ON COLUMN profiles.has_not_signed_nda IS 'User confirms they have NOT signed an NDA preventing file sharing';
COMMENT ON COLUMN profiles.consent_given_at IS 'Timestamp when user gave consent';

-- Note: RLS policies already prevent users from modifying their own role
-- No additional constraints needed here as consent is optional (users can exist without it)
-- However, order submission will check that BOTH consent fields are true before allowing orders
