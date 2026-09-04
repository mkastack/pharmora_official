# Pharmora Mobile Apps & QR Installation Specification

## Overview

This specification details the architecture, UI/UX, routing, and distribution system for the **Pharmora Mobile Applications**:
1. **Pharmora User App** (For Customers)
2. **Pharmora Rider / Driver App** (For Delivery Partners)

This upgrade integrates directly into the existing Pharmora official marketing website without redesigning unrelated sections or altering existing desktop/console workflows.

---

## 1. Objectives & Non-Goals

### Objectives
- Add a dedicated, high-converting **"Get the Pharmora App" / "Pharmora on Mobile"** section to the website.
- Clearly separate the **Customer App** and the **Rider App** with distinct branding, mockups, feature bullets, and download paths.
- Support **programmatic QR code generation** pointing to permanent smart URLs (`/download/user` and `/download/rider`).
- Provide **device auto-detection** (Android, iOS, Desktop) with smart mobile-first CTAs.
- Provide **smart download routes** (`/download/user` and `/download/rider`) that automatically redirect mobile devices to the appropriate platform store/APK while rendering a rich download hub for desktop/unrecognized visitors.
- Provide **centralized configuration** for URLs, distribution states (`AVAILABLE`, `TESTING`, `COMING_SOON`, `UNAVAILABLE`), and app versions.
- Integrate **lightweight privacy-friendly analytics** for tracking QR scans, route visits, and platform clicks.

### Non-Goals
- No redesign of the entire Pharmora marketing website.
- No changes to the existing Pharmora Console authentication flow (`https://pharmora-console.vercel.app/`).
- No changes to existing desktop downloads (Windows `.exe`, macOS coming soon, Linux coming soon) except adding mobile app cross-links.
- No fake store badges if an app is still in testing or private distribution.

---

## 2. Centralized Configuration Architecture (`lib/mobile-apps.ts`)

All mobile app settings are centralized in a single typed configuration file:

```ts
export type AppDistributionStatus = "AVAILABLE" | "TESTING" | "COMING_SOON" | "UNAVAILABLE";

export interface MobileAppConfig {
  id: "user" | "rider";
  name: string;
  subtitle: string;
  audience: "Customers" | "Delivery Partners";
  tagline: string;
  description: string;
  features: string[];
  version: string;
  updatedDate: string;
  smartRoute: string;
  android: {
    url: string | null;
    status: AppDistributionStatus;
    label: string;
    note?: string;
    fileSize?: string;
    minVersion?: string;
  };
  ios: {
    url: string | null;
    status: AppDistributionStatus;
    label: string;
    note?: string;
  };
  accentColor: string;
  badgeBg: string;
}
```

### Configuration Values:
- **Pharmora User App**:
  - Smart Route: `/download/user`
  - Android: `AVAILABLE` or `TESTING` (APK / Play Store internal test link)
  - iOS: `TESTING` (TestFlight) or `COMING_SOON`
  - Version: `v1.2.0`
- **Pharmora Rider App**:
  - Smart Route: `/download/rider`
  - Android: `TESTING` (Rider APK / Play Store)
  - iOS: `COMING_SOON` / `TESTING` (TestFlight)
  - Version: `v1.1.0`

---

## 3. Smart Download Routes (`/download/user` & `/download/rider`)

### Flow:
```
Visitor scans QR or visits /download/[user|rider]
  │
  ├─ Query: ?source=[website|devfest|pharmacy-poster|tshirt|flyer] (validated)
  │
  ├─ Analytics logged (client or edge)
  │
  ├─ If Android:
  │    └─ Redirect to Android destination (Google Play / APK)
  │
  ├─ If iOS (iPhone, iPad, iPod):
  │    └─ Redirect to iOS destination (App Store / TestFlight)
  │
  └─ If Desktop / Unknown OS:
       └─ Render smart download chooser hub:
            - App Icon, Badges & Verification
            - High-contrast QR code for instant camera scan
            - Direct "Download for Android" button
            - Direct "Download on App Store / TestFlight" button
            - App features & release notes
```

