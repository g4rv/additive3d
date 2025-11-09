import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Обладнання | Additive3D',
  description: 'Сучасне обладнання для 3D-друку та обробки виробів',
};

export default function EquipmentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Обладнання</h1>
      <p className="text-lg text-gray-600">
        Сторінка обладнання знаходиться в розробці.
      </p>
    </div>
  );
}