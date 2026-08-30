import Link from "next/link";
import { FileText, ShieldCheck } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="pt-28 pb-24 bg-white">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCFBF1] text-xs font-mono font-bold text-[#0F766E] uppercase tracking-wider mb-4">
            <FileText className="w-4 h-4 text-[#0D9488]" />
            Software License Agreement
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1739] tracking-tight mb-2">
            Terms of Service
          </h1>
          <p className="text-xs text-[#667085]">
            Effective date: August 2026 · Pharmora Desktop & Web Platform
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm text-[#43516A] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B1739]">1. Agreement to Terms</h2>
            <p>
              By downloading, installing, or using Pharmora Desktop software or accessing Pharmora Web, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not install or use the platform.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B1739]">2. Pharmacy Operations & Clinical Responsibilities</h2>
            <p>
              Pharmora provides operational, inventory, point-of-sale, and workflow assistance tools. The ultimate clinical verification of prescriptions, dosage safety, and drug dispensation remains the legal and professional responsibility of the licensed pharmacist on duty.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B1739]">3. Software License & Updates</h2>
            <p>
              We grant your pharmacy a non-exclusive, revocable subscription license to use Pharmora Desktop and Web platforms for the number of active registers and branches specified in your subscription tier.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B1739]">4. Service Availability & Uptime</h2>
            <p>
              We strive to maintain 99.99% cloud synchronization availability. In the event of temporary internet disruption, Pharmora Desktop continues cashier checkout in local offline mode.
            </p>
          </section>

          <div className="pt-8 border-t border-slate-200 text-xs text-slate-500">
            Questions regarding terms? Contact <span className="text-[#0D9488] font-mono">legal@pharmora.com</span>.
          </div>
        </div>

      </div>
    </div>
  );
}
