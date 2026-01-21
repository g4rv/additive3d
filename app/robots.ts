import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/auth/', '/user/'],
      },
    ],
    sitemap: 'https://additive3d.com.ua/sitemap.xml',
  };
}
