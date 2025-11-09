import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Реверс-інжиніринг | Additive3D',
  description: 'Послуги реверс-інжинірингу та відновлення 3D-моделей',
};

export default function ReverseEngineeringPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Реверс-інжиніринг</h1>
      <p className="text-lg text-gray-600">
        Сторінка реверс-інжинірингу знаходиться в розробці.
      </p>
    </div>
  );
}