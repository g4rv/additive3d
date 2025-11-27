export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Experimental</h1>
    </div>
  );
}

// 'use client';

// import CalculatorDescription from '@/components/calculator-description/CalculatorDescription';
// import CalculatorPreview from '@/components/calculator-preview/CalculatorPreview';
// import FinalCTA from '@/components/call-to-action/CallToAction';
// import EquipmentShowcase from '@/components/equipment-showcase/EquipmentShowcase';
// import AnimatedFeatureCard from '@/components/experimental/AnimatedFeatureCard';
// import InteractiveComparison from '@/components/experimental/InteractiveComparison';
// import InteractiveShowcase from '@/components/experimental/InteractiveShowcase';
// import { Hero2, Hero3 } from '@/components/hero';
// import MaterialsShowcase from '@/components/materials-showcase/MaterialsShowcase';
// import PrinciplesShowcase from '@/components/principles-showcase/PrinciplesShowcase';
// import ServicesHero from '@/components/services/ServicesHero';
// import { CardItem, CardList } from '@/components/ui/card-list';
// import FeatureHighlight from '@/components/ui/feature-highlight';
// import InfoCard from '@/components/ui/info-card';
// import ProgressIndicator from '@/components/ui/progress-indicator';
// import StatsGrid from '@/components/ui/stats-grid';
// import {
//   AlertCircle,
//   Beaker,
//   CheckCircle,
//   Code,
//   Download,
//   Eye,
//   Gauge,
//   Layers,
//   LayoutGrid,
//   List,
//   Monitor,
//   Palette,
//   Save,
//   Settings,
//   Smartphone,
//   Sparkles,
//   Tablet,
//   Zap,
// } from 'lucide-react';
// import { useState } from 'react';

// interface ComponentConfig {
//   id: string;
//   name: string;
//   category: string;
//   description: string;
//   component: React.ComponentType<unknown>;
//   props?: Record<string, unknown>;
// }

// interface SavedCombination {
//   id: string;
//   name: string;
//   components: string[];
//   timestamp: Date;
//   description: string;
// }

// export default function ExperimentalPage() {
//   const [selectedComponents, setSelectedComponents] = useState<string[]>([]);
//   const [activeView, setActiveView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
//   const [layoutMode, setLayoutMode] = useState<'grid' | 'list'>('grid');
//   const [savedCombinations, setSavedCombinations] = useState<SavedCombination[]>([]);
//   const [combinationName, setCombinationName] = useState('');
//   const [showSaveDialog, setShowSaveDialog] = useState(false);

