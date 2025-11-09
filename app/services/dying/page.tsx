import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Фарбування | Additive3D',
  description: 'Послуги професійного фарбування 3D-друкованих виробів',
};

export default function DyingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Фарбування</h1>
      <p className="text-lg text-gray-600">
        Сторінка фарбування знаходиться в розробці.
      </p>
    </div>
  );
}
