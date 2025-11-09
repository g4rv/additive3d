import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MJF 3D-друк | Additive3D',
  description: 'Технологія 3D-друку Multi Jet Fusion (MJF)',
};

export default function MJFPrintingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">MJF 3D-друк</h1>
      <p className="text-lg text-gray-600">
        Сторінка MJF 3D-друку знаходиться в розробці.
      </p>
    </div>
  );
}