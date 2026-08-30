"use client";

import { ShieldCheck, Lock, UserCheck, Database, KeyRound, Eye } from "lucide-react";
import { MOCK_ROLES } from "@/lib/data";

export default function SecuritySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCFBF1] text-[11px] font-bold uppercase tracking-wider text-[#0F766E] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Healthcare Governance
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0B1739] tracking-tight leading-tight mb-4">
            Serious pharmacy software needs <br />
            <span className="gradient-text-teal">serious protection.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#667085]">
            Protect patient medication histories, control price discounts, and maintain an immutable digital paper trail for every transaction.
          </p>
        </div>

        {/* Security Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-[#E6EAEF] hover:border-[#99F6E4] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#CCFBF1] text-[#0D9488] flex items-center justify-center mb-6">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0B1739] mb-3">Role-Based Access Control</h3>
            <p className="text-xs sm:text-sm text-[#43516A] leading-relaxed">
              Enforce strict privilege boundaries. Cashiers cannot modify purchase costs or delete stock logs, while Superintendents retain clinical oversight.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-[#E6EAEF] hover:border-[#99F6E4] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#CCFBF1] text-[#0D9488] flex items-center justify-center mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0B1739] mb-3">Immutable Audit Stamping</h3>
            <p className="text-xs sm:text-sm text-[#43516A] leading-relaxed">
              Every prescription dispensed, discount applied, cash-drop performed, and inventory adjustment is cryptographically time-stamped with the operator ID.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-[#E6EAEF] hover:border-[#99F6E4] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#CCFBF1] text-[#0D9488] flex items-center justify-center mb-6">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0B1739] mb-3">Encrypted Cloud Backups</h3>
            <p className="text-xs sm:text-sm text-[#43516A] leading-relaxed">
              Automated multi-region database backups secured with AES-256 encryption. Restore your entire pharmacy records in minutes if local hardware is lost.
            </p>
          </div>
        </div>

        {/* Live Interactive RBAC Matrix Widget */}
        <div className="rounded-3xl border border-[#99F6E4] bg-[#F0FDFA]/70 p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-[#0B1739]">
                Live Role Permission Matrix Preview
              </h3>
              <p className="text-xs text-[#667085]">
                Fine-tuned operational control across counter and administrative staff.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-white border border-[#99F6E4] text-xs font-mono font-bold text-[#0F766E]">
              RBAC ENGINE v2.4
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm bg-white rounded-2xl border border-[#E6EAEF] overflow-hidden">
              <thead className="bg-[#F8FAFC] border-b border-[#E6EAEF] text-[#0B1739] font-bold">
                <tr>
                  <th className="p-4">Operational Privilege</th>
                  <th className="p-4 text-center">Cashier</th>
                  <th className="p-4 text-center">Dispensing Tech</th>
                  <th className="p-4 text-center">Pharmacist</th>
                  <th className="p-4 text-center text-[#0D9488]">Owner / Super Admin</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6EAEF] text-xs">
                {MOCK_ROLES.map((role) => (
                  <tr key={role.role} className="hover:bg-slate-50">
                    <td className="p-4 font-semibold text-[#0B1739]">{role.title}</td>
                    <td className="p-4 text-center">
                      <span className="text-[#0D9488] font-bold">
                        {role.permissions[0]?.allowed ? "✓ Yes" : "—"}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-[#0D9488] font-bold">
                        {role.permissions[1]?.allowed ? "✓ Yes" : "—"}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-[#0D9488] font-bold">
                        {role.permissions[2]?.allowed ? "✓ Yes" : "—"}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-[#0D9488] font-bold text-base">✓</span>
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
