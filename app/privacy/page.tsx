import Link from "next/link";
import { ShieldCheck, Lock, CheckCircle2 } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-24 bg-white">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCFBF1] text-xs font-mono font-bold text-[#0F766E] uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
            Healthcare Data Protection
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1739] tracking-tight mb-2">
            Privacy & Data Security Policy
          </h1>
          <p className="text-xs text-[#667085]">
            Last updated: August 2026 · Applies to Pharmora Desktop & Web platforms
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm text-[#43516A] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B1739]">1. Our Core Commitment to Pharmacy Privacy</h2>
            <p>
              Pharmora (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) provides operational software for pharmacies, dispensaries, and health retailers. We recognize that patient health records, drug prescription histories, and pharmacy business metrics represent highly sensitive information. We design our software systems to ensure data confidentiality, integrity, and strict access governance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B1739]">2. Patient Health Information & Clinical Data Ownership</h2>
            <p>
              All patient records, medical prescriptions, allergen logs, and doctor verification histories entered into your Pharmora workspace remain the sole property of your pharmacy or healthcare establishment. We do not sell, rent, or monetize patient records to third-party pharmaceutical advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B1739]">3. Data Encryption in Transit and at Rest</h2>
            <p>
              Data synchronized between Pharmora Desktop terminals and our cloud servers is encrypted using industry-standard TLS 1.3 cryptographic protocols. Stored cloud backups are secured with AES-256 encryption.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B1739]">4. Role-Based Access Enforcement</h2>
            <p>
              Pharmora enforces granular Role-Based Access Controls (RBAC). Only designated pharmacy personnel can access patient medication profiles or managerial revenue reports according to privileges established by the Pharmacy Owner.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B1739]">5. Data Portability & Retention</h2>
            <p>
              You may export your complete medication catalog, transaction receipts, and customer directories at any time in standard CSV/Excel or JSON formats.
            </p>
          </section>

          <div className="pt-8 border-t border-slate-200 text-xs text-slate-500">
            For privacy inquiries, reach our Data Governance Officer at <span className="text-[#0D9488] font-mono">privacy@pharmora.com</span>.
          </div>
        </div>

      </div>
    </div>
  );
}
