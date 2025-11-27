import CTA from '@/components/cta';
import HeroFancy from '@/components/hero/hero-fancy/HeroFancy';
import MaterialsShowcase from '@/components/materials-showcase';

export const metadata = {
  title: 'Матеріали для 3D-друку | Additive3D',
  description:
    'Інженерні термопластики для промислових застосувань. PA12, Ultem 9085, PC, ASA, ABS-M30 та інші матеріали для MJF, FDM та LFAM технологій.',
};

export default function MaterialsPage() {
  const materialsData = [
    {
      name: 'PP',
      fullname: 'Поліпропілен',
      description: 'Легкий та хімічно стійкий матеріал, ідеальний для функціональних прототипів та кінцевих деталей',
      technology: 'LFAM',
      specs: {
        density: '0.90-0.91 г/см³',
        tensileStrength: '30-40 МПа',
        flexuralStrength: '40-55 МПа',
        heatDeflection: '70-100°C',
        impactResistance: 'Середня',
        moistureAbsorption: 'Низьке (<0.02%)',
        chemicalResistance: 'Висока',
        flameRating: 'UL 94 V-2'
      }
    },
    {
      name: 'ABS',
      fullname: 'Аcrylonitrile Butadiene Styrene',
      description: 'Універсальний матеріал з високою ударостійкістю та легкою обробкою',
      technology: 'LFAM, FDM',
      specs: {
        density: '1.04-1.07 г/см³',
        tensileStrength: '40-50 МПа',
        flexuralStrength: '65-80 МПа',
        heatDeflection: '95-105°C',
        impactResistance: 'Висока',
        moistureAbsorption: 'Низьке (<0.3%)',
        chemicalResistance: 'Середня',
        flameRating: 'UL 94 HB'
      }
    },
    {
      name: 'ASA',
      fullname: 'Acrylonitrile Styrene Acrylate',
      description: 'UV-стійкий матеріал для зовнішніх застосувань з високою атмосферостійкістю',
      technology: 'LFAM, FDM',
      specs: {
        density: '~1.07 г/см³',
        tensileStrength: '~45–50 МПа',
        flexuralModulus: '~2000–2300 МПа',
        elongationAtBreak: '~6–20%',
        heatDeflection: '~110–125°C (при 0.45 МПа)',
        operatingTemp: 'до 100°C',
        impactResistance: '~3.5–5.0 кДж/м²',
        moistureAbsorption: 'Низьке',
        chemicalResistance: 'Висока до масел, жирів, розчинників',
        flameRating: 'UL 94 V-0',
        uvResistance: 'Середня (рекомендується фарбування)',
        printAccuracy: '±0.2–0.3 мм',
        layerThickness: '100–200 мкм'
      }
    },
    {
      name: 'PETG',
      fullname: 'Polyethylene Terephthalate Glycol',
      description: 'Прозорий матеріал з харчовою сертифікацією та хімічною стійкістю',
      technology: 'LFAM',
      specs: {
        density: '1.27-1.38 г/см³',
        tensileStrength: '50-55 МПа',
        flexuralStrength: '85-95 МПа',
        heatDeflection: '70-80°C',
        impactResistance: 'Висока',
        moistureAbsorption: 'Низьке (<0.1%)',
        chemicalResistance: 'Висока',
        transparency: 'Прозорий',
        foodSafe: 'Так'
      }
    },
    {
      name: 'TPE',
      fullname: 'Thermoplastic Elastomer',
      description: 'Гнучкий еластомер для гумоподібних деталей та прототипів',
      technology: 'LFAM',
      specs: {
        density: '0.92-1.20 г/см³',
        tensileStrength: '5-30 МПа',
        elongation: '300-800%',
        hardness: 'Shore A 70-95',
        heatDeflection: '40-60°C',
        moistureAbsorption: 'Низьке',
        flexibility: 'Висока',
        temperatureRange: '-40°C до +80°C'
      }
    },
    {
      name: 'PLA',
      fullname: 'Polylactic Acid',
      description: 'Екологічний біопластик для високоякісних візуальних прототипів',
      technology: 'LFAM',
      specs: {
        density: '1.24-1.25 г/см³',
        tensileStrength: '50-70 МПа',
        flexuralStrength: '80-100 МПа',
        heatDeflection: '50-60°C',
        impactResistance: 'Середня',
        moistureAbsorption: 'Низьке (<0.1%)',
        biodegradable: 'Так',
        printQuality: 'Висока',
        warping: 'Мінімальне'
      }
    },
    {
      name: 'PC',
      fullname: 'Полікарбонат',
      description: 'Високоміцний матеріал з термостійкістю для технічних деталей',
      technology: 'LFAM, FDM',
      specs: {
        density: '~1.20 г/см³',
        tensileStrength: '~60–70 МПа',
        flexuralModulus: '~2300–2500 МПа',
        elongationAtBreak: '~6–10%',
        heatDeflection: '~135–145°C (при 0.45 МПа)',
        operatingTemp: 'до 110–120°C',
        impactResistance: '> 12 кДж/м² (висока ударостійкість)',
        moistureAbsorption: 'Середнє',
        chemicalResistance: 'Висока (до кислот, масел, спиртів)',
        flameRating: 'UL 94 V-2',
        transparency: 'Напівпрозорий',
        printAccuracy: '±0.2–0.3 мм',
        layerThickness: '100–200 мкм'
      }
    },
    {
      name: 'ABS-PC',
      fullname: 'ABS-Polycarbonate Blend',
      description: 'Комбінація ABS та ПК для покращеної міцності та термостійкості',
      technology: 'FDM',
      specs: {
        density: '1.15-1.20 г/см³',
        tensileStrength: '55-65 МПа',
        flexuralStrength: '90-105 МПа',
        heatDeflection: '110-125°C',
        impactResistance: 'Висока',
        moistureAbsorption: 'Низьке',
        flameRating: 'UL 94 V-0',
        temperatureResistance: 'Покращена'
      }
    },
    {
      name: 'PEI',
      fullname: 'Polyetherimide (Ultem)',
      description: 'Високопродуктивний авіаційний матеріал з вогнестійкістю FST',
      technology: 'LFAM, FDM',
      specs: {
        density: '~1.34 г/см³',
        tensileStrength: '~70–80 МПа',
        flexuralModulus: '~2100–2300 МПа',
        elongationAtBreak: '~5–7%',
        heatDeflection: '~153°C (при 0.45 МПа)',
        operatingTemp: 'до 160°C',
        impactResistance: '~8–13 кДж/м²',
        moistureAbsorption: 'Низьке',
        chemicalResistance: 'Висока — стійкий до пального, мастил, хімікатів',
        flameRating: 'UL 94 V-0, FAR 25.853 (аерокосмічний стандарт)',
        transparency: 'Напівпрозорий бурштиновий / Чорний',
        printAccuracy: '±0.2 мм або ±0.3%',
        layerThickness: '100–254 мкм',
        aerospaceGrade: 'FST сертифікований'
      }
    },
    {
      name: 'PA12',
      fullname: 'Polyamide 12 (Nylon 12)',
      description: 'Інженерний поліамід з високою зносостійкістю та хімічною стійкістю',
      technology: 'FDM, MJF',
      specs: {
        density: '~1.01 г/см³',
        porosity: '< 5% (залежно від геометрії)',
        tensileStrength: '~48–50 МПа (для MJF)',
        flexuralModulus: '~1700–1900 МПа',
        elongationAtBreak: '15–20%',
        heatDeflection: '~175°C (при 0.45 МПа)',
        operatingTemp: 'до 100°C',
        impactResistance: '~4.5 кДж/м²',
        moistureAbsorption: 'Низьке',
        chemicalResistance: 'Висока (до масел, мастил, палив)',
        wearResistance: 'Висока',
        lowFriction: 'Так',
        printAccuracy: '±0.2 мм або ±0.3%',
        layerThickness: '80 мкм (MJF)'
      }
    },
    {
      name: 'PPSF',
      fullname: 'Polyphenylsulfone',
      description: 'Надзвичайно термостійкий матеріал для вимогливих промислових застосувань',
      technology: 'FDM',
      specs: {
        density: '1.24-1.28 г/см³',
        tensileStrength: '55-75 МПа',
        flexuralStrength: '110-130 МПа',
        heatDeflection: '200-220°C',
        impactResistance: 'Дуже висока',
        moistureAbsorption: 'Середнє (0.5-0.6%)',
        flameRating: 'UL 94 V-0',
        temperatureRange: '-50°C до +200°C',
        sterilizable: 'Так (автоклав)'
      }
    },
  ];

  return (
    <>
      <HeroFancy
        title="Матеріали для 3D-друку"
        description="Інженерні термопластики для промислових застосувань з детальною технічною інформацією"
      />
      <MaterialsShowcase
        title="Наші матеріали"
        description="Комплексний вибір інженерних термопластиків для різних технологій 3D-друку. Від функціональних прототипів до серійного виробництва."
        materials={materialsData}
      />
      <CTA
        title="Не знаєте який матеріал обрати?"
        description="Отримайте експертну консультацію щодо вибору оптимального матеріалу для вашого проєкту"
        cta1={{ text: 'Розрахувати вартість', href: '/services/3d-printing/calculator' }}
        cta2={{ text: "Зв'язатися з нами", href: '/contact' }}
      />
    </>
  );
}