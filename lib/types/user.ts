// User type for header components
export type HeaderUser = {
  id: string;
  email: string;
  profile: {
    first_name: string;
    last_name: string;
    phone_number: string;
    organization_name: string;
    role: 'user' | 'admin';
    ppg?: number;
    created_at: string;
    updated_at: string;
  } | null;
} | null;