//   // Define all available components
//   const allComponents: ComponentConfig[] = [
//     {
//       id: 'hero',
//       name: 'Hero Section',
//       category: 'Layout',
//       description: 'Main hero section for landing pages',
//       component: ServicesHero,
//       props: { title: 'Тестовий Hero', subtitle: 'Перевірка компонента' },
//     },
//     {
//       id: 'interactive-showcase',
//       name: 'Interactive Showcase',
//       category: 'Interactive',
//       description: 'Interactive showcase with hover effects',
//       component: InteractiveShowcase,
//       props: {
//         features: [
//           {
//             icon: <Beaker className="h-8 w-8" />,
//             title: 'Feature 1',
//             description: 'Test feature description',
//             color: 'from-blue-500 to-purple-600',
//           },
//         ],
//       },
//     },
//     {
//       id: 'equipment-showcase',
//       name: 'Equipment Showcase',
//       category: 'Business',
//       description: 'Equipment and machinery showcase',
//       component: EquipmentShowcase,
//     },
//     {
//       id: 'materials-showcase',
//       name: 'Materials Showcase',
//       category: 'Business',
//       description: 'Materials selection and showcase',
//       component: MaterialsShowcase,
//     },
//     {
//       id: 'principles-showcase',
//       name: 'Principles Showcase',
//       category: 'Business',
//       description: 'Company principles and values',
//       component: PrinciplesShowcase,
//     },
//     {
//       id: 'info-cards',
//       name: 'Info Cards',
//       category: 'UI',
//       description: 'Information cards with metrics',
//       component: InfoCard,
//       props: { title: 'Тест', value: '100', description: 'Test description' },
//     },
//     {
//       id: 'progress-indicator',
//       name: 'Progress Indicator',
//       category: 'UI',
//       description: 'Step progress indicator',
//       component: ProgressIndicator,
//       props: {
//         steps: [
//           { label: 'Крок 1', status: 'completed' },
//           { label: 'Крок 2', status: 'current' },
//           { label: 'Крок 3', status: 'pending' },
//         ],
//         currentStep: 1,
//         showLabels: true,
//       },
//     },
//     {
//       id: 'stats-grid',
//       name: 'Stats Grid',
//       category: 'UI',
//       description: 'Statistics grid display',
//       component: StatsGrid,
//       props: {
//         stats: [
//           { label: 'Метрика 1', value: '100', change: '+10%', trend: 'up' },
//           { label: 'Метрика 2', value: '200', trend: 'neutral' },
//         ],
//         columns: 2,
//         showTrends: true,
//       },
//     },
//     {
//       id: 'feature-highlight',
//       name: 'Feature Highlight',
//       category: 'UI',
//       description: 'Feature highlight component',
//       component: FeatureHighlight,
//       props: {
//         icon: <Gauge className="h-12 w-12" />,
//         title: 'Тестова функція',
//         description: 'Опис функції для тестування',
//       },
//     },
//     {
//       id: 'calculator-description',
//       name: 'Calculator Description',
//       category: 'Business',
//       description: 'Calculator description component',
//       component: CalculatorDescription,
//     },
//     {
//       id: 'calculator-preview',
//       name: 'Calculator Preview',
//       category: 'Business',
//       description: 'Calculator preview component',
//       component: CalculatorPreview,
//     },
//     {
//       id: 'animated-cards',
//       name: 'Animated Feature Cards',
//       category: 'Interactive',
//       description: 'Animated feature cards with stagger effect',
//       component: AnimatedFeatureCard,
//       props: {
//         title: 'Анімована картка',
//         description: 'Тестова анімована картка',
//         icon: <Sparkles className="h-12 w-12" />,
//         gradient: 'from-purple-500 to-pink-500',
//         stats: ['60fps', 'Smooth', 'Interactive'],
//         delay: 0,
//       },
//     },
//     {
//       id: 'comparison',
//       name: 'Interactive Comparison',
//       category: 'Interactive',
//       description: 'Side-by-side comparison component',
//       component: InteractiveComparison,
//       props: {
//         data: {
//           left: {
//             title: 'Варіант А',
//             features: ['Функція 1', 'Функція 2'],
//             color: 'from-blue-500 to-cyan-500',
//           },
//           right: {
//             title: 'Варіант Б',
//             features: ['Функція 3', 'Функція 4'],
//             color: 'from-purple-500 to-pink-500',
//           },
//         },
//       },
//     },
//     {
//       id: 'cta',
//       name: 'Final CTA',
//       category: 'Layout',
//       description: 'Call-to-action section',
//       component: FinalCTA,
//     },
//     {
//       id: 'hero-2',
//       name: 'Hero 2 (Professional)',
//       category: 'Layout',
//       description: 'Clean, professional hero for informative business pages',
//       component: Hero2,
//       props: {
//         title: 'Professional 3D Printing Services',
//         subtitle:
//           'Industrial-grade additive manufacturing solutions with precision and reliability',
//         cta: {
//           text: 'Get Quote',
//           href: '/services/3d-printing/calculator',
//         },
//       },
//     },
//     {
//       id: 'hero-3',
//       name: 'Hero 3 (Animated)',
//       category: 'Layout',
//       description: 'Simple hero with subtle animations and gradient background',
//       component: Hero3,
//       props: {
//         title: 'Advanced Manufacturing Solutions',
//         subtitle:
//           'Precision additive manufacturing with cutting-edge technology and expert support',
//         cta: {
//           text: 'Learn More',
//           href: '/services',
//         },
//       },
//     },

