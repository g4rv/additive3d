import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '3D-сканування | Additive3D',
  description: 'Професійні послуги 3D-сканування об\'єктів',
};

export default function ThreeDScanningPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">3D-сканування</h1>
      <p className="text-lg text-gray-600">
        Сторінка 3D-сканування знаходиться в розробці.
      </p>
    </div>
  );
}