export interface EquipmentItem {
  name: string;
  description: string;
  technology: string;
  href: string;
  image?: string;
  specs?: string[];
}

export interface EquipmentShowcaseProps {
  title: string;
  description?: string;
  equipment: EquipmentItem[];
  className?: string;
}