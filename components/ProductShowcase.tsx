"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  Receipt,
  FileCheck2,
  Users,
  TrendingUp,
  Search,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Filter,
  CreditCard,
  Building2,
  ChevronRight,
  SlidersHorizontal,
  FileText
} from "lucide-react";
import { MOCK_INVENTORY, MOCK_ORDERS } from "@/lib/data";

type TabKey = "dashboard" | "inventory" | "orders" | "prescriptions" | "customers" | "analytics";

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<TabKey>("dashboard");
  const [inventorySearch, setInventorySearch] = useState("");
  const [inventoryFilter, setInventoryFilter] = useState<"all" | "low" | "critical">("all");

  const tabs: { id: TabKey; label: string; icon: React.ElementType }[] = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "inventory", label: "Inventory", icon: Package },
    { id: "orders", label: "Orders & POS", icon: Receipt },
    { id: "prescriptions", label: "Prescriptions", icon: FileCheck2 },
    { id: "customers", label: "Customers & CRM", icon: Users },
    { id: "analytics", label: "Analytics", icon: TrendingUp },
  ];

  const filteredInventory = MOCK_INVENTORY.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(inventorySearch.toLowerCase()) ||
                          item.batch.toLowerCase().includes(inventorySearch.toLowerCase());
    if (inventoryFilter === "all") return matchesSearch;
    return matchesSearch && item.status === inventoryFilter;
  });

  return (
    <section className="py-24 lg:py-32 bg-[#F8FAFC] border-t border-[#E6EAEF]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCFBF1] text-[11px] font-bold uppercase tracking-wider text-[#0F766E] mb-3">
            <LayoutDashboard className="w-3.5 h-3.5" />
            Interactive Product Tour
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0B1739] tracking-tight leading-tight mb-4">
            Everything your pharmacy needs. <br className="hidden sm:inline" />
            <span className="gradient-text-teal">Beautifully connected.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#667085]">
            Explore the live interface modules designed to eliminate manual bottlenecks, prevent medicine stock-outs, and ensure flawless patient dispensing.
          </p>
        </div>

        {/* Interactive Tab Navigation Bar */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-[#E6EAEF] shadow-sm">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-[#0D9488] text-white shadow-md shadow-[#0D9488]/25 scale-[1.02]"
                      : "text-[#43516A] hover:text-[#0B1739] hover:bg-slate-50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Showcase Screen Container */}
        <div className="rounded-3xl bg-white border border-[#99F6E4] shadow-xl overflow-hidden min-h-[580px] transition-all duration-300">
          
          {/* Top Mock Window Bar */}
          <div className="px-6 py-4 bg-[#F8FAFC] border-b border-[#E6EAEF] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-teal-400/80 inline-block" />
              </div>
              <span className="text-xs font-mono font-medium text-[#667085] ml-2">
                pharmora://workspace/module/{activeTab}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0F766E] bg-[#CCFBF1] px-2.5 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#0D9488] animate-pulse" />
              Live Workspace Sync
            </div>
          </div>

          {/* Dynamic Tab Content with Smooth Animation */}
          <div className="p-6 sm:p-8">
            
            {/* 1. DASHBOARD VIEW */}
            {activeTab === "dashboard" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                {/* Metric Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-[#F4FBF8] border border-[#CDEFE3]">
                    <div className="flex items-center justify-between text-xs text-[#667085] mb-2">
                      <span>Total Revenue (Today)</span>
                      <TrendingUp className="w-4 h-4 text-[#0D9488]" />
                    </div>
                    <div className="text-2xl font-extrabold text-[#0B1739] font-mono">
                      GH₵ 4,850.00
                    </div>
                    <span className="text-[11px] font-semibold text-[#0D9488]">
                      +18.4% vs same time last week
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center justify-between text-xs text-[#667085] mb-2">
                      <span>Total Orders Filled</span>
                      <Receipt className="w-4 h-4 text-[#0D9488]" />
                    </div>
                    <div className="text-2xl font-extrabold text-[#0B1739] font-mono">
                      56 Orders
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500">
                      Average basket: GH₵ 86.60
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                    <div className="flex items-center justify-between text-xs text-amber-700 mb-2">
                      <span>Low Stock Warnings</span>
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                    </div>
                    <div className="text-2xl font-extrabold text-amber-900 font-mono">
                      3 SKUs
                    </div>
                    <span className="text-[11px] font-semibold text-amber-700">
                      Automated PO drafted
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200">
                    <div className="flex items-center justify-between text-xs text-[#0F766E] mb-2">
                      <span>Prescriptions Pending</span>
                      <Clock className="w-4 h-4 text-[#0D9488]" />
                    </div>
                    <div className="text-2xl font-extrabold text-[#064e3b] font-mono">
                      4 Prescriptions
                    </div>
                    <span className="text-[11px] font-semibold text-[#0F766E]">
                      Pharmacist on duty: Dr. Mensah
                    </span>
                  </div>
                </div>

                {/* Dashboard Split View: Recent Sales & Live Alerts */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-8 p-5 rounded-2xl border border-[#E6EAEF] bg-white">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                      <h4 className="font-bold text-sm text-[#0B1739] flex items-center gap-2">
                        <Receipt className="w-4 h-4 text-[#0D9488]" />
                        Recent Completed Transactions
                      </h4>
                      <span className="text-xs text-[#667085]">Auto-refreshed 20s ago</span>
                    </div>

                    <div className="space-y-3">
                      {MOCK_ORDERS.slice(0, 3).map((order) => (
                        <div
                          key={order.id}
                          className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFC] border border-slate-100 hover:border-[#CDEFE3] transition-colors text-xs"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-mono font-bold text-[#0D9488]">
                              Rx
                            </div>
                            <div>
                              <p className="font-bold text-[#0B1739]">{order.customer}</p>
                              <p className="text-[11px] text-[#667085] font-mono">
                                {order.orderNumber} · {order.type}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-[#0B1739] font-mono">
                              GH₵ {order.amount.toFixed(2)}
                            </p>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#CCFBF1] text-[#0F766E] font-semibold">
                              Completed
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 p-5 rounded-2xl border border-[#E6EAEF] bg-white flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-[#0B1739] mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-500" />
                        Urgent Pharmacy Alerts
                      </h4>
                      <div className="space-y-2.5 text-xs">
                        <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800">
                          <p className="font-bold">Amoxicillin 500mg (12 left)</p>
                          <p className="text-[11px] text-amber-700 mt-0.5">
                            Stock fell below minimum threshold (25 units).
                          </p>
                        </div>
                        <div className="p-2.5 rounded-xl bg-[#F0FDFA] border border-[#99F6E4] text-[#0F766E]">
                          <p className="font-bold">Batch Expiry Safe</p>
                          <p className="text-[11px] text-[#0D9488] mt-0.5">
                            Zero expired medications found across all active shelves.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 text-center">
                      <span className="text-xs text-[#0D9488] font-bold hover:underline cursor-pointer">
                        Run Batch Compliance Audit →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. INVENTORY VIEW */}
            {activeTab === "inventory" && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                {/* Search & Filter Toolbar */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-3 border-b border-[#E6EAEF]">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#98A2B3]" />
                    <input
                      type="text"
                      value={inventorySearch}
                      onChange={(e) => setInventorySearch(e.target.value)}
                      placeholder="Search medication name, dosage strength, batch code..."
                      className="w-full pl-10 pr-4 py-2 rounded-xl border border-[#E6EAEF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setInventoryFilter("all")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                        inventoryFilter === "all"
                          ? "bg-[#0D9488] text-white"
                          : "bg-slate-100 text-[#43516A] hover:bg-slate-200"
                      }`}
                    >
                      All ({MOCK_INVENTORY.length})
                    </button>
                    <button
                      onClick={() => setInventoryFilter("low")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                        inventoryFilter === "low"
                          ? "bg-amber-500 text-white"
                          : "bg-amber-50 text-amber-800 hover:bg-amber-100"
                      }`}
                    >
                      Low Stock (2)
                    </button>
                    <button
                      onClick={() => setInventoryFilter("critical")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                        inventoryFilter === "critical"
                          ? "bg-red-500 text-white"
                          : "bg-red-50 text-red-800 hover:bg-red-100"
                      }`}
                    >
                      Critical (2)
                    </button>
                  </div>
                </div>

                {/* Inventory Table */}
                <div className="overflow-x-auto rounded-2xl border border-[#E6EAEF]">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#F8FAFC] text-[#667085] font-semibold border-b border-[#E6EAEF]">
                      <tr>
                        <th className="p-3.5">Medication Name</th>
                        <th className="p-3.5">Category</th>
                        <th className="p-3.5">Batch Code</th>
                        <th className="p-3.5">Expiry Date</th>
                        <th className="p-3.5">Current Units</th>
                        <th className="p-3.5">Status</th>
                        <th className="p-3.5 text-right">Unit Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredInventory.map((item) => (
                        <tr key={item.id} className="hover:bg-[#F2FBF8] transition-colors">
                          <td className="p-3.5">
                            <span className="font-bold text-[#0B1739] block">{item.name}</span>
                            <span className="text-[11px] text-[#667085]">{item.dosage}</span>
                          </td>
                          <td className="p-3.5 text-[#43516A]">{item.category}</td>
                          <td className="p-3.5 font-mono text-[11px] text-[#667085]">{item.batch}</td>
                          <td className="p-3.5 font-medium text-[#0B1739]">{item.expiry}</td>
                          <td className="p-3.5 font-bold font-mono text-[#0B1739]">
                            {item.stock} units
                          </td>
                          <td className="p-3.5">
                            {item.status === "healthy" && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#CCFBF1] text-[#0F766E] font-semibold text-[11px]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                                Healthy
                              </span>
                            )}
                            {item.status === "low" && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-semibold text-[11px]">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                Low Stock
                              </span>
                            )}
                            {item.status === "critical" && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-100 text-red-800 font-semibold text-[11px]">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                Critical
                              </span>
                            )}
                          </td>
                          <td className="p-3.5 text-right font-mono font-bold text-[#0B1739]">
                            GH₵ {item.price.toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 3. ORDERS VIEW (Kanban Simulation) */}
            {activeTab === "orders" && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center justify-between pb-3 border-b border-[#E6EAEF]">
                  <div>
                    <h4 className="font-bold text-sm text-[#0B1739]">
                      Active Order Dispensing Board (Kanban)
                    </h4>
                    <p className="text-xs text-[#667085]">
                      Real-time stage tracking for counter walk-ins and delivery orders.
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#0D9488] bg-[#CCFBF1] px-3 py-1 rounded-lg">
                    5 Active Orders
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                  {/* Column 1: New */}
                  <div className="p-3 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                    <div className="flex items-center justify-between text-xs font-bold text-[#0B1739] mb-2.5">
                      <span>New Request</span>
                      <span className="px-1.5 py-0.2 rounded bg-slate-200 text-slate-700">1</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[#CDEFE3] shadow-sm space-y-1 text-xs">
                      <div className="flex justify-between font-bold text-[#0B1739]">
                        <span>#PHM-4932</span>
                        <span className="text-[#0D9488]">GH₵ 185.00</span>
                      </div>
                      <p className="text-[11px] text-[#43516A]">Kwame Mensah</p>
                      <span className="inline-block text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                        Counter Walk-in
                      </span>
                    </div>
                  </div>

                  {/* Column 2: Processing */}
                  <div className="p-3 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                    <div className="flex items-center justify-between text-xs font-bold text-[#0B1739] mb-2.5">
                      <span>Dispensing</span>
                      <span className="px-1.5 py-0.2 rounded bg-blue-100 text-blue-800">1</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-blue-200 shadow-sm space-y-1 text-xs">
                      <div className="flex justify-between font-bold text-[#0B1739]">
                        <span>#PHM-4931</span>
                        <span className="text-[#0D9488]">GH₵ 240.00</span>
                      </div>
                      <p className="text-[11px] text-[#43516A]">Akua Konadu</p>
                      <span className="inline-block text-[10px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-700">
                        Prescription Pack
                      </span>
                    </div>
                  </div>

                  {/* Column 3: Ready */}
                  <div className="p-3 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                    <div className="flex items-center justify-between text-xs font-bold text-[#0B1739] mb-2.5">
                      <span>Ready for Pickup</span>
                      <span className="px-1.5 py-0.2 rounded bg-[#CCFBF1] text-[#0F766E]">1</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[#99F6E4] shadow-sm space-y-1 text-xs">
                      <div className="flex justify-between font-bold text-[#0B1739]">
                        <span>#PHM-4930</span>
                        <span className="text-[#0D9488]">GH₵ 320.50</span>
                      </div>
                      <p className="text-[11px] text-[#43516A]">Emmanuel Baah</p>
                      <span className="inline-block text-[10px] px-1.5 py-0.5 rounded bg-[#F0FDFA] text-[#0D9488]">
                        Counter Shelf #B4
                      </span>
                    </div>
                  </div>

                  {/* Column 4: Out for Delivery */}
                  <div className="p-3 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                    <div className="flex items-center justify-between text-xs font-bold text-[#0B1739] mb-2.5">
                      <span>Out for Delivery</span>
                      <span className="px-1.5 py-0.2 rounded bg-teal-100 text-teal-800">1</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-teal-200 shadow-sm space-y-1 text-xs">
                      <div className="flex justify-between font-bold text-[#0B1739]">
                        <span>#PHM-4929</span>
                        <span className="text-[#0D9488]">GH₵ 95.00</span>
                      </div>
                      <p className="text-[11px] text-[#43516A]">Naa Borley</p>
                      <span className="inline-block text-[10px] px-1.5 py-0.5 rounded bg-teal-50 text-teal-700">
                        Rider: Kwesi (En Route)
                      </span>
                    </div>
                  </div>

                  {/* Column 5: Completed */}
                  <div className="p-3 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                    <div className="flex items-center justify-between text-xs font-bold text-[#0B1739] mb-2.5">
                      <span>Completed</span>
                      <span className="px-1.5 py-0.2 rounded bg-slate-200 text-slate-700">1</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1 text-xs opacity-75">
                      <div className="flex justify-between font-bold text-[#0B1739]">
                        <span>#PHM-4928</span>
                        <span className="text-[#0D9488]">GH₵ 460.00</span>
                      </div>
                      <p className="text-[11px] text-[#43516A]">David Asante</p>
                      <span className="inline-block text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                        NHIS Copay Settled
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. PRESCRIPTIONS VIEW */}
            {activeTab === "prescriptions" && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="p-4 rounded-2xl bg-[#F4FBF8] border border-[#CDEFE3] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#CDEFE3] flex items-center justify-center text-[#0D9488]">
                      <FileCheck2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#0B1739]">
                        Digital Clinical Verification Queue
                      </h4>
                      <p className="text-xs text-[#667085]">
                        Pharmacist checks for contraindications, allergies, and accurate dosage.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#0F766E] bg-white border border-[#CDEFE3] px-3 py-1 rounded-lg">
                    Superintendent Mode
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl border border-[#E6EAEF] bg-white space-y-3">
                    <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-100">
                      <span className="font-bold text-[#0B1739]">RX-2026-904 — Patient: Akua Konadu (Age: 38)</span>
                      <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">
                        Awaiting Signature
                      </span>
                    </div>
                    <div className="text-xs space-y-1.5 text-[#43516A]">
                      <p><strong>Prescribed Drug:</strong> Amoxicillin Trihydrate 500mg Caps</p>
                      <p><strong>Dosage Instruction:</strong> 1 capsule 3 times daily (8-hourly) for 7 days</p>
                      <p><strong>Prescribing Doctor:</strong> Dr. K. Odoom (Ridge Hospital)</p>
                      <p className="text-[#0D9488] bg-[#F0FDFA] p-2 rounded-lg font-medium">
                        ✓ Safety Check: No known penicillin allergies recorded in patient profile.
                      </p>
                    </div>
                    <div className="pt-2 flex gap-2">
                      <button className="flex-1 py-2 rounded-lg bg-[#0D9488] hover:bg-[#0F766E] text-white font-bold text-xs shadow-sm">
                        Approve & Dispense
                      </button>
                      <button className="px-3 py-2 rounded-lg bg-slate-100 text-[#43516A] text-xs font-semibold">
                        Reject / Flag
                      </button>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl border border-[#E6EAEF] bg-white space-y-3">
                    <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-100">
                      <span className="font-bold text-[#0B1739]">RX-2026-905 — Patient: Kofi Boateng (Age: 52)</span>
                      <span className="px-2 py-0.5 rounded-full bg-[#CCFBF1] text-[#0F766E] text-[10px] font-bold">
                        Verified
                      </span>
                    </div>
                    <div className="text-xs space-y-1.5 text-[#43516A]">
                      <p><strong>Prescribed Drug:</strong> Metformin Hydrochloride 500mg Extended</p>
                      <p><strong>Dosage Instruction:</strong> 1 tablet with evening meal daily</p>
                      <p><strong>Prescribing Doctor:</strong> Dr. Sandra Lamptey (Apex Clinic)</p>
                      <p className="text-[#667085] bg-slate-50 p-2 rounded-lg">
                        Refill #2 of 3 authorized. Next refill date: Sept 28, 2026.
                      </p>
                    </div>
                    <div className="pt-2">
                      <span className="text-xs font-semibold text-[#0D9488] flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> Ready for cashier POS thermal printout
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. CUSTOMERS VIEW */}
            {activeTab === "customers" && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center justify-between pb-3 border-b border-[#E6EAEF]">
                  <div>
                    <h4 className="font-bold text-sm text-[#0B1739]">
                      Patient Health Profiles & Loyalty Records
                    </h4>
                    <p className="text-xs text-[#667085]">
                      Medication history, chronic disease registers, and insurance membership numbers.
                    </p>
                  </div>
                  <button className="px-3 py-1.5 rounded-xl bg-[#0D9488] text-white text-xs font-bold shadow-sm">
                    + Add New Patient Profile
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-2xl border border-[#E6EAEF] bg-[#F8FAFC] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-[#0B1739]">Kwame Mensah</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#CCFBF1] text-[#0F766E]">
                        Gold Member
                      </span>
                    </div>
                    <p className="text-[#667085] font-mono">ID: PAT-2024-118 · +233 24 123 4567</p>
                    <p className="text-[#43516A]"><strong>Known Allergies:</strong> Sulfa Drugs</p>
                    <p className="text-[#43516A]"><strong>Total Orders:</strong> 18 visits (GH₵ 2,450 spent)</p>
                  </div>

                  <div className="p-4 rounded-2xl border border-[#E6EAEF] bg-[#F8FAFC] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-[#0B1739]">Akua Konadu</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                        NHIS Insured
                      </span>
                    </div>
                    <p className="text-[#667085] font-mono">ID: PAT-2024-892 · +233 50 987 6543</p>
                    <p className="text-[#43516A]"><strong>Known Allergies:</strong> None recorded</p>
                    <p className="text-[#43516A]"><strong>Chronic Register:</strong> Hypertension refill</p>
                  </div>

                  <div className="p-4 rounded-2xl border border-[#E6EAEF] bg-[#F8FAFC] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-[#0B1739]">Naa Borley</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                        Standard
                      </span>
                    </div>
                    <p className="text-[#667085] font-mono">ID: PAT-2024-401 · +233 27 555 1212</p>
                    <p className="text-[#43516A]"><strong>Known Allergies:</strong> Aspirin sensitivity</p>
                    <p className="text-[#43516A]"><strong>Preferred Delivery:</strong> Osu / Cantonments</p>
                  </div>
                </div>
              </div>
            )}

            {/* 6. ANALYTICS VIEW */}
            {activeTab === "analytics" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-[#042F2E] text-white border border-teal-900/60">
                    <p className="text-xs text-teal-400 font-semibold mb-1">Monthly Gross Revenue</p>
                    <p className="text-xl font-extrabold font-mono text-white">GH₵ 128,450.00</p>
                    <p className="text-[11px] text-teal-300 mt-1">↑ +24.8% vs last month</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#042F2E] text-white border border-teal-900/60">
                    <p className="text-xs text-teal-400 font-semibold mb-1">Prescription Fill Accuracy</p>
                    <p className="text-xl font-extrabold font-mono text-white">99.85%</p>
                    <p className="text-[11px] text-slate-300 mt-1">Zero critical dispensing error</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#042F2E] text-white border border-teal-900/60">
                    <p className="text-xs text-teal-400 font-semibold mb-1">Stock Turnover Ratio</p>
                    <p className="text-xl font-extrabold font-mono text-white">18.4 Days</p>
                    <p className="text-[11px] text-teal-300 mt-1">Optimal liquidity range</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-[#E6EAEF] bg-white">
                  <h4 className="font-bold text-sm text-[#0B1739] mb-4">
                    Top 5 Dispensed Medications (This Month)
                  </h4>
                  <div className="space-y-3 text-xs">
                    <div>
                      <div className="flex justify-between text-[#0B1739] font-semibold mb-1">
                        <span>1. Paracetamol BP 500mg (Analgesics)</span>
                        <span className="font-mono">1,420 units (GH₵ 45,440)</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div className="h-full rounded-full bg-[#0D9488]" style={{ width: "88%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[#0B1739] font-semibold mb-1">
                        <span>2. Amoxicillin Trihydrate 500mg (Antibiotics)</span>
                        <span className="font-mono">890 units (GH₵ 40,495)</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div className="h-full rounded-full bg-[#0D9488]" style={{ width: "70%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[#0B1739] font-semibold mb-1">
                        <span>3. Vitamin C Effervescent 1000mg (Supplements)</span>
                        <span className="font-mono">620 units (GH₵ 35,960)</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div className="h-full rounded-full bg-[#14B8A6]" style={{ width: "55%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}


