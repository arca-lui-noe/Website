"use client";

import React, { createContext, useContext, useState } from "react";

const LoadingContext = createContext({
  isLoading: false,
  setLoading: () => {},
  loadingMessage: "",
  setLoadingMessage: () => {},
});

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");

  const setLoading = (loading, message = "") => {
    setIsLoading(loading);
    setLoadingMessage(message);
    
    // Prevent scrolling when loading
    if (loading) {
      document.body.classList.add("loading-active");
    } else {
      document.body.classList.remove("loading-active");
    }
  };

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setLoading,
        loadingMessage,
        setLoadingMessage,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}

// Hook for data loading scenarios
export function useDataLoading() {
  const { setLoading } = useLoading();

  const withLoading = async (asyncFunction, message = "Loading...") => {
    try {
      setLoading(true, message);
      const result = await asyncFunction();
      return result;
    } finally {
      setLoading(false);
    }
  };

  return { withLoading };
}
