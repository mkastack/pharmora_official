"use client";

import { useState, useEffect } from "react";
import {
  X,
  Check,
  Sparkles,
  ShieldCheck,
  Building2,
  CreditCard,
  Smartphone,
  Lock,
  ArrowRight,
  BadgeCheck,
  ExternalLink,
  Store,
  Layers,
  PhoneCall,
  Calendar,
  CheckCircle2,
  RefreshCw,
  AlertCircle
} from "lucide-react";
import confetti from "canvas-confetti";
import { PHARMORA_CONSOLE_URL } from "@/lib/utils";

export interface PlanConfig {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: string;
  priceAnnual: string;
  monthlyNumeric: number;
  annualNumeric: number;
  popular?: boolean;
  features: string[];
}

export const MODAL_PLANS: Record<string, PlanConfig> = {
  starter: {
    id: "starter",
    name: "Starter",
    tagline: "For independent pharmacies & single dispensaries getting started.",
    priceMonthly: "GH₵ 350",
    priceAnnual: "GH₵ 280",
    monthlyNumeric: 350,
    annualNumeric: 280,
    features: [
      "Full Windows Desktop & Web App access",
      "Up to 3 Staff User Accounts",
      "Real-time Inventory & Barcode POS",
      "Prescription review queue",
      "Standard Thermal Receipt Printing",
      "Daily Sales & End-of-Shift Reports",
      "Standard Email & Chat Support"
    ]
  },
  professional: {
    id: "professional",
    name: "Professional",
    tagline: "For busy community pharmacies and growing health retailers.",
    priceMonthly: "GH₵ 750",
    priceAnnual: "GH₵ 600",
    monthlyNumeric: 750,
    annualNumeric: 600,
    popular: true,
    features: [
      "Everything in Starter, plus:",
      "Unlimited Staff & Pharmacist Accounts",
      "Advanced Batch & Expiry Quarantine",
      "Automated Low-Stock Reorder Triggers",
      "Prescription Drug Interaction Alerts",
      "Integrated Mobile Money & Card POS",
      "Delivery Dispatch & SMS Notifications",
      "Multi-Register Barcode Scanning",
      "Priority 24/7 Phone & Remote Support"
    ]
  },
  enterprise: {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For pharmacy hospital chains, multi-location franchises & wholesale networks.",
    priceMonthly: "Custom",
    priceAnnual: "Custom",
    monthlyNumeric: 1800,
    annualNumeric: 1440,
    features: [
      "Everything in Professional, plus:",
      "Multi-Branch Central Inventory Sync",
      "Centralized HMO & Insurance Copay Engine",
      "Custom ERP & Warehouse API Webhooks",
      "Offline Failover POS Cluster Sync",
      "Dedicated Technical Account Manager",
      "Custom SLA & On-Site Hardware Onboarding"
    ]
  }
};

interface PlanCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlanId?: string;
  initialBillingCycle?: "monthly" | "annual";
}

