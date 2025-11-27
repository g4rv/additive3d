import ServiceCard, { type ServiceCardProps } from './ServiceCard';

interface ServiceGridProps {
  title: string;
  description?: string;
  services: Omit<ServiceCardProps, 'delay'>[];
}

export default function ServiceGrid({ title, description, services }: ServiceGridProps) {
  return (
    <section className="py-20">
      <div className="custom-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {description && (
            <p className="text-lg text-base-content/70">{description}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.href} {...service} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
