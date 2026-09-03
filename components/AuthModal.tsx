"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  EyeOff,
  Globe,
  Lock,
  Mail,
  ShieldCheck,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import Logo from "@/components/Logo";

type AuthMode = "login" | "signup" | "forgot";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>("login");

  if (!isOpen) return null;

  const isLogin = mode === "login";
  const isSignup = mode === "signup";
  const isForgot = mode === "forgot";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-[30px] border border-[#CDEFE3] bg-white shadow-[0_40px_120px_rgba(15,23,42,0.22)]">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#43516A] shadow-sm transition hover:bg-white"
          aria-label="Close authentication modal"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="grid lg:grid-cols-[1.05fr_1.2fr]">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#042F2E] via-[#052827] to-[#041D1A] p-8 text-white sm:p-10 lg:p-12">
            <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-[#14B8A6]/15 blur-3xl" />
            <div className="absolute -right-4 bottom-0 h-52 w-52 rounded-full bg-[#0D9488]/20 blur-3xl" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-10 flex items-center gap-3">
                <Logo variant="light" size="md" />
              </div>

              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-teal-400/30 bg-teal-950/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-teal-200">
                <Sparkles className="h-3.5 w-3.5" />
                Secure pharmacy operations
              </div>

              <h1 className="mt-8 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Manage your pharmacy with confidence.
              </h1>

              <p className="mt-4 max-w-md text-sm leading-7 text-slate-300 sm:text-base">
                Access inventory, prescriptions, POS, and branch insights in one beautifully connected workspace built for modern pharmacies.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  { icon: ShieldCheck, label: "Secure clinical verification" },
                  { icon: Lock, label: "Encrypted branch data" },
                  { icon: Globe, label: "Browser and desktop access" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0D9488]/20 text-teal-300">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-slate-100">{label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-[#99F6E4]/20 bg-white/5 p-4">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>Today&apos;s active operations</span>
                  <span className="rounded-full bg-[#CCFBF1] px-2 py-1 font-semibold text-[#0F766E]">Live</span>
                </div>
                <div className="mt-4 flex items-end justify-between gap-4">
                  <div>
                    <div className="text-3xl font-extrabold text-white">GH₵ 4,850</div>
                    <p className="mt-1 text-xs text-slate-300">Revenue processed today</p>
                  </div>
                  <div className="rounded-xl bg-[#0D9488]/20 px-3 py-2 text-right">
                    <div className="text-xs text-teal-200">+18.4%</div>
                    <div className="text-[10px] text-slate-300">vs yesterday</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-[#F8FAFC] p-6 sm:p-8 lg:p-10">
            <div className="w-full max-w-md">
              <div className="mb-7">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#CCFBF1] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0F766E]">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Secure access
                </div>
                <h2 className="text-3xl font-extrabold text-[#0B1739]">
                  {isLogin ? "Welcome back" : isSignup ? "Create your account" : "Reset your password"}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#667085]">
                  {isLogin
                    ? "Sign in to your Pharmora workspace and continue managing your pharmacy with clarity and control."
                    : isSignup
                    ? "Set up your pharmacy workspace and start managing inventory, prescriptions, and sales from a single control center."
                    : "Enter the email associated with your Pharmora account and we’ll send you a secure reset link."}
                </p>
              </div>

              <div className="mb-5 grid grid-cols-3 gap-2 rounded-2xl border border-[#E6EAEF] bg-white p-1.5">
                {[
                  { id: "login", label: "Login" },
                  { id: "signup", label: "Sign Up" },
                  { id: "forgot", label: "Reset" },
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setMode(id as AuthMode)}
                    className={`rounded-xl px-3 py-2 text-xs font-semibold transition ${
                      mode === id
                        ? "bg-[#0D9488] text-white shadow-md shadow-[#0D9488]/20"
                        : "text-[#43516A] hover:bg-[#F0FDFA]"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {isLogin && (
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label htmlFor="auth-email" className="text-sm font-semibold text-[#0B1739]">
                      Email address
                    </label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" />
                      <input
                        id="auth-email"
                        type="email"
                        placeholder="you@pharmacy.com"
                        className="w-full rounded-2xl border border-[#D8E6E3] bg-white py-3.5 pl-11 pr-4 text-sm text-[#0B1739] placeholder:text-[#98A2B3] outline-none transition focus:border-[#0D9488] focus:ring-4 focus:ring-[#CCFBF1]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="auth-password" className="text-sm font-semibold text-[#0B1739]">
                        Password
                      </label>
                      <button type="button" onClick={() => setMode("forgot")} className="text-xs font-semibold text-[#0D9488] hover:text-[#0F766E]">
                        Forgot password?
                      </button>
                    </div>
                    <div className="relative">
                      <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" />
                      <input
                        id="auth-password"
                        type="password"
                        placeholder="Enter your password"
                        className="w-full rounded-2xl border border-[#D8E6E3] bg-white py-3.5 pl-11 pr-11 text-sm text-[#0B1739] placeholder:text-[#98A2B3] outline-none transition focus:border-[#0D9488] focus:ring-4 focus:ring-[#CCFBF1]"
                      />
                      <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-[#667085] transition hover:text-[#0B1739]" aria-label="Toggle password visibility">
                        <EyeOff className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-[#E6EAEF] bg-[#F8FAFC] px-4 py-3 text-sm text-[#43516A]">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-[#CDEFE3] text-[#0D9488] focus:ring-[#0D9488]" />
                      Keep me signed in
                    </label>
                    <span className="flex items-center gap-1.5 text-[#0F766E]">
                      <ShieldCheck className="h-4 w-4" />
                      Encrypted
                    </span>
                  </div>

                  <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0D9488] to-[#0F766E] px-5 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(13,148,136,0.28)] transition hover:from-[#0F766E] hover:to-[#0D9488]">
                    Login to dashboard
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}

              {isSignup && (
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label htmlFor="signup-name" className="text-sm font-semibold text-[#0B1739]">
                      Full name
                    </label>
                    <div className="relative">
                      <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" />
                      <input
                        id="signup-name"
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
                    <label htmlFor="signup-confirm" className="text-sm font-semibold text-[#0B1739]">
                      Confirm password
                    </label>
                    <div className="relative">
                      <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" />
                      <input
                        id="signup-confirm"
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

                  <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0D9488] to-[#0F766E] px-5 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(13,148,136,0.28)] transition hover:from-[#0F766E] hover:to-[#0D9488]">
                    Create account
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}

              {isForgot && (
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
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

                  <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0D9488] to-[#0F766E] px-5 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(13,148,136,0.28)] transition hover:from-[#0F766E] hover:to-[#0D9488]">
                    Send reset link
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <div className="rounded-2xl border border-[#E6EAEF] bg-[#F8FAFC] p-4 text-sm text-[#43516A]">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-[#CCFBF1] p-1 text-[#0F766E]">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <p>We’ll send a secure account reset email with instructions to regain access quickly.</p>
                    </div>
                  </div>
                </form>
              )}

              <div className="mt-6 border-t border-[#E6EAEF] pt-5 text-center text-sm text-[#667085]">
                {isLogin ? "Need an account?" : isSignup ? "Already have an account?" : "Remembered your password?"}{" "}
                <button
                  type="button"
                  onClick={() => setMode(isLogin ? "signup" : isSignup ? "login" : "login")}
                  className="font-semibold text-[#0D9488] transition-colors hover:text-[#0F766E]"
                >
                  {isLogin ? "Create one" : isSignup ? "Sign in" : "Back to login"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
