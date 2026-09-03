# Pharmora Website — Routing & Download Upgrade Specification

## Overview

This specification defines the required upgrades to the **official Pharmora marketing website** (`pharmora_exhbit`).

The scope is limited to:

1. **Sign In button routing** — redirect all authentication entry points to the Pharmora Console
2. **Download section** — add macOS and Linux alongside the existing Windows installer

No unrelated sections are redesigned. The existing visual identity is preserved.

---

## 1. Sign In Button Routing

All visible "Sign In" buttons and authentication entry points on the official Pharmora website must redirect to the Pharmora Console:

```
https://pharmora-console.vercel.app/
```

> **Note:** The console SPA root is the authentication page. The `/login` route returns 404 on the console.

### Required Entry Points

| Location | Type | Status |
|---|---|---|
| Desktop navigation bar | `<a href={PHARMORA_CONSOLE_URL}>` | ✅ Updated |
| Desktop "Use Online" button | `<a href={PHARMORA_CONSOLE_URL}>` | ✅ Updated |
| Mobile hamburger menu — "Use Online" | `<a href={PHARMORA_CONSOLE_URL}>` | ✅ Updated |
| Footer bottom strip — "Sign In" | `<a href={PHARMORA_CONSOLE_URL}>` | ✅ Added |
| `/login` page (marketing site) | Server-side `redirect()` to console | ✅ Updated |
| `/signup` page — "Sign in" footer link | `footerHref={PHARMORA_CONSOLE_URL}` | ✅ Updated |

### Redirect Behavior

- Standard browser navigation (same tab)
- No iframes, no popups, no embedded console
- URL hardcoded via `PHARMORA_CONSOLE_URL` constant in `lib/utils.ts`
- No dynamic redirect parameters

### Expected Flow

```
Official Pharmora Website
→ User clicks "Sign In"
→ Browser navigates to https://pharmora-console.vercel.app/
→ Console authentication page
→ User signs in
→ User enters the Pharmora Console dashboard
```

---

## 2. URL Constants (`lib/utils.ts`)

```ts
/** Official Pharmora Console (SPA root = auth/login page). */
export const PHARMORA_CONSOLE_URL = "https://pharmora-console.vercel.app/";

/** Alias for backwards-compat — points to the same console destination. */
export const PHARMORA_WEB_APP_URL = PHARMORA_CONSOLE_URL;

/** Windows NSIS installer (.exe) */
export const PHARMORA_DOWNLOAD_URL = "/downloads/PharmoraSetup-v1.0.0.exe";

/** macOS DMG — set to a real URL when the macOS build is published. */
export const PHARMORA_MACOS_URL: string | null = null;

/** Linux AppImage — set to a real URL when the Linux build is published. */
export const PHARMORA_LINUX_APPIMAGE_URL: string | null = null;

/** Linux DEB package — set to a real URL when the DEB build is published. */
export const PHARMORA_LINUX_DEB_URL: string | null = null;
```

To activate macOS or Linux downloads when builds are ready, set the respective constant to the release artifact URL.

---

## 3. Desktop Download Options

The download section supports four platforms in a unified card grid.

### Section Header

```
Get Pharmora for your pharmacy

Use Pharmora in your browser or install the desktop app
for your operating system.
```

### Platform Cards

#### Windows

| Field | Value |
|---|---|
| Icon | Windows SVG (blue) |
| Title | Windows |
| Compatibility | Windows 10 / 11 |
| Format | `.exe · v1.0.0 · 64-bit` |
| Button | Download for Windows |
| State machine | Idle → Preparing download… → Download started ✓ |
| Install help | ✅ Modal with 6 steps |

#### macOS

| Field | Value |
|---|---|
| Icon | Apple SVG (dark) |
| Title | macOS |
| Compatibility | macOS 12 or later |
| Format | Coming soon · Apple Silicon & Intel |
| Button | Coming Soon (disabled, dashed border) |
| Activates when | `PHARMORA_MACOS_URL` is set to a real `.dmg` URL |
| Install help | ✅ Modal with 6 steps |

#### Linux

