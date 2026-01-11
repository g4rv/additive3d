'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import type { RealtimePostgresChangesPayload } from '@supabase/supabase-js';

interface Order {
  id: string;
  order_number: string;
  status: string;
  total_price: number;
  total_weight: number;
  files: any[];
  created_at: string;
  user_id: string;
  profiles?: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
  } | null;
}

interface UseRealtimeOrdersOptions {
  userId?: string; // If provided, only listen to this user's orders
  onOrderInserted?: (order: Order) => void;
  onOrderUpdated?: (order: Order) => void;
  onOrderDeleted?: (orderId: string) => void;
}

export function useRealtimeOrders(
  initialOrders: Order[],
  options: UseRealtimeOrdersOptions = {}
) {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const { userId, onOrderInserted, onOrderUpdated, onOrderDeleted } = options;

  useEffect(() => {
    const supabase = createClient();

    console.log('[Real-time] Setting up subscription for userId:', userId || 'ALL');

    // For DELETE events, we can't use filter because payload.old might not contain user_id
    // So we'll subscribe to all events and filter manually for user-specific subscriptions
    const channel = supabase
      .channel(`orders-changes-${userId || 'admin'}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'orders',
          ...(userId && { filter: `user_id=eq.${userId}` }),
        },
        async (payload: RealtimePostgresChangesPayload<Order>) => {
          console.log('[Real-time] Order inserted:', payload.new);

          // Type guard to ensure payload.new is an Order
          if (!payload.new || typeof payload.new !== 'object' || !('id' in payload.new)) {
            return;
          }

          // Fetch the full order with profile data
          const { data: newOrder } = await supabase
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
            .eq('id', (payload.new as Order).id)
            .single();

          if (newOrder) {
            // Filter on client side if userId is specified
            if (!userId || newOrder.user_id === userId) {
              setOrders((current) => [newOrder as Order, ...current]);
              onOrderInserted?.(newOrder as Order);
            }
          }
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'orders',
          ...(userId && { filter: `user_id=eq.${userId}` }),
        },
        async (payload: RealtimePostgresChangesPayload<Order>) => {
          console.log('[Real-time] Order updated:', payload.new);

          // Type guard to ensure payload.new is an Order
          if (!payload.new || typeof payload.new !== 'object' || !('id' in payload.new)) {
            return;
          }

          // Fetch the full order with profile data
          const { data: updatedOrder } = await supabase
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
            .eq('id', (payload.new as Order).id)
            .single();

          if (updatedOrder) {
            // Filter on client side if userId is specified
            if (!userId || updatedOrder.user_id === userId) {
              setOrders((current) =>
                current.map((order) =>
                  order.id === updatedOrder.id ? (updatedOrder as Order) : order
                )
              );
              onOrderUpdated?.(updatedOrder as Order);
            }
          }
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'DELETE',
          schema: 'public',
          table: 'orders',
          // Don't use filter for DELETE - payload.old may not have user_id
        },
        (payload: RealtimePostgresChangesPayload<Order>) => {
          console.log('[Real-time] Order deleted:', payload.old);

          // Type guard to ensure payload.old is an Order
          if (!payload.old || typeof payload.old !== 'object' || !('id' in payload.old)) {
            return;
          }

          // For DELETE, we check if the order exists in current list (client-side filter)
          const deletedOrderId = (payload.old as Order).id;

          setOrders((current) => {
            const orderToDelete = current.find((order) => order.id === deletedOrderId);

            // If userId filter is active, only delete if order belongs to user
            if (userId && orderToDelete && orderToDelete.user_id !== userId) {
              console.log('[Real-time] Ignoring delete - not user\'s order');
              return current;
            }

            if (orderToDelete) {
              console.log('[Real-time] Removing order from list:', deletedOrderId);
              onOrderDeleted?.(deletedOrderId);
            }

            return current.filter((order) => order.id !== deletedOrderId);
          });
        }
      )
      .subscribe((status) => {
        console.log('[Real-time] Subscription status:', status);

        if (status === 'SUBSCRIBED') {
          console.log('[Real-time] ✅ Successfully subscribed to orders changes');
        } else if (status === 'CHANNEL_ERROR') {
          console.error('[Real-time] ❌ Channel error - check Supabase configuration');
        } else if (status === 'TIMED_OUT') {
          console.error('[Real-time] ⏱️ Connection timed out');
        }
      });

    // Cleanup subscription on unmount
    return () => {
      console.log('[Real-time] Cleaning up subscription');
      supabase.removeChannel(channel);
    };
  }, [userId, onOrderInserted, onOrderUpdated, onOrderDeleted]);

  // Update orders when initialOrders change (e.g., from server refresh)
  useEffect(() => {
    setOrders(initialOrders);
  }, [initialOrders]);

  return orders;
}
