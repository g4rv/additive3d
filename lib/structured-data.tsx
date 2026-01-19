/**
 * Structured Data (JSON-LD Schema.org) helpers for SEO
 * These functions generate schema markup that helps search engines understand your content
 */

export interface OrganizationSchemaParams {
  name: string;
  description: string;
  url: string;
  logo: string;
  contactPhone: string;
  contactEmail: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  sameAs?: string[]; // Social media URLs
}

export interface LocalBusinessSchemaParams extends OrganizationSchemaParams {
  priceRange?: string;
  openingHours?: string[];
  geo?: {
    latitude: number;
    longitude: number;
  };
}

export interface ServiceSchemaParams {
  name: string;
  description: string;
  provider: {
    name: string;
    url: string;
  };
  serviceType: string;
  areaServed?: string;
  url: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Generate Organization Schema (for company/business)
 */
export function generateOrganizationSchema(params: OrganizationSchemaParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: params.name,
    description: params.description,
    url: params.url,
    logo: params.logo,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: params.contactPhone,
      email: params.contactEmail,
      contactType: 'Customer Service',
      availableLanguage: ['Ukrainian', 'English'],
    },
    address: params.address
      ? {
          '@type': 'PostalAddress',
          streetAddress: params.address.streetAddress,
          addressLocality: params.address.addressLocality,
          addressRegion: params.address.addressRegion,
          postalCode: params.address.postalCode,
          addressCountry: params.address.addressCountry,
        }
      : undefined,
    sameAs: params.sameAs,
  };
}

/**
 * Generate LocalBusiness Schema (for businesses with physical location)
 */
export function generateLocalBusinessSchema(params: LocalBusinessSchemaParams) {
  const baseSchema = generateOrganizationSchema(params);

  return {
    ...baseSchema,
    '@type': 'LocalBusiness',
    priceRange: params.priceRange,
    openingHoursSpecification: params.openingHours?.map((hours) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours,
    })),
    geo: params.geo
      ? {
          '@type': 'GeoCoordinates',
          latitude: params.geo.latitude,
          longitude: params.geo.longitude,
        }
      : undefined,
  };
}

/**
 * Generate Service Schema (for individual services)
 */
export function generateServiceSchema(params: ServiceSchemaParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    serviceType: params.serviceType,
    provider: {
      '@type': 'Organization',
      name: params.provider.name,
      url: params.provider.url,
    },
    areaServed: params.areaServed
      ? {
          '@type': 'Country',
          name: params.areaServed,
        }
      : undefined,
    url: params.url,
  };
}

/**
 * Generate BreadcrumbList Schema (for navigation hierarchy)
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate FAQPage Schema (for FAQ sections)
 */
export function generateFAQSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/**
 * Render JSON-LD script tag for structured data
 */
export function StructuredData({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

