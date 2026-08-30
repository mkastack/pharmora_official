import Link from "next/link";
import {
  PackageCheck,
  Receipt,
  FileCheck2,
  Users,
  CreditCard,
  TrendingUp,
  Truck,
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Printer,
  Barcode
} from "lucide-react";
import CTASection from "@/components/CTASection";

export default function FeaturesPage() {
  const featureModules = [
    {
      id: "pharmacy-management",
      title: "Pharmacy Counter Operations & Shift Management",
      icon: Building2,
      description: "Manage multiple cash registers, track staff shift balances, handle drawer floats, and reconcile end-of-day revenues with zero manual accounting errors.",
      highlights: [
        "Multi-register counter assignment",
        "Automated shift opening float & blind cash-drop reconciliation",
        "Real-time cashier activity logs",
        "Custom tax & statutory levy settings (NHIL, GETFund, VAT)"
      ]
    },
    {
      id: "inventory",
      title: "Automated Inventory, Expiry & Batch Control",
      icon: PackageCheck,
      description: "Take total command over your drug stock. Track lot numbers, expiry dates, supplier pricing, and minimum order triggers automatically.",
      highlights: [
        "First-Expired, First-Out (FEFO) dispensing rules",
        "Automated quarantine for nearing-expiry drugs",
        "Multi-branch inter-store stock transfers",
        "Supplier Purchase Order (PO) auto-generation"
      ]
    },
    {
      id: "orders",
      title: "Rapid Barcode POS & High-Volume Dispensing",
      icon: Receipt,
      description: "Blazingly fast checkout designed for busy counters. Scan barcodes, calculate split payments, and print 80mm receipts in under 3 seconds.",
      highlights: [
        "USB & Bluetooth barcode scanner compatibility",
        "Global keyboard hotkeys (F1-F12) for speed",
        "Thermal ESC/POS receipt & dosage label printing",
        "Offline cashier resilience with cloud sync"
      ]
    },
    {
      id: "prescriptions",
      title: "Digital Prescription Intake & Clinical Review",
      icon: FileCheck2,
      description: "Eliminate dispensing errors with our clinical verification pipeline. Check drug-drug interactions, patient allergies, and doctor authorization digitally.",
      highlights: [
        "Digital Rx upload & optical character intake",
        "Automated contraindication & allergen warnings",
        "Digital Superintendent Pharmacist sign-off stamp",
        "Prescription refill tracking & automated patient SMS"
      ]
    },
    {
      id: "customers",
      title: "Patient Health Profiles & Chronic Disease Registries",
      icon: Users,
      description: "Maintain comprehensive patient history, chronic medication registries (hypertension, diabetes), and build patient loyalty through timely refill alerts.",
      highlights: [
        "Comprehensive patient allergy & medication history",
        "Chronic medication scheduled refill automation",
        "Patient loyalty points & discount programs",
        "Direct SMS notifications for medication readiness"
      ]
    },
    {
      id: "payments",
      title: "Unified Billing, Mobile Money & Insurance Copays",
      icon: CreditCard,
      description: "Accept every payment method seamlessly. Split bills across Cash, Mobile Money, Bank Cards, and instant private health insurance claims.",
      highlights: [
        "MTN MoMo, Telecel Cash, and AT Money integration",
        "National Health Insurance Scheme (NHIS) & Private HMO support",
        "Split payment calculation (Copay + Patient Cash)",
        "Instant digital receipt generation via SMS & Email"
      ]
    },
    {
      id: "analytics",
      title: "Executive Telemetry & Financial Analytics",
      icon: TrendingUp,
      description: "Make confident data-driven decisions. Monitor real-time gross margins, top-selling therapeutics, slow-moving items, and branch performance.",
      highlights: [
        "Real-time revenue & gross profit margin tracking",
        "Inventory turnover velocity & dead capital alerts",
        "Top-selling medications by volume & revenue",
        "Multi-branch comparative performance matrices"
      ]
    },
    {
      id: "delivery",
      title: "Delivery Dispatch & Courier Management",
      icon: Truck,
      description: "Extend your pharmacy reach beyond the counter. Assign delivery riders, generate route dispatch slips, and capture electronic proof of receipt.",
      highlights: [
        "Live rider dispatch dashboard",
        "Customer SMS tracking link with estimated ETA",
        "Electronic signature capture upon delivery",
        "Delivery fee calculations based on delivery zones"
      ]
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCFBF1] text-[11px] font-bold uppercase tracking-wider text-[#0F766E] mb-4">
            <PackageCheck className="w-3.5 h-3.5" />
            Complete Feature Capabilities
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0B1739] tracking-tight leading-tight mb-4">
            Engineered for every aspect of <br />
            <span className="gradient-text-teal">modern pharmacy operations.</span>
          </h1>
          <p className="text-lg text-[#667085]">
            Explore the 8 core operational modules that power Pharmora Desktop and Web platforms.
          </p>
        </div>

        {/* Feature Modules Grid */}
        <div className="space-y-16 mb-24">
          {featureModules.map((module, idx) => {
            const Icon = module.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={module.id}
                id={module.id}
                className={`p-8 sm:p-12 rounded-3xl border border-[#E6EAEF] bg-[#F8FAFC] flex flex-col lg:flex-row items-center gap-10 hover:border-[#99F6E4] transition-all`}
              >
                <div className={`w-full lg:w-1/2 space-y-4 ${isEven ? "" : "lg:order-2"}`}>
                  <div className="w-12 h-12 rounded-2xl bg-[#CCFBF1] flex items-center justify-center text-[#0D9488]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1739]">
                    {module.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#43516A] leading-relaxed">
                    {module.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    {module.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0B1739] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#0D9488] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/downloads"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#0D9488] hover:text-[#0F766E]"
                    >
                      <span>Try this module in Pharmora Desktop</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Visual Representation Box */}
                <div className={`w-full lg:w-1/2 p-6 rounded-2xl bg-white border border-[#99F6E4] shadow-sm ${isEven ? "" : "lg:order-1"}`}>
                  <div className="p-4 rounded-xl bg-[#F0FDFA] border border-[#99F6E4] space-y-3 text-xs">
                    <div className="flex justify-between items-center text-[#0F766E] font-bold font-mono">
                      <span>MODULE: {module.id.toUpperCase()}</span>
                      <span className="bg-[#CCFBF1] px-2 py-0.5 rounded text-[10px]">ACTIVE COMPONENT</span>
                    </div>
                    <p className="text-[#43516A] font-semibold">
                      Connected to centralized multi-register database with instant cloud reconciliation.
                    </p>
                    <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-slate-600 text-[11px]">
                      ✓ Automated Audit Stamping · Role Privileges Verified · Hardware Direct
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <CTASection />
    </div>
  );
}
