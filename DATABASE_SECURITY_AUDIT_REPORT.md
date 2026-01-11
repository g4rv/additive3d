# Database Security Audit Report
**Project:** Additive3D
**Date:** 2026-01-06
**Audited by:** Claude Code (Supabase MCP Tools)
**Status:** ⚠️ Security Issues Found - Migration Required

---

## Executive Summary

I performed a comprehensive security audit of your Supabase database using MCP tools. **6 security issues** were identified and a migration script has been created to fix all of them.

### Overall Status:
- ✅ RLS is enabled on both tables
- ✅ Foreign key constraints are properly configured
- ✅ Basic table structure is correct
- ⚠️ **Missing column:** profiles.created_at
- ⚠️ **Security vulnerability:** Functions missing search_path protection
- ⚠️ **Security vulnerability:** Incorrect RLS policy allows privilege escalation
- ⚠️ **Access control issue:** Admins cannot manage all orders
- ⚠️ **Missing policies:** No DELETE policies defined

---

## 1. Schema Analysis

### 1.1 Profiles Table ✅ (with 1 issue)

| Column | Type | Required | Constraint | Status |
|--------|------|----------|------------|--------|
| id | uuid | Yes | FK to auth.users.id | ✅ |
| email | text | Yes | Synced with auth.users | ✅ |
| first_name | text | Yes | - | ✅ |
| last_name | text | Yes | - | ✅ |
| phone_number | text | Yes | - | ✅ |
| organization_name | text | No | Nullable | ✅ |
| role | text | Yes | CHECK: user/admin | ✅ |
| created_at | timestamp | - | - | ❌ **MISSING** |
| updated_at | timestamp | Yes | Default: NOW() | ✅ |

**Issue:** Missing `created_at` column
**Impact:** Cannot track when user accounts were created
**Fix:** Migration adds `created_at` column with default NOW()

---

### 1.2 Orders Table ✅

| Column | Type | Required | Constraint | Status |
|--------|------|----------|------------|--------|
| id | uuid | Yes | Primary Key | ✅ |
| user_id | uuid | Yes | FK to auth.users.id | ✅ |
| order_number | text | Yes | UNIQUE | ✅ |
| status | text | Yes | CHECK: pending/processing/completed/cancelled | ✅ |
| total_price | numeric | Yes | - | ✅ |
| total_weight | numeric | Yes | - | ✅ |
| files | jsonb | Yes | Default: [] | ✅ |
| metadata | jsonb | No | Default: {} | ✅ |
| created_at | timestamp | Yes | Default: NOW() | ✅ |
| updated_at | timestamp | Yes | Default: NOW() | ✅ |

**Status:** All columns present and properly configured ✅

---

## 2. Security Vulnerabilities (CRITICAL)

### 2.1 Function Security - Search Path Vulnerability ⚠️

**Severity:** HIGH
**Affected Functions:** 4 functions
**Supabase Lint:** `function_search_path_mutable`

**Issue:**
All database functions are missing `SECURITY DEFINER` and `SET search_path` settings, making them vulnerable to privilege escalation attacks.

**Affected Functions:**
1. `is_admin(uuid)` - Used in RLS policies
2. `handle_new_user()` - Creates profile on signup
3. `handle_user_email_update()` - Syncs email changes
4. `handle_updated_at()` - Updates timestamps

**Risk:**
Attackers could manipulate the search_path to execute malicious code with elevated privileges.

**Fix:**
Migration recreates all functions with:
```sql
SECURITY DEFINER
SET search_path = public, pg_temp
```

**Reference:** https://supabase.com/docs/guides/database/database-linter?lint=0011_function_search_path_mutable

---

### 2.2 RLS Policy - Always True (Privilege Escalation) ⚠️

**Severity:** CRITICAL
**Affected Table:** profiles
**Supabase Lint:** `rls_policy_always_true`

**Issue:**
The "Prevent role escalation" policy has `USING (NULL)` which evaluates to always true, effectively bypassing row-level security for UPDATE operations.

