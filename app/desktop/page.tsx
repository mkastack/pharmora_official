import Link from "next/link";
import {
  Monitor,
  DownloadCloud,
  Zap,
  Printer,
  Barcode,
  WifiOff,
  Keyboard,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import CTASection from "@/components/CTASection";

export default function DesktopPage() {
  return (
    <div className="pt-28 pb-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950 text-teal-300 text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-teal-500/30">
            <Monitor className="w-4 h-4 text-teal-400" />
            Dedicated Windows Desktop Experience
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0B1739] tracking-tight leading-tight mb-4">
            Built for everyday pharmacy <br />
            <span className="gradient-text-teal">counter performance.</span>
          </h1>
          <p className="text-lg text-[#667085]">
            When queues stretch out the door, browsers can&apos;t match native desktop speed. Pharmora Desktop delivers zero-latency barcode scanning, offline cashiering, and direct hardware integration.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/downloads"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0D9488] hover:bg-[#0F766E] text-white font-bold text-sm shadow-md shadow-teal-600/20 transition-all"
            >
              <DownloadCloud className="w-4 h-4" />
              <span>Download for Windows (.exe)</span>
            </Link>
            <Link
              href="/installation"
              className="px-6 py-3.5 rounded-xl bg-[#F8FAFC] hover:bg-[#CCFBF1] border border-[#E6EAEF] text-xs font-bold text-[#0B1739] transition-colors"
            >
              View System Requirements
            </Link>
          </div>
        </div>

        {/* Desktop Superpowers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          
          <div className="p-8 rounded-3xl bg-[#042F2E] text-white border border-teal-500/20 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Sub-Millisecond POS Response</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              No browser tab crashing, memory leaks, or network lag. Built natively to execute transactions and search 10,000+ drug records instantly.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#042F2E] text-white border border-teal-500/20 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center mb-6">
              <Printer className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Direct ESC/POS Hardware Drivers</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Bypasses standard OS print preview dialogues. Communicates straight to USB/Ethernet thermal receipt printers (58mm/80mm) and automatic cash drawers.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#042F2E] text-white border border-teal-500/20 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center mb-6">
              <WifiOff className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">True Offline Cashier Mode</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Never halt counter sales when the internet goes down. Cash sales and barcode checkouts continue locally and automatically reconcile once connectivity resumes.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#042F2E] text-white border border-teal-500/20 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center mb-6">
              <Keyboard className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Ergonomic Keyboard Hotkeys</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              F2 for Drug Search, F4 for Prescription Lookup, F9 for Cash Checkout, F10 for Mobile Money, and F12 to reprint last receipt.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#042F2E] text-white border border-teal-500/20 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center mb-6">
              <Barcode className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">High-Frequency Barcode Guns</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Continuous scan buffer allows rapid medication bagging without needing to click into an active input field each time.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#042F2E] text-white border border-teal-500/20 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Automatic Silent Patching</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Background updates ensure your counter terminal always runs the latest security definitions and regulatory tax rules without interrupting staff.
            </p>
          </div>

        </div>

      </div>

      <CTASection />
    </div>
  );
}
