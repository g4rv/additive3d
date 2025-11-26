import { SlugPageProps } from '@/lib/types';
import isTechnologySlug from '@/utils/isTechnologySlug';
import { notFound } from 'next/navigation';

export default async function Page({ params }: SlugPageProps) {
  const { slug } = await params;

  if (!isTechnologySlug(slug)) return notFound();

  return (
    <div className="custom-container py-12">
      <h1 className="mb-4 text-4xl font-bold">3D-друк: {slug}</h1>
      <p className="text-base-content/80">Сторінка в розробці</p>
    </div>
  );
}
