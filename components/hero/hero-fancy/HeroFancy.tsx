import BgBlobs from '@/components/ui/bg-blobs/BgBlobs';

export default function HeroFancy() {
  return (
    <section className="from-base-100 via-base-200 to-base-100 relative overflow-hidden bg-linear-to-br py-20 md:py-32">
      {/* Animated background gradient */}
      <BgBlobs />

      <div className="custom-container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
            Комплексні рішення <span className="text-primary">адитивного виробництва</span>
          </h1>

          <p className="text-base-content/80 mb-12 text-xl md:text-2xl">
            Від 3D сканування до серійного виробництва — повний цикл послуг для реалізації ваших
            ідей
          </p>
        </div>
      </div>
    </section>
  );
}
