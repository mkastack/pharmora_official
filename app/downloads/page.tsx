"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  DownloadCloud,
  Globe,
  Monitor,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  ChevronDown,
  X,
  Info,
  ExternalLink,
  ArrowRight,
  Smartphone,
  QrCode,
} from "lucide-react";
import { SYSTEM_REQUIREMENTS, RELEASE_HISTORY } from "@/lib/data";
import {
  PHARMORA_CONSOLE_URL,
  PHARMORA_DOWNLOAD_URL,
  PHARMORA_MACOS_URL,
  PHARMORA_LINUX_APPIMAGE_URL,
  PHARMORA_LINUX_DEB_URL,
} from "@/lib/utils";

// ─────────────────────────────────────────────────────────────────────────────
// Types & helpers
// ─────────────────────────────────────────────────────────────────────────────

type Platform = "windows" | "macos" | "linux" | "browser" | "unknown";
type DownloadState = "idle" | "preparing" | "started";

function detectOS(): Platform {
  if (typeof window === "undefined") return "unknown";
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("win")) return "windows";
  if (ua.includes("mac")) return "macos";
  if (ua.includes("linux") || ua.includes("x11")) return "linux";
  return "browser";
}

// ─────────────────────────────────────────────────────────────────────────────
// Platform icons
// ─────────────────────────────────────────────────────────────────────────────

const WindowsIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 88 88" fill="currentColor">
    <path d="M0 12.402l35.687-4.86.016 34.423-35.67.203zm35.67 33.529l.028 34.453L.028 75.48.001 45.728zm4.326-39.027L87.914 0v41.525l-47.918.3zm47.919 38.647L88 88l-48.004-6.787-.03-34.629z" />
  </svg>
);

const AppleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
  </svg>
);

const LinuxIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// Install Help
// ─────────────────────────────────────────────────────────────────────────────

