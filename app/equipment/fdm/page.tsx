import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Обладнання FDM | Additive3D',
  description: 'Принтери для технології Fused Deposition Modeling (FDM)',
};

export default function FDMEquipmentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Обладнання FDM</h1>
      <p className="text-lg text-gray-600">
        Сторінка обладнання FDM знаходиться в розробці.
      </p>
    </div>
  );
}