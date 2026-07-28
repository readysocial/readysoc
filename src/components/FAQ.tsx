"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What are Sparks?",
    answer:
      "Sparks are Ready Social’s emotional currency. You use them to book Listener Sessions, invest in your wellbeing, or gift support to someone who needs it.",
  },
  {
    question: "Is payment safe?",
    answer:
      "Yes. Purchases are processed through trusted payment providers with industry-standard security, so your card details stay protected.",
  },
  {
    question: "Do Sparks expire?",
    answer:
      "No. Once Sparks are in your balance, they stay available until you use or gift them.",
  },
  {
    question: "Can I send Sparks to anyone?",
    answer:
      "You can gift Sparks to another Ready Social user. Enter their username, choose how many Sparks to send, and they’ll receive the gift in their account.",
  },
  {
    question: "How do I buy/gift them?",
    answer:
      "Buy Sparks from a bundle in the app or on the web, then use Top up for yourself or Gift spark to send them to someone else.",
  },
];

function PlusMinusIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="h-3.5 w-3.5 text-[#171717]"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
    >
      <path
        d="M2.5 7h9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {!open && (
        <path
          d="M7 2.5v9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

/**
 * Desktop composition from Paper MacBook Pro 14" - 20 / FAQ Section.
 * Left title + right accordion list with hairline dividers.
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative w-full overflow-x-clip bg-white px-6 py-16 lg:px-20 lg:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto flex w-full max-w-[1352px] flex-col gap-10 lg:flex-row lg:items-start lg:gap-20">
        <div className="w-full shrink-0 lg:w-[min(600px,40%)]">
          <h2
            id="faq-heading"
            className="font-[family-name:var(--font-landing-display)] text-[clamp(36px,4vw,48px)] font-normal leading-[1.2] tracking-[-0.02em] text-[#171717]"
          >
            FAQ
          </h2>
        </div>

        <div className="min-w-0 w-full flex-1 lg:max-w-[672px]">
          <div className="flex flex-col border-b border-[#ECECED]">
            {faqs.map((faq, i) => {
              const open = openIndex === i;
              return (
                <div key={`${faq.question}-${i}`} className="border-t border-[#ECECED]">
                  <button
                    type="button"
                    className="flex w-full items-start gap-4 py-8 text-left"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                  >
                    <span className="min-w-0 flex-1 font-[family-name:var(--font-landing-body)] text-lg font-medium leading-6 tracking-[-0.26px] text-[#171717]">
                      {faq.question}
                    </span>
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center">
                      <PlusMinusIcon open={open} />
                    </span>
                  </button>
                  {open && (
                    <p className="pb-8 pr-10 font-[family-name:var(--font-landing-body)] text-base font-normal leading-[1.45] tracking-[-0.02em] text-[#5C5C5C]">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
