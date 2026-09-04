"use client";

import { useState } from "react";
import { FAQS } from "@/lib/data";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCFBF1] text-[11px] font-bold uppercase tracking-wider text-[#0F766E] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Answers to Common Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0B1739] tracking-tight leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#667085]">
            Everything you need to know about Pharmora installation, hardware compatibility, offline cashiering, and subscription licensing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-16">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#99F6E4] bg-[#F0FDFA]/50 shadow-sm"
                    : "border-[#E6EAEF] bg-white hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-extrabold text-sm sm:text-base text-[#0B1739]">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 bg-[#0D9488] text-white"
                        : "bg-slate-100 text-[#43516A]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#43516A] leading-relaxed border-t border-[#99F6E4]/40 animate-in fade-in duration-150">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout Box */}
        <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-[#E6EAEF] text-center max-w-xl mx-auto space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-[#CCFBF1] flex items-center justify-center text-[#0D9488] mx-auto">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#0B1739]">Have a specific pharmacy hardware or workflow question?</h3>
          <p className="text-xs text-[#667085]">
            Our pharmacy implementation engineers are ready to answer your technical questions.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/233257966923?text=Hello%2C%20I%20would%20like%20to%20speak%20with%20a%20Pharmora%20specialist."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0D9488] hover:bg-[#0F766E] text-white font-bold text-xs shadow-sm transition-all"
            >
              <span>Speak with a Specialist</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
