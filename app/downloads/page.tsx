"use client";

import { useState } from "react";
import Link from "next/link";
import {
  DownloadCloud,
  Monitor,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Cpu,
  HardDrive,
  Clock,
  ArrowRight,
  HelpCircle,
  FileCheck,
  ChevronDown
} from "lucide-react";
import { SYSTEM_REQUIREMENTS, RELEASE_HISTORY } from "@/lib/data";

export default function DownloadsPage() {
  const [downloadState, setDownloadState] = useState<"idle" | "preparing" | "started">("idle");
  const [selectedArch, setSelectedArch] = useState<"x64" | "arm64">("x64");

  const handleDownload = () => {
    if (downloadState !== "idle") return;
    setDownloadState("preparing");
    setTimeout(() => {
      setDownloadState("started");
      setTimeout(() => {
        setDownloadState("idle");
      }, 4000);
    }, 1200);
  };

  return (
    <div className="pt-28 pb-24 bg-white">
      {/* Top Banner */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CCFBF1] text-xs font-mono font-bold text-[#0F766E] uppercase tracking-wider mb-4">
            <Monitor className="w-4 h-4 text-[#0D9488]" />
            Official Download Center
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0B1739] tracking-tight leading-tight mb-4">
            Get Pharmora for Windows
          </h1>
          <p className="text-lg text-[#667085]">
            Give your pharmacy team the fast, dependable counter application engineered for non-stop barcode scanning, receipts, and clinical dispensing.
          </p>
        </div>

        {/* Main Big Download Card */}
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#042F2E] via-[#052827] to-[#041D1A] text-white border border-teal-500/30 shadow-2xl relative overflow-hidden mb-16">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-teal-900/80">
            <div>
              <div className="flex items-center gap-2 text-teal-300 text-xs font-mono font-bold mb-2">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                LATEST STABLE BUILD (v1.0.0)
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Pharmora for Windows 10 & 11
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Standard Windows Installer (.exe) with automatic cloud update patcher.
              </p>
            </div>

            {/* Architecture Selector */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-teal-950 border border-teal-500/30 text-xs font-mono">
              <button
                onClick={() => setSelectedArch("x64")}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  selectedArch === "x64" ? "bg-[#0D9488] text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                64-Bit (x64)
              </button>
              <button
                onClick={() => setSelectedArch("arm64")}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  selectedArch === "arm64" ? "bg-[#0D9488] text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                ARM64
              </button>
            </div>
          </div>

          <div className="py-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-teal-300">
            <div className="p-3.5 rounded-2xl bg-teal-950/70 border border-teal-500/20">
              <span className="text-slate-400 block text-[10px]">PACKAGE NAME</span>
              <span className="font-bold text-white">PharmoraSetup-v1.0.0.exe</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-teal-950/70 border border-teal-500/20">
              <span className="text-slate-400 block text-[10px]">DIGITAL SIGNATURE</span>
              <span className="font-bold text-white">Verified (SHA-256)</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-teal-950/70 border border-teal-500/20">
              <span className="text-slate-400 block text-[10px]">RELEASED</span>
              <span className="font-bold text-white">August 2026</span>
            </div>
          </div>

          {/* Download Trigger */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <button
              onClick={handleDownload}
              disabled={downloadState !== "idle"}
              className={`w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-200 shadow-xl ${
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
                  <span>Download Pharmora for Windows (.exe)</span>
                </>
              )}
              {downloadState === "preparing" && (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  <span>Preparing installer package...</span>
                </>
              )}
              {downloadState === "started" && (
                <>
                  <CheckCircle2 className="w-5 h-5 text-teal-200" />
                  <span>Download started ✓</span>
                </>
              )}
            </button>

            <Link
              href="/installation"
              className="text-xs font-semibold text-teal-300 hover:text-white flex items-center gap-1.5"
            >
              <span>View 3-Minute Setup Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Other OS Platforms Waitlist Strip */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          <div className="p-5 rounded-2xl border border-[#E6EAEF] bg-[#F8FAFC] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-700">
                
              </div>
              <div>
                <p className="font-bold text-xs text-[#0B1739]">macOS Desktop</p>
                <p className="text-[11px] text-[#667085]">Apple Silicon & Intel</p>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-mono">
              COMING SOON
            </span>
          </div>

          <div className="p-5 rounded-2xl border border-[#E6EAEF] bg-[#F8FAFC] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-700">
                🐧
              </div>
              <div>
                <p className="font-bold text-xs text-[#0B1739]">Linux Desktop</p>
                <p className="text-[11px] text-[#667085]">AppImage & .deb</p>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-mono">
              COMING SOON
            </span>
          </div>

          <div className="p-5 rounded-2xl border border-[#99F6E4] bg-[#F0FDFA] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white border border-[#99F6E4] flex items-center justify-center font-bold text-[#0D9488]">
                🌐
              </div>
              <div>
                <p className="font-bold text-xs text-[#0B1739]">Web App</p>
                <p className="text-[11px] text-[#0D9488]">Chrome, Safari, Edge</p>
              </div>
            </div>
            <Link
              href="/web"
              className="text-[10px] font-bold px-2.5 py-1 rounded bg-[#0D9488] text-white hover:bg-[#0F766E]"
            >
              LAUNCH NOW
            </Link>
          </div>
        </div>

        {/* System Requirements Grid */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-[#E6EAEF] bg-white p-8 sm:p-10 shadow-sm">
          <h3 className="text-xl font-extrabold text-[#0B1739] mb-6 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[#0D9488]" />
            Hardware & System Compatibility
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#43516A]">
            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200">
              <span className="font-bold text-[#0B1739] block mb-1">Operating System</span>
              <p>{SYSTEM_REQUIREMENTS.os}</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200">
              <span className="font-bold text-[#0B1739] block mb-1">Processor</span>
              <p>{SYSTEM_REQUIREMENTS.processor}</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200">
              <span className="font-bold text-[#0B1739] block mb-1">System Memory (RAM)</span>
              <p>{SYSTEM_REQUIREMENTS.ram}</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200">
              <span className="font-bold text-[#0B1739] block mb-1">Storage</span>
              <p>{SYSTEM_REQUIREMENTS.storage}</p>
            </div>
          </div>

          <div className="mt-4 p-4 rounded-2xl bg-[#F0FDFA] border border-[#99F6E4] text-xs text-[#0F766E]">
            <strong>Supported Counter Hardware:</strong> {SYSTEM_REQUIREMENTS.peripherals}
          </div>
        </div>

      </div>
    </div>
  );
}
