import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import AuthShell from "@/components/AuthShell";

export default function ForgotPasswordPage() {
  return (
    <AuthShell
      title="Reset your password"
      subtitle="Enter the email associated with your Pharmora account and we’ll send you a secure reset link."
      footerText="Remembered your password?"
      footerLinkText="Back to login"
      footerHref="/login"
    >
      <form className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="reset-email" className="text-sm font-semibold text-[#0B1739]">
            Email address
          </label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" />
            <input
              id="reset-email"
              type="email"
              placeholder="you@pharmacy.com"
              className="w-full rounded-2xl border border-[#D8E6E3] bg-white py-3.5 pl-11 pr-4 text-sm text-[#0B1739] placeholder:text-[#98A2B3] outline-none transition focus:border-[#0D9488] focus:ring-4 focus:ring-[#CCFBF1]"
            />
          </div>
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0D9488] to-[#0F766E] px-5 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(13,148,136,0.28)] transition hover:from-[#0F766E] hover:to-[#0D9488]"
        >
          Send reset link
          <ArrowRight className="h-4 w-4" />
        </button>

        <div className="rounded-2xl border border-[#E6EAEF] bg-[#F8FAFC] p-4 text-sm text-[#43516A]">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-full bg-[#CCFBF1] p-1 text-[#0F766E]">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <p>
              We’ll send a secure account reset email with instructions to regain access quickly.
            </p>
          </div>
        </div>
      </form>
    </AuthShell>
  );
}
