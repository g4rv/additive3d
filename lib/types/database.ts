export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          first_name: string
          last_name: string
          phone_number: string
          organization_name: string
          role: 'user' | 'admin'
          ppg?: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          first_name: string
          last_name: string
          phone_number: string
          organization_name: string
          role?: 'user' | 'admin'
          ppg?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          first_name?: string
          last_name?: string
          phone_number?: string
          organization_name?: string
          role?: 'user' | 'admin'
          ppg?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      orders: {
        Row: {
          id: string
          user_id: string
          order_number: string
          status: string
          total_price: number
          total_weight: number
          files: Json
          metadata: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          order_number: string
          status: string
          total_price: number
          total_weight: number
          files: Json
          metadata?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          order_number?: string
          status?: string
          total_price?: number
          total_weight?: number
          files?: Json
          metadata?: Json
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'orders_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          }
        ]
      }
      auth_logs: {
        Row: {
          id: string
          user_id: string | null
          event_type: string
          email: string
          ip_address: string | null
          user_agent: string | null
          metadata: Json
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          event_type: string
          email: string
          ip_address?: string | null
          user_agent?: string | null
          metadata?: Json
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          event_type?: string
          email?: string
          ip_address?: string | null
          user_agent?: string | null
          metadata?: Json
          created_at?: string
        }
        Relationships: []
      }
      auth_rate_limits: {
        Row: {
          id: string
          identifier: string
          action: string
          attempts: number
          last_attempt_at: string
          locked_until: string | null
          updated_at: string
        }
        Insert: {
          id?: string
          identifier: string
          action: string
          attempts?: number
          last_attempt_at?: string
          locked_until?: string | null
          updated_at?: string
        }
        Update: {
          id?: string
          identifier?: string
          action?: string
          attempts?: number
          last_attempt_at?: string
          locked_until?: string | null
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
