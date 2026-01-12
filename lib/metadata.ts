import { Metadata } from 'next';

interface CreateMetadataParams {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
}

/**
 * Create standardized metadata for pages
 * @param title - Page title (will be appended with " | Additive3D")
 * @param description - Page description for SEO
 * @param path - Page path (e.g., "/services")
 * @param ogImage - Open Graph image URL (defaults to /og-default.jpg)
 * @param noIndex - Set to true for pages that shouldn't be indexed (auth, user pages)
 */
export function createMetadata({
  title,
  description,
  path,
  ogImage = '/og-default.jpg',
  noIndex = false,
}: CreateMetadataParams): Metadata {
  const fullTitle = `${title} | Additive3D`;
  const url = `https://additive3d.com${path}`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Additive3D',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'uk_UA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };

  if (noIndex) {
    metadata.robots = {
      index: false,
      follow: false,
    };
  }

  return metadata;
}
