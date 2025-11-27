import { FadeIn } from '@/components/animations';
import { Cpu, ShieldCheck, TestTubeDiagonal } from 'lucide-react';
import { TRUST_BADGES_PRINCIPLES } from './constants';

const renderIcon = (icon: (typeof TRUST_BADGES_PRINCIPLES)[number]['icon']) => {
  switch (icon) {
    case 'cpu':
      return <Cpu size={36} />;
    case 'tube':
      return <TestTubeDiagonal size={36} />;
    case 'shield':
      return <ShieldCheck size={40} />;
    default:
      return <div />;
  }
};

/**
 * PrinciplesShowcase - Core principles showcase with professional messaging
 * Build trust through highlighting fundamental values
 */
export default function PrinciplesShowcase() {
  return (
    <section className="bg-base-100 pt-16 pb-20" aria-labelledby="principles-showcase-heading">
      <div className="custom-container">
        <FadeIn direction="down" className="mb-10 text-center">
          <h2
            id="principles-showcase-heading"
            className="text-base-content mb-2 text-3xl font-bold"
          >
            Наші принципи роботи
          </h2>
          <p className="text-base-content/70 text-lg">
            Три фундаментальні цінності, які лежать в основі кожного нашого проєкту
          </p>
        </FadeIn>

        <FadeIn
          direction="up"
          delay={0.2}
          as="ul"
          className="4xl:justify-around 4xl:gap-4 flex w-full flex-wrap justify-center gap-8"
        >
          {TRUST_BADGES_PRINCIPLES.map((principle) => (
            <li
              key={principle.name}
              className="group bg-base-200 border-base-300 hover:border-primary/50 hover:shadow-primary/60 relative flex basis-[max(30%,350px)] flex-col items-center rounded-xl border-2 px-4 py-6 text-center transition-all duration-300 hover:shadow-[0_0_20px] lg:px-6 lg:py-8"
            >
              {/* Content */}
              <div className="bg-primary/10 group-hover:bg-primary/20 text-primary mx-auto mb-6 flex size-18 items-center justify-center rounded-full transition-all duration-300">
                {renderIcon(principle.icon)}
              </div>
              <div>
                <h3 className="group-hover:text-primary mb-4 text-xl font-bold transition-colors duration-300">
                  {principle.name}
                </h3>
                <p className="text-base-content/70 group-hover:text-base-content/90 text-base leading-relaxed transition-colors duration-300">
                  {principle.description}
                </p>
              </div>
            </li>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
