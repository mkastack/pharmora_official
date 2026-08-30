import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PHARMORA_DOWNLOAD_URL = "/downloads/PharmoraSetup-v1.0.0.exe";
export const PHARMORA_WEB_APP_URL = "https://app.pharmora.com";
export const PHARMORA_DEMO_URL = "/contact?type=demo";
