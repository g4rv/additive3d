import HeroFancy from '@/components/hero/hero-fancy/HeroFancy';
import BgPattern from '@/components/ui/bg-pattern';
import ButtonLink from '@/components/ui/button-link';
import { NAVIGATION } from '@/lib/constants';
import { Metadata } from 'next';
import { CalculatorProvider } from './context/CalculatorContext';
import FileUpload from './components/FileUpload';
import FilesList from './components/FilesList';
import CalculatorSummary from './components/CalculatorSummary';
import PriceMultiplier from './components/PriceMultiplier';
import ExportButton from './components/ExportButton';
import SubmitOrderButton from './components/SubmitOrderButton';
import { requireAuth } from '@/lib/auth/route-protection';
import { cn } from '@/utils/cn';

export const metadata: Metadata = {
  title: 'Калькулятор 3D-друку | Additive3D',
  description:
    'Розрахуйте вартість вашого 3D-друку онлайн. Миттєва оцінка з можливістю завантаження моделі.',
};

export default async function CalculatorPage() {
  // Fetch user data including PPG and role
  const user = await requireAuth();
  const userPpg = user.profile?.ppg ?? 40; // Default to 40 if not set
  const userRole = user.profile?.role ?? 'user';

  return (
    <>
      <HeroFancy
        title="Калькулятор 3D-друку"
        description="Отримайте миттєву оцінку вартості вашого проєкту"
      />

      {/* Calculator Section */}
      <section className="bg-base-100 relative isolate py-16 lg:py-24">
        <BgPattern pattern="dots" opacity={0.1} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <CalculatorProvider initialPpg={userPpg} userRole={userRole}>
            {/* Upload Section */}
            <div className="mb-12">
              <FileUpload />
            </div>

            {/* Controls */}
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <PriceMultiplier userRole={userRole} />

              <div className={cn("flex flex-col gap-4", userRole === 'user' && 'mx-auto')}>
                <SubmitOrderButton />
                <ExportButton />
              </div>
            </div>

            {/* Summary Stats */}
            <div className="mb-12 flex justify-center">
              <CalculatorSummary />
            </div>

            {/* Files Grid */}
            <FilesList />
          </CalculatorProvider>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-base-200 py-16 lg:py-20">
        <div className="custom-container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-primary mb-12 text-3xl font-bold lg:text-4xl">
              Чому обирають нас?
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <div className="text-primary mb-4 text-5xl font-bold">15+</div>
                <h3 className="mb-2 text-lg font-semibold">Років досвіду</h3>
                <p className="text-base-content/70">
                  Експертиза в адитивному виробництві та 3D-друку
                </p>
              </div>

              <div>
                <div className="text-primary mb-4 text-5xl font-bold">24h</div>
                <h3 className="mb-2 text-lg font-semibold">Швидка пропозиція</h3>
                <p className="text-base-content/70">Отримайте детальний розрахунок протягом доби</p>
              </div>

              <div>
                <div className="text-primary mb-4 text-5xl font-bold">100%</div>
                <h3 className="mb-2 text-lg font-semibold">Гарантія якості</h3>
                <p className="text-base-content/70">Контроль якості на всіх етапах виробництва</p>
              </div>
            </div>

            <div className="mt-12">
              <ButtonLink href={NAVIGATION.services.href} variant="outlined" size="large">
                Дізнатися більше про послуги
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
