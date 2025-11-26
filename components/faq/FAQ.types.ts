export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQProps {
  title: string;
  description?: string;
  items: FAQItem[];
  className?: string;
}