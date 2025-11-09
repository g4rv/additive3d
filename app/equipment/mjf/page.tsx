import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Обладнання MJF | Additive3D',
  description: 'Принтери для технології Multi Jet Fusion (MJF)',
};

export default function MJFEquipmentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Обладнання MJF</h1>
      <p className="text-lg text-gray-600">
        Сторінка обладнання MJF знаходиться в розробці.
      </p>
    </div>
  );
}