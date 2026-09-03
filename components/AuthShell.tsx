import Link from "next/link";
import { CheckCircle2, Globe, Lock, ShieldCheck, Sparkles } from "lucide-react";
import Logo from "@/components/Logo";
import { PHARMORA_WEB_APP_URL } from "@/lib/utils";

interface AuthShellProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footerText: string;
  footerLinkText: string;
  footerHref: string;
}

export default function AuthShell({
  title,
  subtitle,
  children,
  footerText,
  footerLinkText,
  footerHref,
}: AuthShellProps) {
  return (
    <section className="relative min-h-screen bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.12),_transparent_45%),linear-gradient(180deg,#f8fffe_0%,#f4fbfa_100%)] px-4 py-8 pt-24 sm:px-6 lg:px-8 lg:py-12">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-60" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between gap-3 rounded-full border border-[#D7F7F0] bg-white/80 px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur-sm">
          <Link href="/" className="flex items-center gap-3">
            <Logo size="sm" />
          </Link>

          <a
            href={PHARMORA_WEB_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#CDEFE3] bg-[#F0FDFA] px-3 py-1.5 text-xs font-semibold text-[#0F766E] transition hover:border-[#99F6E4] hover:bg-[#CCFBF1]"
          >
            <Globe className="h-3.5 w-3.5" />
            Use Pharmora Online
          </a>
        </div>

        <div className="grid overflow-hidden rounded-[32px] border border-[#CDEFE3] bg-white shadow-[0_30px_90px_rgba(15,23,42,0.08)] lg:grid-cols-[1.08fr_1.22fr]">
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

              <h1 className="mt-8 max-w-lg text-3xl font-extrabold leading-tight text-white sm:text-4xl">
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

          <div className="flex items-center justify-center bg-[#F4FAF8] p-5 sm:p-7 lg:p-8">
            <div className="w-full max-w-[480px] rounded-[28px] border border-[#DCEEE8] bg-[#F9FBFA] p-4 shadow-[0_12px_30px_rgba(15,23,42,0.04)] sm:p-5">
              <div className="mb-7 rounded-[22px] border border-[#E6EAEF] bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#CCFBF1] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0F766E]">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Secure access
                </div>
                <h2 className="text-3xl font-extrabold text-[#0B1739]">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#667085]">{subtitle}</p>
              </div>

              {children}

              <div className="mt-6 border-t border-[#E6EAEF] pt-5 text-center text-sm text-[#667085]">
                {footerText}{" "}
                <Link href={footerHref} className="font-semibold text-[#0D9488] transition-colors hover:text-[#0F766E]">
                  {footerLinkText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
