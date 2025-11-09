import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '3D-моделювання | Additive3D',
  description: 'Професійні послуги 3D-моделювання та CAD-проектування',
};

export default function ThreeDModelingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">3D-моделювання</h1>
      <p className="text-lg text-gray-600">
        Сторінка 3D-моделювання знаходиться в розробці.
      </p>
    </div>
  );
}