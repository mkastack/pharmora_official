"use client";

import { useState } from "react";
import { TrendingUp, BarChart3, DollarSign, Package, Users, ArrowUpRight, ShieldCheck, Activity } from "lucide-react";

export default function AnalyticsSection() {
  const [metricTimeframe, setMetricTimeframe] = useState<"today" | "week" | "month">("month");

  return (
    <section className="py-24 bg-[#041D1A] text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#0D9488]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Activity className="w-3.5 h-3.5 text-teal-400" />
              Executive Business Intelligence
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-tight">
              Real-time telemetry <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-200 to-teal-300">
                for high-margin decisions.
              </span>
            </h2>
          </div>

          {/* Timeframe Selector */}
          <div className="flex items-center p-1 rounded-2xl bg-teal-950/80 border border-teal-500/30 text-xs font-mono">
            <button
              onClick={() => setMetricTimeframe("today")}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                metricTimeframe === "today" ? "bg-[#0D9488] text-white font-bold" : "text-slate-400 hover:text-white"
              }`}
            >
              Today
            </button>
            <button
              onClick={() => setMetricTimeframe("week")}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                metricTimeframe === "week" ? "bg-[#0D9488] text-white font-bold" : "text-slate-400 hover:text-white"
              }`}
            >
              This Week
            </button>
            <button
              onClick={() => setMetricTimeframe("month")}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                metricTimeframe === "month" ? "bg-[#0D9488] text-white font-bold" : "text-slate-400 hover:text-white"
              }`}
            >
              This Month
            </button>
          </div>
        </div>

        {/* 4 KPI Telemetry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <div className="p-6 rounded-3xl bg-[#042F2E] border border-teal-500/20 shadow-lg">
            <div className="flex items-center justify-between text-teal-300 text-xs font-mono mb-2">
              <span>GROSS REVENUE</span>
              <span className="text-teal-400 font-bold flex items-center">
                +24.8% <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono mb-1">
              GH₵ 84,290.00
            </p>
            <p className="text-xs text-slate-400">Across 3 Active Registers</p>
          </div>

          <div className="p-6 rounded-3xl bg-[#042F2E] border border-teal-500/20 shadow-lg">
            <div className="flex items-center justify-between text-teal-300 text-xs font-mono mb-2">
              <span>AVG GROSS MARGIN</span>
              <span className="text-teal-400 font-bold flex items-center">
                +3.2% <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono mb-1">
              34.6%
            </p>
            <p className="text-xs text-slate-400">Generic substitution optimized</p>
          </div>

          <div className="p-6 rounded-3xl bg-[#042F2E] border border-teal-500/20 shadow-lg">
            <div className="flex items-center justify-between text-teal-300 text-xs font-mono mb-2">
              <span>RX DISPENSED</span>
              <span className="text-teal-400 font-bold flex items-center">
                1,842 Total
              </span>
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono mb-1">
              98.9%
            </p>
            <p className="text-xs text-slate-400">Zero Dispense Return Rate</p>
          </div>

          <div className="p-6 rounded-3xl bg-[#042F2E] border border-teal-500/20 shadow-lg">
            <div className="flex items-center justify-between text-teal-300 text-xs font-mono mb-2">
              <span>INVENTORY VELOCITY</span>
              <span className="text-teal-400 font-bold flex items-center">
                Optimal
              </span>
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono mb-1">
              18.4 Days
            </p>
            <p className="text-xs text-slate-400">Stock turnover duration</p>
          </div>

        </div>

        {/* Detailed Graph & Top Drugs Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sales Trends Chart Representation */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-[#042F2E] border border-teal-500/20 shadow-xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-teal-900/60 text-xs font-mono">
              <span className="text-teal-300 font-bold">HOURLY DISPENSING VOLUME & REVENUE CURVE</span>
              <span className="text-slate-400">PEAK: 11:30 AM & 6:00 PM</span>
            </div>

            {/* Visual Bar Chart Mockup */}
            <div className="h-48 flex items-end gap-2 sm:gap-4 pt-8">
              {[
                { time: "8am", val: 30, rev: "1.2k" },
                { time: "9am", val: 55, rev: "2.8k" },
                { time: "10am", val: 78, rev: "4.5k" },
                { time: "11am", val: 95, rev: "6.9k" },
                { time: "12pm", val: 82, rev: "5.4k" },
                { time: "1pm", val: 60, rev: "3.8k" },
                { time: "2pm", val: 70, rev: "4.2k" },
                { time: "3pm", val: 75, rev: "4.9k" },
                { time: "4pm", val: 88, rev: "5.8k" },
                { time: "5pm", val: 92, rev: "6.5k" },
                { time: "6pm", val: 100, rev: "7.8k" },
                { time: "7pm", val: 65, rev: "4.1k" },
              ].map((bar) => (
                <div key={bar.time} className="flex-1 flex flex-col items-center gap-1.5 group">
                  <div className="w-full bg-teal-950/80 rounded-t-lg h-36 flex items-end justify-center p-1">
                    <div
                      className="w-full bg-gradient-to-t from-[#0D9488] to-[#14B8A6] rounded-t group-hover:brightness-125 transition-all"
                      style={{ height: `${bar.val}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">{bar.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Selling Therapeutics List */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-[#042F2E] border border-teal-500/20 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-teal-900/60 text-xs font-mono text-teal-300 font-bold">
              <span>TOP DISPENSED MEDS</span>
              <span>TURNOVER</span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center py-1">
                <div>
                  <p className="font-bold text-white">Amoxicillin + Clavulanic 625mg</p>
                  <p className="text-[10.5px] text-slate-400">Antibiotics · 340 packs</p>
                </div>
                <span className="text-teal-300 font-mono font-bold">GH₵ 15,300</span>
              </div>

              <div className="flex justify-between items-center py-1">
                <div>
                  <p className="font-bold text-white">Artemether + Lumefantrine</p>
                  <p className="text-[10.5px] text-slate-400">Antimalarials · 280 packs</p>
                </div>
                <span className="text-teal-300 font-mono font-bold">GH₵ 12,600</span>
              </div>

              <div className="flex justify-between items-center py-1">
                <div>
                  <p className="font-bold text-white">Amlodipine 10mg Tablets</p>
                  <p className="text-[10.5px] text-slate-400">Cardiovascular · 210 packs</p>
                </div>
                <span className="text-teal-300 font-mono font-bold">GH₵ 8,400</span>
              </div>

              <div className="flex justify-between items-center py-1">
                <div>
                  <p className="font-bold text-white">Metformin 500mg SR</p>
                  <p className="text-[10.5px] text-slate-400">Diabetes Care · 195 packs</p>
                </div>
                <span className="text-teal-300 font-mono font-bold">GH₵ 6,825</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

