import { updateSession } from '@/lib/supabase/middleware'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { ROUTES } from '@/lib/constants'

// Define protected routes that require authentication AND email verification
const protectedRoutes = [ROUTES.dashboard, ROUTES.profile]

// Define admin routes that require admin role
const adminRoutes = [ROUTES.adminDashboard, ROUTES.adminMockManage]

// Define auth routes that should redirect if already authenticated
const authRoutes = [ROUTES.login, ROUTES.register]

// Define verification routes that require authentication but NOT email verification
const verificationRoutes = [ROUTES.verifyEmail]

// Define routes that show auth-required banner instead of redirecting to login
const authRequiredRoutes = [ROUTES.calculator]

export async function proxy(request: NextRequest) {
  const { supabaseResponse, user, supabase } = await updateSession(request)

  const path = request.nextUrl.pathname

  // Check route types
  const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route))
  const isAdminRoute = adminRoutes.some((route) => path.startsWith(route))
  const isAuthRoute = authRoutes.some((route) => path.startsWith(route))
  const isVerificationRoute = verificationRoutes.some((route) => path.startsWith(route))
  const isAuthRequiredRoute = authRequiredRoutes.some((route) => path.startsWith(route))

  // --- Auth Required Routes Logic ---
  // Routes like calculator that should show auth-required banner for unauthenticated users
  if (isAuthRequiredRoute) {
    // Not authenticated → redirect to auth-required page
    if (!user) {
      return NextResponse.redirect(new URL(ROUTES.authRequired, request.url))
    }
    // Check email verification
    if (!user.email_confirmed_at) {
      return NextResponse.redirect(new URL(ROUTES.verifyEmail, request.url))
    }
    // Authenticated and verified → allow access
    return supabaseResponse
  }

  // --- Verification Routes Logic ---
  // Routes like /auth/verify-email are accessible to everyone (no session required)
  // because signup doesn't create a session when email confirmation is enabled
  if (isVerificationRoute) {
    // If user has a session and is already verified → redirect to dashboard
    if (user && user.email_confirmed_at) {
      return NextResponse.redirect(new URL(ROUTES.dashboard, request.url))
    }
    // No session or unverified → allow access to verify-email page
    return supabaseResponse
  }

  // --- Protected Routes Logic ---
  // Redirect to login if accessing protected route without authentication
  if (isProtectedRoute && !user) {
    const loginUrl = new URL(ROUTES.login, request.url)
    loginUrl.searchParams.set('redirect', path)
    return NextResponse.redirect(loginUrl)
  }

  // Check email verification for protected routes
  if (isProtectedRoute && !user?.email_confirmed_at) {
    return NextResponse.redirect(new URL(ROUTES.verifyEmail, request.url))
  }

  // --- Admin Routes Logic ---
  // Admin routes use route-level authorization (see lib/auth/route-protection.ts)
  // Here we only check authentication and email verification
  if (isAdminRoute) {
    // Not authenticated → redirect to login
    if (!user) {
      const loginUrl = new URL(ROUTES.login, request.url)
      loginUrl.searchParams.set('redirect', path)
      return NextResponse.redirect(loginUrl)
    }

    // Check email verification
    if (!user.email_confirmed_at) {
      return NextResponse.redirect(new URL(ROUTES.verifyEmail, request.url))
    }

    // Role check happens at route level via requireAdmin()
    return supabaseResponse
  }

  // --- Auth Routes Logic ---
  // Redirect to dashboard if accessing auth routes while authenticated and verified
  if (isAuthRoute && user && user.email_confirmed_at) {
    return NextResponse.redirect(new URL(ROUTES.dashboard, request.url))
  }

  return supabaseResponse
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
