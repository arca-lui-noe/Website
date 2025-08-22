// Example usage of the loading system in a page component

"use client";

import React, { useEffect, useState } from "react";
import { useLoading, useDataLoading } from "@/contexts/LoadingContext";
import { LoadingOverlay, usePageLoading, useApiCall } from "@/hooks/useLoadingState";

// Example 1: Using the withLoading HOC
import { withLoading } from "@/hooks/useLoadingState";

function HeavyDataPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate heavy data loading
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setData("Heavy data loaded!");
    };
    
    loadData();
  }, []);

  return (
    <div>
      <h1>Heavy Data Page</h1>
      <p>{data || "Loading..."}</p>
    </div>
  );
}

// Export the component wrapped with loading
export const HeavyDataPageWithLoading = withLoading(HeavyDataPage, "Loading heavy data...");

// Example 2: Manual loading control
export function ManualLoadingPage() {
  const { isLoading, startLoading, stopLoading } = usePageLoading();
  const [content, setContent] = useState("");

  const loadContent = async () => {
    startLoading();
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setContent("Content loaded successfully!");
    } finally {
      stopLoading();
    }
  };

  return (
    <div>
      <h1>Manual Loading Control</h1>
      <button onClick={loadContent} disabled={isLoading}>
        Load Content
      </button>
      <p>{content}</p>
    </div>
  );
}

// Example 3: Section loading overlay
export function SectionLoadingPage() {
  const [isSection1Loading, setSection1Loading] = useState(false);
  const [isSection2Loading, setSection2Loading] = useState(false);
  const [section1Data, setSection1Data] = useState("");
  const [section2Data, setSection2Data] = useState("");

  const loadSection1 = async () => {
    setSection1Loading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSection1Data("Section 1 data loaded!");
    setSection1Loading(false);
  };

  const loadSection2 = async () => {
    setSection2Loading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSection2Data("Section 2 data loaded!");
    setSection2Loading(false);
  };

  return (
    <div>
      <h1>Section Loading Example</h1>
      
      <LoadingOverlay isLoading={isSection1Loading} message="Loading section 1...">
        <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
          <h2>Section 1</h2>
          <button onClick={loadSection1}>Load Section 1</button>
          <p>{section1Data}</p>
        </div>
      </LoadingOverlay>

      <LoadingOverlay isLoading={isSection2Loading} message="Loading section 2...">
        <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
          <h2>Section 2</h2>
          <button onClick={loadSection2}>Load Section 2</button>
          <p>{section2Data}</p>
        </div>
      </LoadingOverlay>
    </div>
  );
}

// Example 4: API call with loading
export function ApiCallPage() {
  const { callApi } = useApiCall();
  const [result, setResult] = useState("");

  const handleApiCall = async () => {
    try {
      const data = await callApi(
        () => new Promise(resolve => 
          setTimeout(() => resolve("API data fetched!"), 2000)
        ),
        "Fetching data from API..."
      );
      setResult(data);
    } catch (error) {
      setResult("Error loading data");
    }
  };

  return (
    <div>
      <h1>API Call with Loading</h1>
      <button onClick={handleApiCall}>Call API</button>
      <p>{result}</p>
    </div>
  );
}
