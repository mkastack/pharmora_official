"use client";

import { DownloadCloud, Globe, Laptop, Database, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function HowItWorks() {
  const workflowSteps = [
    {
      num: "01",
      title: "Download or Open Web",
      description: "Install the high-speed Pharmora Windows .exe on your counter PC or log straight into the browser version on any laptop.",
      badge: "2-Minute Setup"
    },
    {
      num: "02",
      title: "Sync Drugs & Inventory",
      description: "Upload your existing drug spreadsheet or start fresh with our pre-loaded catalog of common medications and dosages.",
      badge: "Auto-Migration"
    },
    {
      num: "03",
      title: "Dispense, Scan & Reconcile",
      description: "Ring up sales with hotkeys, scan barcodes, validate prescriptions, and watch real-time revenue roll in securely.",
      badge: "Live Telemetry"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCFBF1] text-[11px] font-bold uppercase tracking-wider text-[#0F766E] mb-3">
            Effortless Onboarding
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0B1739] tracking-tight leading-tight mb-4">
            Up and running <br className="hidden sm:inline" />
            <span className="gradient-text-teal">in minutes.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#667085]">
            No complicated database server configuration, no expensive on-site technicians. Pharmora is ready the moment you open it.
          </p>
        </div>

        {/* 3 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {workflowSteps.map((step, idx) => (
            <div
              key={step.num}
              className="relative p-8 rounded-3xl bg-[#F8FAFC] border border-[#E6EAEF] hover:border-[#99F6E4] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-extrabold font-mono text-[#0D9488]/40">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-[#CCFBF1] text-[#0F766E]">
                    {step.badge}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#0B1739] mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#43516A] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-[#0D9488]">
                <span>Step {step.num} Complete</span>
                <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
