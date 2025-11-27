'use client';

import BgPattern from '@/components/ui/bg-pattern';
import { cn } from '@/utils/cn';
import { useState } from 'react';
import Badge from '../ui/badge';
import MaterialCard from './MaterialCard';
import type { MaterialItem, MaterialsShowcaseProps } from './MaterialsShowcase.types';

/**
 * MaterialsShowcase - Display 3D printing materials with comprehensive technical data
 *
 * @example
 * <MaterialsShowcase
 *   title="Наші матеріали"
 *   description="Інженерні термопластики для промислових застосувань"
 *   materials={[
 *     {
 *       name: "PA12 (Nylon 12)",
 *       technology: "MJF",
 *       description: "Високоміцний поліамід з відмінними хімічними властивостями",
 *       href: "/materials/pa12",
 *       image: "/materials/pa12.jpg",
 *       specs: ["Висока міцність", "Хімічна стійкість", "Низьке водопоглинання"],
 *       properties: {
 *         tensileStrength: "48-52 MPa",
 *         flexuralStrength: "74-82 MPa",
 *         heatDeflectionTemp: "165-175°C",
 *         density: "1.01 g/cm³"
 *       },
 *       applications: ["Функціональні прототипи", "Кінцеві деталі", "Серійне виробництво"]
 *     }
 *   ]}
 * />
 */
export default function MaterialsShowcase({
  title,
  description,
  materials,
  className,
}: MaterialsShowcaseProps) {
  const [selectedTechnology, setSelectedTechnology] = useState<string>('all');

  // Get unique technologies from materials
  const availableTechnologies = ['all', ...Array.from(new Set(materials.map(m => m.technology)))];

  // Filter materials based on selected technology
  const filteredMaterials = selectedTechnology === 'all'
    ? materials
    : materials.filter(material => material.technology === selectedTechnology);

  // Generate unique keys using name + technology combination
  const getMaterialKey = (item: MaterialItem) =>
    `${item.name}-${item.technology}`.toLowerCase().replace(/[^a-z0-9-]/g, '-');

  return (
    <section className={cn('bg-base-100 relative isolate py-8 lg:py-16', className)}>
      <BgPattern pattern="dots" opacity={0.1} className="absolute inset-0" />

      <div className="custom-container relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-primary text-3xl font-bold lg:text-4xl">{title}</h2>
          {description && (
            <p className="text-base-content/80 mx-auto mt-4 max-w-3xl text-lg leading-relaxed lg:text-xl">
              {description}
            </p>
          )}
        </div>

        {/* Technology Filter Pills */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {availableTechnologies.map((tech) => (
            <Badge
              key={tech}
              variant={selectedTechnology === tech ? 'primary' : 'outlined'}
              size="lg"
              className="cursor-pointer hover:bg-primary hover:text-primary-content transition-colors duration-[var(--duration-fast)]"
              onClick={() => setSelectedTechnology(tech)}
            >
              {tech === 'all' ? 'Всі технології' : tech}
            </Badge>
          ))}
        </div>

        {/* Materials Grid - 3 columns on desktop */}
        <ul className="grid grid-cols-1 gap-8 xl:grid-cols-3 lg:grid-cols-2">
          {filteredMaterials.map((item, index) => (
            <MaterialCard key={getMaterialKey(item)} item={item} index={index} />
          ))}
        </ul>

      </div>
    </section>
  );
}