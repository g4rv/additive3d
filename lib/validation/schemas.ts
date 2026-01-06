import { z } from 'zod';
import { ERROR_MESSAGES } from './error-messages';

// Reusable field validators
export const emailField = z
  .string()
  .min(1, ERROR_MESSAGES.EMAIL_REQUIRED)
  .email(ERROR_MESSAGES.EMAIL_INVALID);

export const passwordField = z
  .string()
  .min(1, ERROR_MESSAGES.PASSWORD_REQUIRED)
  .min(8, ERROR_MESSAGES.PASSWORD_MIN_LENGTH);

export const strongPasswordField = z
  .string()
  .min(1, ERROR_MESSAGES.PASSWORD_REQUIRED)
  .min(8, ERROR_MESSAGES.PASSWORD_MIN_LENGTH)
  .regex(/[A-Z]/, ERROR_MESSAGES.PASSWORD_UPPERCASE)
  .regex(/[a-z]/, ERROR_MESSAGES.PASSWORD_LOWERCASE)
  .regex(/[0-9]/, ERROR_MESSAGES.PASSWORD_NUMBER);

export const firstNameField = z
  .string()
  .min(1, ERROR_MESSAGES.FIRST_NAME_REQUIRED)
  .min(2, ERROR_MESSAGES.FIRST_NAME_MIN_LENGTH)
  .max(50, ERROR_MESSAGES.FIRST_NAME_MAX_LENGTH);

export const lastNameField = z
  .string()
  .min(1, ERROR_MESSAGES.LAST_NAME_REQUIRED)
  .min(2, ERROR_MESSAGES.LAST_NAME_MIN_LENGTH)
  .max(50, ERROR_MESSAGES.LAST_NAME_MAX_LENGTH);

export const phoneField = z
  .string()
  .min(1, ERROR_MESSAGES.PHONE_REQUIRED)
  .regex(/^\+?[\d\s\-\(\)]+$/, ERROR_MESSAGES.PHONE_INVALID);

// Optional organization field - allows empty string or omitted
export const organizationField = z
  .string()
  .trim()
  .max(100, ERROR_MESSAGES.ORGANIZATION_MAX_LENGTH)
  .optional()
  .or(z.literal(''));

// Login schema
export const loginSchema = z.object({
  email: emailField,
  password: passwordField,
});

// Register schema
export const registerSchema = z
  .object({
    first_name: firstNameField,
    last_name: lastNameField,
    email: emailField,
    phone_number: phoneField,
    organization_name: organizationField,
    password: strongPasswordField,
    confirm_password: z.string().min(1, ERROR_MESSAGES.CONFIRM_PASSWORD_REQUIRED),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: ERROR_MESSAGES.PASSWORD_MISMATCH,
    path: ['confirm_password'],
  });

// Profile update schema
export const profileSchema = z.object({
  first_name: firstNameField,
  last_name: lastNameField,
  phone_number: phoneField,
  organization_name: organizationField,
});

// Forgot password schema
export const forgotPasswordSchema = z.object({
  email: emailField,
});

// Reset password schema
export const resetPasswordSchema = z
  .object({
    password: strongPasswordField,
    confirm_password: z.string().min(1, ERROR_MESSAGES.CONFIRM_PASSWORD_REQUIRED),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: ERROR_MESSAGES.PASSWORD_MISMATCH,
    path: ['confirm_password'],
  });

// TypeScript types derived from schemas
export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type ProfileFormData = z.infer<typeof profileSchema>;
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
