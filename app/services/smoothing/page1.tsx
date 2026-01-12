// import CTA from '@/components/cta';
// import HeroFancy from '@/components/hero/hero-fancy/HeroFancy';
// import Image from 'next/image';
// import { Zap, CheckCircle, Shield, Clock, Info, FileText, Search } from 'lucide-react';

// export const metadata = {
//   title: 'Хімічне згладжування поверхні деталей (Vapor Smoothing) | Additive3D',
//   description: 'Професійне хімічне парове згладжування для підвищення міцності та зносостійкості 3D-друкованих деталей. Герметизація поверхні та усунення пористості.',
// };

// export default function SmoothingPage() {
//   return (
//     <>
//       {/* Hero Section */}
//       <HeroFancy
//         title="Хімічне згладжування"
//         description="Інноваційна технологія для підвищення міцності та зносостійкості пластикових деталей. Герметизація поверхні та зменшення шорсткості."
//       />

//       <div className="custom-container py-12">
//         {/* Service Overview */}
//         <div className="mb-16">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold text-primary mb-6">
//                 Ми спеціалізуємося на згладжуванні поверхні деталей парами розчинника
//               </h2>
//               <p className="text-base-content/80 text-lg leading-relaxed mb-8">
//                 Інноваційна технологія для підвищення міцності та зносостійкості пластикових деталей. Герметизація поверхні та зменшення шорсткості.
//               </p>
//               <div className="flex gap-4 mb-8">
//                 <div className="badge badge-primary badge-lg">
//                   Підвищення міцності
//                 </div>
//                 <div className="badge badge-secondary badge-lg">
//                   Зменшення шорсткості
//                 </div>
//                 <div className="badge badge-outline badge-lg">
//                   FDM та MJF
//                 </div>
//               </div>
//             </div>
//             <div className="relative">
//               <Image
//                 src="/Services/post-processing/post-processing.jpg"
//                 alt="Хімічне парове згладжування поверхні деталей (Vapor Smoothing)"
//                 width={600}
//                 height={400}
//                 className="rounded-lg shadow-xl"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Process Benefits */}
//         <div className="mb-16">
//           <h2 className="text-3xl font-bold text-primary mb-12 text-center">
//             Переваги хімічного згладжування
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="card bg-base-200 border border-primary/20 hover:border-primary/40 transition-all duration-300">
//               <div className="card-body p-6 text-center">
//                 <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Zap className="size-8 text-primary" />
//                 </div>
//                 <h3 className="text-lg font-bold text-primary mb-3">Герметизація поверхні</h3>
//                 <p className="text-base-content/80 text-sm leading-relaxed">
//                   Усунення пористості та мікротріщин поверхні полімерних деталей
//                 </p>
//               </div>
//             </div>

//             <div className="card bg-base-200 border border-primary/20 hover:border-primary/40 transition-all duration-300">
//               <div className="card-body p-6 text-center">
//                 <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <CheckCircle className="size-8 text-primary" />
//                 </div>
//                 <h3 className="text-lg font-bold text-primary mb-3">Зменшення шорсткості</h3>
//                 <p className="text-base-content/80 text-sm leading-relaxed">
//                   Згладжування поверхні для покращення естетичних та функціональних властивостей
//                 </p>
//               </div>
//             </div>

//             <div className="card bg-base-200 border border-primary/20 hover:border-primary/40 transition-all duration-300">
//               <div className="card-body p-6 text-center">
//                 <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Shield className="size-8 text-primary" />
//                 </div>
//                 <h3 className="text-lg font-bold text-primary mb-3">Хімічна стійкість</h3>
//                 <p className="text-base-content/80 text-sm leading-relaxed">
//                   Створює захисний бар&apos;єр, який покращує стійкість до хімічних речовин, води та масел
//                 </p>
//               </div>
//             </div>

//             <div className="card bg-base-200 border border-primary/20 hover:border-primary/40 transition-all duration-300">
//               <div className="card-body p-6 text-center">
//                 <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Clock className="size-8 text-primary" />
//                 </div>
//                 <h3 className="text-lg font-bold text-primary mb-3">Покращення поверхні</h3>
//                 <p className="text-base-content/80 text-sm leading-relaxed">
//                   Створення гладкої та однорідної поверхні без видимих дефектів
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Technology Process */}
//         <div className="mb-16">
//           <h2 className="text-3xl font-bold text-primary mb-12 text-center">
//             Технологія процесу
//           </h2>

