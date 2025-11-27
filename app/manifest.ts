import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Additive3D - Промисловий 3D Друк',
    short_name: 'Additive3D',
    description: 'Професійні послуги 3D друку, моделювання, сканування та реверс-інжинірингу в Україні',
    start_url: '/',
    display: 'standalone',
    background_color: '#161616',
    theme_color: '#ffd231',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
