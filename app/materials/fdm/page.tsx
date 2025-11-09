import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Матеріали FDM | Additive3D',
  description: 'Матеріали для технології Fused Deposition Modeling (FDM)',
};

export default function FDMMaterialsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Матеріали FDM</h1>
      <p className="text-lg text-gray-600">
        Сторінка матеріалів FDM знаходиться в розробці.
      </p>
    </div>
  );
}