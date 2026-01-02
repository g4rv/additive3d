import { sendOrderConfirmationEmail } from '@/lib/email/send-order-email';
import { createClient } from '@/lib/supabase/server';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { NextRequest, NextResponse } from 'next/server';

// Route segment config - allow large file uploads
export const runtime = 'nodejs';
export const maxDuration = 60; // 60 seconds timeout

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

export async function POST(request: NextRequest) {
  try {
    // Verify user is authenticated
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();


    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Parse form data with error handling
    let formData: FormData;
    try {
      formData = await request.formData();
    } catch (formError) {
      console.error('FormData parsing error:', formError);
      return NextResponse.json(
        {
          error: 'Failed to parse form data',
          details: formError instanceof Error ? formError.message : 'Unknown error',
          hint: 'Restart your dev server (npm run dev) and try again'
        },
        { status: 400 }
      );
    }

    const files = formData.getAll('files') as File[];
    const orderDataString = formData.get('orderData') as string;

    if (!files || files.length === 0) {
      return NextResponse.json({ error: 'No files provided' }, { status: 400 });
    }

    if (!orderDataString) {
      return NextResponse.json({ error: 'Order data missing' }, { status: 400 });
    }

    // Parse order data
    const orderData = JSON.parse(orderDataString);

    // Validate file sizes
    const totalSize = files.reduce((sum, file) => sum + file.size, 0);
    if (totalSize > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: `Total file size exceeds ${MAX_FILE_SIZE / (1024 * 1024)}MB limit` },
        { status: 400 }
      );
    }

    // Upload files to R2
    const uploadedFiles: Array<{ fileName: string; url: string; size: number }> = [];
    const timestamp = Date.now();
    const userId = user.id;

    for (const file of files) {
      // Validate file type
      if (!file.name.toLowerCase().endsWith('.stl')) {
        return NextResponse.json(
          { error: `Invalid file type: ${file.name}. Only .stl files are allowed` },
          { status: 400 }
        );
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
          originalName: file.name,
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

    // Generate order number
    const orderNumber = `ORD-${timestamp}`;

    // Merge uploaded file URLs with order metadata
    const filesWithUrls = orderData.files.map((fileData: any, index: number) => ({
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
      return NextResponse.json(
        { error: 'Failed to save order', details: dbError.message },
        { status: 500 }
      );
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
      // You could add the order to a retry queue here
    }

    return NextResponse.json({
      success: true,
      order: {
        id: order.id,
        orderNumber: order.order_number,
        totalPrice: order.total_price,
        totalWeight: order.total_weight,
        files: uploadedFiles,
      },
    });
  } catch (error) {
    console.error('Error processing order:', error);
    return NextResponse.json(
      { error: 'Failed to process order', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
