import Link from "next/link";
import { DownloadCloud, CheckCircle2, ShieldCheck, Printer, Barcode, HelpCircle, ArrowRight } from "lucide-react";
import { SYSTEM_REQUIREMENTS } from "@/lib/data";

export default function InstallationPage() {
  const steps = [
    {
      step: "01",
      title: "Download PharmoraSetup.exe",
      description: "Get the latest official installer package from the Pharmora Downloads page. Save it to your desktop counter PC."
    },
    {
      step: "02",
      title: "Run the Setup Wizard",
      description: "Double click the .exe file. Windows SmartScreen will verify the digital signature. Click 'Install' to automatically configure local database cache."
    },
    {
      step: "03",
      title: "Sign in to Your Pharmacy Workspace",
      description: "Enter your registered superintendent email and branch code. All inventory, price lists, and staff permissions will sync instantly from cloud."
    },
    {
      step: "04",
      title: "Connect Barcode Guns & Thermal Printer",
      description: "Plug in your USB/Bluetooth barcode scanner and 58mm/80mm receipt printer. Pharmora auto-detects standard ESC/POS hardware."
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-white">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CCFBF1] text-xs font-mono font-bold text-[#0F766E] uppercase tracking-wider mb-4">
            <DownloadCloud className="w-4 h-4 text-[#0D9488]" />
            Setup & Onboarding
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1739] tracking-tight leading-tight mb-4">
            Windows Installation Guide
          </h1>
          <p className="text-base sm:text-lg text-[#667085]">
            Set up your counter terminal in under 3 minutes with zero IT complexity.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6 mb-16">
          {steps.map((item) => (
            <div
              key={item.step}
              className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-[#E6EAEF] flex flex-col sm:flex-row items-start gap-6 hover:border-[#99F6E4] transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0D9488] text-white flex items-center justify-center font-extrabold font-mono text-lg flex-shrink-0 shadow-sm">
                {item.step}
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="text-xl font-bold text-[#0B1739]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#43516A] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Hardware Driver Helper Box */}
        <div className="p-8 rounded-3xl bg-[#F0FDFA] border border-[#99F6E4] space-y-4 mb-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0D9488] text-white flex items-center justify-center">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-base text-[#0B1739]">
                Thermal Printer & Scanner Compatibility
              </h4>
              <p className="text-xs text-[#667085]">
                Pharmora is compatible with all standard ESC/POS USB, Ethernet, and Bluetooth thermal printers (Epson, Xprinter, Rongta, Star Micronics) as well as 1D/2D QR barcode scanners.
              </p>
            </div>
          </div>
        </div>

        {/* Callout Action */}
        <div className="text-center">
          <Link
            href="/downloads"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#0D9488] to-[#0F766E] text-white font-bold text-sm shadow-md shadow-teal-600/20"
          >
            <DownloadCloud className="w-4 h-4" />
            <span>Download PharmoraSetup.exe Now</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
