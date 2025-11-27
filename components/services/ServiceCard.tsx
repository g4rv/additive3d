'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export interface ServiceCardProps {
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  href: string;
  icon: React.ReactNode;
  delay?: number;
}

export default function ServiceCard({
  title,
  tagline,
  description,
  benefits,
  href,
  icon,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-base-200 rounded-2xl p-8 border border-base-300 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
    >
      {/* Icon */}
      <div className="mb-6 text-primary text-5xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* Title & Tagline */}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-primary/80 mb-4">{tagline}</p>

      {/* Description */}
      <p className="text-base-content/80 mb-6 leading-relaxed">{description}</p>

      {/* Benefits */}
      <ul className="space-y-3 mb-8">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3 text-sm">
            <span className="text-success mt-0.5">✓</span>
            <span className="text-base-content/70">{benefit}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link"
      >
        Дізнатися більше
        <svg
          className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>

      {/* Hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
    </motion.div>
  );
}
