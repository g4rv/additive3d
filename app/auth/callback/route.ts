import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ROUTES } from '@/lib/constants';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? ROUTES.dashboard;

  if (code) {
    const supabase = await createClient();

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // Redirect to the intended destination or dashboard
      return NextResponse.redirect(new URL(next, request.url));
    }
  }

  // If there's an error or no code, redirect to login with error message
  return NextResponse.redirect(
    new URL(`${ROUTES.login}?error=Помилка підтвердження електронної пошти`, request.url)
  );
}
