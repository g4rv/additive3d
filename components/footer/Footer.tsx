'use client';

import { COMPANY_NAME, CONTACT_INFO, MAIN_NAVIGATION_LIST } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ButtonLink from '../ui/button-link';

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-base-100 border-base-300 border-t">
      <div className="custom-container pt-8">
        <div className="grid grid-cols-1 gap-10 pb-6 sm:gap-6 lg:grid-cols-2">
          <div>
            <div className="text-base-content/80 mb-6 max-w-sm text-sm font-medium">
              <Link href="/" aria-label="Additive3D - Головна" className="mb-2 inline-block w-fit">
                <Image
                  loading="lazy"
                  src="/logo.png"
                  alt="Additive3D Логотип"
                  width={140}
                  height={44}
                />
              </Link>

              <p>Професійні послуги 3D-друку та сканування для бізнесу та приватних клієнтів.</p>
            </div>

            <div className="flex w-fit flex-col">
              <p className="text-primary mb-1 font-semibold">Контакти</p>
              <ul className="flex flex-col gap-1">
                <li>
                  <ButtonLink variant="subtle" href={CONTACT_INFO.email.link}>
                    {CONTACT_INFO.email.label}
                  </ButtonLink>
                </li>
                <li>
                  <ButtonLink variant="subtle" href={CONTACT_INFO.phone.link}>
                    {CONTACT_INFO.phone.label}
                  </ButtonLink>
                </li>
                <li>
                  <ButtonLink variant="subtle" href={CONTACT_INFO.phone2.link}>
                    {CONTACT_INFO.phone2.label}
                  </ButtonLink>
                </li>
                <li>
                  <address className="not-italic">
                    <ButtonLink variant="subtle" external href={CONTACT_INFO.address.link}>
                      {CONTACT_INFO.address.label}
                    </ButtonLink>
                  </address>
                </li>
              </ul>
            </div>
          </div>

          <nav aria-label="Додаткова навігація" className="lg:mt-14">
            <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3">
              {MAIN_NAVIGATION_LIST.map((item) => (
                <li key={item.href}>
                  <ButtonLink
                    variant="string"
                    className="mb-1 text-base"
                    href={item.href}
                    active={pathname === item.href}
                  >
                    {item.label}
                  </ButtonLink>

                  {item.children && item.children.length > 0 && (
                    <ul className="flex flex-col gap-1">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <ButtonLink
                            variant="subtle"
                            href={child.href}
                            active={pathname === child.href}
                          >
                            {child.label}
                          </ButtonLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="text-base-content/50 border-base-300 border-t py-4 text-center text-sm">
          © {new Date().getFullYear()} {COMPANY_NAME}. Всі права захищені.
        </p>
      </div>
    </footer>
  );
}
