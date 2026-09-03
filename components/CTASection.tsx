import Link from "next/link";
import { DownloadCloud, Globe, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { PHARMORA_WEB_APP_URL } from "@/lib/utils";

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[#042F2E] via-[#052827] to-[#041D1A] text-white relative overflow-hidden">
      {/* Radiant Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#0D9488]/20 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-500/30 text-xs font-mono font-bold text-teal-300 mb-6">
          <ShieldCheck className="w-4 h-4 text-teal-400" />
          <span>PRODUCTION-READY PHARMACY PLATFORM</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-[58px] font-extrabold text-white tracking-tight leading-[1.08] max-w-3xl mx-auto mb-6">
          Modern pharmacy management <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] via-[#2DD4BF] to-[#99F6E4]">
            starts here.
          </span>
        </h2>

        {/* Description */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Download Pharmora for Windows or launch the web platform and start building a faster, safer, and more profitable pharmacy operation.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          {/* Windows Download */}
          <Link
            href="/downloads"
            className="w-full sm:w-auto group flex items-center justify-center gap-3.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#0D9488] to-[#14B8A6] hover:from-[#0F766E] hover:to-[#0D9488] text-white font-extrabold text-sm shadow-[0_16px_40px_rgba(13,148,136,0.40)] transition-all duration-200 active:scale-[0.98]"
          >
            <DownloadCloud className="w-5 h-5 text-white transition-transform group-hover:translate-y-0.5" />
            <div className="text-left">
              <span>Download for Windows</span>
              <span className="block text-[10.5px] font-normal opacity-80">
                Windows 10/11 · Free 14-Day Trial
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1 ml-1" />
          </Link>

          {/* Web App Access */}
          <a
            href={PHARMORA_WEB_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-5 rounded-2xl bg-teal-950/80 hover:bg-teal-900/90 text-white font-bold text-sm border border-teal-500/40 transition-all"
          >
            <Globe className="w-5 h-5 text-teal-400" />
            <span>Use Pharmora Online</span>
          </a>
        </div>

        {/* Micro Guarantee Row */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            Free data migration support
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            24/7 technical assistance
          </span>
        </div>

      </div>
    </section>
  );
}
