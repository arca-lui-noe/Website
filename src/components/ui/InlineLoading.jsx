"use client";

import React from "react";

export default function InlineLoading({ 
  text = "Loading...", 
  size = "small",
  className = "" 
}) {
  const sizeClass = size === "large" ? "loading-spinner" : "inline-loading";
  
  return (
    <div className={`${sizeClass} ${className}`}>
      <div className="spinner" />
      <span>{text}</span>
    </div>
  );
}

// For backward compatibility with existing code
export function LoadingSpinner({ text = "Loading..." }) {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>{text}</p>
    </div>
  );
}