//           <div className="card bg-primary/5 border border-primary/20">
//             <div className="card-body p-8">
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                 <div className="space-y-6">
//                   <div>
//                     <h3 className="text-xl font-bold text-primary mb-4">Процес хімічного згладжування</h3>
//                     <p className="text-base-content/80 leading-relaxed mb-6">
//                       Контрольований процес хімічної обробки деталей парами розчинника з точним регулюванням температури та часу обробки.
//                     </p>
//                     <div className="space-y-3">
//                       <div className="flex items-start gap-3">
//                         <div className="w-2 h-2 bg-success rounded-full mt-2 shrink-0"></div>
//                         <div>
//                           <div className="font-medium text-base-content">Точна температура</div>
//                           <div className="text-sm text-base-content/60">Контрольована до 1°C</div>
//                         </div>
//                       </div>
//                       <div className="flex items-start gap-3">
//                         <div className="w-2 h-2 bg-success rounded-full mt-2 shrink-0"></div>
//                         <div>
//                           <div className="font-medium text-base-content">Рівномірна обробка</div>
//                           <div className="text-sm text-base-content/60">Однорідний вплив розчинника на всю поверхню</div>
//                         </div>
//                       </div>
//                       <div className="flex items-start gap-3">
//                         <div className="w-2 h-2 bg-success rounded-full mt-2 shrink-0"></div>
//                         <div>
//                           <div className="font-medium text-base-content">Автоматизація</div>
//                           <div className="text-sm text-base-content/60">Програмоване керування процесом</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div>
//                     <h3 className="text-xl font-bold text-primary mb-4">Матеріали для обробки</h3>
//                     <div className="space-y-3">
//                       <div className="flex items-start gap-3">
//                         <div className="w-2 h-2 bg-success rounded-full mt-2 shrink-0"></div>
//                         <div>
//                           <div className="font-medium text-base-content">FDM технологія</div>
//                           <div className="text-sm text-base-content/60">ASA, ABS</div>
//                         </div>
//                       </div>
//                       <div className="flex items-start gap-3">
//                         <div className="w-2 h-2 bg-success rounded-full mt-2 shrink-0"></div>
//                         <div>
//                           <div className="font-medium text-base-content">MJF технологія</div>
//                           <div className="text-sm text-base-content/60">PA12, PA11</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="relative">
//                   <Image
//                     src="/Services/post-processing/dyeing-mjf.jpg"
//                     alt="Технологія парового зварювання"
//                     width={500}
//                     height={400}
//                     className="rounded-lg shadow-xl"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Applications */}
//         <div className="mb-16">
//           <h2 className="text-3xl font-bold text-primary mb-12 text-center">
//             Застосування технології
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="card bg-base-100 border border-base-300 hover:border-primary/30 transition-all duration-300">
//               <div className="card-body p-6">
//                 <h3 className="text-lg font-bold text-primary mb-2">Функціональні прототипи</h3>
//                 <p className="text-base-content/80 leading-relaxed">
//                   Підвищення міцності прототипів для тестування та валідації конструкцій
//                 </p>
//               </div>
//             </div>

//             <div className="card bg-base-100 border border-base-300 hover:border-primary/30 transition-all duration-300">
//               <div className="card-body p-6">
//                 <h3 className="text-lg font-bold text-primary mb-2">Серійне виробництво</h3>
//                 <p className="text-base-content/80 leading-relaxed">
//                   Стабілізація розмірів та властивостей для масового виробництва деталей
//                 </p>
//               </div>
//             </div>

//             <div className="card bg-base-100 border border-base-300 hover:border-primary/30 transition-all duration-300">
//               <div className="card-body p-6">
//                 <h3 className="text-lg font-bold text-primary mb-2">Інженерні деталі</h3>
//                 <p className="text-base-content/80 leading-relaxed">
//                   Покращення механічних характеристик для відповідності технічним вимогам
//                 </p>
//               </div>
//             </div>

//             <div className="card bg-base-100 border border-base-300 hover:border-primary/30 transition-all duration-300">
//               <div className="card-body p-6">
//                 <h3 className="text-lg font-bold text-primary mb-2">Медичні вироби</h3>
//                 <p className="text-base-content/80 leading-relaxed">
//                   Забезпечення біосумісності та стерильності медичних компонентів
//                 </p>
//               </div>
//             </div>

//             <div className="card bg-base-100 border border-base-300 hover:border-primary/30 transition-all duration-300">
//               <div className="card-body p-6">
//                 <h3 className="text-lg font-bold text-primary mb-2">Автомобільні запчастини</h3>
//                 <p className="text-base-content/80 leading-relaxed">
//                   Підвищення зносостійкості та довговічності функціональних елементів
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Technical Specifications */}
//         <div className="mb-16">
//           <h2 className="text-3xl font-bold text-primary mb-12 text-center">
//             Технічні специфікації
//           </h2>

