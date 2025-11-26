export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface FAQCategory {
  id: string;
  name: string;
  items: FAQItem[];
}

export interface FAQProps {
  items: FAQItem[];
  categories?: FAQCategory[];
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'compact' | 'expanded';
  showCategories?: boolean;
  className?: string;
}

export interface FAQItemProps {
  item: FAQItem;
  variant?: 'default' | 'compact' | 'expanded';
  className?: string;
}