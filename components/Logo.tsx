import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark" | "monochrome";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export default function Logo({
  variant = "dark",
  size = "md",
  showTagline = false,
}: LogoProps) {
  const isLight = variant === "light";

  const sizeClasses = {
    sm: "h-7 w-7 text-lg",
    md: "h-9 w-9 text-xl",
    lg: "h-11 w-11 text-2xl",
  };

  const iconSizes = {
    sm: "h-7 w-7",
    md: "h-9 w-9",
    lg: "h-11 w-11",
  };

  return (
    <Link href="/" className="inline-flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] rounded-lg">
      {/* Precision Geometric Healthcare Mark */}
      <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0D9488] via-[#0F766E] to-[#14B8A6] shadow-md shadow-[#0D9488]/20 transition-transform duration-300 group-hover:scale-105 ${iconSizes[size]}`}>
        {/* Modern Medical Plus & Core Aperture */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5/8 h-5/8 text-white"
        >
          {/* Vertical Bar */}
          <rect x="9.5" y="4" width="5" height="16" rx="2.5" fill="white" />
          {/* Horizontal Bar */}
          <rect x="4" y="9.5" width="16" height="5" rx="2.5" fill="white" />
          {/* Inner Accent Ring / Pulse point */}
          <circle cx="12" cy="12" r="2.2" fill="#0F766E" />
          <circle cx="12" cy="12" r="1.1" fill="#CCFBF1" />
        </svg>
        
        {/* Subtle glowing ring overlay */}
        <div className="absolute inset-0 rounded-xl border border-white/20 pointer-events-none" />
      </div>

      {/* Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center">
          <span
            className={`font-extrabold tracking-tight font-sans transition-colors ${
              isLight ? "text-white" : "text-[#0B1739]"
            } ${sizeClasses[size].split(" ")[1]}`}
          >
            Pharmora
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#0D9488] ml-1 self-baseline mt-auto mb-1.5 animate-pulse" />
        </div>
        {showTagline && (
          <span
            className={`text-[10px] uppercase font-semibold tracking-wider ${
              isLight ? "text-teal-300/80" : "text-[#667085]"
            }`}
          >
            Pharmacy Operating System
          </span>
        )}
      </div>
    </Link>
  );
}

