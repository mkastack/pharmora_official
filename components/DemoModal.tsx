"use client";

import { useState } from "react";
import { X, CheckCircle2, Building2, User, Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    pharmacyName: "",
    email: "",
    phone: "",
    branches: "1 Branch",
    country: "Ghana",
    primaryGoal: "Inventory & POS Automation"
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-[#99F6E4] animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#667085] hover:text-[#0B1739] hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-[#CCFBF1] border border-[#99F6E4] flex items-center justify-center text-[#0D9488] mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#0B1739]">
              Demo Request Received!
            </h3>
            <p className="text-sm text-[#43516A] leading-relaxed max-w-sm mx-auto">
              Thank you, <span className="font-semibold text-[#0B1739]">{formData.fullName}</span>. A Pharmora pharmacy solutions specialist will reach out to schedule your personalized live walkthrough for <span className="font-semibold text-[#0B1739]">{formData.pharmacyName}</span>.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl bg-[#0D9488] hover:bg-[#0F766E] text-white font-bold text-sm shadow-md transition-all"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CCFBF1] text-[11px] font-bold text-[#0F766E] uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Live Walkthrough
              </div>
              <h2 className="text-2xl font-extrabold text-[#0B1739]">
                Experience Pharmora in Action
              </h2>
              <p className="text-xs text-[#667085] mt-1">
                See how Pharmora automates your counter, tracks batches, and syncs desktop with cloud.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-[#0B1739] mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#98A2B3]" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Dr. Michael Mensah"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E6EAEF] text-sm text-[#0B1739] focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#0B1739] mb-1">
                    Pharmacy / Clinic Name *
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#98A2B3]" />
                    <input
                      type="text"
                      required
                      value={formData.pharmacyName}
                      onChange={(e) => setFormData({ ...formData, pharmacyName: e.target.value })}
                      placeholder="e.g. St. Luke Pharmacy"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-[#E6EAEF] text-sm text-[#0B1739] focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1739] mb-1">
                    Number of Branches
                  </label>
                  <select
                    value={formData.branches}
                    onChange={(e) => setFormData({ ...formData, branches: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#E6EAEF] text-sm text-[#0B1739] focus:outline-none focus:ring-2 focus:ring-[#0D9488] bg-white"
                  >
                    <option>1 Branch</option>
                    <option>2 - 4 Branches</option>
                    <option>5 - 10 Branches</option>
                    <option>10+ Branches (Chain / Hospital)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#0B1739] mb-1">
                    Business Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#98A2B3]" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="michael@pharmacy.com"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-[#E6EAEF] text-sm text-[#0B1739] focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1739] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#98A2B3]" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+233 24 000 0000"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-[#E6EAEF] text-sm text-[#0B1739] focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-[#0D9488] to-[#14B8A6] hover:from-[#0F766E] hover:to-[#0D9488] text-white font-bold text-sm shadow-md shadow-teal-600/25 transition-all active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Personalized Demo</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-[#98A2B3]">
                No credit card required. Includes 14-day full access to Desktop & Web.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