//     {
//       id: 'card-list',
//       name: 'Card List (Flexible)',
//       category: 'UI',
//       description: 'Flexible card list for materials, equipment, etc.',
//       component: CardList,
//       props: {
//         title: 'Тестова колекція',
//         description: 'Приклад гнучкого списку карток',
//         cards: [
//           {
//             name: 'TEST1',
//             title: 'Тестовий елемент 1',
//             description: 'Опис тестового компонента для перевірки відображення',
//             benefits: ['Перевага 1', 'Перевага 2'],
//             bestFor: 'Тестові цілі',
//             note: 'Це тестова примітка',
//           },
//           {
//             name: 'TEST2',
//             title: 'Тестовий елемент 2',
//             description: 'Другий тестовий компонент',
//             benefits: ['Функціональність', 'Гнучкість'],
//             bestFor: 'Демонстрація',
//           },
//         ],
//         cardButtonText: 'Детальніше',
//         ctaText: 'Допомога з вибором',
//       },
//     },
//     {
//       id: 'card-item',
//       name: 'Card Item (Single)',
//       category: 'UI',
//       description: 'Individual card component for standalone use',
//       component: CardItem,
//       props: {
//         card: {
//           name: 'ITEM',
//           title: 'Окрема картка',
//           description: 'Приклад окремої картки компонента',
//           benefits: ['Перевага 1', 'Перевага 2', 'Перевага 3'],
//           bestFor: 'Тестові цілі',
//           note: 'Це окрема картка для демонстрації',
//         },
//         cardLinkPrefix: '/test/',
//         cardButtonText: 'Переглянути',
//       },
//     },
//   ];

//   // Group components by category
//   const componentsByCategory = allComponents.reduce(
//     (acc, component) => {
//       if (!acc[component.category]) {
//         acc[component.category] = [];
//       }
//       acc[component.category].push(component);
//       return acc;
//     },
//     {} as Record<string, ComponentConfig[]>
//   );

//   const toggleComponent = (componentId: string) => {
//     setSelectedComponents((prev) =>
//       prev.includes(componentId) ? prev.filter((id) => id !== componentId) : [...prev, componentId]
//     );
//   };

//   const saveCombination = () => {
//     if (!combinationName.trim() || selectedComponents.length === 0) return;

//     const newCombination: SavedCombination = {
//       id: Date.now().toString(),
//       name: combinationName,
//       components: [...selectedComponents],
//       timestamp: new Date(),
//       description: `Комбінація з ${selectedComponents.length} компонентів`,
//     };

//     setSavedCombinations((prev) => [...prev, newCombination]);
//     setCombinationName('');
//     setShowSaveDialog(false);
//   };

//   const loadCombination = (combination: SavedCombination) => {
//     setSelectedComponents(combination.components);
//   };

//   const exportCombination = () => {
//     const exportData = {
//       name: combinationName || 'Untitled Combination',
//       components: selectedComponents,
//       timestamp: new Date().toISOString(),
//       componentsConfig: selectedComponents.map((id) => allComponents.find((c) => c.id === id)),
//     };

//     const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     // eslint-disable-next-line react-hooks/purity
//     a.download = `${combinationName || 'combination'}-${Date.now()}.json`;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   };

//   const clearSelection = () => {
//     setSelectedComponents([]);
//   };

//   const renderPreview = () => {
//     const selectedComponentsList = selectedComponents
//       .map((id) => allComponents.find((c) => c.id === id))
//       .filter(Boolean) as ComponentConfig[];

//     if (selectedComponentsList.length === 0) {
//       return (
//         <div className="flex h-full flex-col items-center justify-center p-8 text-center">
//           <AlertCircle className="mb-4 h-16 w-16 text-gray-400" />
//           <h3 className="mb-2 text-xl font-semibold text-gray-700 dark:text-gray-300">
//             Немає обраних компонентів
//           </h3>
//           <p className="text-gray-500 dark:text-gray-400">
//             Оберіть компоненти з ліваї панелі для перегляду їх комбінації
//           </p>
//         </div>
//       );
//     }

//     return (
//       <div
//         className={`p-4 ${activeView === 'mobile' ? 'mx-auto max-w-sm' : activeView === 'tablet' ? 'mx-auto max-w-2xl' : 'mx-auto max-w-6xl'}`}
//       >
//         <div className="space-y-6">
//           {selectedComponentsList.map((config) => {
//             const Component = config.component;
//             return (
//               <div
//                 key={config.id}
//                 className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
//               >
//                 <div className="mb-2 font-mono text-xs text-gray-500 dark:text-gray-400">
//                   {config.name} ({config.category})
//                 </div>
//                 <Component {...config.props} />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   };

//   const _showcaseFeatures = [
//     {
//       icon: <Beaker className="h-8 w-8" />,
//       title: 'Інтерактивні Елементи',
//       description: 'Динамічні компоненти з анімаціями та взаємодією',
//       color: 'from-blue-500 to-purple-600',
//     },
//     {
//       icon: <Zap className="h-8 w-8" />,
//       title: 'Продуктивність',
//       description: 'Оптимізовані компоненти з плавною анімацією',
//       color: 'from-yellow-500 to-orange-600',
//     },
//     {
//       icon: <Palette className="h-8 w-8" />,
//       title: 'Дизайн Система',
//       description: 'Сучасний UI з узгодженим стилем та темою',
//       color: 'from-green-500 to-teal-600',
//     },
//   ];

