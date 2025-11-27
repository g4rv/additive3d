import { FadeIn, StaggerChildren } from '@/components/animations';
import BgPattern from '@/components/ui/bg-pattern';
import ButtonLink from '@/components/ui/button-link';
import {
  AlertCircle,
  CheckCircle,
  Droplets,
  Flame,
  Gauge,
  Info,
  Package,
  Shield,
  Thermometer,
  Zap,
} from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Матеріали | Additive3D',
  description: 'Промислові матеріали для 3D друку - FDM, MJF, полімери, метали',
};

export default function MaterialsPage() {
  const technologies = [
    {
      name: 'FDM Технології',
      description: 'Нанесення розплавленого пластику шар за шаром',
      icon: <Package className="h-8 w-8" />,
      href: '/materials/fdm',
      materials: 25,
      popular: true,
      features: [
        'Низька вартість',
        'Швидке виробництво',
        'Великий вибір матеріалів',
        'Простота використання',
      ],
    },
    {
      name: 'MJF Технології',
      description: 'Багатоструменеве джетування плавлених матеріалів',
      icon: <Zap className="h-8 w-8" />,
      href: '/materials/mjf',
      materials: 15,
      popular: false,
      features: [
        'Висока точність',
        'Однорідні властивості',
        'Швидкість для серій',
        'Стабільна якість',
      ],
    },
  ];

  const popularMaterials = [
    {
      name: 'ABS',
      fullName: 'Акрилонітрилбутадієнстирол',
      technology: 'FDM',
      color: 'text-orange-500',
      properties: {
        strength: 'Середня',
        flexibility: 'Середня',
        temperature: '105°C',
        resistance: 'Висока',
      },
      applications: [
        'Прототипи',
        'Функціональні деталі',
        'Корпуси приладів',
        'Автомобільні компоненти',
      ],
      features: ['Міцність', 'Термостійкість', 'Хімічна стійкість'],
    },
    {
      name: 'PETG',
      fullName: 'Поліетилен терефталат гліколь',
      technology: 'FDM',
      color: 'text-blue-500',
      properties: {
        strength: 'Висока',
        flexibility: 'Висока',
        temperature: '80°C',
        resistance: 'Середня',
      },
      applications: [
        'Медичні вироби',
        'Харчові контейнери',
        'Прозорі деталі',
        'Функціональні прототипи',
      ],
      features: ['Біосумісність', 'Прозорість', 'Удароміцність'],
    },
    {
      name: 'TPU',
      fullName: 'Термопластичний поліуретан',
      technology: 'FDM',
      color: 'text-purple-500',
      properties: {
        strength: 'Середня',
        flexibility: 'Дуже висока',
        temperature: '85°C',
        resistance: 'Висока',
      },
      applications: ['Гнучкі компоненти', 'Амортизатори', 'Чохли та захист', 'Протектори'],
      features: ['Гнучкість', 'Еластичність', 'Стирання'],
    },
    {
      name: 'PA12',
      fullName: 'Полиамід 12 (Nylon 12)',
      technology: 'MJF',
      color: 'text-gray-600',
      properties: {
        strength: 'Висока',
        flexibility: 'Середня',
        temperature: '175°C',
        resistance: 'Дуже висока',
      },
      applications: [
        'Промислові деталі',
        'Інструменти',
        'Аерокосмічні компоненти',
        'Медичні пристрої',
      ],
      features: ['Міцність', 'Хімічна стійкість', 'Термостійкість'],
    },
  ];

  const materialCategories = [
    {
      category: 'Інженерні пластики',
      materials: ['ABS', 'PETG', 'PC', 'POM', 'PP'],
      description: 'Високоміцні матеріали для функціональних деталей',
      icon: <Shield className="h-6 w-6" />,
    },
    {
      category: 'Гнучкі матеріали',
      materials: ['TPU', 'TPE', 'SILICONE'],
      description: 'Еластичні матеріали для гнучких компонентів',
      icon: <Droplets className="h-6 w-6" />,
    },
    {
      category: 'Високотемпературні',
      materials: ['PEEK', 'PEKK', 'ULTEM', 'PPSU'],
      description: 'Матеріали для екстремальних умов',
      icon: <Flame className="h-6 w-6" />,
    },
    {
      category: 'Біосумісні',
      materials: ['MED610', 'PETG-MED', 'TPU-MED'],
      description: 'Сертифіковані матеріали для медичних застосувань',
      icon: <CheckCircle className="h-6 w-6" />,
    },
  ];

  const _propertyIcons = {
    strength: <Gauge className="h-4 w-4" />,
    temperature: <Thermometer className="h-4 w-4" />,
    resistance: <Shield className="h-4 w-4" />,
  };

  return (
    <div className="min-h-no-header-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient relative overflow-hidden py-20">
        <BgPattern pattern="dots" size={40} color="rgb(255, 210, 49)" opacity={0.1} />

        <div className="custom-container">
          <FadeIn direction="up">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-base-content mb-6 text-4xl font-extrabold md:text-5xl lg:text-6xl">
                Промислові <span className="text-primary">матеріали</span>
              </h1>
              <p className="text-base-content/90 text-xl leading-relaxed md:text-2xl">
                Більше 50 інженерних матеріалів для адитивного виробництва. Від пластика до
                високопродуктивних полімерів для будь-яких завдань.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <ButtonLink
                  href="/services/3d-printing/calculator"
                  variant="secondary"
                  className="btn-lg"
                >
                  Підібрати матеріал
                </ButtonLink>
                <ButtonLink href="/contact" variant="outlined" className="btn-lg border-2">
                  Консультація з матеріалами
                </ButtonLink>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Technologies Overview */}
      <section className="bg-base-100 py-20">
        <div className="custom-container">
          <FadeIn direction="up">
            <header className="mb-12 text-center">
              <h2 className="text-base-content mb-4 text-3xl font-bold md:text-4xl">
                Матеріали за <span className="text-primary">технологіями</span>
              </h2>
              <p className="text-base-content/80 mx-auto max-w-2xl text-lg">
                Кожна технологія має свої унікальні матеріали та можливості
              </p>
            </header>
          </FadeIn>

          <div className="grid gap-8 lg:grid-cols-2">
            {technologies.map((tech, index) => (
              <FadeIn key={index} direction="up" delay={0.2 * index}>
                <div
                  className={`bg-base-200 relative rounded-2xl p-8 transition-all hover:-translate-y-2 hover:shadow-xl ${
                    tech.popular ? 'ring-primary ring-2' : ''
                  }`}
                >
                  {tech.popular && (
                    <div className="absolute -top-3 right-6">
                      <span className="bg-primary text-primary-content rounded-full px-4 py-1 text-sm font-semibold">
                        Найпопулярніша
                      </span>
                    </div>
                  )}

                  <div className="flex items-start gap-6">
                    <div className="text-primary">{tech.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-base-content mb-3 text-2xl font-bold">{tech.name}</h3>
                      <p className="text-base-content/80 mb-4 leading-relaxed">
                        {tech.description}
                      </p>

                      <div className="mb-4 grid grid-cols-2 gap-3">
                        {tech.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="text-success h-4 w-4 shrink-0" />
                            <span className="text-base-content/90 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-base-content/70">{tech.materials} матеріалів</span>
                        <ButtonLink href={tech.href} variant="secondary">
                          Детальніше
                        </ButtonLink>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Materials */}
      <section className="bg-base-200 py-20">
        <div className="custom-container">
          <FadeIn direction="up">
            <header className="mb-12 text-center">
              <h2 className="text-base-content mb-4 text-3xl font-bold md:text-4xl">
                Найпопулярніші <span className="text-primary">матеріали</span>
              </h2>
              <p className="text-base-content/80 mx-auto max-w-2xl text-lg">
                Перевірені рішення для більшості інженерних завдань
              </p>
            </header>
          </FadeIn>

          <StaggerChildren
            staggerDelay={0.1}
            childDelay={0.2}
            direction="up"
            className="grid gap-8 lg:grid-cols-2"
          >
            {popularMaterials.map((material, index) => (
              <div
                key={index}
                className="bg-base-100 rounded-xl p-8 transition-all hover:shadow-lg"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <span className={`text-3xl font-bold ${material.color}`}>
                        {material.name}
                      </span>
                      <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm">
                        {material.technology}
                      </span>
                    </div>
                    <p className="text-base-content/70">{material.fullName}</p>
                  </div>
                </div>

                <div className="mb-6 grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-base-content mb-3 flex items-center gap-2 font-semibold">
                      <Info className="h-4 w-4" />
                      Властивості
                    </h4>
                    <div className="space-y-2">
                      {Object.entries(material.properties).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between">
                          <span className="text-base-content/70 capitalize">
                            {key === 'strength'
                              ? 'Міцність'
                              : key === 'temperature'
                                ? 'Температура'
                                : key === 'resistance'
                                  ? 'Стійкість'
                                  : key}
                          </span>
                          <span className="text-base-content font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-base-content mb-3 font-semibold">Застосування</h4>
                    <div className="space-y-1">
                      {material.applications.slice(0, 3).map((app, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="text-success h-3 w-3 shrink-0" />
                          <span className="text-base-content/70 text-sm">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {material.features.map((feature, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Material Categories */}
      <section className="bg-base-100 py-20">
        <div className="custom-container">
          <FadeIn direction="up">
            <header className="mb-12 text-center">
              <h2 className="text-base-content mb-4 text-3xl font-bold md:text-4xl">
                Категорії <span className="text-primary">матеріалів</span>
              </h2>
              <p className="text-base-content/80 mx-auto max-w-2xl text-lg">
                Систематизований вибір для будь-яких інженерних завдань
              </p>
            </header>
          </FadeIn>

          <StaggerChildren
            staggerDelay={0.1}
            childDelay={0.2}
            direction="up"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {materialCategories.map((category, index) => (
              <div
                key={index}
                className="bg-base-200 rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-primary mb-4">{category.icon}</div>
                <h3 className="text-base-content mb-3 text-lg font-bold">{category.category}</h3>
                <p className="text-base-content/70 mb-4 text-sm leading-relaxed">
                  {category.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-1">
                  {category.materials.map((material, i) => (
                    <span
                      key={i}
                      className="bg-primary/5 text-primary rounded px-2 py-1 text-xs font-medium"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Help Section */}
      <section className="bg-base-200 py-20">
        <div className="custom-container">
          <FadeIn direction="up">
            <div className="bg-base-100 rounded-2xl p-12 text-center">
              <div className="text-primary mb-6 flex justify-center">
                <AlertCircle className="h-12 w-12" />
              </div>
              <h2 className="text-base-content mb-4 text-3xl font-bold">
                Не знаєте який матеріал обрати?
              </h2>
              <p className="text-base-content/80 mx-auto mb-8 max-w-2xl text-lg">
                Наші інженери допоможуть підібрати оптимальний матеріал для вашого завдання з
                урахуванням умов експлуатації, бюджету та вимог до якості
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <ButtonLink
                  href="/services/3d-printing/calculator"
                  variant="secondary"
                  className="btn-lg"
                >
                  <Package className="mr-2 h-5 w-5" />
                  Онлайн підбір
                </ButtonLink>
                <ButtonLink href="/contact" variant="outlined" className="btn-lg border-2">
                  Консультація інженера
                </ButtonLink>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
