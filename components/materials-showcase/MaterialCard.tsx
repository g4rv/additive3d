import { CheckCircle, FileText, Target, Layers, Wrench } from 'lucide-react';
import Badge from '../ui/badge';
import type { MaterialItem } from './MaterialsShowcase.types';

interface MaterialCardProps {
  /** Material data to display */
  item: MaterialItem;
  /** Card index for animation delays */
  index: number;
}

export default function MaterialCard({ item }: MaterialCardProps) {
  return (
    <li className="group relative">
      <div className="card bg-base-200 border-base-300 hover:border-primary/20 h-full border transition-all duration-[var(--duration-moderate)] hover:shadow-lg">
        <div className="card-body p-6">
          {/* Header with technology badge */}
          <div className="mb-3 flex items-start justify-between">
            <div className="flex-1">
              <div className="bg-base-300 text-primary rounded px-2 py-1 text-sm font-medium mb-1 inline-block">
                {item.name}
              </div>
              <h3 className="text-primary group-hover:text-primary/80 mb-2 text-xl font-semibold transition-colors duration-[var(--duration-fast)]">
                {item.fullname}
              </h3>
              <Badge variant="outlined" size="sm">
                {item.technology}
              </Badge>
            </div>
          </div>

          {/* Description */}
          {item.description && (
            <p className="text-base-content/80 mb-4 mt-3 line-clamp-3 text-sm leading-relaxed">
              {item.description}
            </p>
          )}

          {/* Key Specifications */}
          {item.specs && Array.isArray(item.specs) && item.specs.length > 0 && (
            <div className="mb-4">
              <h4 className="text-base-content mb-2 flex items-center gap-2 font-medium">
                <FileText className="h-4 w-4" />
                Основні характеристики
              </h4>
              <div className="grid grid-cols-1 gap-1 text-sm">
                {item.specs.slice(0, 3).map((spec, specIndex) => (
                  <div key={specIndex} className="flex items-start gap-2">
                    <CheckCircle className="text-success mt-0.5 h-3 w-3 flex-shrink-0" />
                    <span className="text-base-content/70">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Properties */}
          {(item.specs || item.properties) && (
            <div className="mb-4">
              <h4 className="text-base-content mb-2 flex items-center gap-2 font-medium">
                <Target className="h-4 w-4" />
                Технічні властивості
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {/* Show specs from specs object if available */}
                {item.specs && typeof item.specs === 'object' && Object.entries(item.specs).slice(0, 6).map(([key, value]) => (
                  <div key={key} className="bg-base-100 rounded p-2">
                    <div className="text-base-content/60 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    <div className="font-medium">{value}</div>
                  </div>
                ))}

                {/* Fallback to properties object if no specs */}
                {!item.specs && item.properties && Object.entries(item.properties).slice(0, 6).map(([key, value]) => (
                  <div key={key} className="bg-base-100 rounded p-2">
                    <div className="text-base-content/60 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    <div className="font-medium">{value}</div>
                  </div>
                ))}

                {/* Fallback to specs array if it's an array */}
                {Array.isArray(item.specs) && item.specs.slice(0, 6).map((spec, specIndex) => (
                  <div key={specIndex} className="bg-base-100 rounded p-2">
                    <div className="text-base-content/60">Характеристика {specIndex + 1}</div>
                    <div className="font-medium">{spec}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Variants */}
          {item.variants && item.variants.length > 0 && (
            <div className="mb-4">
              <h4 className="text-base-content mb-2 flex items-center gap-2 font-medium">
                <Layers className="h-4 w-4" />
                Варіанти
              </h4>
              <div className="flex flex-wrap gap-1">
                {item.variants.slice(0, 3).map((variant, variantIndex) => (
                  <Badge key={variantIndex} variant="primary" size="xs">
                    {variant}
                  </Badge>
                ))}
                {item.variants.length > 3 && (
                  <Badge variant="primary" size="xs">
                    +{item.variants.length - 3}
                  </Badge>
                )}
              </div>
            </div>
          )}

          {/* Applications */}
          {item.applications && item.applications.length > 0 && (
            <div className="mb-4">
              <h4 className="text-base-content mb-2 flex items-center gap-2 font-medium">
                <Wrench className="h-4 w-4" />
                Застосування
              </h4>
              <div className="flex flex-wrap gap-1">
                {item.applications.slice(0, 3).map((app, appIndex) => (
                  <Badge key={appIndex} variant="secondary" size="xs">
                    {app}
                  </Badge>
                ))}
                {item.applications.length > 3 && (
                  <Badge variant="secondary" size="xs">
                    +{item.applications.length - 3}
                  </Badge>
                )}
              </div>
            </div>
          )}

          {/* Certifications */}
          {item.certifications && item.certifications.length > 0 && (
            <div className="mb-4 flex items-center justify-end">
              <div className="flex items-center gap-1">
                <span className="text-base-content/60 text-xs">
                  {item.certifications.length} сертиф.
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}