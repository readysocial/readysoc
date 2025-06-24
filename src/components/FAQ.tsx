"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What is Ready Social?",
    answer:
      "Ready Social is a platform designed to help users create meaningful connections across the areas of Life, Love, and Work. Whether you're looking for support, building relationships, or expanding professional networks, Ready Social encourages genuine and purposeful connections.",
  },
  {
    question: "How does Ready Social work?",
    answer:
      "You sign up, browse through our trained listeners, and book a session that fits your schedule. It's that simple to start a meaningful conversation.",
  },
  {
    question: "How do I get started?",
    answer:
      "Download the app, create an account, and you can immediately start connecting with listeners or other users.",
  },
  {
    question: "What are 'Trained Listeners'?",
    answer:
      "Our listeners are individuals trained in active listening and providing empathetic support. They are not therapists but are here to offer a compassionate ear.",
  },
  {
    question: "Is Ready Social free to use?",
    answer:
      "We offer both free and paid sessions to ensure accessibility for everyone. You can choose the option that works best for you.",
  },
  {
    question: "How can I become a Listener?",
    answer:
      "If you're passionate about helping others, you can apply to become a listener through our website. We provide all the necessary training.",
  },
  {
    question: "How does Ready Social ensure a safe space?",
    answer:
      "All conversations are encrypted and remain confidential between you and your listener. We have strict community guidelines to ensure safety and respect.",
  },
  {
    question: "Can I use Ready Social for professional networking?",
    answer:
      "Yes, Ready Social is designed to help you build both personal and professional connections in a safe, supportive environment.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="w-full bg-white py-12 md:py-20 flex flex-col items-center justify-center">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-black">
          Frequently Asked Questions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl bg-white shadow-md transition-all border ${
                  isOpen && i === 0
                    ? "border-l-4 border-[#22c55e] shadow-lg"
                    : "border-gray-100"
                }`}
              >
                <button
                  className={`w-full flex items-center justify-between px-6 py-6 text-left text-lg font-semibold focus:outline-none transition-colors ${
                    isOpen && i === 0
                      ? "text-[#22c55e]"
                      : "text-gray-900 hover:text-[#22c55e]"
                  }`}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="ml-4 flex-shrink-0">
                    {isOpen ? (
                      i === 0 ? (
                        // Green line for the first open FAQ
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="4" y="11" width="16" height="2" rx="1" fill="#22c55e" />
                        </svg>
                      ) : (
                        // Minus icon
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="4" y="11" width="16" height="2" rx="1" fill="#22c55e" />
                        </svg>
                      )
                    ) : (
                      // Plus icon
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="11" y="4" width="2" height="16" rx="1" fill="#22292F" />
                        <rect x="4" y="11" width="16" height="2" rx="1" fill="#22292F" />
                      </svg>
                    )}
                  </span>
              </button>
                {isOpen && (
                  <div className={`px-6 pb-6 text-gray-700 text-base leading-relaxed ${i === 0 ? "border-l-2 border-[#22c55e] pl-4 mt-2" : "mt-2"}`}>
                  {faq.answer}
                </div>
              )}
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 