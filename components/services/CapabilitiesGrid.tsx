'use client';

import { motion } from 'framer-motion';

interface Capability {
  title: string;
  description: string;
  examples: string[];
  icon: string;
}

const capabilities: Capability[] = [
  {
    title: 'Прототипування',
    description: 'Швидка перевірка концепції та функціональності',
    examples: ['Візуальні моделі', 'Функціональні тести', 'Ітераційний дизайн'],
    icon: '🔬',
  },
  {
    title: 'Кінцеві вироби',
    description: 'Готові до використання функціональні деталі',
    examples: ['Серійні компоненти', 'Запасні частини', 'Малі серії'],
    icon: '⚙️',
  },
  {
    title: 'Оснастка',
    description: 'Технологічна оснастка для виробництва',
    examples: ['Форми для лиття', 'Шаблони', 'Кондуктори'],
    icon: '🛠️',
  },
  {
    title: 'Медичні вироби',
    description: 'Індивідуальні медичні рішення',
    examples: ['Ортези', 'Хірургічні шаблони', 'Анатомічні моделі'],
    icon: '🏥',
  },
  {
    title: 'Архітектурні моделі',
    description: 'Макети будівель та конструкцій',
    examples: ['Концептуальні моделі', 'Презентаційні макети', 'Деталі фасаду'],
    icon: '🏛️',
  },
  {
    title: 'Автомобільні деталі',
    description: 'Компоненти для автопромисловості',
    examples: ['Панелі приладів', 'Кріплення', 'Дизайнерські елементи'],
    icon: '🚗',
  },
];

export default function CapabilitiesGrid() {
  return (
    <section className="py-20 bg-base-200">
      <div className="custom-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Що ми виробляємо</h2>
          <p className="text-lg text-base-content/70">
            Від одиничних прототипів до серійного виробництва у різних галузях
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-base-100 rounded-xl p-8 border border-base-300 hover:border-primary transition-all hover:shadow-lg group"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {capability.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
              <p className="text-sm text-base-content/70 mb-6">
                {capability.description}
              </p>

              {/* Examples */}
              <div className="space-y-2">
                {capability.examples.map((example, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-primary">•</span>
                    <span className="text-base-content/60">{example}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
