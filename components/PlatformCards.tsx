"use client";

import Link from "next/link";
import {
  Monitor,
  Globe,
  DownloadCloud,
  ExternalLink,
  Zap,
  CheckCircle2,
  Printer,
  Barcode,
  WifiOff,
  ShieldCheck,
  Smartphone,
  CloudSync,
  Layers,
  ArrowRight
} from "lucide-react";

export default function PlatformCards() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCFBF1] text-[11px] font-bold uppercase tracking-wider text-[#0F766E] mb-3">
            <Layers className="w-3.5 h-3.5" />
            Flexible Access Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0B1739] tracking-tight leading-tight mb-4">
            Two ways to work. <br className="hidden sm:inline" />
            <span className="gradient-text-teal">One connected Pharmora.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#667085] max-w-2xl mx-auto">
            Choose the interface built for the task at hand. Cashiers enjoy blazing native speed at the counter, while owners monitor business health from any web browser worldwide.
          </p>
        </div>

        {/* The Two Big Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Pharmora Desktop (Dark Teal) */}
          <div className="group relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#042F2E] via-[#052827] to-[#041D1A] text-white border border-teal-500/20 shadow-2xl hover:shadow-[0_25px_60px_rgba(4,47,46,0.4)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden">
            
            {/* Ambient Interior Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-400">
                  <Monitor className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300 text-xs font-mono font-bold tracking-wider">
                  WINDOWS 10 & 11 · 64-BIT
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Pharmora Desktop
              </h3>
              <p className="text-teal-200/90 text-sm font-medium mb-6">
                Built for heavy, daily counter operations and high-volume dispensaries.
              </p>

              {/* Feature Checklist */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <Zap className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Lightning POS Speed:</strong> Zero browser latency with instant hotkey shortcuts.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <Printer className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Hardware Plug & Play:</strong> ESC/POS thermal printers, receipt cash drawers & USB barcode guns.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <WifiOff className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Offline Resilience:</strong> Keep scanning & selling even if pharmacy internet drops out.</span>
                </div>
              </div>

              {/* UI Mockup Snippet */}
              <div className="rounded-2xl bg-[#031816]/90 p-4 border border-teal-500/20 shadow-inner mb-8 space-y-2 font-mono text-xs">
                <div className="flex justify-between items-center text-teal-400 text-[11px] pb-2 border-b border-teal-900/60">
                  <span>COUNTER TERMINAL #01 [F2 DISPENSE]</span>
                  <span className="bg-teal-500/20 px-2 py-0.5 rounded text-[10px]">CONNECTED</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>RX-2026-904 (Amoxicillin 500mg)</span>
                  <span className="text-teal-400">GH₵ 45.50</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>OTC-1102 (Paracetamol BP)</span>
                  <span className="text-teal-400">GH₵ 32.00</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="relative z-10 flex flex-wrap items-center gap-3 pt-4 border-t border-teal-900/50">
              <Link
                href="/downloads"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0D9488] hover:bg-[#0F766E] text-white font-bold text-sm shadow-md transition-all"
              >
                <DownloadCloud className="w-4 h-4" />
                <span>Download .exe</span>
              </Link>
              <Link
                href="/desktop"
                className="flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs font-semibold text-teal-200 hover:text-white hover:bg-teal-950/60 transition-colors"
              >
                <span>System Requirements</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

          {/* Card 2: Pharmora Web (Light Teal) */}
          <div className="group relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#F0FDFA] via-[#E6FAF6] to-[#CCFBF1]/70 text-[#0B1739] border border-[#99F6E4] shadow-xl hover:shadow-[0_25px_60px_rgba(13,148,136,0.15)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden">
            
            {/* Ambient Soft Aura */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-teal-300/25 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#99F6E4] flex items-center justify-center text-[#0D9488] shadow-sm">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-white/90 border border-[#99F6E4] text-[#0F766E] text-xs font-mono font-bold tracking-wider shadow-sm">
                  ZERO INSTALLATION · BROWSER
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1739] mb-2">
                Pharmora Web
              </h3>
              <p className="text-[#43516A] text-sm font-medium mb-6">
                Your pharmacy, wherever you are. Perfect for owners, auditors and remote managers.
              </p>

              {/* Feature Checklist */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 text-sm text-[#43516A]">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488] mt-0.5 flex-shrink-0" />
                  <span><strong>Zero Setup Needed:</strong> Open Chrome, Safari or Edge and log straight into your workspace.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#43516A]">
                  <Smartphone className="w-4 h-4 text-[#0D9488] mt-0.5 flex-shrink-0" />
                  <span><strong>Executive Mobile Access:</strong> Review branch revenue, audit trails and pending approvals on the go.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#43516A]">
                  <ShieldCheck className="w-4 h-4 text-[#0D9488] mt-0.5 flex-shrink-0" />
                  <span><strong>Always Up-to-Date:</strong> Automatic cloud updates with zero manual maintenance or patching.</span>
                </div>
              </div>

              {/* UI Mockup Snippet */}
              <div className="rounded-2xl bg-white/95 p-4 border border-[#99F6E4] shadow-sm mb-8 space-y-2 text-xs">
                <div className="flex justify-between items-center text-[#0D9488] font-mono text-[11px] pb-2 border-b border-slate-100">
                  <span>https://app.pharmora.com/branches/main</span>
                  <span className="bg-[#CCFBF1] text-[#0F766E] px-2 py-0.5 rounded text-[10px] font-bold">SECURE SSL</span>
                </div>
                <div className="flex justify-between text-[#43516A]">
                  <span>Total Daily Group Revenue</span>
                  <span className="font-bold text-[#0B1739] font-mono">GH₵ 18,450.00</span>
                </div>
                <div className="flex justify-between text-[#43516A]">
                  <span>Active Online Orders In Route</span>
                  <span className="font-bold text-[#0D9488] font-mono">8 Deliveries</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="relative z-10 flex flex-wrap items-center gap-3 pt-4 border-t border-[#99F6E4]">
              <Link
                href="/web"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0D9488] hover:bg-[#0F766E] text-white font-bold text-sm shadow-md shadow-[#0D9488]/20 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Web App</span>
              </Link>
              <Link
                href="/web"
                className="flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs font-semibold text-[#0F766E] hover:text-[#0B1739] transition-colors"
              >
                <span>Learn about Web Features</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
