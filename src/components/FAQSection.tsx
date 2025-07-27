import React from 'react';
import FAQAccordion from './FAQAccordion';
import EmailSignup from './EmailSignup';

const faqItems = [
  {
    id: 1,
    question: "What is Netflix?",
    answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
  },
  {
    id: 2,
    question: "How much does Netflix cost?",
    answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans start at €4.99 a month. No extra costs, no contracts."
  },
  {
    id: 3,
    question: "Where can I watch?",
    answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app."
  },
  {
    id: 4,
    question: "How do I cancel?",
    answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
  },
  {
    id: 5,
    question: "Is Netflix good for kids?",
    answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
  }
];

const FAQSection: React.FC = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-2 mb-12">
          {faqItems.map((item) => (
            <FAQAccordion key={item.id} {...item} />
          ))}
        </div>
        <EmailSignup />
      </div>
    </section>
  );
};

export default FAQSection;