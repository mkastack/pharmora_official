"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import {
  MEGA_MENU_PRODUCTS,
  MEGA_MENU_SOLUTIONS,
  MEGA_MENU_RESOURCES,
} from "@/lib/data";
import {
  ChevronDown,
  Menu,
  X,
  Monitor,
  Globe,
  DownloadCloud,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Building2,
  PackageCheck,
  Receipt,
  FileCheck2,
  Users,
  CreditCard,
  TrendingUp,
  Truck,
  Store,
  Layers,
  Hospital,
  ShoppingBag,
  HelpCircle,
  Activity,
  Smartphone,
} from "lucide-react";
import { PHARMORA_CONSOLE_URL, PHARMORA_WEB_APP_URL } from "@/lib/utils";

const ICON_MAP: Record<string, React.ElementType> = {
  Building2,
  PackageCheck,
  Receipt,
  FileCheck2,
  Users,
  CreditCard,
  TrendingUp,
  Truck,
  Monitor,
  Globe,
  Store,
  Layers,
  Hospital,
  ShoppingBag,
  DownloadCloud,
  Sparkles,
  HelpCircle,
  Activity,
  Smartphone,
};

const MEGA_MENU_PLATFORMS = [
  {
    title: "Pharmora Desktop",
    description: "High-speed counter POS for Windows 10 & 11 with receipt and barcode hardware support.",
    href: "/desktop",
    icon: Monitor,
    badge: "Windows .exe",
    external: false,
  },
  {
    title: "Pharmora Web Platform",
    description: "Cloud management console accessible from any modern web browser worldwide.",
    href: PHARMORA_WEB_APP_URL,
    icon: Globe,
    badge: "Browser",
    external: true,
  },
  {
    title: "Mobile Apps (User & Rider)",
    description: "Customer medicine delivery app and Rider dispatch app with instant QR installation.",
    href: "/#mobile-apps",
    icon: Smartphone,
    badge: "Android & iOS · QR",
    external: false,
  },
  {
    title: "Download Center",
    description: "Official installer hub for desktop and mobile releases, system specs & guides.",
    href: "/downloads",
    icon: DownloadCloud,
    badge: "All Releases",
    external: false,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-[18px] border-b border-[#E6EAEF] shadow-[0_4px_20px_rgba(15,23,42,0.05)] py-3.5"
          : "bg-white/80 backdrop-blur-md border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 xl:gap-6">
        {/* Left: Logo */}
        <div className="flex-shrink-0 min-w-max mr-2 sm:mr-3 xl:mr-6">
          <Logo size="md" />
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 flex-shrink-0">
          {/* Product Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("product")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() =>
                setActiveDropdown(activeDropdown === "product" ? null : "product")
              }
              className={`whitespace-nowrap flex items-center gap-1 xl:gap-1.5 px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-xl text-[13px] xl:text-[14px] font-medium transition-all ${
                activeDropdown === "product"
                  ? "text-[#0D9488] bg-[#F0FDFA]"
                  : "text-[#43516A] hover:text-[#0B1739] hover:bg-slate-50"
              }`}
              aria-expanded={activeDropdown === "product"}
            >
              <span>Product</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === "product" ? "rotate-180 text-[#0D9488]" : "text-[#98A2B3]"
                }`}
              />
            </button>

            {/* Product Mega Menu Modal/Flyout (Positioned Safely to avoid left clipping) */}
            {activeDropdown === "product" && (
              <div
                className="absolute top-full -left-12 lg:-left-24 mt-2 w-[680px] lg:w-[720px] rounded-2xl bg-white border border-[#99F6E4]/80 shadow-[0_24px_60px_rgba(15,23,42,0.14)] p-6 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                onMouseEnter={() => handleMouseEnter("product")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E6EAEF]">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#0D9488]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
                      Core Pharmacy Suite
                    </span>
                  </div>
                  <Link
                    href="/features"
                    className="text-xs font-semibold text-[#0F766E] hover:text-[#0D9488] flex items-center gap-1 group"
                  >
                    View All Features
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {MEGA_MENU_PRODUCTS.map((item) => {
                    const IconComponent = ICON_MAP[item.icon] || PackageCheck;
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F0FDFA] border border-transparent hover:border-[#99F6E4] transition-all duration-150"
                      >
                        <div className="p-2 rounded-lg bg-[#F8FAFC] group-hover:bg-white text-[#0D9488] shadow-sm border border-slate-100 group-hover:border-[#99F6E4] transition-colors">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[13.5px] font-semibold text-[#0B1739] group-hover:text-[#0D9488] transition-colors">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#CCFBF1] text-[#0F766E]">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[12px] text-[#667085] line-clamp-1 mt-0.5 leading-snug">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Bottom Callout Banner */}
                <div className="mt-4 pt-3 border-t border-[#E6EAEF] flex items-center justify-between bg-gradient-to-r from-[#F0FDFA] to-[#E6FAF6] -mx-6 -mb-6 p-4 rounded-b-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0D9488]/15 flex items-center justify-center text-[#0F766E]">
                      <Monitor className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0B1739]">
                        Looking for the Windows Desktop Application?
                      </p>
                      <p className="text-[11px] text-[#667085]">
                        High-frequency counter operations with barcode & receipt printer support.
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/downloads"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#0D9488] text-white hover:bg-[#0F766E] shadow-sm transition-colors"
                  >
                    Download .exe
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("solutions")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() =>
                setActiveDropdown(activeDropdown === "solutions" ? null : "solutions")
              }
              className={`whitespace-nowrap flex items-center gap-1 xl:gap-1.5 px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-xl text-[13px] xl:text-[14px] font-medium transition-all ${
                activeDropdown === "solutions"
                  ? "text-[#0D9488] bg-[#F0FDFA]"
                  : "text-[#43516A] hover:text-[#0B1739] hover:bg-slate-50"
              }`}
            >
              <span>Solutions</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === "solutions" ? "rotate-180 text-[#0D9488]" : "text-[#98A2B3]"
                }`}
              />
            </button>

            {activeDropdown === "solutions" && (
              <div
                className="absolute top-full left-0 mt-2 w-[440px] rounded-2xl bg-white border border-[#99F6E4]/80 shadow-[0_24px_60px_rgba(15,23,42,0.14)] p-4 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                onMouseEnter={() => handleMouseEnter("solutions")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="space-y-1">
                  {MEGA_MENU_SOLUTIONS.map((item) => {
                    const IconComponent = ICON_MAP[item.icon] || Store;
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#F0FDFA] border border-transparent hover:border-[#99F6E4] transition-all"
                      >
                        <div className="p-2 rounded-lg bg-[#F8FAFC] group-hover:bg-white text-[#0D9488] shadow-sm border border-slate-100 group-hover:border-[#99F6E4] transition-colors">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[13.5px] font-semibold text-[#0B1739] group-hover:text-[#0D9488]">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#CCFBF1] text-[#0F766E]">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[12px] text-[#667085] mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Platforms Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("platforms")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() =>
                setActiveDropdown(activeDropdown === "platforms" ? null : "platforms")
              }
              className={`whitespace-nowrap flex items-center gap-1 xl:gap-1.5 px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-xl text-[13px] xl:text-[14px] font-medium transition-all ${
                activeDropdown === "platforms"
                  ? "text-[#0D9488] bg-[#F0FDFA]"
                  : "text-[#43516A] hover:text-[#0B1739] hover:bg-slate-50"
              }`}
            >
              <span>Platforms</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === "platforms" ? "rotate-180 text-[#0D9488]" : "text-[#98A2B3]"
                }`}
              />
            </button>

            {activeDropdown === "platforms" && (
              <div
                className="absolute top-full left-0 mt-2 w-[420px] rounded-2xl bg-white border border-[#99F6E4]/80 shadow-[0_24px_60px_rgba(15,23,42,0.14)] p-3.5 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                onMouseEnter={() => handleMouseEnter("platforms")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="space-y-1">
                  {MEGA_MENU_PLATFORMS.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F0FDFA] border border-transparent hover:border-[#99F6E4] transition-all"
                      >
                        <div className="p-2 rounded-lg bg-[#F8FAFC] group-hover:bg-white text-[#0D9488] shadow-sm border border-slate-100 group-hover:border-[#99F6E4]">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[13.5px] font-semibold text-[#0B1739] group-hover:text-[#0D9488]">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#CCFBF1] text-[#0F766E]">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11.5px] text-[#667085] mt-0.5 line-clamp-1">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Apps Link */}
          <Link
            href="/#mobile-apps"
            className={`whitespace-nowrap flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 xl:py-2 rounded-xl text-[13px] xl:text-[14px] font-medium transition-all ${
              pathname === "/download/user" || pathname === "/download/rider"
                ? "text-[#0D9488] bg-[#F0FDFA]"
                : "text-[#43516A] hover:text-[#0B1739] hover:bg-slate-50"
            }`}
          >
            <span>Mobile Apps</span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#CCFBF1] text-[#0F766E] border border-[#99F6E4]/70 leading-none">
              QR
            </span>
          </Link>

          {/* Pricing */}
          <Link
            href="/pricing"
            className={`whitespace-nowrap px-2.5 xl:px-3 py-1.5 xl:py-2 rounded-xl text-[13px] xl:text-[14px] font-medium transition-all ${
              pathname === "/pricing"
                ? "text-[#0D9488] bg-[#F0FDFA]"
                : "text-[#43516A] hover:text-[#0B1739] hover:bg-slate-50"
            }`}
          >
            Pricing
          </Link>

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("resources")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() =>
                setActiveDropdown(activeDropdown === "resources" ? null : "resources")
              }
              className={`whitespace-nowrap flex items-center gap-1 xl:gap-1.5 px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-xl text-[13px] xl:text-[14px] font-medium transition-all ${
                activeDropdown === "resources"
                  ? "text-[#0D9488] bg-[#F0FDFA]"
                  : "text-[#43516A] hover:text-[#0B1739] hover:bg-slate-50"
              }`}
            >
              <span>Resources</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === "resources" ? "rotate-180 text-[#0D9488]" : "text-[#98A2B3]"
                }`}
              />
            </button>

            {activeDropdown === "resources" && (
              <div
                className="absolute top-full right-0 mt-2 w-[380px] rounded-2xl bg-white border border-[#99F6E4]/80 shadow-[0_24px_60px_rgba(15,23,42,0.14)] p-3.5 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                onMouseEnter={() => handleMouseEnter("resources")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="space-y-1">
                  {MEGA_MENU_RESOURCES.map((item) => {
                    const IconComponent = ICON_MAP[item.icon] || HelpCircle;
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F0FDFA] border border-transparent hover:border-[#99F6E4] transition-all"
                      >
                        <div className="p-2 rounded-lg bg-[#F8FAFC] group-hover:bg-white text-[#0D9488] shadow-sm border border-slate-100 group-hover:border-[#99F6E4]">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[13.5px] font-semibold text-[#0B1739] group-hover:text-[#0D9488]">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#CCFBF1] text-[#0F766E]">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11.5px] text-[#667085] mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* WhatsApp Specialist Quick Row */}
                <div className="mt-2 pt-2 border-t border-slate-100">
                  <a
                    href="https://wa.me/233257966923?text=Hello%2C%20I%20would%20like%20to%20speak%20with%20a%20Pharmora%20specialist."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 text-emerald-800 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold">
                      <span className="text-base">💬</span>
                      <span>Speak with a Specialist</span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-700 bg-white px-2 py-0.5 rounded-md border border-emerald-200">
                      WhatsApp
                    </span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right: Actions / CTAs */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 flex-shrink-0">
          {/* Sign In — external redirect to Pharmora Console */}
          <a
            href={PHARMORA_CONSOLE_URL}
            rel="noopener noreferrer"
            className="whitespace-nowrap flex items-center px-2.5 xl:px-3 py-1.5 text-xs xl:text-[13.5px] font-semibold text-[#43516A] hover:text-[#0D9488] transition-colors"
          >
            <span>Sign In</span>
          </a>

          {/* Use Online — external redirect to Pharmora Console */}
          <a
            href={PHARMORA_CONSOLE_URL}
            rel="noopener noreferrer"
            className="whitespace-nowrap flex items-center gap-1.5 px-3 xl:px-3.5 py-1.5 rounded-xl text-xs xl:text-[13px] font-semibold text-[#0F766E] bg-[#F0FDFA] hover:bg-[#CCFBF1] border border-[#99F6E4] hover:border-[#5EEAD4] transition-all duration-200 shadow-sm"
          >
            <span>Use Online</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Download App Main Button */}
          <Link
            href="/downloads"
            className="whitespace-nowrap relative group flex items-center gap-1.5 px-3 xl:px-3.5 py-1.5 rounded-xl text-xs xl:text-[13px] font-semibold text-white bg-gradient-to-r from-[#0D9488] to-[#0F766E] hover:from-[#0F766E] hover:to-[#0D9488] shadow-md shadow-[#0D9488]/20 hover:shadow-lg hover:shadow-[#0D9488]/30 active:scale-[0.98] transition-all duration-200"
          >
            <DownloadCloud className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            <span>Download App</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-[#43516A] hover:text-[#0B1739] hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Sheet */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bottom-0 bg-gradient-to-b from-[#041D1A] via-[#042F2E] to-[#052827] z-40 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300 border-t border-teal-900/60">
          <div className="flex flex-col space-y-5 p-5 pb-16">

            {/* Primary Mobile Quick CTAs */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <Link
                href="/downloads"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#0D9488] to-[#0F766E] shadow-lg shadow-[#0D9488]/30 text-center active:scale-[0.97] transition-all"
              >
                <DownloadCloud className="w-4 h-4" />
                <span>Download App</span>
              </Link>
              <a
                href={PHARMORA_CONSOLE_URL}
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl text-sm font-bold text-teal-300 bg-teal-950/80 border border-teal-500/40 text-center active:scale-[0.97] transition-all"
              >
                <Globe className="w-4 h-4" />
                <span>Use Online</span>
              </a>
            </div>

            {/* Navigation Links Group */}
            <div className="space-y-1 pt-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-teal-500/70 px-3 mb-3">
                Navigation
              </p>
              <Link
                href="/features"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-teal-900/40 text-white font-medium border border-transparent hover:border-teal-800/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-950/80 border border-teal-800/60 flex items-center justify-center">
                    <PackageCheck className="w-4 h-4 text-teal-400" />
                  </div>
                  <span className="text-sm">All Features</span>
                </div>
                <ArrowRight className="w-4 h-4 text-teal-600" />
              </Link>

              <Link
                href="/desktop"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-teal-900/40 text-white font-medium border border-transparent hover:border-teal-800/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-950/80 border border-teal-800/60 flex items-center justify-center">
                    <Monitor className="w-4 h-4 text-teal-400" />
                  </div>
                  <span className="text-sm">Desktop App (Windows)</span>
                </div>
                <ArrowRight className="w-4 h-4 text-teal-600" />
              </Link>

              <Link
                href="/#mobile-apps"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-teal-900/40 text-white font-medium border border-transparent hover:border-teal-800/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-950/80 border border-teal-800/60 flex items-center justify-center">
                    <Smartphone className="w-4 h-4 text-teal-400" />
                  </div>
                  <span className="text-sm">Mobile Apps (User & Rider)</span>
                </div>
                <ArrowRight className="w-4 h-4 text-teal-600" />
              </Link>

              <a
                href={PHARMORA_WEB_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-teal-900/40 text-white font-medium border border-transparent hover:border-teal-800/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-950/80 border border-teal-800/60 flex items-center justify-center">
                    <Globe className="w-4 h-4 text-teal-400" />
                  </div>
                  <span className="text-sm">Web App Platform</span>
                </div>
                <ArrowRight className="w-4 h-4 text-teal-600" />
              </a>

              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-teal-900/40 text-white font-medium border border-transparent hover:border-teal-800/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-950/80 border border-teal-800/60 flex items-center justify-center">
                    <CreditCard className="w-4 h-4 text-teal-400" />
                  </div>
                  <span className="text-sm">Pricing & Plans</span>
                </div>
                <ArrowRight className="w-4 h-4 text-teal-600" />
              </Link>

              <Link
                href="/installation"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-teal-900/40 text-white font-medium border border-transparent hover:border-teal-800/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-950/80 border border-teal-800/60 flex items-center justify-center">
                    <DownloadCloud className="w-4 h-4 text-teal-400" />
                  </div>
                  <span className="text-sm">Installation Guide</span>
                </div>
                <ArrowRight className="w-4 h-4 text-teal-600" />
              </Link>

              <Link
                href="/release-notes"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-teal-900/40 text-white font-medium border border-transparent hover:border-teal-800/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-950/80 border border-teal-800/60 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-teal-400" />
                  </div>
                  <span className="text-sm">Release Notes (v1.0.0)</span>
                </div>
                <ArrowRight className="w-4 h-4 text-teal-600" />
              </Link>

              <Link
                href="/help"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-teal-900/40 text-white font-medium border border-transparent hover:border-teal-800/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-950/80 border border-teal-800/60 flex items-center justify-center">
                    <HelpCircle className="w-4 h-4 text-teal-400" />
                  </div>
                  <span className="text-sm">Help & Support</span>
                </div>
                <ArrowRight className="w-4 h-4 text-teal-600" />
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-teal-900/40 text-white font-medium border border-transparent hover:border-teal-800/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-950/80 border border-teal-800/60 flex items-center justify-center">
                    <Users className="w-4 h-4 text-teal-400" />
                  </div>
                  <span className="text-sm">Schedule Live Demo</span>
                </div>
                <ArrowRight className="w-4 h-4 text-teal-600" />
              </Link>
            </div>

            {/* Bottom WhatsApp CTA */}
            <div className="pt-2 border-t border-teal-900/50">
              <a
                href="https://wa.me/233257966923?text=Hello%2C%20I%20would%20like%20to%20speak%20with%20a%20Pharmora%20specialist."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 font-bold text-sm hover:bg-emerald-600/30 transition-all"
              >
                <span className="text-lg">💬</span>
                <span>Speak with a Specialist</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
