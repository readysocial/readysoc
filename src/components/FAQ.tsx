"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Who can use Ready Social?",
    answer: "Anyone looking for a safe and supportive space to connect with others. We welcome people from all walks of life.",
  },
  {
    question: "How does Ready Social work?",
    answer: "You sign up, browse through our trained listeners, and book a session that fits your schedule. It's that simple to start a meaningful conversation.",
  },
  {
    question: "Is Ready Social anonymous?",
    answer: "Yes, you have the option to remain completely anonymous. Your privacy and comfort are our top priorities.",
  },
  {
    question: "What are 'Trained Listeners'?",
    answer: "Our listeners are individuals trained in active listening and providing empathetic support. They are not therapists but are here to offer a compassionate ear.",
  },
  {
    question: "Is Ready Social free to use?",
    answer: "We offer both free and paid sessions to ensure accessibility for everyone. You can choose the option that works best for you.",
  },
  {
    question: "How can I become a Listener?",
    answer: "If you're passionate about helping others, you can apply to become a listener through our website. We provide all the necessary training.",
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-12 md:py-20 flex flex-col items-center justify-center">
      <div className="container mx-auto max-w-2xl px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 md:mb-12 text-gray-900">
          Frequently Asked Questions
        </h1>
        {/* Blue box */}
        <div className="bg-[#5CC3EB] rounded-lg p-4 md:p-6 mb-6 md:mb-8 flex items-center justify-between shadow">
          <div className="flex-1">
            <h2 className="text-white text-lg md:text-xl font-semibold mb-1 md:mb-2">What is Ready Social?</h2>
            <p className="text-white text-sm md:text-base font-normal">Ready Social is a platform designed to foster meaningful human connections across life, love, and work. Whether you&apos;re looking for friendships, relationships, or professional networks, we provide the tools and community to help you thrive.</p>
          </div>
          <svg className="flex-shrink-0 ml-2 md:ml-4 text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* FAQ items */}
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md border border-gray-200">
              <button
                className="w-full flex justify-between items-center px-4 md:px-6 py-4 md:py-5 text-left text-base md:text-lg font-semibold text-[#22292F] focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="pr-4">{faq.question}</span>
                <span className={`ml-2 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-600 text-sm md:text-base animate-fade-in">
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