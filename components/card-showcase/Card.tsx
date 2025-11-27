// import ButtonLink from "../ui/button-link";

// export default function Card() {
//   return (
//     <div
//       key={card.name}
//       className="bg-base-100 border-primary/20 hover:border-primary/40 group rounded-xl border-2 p-8 transition-all duration-300 hover:shadow-xl"
//     >
//       <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-base-100 mb-6 flex h-12 w-12 items-center justify-center rounded-lg">
//         <span className="text-xl font-bold">{card.name}</span>
//       </div>

//       <h3 className="text-base-content mb-3 text-xl font-bold">{card.title}</h3>
//       <p className="text-base-content/70 mb-6">{card.description}</p>

//       <div className="mb-6">
//         <h4 className="text-base-content mb-3 font-semibold">Переваги:</h4>
//         <ul className="space-y-2">
//           {card.benefits.map((benefit, benefitIndex) => (
//             <li key={benefitIndex} className="text-base-content/80 flex items-center">
//               <svg
//                 className="text-primary mr-2 h-4 w-4 shrink-0"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               {benefit}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="border-base-200 border-t pt-6">
//         <p className="text-base-content/60 mb-4 text-sm">
//           <span className="font-semibold">Ідеально для:</span> {card.bestFor}
//         </p>
//         <ButtonLink
//           href={card.url || (cardLinkPrefix ? `${cardLinkPrefix}${card.name.toLowerCase()}` : '#')}
//           variant="outlined"
//           className="w-full"
//         >
//           Дізнатися більше
//         </ButtonLink>
//       </div>
//     </div>
//   );
// }
