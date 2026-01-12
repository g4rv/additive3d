import { createClient } from '@/lib/supabase/server';

export type RateLimitAction = 'login' | 'signup' | 'password_reset' | 'email_change' | 'order_submission';

export interface RateLimitConfig {
  maxAttempts: number; // Maximum attempts allowed
  windowMinutes: number; // Time window in minutes
  lockoutMinutes: number; // How long to lock out after max attempts
}

// Default rate limit configurations
const RATE_LIMIT_CONFIGS: Record<RateLimitAction, RateLimitConfig> = {
  login: {
    maxAttempts: 10,
    windowMinutes: 15,
    lockoutMinutes: 15,
  },
  signup: {
    maxAttempts: 10,
    windowMinutes: 30,
    lockoutMinutes: 30,
  },
  password_reset: {
    maxAttempts: 3,
    windowMinutes: 60,
    lockoutMinutes: 60,
  },
  email_change: {
    maxAttempts: 3,
    windowMinutes: 60,
    lockoutMinutes: 60,
  },
  order_submission: {
    maxAttempts: 5,
    windowMinutes: 60,
    lockoutMinutes: 60,
  },
};

export interface RateLimitResult {
  allowed: boolean;
  remainingAttempts: number;
  lockedUntil?: Date;
  resetAt: Date;
}

/**
 * Check if an action is rate limited for a given identifier
 * @param identifier - Email, IP address, or other unique identifier
 * @param action - The action being rate limited
 * @returns RateLimitResult with allowed status and remaining attempts
 */
export async function checkRateLimit(
  identifier: string,
  action: RateLimitAction
): Promise<RateLimitResult> {
  const supabase = await createClient();
  const config = RATE_LIMIT_CONFIGS[action];
  const now = new Date();

  // Get existing rate limit record
  const { data: rateLimit, error } = await supabase
    .from('auth_rate_limits')
    .select('*')
    .eq('identifier', identifier)
    .eq('action', action)
    .single();

  // If no record exists, allow the action
  if (error || !rateLimit) {
    return {
      allowed: true,
      remainingAttempts: config.maxAttempts - 1,
      resetAt: new Date(now.getTime() + config.windowMinutes * 60 * 1000),
    };
  }

  // Check if currently locked out
  if (rateLimit.locked_until) {
    const lockedUntil = new Date(rateLimit.locked_until);
    if (now < lockedUntil) {
      return {
        allowed: false,
        remainingAttempts: 0,
        lockedUntil,
        resetAt: lockedUntil,
      };
    }
  }

  // Check if we're still within the time window
  const lastAttempt = new Date(rateLimit.last_attempt_at);
  const windowEnd = new Date(lastAttempt.getTime() + config.windowMinutes * 60 * 1000);

  // If outside the window, reset the counter
  if (now > windowEnd) {
    return {
      allowed: true,
      remainingAttempts: config.maxAttempts - 1,
      resetAt: new Date(now.getTime() + config.windowMinutes * 60 * 1000),
    };
  }

  // Within window, check if max attempts exceeded
  const remainingAttempts = config.maxAttempts - rateLimit.attempts;

  if (remainingAttempts <= 0) {
    return {
      allowed: false,
      remainingAttempts: 0,
      lockedUntil: windowEnd,
      resetAt: windowEnd,
    };
  }

  return {
    allowed: true,
    remainingAttempts: remainingAttempts - 1, // Account for the current attempt
    resetAt: windowEnd,
  };
}

/**
 * Record a failed attempt for rate limiting
 * @param identifier - Email, IP address, or other unique identifier
 * @param action - The action being rate limited
 */
export async function recordFailedAttempt(
  identifier: string,
  action: RateLimitAction
): Promise<void> {
  const supabase = await createClient();
  const config = RATE_LIMIT_CONFIGS[action];
  const now = new Date();

  // Get existing record
  const { data: existing } = await supabase
    .from('auth_rate_limits')
    .select('*')
    .eq('identifier', identifier)
    .eq('action', action)
    .single();

  if (!existing) {
    // Create new record
    await supabase.from('auth_rate_limits').insert({
      identifier,
      action,
      attempts: 1,
      last_attempt_at: now.toISOString(),
    });
    return;
  }

  const lastAttempt = new Date(existing.last_attempt_at);
  const windowEnd = new Date(lastAttempt.getTime() + config.windowMinutes * 60 * 1000);

  // If outside window, reset counter
  if (now > windowEnd) {
    await supabase
      .from('auth_rate_limits')
      .update({
        attempts: 1,
        last_attempt_at: now.toISOString(),
        locked_until: null,
        updated_at: now.toISOString(),
      })
      .eq('identifier', identifier)
      .eq('action', action);
    return;
  }

  // Increment attempts
  const newAttempts = existing.attempts + 1;
  const shouldLock = newAttempts >= config.maxAttempts;

  await supabase
    .from('auth_rate_limits')
    .update({
      attempts: newAttempts,
      last_attempt_at: now.toISOString(),
      locked_until: shouldLock
        ? new Date(now.getTime() + config.lockoutMinutes * 60 * 1000).toISOString()
        : null,
      updated_at: now.toISOString(),
    })
    .eq('identifier', identifier)
    .eq('action', action);
}

/**
 * Record a successful attempt and reset the counter
 * @param identifier - Email, IP address, or other unique identifier
 * @param action - The action being rate limited
 */
export async function recordSuccessfulAttempt(
  identifier: string,
  action: RateLimitAction
): Promise<void> {
  const supabase = await createClient();

  // Delete the rate limit record on success
  await supabase
    .from('auth_rate_limits')
    .delete()
    .eq('identifier', identifier)
    .eq('action', action);
}

/**
 * Get the user's IP address from the request headers
 */
export function getClientIp(headers: Headers): string {
  // Try various headers in order of preference
  const forwardedFor = headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  const realIp = headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }

  const cfConnectingIp = headers.get('cf-connecting-ip');
  if (cfConnectingIp) {
    return cfConnectingIp;
  }

  return 'unknown';
}

/**
 * Format rate limit error message for user display
 */
export function formatRateLimitError(result: RateLimitResult, action: RateLimitAction): string {
  if (result.lockedUntil) {
    const minutes = Math.ceil((result.lockedUntil.getTime() - Date.now()) / 60000);

    switch (action) {
      case 'login':
        return `Забагато невдалих спроб входу. Спробуйте знову через ${minutes} хв.`;
      case 'signup':
        return `Забагато спроб реєстрації. Спробуйте знову через ${minutes} хв.`;
      case 'password_reset':
        return `Забагато запитів на скидання пароля. Спробуйте знову через ${minutes} хв.`;
      case 'email_change':
        return `Забагато спроб зміни email. Спробуйте знову через ${minutes} хв.`;
      case 'order_submission':
        return `Перевищено ліміт замовлень. Спробуйте знову через ${minutes} хв.`;
    }
  }

  return 'Перевищено ліміт запитів. Спробуйте пізніше.';
}
