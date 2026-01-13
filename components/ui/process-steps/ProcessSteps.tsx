import { LucideIcon } from 'lucide-react';

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
  layout?: 'vertical' | 'grid';
}

export default function ProcessSteps({ steps, layout = 'vertical' }: ProcessStepsProps) {
  if (layout === 'grid') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className="flex flex-col gap-4 p-6 rounded-2xl bg-base-200/50 hover:bg-base-200 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 size-12 md:size-14 rounded-xl bg-primary flex items-center justify-center text-primary-content">
                  <span className="text-xl md:text-2xl font-bold">{index + 1}</span>
                </div>
                <Icon className="size-8 md:size-10 text-primary flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-balance">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-base-content/70">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 md:gap-12">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-6 md:gap-8 items-start p-6 md:p-8 rounded-2xl bg-base-200/50"
          >
            <div className="flex items-center gap-4 md:flex-col md:items-center md:gap-3">
              <div className="flex-shrink-0 size-14 md:size-16 rounded-xl bg-primary flex items-center justify-center text-primary-content">
                <span className="text-2xl md:text-3xl font-bold">{index + 1}</span>
              </div>
              <Icon className="size-10 md:size-12 text-primary flex-shrink-0" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-balance">
                {step.title}
              </h3>
              <p className="text-base md:text-lg text-base-content/70 max-w-prose">
                {step.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
