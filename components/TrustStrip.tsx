import { TRUST_TAGS } from "@/lib/data";
import { Building2, ShieldCheck } from "lucide-react";

export default function TrustStrip() {
  return (
    <section className="py-12 bg-[#F8FAFC] border-y border-[#E6EAEF]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-2.5 text-[#0B1739] flex-shrink-0">
            <div className="w-8 h-8 rounded-xl bg-[#CCFBF1] flex items-center justify-center text-[#0D9488]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
                Trusted Infrastructure
              </p>
              <p className="text-sm font-extrabold text-[#0B1739]">
                Built for modern pharmacies:
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5">
            {TRUST_TAGS.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#43516A] bg-white border border-[#E6EAEF] shadow-[0_2px_6px_rgba(15,23,42,0.03)] hover:border-[#99F6E4] hover:text-[#0D9488] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
