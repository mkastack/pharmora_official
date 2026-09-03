import Link from "next/link";
import { ArrowRight, EyeOff, Lock, Mail, ShieldCheck, UserRound } from "lucide-react";
import AuthShell from "@/components/AuthShell";
import { PHARMORA_CONSOLE_URL } from "@/lib/utils";

export default function SignupPage() {
  return (
    <AuthShell
      title="Create your account"
      subtitle="Set up your pharmacy workspace and start managing inventory, prescriptions, and sales from a single control center."
      footerText="Already have an account?"
      footerLinkText="Sign in"
      footerHref={PHARMORA_CONSOLE_URL}
    >
      <form className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-sm font-semibold text-[#0B1739]">
            Full name
          </label>
          <div className="relative">
            <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" />
            <input
              id="fullName"
              type="text"
              placeholder="Kwame Mensah"
              className="w-full rounded-2xl border border-[#D8E6E3] bg-white py-3.5 pl-11 pr-4 text-sm text-[#0B1739] placeholder:text-[#98A2B3] outline-none transition focus:border-[#0D9488] focus:ring-4 focus:ring-[#CCFBF1]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="signup-email" className="text-sm font-semibold text-[#0B1739]">
            Work email
          </label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" />
            <input
              id="signup-email"
              type="email"
              placeholder="you@pharmacy.com"
              className="w-full rounded-2xl border border-[#D8E6E3] bg-white py-3.5 pl-11 pr-4 text-sm text-[#0B1739] placeholder:text-[#98A2B3] outline-none transition focus:border-[#0D9488] focus:ring-4 focus:ring-[#CCFBF1]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="signup-password" className="text-sm font-semibold text-[#0B1739]">
            Password
          </label>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" />
            <input
              id="signup-password"
              type="password"
              placeholder="Create a strong password"
              className="w-full rounded-2xl border border-[#D8E6E3] bg-white py-3.5 pl-11 pr-11 text-sm text-[#0B1739] placeholder:text-[#98A2B3] outline-none transition focus:border-[#0D9488] focus:ring-4 focus:ring-[#CCFBF1]"
            />
            <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-[#667085] transition hover:text-[#0B1739]" aria-label="Toggle password visibility">
              <EyeOff className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="confirm-password" className="text-sm font-semibold text-[#0B1739]">
            Confirm password
          </label>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" />
            <input
              id="confirm-password"
              type="password"
              placeholder="Repeat your password"
              className="w-full rounded-2xl border border-[#D8E6E3] bg-white py-3.5 pl-11 pr-4 text-sm text-[#0B1739] placeholder:text-[#98A2B3] outline-none transition focus:border-[#0D9488] focus:ring-4 focus:ring-[#CCFBF1]"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-[#E6EAEF] bg-[#F8FAFC] p-4 text-sm text-[#43516A]">
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1 h-4 w-4 rounded border-[#CDEFE3] text-[#0D9488] focus:ring-[#0D9488]" />
            <span>
              I agree to Pharmora&apos;s <Link href="/terms" className="font-semibold text-[#0D9488] hover:text-[#0F766E]">Terms of Service</Link> and <Link href="/privacy" className="font-semibold text-[#0D9488] hover:text-[#0F766E]">Privacy Policy</Link>.
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0D9488] to-[#0F766E] px-5 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(13,148,136,0.28)] transition hover:from-[#0F766E] hover:to-[#0D9488]"
        >
          Create account
          <ArrowRight className="h-4 w-4" />
        </button>

        <div className="flex items-center justify-center gap-2 rounded-2xl border border-[#CDEFE3] bg-[#F0FDFA] px-4 py-3 text-xs font-medium text-[#0F766E]">
          <ShieldCheck className="h-4 w-4" />
          Enterprise-grade security for every pharmacy team
        </div>
      </form>
    </AuthShell>
  );
}
