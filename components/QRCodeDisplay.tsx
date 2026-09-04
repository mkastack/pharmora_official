"use client";

import { useEffect, useState, useRef } from "react";
import QRCode from "qrcode";
import { Camera, Copy, Check, ExternalLink, QrCode } from "lucide-react";

interface QRCodeDisplayProps {
  smartUrl: string;
  appTitle: string;
  subPrompt?: string;
  accentColor?: string;
  size?: number;
  className?: string;
  onScanTrack?: () => void;
}

export default function QRCodeDisplay({
  smartUrl,
  appTitle,
  subPrompt = "Scan with your phone camera",
  accentColor = "#0D9488",
  size = 196,
  className = "",
  onScanTrack,
}: QRCodeDisplayProps) {
  const [svgMarkup, setSvgMarkup] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [resolvedUrl, setResolvedUrl] = useState(smartUrl);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Compute full URL with current origin if it's a relative smart path
  useEffect(() => {
    let fullUrl = smartUrl;
    if (typeof window !== "undefined" && smartUrl.startsWith("/")) {
      fullUrl = `${window.location.origin}${smartUrl}`;
    }
    setResolvedUrl(fullUrl);

    // Generate high-contrast SVG
    QRCode.toString(fullUrl, {
      type: "svg",
      errorCorrectionLevel: "M",
      margin: 2,
      color: {
        dark: "#082725", // deep teal-navy for high contrast and brand aesthetic
        light: "#FFFFFF",
      },
    })
      .then((svg) => {
        setSvgMarkup(svg);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error("Failed to generate QR code SVG:", err);
      });
  }, [smartUrl]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(resolvedUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => {
        setIsHovered(true);
        if (onScanTrack) onScanTrack();
      }}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex flex-col items-center text-center transition-all duration-300 ${className}`}
    >
      {/* Premium QR Container Surface */}
      <div className="relative p-3.5 sm:p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-[0_8px_30px_rgba(15,23,42,0.06)] group-hover:shadow-[0_16px_40px_rgba(13,148,136,0.14)] group-hover:border-[#99F6E4] group-hover:-translate-y-1 transition-all duration-300">
        
        {/* Subtle Scan-line Sweep Animation (runs once when hovered) */}
        <div
          className={`absolute inset-x-3 h-0.5 bg-gradient-to-r from-transparent via-[#0D9488] to-transparent pointer-events-none transition-all duration-700 ease-out z-20 ${
            isHovered
              ? "top-[calc(100%-14px)] opacity-80"
              : "top-3 opacity-0"
          }`}
        />

        {/* The Programmatic QR Graphic */}
        <div
          className="relative flex items-center justify-center overflow-hidden rounded-xl bg-white"
          style={{ width: size, height: size }}
          aria-label={`QR Code to install ${appTitle}`}
          role="img"
        >
          {svgMarkup ? (
            <div
              className="w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:block"
              dangerouslySetInnerHTML={{ __html: svgMarkup }}
            />
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full bg-slate-50 text-slate-400">
              <QrCode className="w-10 h-10 animate-pulse text-[#0D9488]" />
              <span className="text-[11px] font-mono mt-1">Generating QR…</span>
            </div>
          )}

          {/* Centered Subtle Brand Mark Pill */}
          <div className="absolute inset-0 m-auto w-8 h-8 rounded-lg bg-white/95 border border-[#99F6E4] shadow-sm flex items-center justify-center pointer-events-none">
            <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-[#059669] to-[#0D9488] flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
            </span>
          </div>
        </div>

        {/* Small Scan Prompt Below */}
        <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-center gap-1.5 text-xs text-[#43516A]">
          <Camera className="w-3.5 h-3.5 text-[#0D9488]" />
          <span className="font-medium text-[12px]">{subPrompt}</span>
        </div>
      </div>

      {/* Copy / Link helper strip */}
      <div className="mt-2.5 flex items-center gap-2">
        <button
          onClick={handleCopy}
          type="button"
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium text-[#667085] hover:text-[#0D9488] hover:bg-white/80 transition-colors"
          title="Copy smart download link"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-[#059669]" />
              <span className="text-[#059669] font-semibold">Link copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy link</span>
            </>
          )}
        </button>

        <span className="text-slate-300">·</span>

        <a
          href={smartUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium text-[#667085] hover:text-[#0D9488] hover:bg-white/80 transition-colors"
          title="Open smart route directly"
        >
          <span>Open link</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