**Current Policy:**
```sql
Policy: "Prevent role escalation"
Command: UPDATE
USING: null (always true!)
WITH CHECK: ((auth.uid() <> id) OR is_admin(auth.uid()))
```

**Risk:**
Any authenticated user can update ANY profile because USING clause allows all rows.

**Fix:**
Migration removes this policy and replaces with proper UPDATE policy that:
- Users can update their own profile (except role)
- Admins can update any profile (including role)

---

### 2.3 Missing Admin Access to Orders ⚠️

**Severity:** MEDIUM
**Affected Table:** orders

**Issue:**
Current RLS policies only allow users to view/update their own orders. Admins cannot manage all orders.

**Current Policies:**
```sql
"Users can view their own orders" - SELECT: (auth.uid() = user_id)
"Users can update their own orders" - UPDATE: (auth.uid() = user_id)
```

**Problem:**
- ❌ Admin cannot view all orders in admin dashboard
- ❌ Admin cannot update order status
- ❌ Admin cannot manage customer orders

**Fix:**
Migration updates policies to include admin access:
```sql
SELECT: (auth.uid() = user_id) OR is_admin(auth.uid())
UPDATE: (auth.uid() = user_id) OR is_admin(auth.uid())
```

---

### 2.4 Missing DELETE Policies ⚠️

**Severity:** LOW
**Affected Tables:** profiles, orders

**Issue:**
No DELETE policies are defined for either table.

**Current Status:**
- profiles: No DELETE policy → Nobody can delete profiles
- orders: No DELETE policy → Nobody can delete orders

**Impact:**
- Users cannot delete their own orders
- Admins cannot delete user accounts or orders

**Fix:**
Migration adds DELETE policies:
- **Profiles:** Only admins can delete
- **Orders:** Users can delete their own, admins can delete any

---

## 3. RLS Policies Summary

### 3.1 Current Policies (BEFORE Migration)

#### Profiles Table:
| Policy Name | Command | USING Clause | WITH CHECK | Issue |
|-------------|---------|--------------|------------|-------|
| Profiles are readable by owner or admin | SELECT | (uid = id) OR is_admin() | - | ✅ |
| Profiles are updatable by owner or admin | UPDATE | (uid = id) OR is_admin() | (uid = id) OR is_admin() | ⚠️ Too permissive |
| Prevent role escalation | UPDATE | **NULL (always true!)** | (uid <> id) OR is_admin() | ❌ Security bug |

#### Orders Table:
| Policy Name | Command | USING Clause | WITH CHECK | Issue |
|-------------|---------|--------------|------------|-------|
| Users can view their own orders | SELECT | uid = user_id | - | ⚠️ No admin |
| Users can insert their own orders | INSERT | - | uid = user_id | ✅ |
| Users can update their own orders | UPDATE | uid = user_id | - | ⚠️ No admin |

---

### 3.2 New Policies (AFTER Migration)

#### Profiles Table:
| Policy Name | Command | Description |
|-------------|---------|-------------|
| profiles_select_policy | SELECT | Users read own, admins read all |
| profiles_insert_policy | INSERT | Users insert own, admins insert any |
| profiles_update_policy | UPDATE | Users update own (not role), admins update any |
| profiles_delete_policy | DELETE | Only admins can delete |

#### Orders Table:
| Policy Name | Command | Description |
|-------------|---------|-------------|
| orders_select_policy | SELECT | Users read own, admins read all |
| orders_insert_policy | INSERT | Users create for themselves only |
| orders_update_policy | UPDATE | Users update own, admins update any |
| orders_delete_policy | DELETE | Users delete own, admins delete any |

---

## 4. Additional Security Findings

### 4.1 Leaked Password Protection Disabled ⚠️

**Severity:** LOW (Auth configuration)
**Issue:** Supabase Auth is not checking passwords against HaveIBeenPwned.org database

**Recommendation:**
Enable in Supabase Dashboard → Authentication → Password Security:
- ✅ Enable "Leaked Password Protection"

