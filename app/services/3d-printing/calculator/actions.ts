'use server';

import { sendOrderConfirmationEmail } from '@/lib/email/send-order-email';
import { checkFileSizeLimit, formatRateLimitError, recordFileSizeUsage } from '@/lib/rate-limit';
import { createClient } from '@/lib/supabase/server';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { revalidatePath } from 'next/cache';

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
const MAX_FILE_SIZE = 200 * 1024 * 1024; // 200MB

export interface OrderFileData {
  name: string;
  weight: number;
  quantity: number;
  includePaint: boolean;
  pricePerUnit: number;
  totalPrice: number;
}

export interface UploadOrderData {
  totalPrice: number;
  totalWeight: number;
  priceMultiplier: number;
  files: OrderFileData[];
}

export interface UploadOrderResult {
  success: true;
  order: {
    id: string;
    orderNumber: string;
    totalPrice: number;
    totalWeight: number;
    files: Array<{ fileName: string; url: string; size: number }>;
  };
}

export interface UploadOrderError {
  success: false;
  error: string;
  details?: string;
}

export async function uploadOrder(
  formData: FormData
): Promise<UploadOrderResult | UploadOrderError> {
  try {
    // Verify user is authenticated
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return {
        success: false,
        error: 'Unauthorized',
        details: 'Please log in to submit an order',
      };
    }

    // Extract files early for rate limit check
    const files = formData.getAll('files') as File[];
    const orderDataString = formData.get('orderData') as string;

    if (!files || files.length === 0) {
      return {
        success: false,
        error: 'No files provided',
      };
    }

    if (!orderDataString) {
      return {
        success: false,
        error: 'Order data missing',
      };
    }

    // Check rate limiting for order submissions based on file size
    let totalSize = files.reduce((sum, file) => sum + file.size, 0);
    const rateLimitResult = await checkFileSizeLimit(user.id, totalSize);
    if (!rateLimitResult.allowed) {
      return {
        success: false,
        error: formatRateLimitError(rateLimitResult, 'order_submission'),
      };
    }

    // Check if user has given consent for file sharing
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('agree_to_share_files, has_not_signed_nda')
      .eq('id', user.id)
      .maybeSingle();

    if (profileError || !profile) {
      return {
        success: false,
        error: 'Profile not found',
        details: 'Please complete your profile before placing orders',
      };
    }

    if (!profile.agree_to_share_files || !profile.has_not_signed_nda) {
      return {
        success: false,
        error: 'consent_required',
        details: 'User must consent to file sharing before placing orders',
      };
    }

    // Parse order data
    const orderData: UploadOrderData = JSON.parse(orderDataString);

    // Validate file sizes (totalSize was already calculated for rate limit check)
    if (totalSize > MAX_FILE_SIZE) {
      return {
        success: false,
        error: `Total file size exceeds ${MAX_FILE_SIZE / (1024 * 1024)}MB limit`,
      };
    }

    // Upload files to R2
    const uploadedFiles: Array<{ fileName: string; url: string; size: number }> = [];
    const timestamp = Date.now();
    const userId = user.id;

    for (const file of files) {
      // Validate file type
      if (!file.name.toLowerCase().endsWith('.stl')) {
        return {
          success: false,
          error: `Invalid file type: ${file.name}. Only .stl files are allowed`,
        };
      }

      // Create unique file path: orders/{userId}/{timestamp}/{filename}
      const fileName = `orders/${userId}/${timestamp}/${file.name}`;

      // Convert file to buffer
      const buffer = Buffer.from(await file.arrayBuffer());

      // Upload to R2
      const command = new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: fileName,
        Body: buffer,
        ContentType: 'model/stl',
        Metadata: {
          uploadedBy: userId,
          uploadedAt: new Date().toISOString(),
        },
      });

      await r2Client.send(command);

      // Construct public URL (if R2 bucket has public access configured)
      const publicUrl = `${process.env.CLOUDFLARE_R2_PUBLIC_URL}/${fileName}`;

      uploadedFiles.push({
        fileName: file.name,
        url: publicUrl,
        size: file.size,
      });
    }

    // Generate order number - get next sequential number
    const { count, error: countError } = await supabase
      .from('orders')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.error('Error getting order count:', countError);
      return {
        success: false,
        error: 'Failed to generate order number',
        details: countError.message,
      };
    }

    const orderNumber = `${(count || 0) + 1}`;

    // Merge uploaded file URLs with order metadata
    const filesWithUrls = orderData.files.map((fileData, index) => ({
      ...fileData,
      url: uploadedFiles[index].url,
      fileSize: uploadedFiles[index].size,
    }));

    // Save order to Supabase
    const { data: order, error: dbError } = await supabase
      .from('orders')
      .insert({
        user_id: userId,
        order_number: orderNumber,
        status: 'pending',
        total_price: orderData.totalPrice,
        total_weight: orderData.totalWeight,
        files: filesWithUrls,
        metadata: {
          priceMultiplier: orderData.priceMultiplier,
          submittedAt: new Date().toISOString(),
        },
      })
      .select()
      .single();

    if (dbError) {
      console.error('Error saving order to Supabase:', dbError);
      return {
        success: false,
        error: 'Failed to save order',
        details: dbError.message,
      };
    }

    // Send confirmation email
    try {
      await sendOrderConfirmationEmail({
        orderNumber: order.order_number,
        userEmail: user.email!,
        userName: user.user_metadata?.full_name || user.user_metadata?.name,
        totalPrice: order.total_price,
        totalWeight: order.total_weight,
        files: filesWithUrls,
        priceMultiplier: orderData.priceMultiplier,
      });
    } catch (emailError) {
      // Log error but don't fail the request - order is already saved
      console.error('Failed to send confirmation email:', emailError);
    }

    // Revalidate any paths that might display orders
    revalidatePath('/user/orders');

    // Record successful order submission (tracks file size usage)
    await recordFileSizeUsage(user.id, totalSize);

    return {
      success: true,
      order: {
        id: order.id,
        orderNumber: order.order_number,
        totalPrice: order.total_price,
        totalWeight: order.total_weight,
        files: uploadedFiles,
      },
    };
  } catch (error) {
    console.error('Error processing order:', error);
    return {
      success: false,
      error: 'Failed to process order',
      details: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