//   const _gridComponents = [
//     {
//       title: 'Анімовані Карти',
//       description: 'Інтерактивні картки з плавними переходами',
//       icon: <Layers className="h-6 w-6" />,
//       category: 'UI Компоненти',
//       interactive: true,
//     },
//     {
//       title: 'Порівняння',
//       description: 'Візуальне порівняння продуктів чи послуг',
//       icon: <Settings className="h-6 w-6" />,
//       category: 'Інструменти',
//       interactive: true,
//     },
//     {
//       title: 'Галереї',
//       description: 'Адаптивні галереї з різними режимами відображення',
//       icon: <Eye className="h-6 w-6" />,
//       category: 'Медіа',
//       interactive: false,
//     },
//     {
//       title: 'Форми',
//       description: 'Стилізовані форми з валідацією та анімаціями',
//       icon: <Code className="h-6 w-6" />,
//       category: 'Інпути',
//       interactive: true,
//     },
//   ];

//   const _featureCards = [
//     {
//       title: 'Миттєві Переходи',
//       description: 'Плавні анімації з природною фізикою',
//       icon: <Sparkles className="h-12 w-12" />,
//       gradient: 'from-purple-500 to-pink-500',
//       stats: ['60fps', 'Spring Physics', 'GPU Accelerated'],
//     },
//     {
//       title: 'Адаптивний Дизайн',
//       description: 'Ідеальне відображення на будь-якому пристрої',
//       icon: <Settings className="h-12 w-12" />,
//       gradient: 'from-blue-500 to-cyan-500',
//       stats: ['Mobile First', 'Responsive', 'Touch Friendly'],
//     },
//     {
//       title: 'Темна Режим',
//       description: 'Автоматичне переключення теми з плавними переходами',
//       icon: <Palette className="h-12 w-12" />,
//       gradient: 'from-gray-700 to-gray-900',
//       stats: ['Auto Switch', 'Smooth Transition', 'System Sync'],
//     },
//   ];

//   const _comparisonData = {
//     left: {
//       title: 'Традиційний Підхід',
//       features: ['Статичні компоненти', 'Базові анімації', 'Обмежена взаємодія', 'Стандартний UX'],
//       color: 'from-gray-500 to-gray-700',
//     },
//     right: {
//       title: 'Експериментальний UX',
//       features: [
//         'Інтерактивні компоненти',
//         'Плавні анімації',
//         'Багаторівнева взаємодія',
//         'Сучасний досвід',
//       ],
//       color: 'from-purple-500 to-pink-500',
//     },
//   };

//   return (
//     <div className="min-h-no-header-screen bg-gray-50 dark:bg-gray-900">
//       {/* Header */}
//       <div className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
//         <div className="px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div>
//               <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
//                 🧪 Component Playground
//               </h1>
//               <p className="text-sm text-gray-600 dark:text-gray-400">
//                 Test and combine different components to find optimal layouts
//               </p>
//             </div>

//             <div className="flex items-center gap-2">
//               {/* View Controls */}
//               <div className="flex items-center rounded-lg bg-gray-100 p-1 dark:bg-gray-700">
//                 <button
//                   onClick={() => setActiveView('desktop')}
//                   className={`rounded p-2 ${activeView === 'desktop' ? 'bg-white shadow dark:bg-gray-600' : ''}`}
//                   title="Desktop View"
//                 >
//                   <Monitor className="h-4 w-4" />
//                 </button>
//                 <button
//                   onClick={() => setActiveView('tablet')}
//                   className={`rounded p-2 ${activeView === 'tablet' ? 'bg-white shadow dark:bg-gray-600' : ''}`}
//                   title="Tablet View"
//                 >
//                   <Tablet className="h-4 w-4" />
//                 </button>
//                 <button
//                   onClick={() => setActiveView('mobile')}
//                   className={`rounded p-2 ${activeView === 'mobile' ? 'bg-white shadow dark:bg-gray-600' : ''}`}
//                   title="Mobile View"
//                 >
//                   <Smartphone className="h-4 w-4" />
//                 </button>
//               </div>

