'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

interface Technology {
  id: string;
  name: string;
  fullName: string;
  description: string;
  materials: string[];
  accuracy: string;
  speed: string;
  applications: string[];
}

const technologies: Technology[] = [
  {
    id: 'fdm',
    name: 'FDM',
    fullName: 'Fused Deposition Modeling',
    description: 'Пошарове нанесення розплавленої термопластичної нитки. Оптимальний для міцних функціональних деталей.',
    materials: ['ABS', 'PC', 'Ultem 9085', 'ASA'],
    accuracy: '±0.2-0.3 мм',
    speed: 'Середня',
    applications: ['Прототипи', 'Оснастка', 'Функціональні деталі'],
  },
  {
    id: 'mjf',
    name: 'MJF',
    fullName: 'Multi Jet Fusion',
    description: 'Високопродуктивне пошарове спікання порошку. Ідеально для серійного виробництва.',
    materials: ['PA12 (Nylon)'],
    accuracy: '±0.2 мм',
    speed: 'Висока',
    applications: ['Серійні деталі', 'Корпуси', 'Кінцеві вироби'],
  },
  {
    id: 'sla',
    name: 'SLA',
    fullName: 'Stereolithography',
    description: 'Лазерне твердіння рідкого фотополімеру. Найвища точність та деталізація.',
    materials: ['Фотополімери'],
    accuracy: '±0.05-0.1 мм',
    speed: 'Середня',
    applications: ['Візуальні прототипи', 'Майстер-моделі', 'Медичні моделі'],
  },
  {
    id: 'lmf',
    name: 'LMF',
    fullName: 'Laser Metal Fusion',
    description: 'Лазерне сплавлення металевого порошку. Металеві деталі промислової якості.',
    materials: ['Нержавіюча сталь', 'Титан', 'Алюміній'],
    accuracy: '±0.1 мм',
    speed: 'Низька',
    applications: ['Металеві прототипи', 'Кінцеві деталі', 'Аерокосмічна галузь'],
  },
];

export default function TechnologyShowcase() {
  const [selectedTech, setSelectedTech] = useState<string>('fdm');
  const activeTech = technologies.find((t) => t.id === selectedTech) || technologies[0];

  return (
    <section className="py-20 bg-base-200">
      <div className="custom-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Технології 3D друку</h2>
          <p className="text-lg text-base-content/70">
            Оберіть технологію, щоб дізнатися більше про її можливості
          </p>
        </div>

        {/* Technology Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech) => (
            <button
              key={tech.id}
              onClick={() => setSelectedTech(tech.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                selectedTech === tech.id
                  ? 'bg-primary text-primary-content shadow-lg scale-105'
                  : 'bg-base-100 text-base-content hover:bg-base-300'
              }`}
            >
              {tech.name}
            </button>
          ))}
        </div>

        {/* Technology Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTech}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-base-100 rounded-2xl p-8 md:p-12 border border-base-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column: Info */}
              <div>
                <h3 className="text-3xl font-bold mb-2">{activeTech.name}</h3>
                <p className="text-primary/80 text-sm mb-6">{activeTech.fullName}</p>
                <p className="text-lg text-base-content/80 mb-8 leading-relaxed">
                  {activeTech.description}
                </p>

                {/* Specs */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="font-semibold min-w-[100px]">Точність:</span>
                    <span className="text-base-content/70">{activeTech.accuracy}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold min-w-[100px]">Швидкість:</span>
                    <span className="text-base-content/70">{activeTech.speed}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Materials & Applications */}
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-lg mb-4">Матеріали</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeTech.materials.map((material, i) => (
                      <span
                        key={i}
                        className="badge badge-lg badge-outline border-primary/30 text-primary"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-4">Застосування</h4>
                  <ul className="space-y-3">
                    {activeTech.applications.map((app, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="text-primary">✦</span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
