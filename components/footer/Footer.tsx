'use client';

import { COMPANY_NAME, CONTACT_INFO, MAIN_NAVIGATION_LIST, NAVIGATION } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ButtonLink from '../ui/button-link';

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-base-100 border-base-300 border-t">
      <div className="custom-container pt-8">
        <div className="grid grid-rows-[auto_1fr] gap-x-6 gap-y-6 pb-10 lg:grid-cols-2 lg:gap-y-0">
          <div className="text-base-content/80 max-w-sm text-sm font-medium lg:mb-6">
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

          <nav aria-label="Додаткова навігація" className="row-span-2 lg:mt-14">
            <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3">
              {MAIN_NAVIGATION_LIST.toSorted(
                (a, b) => (b.children?.length ?? 0) - (a.children?.length ?? 0)
              ).map((item) => (
                <li key={item.href}>
                  <ButtonLink
                    variant="string"
                    className="mb-1 text-start text-base"
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
                            className="text-start"
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

          <div className="col-end-2 flex w-fit flex-col">
            <ButtonLink href={NAVIGATION.contact.href} variant="string" className='w-fit mb-2 underline'>Контакти</ButtonLink>
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

        <div className="border-base-300 border-t py-4">
          <div className="mb-3 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <ButtonLink
              href={NAVIGATION.privacyPolicy.href}
              variant="subtle"
              className="text-xs"
              active={pathname === NAVIGATION.privacyPolicy.href}
            >
              {NAVIGATION.privacyPolicy.label}
            </ButtonLink>
            <ButtonLink
              href={NAVIGATION.termsAndConditions.href}
              variant="subtle"
              className="text-xs"
              active={pathname === NAVIGATION.termsAndConditions.href}
            >
              {NAVIGATION.termsAndConditions.label}
            </ButtonLink>
          </div>
          <p className="text-base-content/50 text-center text-sm">
            © {new Date().getFullYear()} {COMPANY_NAME}. Всі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
}
