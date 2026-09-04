import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pharmora — Modern Pharmacy Operating Platform | Desktop & Web",
  description:
    "Run your pharmacy smarter with Pharmora. Unified inventory control, prescription workflows, POS checkout, customer profiles, and clinical analytics — available for Windows desktop and web.",
  keywords: [
    "pharmacy software",
    "pharmacy management system",
    "pharmacy POS",
    "prescription workflow",
    "drug inventory software",
    "pharmacy retail ERP",
    "Pharmora desktop",
    "pharmacy operations"
  ],
  authors: [{ name: "Pharmora Healthcare Technologies" }],
  openGraph: {
    title: "Pharmora — Modern Pharmacy Operating Platform",
    description:
      "Run your pharmacy smarter. Manage inventory, prescriptions, orders, customers, and operations through one beautifully connected platform.",
    url: "https://pharmora.com",
    siteName: "Pharmora",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0D9488",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} font-sans antialiased h-full`}>
      <body className="min-h-full flex flex-col bg-white text-[#43516A] selection:bg-[#CCFBF1] selection:text-[#0F766E]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