| Field | Value |
|---|---|
| Icon | Linux SVG (orange) |
| Title | Linux |
| Compatibility | Most modern distros |
| Format | Coming soon · AppImage & DEB |
| Button | Coming Soon (disabled) OR "Download for Linux" dropdown |
| Dropdown options | AppImage (most distros), DEB (Ubuntu/Debian) |
| Activates when | `PHARMORA_LINUX_APPIMAGE_URL` or `PHARMORA_LINUX_DEB_URL` is set |
| Install help | ✅ Modal with 7 steps |

#### Browser (Use Online)

| Field | Value |
|---|---|
| Icon | Globe (teal) |
| Title | Browser |
| Compatibility | Chrome · Safari · Firefox · Edge |
| Format | No installation needed |
| Button | Use Pharmora Online |
| Destination | `https://pharmora-console.vercel.app/` |
| Install help | ✅ Modal with 5 steps |

---

## 4. OS Detection

The website detects the visitor's OS client-side via `navigator.userAgent`:

| OS | Recommended card |
|---|---|
| Windows | Windows card gets "Recommended for your device" badge |
| macOS | macOS card gets "Recommended for your device" badge |
| Linux | Linux card gets "Recommended for your device" badge |
| Mobile / Unknown | Browser card gets "Recommended for your device" badge |

Detection is safe and non-blocking. All platforms are always visible regardless of detection result.

---

## 5. Download Button States

| State | Visual |
|---|---|
| Idle | `Download for Windows` (gradient button) |
| Preparing | Spinner + "Preparing download…" |
| Started | Checkmark + "Download started ✓" |
| Auto-reset | Returns to Idle after 4 seconds |

---

## 6. Installation Help Modals

Each platform card has a small "Installation help" link that opens an inline modal with numbered steps:

- **Windows** (6 steps): Download → Open → SmartScreen → Wizard → Launch → Sign In
- **macOS** (6 steps): Download DMG → Open → Drag to Applications → Launch → Gatekeeper → Sign In
- **Linux** (7 steps): AppImage chmod + run, or DEB dpkg install → Launch → Sign In
- **Browser** (5 steps): Open browser → Navigate → Sign In → Bookmark → Done

All modals have a "Sign in after installing →" link pointing to the console.

---

## 7. Mobile Visitors

On mobile or unknown devices, the Browser card is marked as recommended. Desktop installer cards are always visible and accessible — users can scroll to choose any platform.

---

## 8. Desktop Authentication

After installing on any platform, the user signs in through the existing Pharmora Console authentication system at:

```
https://pharmora-console.vercel.app/
```

- No separate user database for desktop users
- Same Pharmora account works across: Browser, Windows, macOS (when available), Linux (when available)
- The marketing website does not duplicate the authentication system

---

## 9. Error Handling

- macOS and Linux display "Coming Soon" with a dashed disabled button — no dead links
- When `PHARMORA_MACOS_URL` / `PHARMORA_LINUX_APPIMAGE_URL` / `PHARMORA_LINUX_DEB_URL` are `null`, the Coming Soon state is shown automatically
- When set to real URLs, the live download buttons activate immediately without any code changes beyond setting the constant

---

## 10. Files Modified

| File | Change |
|---|---|
| `lib/utils.ts` | Added `PHARMORA_CONSOLE_URL`, `PHARMORA_MACOS_URL`, `PHARMORA_LINUX_APPIMAGE_URL`, `PHARMORA_LINUX_DEB_URL` |
| `components/Navbar.tsx` | Sign In + Use Online → external redirect to console; removed AuthModal state |
| `components/DownloadSection.tsx` | Full rewrite — 4-platform cards, OS detection, state machine, install help modals |
| `components/Footer.tsx` | Added Sign In link, added macOS/Linux platform entries, updated badges |
| `app/downloads/page.tsx` | Full rewrite — 4-platform cards, system requirements, same install help modals |
| `app/login/page.tsx` | Replaced with server-side `redirect(PHARMORA_CONSOLE_URL)` |
| `app/signup/page.tsx` | `footerHref` updated to `PHARMORA_CONSOLE_URL` |

---

## 11. Out of Scope (Not Changed)

- Pharmora Console UI
- Pricing section
- Pharmacy onboarding flow
- Dashboard pages
- AI features
- All other marketing sections not related to Sign In or downloads
