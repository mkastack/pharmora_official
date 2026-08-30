"use client";

import { TESTIMONIALS } from "@/lib/data";
import { Star, Quote, Building2, MapPin } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCFBF1] text-[11px] font-bold uppercase tracking-wider text-[#0F766E] mb-3">
            Real Community Impact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0B1739] tracking-tight leading-tight mb-4">
            Trusted every single day <br className="hidden sm:inline" />
            <span className="gradient-text-teal">on busy pharmacy counters.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#667085]">
            Hear from pharmacy proprietors, superintendents, and dispensary managers operating with Pharmora.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="p-8 rounded-3xl bg-white border border-[#E6EAEF] shadow-sm hover:shadow-md hover:border-[#99F6E4] transition-all flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-[15px] text-[#0B1739] leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-[#E6EAEF]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-extrabold text-sm text-[#0B1739]">{t.author}</span>
                  <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-[#CCFBF1] text-[#0F766E]">
                    {t.metrics}
                  </span>
                </div>
                <p className="text-xs text-[#667085]">{t.role}</p>
                <div className="flex items-center gap-1.5 text-[11px] text-[#98A2B3] mt-1">
                  <Building2 className="w-3 h-3" />
                  <span>{t.pharmacy}</span>
                  <span>·</span>
                  <MapPin className="w-3 h-3" />
                  <span>{t.city}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
