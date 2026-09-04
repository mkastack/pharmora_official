"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { notFound, useSearchParams } from "next/navigation";
import {
  Smartphone,
  ShieldCheck,
  Truck,
  Download,
  ArrowLeft,
  ExternalLink,
  QrCode,
  CheckCircle2,
  Info,
  Layers,
  Sparkles,
  Search,
} from "lucide-react";
import {
  MOBILE_APPS_MAP,
  sanitizeSource,
  trackAppDownloadEvent,
  MobileAppConfig,
} from "@/lib/mobile-apps";
import QRCodeDisplay from "@/components/QRCodeDisplay";
import MobileAppPhoneMockup from "@/components/MobileAppPhoneMockup";
import Logo from "@/components/Logo";

interface PageProps {
  params: Promise<{ appId: string }>;
}

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

export default function SmartDownloadPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const searchParams = useSearchParams();
  const rawAppId = resolvedParams.appId?.toLowerCase();

  const appConfig: MobileAppConfig | undefined =
    rawAppId === "user" || rawAppId === "customer"
      ? MOBILE_APPS_MAP.user
      : rawAppId === "rider" || rawAppId === "driver"
      ? MOBILE_APPS_MAP.rider
      : undefined;

  const [detectedPlatform, setDetectedPlatform] = useState<"android" | "ios" | "desktop">("desktop");
  const [redirecting, setRedirecting] = useState<boolean>(false);
  const [redirectTarget, setRedirectTarget] = useState<string>("");

  const sourceTag = sanitizeSource(searchParams.get("source"));

  useEffect(() => {
    if (!appConfig) return;

    const ua = navigator.userAgent.toLowerCase();
    const isAndroid = ua.includes("android");
    const isIOS = ua.includes("iphone") || ua.includes("ipad") || ua.includes("ipod");

    // Track landing visit
    trackAppDownloadEvent("download_route_visited", {
      app: appConfig.id,
      platform: isAndroid ? "android" : isIOS ? "ios" : "desktop",
      source: sourceTag,
    });

    if (isAndroid) {
      setDetectedPlatform("android");
      const target = appConfig.android.url;
      if (target && appConfig.android.status !== "UNAVAILABLE") {
        setRedirecting(true);
        setRedirectTarget(target);
        // Short lightweight delay so user sees brief confirmation
        const timer = setTimeout(() => {
          window.location.href = target;
        }, 650);
        return () => clearTimeout(timer);
      }
    } else if (isIOS) {
      setDetectedPlatform("ios");
      const target = appConfig.ios.url;
      if (target && appConfig.ios.status !== "UNAVAILABLE" && appConfig.ios.status !== "COMING_SOON") {
        setRedirecting(true);
        setRedirectTarget(target);
        const timer = setTimeout(() => {
          window.location.href = target;
        }, 650);
        return () => clearTimeout(timer);
      }
    } else {
      setDetectedPlatform("desktop");
    }
  }, [appConfig, sourceTag]);

  if (!appConfig) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 text-center">
        <Logo size="md" />
        <h1 className="text-2xl font-black text-[#0B1739] mt-6 mb-2">App Not Found</h1>
        <p className="text-sm text-[#667085] max-w-sm mb-6">
          Please select one of the official Pharmora mobile applications below:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/download/user"
            className="px-5 py-2.5 rounded-xl bg-[#0D9488] text-white font-bold text-sm shadow hover:bg-[#0F766E]"
          >
            Pharmora User App
          </Link>
          <Link
            href="/download/rider"
            className="px-5 py-2.5 rounded-xl bg-[#059669] text-white font-bold text-sm shadow hover:bg-[#047857]"
          >
            Pharmora Rider App
          </Link>
        </div>
        <Link href="/" className="mt-8 text-xs font-semibold text-slate-500 hover:text-slate-800">
          ← Back to Pharmora Home
        </Link>
      </div>
    );
  }

  const isRider = appConfig.id === "rider";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0FDFA] via-[#F8FAFC] to-white text-[#0B1739] flex flex-col justify-between">
      
      {/* Top Bar */}
      <header className="py-6 px-4 sm:px-8 border-b border-[#E6EAEF] bg-white/80 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <Logo size="md" />
          <Link
            href="/#mobile-apps"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#667085] hover:text-[#0D9488] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Apps</span>
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-[1100px] mx-auto px-4 py-12 sm:py-16 w-full">
        
        {/* If auto-redirecting mobile visitor */}
        {redirecting && (
          <div className="mb-8 p-4 rounded-2xl bg-[#CCFBF1] border border-[#99F6E4] text-[#0F766E] text-center flex items-center justify-center gap-3 animate-pulse">
            <div className="w-4 h-4 rounded-full border-2 border-[#0D9488] border-t-transparent animate-spin" />
            <span className="text-xs sm:text-sm font-bold">
              Redirecting to official {detectedPlatform === "android" ? "Android" : "iOS"} destination…
            </span>
          </div>
        )}

        {/* Central Card */}
        <div
          className={`rounded-3xl p-6 sm:p-10 border shadow-xl ${
            isRider
              ? "bg-[#041F1A] text-white border-emerald-500/30"
              : "bg-white text-[#0B1739] border-[#E2E8F0]"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: App Information & Buttons (6 cols) */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2">
                <span
                  className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                    isRider
                      ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                      : "bg-[#CCFBF1] text-[#0F766E] border-[#99F6E4]"
                  }`}
                >
                  {appConfig.badgeLabel}
                </span>
                <span
                  className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-md ${
                    isRider ? "bg-emerald-950 text-emerald-300" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {appConfig.version}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                {appConfig.name}
              </h1>

              <p
                className={`text-base sm:text-lg font-bold ${
                  isRider ? "text-emerald-400" : "text-[#0D9488]"
                }`}
              >
                &ldquo;{appConfig.tagline}&rdquo;
              </p>

              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  isRider ? "text-slate-300" : "text-[#43516A]"
                }`}
              >
                {appConfig.description}
              </p>

              {/* Marketing Source Badge */}
              {sourceTag && sourceTag !== "website" && (
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono ${
                    isRider
                      ? "bg-emerald-950/80 text-emerald-300 border border-emerald-800/40"
                      : "bg-slate-100 text-slate-700 border border-slate-200"
                  }`}
                >
                  <span>Campaign Source:</span>
                  <strong className="uppercase">{sourceTag}</strong>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  {/* Android Option */}
                  <a
                    href={appConfig.android.url || "#"}
                    onClick={() =>
                      trackAppDownloadEvent(
                        isRider ? "rider_android_download_clicked" : "user_android_download_clicked",
                        { source: sourceTag, target: appConfig.android.url }
                      )
                    }
                    className={`flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all active:scale-[0.98] ${
                      isRider
                        ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                        : "bg-[#0B1739] text-white hover:bg-[#1E293B]"
                    }`}
                  >
                    <AndroidIcon className="w-5 h-5" />
                    <div className="text-left">
                      <div className="text-[10px] uppercase font-mono leading-none opacity-80">
                        For Android
                      </div>
                      <div className="text-xs font-black mt-0.5">
                        {appConfig.android.label}
                      </div>
                    </div>
                  </a>

                  {/* iOS Option */}
                  {appConfig.ios.status === "COMING_SOON" ? (
                    <div
                      className={`flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl font-bold text-sm border opacity-75 cursor-not-allowed ${
                        isRider
                          ? "bg-[#07241F] text-slate-400 border-emerald-800/50"
                          : "bg-slate-50 text-slate-400 border-slate-200"
                      }`}
                    >
                      <AppleIcon className="w-5 h-5" />
                      <div className="text-left">
                        <div className="text-[10px] uppercase font-mono leading-none">iOS App</div>
                        <div className="text-xs font-bold mt-0.5">Coming Soon</div>
                      </div>
                    </div>
                  ) : (
                    <a
                      href={appConfig.ios.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackAppDownloadEvent(
                          isRider ? "rider_ios_download_clicked" : "user_ios_download_clicked",
                          { source: sourceTag, target: appConfig.ios.url }
                        )
                      }
                      className={`flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl font-bold text-sm border shadow-sm transition-all active:scale-[0.98] ${
                        isRider
                          ? "bg-emerald-950 text-emerald-200 hover:bg-emerald-900 border-emerald-700"
                          : "bg-[#0D9488] text-white hover:bg-[#0F766E] border-transparent"
                      }`}
                    >
                      <AppleIcon className="w-5 h-5" />
                      <div className="text-left">
                        <div className="text-[10px] uppercase font-mono leading-none opacity-80">
                          For iPhone / iPad
                        </div>
                        <div className="text-xs font-black mt-0.5">
                          {appConfig.ios.label}
                        </div>
                      </div>
                    </a>
                  )}

                </div>

                <p
                  className={`text-xs ${
                    isRider ? "text-emerald-300/80" : "text-[#667085]"
                  }`}
                >
                  {appConfig.android.note} &middot; {appConfig.ios.note}
                </p>
              </div>

              {/* Security Note */}
              <div
                className={`flex items-start gap-2.5 p-3 rounded-xl text-xs ${
                  isRider
                    ? "bg-[#072822] border border-emerald-800/40 text-slate-300"
                    : "bg-[#F0FDFA] border border-[#99F6E4] text-[#0F766E]"
                }`}
              >
                <ShieldCheck className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  Official release signed and distributed by Pharmora Health Technologies. Verified for secure healthcare transactions.
                </span>
              </div>
            </div>

            {/* Right: Phone Mockup Image + Programmatic QR Code (6 cols) */}
            <div
              className={`lg:col-span-6 rounded-2xl p-6 border flex flex-col sm:flex-row items-center justify-center gap-6 ${
                isRider
                  ? "bg-[#051C17]/90 border-emerald-500/20"
                  : "bg-slate-50/80 border-slate-200/60"
              }`}
            >
              {/* Phone Mockup Image */}
              <div className="flex-1 flex justify-center w-full max-w-[210px] sm:max-w-[240px]">
                <MobileAppPhoneMockup appType={appConfig.id} priority />
              </div>

              {/* QR Code Container */}
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <div className="mb-3">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider block ${
                      isRider ? "text-emerald-300 font-extrabold" : "text-[#0D9488]"
                    }`}
                  >
                    Scan with Phone Camera
                  </span>
                  <p
                    className={`text-xs mt-0.5 max-w-[180px] ${
                      isRider ? "text-slate-300" : "text-[#667085]"
                    }`}
                  >
                    Point your camera to download {appConfig.name} directly.
                  </p>
                </div>

                <QRCodeDisplay
                  smartUrl={appConfig.smartRoute}
                  appTitle={appConfig.name}
                  subPrompt="Instant mobile install"
                  accentColor={isRider ? "#059669" : "#0D9488"}
                  size={176}
                />

                <p
                  className={`text-[11px] mt-3 font-mono ${
                    isRider ? "text-emerald-300/70" : "text-[#667085]"
                  }`}
                >
                  {appConfig.smartRoute}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Switcher: Looking for the other app? */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#667085] mb-2">
            Looking for {isRider ? "the Customer Shopping App?" : "the Delivery Rider App?"}
          </p>
          <Link
            href={isRider ? "/download/user" : "/download/rider"}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#0D9488] hover:underline"
          >
            <span>Switch to {isRider ? "Pharmora for Customers" : "Pharmora Rider"}</span>
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>

      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-[#E6EAEF] bg-white text-center text-xs text-[#667085]">
        <p>&copy; {new Date().getFullYear()} Pharmora. Official Mobile App Distribution.</p>
      </footer>

    </div>
  );
}
