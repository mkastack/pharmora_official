"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Smartphone,
  ShieldCheck,
  Search,
  FileCheck2,
  CreditCard,
  Truck,
  BellRing,
  PackageCheck,
  Navigation,
  KeyRound,
  TrendingUp,
  Download,
  QrCode,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Info,
  X,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import {
  USER_APP_CONFIG,
  RIDER_APP_CONFIG,
  MobileAppConfig,
  trackAppDownloadEvent,
} from "@/lib/mobile-apps";
import QRCodeDisplay from "./QRCodeDisplay";
import MobileAppPhoneMockup from "./MobileAppPhoneMockup";

// Platform detection type
type ClientDevice = "android" | "ios" | "desktop" | "unknown";

function detectDevice(): ClientDevice {
  if (typeof window === "undefined") return "desktop";
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("android")) return "android";
  if (ua.includes("iphone") || ua.includes("ipad") || ua.includes("ipod")) return "ios";
  return "desktop";
}

// Icon mapping for feature bullets
const FEATURE_ICONS: Record<string, React.ElementType> = {
  ShieldCheck,
  Search,
  FileCheck2,
  CreditCard,
  Truck,
  BellRing,
  PackageCheck,
  Navigation,
  KeyRound,
  TrendingUp,
};

// SVG Platform Icons
function AndroidIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.996-3.4572c.156-.2701.063-.6153-.207-.7713-.27-.156-.615-.063-.771.207l-2.023 3.5042C15.348 8.2435 13.727 7.9 12 7.9c-1.727 0-3.348.3435-4.8825.9042L5.0945 5.3001c-.156-.27-.501-.363-.771-.207-.27.156-.363.5012-.207.7713l1.996 3.4572C2.688 11.2335.343 14.832.062 19h23.876c-.281-4.168-2.626-7.7665-6.0575-9.6786" />
    </svg>
  );
}

function AppleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.07 1.71-.93 2.73.99.08 2.01-.48 2.64-1.23" />
    </svg>
  );
}

