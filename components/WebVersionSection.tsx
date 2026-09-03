"use client";

import Link from "next/link";
import {
  Globe,
  ExternalLink,
  Smartphone,
  Laptop,
  Building2,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight
} from "lucide-react";
import { PHARMORA_WEB_APP_URL } from "@/lib/utils";

export default function WebVersionSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="web-version">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCFBF1] text-[11px] font-bold uppercase tracking-wider text-[#0F766E]">
              <Globe className="w-3.5 h-3.5" />
              Browser-Based Web Platform
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0B1739] tracking-tight leading-tight">
              Prefer working in your browser? <br />
              <span className="gradient-text-teal">No problem.</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#43516A] leading-relaxed">
              Pharmora Web allows pharmacy owners, branch directors, and remote accountants to access inventory records, review live cash drawer reconciliations, and authorize supplier invoices from any device worldwide.
            </p>

            {/* Bullet Points */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#CCFBF1] flex items-center justify-center text-[#0D9488] flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-sm text-[#0B1739] block">Works on macOS, Windows, iPad, iPhone & Android</strong>
                  <p className="text-xs text-[#667085]">Zero software installation required. Simply log in with your secure credentials.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#CCFBF1] flex items-center justify-center text-[#0D9488] flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-sm text-[#0B1739] block">Multi-Location Branch Consolidation</strong>
                  <p className="text-xs text-[#667085]">Compare sales velocity and stock balances across 2 or 50 pharmacy branches in real-time.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#CCFBF1] flex items-center justify-center text-[#0D9488] flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-sm text-[#0B1739] block">Instant Cloud Synchronization</strong>
                  <p className="text-xs text-[#667085]">All sales rung up at local desktop terminals reflect immediately on your mobile dashboard.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={PHARMORA_WEB_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#0D9488] hover:bg-[#0F766E] text-white font-bold text-sm shadow-md shadow-[#0D9488]/20 transition-all active:scale-[0.98]"
              >
                <span>Launch Pharmora Web App</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={PHARMORA_WEB_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-5 py-3.5 rounded-2xl text-xs font-bold text-[#43516A] hover:text-[#0B1739] hover:bg-slate-100 transition-colors"
              >
                <span>Learn about Web Security</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Web App Realistic Mockup */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-white border border-[#99F6E4] shadow-2xl overflow-hidden">
              
              {/* Browser Header Bar */}
              <div className="px-4 py-3 bg-[#F8FAFC] border-b border-[#E6EAEF] flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-teal-400 inline-block" />
                </div>
                
                {/* Mock URL Bar */}
                <div className="flex-1 max-w-sm mx-auto px-3 py-1 rounded-lg bg-white border border-[#E6EAEF] text-[11px] font-mono text-[#43516A] flex items-center justify-between">
                  <span className="truncate">https://app.pharmora.com/branches/group</span>
                  <Lock className="w-3 h-3 text-[#0D9488]" />
                </div>
              </div>

              {/* Inside Browser Viewport */}
              <div className="p-6 space-y-5 bg-slate-50/50">
                
                {/* Top Summary Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl bg-white border border-[#E6EAEF] shadow-sm">
                    <span className="text-[10.5px] font-bold uppercase text-[#667085] block">Today&apos;s Group Total</span>
                    <span className="text-base font-extrabold text-[#0B1739] font-mono">GH₵ 24,890.00</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-[#E6EAEF] shadow-sm">
                    <span className="text-[10.5px] font-bold uppercase text-[#667085] block">Active Counters</span>
                    <span className="text-base font-extrabold text-[#0D9488] font-mono">6 Terminals Live</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-[#E6EAEF] shadow-sm col-span-2 sm:col-span-1">
                    <span className="text-[10.5px] font-bold uppercase text-[#667085] block">Pending PO Approvals</span>
                    <span className="text-base font-extrabold text-amber-600 font-mono">2 Invoices</span>
                  </div>
                </div>

                {/* Live Branch Status Table */}
                <div className="rounded-2xl bg-white border border-[#E6EAEF] p-4 shadow-sm space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold text-[#0B1739]">
                    <span>Branch Performance (Real-Time)</span>
                    <span className="text-[10px] text-[#0D9488] font-mono">● LIVE REVENUE</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                      <div>
                        <p className="font-bold text-[#0B1739]">Branch 01 — Airport City Flagship</p>
                        <p className="text-[11px] text-[#667085]">142 Rx Dispensed · 3 Cashiers Active</p>
                      </div>
                      <span className="font-extrabold text-[#0B1739] font-mono">GH₵ 12,450.00</span>
                    </div>

                    <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                      <div>
                        <p className="font-bold text-[#0B1739]">Branch 02 — Osu Community Center</p>
                        <p className="text-[11px] text-[#667085]">88 Rx Dispensed · 2 Cashiers Active</p>
                      </div>
                      <span className="font-extrabold text-[#0B1739] font-mono">GH₵ 8,120.00</span>
                    </div>

                    <div className="flex justify-between items-center py-1.5">
                      <div>
                        <p className="font-bold text-[#0B1739]">Branch 03 — East Legon Express</p>
                        <p className="text-[11px] text-[#667085]">54 Rx Dispensed · 1 Cashier Active</p>
                      </div>
                      <span className="font-extrabold text-[#0B1739] font-mono">GH₵ 4,320.00</span>
                    </div>
                  </div>
                </div>

                {/* Cloud Sync Alert Tag */}
                <div className="p-3 rounded-xl bg-[#F0FDFA] border border-[#99F6E4] text-[#0F766E] text-[11px] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
                    <span>All branches synced with 256-bit TLS encryption.</span>
                  </div>
                  <span className="font-mono font-bold text-[10px]">0 ms Latency</span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
