"use client";

import { useState } from "react";
import Link from "next/link";
import { PRICING_PLANS } from "@/lib/data";
import { Check, Sparkles, HelpCircle, ArrowRight, ShieldCheck } from "lucide-react";
import PlanCheckoutModal from "./PlanCheckoutModal";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string>("professional");

  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCFBF1] text-[11px] font-bold uppercase tracking-wider text-[#0F766E] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Transparent Licensing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0B1739] tracking-tight leading-tight mb-4">
            Simple, predictable pricing <br className="hidden sm:inline" />
            <span className="gradient-text-teal">that grows with your pharmacy.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#667085]">
            No hidden setup fees, no forced long-term lock-ins. Every plan includes both Windows Desktop .exe and Cloud Web platforms.
          </p>

          {/* Billing Switch Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-[#F8FAFC] border border-[#E6EAEF]">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                billingCycle === "monthly"
                  ? "bg-white text-[#0B1739] shadow-sm"
                  : "text-[#667085] hover:text-[#0B1739]"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                billingCycle === "annual"
                  ? "bg-[#0D9488] text-white shadow-md shadow-teal-600/20"
                  : "text-[#667085] hover:text-[#0B1739]"
              }`}
            >
              <span>Annual Billing</span>
              <span className="ml-1.5 text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-teal-950 text-teal-200 font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;
            const price =
              billingCycle === "annual"
                ? plan.priceAnnual
                : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? "bg-[#042F2E] text-white border-2 border-teal-400 shadow-2xl scale-[1.03] z-10"
                    : "bg-[#F8FAFC] text-[#0B1739] border border-[#E6EAEF] hover:border-[#99F6E4] hover:shadow-lg"
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#14B8A6] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  {/* Plan Name & Desc */}
                  <div className="mb-6">
                    <h3 className={`text-2xl font-extrabold mb-1 ${isPopular ? "text-white" : "text-[#0B1739]"}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-xs ${isPopular ? "text-slate-300" : "text-[#667085]"}`}>
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-slate-200/20">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold font-mono">
                        {price}
                      </span>
                      {price !== "Custom" && (
                        <span className={`text-xs ${isPopular ? "text-slate-300" : "text-[#667085]"}`}>
                          / month {billingCycle === "annual" ? "(billed annually)" : ""}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <p className={`text-xs font-bold uppercase tracking-wider ${isPopular ? "text-teal-300" : "text-[#0B1739]"}`}>
                      Included Features:
                    </p>
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isPopular ? "text-teal-400" : "text-[#0D9488]"}`} />
                        <span className={isPopular ? "text-slate-200" : "text-[#43516A]"}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan CTA Button */}
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPlanId(plan.id);
                      setIsCheckoutModalOpen(true);
                    }}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-bold text-sm transition-all duration-150 active:scale-[0.98] ${
                      isPopular
                        ? "bg-[#0D9488] hover:bg-[#0F766E] text-white shadow-lg shadow-teal-500/30"
                        : "bg-white hover:bg-[#CCFBF1] text-[#0B1739] border border-[#E6EAEF] hover:border-[#99F6E4]"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="p-6 rounded-3xl bg-[#F0FDFA] border border-[#99F6E4] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#0F766E]">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#0D9488] flex-shrink-0" />
            <span>
              <strong>14-Day Free Evaluation:</strong> Test drive Pharmora on your real counter hardware before committing. No credit card required.
            </span>
          </div>
          <Link
            href="/contact"
            className="font-bold underline whitespace-nowrap hover:text-[#0B1739]"
          >
            Need a custom deployment proposal? Talk to us →
          </Link>
        </div>
      </div>

      <PlanCheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        initialPlanId={selectedPlanId}
        initialBillingCycle={billingCycle}
      />
    </section>
  );
}
