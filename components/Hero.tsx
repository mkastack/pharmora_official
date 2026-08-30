"use client";

import { useState } from "react";
import Link from "next/link";
import {
  DownloadCloud,
  Globe,
  Play,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Receipt,
  TrendingUp,
  Package,
  Sparkles,
  ArrowRight,
  Clock,
  UserCheck,
  Search,
  Plus,
  RefreshCw
} from "lucide-react";
import DemoModal from "./DemoModal";

export default function Hero() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"pos" | "inventory" | "rx">("pos");

  return (
    <section className="relative pt-32 pb-20 lg:pt-38 lg:pb-32 overflow-hidden bg-white hero-atmosphere-glow">
      {/* Background Decorative Patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      
      {/* Soft Ambient Radiance */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full bg-[#0D9488]/15 blur-[100px] pointer-events-none" />
      <div className="absolute top-40 left-10 w-[450px] h-[450px] rounded-full bg-[#14B8A6]/10 blur-[90px] pointer-events-none" />

      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Group */}
        <div className="text-center max-w-4xl mx-auto mb-14 lg:mb-18">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CCFBF1] border border-[#99F6E4] shadow-sm mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D9488] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0D9488]" />
            </span>
            <span className="text-[12px] font-bold tracking-wider uppercase text-[#0F766E]">
              Pharmacy Operations, Reimagined
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[68px] font-extrabold text-[#0B1739] tracking-tight leading-[1.04] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Run your pharmacy{" "}
            <span className="gradient-text-teal">smarter</span> with Pharmora.
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#43516A] max-w-2xl mx-auto leading-relaxed mb-9 animate-in fade-in slide-in-from-bottom-5 duration-700">
            Manage inventory, prescriptions, orders, customers, payments and pharmacy operations through one beautifully connected platform — available on desktop or directly in your browser.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {/* Windows Desktop Download Button */}
            <Link
              href="/downloads"
              className="w-full sm:w-auto group relative flex items-center justify-center sm:justify-start gap-3.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#0D9488] to-[#0F766E] hover:from-[#0F766E] hover:to-[#0D9488] text-white shadow-[0_12px_30px_rgba(13,148,136,0.28)] hover:shadow-[0_16px_40px_rgba(13,148,136,0.38)] transition-all duration-200 active:scale-[0.98] border border-teal-400/30"
            >
              {/* Windows Icon */}
              <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" viewBox="0 0 88 88" fill="currentColor">
                  <path d="M0 12.402l35.687-4.86.016 34.423-35.67.203zm35.67 33.529l.028 34.453L.028 75.48.001 45.728zm4.326-39.027L87.914 0v41.525l-47.918.3zm47.919 38.647L88 88l-48.004-6.787-.03-34.629z"/>
                </svg>
              </div>

              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-[15px] font-bold">Download for Windows</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
                <span className="text-[11.5px] text-teal-100/90 font-medium block">
                  Windows 10/11 · 64-bit .exe
                </span>
              </div>
            </Link>

            {/* Web App Access Button */}
            <Link
              href="/web"
              className="w-full sm:w-auto group flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-[15px] font-bold text-[#0F766E] bg-[#F0FDFA] hover:bg-[#CCFBF1] border border-[#99F6E4] hover:border-[#5EEAD4] transition-all duration-200 shadow-sm"
            >
              <Globe className="w-5 h-5 text-[#0D9488] transition-transform group-hover:rotate-12" />
              <span>Use Pharmora Online</span>
            </Link>

            {/* Product Tour Modal Trigger */}
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-4 rounded-2xl text-[14.5px] font-semibold text-[#43516A] hover:text-[#0B1739] hover:bg-slate-100/80 transition-all duration-150"
            >
              <div className="w-7 h-7 rounded-full bg-slate-200/80 flex items-center justify-center text-[#0B1739]">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              <span>Watch Product Tour</span>
            </button>
          </div>

          {/* Micro Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-[#667085]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
              <span>Quick 2-minute setup</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
              <span>Secure pharmacy workspace</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
              <span>Unified Desktop + Web sync</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
              <span>Free 14-day full access</span>
            </div>
          </div>
        </div>

        {/* Hero Realistic Product Showcase Composition */}
        <div className="relative max-w-6xl mx-auto">
          {/* Outer Layer Card Frame */}
          <div className="relative rounded-3xl p-2 sm:p-4 bg-gradient-to-b from-[#CDEFE3]/60 via-slate-100/50 to-white/90 shadow-[0_30px_90px_rgba(15,23,42,0.15)] border border-[#CDEFE3]/80 backdrop-blur-sm">
            {/* Main Application Window Container */}
            <div className="rounded-2xl bg-[#0B1739] text-white overflow-hidden shadow-2xl border border-slate-700/60">
              
              {/* Window Header / Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#07132B] border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#14B8A6]/80 inline-block" />
                  </div>
                  <div className="h-4 w-px bg-slate-700 mx-2" />
                  <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
                    Pharmora Desktop — St. Luke Community Pharmacy (Main Branch)
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="hidden sm:inline bg-slate-800 px-2 py-0.5 rounded text-[11px] text-teal-400 font-mono">
                    TERMINAL #01 (ONLINE)
                  </span>
                  <span>Dr. Michael Mensah (Pharmacist Lead)</span>
                </div>
              </div>

              {/* Console Workspace Content */}
              <div className="bg-[#0D1C3E] p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5">
                
                {/* Left Mini Sidebar */}
                <div className="hidden lg:flex lg:col-span-2 flex-col space-y-1.5 pr-2 border-r border-slate-800/80">
                  <button
                    onClick={() => setActiveTab("pos")}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      activeTab === "pos"
                        ? "bg-[#0D9488] text-white shadow-md shadow-[#0D9488]/30"
                        : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                    }`}
                  >
                    <Receipt className="w-3.5 h-3.5" />
                    <span>Live POS</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("inventory")}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      activeTab === "inventory"
                        ? "bg-[#0D9488] text-white shadow-md shadow-[#0D9488]/30"
                        : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                    }`}
                  >
                    <Package className="w-3.5 h-3.5" />
                    <span>Inventory</span>
                    <span className="ml-auto bg-amber-500/20 text-amber-300 text-[10px] px-1.5 py-0.2 rounded font-mono">
                      2 Low
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveTab("rx")}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      activeTab === "rx"
                        ? "bg-[#0D9488] text-white shadow-md shadow-[#0D9488]/30"
                        : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Rx Verification</span>
                    <span className="ml-auto bg-teal-500/20 text-teal-300 text-[10px] px-1.5 py-0.2 rounded font-mono">
                      3
                    </span>
                  </button>

                  <div className="pt-4 mt-4 border-t border-slate-800">
                    <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-2">
                      Shift Overview
                    </p>
                    <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1 text-[11px]">
                      <div className="flex justify-between text-slate-400">
                        <span>Register #01:</span>
                        <span className="text-teal-400 font-mono font-bold">GH₵ 3,120</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Register #02:</span>
                        <span className="text-teal-400 font-mono font-bold">GH₵ 1,730</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Console Center Canvas */}
                <div className="lg:col-span-7 space-y-4">
                  {/* Top Live Stats Metric Strip */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-xl bg-[#091530] border border-slate-800/80">
                      <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                        <span>Today&apos;s Revenue</span>
                        <TrendingUp className="w-3.5 h-3.5 text-teal-400" />
                      </div>
                      <div className="text-lg sm:text-xl font-bold font-mono text-white">
                        GH₵ 4,850.00
                      </div>
                      <span className="text-[10px] text-teal-400 font-medium">
                        ↑ +18.4% vs yesterday
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#091530] border border-slate-800/80">
                      <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                        <span>Orders Processed</span>
                        <Receipt className="w-3.5 h-3.5 text-teal-400" />
                      </div>
                      <div className="text-lg sm:text-xl font-bold font-mono text-white">
                        56 Orders
                      </div>
                      <span className="text-[10px] text-slate-400 font-medium">
                        Avg time: 1m 45s
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#091530] border border-slate-800/80">
                      <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                        <span>Pending Rx</span>
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                      </div>
                      <div className="text-lg sm:text-xl font-bold font-mono text-white">
                        4 In Queue
                      </div>
                      <span className="text-[10px] text-amber-300 font-medium">
                        2 Urgent refills
                      </span>
                    </div>
                  </div>

                  {/* Active Counter POS Search & Scanner Bar */}
                  <div className="p-3 rounded-xl bg-[#091530] border border-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800 text-teal-400">
                      <Search className="w-4 h-4" />
                    </div>
                    <div className="flex-1 text-xs">
                      <span className="text-slate-400 block text-[10px]">
                        Scan Barcode or Search Drug Database (F2)
                      </span>
                      <span className="text-white font-mono font-medium">
                        Amoxicillin 500mg Caps (BN-2024-912) | Paracetamol BP...
                      </span>
                    </div>
                    <span className="text-[10px] px-2 py-1 rounded bg-slate-800 text-slate-300 font-mono">
                      BARCODE SCANNER READY
                    </span>
                  </div>

                  {/* Counter Cart / Live Dispensing Grid */}
                  <div className="rounded-xl bg-[#091530] border border-slate-800 overflow-hidden">
                    <div className="px-3.5 py-2.5 bg-[#061026] text-xs font-semibold text-slate-300 flex items-center justify-between border-b border-slate-800">
                      <span>Active Customer Cart — Kwame Mensah (#PHM-4932)</span>
                      <span className="text-teal-400 font-mono">3 items</span>
                    </div>
                    <div className="divide-y divide-slate-800/60 text-xs">
                      <div className="p-3 flex items-center justify-between hover:bg-slate-800/40">
                        <div>
                          <div className="font-semibold text-white">Amoxicillin Trihydrate 500mg</div>
                          <div className="text-[11px] text-slate-400">Batch BN-2024-912 · Expiry Jan 2026</div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-mono font-bold">2 x GH₵ 45.50</div>
                          <div className="text-[10px] text-teal-400">GH₵ 91.00</div>
                        </div>
                      </div>

                      <div className="p-3 flex items-center justify-between hover:bg-slate-800/40">
                        <div>
                          <div className="font-semibold text-white">Paracetamol BP 500mg (100 Tabs)</div>
                          <div className="text-[11px] text-slate-400">Batch BN-2024-884 · Expiry Nov 2027</div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-mono font-bold">1 x GH₵ 32.00</div>
                          <div className="text-[10px] text-teal-400">GH₵ 32.00</div>
                        </div>
                      </div>

                      <div className="p-3 flex items-center justify-between hover:bg-slate-800/40">
                        <div>
                          <div className="font-semibold text-white">Vitamin C Effervescent 1000mg</div>
                          <div className="text-[11px] text-slate-400">Batch BN-2024-402 · Orange Flavor</div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-mono font-bold">1 x GH₵ 58.00</div>
                          <div className="text-[10px] text-teal-400">GH₵ 58.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Checkout & Clinical Action Panel */}
                <div className="lg:col-span-3 space-y-3 flex flex-col justify-between">
                  <div className="p-4 rounded-xl bg-[#091530] border border-slate-800 space-y-3">
                    <p className="text-xs font-bold text-slate-300">Payment Summary</p>
                    <div className="space-y-1.5 text-xs text-slate-400">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span className="text-white font-mono">GH₵ 181.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax / NHIL (2.5%):</span>
                        <span className="text-white font-mono">GH₵ 4.00</span>
                      </div>
                      <div className="flex justify-between font-bold text-sm text-white pt-2 border-t border-slate-800">
                        <span>Total Due:</span>
                        <span className="text-teal-400 font-mono">GH₵ 185.00</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <button className="py-2 px-2.5 rounded-lg bg-[#0D9488] hover:bg-[#0F766E] text-white font-bold text-xs shadow">
                        Cash (F9)
                      </button>
                      <button className="py-2 px-2.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow">
                        MoMo / POS (F10)
                      </button>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#042F2E] border border-teal-500/30 text-xs">
                    <div className="flex items-center gap-1.5 text-teal-400 font-semibold mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Rx Verified by Dr. Mensah</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      Dosage checks verified: No adverse drug interactions flagged for this profile.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Floating UI Card 1: LOW STOCK ALERT (Top Left) */}
          <div className="absolute -top-6 -left-4 sm:-left-8 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-amber-200/80 shadow-[0_16px_40px_rgba(245,158,11,0.18)] animate-subtle-float z-20">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 flex-shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
                  Low Stock Warning
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              </div>
              <p className="text-xs font-bold text-[#0B1739]">Amoxicillin 500mg</p>
              <p className="text-[11px] text-[#667085] font-mono font-medium">
                12 units remaining · Reorder trigger active
              </p>
            </div>
          </div>

          {/* Floating UI Card 2: TODAY'S SALES (Top Right) */}
          <div className="absolute -top-6 -right-4 sm:-right-8 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#99F6E4] shadow-[0_16px_40px_rgba(13,148,136,0.18)] z-20"
               style={{ animation: "subtleFloat 6.5s ease-in-out infinite 1s" }}>
            <div className="w-10 h-10 rounded-xl bg-[#CCFBF1] border border-[#99F6E4] flex items-center justify-center text-[#0F766E] flex-shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D9488]">
                  Today&apos;s Shift Total
                </span>
              </div>
              <p className="text-sm font-extrabold text-[#0B1739] font-mono">GH₵ 4,850.00</p>
              <p className="text-[11px] text-[#0D9488] font-medium">56 Orders · Zero Discrepancy</p>
            </div>
          </div>

          {/* Floating UI Card 3: NEW ORDER (Bottom Left) */}
          <div className="absolute -bottom-6 -left-4 sm:-left-6 hidden md:flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#99F6E4] shadow-[0_16px_40px_rgba(15,23,42,0.10)] z-20"
               style={{ animation: "subtleFloat 7s ease-in-out infinite 2s" }}>
            <div className="w-9 h-9 rounded-xl bg-[#F0FDFA] border border-[#99F6E4] flex items-center justify-center text-[#0D9488] flex-shrink-0">
              <Receipt className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#0F766E]">
                New Order #PHM-4932
              </span>
              <p className="text-xs font-bold text-[#0B1739]">GH₵ 185.00 · Paid via Cash</p>
            </div>
          </div>

          {/* Floating UI Card 4: DISPATCH READY (Bottom Right) */}
          <div className="absolute -bottom-6 -right-4 sm:-right-6 hidden md:flex items-center gap-3 p-3 rounded-2xl bg-white border border-teal-200 shadow-[0_16px_40px_rgba(13,148,136,0.12)] z-20"
               style={{ animation: "subtleFloat 5.8s ease-in-out infinite 0.5s" }}>
            <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 flex-shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10.5px] font-bold uppercase tracking-wider text-teal-700">
                Delivery Dispatched
              </span>
              <p className="text-xs font-bold text-[#0B1739]">Order #PHM-4929 · Rider Assigned</p>
            </div>
          </div>

        </div>
      </div>

      {/* Product Tour / Demo Modal */}
      {isDemoModalOpen && (
        <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      )}
    </section>
  );
}


