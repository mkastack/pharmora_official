"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Play,
  CheckCircle2,
  ArrowRight,
  ArrowLeftRight,
  Sparkles,
  BarChart3,
  LayoutDashboard,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PHARMORA_WEB_APP_URL } from "@/lib/utils";
import DemoModal from "./DemoModal";

export default function Hero() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeView, setActiveView] = useState<"overview" | "analytics">("overview");

  return (
    <section className="relative pt-32 pb-20 lg:pt-38 lg:pb-32 overflow-hidden bg-white hero-atmosphere-glow">
      {/* Background Decorative Patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      
      {/* Soft Ambient Radiance */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full bg-[#0D9488]/15 blur-[100px] pointer-events-none" />
      <div className="absolute top-40 left-10 w-[450px] h-[450px] rounded-full bg-[#14B8A6]/10 blur-[90px] pointer-events-none" />

      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Group */}
        <div className="text-center max-w-4xl mx-auto mb-14 lg:mb-18">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CCFBF1] border border-[#99F6E4] shadow-sm mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D9488] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0D9488]" />
            </span>
            <span className="text-[12px] font-bold tracking-wider uppercase text-[#0F766E]">
              Pharmacy Operations, Reimagined
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[68px] font-extrabold text-[#0B1739] tracking-tight leading-[1.04] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Run your pharmacy{" "}
            <span className="gradient-text-teal">smarter</span> with Pharmora.
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#43516A] max-w-2xl mx-auto leading-relaxed mb-9 animate-in fade-in slide-in-from-bottom-5 duration-700">
            Manage inventory, prescriptions, orders, customers, payments and pharmacy operations through one beautifully connected platform — available on desktop or directly in your browser.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {/* Windows Desktop Download Button */}
            <Link
              href="/downloads"
              className="w-full sm:w-auto group relative flex items-center justify-center sm:justify-start gap-3.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#0D9488] to-[#0F766E] hover:from-[#0F766E] hover:to-[#0D9488] text-white shadow-[0_12px_30px_rgba(13,148,136,0.28)] hover:shadow-[0_16px_40px_rgba(13,148,136,0.38)] transition-all duration-200 active:scale-[0.98] border border-teal-400/30"
            >
              {/* Windows Icon */}
              <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" viewBox="0 0 88 88" fill="currentColor">
                  <path d="M0 12.402l35.687-4.86.016 34.423-35.67.203zm35.67 33.529l.028 34.453L.028 75.48.001 45.728zm4.326-39.027L87.914 0v41.525l-47.918.3zm47.919 38.647L88 88l-48.004-6.787-.03-34.629z"/>
                </svg>
              </div>

              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-[15px] font-bold">Download for Windows</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
                <span className="text-[11.5px] text-teal-100/90 font-medium block">
                  Windows 10/11 · 64-bit .exe
                </span>
              </div>
            </Link>

            {/* Web App Access Button */}
            <a
              href={PHARMORA_WEB_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-[15px] font-bold text-[#0F766E] bg-[#F0FDFA] hover:bg-[#CCFBF1] border border-[#99F6E4] hover:border-[#5EEAD4] transition-all duration-200 shadow-sm"
            >
              <Globe className="w-5 h-5 text-[#0D9488] transition-transform group-hover:rotate-12" />
              <span>Use Pharmora Online</span>
            </a>

            {/* Product Tour Modal Trigger */}
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-4 rounded-2xl text-[14.5px] font-semibold text-[#43516A] hover:text-[#0B1739] hover:bg-slate-100/80 transition-all duration-150"
            >
              <div className="w-7 h-7 rounded-full bg-slate-200/80 flex items-center justify-center text-[#0B1739]">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              <span>Watch Product Tour</span>
            </button>
          </div>

          {/* Micro Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-[#667085]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
              <span>Quick 2-minute setup</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
              <span>Secure pharmacy workspace</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
              <span>Unified Desktop + Web sync</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
              <span>Free 14-day full access</span>
            </div>
          </div>
        </div>

        {/* Hero Realistic Product Showcase Composition with Card Interchange Animation */}
        <div className="relative max-w-6xl mx-auto [perspective:1400px]">
          {/* Interactive Mode Control Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-1">
            <div className="inline-flex items-center p-1 sm:p-1.5 rounded-2xl bg-white/95 border border-[#CDEFE3] shadow-sm backdrop-blur-md">
              <button
                type="button"
                onClick={() => setActiveView("overview")}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeView === "overview"
                    ? "bg-[#0D9488] text-white shadow-md shadow-[#0D9488]/20"
                    : "text-[#43516A] hover:text-[#0B1739] hover:bg-[#F0FDFA]"
                }`}
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>Pharmacy Overview</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveView("analytics")}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeView === "analytics"
                    ? "bg-[#0D9488] text-white shadow-md shadow-[#0D9488]/20"
                    : "text-[#43516A] hover:text-[#0B1739] hover:bg-[#F0FDFA]"
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Performance Analytics</span>
              </button>
            </div>

            {/* Click to Flip Helper Button */}
            <button
              type="button"
              onClick={() => setActiveView((prev) => (prev === "overview" ? "analytics" : "overview"))}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F0FDFA] hover:bg-[#CCFBF1] border border-[#99F6E4] text-[#0F766E] text-xs font-bold transition-all shadow-sm active:scale-95 group"
            >
              <ArrowLeftRight className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 duration-300" />
              <span>
                Interchange View (Click to see {activeView === "overview" ? "Performance Analytics" : "Pharmacy Overview"})
              </span>
            </button>
          </div>

          {/* Outer Layer Card Frame - Click to Interchange */}
          <div
            onClick={() => setActiveView((prev) => (prev === "overview" ? "analytics" : "overview"))}
            className="group relative rounded-3xl p-2 sm:p-4 bg-gradient-to-b from-[#CDEFE3]/60 via-slate-100/50 to-white/90 shadow-[0_30px_90px_rgba(15,23,42,0.15)] border border-[#CDEFE3]/80 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-[#0D9488]/60 hover:shadow-[0_35px_100px_rgba(13,148,136,0.2)]"
            title="Click anywhere to interchange dashboard view"
          >
            {/* Main Application Window Container */}
            <div className="overflow-hidden rounded-2xl shadow-2xl bg-white relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeView}
                  initial={{ opacity: 0, scale: 0.98, rotateX: -3, y: 8 }}
                  animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, rotateX: 3, y: -8 }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full relative"
                >
                  <Image
                    src={activeView === "overview" ? "/pharx.png" : "/pharx1.png"}
                    alt={
                      activeView === "overview"
                        ? "Pharmora Pharmacy Overview Dashboard"
                        : "Pharmora Performance Analytics Dashboard"
                    }
                    width={1440}
                    height={900}
                    priority
                    className="block w-full h-auto object-cover select-none pointer-events-none"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Hover Badge Pill Overlay */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 pointer-events-none z-10 transition-transform duration-200 group-hover:scale-105">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 text-white backdrop-blur-md border border-white/20 text-[10.5px] sm:text-[11px] font-mono shadow-lg">
                  <ArrowLeftRight className="w-3.5 h-3.5 text-teal-300" />
                  <span>
                    Viewing: <strong className="text-teal-200">{activeView === "overview" ? "Overview" : "Analytics"}</strong> (Click to switch)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Tour / Demo Modal */}
      {isDemoModalOpen && (
        <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      )}
    </section>
  );
}


