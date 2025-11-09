import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Парове прасування | Additive3D',
  description: 'Послуги парового прасування для обробки поверхонь',
};

export default function SteamIroningPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Парове прасування</h1>
      <p className="text-lg text-gray-600">
        Сторінка парового прасування знаходиться в розробці.
      </p>
    </div>
  );
}