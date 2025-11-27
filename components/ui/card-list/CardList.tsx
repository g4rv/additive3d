import { FadeIn, StaggerChildren } from '@/components/animations';
import BgPattern from '@/components/ui/bg-pattern';
import ButtonLink from '@/components/ui/button-link';
import CardItem, { type CardItemData } from './CardItem';

export type CardItem = CardItemData;

export interface CardListProps {
  title: string;
  description: string;
  cards: CardItem[];
  ctaText?: string;
  ctaHref?: string;
  cardLinkPrefix?: string;
  cardButtonText?: string;
  backgroundPattern?: {
    pattern: 'dots' | 'grid' | 'lines';
    size: number;
    color: string;
    opacity: number;
  };
  className?: string;
  sectionClassName?: string;
}

/**
 * CardList - Flexible component for displaying cards in a grid layout
 * Can be used for materials, equipment, technologies, or any card-based content
 */
export default function CardList({
  title,
  description,
  cards,
  ctaText,
  ctaHref = '/calculator',
  cardLinkPrefix = '',
  cardButtonText = 'Дізнатися більше',

  sectionClassName = 'bg-base-200 py-20',
}: CardListProps) {
  return (
    <section className={`${sectionClassName} relative`} aria-labelledby="card-list-heading">
      {/* Background Pattern */}
      <BgPattern />

      <div className="custom-container">
        <FadeIn direction="up">
          <header className="mb-16 text-center">
            <h2 id="card-list-heading" className="text-base-content mb-6 text-4xl font-bold">
              {title}
            </h2>
            <p className="text-base-content/80 mx-auto max-w-3xl text-xl">{description}</p>
          </header>
        </FadeIn>

        <StaggerChildren staggerDelay={0.1} childDelay={0.3} direction="up">
          <div className="grid gap-8 md:grid-cols-3">
            {cards.map((card) => (
              <CardItem
                key={card.name}
                card={card}
                cardLinkPrefix={cardLinkPrefix}
                cardButtonText={cardButtonText}
              />
            ))}
          </div>
        </StaggerChildren>

        {ctaText && (
          <FadeIn direction="up" delay={0.8}>
            <div className="mt-16 text-center">
              <p className="text-base-content/80 mb-6">
                Не впевнені що підійде для вашого проєкту?
              </p>
              <ButtonLink href={ctaHref} variant="secondary" className="btn-lg">
                {ctaText}
              </ButtonLink>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
