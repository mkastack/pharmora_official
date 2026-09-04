// ─────────────────────────────────────────────────────────────────────────────
// Pharmora Mobile Applications Centralized Configuration & Analytics
// ─────────────────────────────────────────────────────────────────────────────

export type AppDistributionStatus =
  | "AVAILABLE"
  | "TESTING"
  | "COMING_SOON"
  | "UNAVAILABLE";

export interface MobileAppPlatformConfig {
  url: string | null;
  status: AppDistributionStatus;
  label: string;
  badgeText?: string;
  note?: string;
  fileSize?: string;
  minVersion?: string;
  storeBadgeType?: "google-play" | "app-store" | "custom-apk" | "custom-testflight" | "custom-coming-soon";
}

export interface MobileAppConfig {
  id: "user" | "rider";
  name: string;
  shortName: string;
  badgeLabel: string;
  tagline: string;
  headline: string;
  description: string;
  audience: "Customers" | "Delivery Partners";
  version: string;
  updatedDate: string;
  smartRoute: string;
  features: Array<{
    title: string;
    description: string;
    iconName: string;
  }>;
  android: MobileAppPlatformConfig;
  ios: MobileAppPlatformConfig;
  qrScanPrompt: string;
  theme: {
    primaryColor: string;
    accentGlow: string;
    badgeBg: string;
    badgeText: string;
    cardBorder: string;
  };
}

/**
 * Validated marketing source tags allowed on smart QR URLs.
 * (e.g., https://pharmora.com/download/user?source=devfest)
 */
export const ALLOWED_MARKETING_SOURCES = [
  "website",
  "hero",
  "navbar",
  "footer",
  "devfest",
  "pharmacy-poster",
  "flyer",
  "tshirt",
  "qr-card",
  "event-banner",
  "direct",
] as const;

export type MarketingSource = (typeof ALLOWED_MARKETING_SOURCES)[number] | "unknown";

export function sanitizeSource(rawSource: string | null | undefined): MarketingSource {
  if (!rawSource) return "website";
  const cleaned = rawSource.trim().toLowerCase();
  if (ALLOWED_MARKETING_SOURCES.includes(cleaned as any)) {
    return cleaned as MarketingSource;
  }
  return "unknown";
}

// ─────────────────────────────────────────────────────────────────────────────
// Pharmora User App (For Customers)
// ─────────────────────────────────────────────────────────────────────────────

