import { HeroFancy } from '@/components/hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Наше обладнання | Additive3D',
  description:
    'Промислове 3D-друкарське обладнання Stratasys та HP для серійного виробництва та прототипування.',
};

export default function EquipmentPage() {
  return <>
    <HeroFancy />
  </>;  
}
