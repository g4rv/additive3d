'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { DeleteObjectsCommand, S3Client } from '@aws-sdk/client-s3';

// Configure Cloudflare R2 client
const r2Client = new S3Client({
  region: 'auto',
  endpoint: process.env.CLOUDFLARE_R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY || '',
  },
});

const BUCKET_NAME = process.env.CLOUDFLARE_R2_BUCKET_NAME || '';

interface OrderFile {
  url?: string;
  fileName?: string;
  fileSize?: number;
  [key: string]: unknown;
}

/**
 * Update an order's status
 */
export async function updateOrderStatus(
  orderId: string,
  newStatus: 'pending' | 'processing' | 'completed' | 'cancelled'
) {
  try {
    const supabase = await createClient();

    // Update the order's status
    const { error } = await supabase
      .from('orders')
      .update({ status: newStatus, updated_at: new Date().toISOString() })
      .eq('id', orderId);

    if (error) {
      console.error('Error updating order status:', error);
      return { success: false, error: error.message };
    }

    // Revalidate the admin orders page
    revalidatePath('/user/admin-dashboard/orders');

    return { success: true, message: `Status updated to ${newStatus}` };
  } catch (error) {
    console.error('Error updating order status:', error);
    return { success: false, error: 'Failed to update order status' };
  }
}

/**
 * Delete an order and its files from R2
 */
export async function deleteOrder(orderId: string) {
  try {
    const supabase = await createClient();

    // First, fetch the order to get file information
    const { data: order, error: fetchError } = await supabase
      .from('orders')
      .select('files, order_number')
      .eq('id', orderId)
      .single();

    if (fetchError) {
      console.error('Error fetching order:', fetchError);
      return { success: false, error: fetchError.message };
    }

    if (!order) {
      return { success: false, error: 'Order not found' };
    }

    // Delete files from R2
    const files = Array.isArray(order.files) ? (order.files as OrderFile[]) : [];
    if (files.length > 0) {
      // Extract file keys from URLs
      // URL format: {CLOUDFLARE_R2_PUBLIC_URL}/{fileName}
      const baseUrl = process.env.CLOUDFLARE_R2_PUBLIC_URL || '';
      const keysToDelete = files
        .map((file: OrderFile) => {
          if (file.url && typeof file.url === 'string') {
            // Remove base URL to get the key
            return file.url.replace(baseUrl + '/', '');
          }
          return null;
        })
        .filter((key): key is string => key !== null);

      if (keysToDelete.length > 0) {
        try {
          await r2Client.send(
            new DeleteObjectsCommand({
              Bucket: BUCKET_NAME,
              Delete: {
                Objects: keysToDelete.map((key) => ({ Key: key })),
                Quiet: false,
              },
            })
          );
        } catch (r2Error) {
          console.error('Error deleting files from R2:', r2Error);
          // Continue with database deletion even if R2 deletion fails
          // Log for manual cleanup
        }
      }
    }

    // Delete the order from Supabase
    const { error: deleteError } = await supabase
      .from('orders')
      .delete()
      .eq('id', orderId);

    if (deleteError) {
      console.error('Error deleting order from Supabase:', deleteError);
      return { success: false, error: deleteError.message };
    }

    // Revalidate the admin orders page
    revalidatePath('/user/admin-dashboard/orders');

    return {
      success: true,
      message: `Order ${order.order_number} deleted successfully`,
      filesDeleted: files.length,
    };
  } catch (error) {
    console.error('Error deleting order:', error);
    return { success: false, error: 'Failed to delete order' };
  }
}