export const USER_APP_CONFIG: MobileAppConfig = {
  id: "user",
  name: "Pharmora",
  shortName: "User App",
  badgeLabel: "For Customers",
  tagline: "Your pharmacy access, in your pocket.",
  headline: "Search medicines, upload prescriptions, and track deliveries in real time.",
  description:
    "Search medicines and health products, discover trusted pharmacies, upload prescriptions, place orders and track deliveries with Pharmora.",
  audience: "Customers",
  version: "v1.2.0",
  updatedDate: "September 2026",
  smartRoute: "/download/user",
  features: [
    {
      title: "Verified Pharmacies",
      description: "Find accredited local pharmacies near you with real-time stock.",
      iconName: "ShieldCheck",
    },
    {
      title: "Medicine Discovery",
      description: "Search generic and brand medicines with clear pricing and dosage.",
      iconName: "Search",
    },
    {
      title: "Prescription Upload",
      description: "Snap or attach prescription photos for licensed pharmacist review.",
      iconName: "FileCheck2",
    },
    {
      title: "Secure Ordering",
      description: "Pay with Mobile Money (MTN, Telecel, AT) or Visa / Mastercard.",
      iconName: "CreditCard",
    },
    {
      title: "Live Delivery Tracking",
      description: "Watch your courier on the live map and verify arrival with secure PIN.",
      iconName: "Truck",
    },
  ],
  android: {
    // If not yet on Play Store, point to APK / internal distribution link
    url: process.env.NEXT_PUBLIC_USER_ANDROID_URL || "/downloads/apps/pharmora-user-v1.2.0.apk",
    status: (process.env.NEXT_PUBLIC_USER_ANDROID_STATUS as AppDistributionStatus) || "AVAILABLE",
    label: "Download Android APK",
    badgeText: "v1.2.0 · 24 MB",
    note: "Android 8.0+ required",
    fileSize: "24.4 MB",
    minVersion: "Android 8.0+",
    storeBadgeType: "custom-apk",
  },
  ios: {
    url: process.env.NEXT_PUBLIC_USER_IOS_URL || "https://testflight.apple.com/join/pharmora-preview",
    status: (process.env.NEXT_PUBLIC_USER_IOS_STATUS as AppDistributionStatus) || "TESTING",
    label: "Join iOS TestFlight",
    badgeText: "Public Beta",
    note: "iOS 15.0+ · TestFlight",
    minVersion: "iOS 15.0+",
    storeBadgeType: "custom-testflight",
  },
  qrScanPrompt: "Scan to download the Pharmora app",
  theme: {
    primaryColor: "#0D9488",
    accentGlow: "rgba(13,148,136,0.18)",
    badgeBg: "bg-[#CCFBF1]",
    badgeText: "text-[#0F766E]",
    cardBorder: "border-[#99F6E4]/70",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Pharmora Rider App (For Delivery Partners)
// ─────────────────────────────────────────────────────────────────────────────

export const RIDER_APP_CONFIG: MobileAppConfig = {
  id: "rider",
  name: "Pharmora Rider",
  shortName: "Rider App",
  badgeLabel: "For Delivery Partners",
  tagline: "Deliver with Pharmora.",
  headline: "Fast delivery dispatch, GPS turn-by-turn routing, and instant earnings payout.",
  description:
    "Accept deliveries, navigate to pharmacies and customers, track active orders and manage your delivery earnings.",
  audience: "Delivery Partners",
  version: "v1.1.0",
  updatedDate: "September 2026",
  smartRoute: "/download/rider",
  features: [
    {
      title: "Live Delivery Requests",
      description: "Receive instant audio alerts and accept batches within your radius.",
      iconName: "BellRing",
    },
    {
      title: "Pickup Verification",
      description: "Scan pharmacy bag barcode to confirm medication batch and order ID.",
      iconName: "PackageCheck",
    },
    {
      title: "Navigation & Map",
      description: "Optimized route guidance avoiding traffic hotspots across town.",
      iconName: "Navigation",
    },
    {
      title: "Delivery PIN Confirmation",
      description: "Secure two-factor handoff ensuring medication reaches the right patient.",
      iconName: "KeyRound",
    },
    {
      title: "Earnings Tracking",
      description: "Daily summaries and instant payout directly to your Mobile Money wallet.",
      iconName: "TrendingUp",
    },
  ],
  android: {
    url: process.env.NEXT_PUBLIC_RIDER_ANDROID_URL || "/downloads/apps/pharmora-rider-v1.1.0.apk",
    status: (process.env.NEXT_PUBLIC_RIDER_ANDROID_STATUS as AppDistributionStatus) || "AVAILABLE",
    label: "Download Rider APK",
    badgeText: "v1.1.0 · 21 MB",
    note: "Android 8.0+ required",
    fileSize: "21.8 MB",
    minVersion: "Android 8.0+",
    storeBadgeType: "custom-apk",
  },
  ios: {
    url: process.env.NEXT_PUBLIC_RIDER_IOS_URL || null,
    status: (process.env.NEXT_PUBLIC_RIDER_IOS_STATUS as AppDistributionStatus) || "COMING_SOON",
    label: "iOS Rider App",
    badgeText: "Coming Soon",
    note: "iOS TestFlight in internal review",
    minVersion: "iOS 16.0+",
    storeBadgeType: "custom-coming-soon",
  },
  qrScanPrompt: "Scan to install Pharmora Rider",
  theme: {
    primaryColor: "#059669",
    accentGlow: "rgba(5,150,105,0.22)",
    badgeBg: "bg-[#D1FAE5]",
    badgeText: "text-[#065F46]",
    cardBorder: "border-[#6EE7B7]/70",
  },
};

export const MOBILE_APPS_MAP: Record<"user" | "rider", MobileAppConfig> = {
  user: USER_APP_CONFIG,
  rider: RIDER_APP_CONFIG,
};

// ─────────────────────────────────────────────────────────────────────────────
// Privacy-Friendly Client Analytics Tracking Helper
// ─────────────────────────────────────────────────────────────────────────────

export type MobileDownloadEventName =
  | "user_app_qr_opened"
  | "rider_app_qr_opened"
  | "user_android_download_clicked"
  | "user_ios_download_clicked"
  | "rider_android_download_clicked"
  | "rider_ios_download_clicked"
  | "download_route_visited"
  | "mobile_tab_switched";

export interface MobileDownloadEventData {
  app?: "user" | "rider";
  platform?: "android" | "ios" | "desktop" | "unknown";
  source?: string;
  [key: string]: unknown;
}

export function trackAppDownloadEvent(
  eventName: MobileDownloadEventName,
  data?: MobileDownloadEventData
) {
  if (typeof window === "undefined") return;

  const payload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    source: data?.source || "website",
    userAgent: navigator.userAgent,
    ...data,
  };

  // Safe development and telemetry dispatch
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.log("[Pharmora Mobile Analytics]", payload);
  }

  // If Google Analytics / Plausible / PostHog is loaded on window
  try {
    const win = window as any;
    if (typeof win.gtag === "function") {
      win.gtag("event", eventName, payload);
    } else if (typeof win.plausible === "function") {
      win.plausible(eventName, { props: payload });
    }
  } catch {
    // Fail silently without disrupting user flow
  }
}
