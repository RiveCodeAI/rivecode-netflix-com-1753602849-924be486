export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  isOpen?: boolean;
}

export interface FAQSectionProps {
  items: FAQItem[];
  className?: string;
}

export interface FAQAccordionProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

export const FAQ_ANIMATION_DURATION = 300;

export const DEFAULT_FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: "What is Netflix?",
    answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
  },
  {
    id: 2,
    question: "How much does Netflix cost?",
    answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from €4.99 to €17.99 a month. No extra costs, no contracts."
  }
];