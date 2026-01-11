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
 * Delete user's own order (only if status is pending, completed, or cancelled)
 */
export async function deleteUserOrder(orderId: string) {
  try {
    const supabase = await createClient();

    // Get current user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return { success: false, error: 'Unauthorized' };
    }

    // Fetch the order to verify ownership and status
    const { data: order, error: fetchError } = await supabase
      .from('orders')
      .select('user_id, status, files, order_number')
      .eq('id', orderId)
      .single();

    if (fetchError) {
      console.error('Error fetching order:', fetchError);
      return { success: false, error: fetchError.message };
    }

    if (!order) {
      return { success: false, error: 'Order not found' };
    }

    // Verify ownership
    if (order.user_id !== user.id) {
      return { success: false, error: 'You can only delete your own orders' };
    }

    // Check if order status allows deletion
    // Users can delete: pending, completed, cancelled (but NOT processing)
    const allowedStatuses = ['pending', 'completed', 'cancelled'];
    if (!allowedStatuses.includes(order.status)) {
      return {
        success: false,
        error: 'Cannot delete orders that are currently being processed',
      };
    }

    // Delete files from R2
    const files = Array.isArray(order.files) ? (order.files as OrderFile[]) : [];
    if (files.length > 0) {
      // Extract file keys from URLs
      const baseUrl = process.env.CLOUDFLARE_R2_PUBLIC_URL || '';
      const keysToDelete = files
        .map((file: OrderFile) => {
          if (file.url && typeof file.url === 'string') {
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

    // Revalidate the user profile page
    revalidatePath('/user/profile');

    return {
      success: true,
      message: `Замовлення ${order.order_number} успішно видалено`,
      filesDeleted: files.length,
    };
  } catch (error) {
    console.error('Error deleting order:', error);
    return { success: false, error: 'Failed to delete order' };
  }
}
