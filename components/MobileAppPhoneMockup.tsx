"use client";

import Image from "next/image";

interface MobileAppPhoneMockupProps {
  appType: "user" | "rider";
  className?: string;
  priority?: boolean;
}

export default function MobileAppPhoneMockup({
  appType,
  className = "",
  priority = false,
}: MobileAppPhoneMockupProps) {
  const isUser = appType === "user";
  const imageSrc = isUser
    ? "/images/pharmora-user-app-mockup.png"
    : "/images/pharmora-rider-app-mockup.png";
  const altText = isUser
    ? "Pharmora Customer Mobile App UI Preview"
    : "Pharmora Rider & Driver Mobile App UI Preview";

  return (
    <div className={`relative mx-auto flex items-center justify-center ${className}`}>
      {/* Soft atmospheric ambient glow behind phone */}
      <div
        className={`absolute inset-0 m-auto w-4/5 h-4/5 rounded-full blur-3xl pointer-events-none opacity-30 ${
          isUser ? "bg-[#0D9488]" : "bg-[#059669]"
        }`}
      />

      <div className="relative z-10 select-none">
        <Image
          src={imageSrc}
          alt={altText}
          width={360}
          height={720}
          priority={priority}
          className="w-full max-w-[240px] sm:max-w-[260px] lg:max-w-[280px] h-auto object-contain drop-shadow-[0_24px_48px_rgba(15,23,42,0.3)] hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
    </div>
  );
}
