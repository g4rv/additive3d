'use client';

import ButtonLink from '@/components/ui/button-link';
import { NAVIGATION } from '@/lib/constants';
import { ArrowLeft, Home, Search } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-var(--header-height))] items-center justify-center py-12">
      <div className="custom-container text-center">
        <div className="mx-auto max-w-2xl">
          {/* 404 Number Display */}
          <div className="mb-8">
            <h1 className="text-primary text-9xl leading-none font-black">404</h1>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-base-content mb-4 text-2xl font-bold md:text-3xl">
              Сторінку не знайдено
            </h2>
            <p className="text-base-content/70 mx-auto max-w-lg text-lg leading-relaxed">
              На жаль, сторінку, яку ви шукаєте, не існує або була переміщена. Давайте допоможемо
              вам знайти те, що вам потрібно.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <ButtonLink
              href="/"
              variant="secondary"
              startAdornment={<Home size={18} />}
              className="min-w-40"
            >
              На головну
            </ButtonLink>

            <ButtonLink
              href={NAVIGATION.services.href}
              variant="outlined"
              startAdornment={<Search size={18} />}
              className="min-w-40"
            >
              Наші послуги
            </ButtonLink>
          </div>

          {/* Helpful Links */}
          <div className="bg-base-200 rounded-lg p-6 text-left">
            <h3 className="text-base-content mb-4 text-lg font-semibold">Що ви шукали?</h3>
            <nav className="grid gap-2 sm:grid-cols-2">
              <Link
                href={NAVIGATION['3d-printing'].href}
                className="text-base-content/80 hover:text-primary transition-colors duration-200"
              >
                → 3D-друк та калькулятор вартості
              </Link>
              <Link
                href={NAVIGATION['3d-scanning'].href}
                className="text-base-content/80 hover:text-primary transition-colors duration-200"
              >
                → 3D-сканування об&apos;єктів
              </Link>
              <Link
                href={NAVIGATION.materials.href}
                className="text-base-content/80 hover:text-primary transition-colors duration-200"
              >
                → Матеріали для друку
              </Link>
              <Link
                href={NAVIGATION.equipment.href}
                className="text-base-content/80 hover:text-primary transition-colors duration-200"
              >
                → Наше обладнання
              </Link>
              <Link
                href={NAVIGATION.contact.href}
                className="text-base-content/80 hover:text-primary transition-colors duration-200"
              >
                → Контактна інформація
              </Link>
              <Link
                href={NAVIGATION['3d-modeling'].href}
                className="text-base-content/80 hover:text-primary transition-colors duration-200"
              >
                → 3D-моделювання
              </Link>
            </nav>
          </div>

          {/* Additional Help */}
          <div className="mt-8">
            <p className="text-base-content/60 text-sm">
              Якщо ви вважаєте, що це помилка, будь ласка,{' '}
              <Link href={NAVIGATION.contact.href} className="text-primary hover:underline">
                зв&apos;яжіться з нами
              </Link>{' '}
              або поверніться{' '}
              <button
                onClick={() => window.history.back()}
                className="text-primary inline-flex items-center gap-1 hover:underline"
              >
                <ArrowLeft size={14} />
                назад
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