const INSTALL_HELP: Record<Platform, { title: string; steps: string[] }> = {
  windows: {
    title: "Installing Pharmora on Windows",
    steps: [
      "Download the PharmoraSetup.exe installer.",
      "Open the file from your Downloads folder.",
      "If Windows SmartScreen appears, click 'More info → Run anyway'.",
      "Follow the on-screen setup wizard.",
      "Launch Pharmora from the desktop shortcut.",
      "Sign in with your Pharmora pharmacy account.",
    ],
  },
  macos: {
    title: "Installing Pharmora on macOS",
    steps: [
      "Download the Pharmora.dmg file.",
      "Open the DMG from your Downloads folder.",
      "Drag Pharmora into your Applications folder.",
      "Open Pharmora from Applications or Launchpad.",
      "If Gatekeeper prompts you, go to System Settings → Privacy & Security → 'Open Anyway'.",
      "Sign in with your Pharmora pharmacy account.",
    ],
  },
  linux: {
    title: "Installing Pharmora on Linux",
    steps: [
      "AppImage: Download the .AppImage file.",
      "Make it executable: chmod +x Pharmora.AppImage",
      "Run: ./Pharmora.AppImage",
      "DEB: Download the .deb package.",
      "Install: sudo dpkg -i pharmora.deb",
      "Launch Pharmora from your application menu.",
      "Sign in with your Pharmora pharmacy account.",
    ],
  },
  browser: {
    title: "Using Pharmora in Your Browser",
    steps: [
      "Open Chrome, Safari, Firefox, or Edge.",
      "Visit pharmora-console.vercel.app",
      "Sign in with your Pharmora pharmacy account.",
      "Bookmark the page for quick access.",
      "No installation required.",
    ],
  },
  unknown: {
    title: "Getting Started with Pharmora",
    steps: [
      "Pick a platform that matches your computer.",
      "Download the installer, or use the browser version.",
      "Sign in with your Pharmora pharmacy account.",
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────

export default function DownloadsPage() {
  const [detectedOS, setDetectedOS] = useState<Platform>("unknown");
  const [winState, setWinState] = useState<DownloadState>("idle");
  const [linuxMenuOpen, setLinuxMenuOpen] = useState(false);
  const [helpPlatform, setHelpPlatform] = useState<Platform | null>(null);

  useEffect(() => {
    setDetectedOS(detectOS());
  }, []);

  const handleWindowsDownload = () => {
    if (winState !== "idle") return;
    setWinState("preparing");
    setTimeout(() => {
      setWinState("started");
      const link = document.createElement("a");
      link.href = PHARMORA_DOWNLOAD_URL;
      link.setAttribute("download", "PharmoraSetup-v1.0.0.exe");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => setWinState("idle"), 4000);
    }, 1200);
  };

  const highlight = (os: Platform) =>
    detectedOS === os ? "ring-2 ring-[#0D9488] ring-offset-2" : "";

  const isBrowserRecommended = detectedOS === "browser" || detectedOS === "unknown";

  return (
    <div className="pt-28 pb-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CCFBF1] text-xs font-mono font-bold text-[#0F766E] uppercase tracking-wider mb-4">
            <Monitor className="w-4 h-4 text-[#0D9488]" />
            Official Download Center
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0B1739] tracking-tight leading-tight mb-4">
            Get Pharmora for your pharmacy
          </h1>
          <p className="text-lg text-[#667085]">
            Use Pharmora in your browser or install the desktop app for Windows, macOS, or Linux.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-16">

          {/* Windows */}
          <div className={`relative flex flex-col rounded-3xl border border-[#E6EAEF] bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${highlight("windows")}`}>
            {detectedOS === "windows" && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#0D9488] text-white text-[10px] font-bold whitespace-nowrap shadow">
                Recommended for your device
              </span>
            )}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] flex items-center justify-center text-[#1D4ED8]">
                <WindowsIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="font-extrabold text-[#0B1739]">Windows</p>
                <p className="text-xs text-[#667085]">Windows 10 / 11</p>
              </div>
            </div>
            <p className="text-[11px] text-[#98A2B3] font-mono mb-2">.exe installer</p>
            <p className="text-[11px] text-[#98A2B3] font-mono mb-5">v1.0.0 &middot; 64-bit (x64)</p>
            <button
              onClick={handleWindowsDownload}
              disabled={winState !== "idle"}
              className={`w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl font-bold text-sm transition-all duration-200 active:scale-[0.98] ${
                winState === "idle"
                  ? "bg-gradient-to-r from-[#0D9488] to-[#14B8A6] hover:from-[#0F766E] hover:to-[#0D9488] text-white shadow-md shadow-[#0D9488]/20"
                  : winState === "preparing"
                  ? "bg-teal-700 text-white cursor-wait"
                  : "bg-[#0D9488] text-white"
              }`}
            >
              {winState === "idle" && <><DownloadCloud className="w-4 h-4" />Download for Windows</>}
              {winState === "preparing" && <><span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />Preparing installer&hellip;</>}
              {winState === "started" && <><CheckCircle2 className="w-4 h-4 text-teal-200" />Download started ✓</>}
            </button>
            <button onClick={() => setHelpPlatform("windows")} className="mt-3 text-xs text-[#98A2B3] hover:text-[#0D9488] flex items-center justify-center gap-1 transition-colors">
              <Info className="w-3.5 h-3.5" />Installation help
            </button>
          </div>

          {/* macOS */}
          <div className={`relative flex flex-col rounded-3xl border border-[#E6EAEF] bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${highlight("macos")}`}>
            {detectedOS === "macos" && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#0D9488] text-white text-[10px] font-bold whitespace-nowrap shadow">
                Recommended for your device
              </span>
            )}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F5F5F7] flex items-center justify-center text-[#1D1D1F]">
                <AppleIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="font-extrabold text-[#0B1739]">macOS</p>
                <p className="text-xs text-[#667085]">macOS 12 or later</p>
              </div>
            </div>
            <p className="text-[11px] text-[#98A2B3] font-mono mb-2">
              {PHARMORA_MACOS_URL ? ".dmg installer" : "Coming soon"}
            </p>
            <p className="text-[11px] text-[#98A2B3] font-mono mb-5">Apple Silicon &amp; Intel</p>
            {PHARMORA_MACOS_URL ? (
              <a href={PHARMORA_MACOS_URL} className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-[#0D9488] to-[#14B8A6] hover:from-[#0F766E] hover:to-[#0D9488] text-white shadow-md shadow-[#0D9488]/20 transition-all duration-200 active:scale-[0.98]">
                <DownloadCloud className="w-4 h-4" />Download for macOS
              </a>
            ) : (
              <div className="w-full flex flex-col items-center justify-center gap-1 py-3.5 px-4 rounded-xl font-bold text-sm bg-[#F8FAFC] border border-dashed border-[#E6EAEF] text-[#98A2B3] cursor-not-allowed select-none">
                <span>Coming Soon</span>
                <span className="text-[10px] font-normal">macOS build in progress</span>
              </div>
            )}
            <button onClick={() => setHelpPlatform("macos")} className="mt-3 text-xs text-[#98A2B3] hover:text-[#0D9488] flex items-center justify-center gap-1 transition-colors">
              <Info className="w-3.5 h-3.5" />Installation help
            </button>
          </div>

          {/* Linux */}
          <div className={`relative flex flex-col rounded-3xl border border-[#E6EAEF] bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${highlight("linux")}`}>
            {detectedOS === "linux" && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#0D9488] text-white text-[10px] font-bold whitespace-nowrap shadow">
                Recommended for your device
              </span>
            )}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF7ED] flex items-center justify-center text-[#C2410C]">
                <LinuxIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="font-extrabold text-[#0B1739]">Linux</p>
                <p className="text-xs text-[#667085]">Most modern distros</p>
              </div>
            </div>
            <p className="text-[11px] text-[#98A2B3] font-mono mb-2">
              {(PHARMORA_LINUX_APPIMAGE_URL || PHARMORA_LINUX_DEB_URL) ? "AppImage &middot; DEB" : "Coming soon"}
            </p>
            <p className="text-[11px] text-[#98A2B3] font-mono mb-5">Ubuntu / Debian / Fedora</p>
            {(PHARMORA_LINUX_APPIMAGE_URL || PHARMORA_LINUX_DEB_URL) ? (
              <div className="relative">
                <button
                  onClick={() => setLinuxMenuOpen((v) => !v)}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-[#0D9488] to-[#14B8A6] hover:from-[#0F766E] hover:to-[#0D9488] text-white shadow-md shadow-[#0D9488]/20 transition-all duration-200 active:scale-[0.98]"
                >
                  <DownloadCloud className="w-4 h-4" />
                  Download for Linux
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${linuxMenuOpen ? "rotate-180" : ""}`} />
                </button>
                {linuxMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 w-full rounded-2xl bg-white border border-[#E6EAEF] p-2 shadow-xl z-20">
                    {PHARMORA_LINUX_APPIMAGE_URL && (
                      <a href={PHARMORA_LINUX_APPIMAGE_URL} onClick={() => setLinuxMenuOpen(false)} className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#F0FDFA] text-xs font-semibold text-[#0B1739] transition-colors">
                        <span>AppImage</span>
                        <span className="text-[#667085] font-normal">Most Linux distributions</span>
                      </a>
                    )}
                    {PHARMORA_LINUX_DEB_URL && (
                      <a href={PHARMORA_LINUX_DEB_URL} onClick={() => setLinuxMenuOpen(false)} className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#F0FDFA] text-xs font-semibold text-[#0B1739] transition-colors">
                        <span>DEB Package</span>
                        <span className="text-[#667085] font-normal">Ubuntu / Debian</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full flex flex-col items-center justify-center gap-1 py-3.5 px-4 rounded-xl font-bold text-sm bg-[#F8FAFC] border border-dashed border-[#E6EAEF] text-[#98A2B3] cursor-not-allowed select-none">
                <span>Coming Soon</span>
                <span className="text-[10px] font-normal">Linux build in progress</span>
              </div>
            )}
            <button onClick={() => setHelpPlatform("linux")} className="mt-3 text-xs text-[#98A2B3] hover:text-[#0D9488] flex items-center justify-center gap-1 transition-colors">
              <Info className="w-3.5 h-3.5" />Installation help
            </button>
          </div>

          {/* Browser */}
          <div className={`relative flex flex-col rounded-3xl border border-[#99F6E4] bg-[#F0FDFA] p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${isBrowserRecommended ? "ring-2 ring-[#0D9488] ring-offset-2" : ""}`}>
            {isBrowserRecommended && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#0D9488] text-white text-[10px] font-bold whitespace-nowrap shadow">
                Recommended for your device
              </span>
            )}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#99F6E4] flex items-center justify-center text-[#0D9488]">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <p className="font-extrabold text-[#0B1739]">Browser</p>
                <p className="text-xs text-[#0D9488]">No installation needed</p>
              </div>
            </div>
            <p className="text-[11px] text-[#0F766E] font-mono mb-2">Chrome &middot; Safari &middot; Firefox</p>
            <p className="text-[11px] text-[#0F766E] font-mono mb-5">Any modern browser</p>
            <a
              href={PHARMORA_CONSOLE_URL}
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl font-bold text-sm bg-[#0D9488] hover:bg-[#0F766E] text-white shadow-md shadow-[#0D9488]/20 transition-all duration-200 active:scale-[0.98]"
            >
              <Globe className="w-4 h-4" />
              Use Pharmora Online
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
            <button onClick={() => setHelpPlatform("browser")} className="mt-3 text-xs text-[#0F766E]/60 hover:text-[#0D9488] flex items-center justify-center gap-1 transition-colors">
              <Info className="w-3.5 h-3.5" />How to get started
            </button>
          </div>

        </div>

        {/* Mobile Apps Cross-Link Banner */}
        <div className="mb-14 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#042F2E] via-[#052827] to-[#041D1A] text-white border border-teal-500/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-400 flex-shrink-0">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-[10px] font-mono font-bold uppercase tracking-wider mb-1">
                <QrCode className="w-3 h-3" />
                Mobile Apps Available
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Looking for the Pharmora Customer or Rider Mobile Apps?
              </h3>
              <p className="text-xs sm:text-sm text-teal-200/80 mt-0.5">
                Install on Android and iOS using our camera QR codes and smart download routes.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0 w-full md:w-auto">
            <Link
              href="/#mobile-apps"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0D9488] hover:bg-[#0F766E] text-white font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              <span>View Mobile Apps &amp; QR Codes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-[#667085] mb-20">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
            Digitally signed &amp; verified
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
            Same account across all platforms
          </span>
          <Link href="/installation" className="flex items-center gap-1 text-[#0D9488] font-semibold hover:underline">
            Full installation guide <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* System Requirements */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-[#E6EAEF] bg-white p-8 sm:p-10 shadow-sm">
          <h3 className="text-xl font-extrabold text-[#0B1739] mb-6 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[#0D9488]" />
            Hardware &amp; System Compatibility
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

      {/* Install Help Modal */}
      {helpPlatform && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setHelpPlatform(null)}
        >
          <div
            className="relative w-full max-w-md rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-[#CDEFE3]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-extrabold text-lg text-[#0B1739]">
                {INSTALL_HELP[helpPlatform].title}
              </h3>
              <button
                onClick={() => setHelpPlatform(null)}
                className="p-1.5 rounded-full text-[#98A2B3] hover:text-[#0B1739] hover:bg-slate-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <ol className="space-y-3">
              {INSTALL_HELP[helpPlatform].steps.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-[#43516A]">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#CCFBF1] text-[#0F766E] font-bold text-[10px] flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6 pt-5 border-t border-[#E6EAEF] flex items-center justify-between">
              <a href={PHARMORA_CONSOLE_URL} rel="noopener noreferrer" className="text-xs font-semibold text-[#0D9488] hover:underline">
                Sign in after installing &rarr;
              </a>
              <button
                onClick={() => setHelpPlatform(null)}
                className="px-5 py-2 rounded-xl bg-[#0D9488] text-white font-bold text-xs hover:bg-[#0F766E] transition-colors"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
