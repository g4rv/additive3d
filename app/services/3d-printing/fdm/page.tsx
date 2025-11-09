import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FDM 3D-друк | Additive3D',
  description: 'Технологія 3D-друку Fused Deposition Modeling (FDM)',
};

export default function FDMPrintingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">FDM 3D-друк</h1>
      <p className="text-lg text-gray-600">
        Сторінка FDM 3D-друку знаходиться в розробці.
      </p>
    </div>
  );
}