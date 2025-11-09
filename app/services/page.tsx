
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Послуги | Additive3D',
  description: 'Повний спектр послуг 3D-друку, сканування та обробки',
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Послуги</h1>
      <p className="text-lg text-gray-600">
        Сторінка послуг знаходиться в розробці.
      </p>
    </div>
  );
}
