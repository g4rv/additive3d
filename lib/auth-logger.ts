import { createClient } from '@/lib/supabase/server';

export type AuthEventType =
  | 'login_success'
  | 'login_failed'
  | 'signup'
  | 'password_reset_requested'
  | 'password_reset_completed'
  | 'password_changed'
  | 'email_change_requested'
  | 'email_changed'
  | 'logout'
  | 'consent_given'
  | 'consent_revoked';

export interface AuthLogData {
  userId?: string; // UUID of the user (if available)
  email: string; // Email address involved
  eventType: AuthEventType; // Type of authentication event
  ipAddress?: string; // Client IP address
  userAgent?: string; // Browser/device info
  metadata?: Record<string, any>; // Additional context
}

/**
 * Log an authentication event to the database
 * This provides comprehensive audit trail for security monitoring
 */
export async function logAuthEvent(data: AuthLogData): Promise<void> {
  try {
    const supabase = await createClient();

    await supabase.from('auth_logs').insert({
      user_id: data.userId || null,
      event_type: data.eventType,
      email: data.email.toLowerCase(),
      ip_address: data.ipAddress || null,
      user_agent: data.userAgent || null,
      metadata: data.metadata || {},
    });
  } catch (error) {
    // Log to console but don't throw - we don't want logging failures to break auth flows
    console.error('Failed to log auth event:', error);
  }
}

/**
 * Get recent authentication events for a user
 * Useful for "Recent Activity" dashboard
 */
export async function getUserAuthLogs(
  userId: string,
  limit: number = 20
): Promise<any[]> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from('auth_logs')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Failed to fetch auth logs:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Failed to fetch auth logs:', error);
    return [];
  }
}

/**
 * Get failed login attempts for security monitoring
 * Useful for detecting brute force attacks
 */
export async function getFailedLoginAttempts(
  email: string,
  hoursBack: number = 24
): Promise<number> {
  try {
    const supabase = await createClient();

    const { count, error } = await supabase
      .from('auth_logs')
      .select('*', { count: 'exact', head: true })
      .eq('email', email.toLowerCase())
      .eq('event_type', 'login_failed')
      .gte('created_at', new Date(Date.now() - hoursBack * 60 * 60 * 1000).toISOString());

    if (error) {
      console.error('Failed to count failed attempts:', error);
      return 0;
    }

    return count || 0;
  } catch (error) {
    console.error('Failed to count failed attempts:', error);
    return 0;
  }
}

/**
 * Get authentication events by IP address
 * Useful for detecting distributed attacks or suspicious patterns
 */
export async function getAuthLogsByIp(
  ipAddress: string,
  limit: number = 50
): Promise<any[]> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from('auth_logs')
      .select('*')
      .eq('ip_address', ipAddress)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Failed to fetch auth logs by IP:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Failed to fetch auth logs by IP:', error);
    return [];
  }
}

/**
 * Check for suspicious login patterns
 * Returns true if suspicious activity detected
 */
export async function detectSuspiciousActivity(
  email: string,
  ipAddress: string
): Promise<boolean> {
  try {
    const failedAttempts = await getFailedLoginAttempts(email, 1);

    // Flag as suspicious if more than 3 failed attempts in last hour
    if (failedAttempts >= 3) {
      return true;
    }

    // Check for rapid login attempts from different IPs (potential account takeover)
    const supabase = await createClient();
    const { data } = await supabase
      .from('auth_logs')
      .select('ip_address')
      .eq('email', email.toLowerCase())
      .gte('created_at', new Date(Date.now() - 60 * 60 * 1000).toISOString())
      .limit(10);

    if (data && data.length > 5) {
      const uniqueIps = new Set(data.map((log) => log.ip_address));
      // If more than 3 different IPs in last hour, flag as suspicious
      if (uniqueIps.size > 3) {
        return true;
      }
    }

    return false;
  } catch (error) {
    console.error('Failed to detect suspicious activity:', error);
    return false;
  }
}
