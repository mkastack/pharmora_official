"use client";

import { Monitor, Globe, Check, X, HelpCircle } from "lucide-react";

export default function ComparisonTable() {
  const comparisonRows = [
    {
      feature: "Primary Use Case",
      desktop: "Front-desk counter sales, high-speed dispensing & cashiering",
      web: "Owner management, inventory audits, approvals & reports",
    },
    {
      feature: "Installation Needed?",
      desktop: "Yes (Windows 10/11 .exe)",
      web: "No (Direct Browser Access)",
    },
    {
      feature: "Hardware Drivers (ESC/POS & Cash Drawers)",
      desktop: "Direct Driver Integration (Zero Lag)",
      web: "Browser Print Dialogue",
    },
    {
      feature: "Works Offline Without Internet?",
      desktop: "Yes — Complete Offline Cashiering",
      web: "Requires Internet Connection",
    },
    {
      feature: "Barcode Scanning Performance",
      desktop: "Sub-millisecond instant hardware hook",
      web: "Standard browser input speed",
    },
    {
      feature: "Mobile & Tablet Access",
      desktop: "Windows PC / Laptop only",
      web: "Any Device (iOS, Android, Mac, PC)",
    },
    {
      feature: "Multi-Branch Consolidated Dashboard",
      desktop: "Branch-specific workspace",
      web: "Unified Multi-Location Group View",
    },
    {
      feature: "Automatic Software Updates",
      desktop: "Silent background patcher",
      web: "Continuous cloud deployment",
    },
  ];

  return (
    <section className="py-20 bg-[#F8FAFC] border-t border-b border-[#E6EAEF]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCFBF1] text-[11px] font-bold uppercase tracking-wider text-[#0F766E] mb-3">
            Architectural Synergy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1739] tracking-tight leading-tight mb-4">
            Desktop vs. Web Comparison <br />
            <span className="gradient-text-teal">Engineered to complement each other.</span>
          </h2>
          <p className="text-base text-[#667085]">
            Pharmora gives you the precision of a native desktop POS combined with the freedom of modern cloud management.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="rounded-3xl bg-white border border-[#E6EAEF] shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E6EAEF] bg-slate-50/70">
                  <th className="py-5 px-6 text-sm font-bold text-[#0B1739] w-1/3">
                    Capability / Feature
                  </th>
                  <th className="py-5 px-6 text-sm font-extrabold text-white bg-[#042F2E] w-1/3">
                    <div className="flex items-center gap-2">
                      <Monitor className="w-4 h-4 text-teal-400" />
                      <span>Pharmora Desktop (.exe)</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-sm font-extrabold text-[#0F766E] bg-[#F0FDFA] w-1/3">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-[#0D9488]" />
                      <span>Pharmora Web Platform</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6EAEF] text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/40"}
                  >
                    <td className="py-4 px-6 font-semibold text-[#0B1739]">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-[#43516A] font-medium bg-[#042F2E]/05">
                      {row.desktop}
                    </td>
                    <td className="py-4 px-6 text-[#43516A] font-medium bg-[#F0FDFA]/60">
                      {row.web}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