//           <div className="card bg-base-200 border border-base-300">
//             <div className="card-body p-8">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 <div>
//                   <h4 className="text-lg font-bold text-primary mb-4">Параметри процесу</h4>
//                   <div className="space-y-3 text-sm">
//                     <div className="flex justify-between">
//                       <span className="text-base-content/60">Температура:</span>
//                       <span className="font-medium">120-180°C</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-base-content/60">Час обробки:</span>
//                       <span className="font-medium">5-30 хвилин</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-base-content/60">Тиск пари:</span>
//                       <span className="font-medium">0.5-2.0 МПа</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-base-content/60">Основа матеріалу:</span>
//                       <span className="font-medium">PA12, ABS, PC</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <h4 className="text-lg font-bold text-primary mb-4">Результати обробки</h4>
//                   <div className="space-y-3 text-sm">
//                     <div className="flex justify-between">
//                       <span className="text-base-content/60">Підвищення щільності:</span>
//                       <span className="font-medium">5-15%</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-base-content/60">Стабільність розмірів:</span>
//                       <span className="font-medium">±0.1%</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-base-content/60">Підвищення міцності:</span>
//                       <span className="font-medium">10-25%</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-base-content/60">Зниження пористості:</span>
//                       <span className="font-medium">до 90%</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <h4 className="text-lg font-bold text-primary mb-4">Якість поверхні</h4>
//                   <div className="space-y-3 text-sm">
//                     <div className="flex justify-between">
//                       <span className="text-base-content/60">Шорсткість:</span>
//                       <span className="font-medium">Ra 1.6-3.2 мкм</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-base-content/60">Однорідність:</span>
//                       <span className="font-medium">Висока</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-base-content/60">Колір:</span>
//                       <span className="font-medium">Без змін</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-base-content/60">Дефекти:</span>
//                       <span className="font-medium">Відсутні</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Quality Control */}
//         <div className="mb-16">
//           <h2 className="text-3xl font-bold text-primary mb-12 text-center">
//             Контроль якості
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="card bg-base-100 border border-base-300 hover:border-primary/30 transition-all duration-300">
//               <div className="card-body p-8 text-center">
//                 <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <CheckCircle className="size-8 text-success" />
//                 </div>
//                 <h3 className="text-xl font-bold text-primary mb-4">Вхідний контроль</h3>
//                 <p className="text-base-content/80 leading-relaxed">
//                   Перевірка вихідних параметрів 3D-друку перед обробкою
//                 </p>
//               </div>
//             </div>

//             <div className="card bg-base-100 border border-base-300 hover:border-primary/30 transition-all duration-300">
//               <div className="card-body p-8 text-center">
//                 <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <Info className="size-8 text-success" />
//                 </div>
//                 <h3 className="text-xl font-bold text-primary mb-4">Процесний моніторинг</h3>
//                 <p className="text-base-content/80 leading-relaxed">
//                   Контроль температури та часу обробки в реальному часі
//                 </p>
//               </div>
//             </div>

//             <div className="card bg-base-100 border border-base-300 hover:border-primary/30 transition-all duration-300">
//               <div className="card-body p-8 text-center">
//                 <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <FileText className="size-8 text-success" />
//                 </div>
//                 <h3 className="text-xl font-bold text-primary mb-4">Вихідний контроль</h3>
//                 <p className="text-base-content/80 leading-relaxed">
//                   Вимірювання розмірів та перевірка відповідності технічним вимогам
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Advantages */}
//         <div className="mb-16">
//           <h2 className="text-3xl font-bold text-primary mb-12 text-center">
//             Переваги технології
//           </h2>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             <div className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
//                   <Zap className="size-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-bold text-primary mb-2">Інноваційний підхід</h4>
//                   <p className="text-base-content/80 leading-relaxed">
//                     Використання сучасних технологій для досягнення максимальної ефективності процесу зварювання.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
//                   <CheckCircle className="size-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-bold text-primary mb-2">Висока точність</h4>
//                   <p className="text-base-content/80 leading-relaxed">
//                     Стабільні результати з мінімальними відхиленнями розмірів та властивостей матеріалу.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
//                   <Clock className="size-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-bold text-primary mb-2">Екологічність</h4>
//                   <p className="text-base-content/80 leading-relaxed">
//                     Відсутність хімічних речовин та безпечність для використання у різних галузях.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
//                   <Shield className="size-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-bold text-primary mb-2">Надійність</h4>
//                   <p className="text-base-content/80 leading-relaxed">
//                     Прогнозовані результати з гарантованою якістю та стабільністю характеристик.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
//                   <Search className="size-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-bold text-primary mb-2">Економічна ефективність</h4>
//                   <p className="text-base-content/80 leading-relaxed">
//                     Оптимізація виробничих процесів та зменшення витрат на додаткову обробку.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <CTA
//         title="Потрібна консультація з хімічного згладжування?"
//         description="Наші інженери допоможуть обрати оптимальні параметри обробки та розрахують вартість для вашого проєкту"
//         cta1={{ text: 'Розрахувати вартість', href: '/services/3d-printing/calculator' }}
//         cta2={{ text: "Зв'язатися з нами", href: '/contact' }}
//       />
//     </>
//   );
// }