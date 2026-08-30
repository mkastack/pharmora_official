"use client";

import { useState } from "react";
import Link from "next/link";
import {
  DownloadCloud,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  Monitor,
  Info,
  ShieldCheck,
  Cpu,
  HardDrive,
  FileCode,
  ArrowRight
} from "lucide-react";
import { PHARMORA_DOWNLOAD_URL } from "@/lib/utils";
import { SYSTEM_REQUIREMENTS } from "@/lib/data";

export default function DownloadSection() {
  const [downloadState, setDownloadState] = useState<"idle" | "preparing" | "started">("idle");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showSysReqModal, setShowSysReqModal] = useState(false);

  const handleDownloadClick = () => {
    if (downloadState !== "idle") return;
    setDownloadState("preparing");

    setTimeout(() => {
      setDownloadState("started");
      // Trigger download or mock notice
      const link = document.createElement("a");
      link.href = "#";
      link.setAttribute("download", "PharmoraSetup-v1.0.0.exe");
      // Restore after 4 seconds
      setTimeout(() => {
        setDownloadState("idle");
      }, 4000);
    }, 1200);
  };

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Boxed Download Container */}
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-[#042F2E] via-[#052827] to-[#041D1A] text-white border border-teal-500/30 shadow-2xl overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/90 border border-teal-500/40 text-xs font-mono font-bold text-teal-300 mb-6">
              <Monitor className="w-3.5 h-3.5 text-teal-400" />
              <span>OFFICIAL NATIVE RELEASE · VERSION 1.0.0</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Your pharmacy workspace. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-200 to-teal-300">
                Now on your desktop.
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
              Install Pharmora and give your counter team a dedicated, lightning-fast workspace built for continuous barcode scanning, instant receipt printing, and zero-latency prescription validation.
            </p>

            {/* Meta Pill Specs */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-teal-300 mb-10">
              <span className="px-3 py-1.5 rounded-xl bg-teal-950/70 border border-teal-500/20">
                File: PharmoraSetup.exe
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-teal-950/70 border border-teal-500/20">
                OS: Windows 10 & 11 (64-bit)
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-teal-950/70 border border-teal-500/20 text-slate-400">
                Size: Shown when release is available
              </span>
            </div>

            {/* Download Action Area */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              
              {/* Primary Download Button with State Machine */}
              <div className="relative inline-flex">
                <button
                  onClick={handleDownloadClick}
                  disabled={downloadState !== "idle"}
                  className={`flex items-center gap-3 px-7 py-4 rounded-l-2xl font-bold text-sm transition-all duration-200 shadow-xl ${
                    downloadState === "idle"
                      ? "bg-gradient-to-r from-[#0D9488] to-[#14B8A6] hover:from-[#0F766E] hover:to-[#0D9488] text-white shadow-teal-500/25 active:scale-[0.98]"
                      : downloadState === "preparing"
                      ? "bg-teal-700 text-white cursor-wait"
                      : "bg-[#0D9488] text-white"
                  }`}
                >
                  {downloadState === "idle" && (
                    <>
                      <DownloadCloud className="w-5 h-5" />
                      <div className="text-left">
                        <span className="block text-sm font-extrabold">Download for Windows</span>
                        <span className="text-[10.5px] opacity-80 font-mono">Windows 10/11 · .exe</span>
                      </div>
                    </>
                  )}

                  {downloadState === "preparing" && (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Preparing download...</span>
                    </>
                  )}

                  {downloadState === "started" && (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-teal-200" />
                      <span>Download started ✓</span>
                    </>
                  )}
                </button>

                {/* Dropdown Toggle Arrow */}
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="px-3.5 py-4 rounded-r-2xl bg-teal-700 hover:bg-teal-600 text-white border-l border-teal-800/50 transition-colors"
                  aria-label="Other platforms"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Other Platforms Flyout Menu */}
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-[#041D1A] border border-teal-500/30 p-2 shadow-2xl z-30 animate-in fade-in slide-in-from-top-2 text-xs">
                    <button
                      onClick={() => {
                        setDropdownOpen(false);
                        handleDownloadClick();
                      }}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-teal-900/50 text-white font-semibold flex items-center justify-between"
                    >
                      <span>Windows Installer (.exe)</span>
                      <span className="text-[10px] text-teal-400 font-mono">Recommended</span>
                    </button>

                    <div className="p-2.5 rounded-xl text-slate-500 flex items-center justify-between cursor-not-allowed opacity-70">
                      <span>Windows Portable (.zip)</span>
                      <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">Coming Soon</span>
                    </div>

                    <Link
                      href="/web"
                      className="w-full text-left p-2.5 rounded-xl hover:bg-teal-900/50 text-slate-300 hover:text-white font-semibold flex items-center justify-between"
                    >
                      <span>Web App (Browser Access)</span>
                      <span className="text-[10px] text-teal-400 font-mono">Instant</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Web App Link Fallback */}
              <Link
                href="/web"
                className="px-5 py-4 rounded-2xl bg-[#042F2E] hover:bg-[#073c38] border border-teal-500/30 text-xs font-bold text-teal-300 transition-colors"
              >
                Launch Web App Instead →
              </Link>

              {/* Installation Guide Link */}
              <Link
                href="/installation"
                className="px-5 py-4 rounded-2xl bg-[#042F2E] hover:bg-[#073c38] border border-teal-500/30 text-xs font-bold text-teal-300 transition-colors"
              >
                Installation Guide (3 Mins)
              </Link>

              <button
                onClick={() => setShowSysReqModal(true)}
                className="px-4 py-4 text-xs font-semibold text-slate-400 hover:text-white transition-colors underline"
              >
                System Requirements
              </button>

            </div>

            {/* Quick Micro Verification */}
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Digitally signed SHA-256 binary · Virus-free verified · Automatic background patcher</span>
            </div>

          </div>
        </div>

      </div>

      {/* System Requirements Modal */}
      {showSysReqModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-[#CDEFE3]">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <h3 className="font-extrabold text-xl text-[#0B1739]">
                Pharmora Desktop System Requirements
              </h3>
              <button
                onClick={() => setShowSysReqModal(false)}
                className="p-1 rounded-full text-slate-400 hover:text-[#0B1739]"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3.5 text-xs text-[#43516A]">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex justify-between">
                <span className="font-bold text-[#0B1739]">Operating System:</span>
                <span className="font-mono">{SYSTEM_REQUIREMENTS.os}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex justify-between">
                <span className="font-bold text-[#0B1739]">Processor:</span>
                <span className="font-mono">{SYSTEM_REQUIREMENTS.processor}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex justify-between">
                <span className="font-bold text-[#0B1739]">RAM Memory:</span>
                <span className="font-mono">{SYSTEM_REQUIREMENTS.ram}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex justify-between">
                <span className="font-bold text-[#0B1739]">Hard Drive Storage:</span>
                <span className="font-mono">{SYSTEM_REQUIREMENTS.storage}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex justify-between">
                <span className="font-bold text-[#0B1739]">Display:</span>
                <span className="font-mono">{SYSTEM_REQUIREMENTS.display}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#F2FBF8] border border-[#CDEFE3] text-[11px] text-[#047857]">
                <strong>Hardware Peripherals:</strong> {SYSTEM_REQUIREMENTS.peripherals}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-right">
              <button
                onClick={() => setShowSysReqModal(false)}
                className="px-5 py-2.5 rounded-xl bg-[#0D9488] text-white font-bold text-xs"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

