"use client";
import { useState } from "react";

const faqs = [
  {
    question: "How do I book a session?",
    answer: "You can book a session by signing up, choosing a listener, and selecting an available time slot that works for you."
  },
  {
    question: "Is my conversation private?",
    answer: "Absolutely. All conversations are encrypted and remain confidential between you and your listener."
  },
  {
    question: "Can I remain anonymous?",
    answer: "Yes, you can use a nickname and are not required to share any personal information unless you choose to."
  },
  {
    question: "Are the listeners certified?",
    answer: "All our listeners are trained and certified to provide empathetic, non-judgmental support."
  },
  {
    question: "How much does it cost?",
    answer: "We offer both free and premium sessions. Pricing details are available on the booking page."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase()) ||
    faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="w-full bg-[#f8fafc] py-12 md:py-20 flex flex-col items-center justify-center">
      <div className="container mx-auto max-w-2xl px-4 md:px-6">
        {/* Blue box */}
        <div className="bg-[#5CC3EB] rounded-lg p-4 md:p-6 mb-6 md:mb-8 flex items-center justify-between shadow">
          <div className="flex-1">
            <h2 className="text-white text-lg md:text-xl font-semibold mb-1 md:mb-2">What is Ready Social?</h2>
            <p className="text-white text-sm md:text-base font-normal">Ready Social is a platform designed to foster meaningful human connections across life, love, and work. Whether you&apos;re looking for friendships, relationships, or professional networks, we provide the tools and community to help you thrive.</p>
          </div>
          <span className="text-white text-xl md:text-2xl ml-2 md:ml-4 flex-shrink-0">&gt;</span>
        </div>

        {/* Search bar */}
        <div className="mb-6 md:mb-8 flex items-center gap-2">
          <input
            type="text"
            placeholder="Search FAQs..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#5CC3EB] bg-white shadow"
          />
        </div>

        {/* FAQ items */}
        <div className="space-y-3 md:space-y-4">
          {filteredFaqs.length === 0 && (
            <div className="text-center text-gray-400 py-6 md:py-8 text-sm md:text-base">No FAQs found.</div>
          )}
          {filteredFaqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-lg shadow border border-gray-200">
              <button
                className="w-full flex justify-between items-center px-4 md:px-6 py-4 md:py-5 text-left text-base md:text-lg font-semibold text-[#22292F] focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="pr-4">{faq.question}</span>
                <span className={`ml-2 flex-shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-90' : ''}`}>▶</span>
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