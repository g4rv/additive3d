'use client';

import { Lock, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

interface PasswordInputProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  autoComplete?: string;
  error?: string;
  required?: boolean;
  className?: string;
}

export default function PasswordInput({
  id,
  name,
  label,
  placeholder,
  autoComplete = 'current-password',
  error,
  required = false,
  className = '',
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {required && <span className="text-error"> *</span>}
      </label>
      <div className="relative w-full">
        <div className="text-base-content/50 absolute top-1/2 left-4 -translate-y-1/2">
          <Lock className="size-5" />
        </div>
        <input
          type={showPassword ? 'text' : 'password'}
          id={id}
          name={name}
          autoComplete={autoComplete}
          className={`bg-base-300 w-full rounded border py-3 pr-12 pl-12 transition-colors focus:outline-none ${
            error
              ? 'border-error focus:border-error'
              : 'focus:border-primary border-transparent'
          }`}
          placeholder={placeholder}
          required={required}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="text-base-content/50 hover:text-base-content absolute top-1/2 right-4 -translate-y-1/2 transition-colors duration-[var(--duration-fast)]"
          aria-label={showPassword ? 'Сховати пароль' : 'Показати пароль'}
        >
          {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
        </button>
      </div>
      {error && <p className="text-error text-xs">{error}</p>}
    </div>
  );
}
