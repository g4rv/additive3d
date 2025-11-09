import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '3D-друк | Additive3D',
  description: 'Професійні послуги 3D-друку високої якості',
};

export default function ThreeDPrintingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">3D-друк</h1>
      <p className="text-lg text-gray-600">
        Сторінка 3D-друку знаходиться в розробці.
      </p>
    </div>
  );
}