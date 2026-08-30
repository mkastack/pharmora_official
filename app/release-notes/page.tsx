import Link from "next/link";
import { Sparkles, DownloadCloud, CheckCircle2, ArrowRight } from "lucide-react";
import { RELEASE_HISTORY } from "@/lib/data";

export default function ReleaseNotesPage() {
  return (
    <div className="pt-28 pb-24 bg-white">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CCFBF1] text-xs font-mono font-bold text-[#0F766E] uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-[#0D9488]" />
            Engineering Changelog
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1739] tracking-tight leading-tight mb-4">
            Pharmora Release Notes
          </h1>
          <p className="text-base sm:text-lg text-[#667085]">
            Track every new capability, clinical safeguard, POS optimization, and platform update.
          </p>
        </div>

        {/* Release Items */}
        <div className="space-y-12 mb-20">
          {RELEASE_HISTORY.map((rel) => (
            <div
              key={rel.version}
              className="p-8 rounded-3xl bg-[#F8FAFC] border border-[#E6EAEF] shadow-sm space-y-6"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-extrabold text-[#0B1739] font-mono">
                      {rel.version}
                    </h2>
                    <span className="px-3 py-0.5 rounded-full bg-[#CCFBF1] text-[#0F766E] font-bold text-xs">
                      {rel.status}
                    </span>
                  </div>
                  <p className="text-xs text-[#667085] mt-1">Released in {rel.releaseDate}</p>
                </div>

                <Link
                  href="/downloads"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0D9488] hover:bg-[#0F766E] text-white font-bold text-xs transition-colors shadow-sm"
                >
                  <DownloadCloud className="w-4 h-4" />
                  <span>Download Build</span>
                </Link>
              </div>

              <div className="space-y-3">
                <p className="font-bold text-xs uppercase tracking-wider text-[#0B1739]">
                  Key Improvements & Fixes:
                </p>
                <div className="space-y-2.5">
                  {rel.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#43516A]">
                      <CheckCircle2 className="w-4 h-4 text-[#0D9488] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
