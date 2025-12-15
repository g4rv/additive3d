// Ukrainian error messages for form validation

export const ERROR_MESSAGES = {
  // Email
  EMAIL_REQUIRED: "Електронна пошта обов'язкова",
  EMAIL_INVALID: 'Будь ласка, введіть правильну електронну адресу',

  // Password
  PASSWORD_REQUIRED: "Пароль обов'язковий",
  PASSWORD_MIN_LENGTH: 'Пароль повинен містити щонайменше 8 символів',
  PASSWORD_UPPERCASE: 'Пароль повинен містити хоча б одну велику літеру',
  PASSWORD_LOWERCASE: 'Пароль повинен містити хоча б одну малу літеру',
  PASSWORD_NUMBER: 'Пароль повинен містити хоча б одну цифру',
  PASSWORD_MISMATCH: 'Паролі не збігаються',
  CONFIRM_PASSWORD_REQUIRED: "Підтвердження пароля обов'язкове",

  // Name
  FIRST_NAME_REQUIRED: "Ім'я обов'язкове",
  FIRST_NAME_MIN_LENGTH: "Ім'я повинно містити щонайменше 2 символи",
  FIRST_NAME_MAX_LENGTH: "Ім'я занадто довге",
  LAST_NAME_REQUIRED: "Прізвище обов'язкове",
  LAST_NAME_MIN_LENGTH: 'Прізвище повинно містити щонайменше 2 символи',
  LAST_NAME_MAX_LENGTH: 'Прізвище занадто довге',

  // Phone
  PHONE_REQUIRED: "Номер телефону обов'язковий",
  PHONE_INVALID: 'Невірний формат номера телефону',

  // Organization
  ORGANIZATION_REQUIRED: "Назва організації обов'язкова",
  ORGANIZATION_MIN_LENGTH: 'Назва організації повинна містити щонайменше 2 символи',
  ORGANIZATION_MAX_LENGTH: 'Назва організації занадто довга',

  // Generic
  VALIDATION_ERROR: 'Помилка валідації',
} as const;

// Supabase error mapping
export const SUPABASE_ERROR_MESSAGES = {
  INVALID_CREDENTIALS: 'Невірна електронна пошта або пароль',
  EMAIL_NOT_CONFIRMED: 'Будь ласка, підтвердіть свою електронну пошту',
  USER_ALREADY_REGISTERED: 'Користувач з такою поштою вже зареєстрований',
  PASSWORD_REQUIREMENTS: 'Пароль не відповідає вимогам безпеки',
  GENERIC_ERROR: 'Помилка. Спробуйте ще раз.',
  SIGN_IN_ERROR: 'Помилка входу. Спробуйте ще раз.',
  SIGN_UP_ERROR: 'Помилка реєстрації. Спробуйте ще раз.',
  PROFILE_UPDATE_ERROR: 'Помилка оновлення профілю. Спробуйте ще раз.',
} as const;
