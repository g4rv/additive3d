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

export async function getAllUsers(): Promise<Profile[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .order('email', { ascending: false })

  if (error) {
    console.error('Error fetching all users:', error)
    return []
  }

  return data || []
}

export async function getUserOrders(userId: string) {
  const supabase = await createClient()

  const { data, error} = await supabase
    .from('orders')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching user orders:', error)
    return []
  }

  return data || []
}

// Admin: Get all orders with user information
export async function getAllOrdersWithUsers() {
  try {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from('orders')
      .select(`
        *,
        profiles:user_id (
          id,
          first_name,
          last_name,
          email
        )
      `)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching all orders:', error)
      console.error('Error details:', JSON.stringify(error, null, 2))
      return []
    }

    return data || []
  } catch (err) {
    console.error('Exception in getAllOrdersWithUsers:', err)
    return []
  }
}

// Admin: Get orders filtered by status
export async function getOrdersByStatus(status?: string) {
  try {
    const supabase = await createClient()

    // Check if user is authenticated and is admin
    const { data: { user } } = await supabase.auth.getUser()
    console.log('getOrdersByStatus - Current user:', user?.id, user?.email)

    // Check user's role
    if (user) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single()
      console.log('getOrdersByStatus - User role:', profile?.role)
    }

    // First try: Just get orders count
    const { count, error: countError } = await supabase
      .from('orders')
      .select('*', { count: 'exact', head: true })

    console.log('getOrdersByStatus - Total orders in DB:', count)
    console.log('getOrdersByStatus - Count error:', countError)

    // Second try: Get orders with join
    let query = supabase
      .from('orders')
      .select(`
        *,
        profiles:user_id (
          id,
          first_name,
          last_name,
          email
        )
      `)

    // Filter by status if provided and not 'all'
    if (status && status !== 'all') {
      query = query.eq('status', status)
    }

    query = query.order('created_at', { ascending: false })

    const { data, error } = await query

    console.log('getOrdersByStatus - Query returned:', {
      dataLength: data?.length,
      hasError: !!error,
      errorType: typeof error,
      errorKeys: error ? Object.keys(error) : [],
    })

    if (error) {
      console.error('Error fetching orders by status:', error)
      console.error('Error details:', JSON.stringify(error, null, 2))
      console.error('Error code:', error.code)
      console.error('Error message:', error.message)
      console.error('Error hint:', error.hint)
      return []
    }

    return data || []
  } catch (err) {
    console.error('Exception in getOrdersByStatus:', err)
    return []
  }
}
