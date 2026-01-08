import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { Readable } from 'stream';

export const runtime = 'nodejs';

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

/**
 * Extract R2 key from public URL
 * URL format: https://<public-domain>/orders/userId/timestamp/filename.stl
 */
function extractR2KeyFromUrl(url: string): string | null {
  try {
    const publicUrl = process.env.CLOUDFLARE_R2_PUBLIC_URL;
    if (!publicUrl) return null;

    // Remove the public URL prefix to get the key
    if (url.startsWith(publicUrl)) {
      return url.slice(publicUrl.length).replace(/^\//, '');
    }
    return null;
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const fileUrl = searchParams.get('url');
  const filename = searchParams.get('filename');

  if (!fileUrl) {
    return NextResponse.json({ error: 'Missing file URL' }, { status: 400 });
  }

  try {
    // Verify user is authenticated and is an admin
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Unauthorized - Please log in' },
        { status: 401 }
      );
    }

    // Check if user is an admin
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();

    if (profileError || profile?.role !== 'admin') {
      console.warn(`Non-admin user ${user.email} attempted to download file: ${fileUrl}`);
      return NextResponse.json(
        { error: 'Forbidden - Admin access required' },
        { status: 403 }
      );
    }

    // Extract R2 key from the public URL
    const r2Key = extractR2KeyFromUrl(fileUrl);

    if (!r2Key) {
      return NextResponse.json(
        { error: 'Invalid file URL format' },
        { status: 400 }
      );
    }

    // Fetch file directly from R2 using credentials
    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: r2Key,
    });

    const s3Response = await r2Client.send(command);

    // Convert stream to buffer
    const chunks: Uint8Array[] = [];
    const stream = s3Response.Body;

    if (!stream) {
      return NextResponse.json(
        { error: 'File not found or empty' },
        { status: 404 }
      );
    }

    // Handle different stream types from AWS SDK
    if (stream instanceof Readable) {
      for await (const chunk of stream) {
        chunks.push(chunk);
      }
    } else {
      // Handle ReadableStream or Blob types
      const reader = (stream as ReadableStream).getReader();
      let done = false;
      while (!done) {
        const result = await reader.read();
        done = result.done;
        if (result.value) {
          chunks.push(result.value);
        }
      }
    }

    const buffer = Buffer.concat(chunks);

    // Set headers for download
    const headers = new Headers();
    headers.set('content-type', s3Response.ContentType || 'model/stl');
    headers.set('content-length', buffer.length.toString());

    // Use provided filename or extract from key
    const downloadFilename = filename || (() => {
      const keyParts = r2Key.split('/');
      return keyParts[keyParts.length - 1] || 'download.stl';
    })();

    // Encode filename for Content-Disposition header (RFC 5987 for non-ASCII)
    const isAscii = /^[\x00-\x7F]*$/.test(downloadFilename);
    if (isAscii) {
      headers.set('content-disposition', `attachment; filename="${downloadFilename}"`);
    } else {
      // Use RFC 5987 encoding for non-ASCII filenames
      const encodedFilename = encodeURIComponent(downloadFilename);
      const utf8Filename = `UTF-8''${encodedFilename}`;
      headers.set('content-disposition', `attachment; filename*=${utf8Filename}`);
    }

    console.log(`Admin ${user.email} downloaded file: ${r2Key}`);

    return new NextResponse(buffer, { headers });
  } catch (error) {
    console.error('Download error:', error);

    // Check if it's a NoSuchKey error (file not found)
    if (error && typeof error === 'object' && '$metadata' in error) {
      const metadata = (error as { $metadata?: { httpStatusCode?: number } }).$metadata;
      if (metadata?.httpStatusCode === 404) {
        return NextResponse.json(
          { error: 'File not found in storage' },
          { status: 404 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to download file', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': '*',
    },
  });
}
