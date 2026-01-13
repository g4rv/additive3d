import { COMPANY_NAME } from '@/lib/constants';
import { Award, Lightbulb, RotateCw, Target, Users, Zap } from 'lucide-react';

export default function OurAdvantages() {
  const advantages = [
    {
      title: 'Висока точність',
      description: 'Професійне обладнання забезпечує точність до 0.1 мм',
      icon: Target,
    },
    {
      title: 'Швидкість виконання',
      description: 'Оперативне виробництво від прототипів до серійних партій',
      icon: Zap,
    },
    {
      title: 'Повний цикл послуг',
      description: 'Від 3D моделювання до постобробки готових деталей',
      icon: RotateCw,
    },
    {
      title: 'Досвідчена команда',
      description: 'Експерти з багаторічним досвідом у адитивних технологіях',
      icon: Users,
    },
    {
      title: 'Сертифіковані матеріали',
      description: 'Використовуємо тільки перевірені матеріали від провідних виробників',
      icon: Award,
    },
    {
      title: 'Індивідуальний підхід',
      description: 'Консультації та підбір оптимального рішення для вашого проекту',
      icon: Lightbulb,
    },
  ];

  return (
    <section className="bg-base-100 relative isolate py-8 lg:py-16">
      <div className="custom-container">
        <h2 className="text-primary mb-12 text-center text-4xl font-bold">Чому обирають {COMPANY_NAME}</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <li
              key={index}
              className="bg-base-200 border-base-300/50 hover:border-primary flex flex-col items-center gap-4 rounded-2xl border p-6 lg:p-8 text-center transition-[shadow_color] duration-(--duration-moderate) hover:shadow-[0_0_15px_var(--color-primary)]"
            >
              <advantage.icon size={32} className="text-primary flex-shrink-0" />

              <div>
                <h3 className="mb-2 text-base lg:text-lg font-semibold">{advantage.title}</h3>
                <p className="text-sm lg:text-base leading-relaxed">{advantage.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
