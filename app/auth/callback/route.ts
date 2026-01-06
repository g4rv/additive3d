import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ROUTES } from '@/lib/constants';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get('token_hash');
  const type = searchParams.get('type');
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? ROUTES.dashboard;

  const supabase = await createClient();

  // Handle password recovery flow (uses token_hash)
  if (token_hash && type === 'recovery') {
    const { error } = await supabase.auth.verifyOtp({
      token_hash,
      type: 'recovery',
    });

    if (!error) {
      // Successfully verified recovery token, redirect to reset password page
      return NextResponse.redirect(new URL(ROUTES.resetPassword, request.url));
    }

    // If verification failed, redirect to forgot password with error
    return NextResponse.redirect(
      new URL(`${ROUTES.forgotPassword}?error=Посилання для скидання пароля застаріло або недійсне`, request.url)
    );
  }

  // Handle email verification flow (uses code)
  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // Successfully verified email, redirect to intended destination
      return NextResponse.redirect(new URL(next, request.url));
    }
  }

  // If there's an error or no valid parameters, redirect to login with error message
  return NextResponse.redirect(
    new URL(`${ROUTES.login}?error=Помилка підтвердження`, request.url)
  );
}
