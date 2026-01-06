'use client';

import SubmitButton from '@/components/ui/submit-button/SubmitButton';
import type { Profile } from '@/lib/types/auth';
import { AlertCircle, Building2, CheckCircle2, Phone, User } from 'lucide-react';
import { useActionState } from 'react';
import { updateProfile } from './actions';
import type { ProfileFormData } from '@/lib/validation/schemas';
import type { FormState } from '@/lib/validation/utils';

interface ProfileFormProps {
  profile: Profile;
}

export default function ProfileForm({ profile }: ProfileFormProps) {
  const initial: FormState<ProfileFormData> = {
    error: '',
    fieldErrors: {},
    values: {},
  };
  const [state, formAction] = useActionState(updateProfile, initial);

  return (
    <form action={formAction} className="flex flex-col gap-5">
      {/* Success Message */}
      {state?.success && (
        <div className="alert alert-success">
          <CheckCircle2 className="h-5 w-5" />
          <span>{state.success}</span>
        </div>
      )}

      {/* Error Message */}
      {state?.error && !state?.success && (
        <div className="alert alert-error">
          <AlertCircle className="h-5 w-5" />
          <span>{state.error}</span>
        </div>
      )}

      <p className="text-sm text-base-content/70">
        Оновіть вашу контактну інформацію та дані організації
      </p>

      {/* Name Fields Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* First Name Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="first_name" className="text-sm font-medium">
            Ім&apos;я <span className="text-error">*</span>
          </label>
          <div className="relative">
            <div className="text-base-content/50 absolute top-1/2 left-4 -translate-y-1/2">
              <User className="h-5 w-5" />
            </div>
            <input
              type="text"
              id="first_name"
              name="first_name"
              defaultValue={state?.values?.first_name || profile.first_name}
              className={`bg-base-300 w-full rounded border py-3 pr-4 pl-12 transition-colors focus:outline-none ${
                state?.fieldErrors?.first_name
                  ? 'border-error focus:border-error'
                  : 'focus:border-primary border-transparent'
              }`}
              placeholder="Іван"
            />
          </div>
          {state?.fieldErrors?.first_name && (
            <p className="text-error text-xs">{state.fieldErrors.first_name}</p>
          )}
        </div>

        {/* Last Name Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="last_name" className="text-sm font-medium">
            Прізвище <span className="text-error">*</span>
          </label>
          <div className="relative">
            <div className="text-base-content/50 absolute top-1/2 left-4 -translate-y-1/2">
              <User className="h-5 w-5" />
            </div>
            <input
              type="text"
              id="last_name"
              name="last_name"
              defaultValue={state?.values?.last_name || profile.last_name}
              className={`bg-base-300 w-full rounded border py-3 pr-4 pl-12 transition-colors focus:outline-none ${
                state?.fieldErrors?.last_name
                  ? 'border-error focus:border-error'
                  : 'focus:border-primary border-transparent'
              }`}
              placeholder="Коваль"
            />
          </div>
          {state?.fieldErrors?.last_name && (
            <p className="text-error text-xs">{state.fieldErrors.last_name}</p>
          )}
        </div>
      </div>

      {/* Phone Input */}
      <div className="flex flex-col gap-2">
        <label htmlFor="phone_number" className="text-sm font-medium">
          Номер телефону <span className="text-error">*</span>
        </label>
        <div className="relative">
          <div className="text-base-content/50 absolute top-1/2 left-4 -translate-y-1/2">
            <Phone className="h-5 w-5" />
          </div>
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            defaultValue={state?.values?.phone_number || profile.phone_number}
            className={`bg-base-300 w-full rounded border py-3 pr-4 pl-12 transition-colors focus:outline-none ${
              state?.fieldErrors?.phone_number
                ? 'border-error focus:border-error'
                : 'focus:border-primary border-transparent'
            }`}
            placeholder="+380 XX XXX XX XX"
          />
        </div>
        {state?.fieldErrors?.phone_number && (
          <p className="text-error text-xs">{state.fieldErrors.phone_number}</p>
        )}
      </div>

      {/* Organization Input */}
      <div className="flex flex-col gap-2">
        <label htmlFor="organization_name" className="text-sm font-medium">
          Назва організації
        </label>
        <div className="relative">
          <div className="text-base-content/50 absolute top-1/2 left-4 -translate-y-1/2">
            <Building2 className="h-5 w-5" />
          </div>
          <input
            type="text"
            id="organization_name"
            name="organization_name"
            defaultValue={state?.values?.organization_name || profile.organization_name}
            className={`bg-base-300 w-full rounded border py-3 pr-4 pl-12 transition-colors focus:outline-none ${
              state?.fieldErrors?.organization_name
                ? 'border-error focus:border-error'
                : 'focus:border-primary border-transparent'
            }`}
            placeholder="Назва вашої компанії"
          />
        </div>
        {state?.fieldErrors?.organization_name && (
          <p className="text-error text-xs">{state.fieldErrors.organization_name}</p>
        )}
      </div>

      {/* Submit Button */}
      <SubmitButton text="Зберегти зміни" pendingText="Збереження..." />
    </form>
  );
}
