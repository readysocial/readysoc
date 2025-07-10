"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What is Ready Social?",
    answer: "Ready Social provides a safe and anonymous space where you can connect, express, and be heard. It's a place to share feelings, engage in meaningful conversations, and find support—without judgment.",
  },
  {
    question: "What are Listener Sessions?",
    answer: "Listener Sessions are judgment-free, one-on-one audio spaces anchored by trained and certified Listeners. These private conversations offer emotional support in a relaxed, non-clinical environment.",
  },
  {
    question: "Who are the Listeners?",
    answer: "Listeners are certified experts in emotional support. They're trained in active listening, empathy, ethical communication, and emotional care best practices. While they have professional backgrounds, they do not offer therapy or clinical advice.",
  },
  {
    question: "Who can use Ready Social?",
    answer: "Anyone who values emotional connection or simply needs someone to talk to. Whether you're navigating life changes, feeling overwhelmed, or just want to be heard, Ready Social is for you.",
  },
  {
    question: "Is Ready Social anonymous?",
    answer: "Yes. We prioritize anonymity and emotional safety. You can speak freely without ever revealing your identity.",
  },
  {
    question: "What kind of support can I get here?",
    answer: "You'll receive emotional and social support that feels like talking to a kind, trusted friend. No clinical advice or diagnoses—just a compassionate ear and real, human connection.",
  },
  {
    question: "How do conversations work?",
    answer: "You choose a topic, book a Listener Session, and speak privately with a certified Listener in a safe space. Conversations are natural, flexible, and emotionally supportive—not structured or formal.",
  },
  {
    question: "Can I talk about anything?",
    answer: "Absolutely—as long as it aligns with our community guidelines. You can talk about mental wellness, stress, identity, relationships, adulting, or anything that helps you feel seen and supported.",
  },
  {
    question: "How do I get started?",
    answer: "Download the app, create your anonymous profile, choose a topic you'd like to talk about, and book a one-on-one session with a Listener. That's it—you're just a tap away from being heard.",
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-20 flex flex-col items-center justify-center">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-6 sm:mb-8 md:mb-12 text-gray-900">
          Frequently Asked Questions
        </h1>

        {/* FAQ items */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md border border-gray-200 transition-all duration-200 hover:shadow-lg">
              <button
                className="w-full flex justify-between items-center px-4 sm:px-5 md:px-6 py-4 sm:py-5 text-left text-sm sm:text-base md:text-lg font-semibold text-[#22292F] focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="pr-4 leading-tight">{faq.question}</span>
                <span className={`ml-2 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 