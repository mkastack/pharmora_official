"use client";

import { Zap, ShieldCheck, RefreshCw, Barcode, DollarSign, Users, Award, HeartPulse } from "lucide-react";

export default function BenefitGrid() {
  const benefits = [
    {
      icon: Zap,
      title: "Eliminate Long Counter Queues",
      desc: "Instant hotkeys, auto-filling dosage directions, and rapid receipt printing clear customer queues 3x faster.",
    },
    {
      icon: RefreshCw,
      title: "Stop Losing Money to Expired Drugs",
      desc: "FEFO dispensing rules prioritize earliest-expiring inventory so batches are sold before write-offs happen.",
    },
    {
      icon: DollarSign,
      title: "Zero Cashier Discrepancies",
      desc: "Blind cash drops, locked drawer floats, and real-time shift audit stamps keep cash balances 100% accountable.",
    },
    {
      icon: ShieldCheck,
      title: "Prevent Dangerous Drug Errors",
      desc: "Automated allergy and contraindication alerts safeguard patient lives during prescription entry.",
    },
    {
      icon: HeartPulse,
      title: "Retain Chronic Care Patients",
      desc: "Automated SMS refills and medication reminders keep diabetic and hypertensive patients coming back.",
    },
    {
      icon: Award,
      title: "Seamless Regulatory Compliance",
      desc: "Built-in tax itemization (VAT, NHIL, GETFund) and auditable controlled-substance logs keep inspectors happy.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCFBF1] text-[11px] font-bold uppercase tracking-wider text-[#0F766E] mb-3">
            Operational Value
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0B1739] tracking-tight leading-tight mb-4">
            Designed to solve real pharmacy <br className="hidden sm:inline" />
            <span className="gradient-text-teal">bottlenecks and revenue leaks.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#667085]">
            Every feature in Pharmora directly addresses the day-to-day challenges of running a busy community dispensary.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="p-8 rounded-3xl bg-[#F8FAFC] border border-[#E6EAEF] hover:border-[#99F6E4] hover:bg-white hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#CCFBF1] text-[#0D9488] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0B1739] mb-2.5">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#43516A] leading-relaxed">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