### Security & Safety:
- No user-supplied redirect targets.
- All outbound redirect destinations are strictly resolved from `lib/mobile-apps.ts`.
- Allowed marketing source tokens are validated against an allowlist.

---

## 4. UI Section Layout: "Get the Pharmora App"

### Header
- Category Badge: `MOBILE APPLICATIONS`
- Heading: **"Get the Pharmora App"**
- Subheading: *"Choose the app you need and scan the QR code to install Pharmora on your device."*

### Top App Selector
- Segmented toggle:
  - `[ Both Apps ]` (Desktop view)
  - `[ For Customers ]` (Pharmora User App)
  - `[ For Delivery Partners ]` (Pharmora Rider App)

### Card 1: Pharmora User App (Left)
- **Label**: `For Customers` (Emerald/Mint badge)
- **Title**: `Pharmora`
- **Headline**: *"Your pharmacy access, in your pocket."*
- **Description**: *"Search medicines and health products, discover trusted pharmacies, upload prescriptions, place orders and track deliveries."*
- **Feature Bullets**:
  - Verified local pharmacies
  - Medicine discovery & price check
  - Digital prescription upload
  - Secure Mobile Money & Card checkout
  - Real-time courier delivery tracking
- **Interactive Mobile Mockup**:
  - Pharmacy search bar, category chips, live order status tracker, verified badge.
- **QR Code Card**:
  - White surface, 16px radius, camera icon, subtle hover scan-line.
  - Text: *"Scan to download the Pharmora app"*
- **Store Actions**:
  - Android download button (with device highlight if on Android)
  - iOS download button (with device highlight if on iOS)
  - Status badges (`Available`, `TestFlight`, `Coming Soon`)

### Card 2: Pharmora Rider App (Right)
- **Label**: `For Delivery Partners` (Teal/Dark Emerald badge)
- **Title**: `Pharmora Rider`
- **Headline**: *"Deliver with Pharmora."*
- **Description**: *"Accept deliveries, navigate to pharmacies and customers, track active orders and manage your delivery earnings."*
- **Feature Bullets**:
  - Live dispatch delivery alerts
  - Turn-by-turn route navigation
  - Prescription pickup verification
  - Delivery PIN handoff confirmation
  - Instant Mobile Money earnings payout
- **Interactive Mobile Mockup**:
  - Online toggle, active dispatch order, GPS route preview, customer PIN verification card, daily earnings counter.
- **QR Code Card**:
  - White surface, 16px radius, camera icon, subtle hover scan-line.
  - Text: *"Scan to install Pharmora Rider"*
- **Store Actions**:
  - Android download button
  - iOS download button

---

## 5. Mobile & Responsive Experience

1. **On Mobile Phone Screen**:
   - Scanning a QR code on one's own screen is impractical.
   - For phone visitors, the primary button is the OS-matched direct download button (e.g., *"Download for Android"* or *"Download for iPhone"*).
   - The QR code is provided as a secondary option (*"View QR / Share"*).
2. **On Desktop Screen**:
   - The QR code is prominent, allowing phone camera scanning right from the computer monitor.
   - Direct store buttons remain accessible.
3. **Breakpoints Tested**:
   - `375px`, `390px`, `430px`, `768px`, `1024px`, `1280px`, `1440px`.

---

## 6. Programmatic QR Code Generation

- Uses the `qrcode` library.
- Renders crisp SVG directly into the DOM or responsive high-contrast Canvas data URL.
- Zero external dependencies or network tracking images.
- Quiet zone padding: 2 modules.
- Error correction level: `M` (optimal scan reliability).

---

## 7. Navigation & Footer Integration

- **Navbar**: Add "Mobile Apps" link in navigation bar / Resources dropdown pointing to `#mobile-apps`.
- **Chooser Modal**: Clicking "Download Apps" opens or scrolls smoothly to the relevant section.
- **Footer**: Add "Mobile Apps" column / sub-items for "Pharmora for Customers" and "Pharmora Rider" linking to `/download/user` and `/download/rider`.
