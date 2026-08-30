"use client";

import { useState } from "react";
import {
  PackageCheck,
  AlertTriangle,
  Calendar,
  Sparkles,
  Search,
  CheckCircle2,
  TrendingDown,
  ShieldAlert,
  ArrowRight
} from "lucide-react";
import { MOCK_INVENTORY } from "@/lib/data";

export default function InventorySection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Antibiotics", "Analgesics", "Supplements", "Antidiabetic", "Gastrointestinal"];

  const filteredItems = selectedCategory === "All"
    ? MOCK_INVENTORY
    : MOCK_INVENTORY.filter(item => item.category === selectedCategory);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCFBF1] text-[11px] font-bold uppercase tracking-wider text-[#0F766E] mb-3">
              <PackageCheck className="w-3.5 h-3.5" />
              Automated Stock Intelligence
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0B1739] tracking-tight leading-tight">
              Know what&apos;s in stock <br />
              <span className="gradient-text-teal">before your customers ask.</span>
            </h2>
          </div>
          <p className="text-base text-[#667085] max-w-md">
            Never turn away a patient due to unrecorded stock-outs. Pharmora tracks lot batches, flags nearing expiries, and auto-generates supplier purchase orders.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#E6EAEF] hover:border-[#99F6E4] transition-all duration-200">
            <div className="w-10 h-10 rounded-2xl bg-[#CCFBF1] flex items-center justify-center text-[#0D9488] mb-4">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0B1739] mb-2">Automated Low-Stock Alarms</h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              Define minimum safety thresholds per dosage. The moment stock falls below limit, visual counters turn amber and supplier drafts are prepared.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#E6EAEF] hover:border-[#99F6E4] transition-all duration-200">
            <div className="w-10 h-10 rounded-2xl bg-[#CCFBF1] flex items-center justify-center text-[#0D9488] mb-4">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0B1739] mb-2">Batch & Expiry Quarantine</h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              Track manufacturing dates and FEFO (First-Expired, First-Out) rotation. The system physically prevents cashiers from ringing up expired lot codes.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#E6EAEF] hover:border-[#99F6E4] transition-all duration-200">
            <div className="w-10 h-10 rounded-2xl bg-[#CCFBF1] flex items-center justify-center text-[#0D9488] mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0B1739] mb-2">Multi-Branch Rebalance</h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              Transfer surplus stock between branches with automated dispatch slips and receiver verification to eliminate dead capital.
            </p>
          </div>

        </div>

        {/* Live Inventory Preview Card */}
        <div className="rounded-3xl bg-white border border-[#CDEFE3] shadow-lg p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#E6EAEF]">
            <div>
              <h4 className="font-extrabold text-lg text-[#0B1739]">
                Live Shelf Stock Status
              </h4>
              <p className="text-xs text-[#667085]">
                Intelligent color indicators: Green (Healthy), Amber (Low), Red (Critical Stockout Risk).
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? "bg-[#0D9488] text-white shadow-sm"
                      : "bg-[#F8FAFC] text-[#43516A] hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-100 mt-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-[#F2FBF8] px-3 rounded-xl transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-3 h-3 rounded-full flex-shrink-0 ${
                      item.status === "healthy"
                        ? "bg-[#0D9488]"
                        : item.status === "low"
                        ? "bg-amber-500"
                        : "bg-red-500 animate-pulse"
                    }`}
                  />
                  <div>
                    <span className="font-bold text-sm text-[#0B1739] block">
                      {item.name}
                    </span>
                    <span className="text-xs text-[#667085]">
                      {item.dosage} · Batch: {item.batch} · Expiry: {item.expiry}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-6 self-end sm:self-auto text-xs">
                  <div className="text-right">
                    <span className="font-bold font-mono text-sm text-[#0B1739] block">
                      {item.stock} Units
                    </span>
                    <span className="text-[11px] text-[#667085]">
                      Safety Min: {item.threshold}
                    </span>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full font-bold text-xs ${
                      item.status === "healthy"
                        ? "bg-[#CCFBF1] text-[#0F766E]"
                        : item.status === "low"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {item.status === "healthy"
                      ? "Healthy"
                      : item.status === "low"
                      ? "Low Stock"
                      : "Critical Stock"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

