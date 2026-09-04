import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { MessageSquare, Phone, Mail, FileText, Activity, ShieldCheck } from "lucide-react";

export default function HelpPage() {
  return (
    <div className="pt-20">
      {/* Help Hero Strip */}
      <div className="bg-[#0B1739] text-white py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            How can we help your pharmacy?
          </h1>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
            Search our knowledge base or connect with a dedicated pharmacy operations support specialist.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-10 text-xs">
            <a
              href="https://wa.me/233257966923?text=Hello%2C%20I%20would%20like%20to%20speak%20with%20a%20Pharmora%20specialist."
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 hover:border-emerald-400 flex items-center gap-3 transition-colors group"
            >
              <span className="text-xl flex-shrink-0">💬</span>
              <div className="text-left">
                <p className="font-bold text-white group-hover:text-emerald-300 transition-colors">Speak with a Specialist</p>
                <p className="text-emerald-400 font-mono">+233 25 796 6923 (WhatsApp)</p>
              </div>
            </a>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
              <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
              <div className="text-left">
                <p className="font-bold text-white">Email Support Desk</p>
                <p className="text-slate-400">support@pharmora.com</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3" id="status">
              <Activity className="w-5 h-5 text-teal-400 flex-shrink-0" />
              <div className="text-left">
                <p className="font-bold text-white">Cloud Sync Status</p>
                <p className="text-teal-400 font-mono">99.99% Operational</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FAQSection />
    </div>
  );
}