export default function MobileAppsSection() {
  const [device, setDevice] = useState<ClientDevice>("desktop");
  const [activeTab, setActiveTab] = useState<"all" | "user" | "rider">("all");
  const [qrModalApp, setQrModalApp] = useState<MobileAppConfig | null>(null);

  useEffect(() => {
    const detected = detectDevice();
    setDevice(detected);
  }, []);

  const isPhone = device === "android" || device === "ios";

  const handleTabChange = (tab: "all" | "user" | "rider") => {
    setActiveTab(tab);
    trackAppDownloadEvent("mobile_tab_switched", {
      platform: device,
      targetTab: tab,
    });
  };

  return (
    <section
      id="mobile-apps"
      className="py-24 lg:py-32 bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-white relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0D9488]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#059669]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CCFBF1] border border-[#99F6E4] text-xs font-mono font-bold text-[#0F766E] uppercase tracking-wider mb-4 shadow-sm">
            <Smartphone className="w-3.5 h-3.5 text-[#0D9488]" />
            Pharmora on Mobile
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0B1739] tracking-tight leading-tight mb-4">
            Get the Pharmora App
          </h2>
          <p className="text-base sm:text-lg text-[#43516A] max-w-2xl mx-auto leading-relaxed">
            Choose the app you need and scan the QR code to install Pharmora on your device.
          </p>

          {/* Top Tab Selector */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm">
            <button
              onClick={() => handleTabChange("all")}
              type="button"
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === "all"
                  ? "bg-[#0B1739] text-white shadow-sm"
                  : "text-[#667085] hover:text-[#0B1739]"
              }`}
            >
              All Mobile Apps
            </button>
            <button
              onClick={() => handleTabChange("user")}
              type="button"
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === "user"
                  ? "bg-[#0D9488] text-white shadow-sm"
                  : "text-[#667085] hover:text-[#0D9488]"
              }`}
            >
              For Customers
            </button>
            <button
              onClick={() => handleTabChange("rider")}
              type="button"
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === "rider"
                  ? "bg-[#059669] text-white shadow-sm"
                  : "text-[#667085] hover:text-[#059669]"
              }`}
            >
              For Delivery Partners
            </button>
          </div>
        </div>

        {/* The Two Main Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Pharmora User App (For Customers) */}
          {(activeTab === "all" || activeTab === "user") && (
            <div className="group relative rounded-3xl p-6 sm:p-8 lg:p-10 bg-white border border-[#E2E8F0] shadow-[0_12px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_24px_60px_rgba(13,148,136,0.14)] hover:border-[#99F6E4] transition-all duration-300 flex flex-col justify-between overflow-hidden">
              
              {/* Subtle Corner Background Glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#0D9488]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Header Badge Strip */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-9 h-9 rounded-xl bg-[#F0FDFA] border border-[#99F6E4] flex items-center justify-center text-[#0D9488]">
                      <Smartphone className="w-5 h-5" />
                    </span>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#CCFBF1] text-[#0F766E] border border-[#99F6E4]">
                        {USER_APP_CONFIG.badgeLabel}
                      </span>
                    </div>
                  </div>
                  
                  <span className="text-xs font-mono font-bold text-[#667085] bg-slate-100 px-2.5 py-1 rounded-lg">
                    {USER_APP_CONFIG.version}
                  </span>
                </div>

                {/* Title & Taglines */}
                <h3 className="text-2xl sm:text-3xl font-black text-[#0B1739] tracking-tight mb-2">
                  {USER_APP_CONFIG.name}
                </h3>
                <p className="text-sm sm:text-base font-bold text-[#0D9488] mb-3">
                  &ldquo;{USER_APP_CONFIG.tagline}&rdquo;
                </p>
                <p className="text-sm text-[#43516A] leading-relaxed mb-6">
                  {USER_APP_CONFIG.description}
                </p>

                {/* Mobile Mockup + QR Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center my-6 py-4 bg-slate-50/80 rounded-2xl p-4 border border-slate-100">
                  {/* Phone Mockup */}
                  <div className="flex justify-center">
                    <MobileAppPhoneMockup appType="user" />
                  </div>

                  {/* QR Code Container (Prominent on desktop) */}
                  <div className="flex flex-col items-center justify-center p-2 text-center">
                    <QRCodeDisplay
                      smartUrl={USER_APP_CONFIG.smartRoute}
                      appTitle={USER_APP_CONFIG.name}
                      subPrompt="Scan with your phone camera"
                      accentColor="#0D9488"
                      size={188}
                      onScanTrack={() =>
                        trackAppDownloadEvent("user_app_qr_opened", { platform: device })
                      }
                    />
                    <p className="text-[12px] font-medium text-[#43516A] mt-3 max-w-[200px]">
                      {USER_APP_CONFIG.qrScanPrompt}
                    </p>
                  </div>
                </div>

                {/* Small Feature Bullets */}
                <div className="space-y-2.5 my-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#667085]">
                    Included Features
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#0B1739]">
                    {USER_APP_CONFIG.features.map((feat) => {
                      const IconComp = FEATURE_ICONS[feat.iconName] || CheckCircle2;
                      return (
                        <div
                          key={feat.title}
                          className="flex items-start gap-2 p-2 rounded-xl bg-white border border-slate-100 shadow-sm"
                        >
                          <IconComp className="w-4 h-4 text-[#0D9488] flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-[#0B1739] block leading-tight">
                              {feat.title}
                            </span>
                            <span className="text-[11px] text-[#667085] leading-snug">
                              {feat.description}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Direct Store Download Action Buttons */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  {/* Android Button */}
                  <a
                    href={USER_APP_CONFIG.android.url || "#"}
                    onClick={() =>
                      trackAppDownloadEvent("user_android_download_clicked", {
                        platform: device,
                        target: USER_APP_CONFIG.android.url,
                      })
                    }
                    className={`relative flex items-center justify-center gap-3 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 active:scale-[0.98] shadow-sm ${
                      device === "android"
                        ? "bg-[#042F2E] text-white hover:bg-[#071F1B] ring-2 ring-[#0D9488] ring-offset-2 shadow-md"
                        : "bg-[#0B1739] text-white hover:bg-[#1E293B]"
                    }`}
                  >
                    <AndroidIcon className="w-5 h-5 text-emerald-400" />
                    <div className="text-left">
                      <div className="text-[10px] uppercase font-mono text-emerald-300 leading-none">
                        {device === "android" ? "Your Device · Android" : "Android"}
                      </div>
                      <div className="text-xs font-extrabold mt-0.5">
                        {USER_APP_CONFIG.android.label}
                      </div>
                    </div>
                  </a>

                  {/* iOS Button */}
                  <a
                    href={USER_APP_CONFIG.ios.url || "#"}
                    target={USER_APP_CONFIG.ios.url?.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackAppDownloadEvent("user_ios_download_clicked", {
                        platform: device,
                        target: USER_APP_CONFIG.ios.url,
                      })
                    }
                    className={`relative flex items-center justify-center gap-3 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 active:scale-[0.98] border ${
                      device === "ios"
                        ? "bg-[#0D9488] text-white hover:bg-[#0F766E] border-transparent ring-2 ring-[#0D9488] ring-offset-2 shadow-md"
                        : "bg-white text-[#0B1739] hover:bg-slate-50 border-slate-200 shadow-sm"
                    }`}
                  >
                    <AppleIcon className={`w-5 h-5 ${device === "ios" ? "text-white" : "text-slate-800"}`} />
                    <div className="text-left">
                      <div className={`text-[10px] uppercase font-mono leading-none ${device === "ios" ? "text-teal-100" : "text-[#667085]"}`}>
                        {device === "ios" ? "Your Device · iPhone" : "Apple iOS"}
                      </div>
                      <div className="text-xs font-extrabold mt-0.5">
                        {USER_APP_CONFIG.ios.label}
                      </div>
                    </div>
                  </a>

                </div>

                {/* Mobile QR trigger button for small screens */}
                {isPhone && (
                  <button
                    onClick={() => setQrModalApp(USER_APP_CONFIG)}
                    type="button"
                    className="w-full mt-3 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-[#0D9488] hover:bg-[#F0FDFA] rounded-xl transition-colors"
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    <span>View QR code to share with another device</span>
                  </button>
                )}

                <div className="mt-3 flex items-center justify-between text-[11px] text-[#667085]">
                  <span>{USER_APP_CONFIG.android.note}</span>
                  <span>{USER_APP_CONFIG.ios.note}</span>
                </div>
              </div>

            </div>
          )}

          {/* Card 2: Pharmora Rider App (For Delivery Partners) */}
          {(activeTab === "all" || activeTab === "rider") && (
            <div className="group relative rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#031B18] via-[#042824] to-[#021310] text-white border border-emerald-500/30 shadow-[0_12px_40px_rgba(5,46,43,0.3)] hover:shadow-[0_24px_60px_rgba(5,150,105,0.25)] hover:border-emerald-400/50 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              
              {/* Subtle Corner Background Glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Header Badge Strip */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-9 h-9 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <Truck className="w-5 h-5" />
                    </span>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                        {RIDER_APP_CONFIG.badgeLabel}
                      </span>
                    </div>
                  </div>
                  
                  <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-950 px-2.5 py-1 rounded-lg border border-emerald-800/40">
                    {RIDER_APP_CONFIG.version}
                  </span>
                </div>

                {/* Title & Taglines */}
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                  {RIDER_APP_CONFIG.name}
                </h3>
                <p className="text-sm sm:text-base font-bold text-emerald-400 mb-3">
                  &ldquo;{RIDER_APP_CONFIG.tagline}&rdquo;
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {RIDER_APP_CONFIG.description}
                </p>

                {/* Mobile Mockup + QR Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center my-6 py-4 bg-[#051C17]/90 rounded-2xl p-4 border border-emerald-500/20">
                  {/* Phone Mockup */}
                  <div className="flex justify-center">
                    <MobileAppPhoneMockup appType="rider" />
                  </div>

                  {/* QR Code Container */}
                  <div className="flex flex-col items-center justify-center p-2 text-center">
                    <QRCodeDisplay
                      smartUrl={RIDER_APP_CONFIG.smartRoute}
                      appTitle={RIDER_APP_CONFIG.name}
                      subPrompt="Scan with your phone camera"
                      accentColor="#059669"
                      size={188}
                      onScanTrack={() =>
                        trackAppDownloadEvent("rider_app_qr_opened", { platform: device })
                      }
                    />
                    <p className="text-[12px] font-medium text-emerald-200 mt-3 max-w-[200px]">
                      {RIDER_APP_CONFIG.qrScanPrompt}
                    </p>
                  </div>
                </div>

                {/* Small Feature Bullets */}
                <div className="space-y-2.5 my-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-400/80">
                    Rider Capabilities
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {RIDER_APP_CONFIG.features.map((feat) => {
                      const IconComp = FEATURE_ICONS[feat.iconName] || CheckCircle2;
                      return (
                        <div
                          key={feat.title}
                          className="flex items-start gap-2 p-2 rounded-xl bg-[#092722] border border-emerald-500/20 shadow-sm"
                        >
                          <IconComp className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-white block leading-tight">
                              {feat.title}
                            </span>
                            <span className="text-[11px] text-slate-300 leading-snug">
                              {feat.description}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Direct Store Download Action Buttons */}
              <div className="mt-6 pt-6 border-t border-emerald-900/40">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  {/* Android Rider Button */}
                  <a
                    href={RIDER_APP_CONFIG.android.url || "#"}
                    onClick={() =>
                      trackAppDownloadEvent("rider_android_download_clicked", {
                        platform: device,
                        target: RIDER_APP_CONFIG.android.url,
                      })
                    }
                    className={`relative flex items-center justify-center gap-3 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 active:scale-[0.98] shadow-sm ${
                      device === "android"
                        ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400 ring-2 ring-emerald-400 ring-offset-2 ring-offset-[#021310] shadow-md"
                        : "bg-emerald-600 text-white hover:bg-emerald-500"
                    }`}
                  >
                    <AndroidIcon className={`w-5 h-5 ${device === "android" ? "text-slate-950" : "text-white"}`} />
                    <div className="text-left">
                      <div className={`text-[10px] uppercase font-mono leading-none ${device === "android" ? "text-emerald-950 font-black" : "text-emerald-200"}`}>
                        {device === "android" ? "Your Device · Android" : "Android"}
                      </div>
                      <div className="text-xs font-extrabold mt-0.5">
                        {RIDER_APP_CONFIG.android.label}
                      </div>
                    </div>
                  </a>

                  {/* iOS Rider Button (Coming Soon / Disabled) */}
                  <div
                    className="relative flex items-center justify-center gap-3 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm border border-emerald-800/60 bg-[#07241F] text-slate-400 cursor-not-allowed opacity-85"
                  >
                    <AppleIcon className="w-5 h-5 text-slate-500" />
                    <div className="text-left">
                      <div className="text-[10px] uppercase font-mono text-emerald-400/70 leading-none">
                        iOS · TestFlight
                      </div>
                      <div className="text-xs font-extrabold text-slate-300 mt-0.5">
                        {RIDER_APP_CONFIG.ios.label} ({RIDER_APP_CONFIG.ios.badgeText})
                      </div>
                    </div>
                  </div>

                </div>

                {/* Mobile QR trigger button for small screens */}
                {isPhone && (
                  <button
                    onClick={() => setQrModalApp(RIDER_APP_CONFIG)}
                    type="button"
                    className="w-full mt-3 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-950/60 rounded-xl transition-colors"
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    <span>View QR code to share with another device</span>
                  </button>
                )}

                <div className="mt-3 flex items-center justify-between text-[11px] text-emerald-300/70">
                  <span>{RIDER_APP_CONFIG.android.note}</span>
                  <span>{RIDER_APP_CONFIG.ios.note}</span>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>

      {/* Mobile QR Viewer Modal (if phone user wants to view/share QR) */}
      {qrModalApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl text-center">
            <button
              onClick={() => setQrModalApp(null)}
              type="button"
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#CCFBF1] text-[#0F766E] inline-block mb-2">
              {qrModalApp.badgeLabel}
            </span>
            <h3 className="text-xl font-bold text-[#0B1739] mb-1">
              {qrModalApp.name}
            </h3>
            <p className="text-xs text-[#667085] mb-4">
              Scan with a camera to install on another phone or tablet.
            </p>

            <div className="flex justify-center my-2">
              <QRCodeDisplay
                smartUrl={qrModalApp.smartRoute}
                appTitle={qrModalApp.name}
                subPrompt="Point camera to scan"
                size={210}
              />
            </div>

            <button
              onClick={() => setQrModalApp(null)}
              type="button"
              className="mt-5 w-full py-2.5 rounded-xl bg-[#0B1739] text-white font-bold text-xs hover:bg-[#1E293B] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