**Reference:** https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection

---

## 5. Migration Instructions

### Step 1: Review the Migration Script
Open and review: `database-security-migration.sql`

### Step 2: Apply Migration via Supabase Dashboard

1. Go to Supabase Dashboard: https://supabase.com/dashboard
2. Select your project
3. Navigate to **SQL Editor**
4. Click **New Query**
5. Copy and paste the entire contents of `database-security-migration.sql`
6. Click **Run** (or press Ctrl+Enter)

### Step 3: Verify Migration

After running the migration, verify everything:

```sql
-- 1. Check profiles has created_at
SELECT column_name FROM information_schema.columns
WHERE table_name = 'profiles' AND column_name = 'created_at';
-- Should return: created_at

-- 2. Check RLS policies
SELECT tablename, policyname, cmd FROM pg_policies
WHERE schemaname = 'public'
ORDER BY tablename, cmd;
-- Should show 4 policies for each table (SELECT, INSERT, UPDATE, DELETE)

-- 3. Check functions are secure
SELECT routine_name, security_type FROM information_schema.routines
WHERE routine_schema = 'public' AND routine_name = 'is_admin';
-- Should return: security_type = DEFINER

-- 4. Run security advisors again
```

### Step 4: Re-run Security Advisors

After migration, the following lints should be resolved:
- ✅ `function_search_path_mutable` (all 4 functions)
- ✅ `rls_policy_always_true` (profiles table)

Only this should remain (optional):
- ⚠️ `auth_leaked_password_protection` (Auth config - enable in dashboard)

---

## 6. Testing Checklist

After applying the migration, test the following:

### As Regular User:
- [ ] Can view own profile
- [ ] Can update own profile (first_name, last_name, etc.)
- [ ] **Cannot** change own role (should fail)
- [ ] **Cannot** view other users' profiles
- [ ] **Cannot** update other users' profiles
- [ ] Can view own orders
- [ ] Can create new orders
- [ ] Can update own orders
- [ ] **Cannot** view other users' orders

### As Admin User:
- [ ] Can view all profiles
- [ ] Can update any profile (including roles)
- [ ] Can delete profiles
- [ ] Can view all orders
- [ ] Can update any order (change status, etc.)
- [ ] Can delete orders

---

## 7. Files Created

1. **database-security-migration.sql** - Complete migration script to fix all issues
2. **DATABASE_SECURITY_AUDIT_REPORT.md** - This audit report

---

## 8. Recommendations

### Immediate Actions (Required):
1. ✅ Apply `database-security-migration.sql` immediately
2. ✅ Test admin functionality after migration
3. ✅ Verify regular users cannot escalate privileges

### Short-term Actions (Recommended):
1. Enable Leaked Password Protection in Supabase Dashboard
2. Set up database backup schedule
3. Enable auth logging for security monitoring

### Long-term Actions (Nice to have):
1. Implement order history audit log
2. Add profile change audit trail
3. Set up monitoring alerts for failed RLS policy checks

---

## 9. Summary

### Issues Found: 6

| # | Issue | Severity | Status |
|---|-------|----------|--------|
| 1 | Missing profiles.created_at column | Low | Fixed in migration |
| 2 | Functions missing search_path | High | Fixed in migration |
| 3 | RLS policy always true (privilege escalation) | Critical | Fixed in migration |
| 4 | Missing admin access to orders | Medium | Fixed in migration |
| 5 | Missing DELETE policies | Low | Fixed in migration |
| 6 | Leaked password protection disabled | Low | Manual config needed |

### Migration Status:
✅ Migration script created and ready to apply
⚠️ **Action Required:** Apply migration via Supabase Dashboard

---

## Contact & Support

If you encounter any issues applying the migration:
1. Check Supabase Dashboard → Logs for error messages
2. Verify you have the correct permissions to modify the schema
3. Test in a development/staging environment first if possible

**Migration File:** `D:\a3d\database-security-migration.sql`
**Report Date:** 2026-01-06
