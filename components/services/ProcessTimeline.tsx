'use client';

import { motion } from 'framer-motion';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  duration: string;
  icon: string;
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Консультація',
    description: 'Обговорюємо технічні вимоги, обираємо технологію та матеріал',
    duration: '1-2 дні',
    icon: '💬',
  },
  {
    number: '02',
    title: 'Підготовка',
    description: '3D моделювання, сканування або реверс-інжиніринг за потреби',
    duration: '2-5 днів',
    icon: '🎨',
  },
  {
    number: '03',
    title: 'Виробництво',
    description: '3D друк на промисловому обладнанні з контролем якості',
    duration: '1-7 днів',
    icon: '🏭',
  },
  {
    number: '04',
    title: 'Постобробка',
    description: 'Фарбування, шліфування, інспекція геометрії',
    duration: '1-3 дні',
    icon: '✨',
  },
  {
    number: '05',
    title: 'Доставка',
    description: 'Упаковка та передача готових виробів замовнику',
    duration: '1 день',
    icon: '📦',
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20">
      <div className="custom-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Від ідеї до реальності</h2>
          <p className="text-lg text-base-content/70">
            Покроковий процес реалізації вашого проєкту
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-base-300">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="h-full bg-primary"
              />
            </div>

            {/* Steps */}
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Icon Circle */}
                  <div className="relative z-10 mx-auto w-20 h-20 bg-base-100 border-4 border-primary rounded-full flex items-center justify-center text-3xl mb-6">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="bg-base-200 rounded-xl p-6 border border-base-300 hover:border-primary transition-colors">
                    <div className="text-primary/60 text-sm font-bold mb-2">
                      {step.number}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-base-content/70 mb-3">
                      {step.description}
                    </p>
                    <div className="text-xs text-primary font-semibold">
                      {step.duration}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-base-100 border-4 border-primary rounded-full flex items-center justify-center text-2xl">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 h-16 bg-base-300 mx-auto mt-4" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 bg-base-200 rounded-xl p-6 border border-base-300">
                <div className="text-primary/60 text-sm font-bold mb-2">
                  {step.number}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-base-content/70 mb-3">
                  {step.description}
                </p>
                <div className="text-xs text-primary font-semibold">
                  {step.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
