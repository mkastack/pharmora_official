import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ──────────────────────────────────────────────────────────────────────────────
// Pharmora URL constants
// ──────────────────────────────────────────────────────────────────────────────

/** Official Pharmora Console (SPA root = auth/login page). */
export const PHARMORA_CONSOLE_URL = "https://pharmora-console.vercel.app/";

/**
 * Alias kept for backwards-compat references to "web app".
 * Points to the same console destination.
 */
export const PHARMORA_WEB_APP_URL = PHARMORA_CONSOLE_URL;

// ──────────────────────────────────────────────────────────────────────────────
// Desktop installer download URLs
// ──────────────────────────────────────────────────────────────────────────────

/** Windows NSIS installer (.exe) */
export const PHARMORA_DOWNLOAD_URL = "/downloads/PharmoraSetup-v1.0.0.exe";

/** macOS DMG — set to a real release URL when the macOS build is published. */
export const PHARMORA_MACOS_URL: string | null = null;

/** Linux AppImage — set to a real release URL when the Linux build is published. */
export const PHARMORA_LINUX_APPIMAGE_URL: string | null = null;

/** Linux DEB package — set to a real release URL when the DEB build is published. */
export const PHARMORA_LINUX_DEB_URL: string | null = null;

// ──────────────────────────────────────────────────────────────────────────────
// Misc
// ──────────────────────────────────────────────────────────────────────────────

export const PHARMORA_DEMO_URL = "/contact?type=demo";
