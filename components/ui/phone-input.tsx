'use client';

import { Phone } from 'lucide-react';
import { forwardRef, InputHTMLAttributes, useEffect, useState } from 'react';

interface PhoneInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  error?: string;
  label?: string;
  required?: boolean;
  showIcon?: boolean;
  helperText?: string;
}

/**
 * PhoneInput component for Ukrainian phone numbers
 * Automatically formats input as: +380 XX XXX XX XX
 * Validates UA phone numbers only
 */
export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      error,
      label,
      required = false,
      showIcon = true,
      helperText,
      className = '',
      id,
      name,
      placeholder = 'XXXXXXXXX',
      disabled,
      ...props
    },
    ref
  ) => {
    const prefix = '+380';

    // Format phone number helper function
    const formatPhoneNumber = (input: string): string => {
      // Remove all non-digit characters except +
      const cleaned = input.replace(/[^\d+]/g, '');

      // Extract digits only (remove +380 prefix if exists)
      let digits = cleaned.replace(/^\+?380/, '');

      // Limit to 9 digits
      digits = digits.slice(0, 9);

      // Return digits as-is without formatting
      return digits;
    };

    // Determine if component is controlled or uncontrolled
    const isControlled = value !== undefined;
    const initialValue = (isControlled ? value : defaultValue) || '';

    const [internalValue, setInternalValue] = useState(() => {
      return formatPhoneNumber(initialValue as string);
    });

    // Update internal value when controlled value changes
    useEffect(() => {
      if (isControlled) {
        const formatted = formatPhoneNumber((value as string) || '');
        setInternalValue(formatted);
      }
    }, [isControlled, value]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target.value;

      // If user clears the field completely
      if (!input || input === prefix || input === '+' || input === '+3' || input === '+38') {
        setInternalValue('');

        // For controlled components, call onChange
        if (isControlled && onChange) {
          onChange(e);
        }
        return;
      }

      // Format the input
      const formatted = formatPhoneNumber(input);
      setInternalValue(formatted);

      // For controlled components, call onChange with modified event
      if (onChange) {
        // Get clean phone number for validation (with +380 prefix)
        const fullNumber = formatted ? `+380${formatted}` : '';

        // Create a new event with the full number
        const syntheticEvent = {
          ...e,
          target: {
            ...e.target,
            value: fullNumber,
            name: e.target.name,
          },
        } as React.ChangeEvent<HTMLInputElement>;

        onChange(syntheticEvent);
      }
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      // Don't auto-add prefix anymore, let user type naturally
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      props.onBlur?.(e);
    };

    const inputId = id || name || 'phone_number';

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="text-base-content mb-2 block text-sm font-medium">
            {label} {required && <span className="text-error">*</span>}
          </label>
        )}
        <div className="relative">
          {showIcon && (
            <div className="text-base-content/50 absolute top-1/2 left-4 -translate-y-1/2">
              <Phone className="size-5" />
            </div>
          )}

          {/* Prefix display */}
          <div className="text-base-content absolute top-1/2 -translate-y-1/2 pointer-events-none font-medium" style={{ left: showIcon ? '3.5rem' : '1rem' }}>
            {prefix}
          </div>

          <input
            ref={ref}
            type="tel"
            id={inputId}
            name={name}
            value={internalValue}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            className={`bg-base-300 text-base-content placeholder:text-base-content/40 w-full rounded border py-3 transition-colors duration-[var(--duration-normal)] focus:outline-none ${
              showIcon ? 'pl-12' : 'pl-4'
            } ${
              error
                ? 'border-error focus:border-error'
                : 'focus:border-primary border-transparent'
            } ${className}`}
            style={{ paddingLeft: showIcon ? 'calc(3.5rem + 4.35ch)' : 'calc(1rem + 4ch)' }}
            placeholder={placeholder}
            inputMode="numeric"
            autoComplete="tel"
            {...props}
          />

          {/* Hidden input to store full phone number for form submission */}
          {!isControlled && name && (
            <input
              type="hidden"
              name={name}
              value={internalValue ? `+380${internalValue}` : ''}
            />
          )}
        </div>
        {error && (
          <p className="text-error text-xs">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="text-base-content/60 text-xs">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

PhoneInput.displayName = 'PhoneInput';
