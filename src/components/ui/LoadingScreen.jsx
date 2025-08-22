"use client";

import React from "react";
import Image from "next/image";

export default function LoadingScreen({ locale = "hu" }) {
  // Choose logo based on locale
  const logoSrc = locale === "hu" 
    ? "/images/logo/logo_hor_hu_color.png"
    : "/images/logo/logo_hor_ro_color.png";

  return (
    <div className="loading-screen">
      <div className="loading-screen-content">
        <div className="logo-container">
          <Image
            src={logoSrc}
            alt="Logo"
            width={200}
            height={100}
            priority
            className="loading-logo"
          />
        </div>
      </div>
    </div>
  );
}

// Loading screen with custom content
export function LoadingScreenWithContent({ children, locale = "hu" }) {
  const logoSrc = locale === "hu" 
    ? "/images/logo/logo_hor_hu_color.png"
    : "/images/logo/logo_hor_ro_color.png";

  return (
    <div className="loading-screen">
      <div className="loading-screen-content">
        <div className="logo-container">
          <Image
            src={logoSrc}
            alt="Logo"
            width={200}
            height={100}
            priority
            className="loading-logo"
          />
        </div>
        {children && (
          <div className="loading-additional-content">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
