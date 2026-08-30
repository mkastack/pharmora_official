import Link from "next/link";
import {
  Globe,
  ExternalLink,
  Smartphone,
  ShieldCheck,
  Building2,
  CheckCircle2,
  Lock,
  ArrowRight
} from "lucide-react";
import CTASection from "@/components/CTASection";

export default function WebPage() {
  return (
    <div className="pt-28 pb-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CCFBF1] text-xs font-mono font-bold text-[#0F766E] uppercase tracking-wider mb-4">
            <Globe className="w-4 h-4 text-[#0D9488]" />
            Universal Cloud Access
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0B1739] tracking-tight leading-tight mb-4">
            Your pharmacy operations, <br />
            <span className="gradient-text-teal">accessible anywhere.</span>
          </h1>
          <p className="text-lg text-[#667085]">
            Manage inventory, review branch revenue, authorize supplier purchase orders, and audit clinical logs from any browser on your laptop, tablet, or phone.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://app.pharmora.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0D9488] hover:bg-[#0F766E] text-white font-bold text-sm shadow-md shadow-teal-600/20 transition-all"
            >
              <span>Launch Pharmora Web App</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/pricing"
              className="px-6 py-3.5 rounded-xl bg-[#F8FAFC] hover:bg-[#CCFBF1] border border-[#E6EAEF] text-xs font-bold text-[#0B1739] transition-colors"
            >
              View Subscription Tiers
            </Link>
          </div>
        </div>

        {/* Web Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-[#E6EAEF] hover:border-[#99F6E4] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#CCFBF1] text-[#0D9488] flex items-center justify-center mb-6">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0B1739] mb-3">Executive Mobile Views</h3>
            <p className="text-xs sm:text-sm text-[#43516A] leading-relaxed">
              Check real-time branch sales, cashier closing balances, and low-stock alarms directly from your smartphone while traveling.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-[#E6EAEF] hover:border-[#99F6E4] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#CCFBF1] text-[#0D9488] flex items-center justify-center mb-6">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0B1739] mb-3">Multi-Branch Central Control</h3>
            <p className="text-xs sm:text-sm text-[#43516A] leading-relaxed">
              Consolidate procurement, balance drug stock across locations, and review branch comparison metrics in one central dashboard.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-[#E6EAEF] hover:border-[#99F6E4] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#CCFBF1] text-[#0D9488] flex items-center justify-center mb-6">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0B1739] mb-3">Enterprise Security & MFA</h3>
            <p className="text-xs sm:text-sm text-[#43516A] leading-relaxed">
              Multi-factor authentication (MFA), IP address whitelisting, and strict session isolation guarantee data privacy.
            </p>
          </div>
        </div>

      </div>

      <CTASection />
    </div>
  );
}
