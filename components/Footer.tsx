import Link from "next/link";
import Logo from "./Logo";
import { DownloadCloud, Globe, ShieldCheck, Mail, Phone, MapPin, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1739] text-white pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800">
          
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              The modern pharmacy operating system. Engineered for high-speed counter dispensing, batch expiry control, and unified cloud governance.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-teal-400 font-mono">
                Windows 10 & 11 .exe
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-teal-400 font-mono">
                Web Cloud Architecture
              </span>
            </div>
          </div>

          {/* Col 2: Product & Modules */}
          <div className="space-y-3 text-xs sm:text-sm">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider text-teal-400">
              Product Capabilities
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <Link href="/features#inventory" className="hover:text-white transition-colors">
                  Inventory & Batch Expiry
                </Link>
              </li>
              <li>
                <Link href="/features#orders" className="hover:text-white transition-colors">
                  High-Speed Barcode POS
                </Link>
              </li>
              <li>
                <Link href="/features#prescriptions" className="hover:text-white transition-colors">
                  Digital Prescription Review
                </Link>
              </li>
              <li>
                <Link href="/features#customers" className="hover:text-white transition-colors">
                  Patient Health Records
                </Link>
              </li>
              <li>
                <Link href="/features#payments" className="hover:text-white transition-colors">
                  Mobile Money & Insurance
                </Link>
              </li>
              <li>
                <Link href="/features#analytics" className="hover:text-white transition-colors">
                  Financial Telemetry
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Platforms & Access */}
          <div className="space-y-3 text-xs sm:text-sm">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider text-teal-400">
              Platforms
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <Link href="/desktop" className="hover:text-white transition-colors">
                  Pharmora for Windows
                </Link>
              </li>
              <li>
                <Link href="/web" className="hover:text-white transition-colors">
                  Pharmora Web Platform
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="hover:text-white transition-colors">
                  Download Center (.exe)
                </Link>
              </li>
              <li>
                <Link href="/installation" className="hover:text-white transition-colors">
                  Installation Guide
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Subscription Plans
                </Link>
              </li>
              <li>
                <Link href="/release-notes" className="hover:text-white transition-colors">
                  Changelog (v1.0.0)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Support & Governance */}
          <div className="space-y-3 text-xs sm:text-sm">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider text-teal-400">
              Support & Company
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <Link href="/help" className="hover:text-white transition-colors">
                  Help Center & FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Request Live Demo
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy & Data Security
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/help#status" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-teal-400" />
                  <span>Cloud Systems: Operational</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} Pharmora Platform Technologies Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/privacy" className="hover:text-slate-300">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-slate-300">
              Terms
            </Link>
            <span>·</span>
            <Link href="/help" className="hover:text-slate-300">
              Security
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
