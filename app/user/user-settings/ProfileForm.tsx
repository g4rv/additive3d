'use client';

import SubmitButton from '@/components/ui/submit-button/SubmitButton';
import { PhoneInput } from '@/components/ui/phone-input';
import type { Profile } from '@/lib/types/auth';
import { AlertCircle, Building2, User } from 'lucide-react';
import { useActionState, useEffect, useState } from 'react';
import { updateProfile } from './actions';
import type { ProfileFormData } from '@/lib/validation/schemas';
import type { FormState } from '@/lib/validation/utils';
import { useToast } from '@/components/ui/toast';

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
  const { success: showToast, ToastContainer } = useToast();

  // Track form values for change detection
  const [formValues, setFormValues] = useState({
    first_name: profile.first_name,
    last_name: profile.last_name,
    phone_number: profile.phone_number,
    organization_name: profile.organization_name || '',
  });

  // Check if form has changed
  const hasChanged =
    formValues.first_name !== profile.first_name ||
    formValues.last_name !== profile.last_name ||
    formValues.phone_number !== profile.phone_number ||
    formValues.organization_name !== (profile.organization_name || '');

  // Show toast on success
  useEffect(() => {
    if (state?.success) {
      showToast(state.success);
    }
  }, [state?.success, showToast]);

  return (
    <>
      <ToastContainer />
      <form action={formAction} className="flex flex-col gap-5">
        {/* Error Message */}
        {state?.error && (
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
              value={formValues.first_name}
              onChange={(e) => setFormValues({ ...formValues, first_name: e.target.value })}
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
              value={formValues.last_name}
              onChange={(e) => setFormValues({ ...formValues, last_name: e.target.value })}
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
      <PhoneInput
        name="phone_number"
        label="Номер телефону"
        required
        value={formValues.phone_number}
        onChange={(e) => setFormValues({ ...formValues, phone_number: e.target.value })}
        error={state?.fieldErrors?.phone_number}
      />

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
            value={formValues.organization_name}
            onChange={(e) => setFormValues({ ...formValues, organization_name: e.target.value })}
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
        <SubmitButton text="Зберегти зміни" pendingText="Збереження..." disabled={!hasChanged} />
      </form>
    </>
  );
}
