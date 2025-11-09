import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Матеріали | Additive3D',
  description: 'Матеріали для 3D-друку та їх характеристики',
};

export default function MaterialsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Матеріали</h1>
      <p className="text-lg text-gray-600">
        Сторінка матеріалів знаходиться в розробці.
      </p>
    </div>
  );
}