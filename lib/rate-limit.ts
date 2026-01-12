import { createClient } from '@/lib/supabase/server';

export type RateLimitAction = 'login' | 'signup' | 'password_reset' | 'email_change' | 'order_submission';

export interface RateLimitConfig {
  maxAttempts?: number; // Maximum attempts allowed (for auth actions)
  windowMinutes: number; // Time window in minutes
  lockoutMinutes?: number; // How long to lock out after max attempts
  maxBytesPerDay?: number; // Maximum bytes per day (for file uploads)
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
    // 200MB per day limit
    maxBytesPerDay: 200 * 1024 * 1024, // 200MB in bytes
    windowMinutes: 1440, // 24 hours (1 day)
  },
};

export interface RateLimitResult {
  allowed: boolean;
  remainingAttempts?: number;
  remainingBytes?: number;
  lockedUntil?: Date;
  resetAt: Date;
}

export interface FileSizeLimitResult extends RateLimitResult {
  usedBytes: number;
  maxBytes: number;
}

/**
 * Check file size limit for order submissions
 * @param identifier - User email
 * @param fileSizeInBytes - Size of the files being uploaded
 * @returns FileSizeLimitResult with allowed status and remaining bytes
 */
export async function checkFileSizeLimit(
  identifier: string,
  fileSizeInBytes: number
): Promise<FileSizeLimitResult> {
  const supabase = await createClient();
  const config = RATE_LIMIT_CONFIGS.order_submission;
  const maxBytes = config.maxBytesPerDay!;
  const now = new Date();

  // Get existing record
  const { data: rateLimit, error } = await supabase
    .from('auth_rate_limits')
    .select('*')
    .eq('identifier', identifier)
    .eq('action', 'order_submission')
    .single();

  // If no record exists, check if file size exceeds daily limit
  if (error || !rateLimit) {
    return {
      allowed: fileSizeInBytes <= maxBytes,
      remainingBytes: Math.max(0, maxBytes - fileSizeInBytes),
      usedBytes: 0,
      maxBytes,
      resetAt: new Date(now.getTime() + config.windowMinutes * 60 * 1000),
    };
  }

  // Check if we're still within the time window (24 hours)
  const lastAttempt = new Date(rateLimit.last_attempt_at);
  const windowEnd = new Date(lastAttempt.getTime() + config.windowMinutes * 60 * 1000);

  // If outside the window (new day), reset counter
  if (now > windowEnd) {
    return {
      allowed: fileSizeInBytes <= maxBytes,
      remainingBytes: Math.max(0, maxBytes - fileSizeInBytes),
      usedBytes: 0,
      maxBytes,
      resetAt: new Date(now.getTime() + config.windowMinutes * 60 * 1000),
    };
  }

  // Within window, check if adding this file would exceed daily limit
  const usedBytes = (rateLimit as any).total_bytes || 0;
  const newTotalBytes = usedBytes + fileSizeInBytes;

  return {
    allowed: newTotalBytes <= maxBytes,
    remainingBytes: Math.max(0, maxBytes - newTotalBytes),
    usedBytes,
    maxBytes,
    resetAt: windowEnd,
  };
}

/**
 * Record file size usage after successful order submission
 * @param identifier - User email
 * @param fileSizeInBytes - Size of the files that were uploaded
 */
export async function recordFileSizeUsage(
  identifier: string,
  fileSizeInBytes: number
): Promise<void> {
  const supabase = await createClient();
  const config = RATE_LIMIT_CONFIGS.order_submission;
  const now = new Date();

  // Get existing record
  const { data: existing } = await supabase
    .from('auth_rate_limits')
    .select('*')
    .eq('identifier', identifier)
    .eq('action', 'order_submission')
    .single();

  if (!existing) {
    // Create new record
    await supabase.from('auth_rate_limits').insert({
      identifier,
      action: 'order_submission',
      total_bytes: fileSizeInBytes,
      last_attempt_at: now.toISOString(),
    });
    return;
  }

  const lastAttempt = new Date(existing.last_attempt_at);
  const windowEnd = new Date(lastAttempt.getTime() + config.windowMinutes * 60 * 1000);

  // If outside window (new day), reset counter
  if (now > windowEnd) {
    await supabase
      .from('auth_rate_limits')
      .update({
        total_bytes: fileSizeInBytes,
        last_attempt_at: now.toISOString(),
        updated_at: now.toISOString(),
      })
      .eq('identifier', identifier)
      .eq('action', 'order_submission');
    return;
  }

  // Add to existing total
  await supabase
    .from('auth_rate_limits')
    .update({
      total_bytes: ((existing as any).total_bytes || 0) + fileSizeInBytes,
      last_attempt_at: now.toISOString(),
      updated_at: now.toISOString(),
    })
    .eq('identifier', identifier)
    .eq('action', 'order_submission');
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
      remainingAttempts: config.maxAttempts ? config.maxAttempts - 1 : undefined,
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
      remainingAttempts: config.maxAttempts ? config.maxAttempts - 1 : undefined,
      resetAt: new Date(now.getTime() + config.windowMinutes * 60 * 1000),
    };
  }

  // Within window, check if max attempts exceeded
  const remainingAttempts = config.maxAttempts ? config.maxAttempts - rateLimit.attempts : 0;

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
  const shouldLock = config.maxAttempts ? newAttempts >= config.maxAttempts : false;

  await supabase
    .from('auth_rate_limits')
    .update({
      attempts: newAttempts,
      last_attempt_at: now.toISOString(),
      locked_until: shouldLock && config.lockoutMinutes
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
  if ('remainingBytes' in result && action === 'order_submission') {
    const sizeResult = result as FileSizeLimitResult;
    const usedMB = (sizeResult.usedBytes / (1024 * 1024)).toFixed(1);
    const maxMB = (sizeResult.maxBytes / (1024 * 1024)).toFixed(0);
    const hours = Math.ceil((sizeResult.resetAt.getTime() - Date.now()) / (1000 * 60 * 60));

    if (!sizeResult.allowed) {
      return `Перевищено денний ліміт файлів (${maxMB}MB). Використано: ${usedMB}MB. Ліміт оновиться через ${hours} год.`;
    }
  }

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
    }
  }

  return 'Перевищено ліміт запитів. Спробуйте пізніше.';
}
