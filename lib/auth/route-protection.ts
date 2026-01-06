import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { ROUTES } from '@/lib/constants'
import type { User } from '@supabase/supabase-js'
import type { Database } from '@/lib/types/database'

type Profile = Database['public']['Tables']['profiles']['Row']

export type UserWithProfile = User & {
  profile: Profile | null
}

/**
 * Get the current authenticated user with their profile.
 * Returns null if not authenticated.
 */
export async function getCurrentUserWithProfile(): Promise<UserWithProfile | null> {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return null
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  return {
    ...user,
    profile,
  }
}

/**
 * Require authentication for a route.
 * Redirects to login if not authenticated.
 * Redirects to verify-email if email not verified.
 * Returns the authenticated user with profile.
 */
export async function requireAuth(): Promise<UserWithProfile> {
  const user = await getCurrentUserWithProfile()

  if (!user) {
    redirect(ROUTES.login)
  }

  // Check email verification
  if (!user.email_confirmed_at) {
    redirect(ROUTES.verifyEmail)
  }

  return user
}

/**
 * Require admin role for a route.
 * Redirects to login if not authenticated.
 * Redirects to verify-email if email not verified.
 * Redirects to dashboard if not admin.
 * Returns the authenticated admin user with profile.
 */
export async function requireAdmin(): Promise<UserWithProfile> {
  const user = await requireAuth()

  if (user.profile?.role !== 'admin') {
    redirect(ROUTES.dashboard)
  }

  return user
}

/**
 * Get the current user if authenticated, without redirecting.
 * Useful for optional authentication (e.g., showing different UI for logged-in users).
 */
export async function getOptionalUser(): Promise<UserWithProfile | null> {
  return getCurrentUserWithProfile()
}
