import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Інспекція геометрії | Additive3D',
  description: 'Послуги інспекції геометрії та контролю якості виробів',
};

export default function GeometryInspectionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Інспекція геометрії</h1>
      <p className="text-lg text-gray-600">
        Сторінка інспекції геометрії знаходиться в розробці.
      </p>
    </div>
  );
}