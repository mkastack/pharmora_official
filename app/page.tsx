import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import PlatformCards from "@/components/PlatformCards";
import ProductShowcase from "@/components/ProductShowcase";
import InventorySection from "@/components/InventorySection";
import PrescriptionWorkflow from "@/components/PrescriptionWorkflow";
import AnalyticsSection from "@/components/AnalyticsSection";
import HowItWorks from "@/components/HowItWorks";
import BenefitGrid from "@/components/BenefitGrid";
import DownloadSection from "@/components/DownloadSection";
import WebVersionSection from "@/components/WebVersionSection";
import ComparisonTable from "@/components/ComparisonTable";
import SecuritySection from "@/components/SecuritySection";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Neutral Trust Strip */}
      <TrustStrip />

      {/* 3. Two Ways to Work (Platform Cards) */}
      <PlatformCards />

      {/* 4. Interactive Product Experience (6 Live Modules) */}
      <ProductShowcase />

      {/* 5. Inventory & Expiry Tracking Section */}
      <InventorySection />

      {/* 6. Prescription Clinical Verification Sequence */}
      <PrescriptionWorkflow />

      {/* 7. Dark Telemetry & Analytics Section */}
      <AnalyticsSection />

      {/* 8. How It Works (4-Step Timeline) */}
      <HowItWorks />

      {/* 9. Bento Benefit Grid */}
      <BenefitGrid />

      {/* 10. Native Windows Desktop Download Hub */}
      <DownloadSection />

      {/* 11. Zero-Install Web App Section */}
      <WebVersionSection />

      {/* 12. Desktop vs. Web Side-by-Side Comparison */}
      <ComparisonTable />

      {/* 13. Security & Role-Based Access Controls */}
      <SecuritySection />

      {/* 14. Real Pharmacy Testimonials */}
      <Testimonials />

      {/* 15. Transparent Pricing Plans */}
      <PricingSection />

      {/* 16. Searchable Accordion FAQ */}
      <FAQSection />

      {/* 17. Final High-Converting CTA */}
      <CTASection />
    </div>
  );
}
