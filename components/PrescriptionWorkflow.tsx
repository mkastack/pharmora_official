"use client";

import { useState } from "react";
import {
  FileUp,
  ScanLine,
  Stethoscope,
  PackageCheck,
  CreditCard,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { PRESCRIPTION_STEPS } from "@/lib/data";

const STEP_ICONS: Record<string, React.ElementType> = {
  FileUp,
  ScanLine,
  Stethoscope,
  PackageCheck,
  CreditCard,
  CheckCircle2,
};

export default function PrescriptionWorkflow() {
  const [activeStepIndex, setActiveStepIndex] = useState(2); // Step 3 active by default (Pharmacist Review)

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-[#F8FAFC] to-white border-t border-[#E6EAEF]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCFBF1] text-[11px] font-bold uppercase tracking-wider text-[#0F766E] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Clinical Safety & Speed
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0B1739] tracking-tight leading-tight mb-4">
            Prescription workflows <br className="hidden sm:inline" />
            <span className="gradient-text-teal">without the paperwork chaos.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#667085]">
            From patient intake to digital signature, insurance validation, and patient counseling — every step is tracked, audited, and compliant.
          </p>
        </div>

        {/* Interactive Step Navigator Pipeline */}
        <div className="relative mb-12">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-6 right-6 h-1 bg-[#E6EAEF] -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
            {PRESCRIPTION_STEPS.map((step, idx) => {
              const Icon = STEP_ICONS[step.icon] || FileUp;
              const isActive = activeStepIndex === idx;
              const isPast = activeStepIndex > idx;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`group text-left p-4 rounded-2xl border transition-all duration-200 ${
                    isActive
                      ? "bg-white border-[#0D9488] shadow-[0_12px_30px_rgba(13,148,136,0.18)] scale-[1.03] ring-2 ring-[#0D9488]/20"
                      : isPast
                      ? "bg-[#F2FBF8] border-[#CDEFE3] hover:bg-white"
                      : "bg-white border-[#E6EAEF] hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                        isActive
                          ? "bg-[#0D9488] text-white"
                          : isPast
                          ? "bg-[#0D9488] text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {step.step}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                        isActive
                          ? "bg-[#CCFBF1] text-[#0D9488]"
                          : isPast
                          ? "bg-teal-50 text-teal-600"
                          : "bg-slate-50 text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3
                    className={`font-bold text-xs sm:text-sm line-clamp-1 mb-1 ${
                      isActive ? "text-[#0D9488]" : "text-[#0B1739]"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-[#667085] line-clamp-2 leading-relaxed">
                    {step.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Clinical Sign-Off Audit Strip Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#042F2E] to-[#041D1A] text-white p-6 sm:p-10 shadow-2xl border border-teal-500/20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950 border border-teal-500/30 text-teal-300 text-xs font-mono font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
              CLINICAL GOVERNANCE & AUDIT TRAIL
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Every prescription signed with a digital cryptographic fingerprint.
            </h3>
            <p className="text-xs text-slate-300">
              Pharmacist ID, timestamp, lot expiry check, and patient allergen status are bound to the transaction record to ensure zero liability in audits.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <div className="p-4 rounded-2xl bg-teal-950/80 border border-teal-500/30 text-xs font-mono space-y-1 w-full sm:w-auto">
              <div className="text-teal-400 font-bold">SYSTEM AUDIT STAMP:</div>
              <div className="text-slate-300 text-[11px]">RPH: Dr. S. Mensah (REG# 4920-GH)</div>
              <div className="text-slate-300 text-[11px]">DISPENSE TIME: 14:32:09 UTC</div>
              <div className="text-teal-300 text-[11px]">FEFO EXPIRY VERIFIED: LOT# EXP-2027</div>
            </div>

            <Link
              href="/features"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0D9488] hover:bg-[#0F766E] text-white font-bold text-xs transition-all shadow-md"
            >
              <span>Explore Clinical Safety Rules</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

