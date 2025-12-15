import { Database } from './database'

export type Profile = Database['public']['Tables']['profiles']['Row']

export interface UserMetadata {
  first_name: string
  last_name: string
  phone: string
  organization: string
}

export interface AuthUser {
  id: string
  email: string
  profile: Profile | null
}

export interface AuthState {
  user: AuthUser | null
  loading: boolean
}