//               {/* Layout Mode */}
//               <button
//                 onClick={() => setLayoutMode(layoutMode === 'grid' ? 'list' : 'grid')}
//                 className="rounded-lg bg-gray-100 p-2 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
//                 title="Toggle Layout"
//               >
//                 {layoutMode === 'grid' ? (
//                   <List className="h-4 w-4" />
//                 ) : (
//                   <LayoutGrid className="h-4 w-4" />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Action Bar */}
//           <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
//             <div className="flex items-center gap-2">
//               <span className="text-sm text-gray-600 dark:text-gray-400">
//                 {selectedComponents.length} components selected
//               </span>
//               {selectedComponents.length > 0 && (
//                 <button
//                   onClick={clearSelection}
//                   className="text-sm text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
//                 >
//                   Clear all
//                 </button>
//               )}
//             </div>

//             <div className="flex items-center gap-2">
//               {selectedComponents.length > 0 && (
//                 <>
//                   <button
//                     onClick={() => setShowSaveDialog(true)}
//                     className="flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-700"
//                   >
//                     <Save className="h-4 w-4" />
//                     Save Combination
//                   </button>
//                   <button
//                     onClick={exportCombination}
//                     className="flex items-center gap-1 rounded-lg bg-green-600 px-3 py-1.5 text-sm text-white hover:bg-green-700"
//                   >
//                     <Download className="h-4 w-4" />
//                     Export
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex h-[calc(100vh-140px)]">
//         {/* Left Sidebar - Component Selection */}
//         <div className="w-80 overflow-y-auto border-r border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
//           <div className="p-4">
//             <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
//               Available Components
//             </h2>

//             {Object.entries(componentsByCategory).map(([category, components]) => (
//               <div key={category} className="mb-6">
//                 <h3 className="mb-3 text-sm font-medium tracking-wider text-gray-700 uppercase dark:text-gray-300">
//                   {category}
//                 </h3>
//                 <div
//                   className={`space-y-2 ${layoutMode === 'grid' ? 'grid grid-cols-1 gap-2' : ''}`}
//                 >
//                   {components.map((component) => (
//                     <div
//                       key={component.id}
//                       className={`cursor-pointer rounded-lg border p-3 transition-all ${
//                         selectedComponents.includes(component.id)
//                           ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
//                           : 'border-gray-200 hover:border-gray-300 dark:border-gray-600 dark:hover:border-gray-500'
//                       } `}
//                       onClick={() => toggleComponent(component.id)}
//                     >
//                       <div className="flex items-start justify-between">
//                         <div className="flex-1">
//                           <div className="text-sm font-medium text-gray-900 dark:text-white">
//                             {component.name}
//                           </div>
//                           <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//                             {component.description}
//                           </div>
//                         </div>
//                         {selectedComponents.includes(component.id) && (
//                           <CheckCircle className="mt-1 ml-2 h-4 w-4 flex-shrink-0 text-blue-500" />
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}

//             {/* Saved Combinations */}
//             {savedCombinations.length > 0 && (
//               <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-600">
//                 <h3 className="mb-3 text-sm font-medium tracking-wider text-gray-700 uppercase dark:text-gray-300">
//                   Saved Combinations
//                 </h3>
//                 <div className="space-y-2">
//                   {savedCombinations.map((combination) => (
//                     <div
//                       key={combination.id}
//                       className="cursor-pointer rounded-lg border border-gray-200 p-3 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
//                       onClick={() => loadCombination(combination)}
//                     >
//                       <div className="text-sm font-medium text-gray-900 dark:text-white">
//                         {combination.name}
//                       </div>
//                       <div className="text-xs text-gray-500 dark:text-gray-400">
//                         {combination.components.length} components • {combination.description}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Right Content - Preview */}
//         <div className="flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-900">
//           <div className="h-full">{renderPreview()}</div>
//         </div>
//       </div>

//       {/* Save Dialog */}
//       {showSaveDialog && (
//         <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
//           <div className="mx-4 w-96 max-w-full rounded-lg bg-white p-6 dark:bg-gray-800">
//             <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
//               Save Component Combination
//             </h3>
//             <input
//               type="text"
//               value={combinationName}
//               onChange={(e) => setCombinationName(e.target.value)}
//               placeholder="Enter combination name..."
//               className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
//               autoFocus
//             />
//             <div className="mt-4 flex justify-end gap-2">
//               <button
//                 onClick={() => setShowSaveDialog(false)}
//                 className="px-4 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={saveCombination}
//                 disabled={!combinationName.trim() || selectedComponents.length === 0}
//                 className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
//               >
//                 Save Combination
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