export default function PlanCheckoutModal({
  isOpen,
  onClose,
  initialPlanId = "professional",
  initialBillingCycle = "annual",
}: PlanCheckoutModalProps) {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(initialPlanId);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(initialBillingCycle);
  const [branches, setBranches] = useState<number>(1);
  const [paymentMethod, setPaymentMethod] = useState<"momo" | "card" | "invoice">("momo");
  const [includeSmsAddon, setIncludeSmsAddon] = useState<boolean>(true);

  // Form State
  const [pharmacyName, setPharmacyName] = useState("HealthPlus Pharmacy Limited");
  const [superintendentName, setSuperintendentName] = useState("Dr. Kofi Mensah, PharmD");
  const [licenseNumber, setLicenseNumber] = useState("PCG/GR/2026/0491");
  const [email, setEmail] = useState("operations@healthplusgh.com");
  const [phone, setPhone] = useState("024 412 3456");
  const [momoProvider, setMomoProvider] = useState("MTN Mobile Money");
  const [city, setCity] = useState("East Legon, Accra");

  // Flow State
  const [step, setStep] = useState<"configure" | "processing" | "success">("configure");

  useEffect(() => {
    if (initialPlanId) setSelectedPlanId(initialPlanId);
    if (initialBillingCycle) setBillingCycle(initialBillingCycle);
  }, [initialPlanId, initialBillingCycle, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && step !== "processing") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, step]);

  if (!isOpen) return null;

  const activePlan = MODAL_PLANS[selectedPlanId] || MODAL_PLANS.professional;
  const isEnterprise = selectedPlanId === "enterprise";

  const basePricePerMonth =
    billingCycle === "annual" ? activePlan.annualNumeric : activePlan.monthlyNumeric;

  const smsPricePerMonth = includeSmsAddon ? 50 : 0;
  const totalPerMonth = (basePricePerMonth * branches) + (includeSmsAddon ? smsPricePerMonth * branches : 0);
  const annualTotal = totalPerMonth * 12;

  const handleActivate = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("processing");

    setTimeout(() => {
      setStep("success");
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#0D9488", "#14B8A6", "#059669", "#10B981", "#3B82F6"]
        });
      } catch {
        // fallback if canvas not available
      }
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl rounded-3xl bg-white shadow-2xl border border-[#CDEFE3] my-auto overflow-hidden flex flex-col max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-5 sm:px-8 py-4 bg-white/95 backdrop-blur-md border-b border-[#E6EAEF]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#0D9488]/10 text-[#0D9488] flex items-center justify-center font-black">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-base sm:text-lg text-[#0B1739]">
                  {step === "success" ? "Workspace Provisioned" : `Configure ${activePlan.name} Subscription`}
                </h3>
                {activePlan.popular && step !== "success" && (
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-[#14B8A6] text-white text-[10px] font-bold uppercase tracking-wider">
                    Recommended
                  </span>
                )}
              </div>
              <p className="text-xs text-[#667085]">
                {step === "success"
                  ? "Your 14-day full production trial is active"
                  : "Includes full Windows Desktop .exe + Web Cloud access"}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            disabled={step === "processing"}
            className="p-2 rounded-full text-slate-400 hover:text-[#0B1739] hover:bg-slate-100 transition-colors disabled:opacity-40"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-8">
          {step === "processing" ? (
            <div className="py-16 flex flex-col items-center justify-center text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-3xl bg-[#0D9488]/10 border border-[#0D9488]/30 flex items-center justify-center text-[#0D9488]">
                  <RefreshCw className="w-8 h-8 animate-spin" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#0D9488] text-white flex items-center justify-center text-xs shadow-md">
                  <Lock className="w-3.5 h-3.5" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-[#0B1739]">
                  Provisioning Pharmacy Cloud Workspace...
                </h4>
                <p className="text-xs sm:text-sm text-[#667085] max-w-md mx-auto mt-1">
                  Configuring {branches} branch database(s), batch expiry ledger, and issuing official counter credentials for {pharmacyName}.
                </p>
              </div>
            </div>
          ) : step === "success" ? (
            <div className="py-8 space-y-6">
              {/* Success Banner */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#042F2E] to-[#041D1A] text-white border border-teal-500/30 text-center relative overflow-hidden">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center mx-auto mb-4 border border-teal-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/40 text-[11px] font-mono text-teal-300 font-bold mb-3">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  WORKSPACE STATUS: READY &amp; LIVE
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
                  Welcome to Pharmora, {pharmacyName}!
                </h3>
                <p className="text-sm text-slate-300 max-w-lg mx-auto">
                  Your 14-day free trial on the <strong>{activePlan.name} Plan</strong> is officially active. No charge has been made to your payment account today.
                </p>
              </div>

              {/* Provisioned Specs Card */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E6EAEF] space-y-1">
                  <span className="text-[#98A2B3] font-mono uppercase text-[10px]">Registered Branch</span>
                  <p className="font-bold text-[#0B1739] text-sm">{city}</p>
                  <p className="text-[#667085] font-mono text-[11px]">{branches} Active Location(s)</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E6EAEF] space-y-1">
                  <span className="text-[#98A2B3] font-mono uppercase text-[10px]">Superintendent In-Charge</span>
                  <p className="font-bold text-[#0B1739] text-sm">{superintendentName}</p>
                  <p className="text-[#0D9488] font-mono text-[11px] font-semibold">{licenseNumber}</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F0FDFA] border border-[#99F6E4] space-y-1">
                  <span className="text-[#0F766E] font-mono uppercase text-[10px]">Trial Guarantee</span>
                  <p className="font-bold text-[#0F766E] text-sm">GH₵ 0.00 Due Today</p>
                  <p className="text-[#0D9488] text-[11px]">Free full access until Day 14</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href={PHARMORA_CONSOLE_URL}
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-[#0D9488] to-[#0F766E] hover:from-[#0F766E] hover:to-[#0D9488] text-white font-bold text-sm shadow-xl shadow-[#0D9488]/25 transition-all active:scale-[0.98]"
                >
                  <span>Launch Cloud Console Now</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href="/downloads"
                  onClick={onClose}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-[#F8FAFC] hover:bg-slate-100 text-[#0B1739] border border-[#E6EAEF] font-bold text-sm transition-all"
                >
                  <span>Download Desktop .exe</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleActivate} className="space-y-8">
              {/* Plan Switcher Pills */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#98A2B3]">
                  Select Tier
                </label>
                <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-[#F8FAFC] border border-[#E6EAEF]">
                  {(["starter", "professional", "enterprise"] as const).map((pid) => {
                    const plan = MODAL_PLANS[pid];
                    const isSelected = selectedPlanId === pid;
                    return (
                      <button
                        key={pid}
                        type="button"
                        onClick={() => setSelectedPlanId(pid)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center flex flex-col items-center justify-center gap-0.5 ${
                          isSelected
                            ? "bg-[#0D9488] text-white shadow-md shadow-teal-700/20"
                            : "text-[#43516A] hover:text-[#0B1739] hover:bg-white"
                        }`}
                      >
                        <span className="font-extrabold">{plan.name}</span>
                        <span className={`text-[10px] font-mono ${isSelected ? "text-teal-100" : "text-[#98A2B3]"}`}>
                          {billingCycle === "annual" ? plan.priceAnnual : plan.priceMonthly}/mo
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Form Layout: 2 Columns on medium+ screens */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Left Column: Pharmacy Setup Details */}
                <div className="md:col-span-7 space-y-5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-extrabold text-sm text-[#0B1739] flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#0D9488]" />
                      Pharmacy Business Details
                    </h4>
                    <span className="text-[11px] text-[#0F766E] font-medium bg-[#CCFBF1] px-2 py-0.5 rounded-full">
                      Ghana Pharmacy Council Compliant
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="block font-semibold text-[#43516A] mb-1">
                        Pharmacy Registered Name
                      </label>
                      <input
                        type="text"
                        required
                        value={pharmacyName}
                        onChange={(e) => setPharmacyName(e.target.value)}
                        placeholder="e.g. HealthPlus Pharmacy Limited"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8E6E3] bg-white text-sm text-[#0B1739] focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-[#43516A] mb-1">
                          Superintendent Pharmacist
                        </label>
                        <input
                          type="text"
                          required
                          value={superintendentName}
                          onChange={(e) => setSuperintendentName(e.target.value)}
                          placeholder="e.g. Dr. Kofi Mensah"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8E6E3] bg-white text-sm text-[#0B1739] focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-[#43516A] mb-1">
                          Pharmacy Council PIN / License
                        </label>
                        <input
                          type="text"
                          required
                          value={licenseNumber}
                          onChange={(e) => setLicenseNumber(e.target.value)}
                          placeholder="e.g. PCG/GR/2026/0491"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8E6E3] bg-white text-sm text-[#0B1739] font-mono focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-[#43516A] mb-1">
                          Superintendent Work Email
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="superintendent@pharmacy.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8E6E3] bg-white text-sm text-[#0B1739] focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-[#43516A] mb-1">
                          Branch City / Location
                        </label>
                        <input
                          type="text"
                          required
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="e.g. East Legon, Accra"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8E6E3] bg-white text-sm text-[#0B1739] focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                        />
                      </div>
                    </div>

                    {/* Branch Quantity Slider */}
                    <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E6EAEF] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#0B1739]">Operating Branches to Connect</span>
                        <span className="font-mono font-bold text-[#0D9488] bg-white px-2.5 py-0.5 rounded-lg border border-[#CDEFE3]">
                          {branches} {branches === 1 ? "Branch" : "Branches"}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={branches}
                        onChange={(e) => setBranches(Number(e.target.value))}
                        className="w-full accent-[#0D9488] cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-[#98A2B3] font-mono">
                        <span>1 Single Shop</span>
                        <span>5 Retail Outlets</span>
                        <span>10+ Full Chain</span>
                      </div>
                    </div>

                    {/* Add-on toggle */}
                    <label className="flex items-start gap-3 p-3 rounded-2xl border border-[#E6EAEF] bg-white hover:bg-[#F8FAFC] cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={includeSmsAddon}
                        onChange={(e) => setIncludeSmsAddon(e.target.checked)}
                        className="mt-0.5 h-4 w-4 rounded border-[#CDEFE3] text-[#0D9488] focus:ring-[#0D9488]"
                      />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-[#0B1739]">Automated Patient SMS Dispatch Alerts</span>
                          <span className="text-[10px] font-mono text-[#0D9488] bg-[#CCFBF1] px-1.5 py-0.2 rounded font-bold">
                            +GH₵ 50/mo
                          </span>
                        </div>
                        <p className="text-[11px] text-[#667085]">
                          Send real-time pickup ready, dosage instructions and MoMo receipt SMS directly to patients.
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Right Column: Billing & Order Summary */}
                <div className="md:col-span-5 space-y-5">
                  <h4 className="font-extrabold text-sm text-[#0B1739] flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#0D9488]" />
                    Subscription Summary
                  </h4>

                  {/* Billing cycle switch */}
                  <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-[#F8FAFC] border border-[#E6EAEF] text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setBillingCycle("monthly")}
                      className={`py-2 px-2 rounded-lg transition-all text-center ${
                        billingCycle === "monthly"
                          ? "bg-white text-[#0B1739] shadow-sm font-bold"
                          : "text-[#667085]"
                      }`}
                    >
                      Monthly
                    </button>
                    <button
                      type="button"
                      onClick={() => setBillingCycle("annual")}
                      className={`py-2 px-2 rounded-lg transition-all text-center flex items-center justify-center gap-1 ${
                        billingCycle === "annual"
                          ? "bg-[#0D9488] text-white shadow-sm font-bold"
                          : "text-[#667085]"
                      }`}
                    >
                      <span>Annual</span>
                      <span className="text-[9px] font-mono bg-teal-950 text-teal-200 px-1 rounded">
                        -20%
                      </span>
                    </button>
                  </div>

                  {/* Pricing Breakdown Card */}
                  <div className="p-4 rounded-2xl bg-[#042F2E] text-white border border-teal-500/30 space-y-3 text-xs">
                    <div className="flex justify-between items-center pb-2.5 border-b border-teal-800/80">
                      <span className="text-slate-300">{activePlan.name} Base ({branches} {branches === 1 ? "branch" : "branches"})</span>
                      <span className="font-mono font-bold text-white">
                        GH₵ {(basePricePerMonth * branches).toLocaleString()} /mo
                      </span>
                    </div>

                    {includeSmsAddon && (
                      <div className="flex justify-between items-center text-slate-300">
                        <span>Patient SMS Gateway ({branches} branch)</span>
                        <span className="font-mono text-teal-300">
                          +GH₵ {(smsPricePerMonth * branches).toLocaleString()} /mo
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between items-center text-slate-300">
                      <span>14-Day Full Production Trial</span>
                      <span className="font-mono text-emerald-400 font-bold">100% Free</span>
                    </div>

                    <div className="pt-2 border-t border-teal-800/80 space-y-1">
                      <div className="flex justify-between items-baseline">
                        <span className="font-extrabold text-sm text-white">Due Today</span>
                        <span className="font-mono text-xl font-extrabold text-emerald-300">
                          GH₵ 0.00
                        </span>
                      </div>
                      <p className="text-[10px] text-teal-200/70">
                        First billing of GH₵ {totalPerMonth.toLocaleString()} begins after your 14-day evaluation.
                      </p>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-[#43516A]">
                      Select Preferred Billing Settlement
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("momo")}
                        className={`p-2.5 rounded-xl border text-center flex flex-col items-center justify-center gap-1 transition-all ${
                          paymentMethod === "momo"
                            ? "border-[#0D9488] bg-[#F0FDFA] text-[#0F766E] font-bold ring-2 ring-[#0D9488]/20"
                            : "border-[#E6EAEF] bg-white text-[#667085] hover:border-slate-300"
                        }`}
                      >
                        <Smartphone className="w-4 h-4 text-[#0D9488]" />
                        <span className="text-[11px]">MoMo</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod("card")}
                        className={`p-2.5 rounded-xl border text-center flex flex-col items-center justify-center gap-1 transition-all ${
                          paymentMethod === "card"
                            ? "border-[#0D9488] bg-[#F0FDFA] text-[#0F766E] font-bold ring-2 ring-[#0D9488]/20"
                            : "border-[#E6EAEF] bg-white text-[#667085] hover:border-slate-300"
                        }`}
                      >
                        <CreditCard className="w-4 h-4 text-[#0D9488]" />
                        <span className="text-[11px]">Card</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod("invoice")}
                        className={`p-2.5 rounded-xl border text-center flex flex-col items-center justify-center gap-1 transition-all ${
                          paymentMethod === "invoice"
                            ? "border-[#0D9488] bg-[#F0FDFA] text-[#0F766E] font-bold ring-2 ring-[#0D9488]/20"
                            : "border-[#E6EAEF] bg-white text-[#667085] hover:border-slate-300"
                        }`}
                      >
                        <Store className="w-4 h-4 text-[#0D9488]" />
                        <span className="text-[11px]">Invoice</span>
                      </button>
                    </div>

                    {paymentMethod === "momo" && (
                      <div className="space-y-2 pt-1 text-xs">
                        <div className="grid grid-cols-2 gap-2">
                          <select
                            value={momoProvider}
                            onChange={(e) => setMomoProvider(e.target.value)}
                            className="px-3 py-2 rounded-xl border border-[#D8E6E3] bg-white text-xs text-[#0B1739] font-medium"
                          >
                            <option>MTN Mobile Money</option>
                            <option>Telecel Cash</option>
                            <option>AT Money</option>
                          </select>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="024 412 3456"
                            className="px-3 py-2 rounded-xl border border-[#D8E6E3] bg-white text-xs font-mono text-[#0B1739]"
                          />
                        </div>
                        <p className="text-[10.5px] text-[#667085]">
                          You will receive an automated USSD prompt on this phone when the 14-day trial concludes.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Submission CTA */}
                  <div className="pt-2 space-y-2.5">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-[#0D9488] to-[#0F766E] hover:from-[#0F766E] hover:to-[#0D9488] text-white font-extrabold text-sm shadow-xl shadow-[#0D9488]/25 transition-all duration-200 active:scale-[0.98]"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Activate 14-Day Free Evaluation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-[#667085]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#0D9488]" />
                      <span>Zero setup fee · Cancel anytime · Instant activation</span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
