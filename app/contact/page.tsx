"use client";

import { useState } from "react";
import { Send, CheckCircle2, Building2, User, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    pharmacyName: "",
    email: "",
    phone: "",
    branches: "1 Branch",
    country: "Ghana",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    } catch {
      // ignore
    }
  };

  return (
    <div className="pt-28 pb-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCFBF1] text-[11px] font-bold uppercase tracking-wider text-[#0F766E]">
              <Sparkles className="w-3.5 h-3.5" />
              Direct Support & Demos
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1739] tracking-tight leading-tight">
              Let&apos;s talk about <br />
              <span className="gradient-text-teal">your pharmacy setup.</span>
            </h1>

            <p className="text-base text-[#667085] leading-relaxed">
              Whether you need a personalized product walkthrough, assistance migrating legacy inventory data, or multi-branch enterprise pricing, our team is here for you.
            </p>

            <div className="space-y-4 pt-4 text-xs text-[#43516A]">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E6EAEF] flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#CCFBF1] flex items-center justify-center text-[#0D9488] flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-[#0B1739]">Direct Operations Line</p>
                  <p className="text-slate-500">+233 30 200 0000 / +233 24 100 0000</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E6EAEF] flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#CCFBF1] flex items-center justify-center text-[#0D9488] flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-[#0B1739]">Pharmacy Solutions Inquiries</p>
                  <p className="text-slate-500">contact@pharmora.com</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E6EAEF] flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#CCFBF1] flex items-center justify-center text-[#0D9488] flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-[#0B1739]">Regional Headquarters</p>
                  <p className="text-slate-500">Accra Health-Tech Hub, Airport City, Accra, Ghana</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-[#99F6E4] shadow-md">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#CCFBF1] text-[#0D9488] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-[#0B1739]">
                    Message Dispatched Successfully!
                  </h2>
                  <p className="text-sm text-[#43516A] max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-[#0B1739]">{formData.fullName}</span>. A Pharmora solutions specialist will contact you within 2 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-2xl font-extrabold text-[#0B1739] mb-1">
                    Request a Demo or Send an Inquiry
                  </h2>
                  <p className="text-xs text-[#667085] mb-6">
                    Fill out the form below and we will prepare a customized proposal for your pharmacy.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0B1739] mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Dr. Michael Mensah"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6EAEF] bg-white text-xs sm:text-sm text-[#0B1739] focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0B1739] mb-1">
                        Pharmacy Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.pharmacyName}
                        onChange={(e) => setFormData({ ...formData, pharmacyName: e.target.value })}
                        placeholder="St. Luke Community Pharmacy"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6EAEF] bg-white text-xs sm:text-sm text-[#0B1739] focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0B1739] mb-1">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="michael@pharmacy.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6EAEF] bg-white text-xs sm:text-sm text-[#0B1739] focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0B1739] mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+233 24 000 0000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6EAEF] bg-white text-xs sm:text-sm text-[#0B1739] focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0B1739] mb-1">
                        Number of Pharmacy Branches
                      </label>
                      <select
                        value={formData.branches}
                        onChange={(e) => setFormData({ ...formData, branches: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6EAEF] bg-white text-xs sm:text-sm text-[#0B1739] focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                      >
                        <option>1 Branch</option>
                        <option>2 - 4 Branches</option>
                        <option>5 - 10 Branches</option>
                        <option>10+ Branches (Chain / Hospital)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0B1739] mb-1">
                        Country
                      </label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6EAEF] bg-white text-xs sm:text-sm text-[#0B1739] focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0B1739] mb-1">
                      Message / Special Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your current pharmacy setup, POS hardware, or data migration needs..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6EAEF] bg-white text-xs sm:text-sm text-[#0B1739] focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-[#0D9488] to-[#14B8A6] hover:from-[#0F766E] hover:to-[#0D9488] text-white font-bold text-sm shadow-md shadow-teal-600/25 transition-all active:scale-[0.99]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Request</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
