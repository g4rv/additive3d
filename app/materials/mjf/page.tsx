import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Матеріали MJF | Additive3D',
  description: 'Матеріали для технології Multi Jet Fusion (MJF)',
};

export default function MJFMaterialsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Матеріали MJF</h1>
      <p className="text-lg text-gray-600">
        Сторінка матеріалів MJF знаходиться в розробці.
      </p>
    </div>
  );
}