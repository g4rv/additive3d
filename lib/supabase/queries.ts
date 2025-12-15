import { createClient } from './server'
import { Profile } from '@/lib/types/auth'

export async function getCurrentUser() {
  const supabase = await createClient()

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return null
  }

  return user
}

export async function getUserProfile(userId: string): Promise<Profile | null> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) {
    console.error('Error fetching profile:', error)
    return null
  }

  return data
}

export async function getCurrentUserWithProfile() {
  const user = await getCurrentUser()

  if (!user) {
    return null
  }
  
  const profile = await getUserProfile(user.id)


  return {
    id: user.id,
    email: user.email!,
    profile,
  }
}

export async function updateUserProfile(
  userId: string,
  updates: {
    first_name?: string
    last_name?: string
    phone_number?: string
    organization_name?: string
  }
) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()

  if (error) {
    throw new Error(`Failed to update profile: ${error.message}`)
  }

  return data
}
