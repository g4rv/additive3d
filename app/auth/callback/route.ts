import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ROUTES } from '@/lib/constants';

/**
 * Validates that a redirect URL is internal and safe
 * Prevents open redirect vulnerabilities
 */
function isValidInternalUrl(url: string): boolean {
  try {
    // Allow relative paths that start with /
    if (url.startsWith('/') && !url.startsWith('//')) {
      // Additional check: ensure it doesn't contain any protocol or domain
      return !url.includes('://');
    }
    return false;
  } catch {
    return false;
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get('token_hash');
  const type = searchParams.get('type');
  const code = searchParams.get('code');
  const nextParam = searchParams.get('next');

  // Validate and sanitize the next parameter to prevent open redirects
  const next = nextParam && isValidInternalUrl(nextParam) ? nextParam : ROUTES.dashboard;

  // Get the correct origin for redirects (handles proxy headers from Coolify/nginx)
  const protocol = request.headers.get('x-forwarded-proto') || 'https';
  const host = request.headers.get('host');
  const origin = process.env.NEXT_PUBLIC_SITE_URL || `${protocol}://${host}`;

  console.log('Callback params:', { token_hash, type, code, next });

  const supabase = await createClient();

  // Handle password recovery flow (uses token_hash)
  if (token_hash && type === 'recovery') {
    const { error } = await supabase.auth.verifyOtp({
      token_hash,
      type: 'recovery',
    });

    if (!error) {
      // Successfully verified recovery token, redirect to reset password page with recovery flag
      return NextResponse.redirect(new URL(`${ROUTES.resetPassword}?recovery=true`, origin));
    }

    console.error('Password recovery verification error:', error);
    // If verification failed, redirect to forgot password with error
    return NextResponse.redirect(
      new URL(`${ROUTES.forgotPassword}?error=Посилання для скидання пароля застаріло або недійсне`, origin)
    );
  }

  // Handle PKCE flow (uses code parameter)
  if (code) {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error && data.session) {
      console.log('Session exchanged successfully, redirecting to:', next);
      // Successfully verified email, redirect to intended destination
      return NextResponse.redirect(new URL(next, origin));
    }

    console.error('Code exchange error:', error);
  }

  // If there's an error or no valid parameters, redirect to login with error message
  console.log('No valid auth parameters, redirecting to login');
  return NextResponse.redirect(
    new URL(`${ROUTES.login}?error=Помилка підтвердження`, origin)
  );
}
