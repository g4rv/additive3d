import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Калькулятор 3D-друку | Additive3D',
  description: 'Розрахуйте вартість вашого 3D-друку онлайн',
};

export default function CalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Калькулятор 3D-друку</h1>
      <p className="text-lg text-gray-600">
        Калькулятор 3D-друку знаходиться в розробці.
      </p>
    </div>
  );
}