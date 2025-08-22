"use client";

import React, { useState, useEffect } from "react";
import { useLoading } from "@/contexts/LoadingContext";
import LoadingScreen from "@/components/ui/LoadingScreen";

// HOC for pages with heavy data loading
export function withLoading(
	WrappedComponent,
	loadingMessage = "Loading data..."
) {
	return function WithLoadingComponent(props) {
		const [isDataLoading, setIsDataLoading] = useState(true);
		const { setLoading } = useLoading();

		useEffect(() => {
			// Simulate or handle actual data loading
			const timer = setTimeout(() => {
				setIsDataLoading(false);
			}, 500); // Adjust this based on your actual data loading time

			return () => clearTimeout(timer);
		}, []);

		useEffect(() => {
			setLoading(isDataLoading, loadingMessage);
		}, [isDataLoading, setLoading, loadingMessage]);

		return <WrappedComponent {...props} />;
	};
}

// Hook for manual loading control in components
export function usePageLoading(initialLoading = false) {
	const [isPageLoading, setIsPageLoading] = useState(initialLoading);
	const { setLoading } = useLoading();

	useEffect(() => {
		setLoading(isPageLoading);
	}, [isPageLoading, setLoading]);

	return {
		isLoading: isPageLoading,
		setLoading: setIsPageLoading,
		startLoading: () => setIsPageLoading(true),
		stopLoading: () => setIsPageLoading(false),
	};
}

// Component for sections that need loading overlay
export function LoadingOverlay({
	isLoading,
	children,
	message = "Loading...",
}) {
	if (!isLoading) {
		return children;
	}

	return (
		<div style={{ position: "relative" }}>
			{children}
			<div className="loading-overlay">
				<div className="loading-spinner">
					<div className="spinner"></div>
					<p>{message}</p>
				</div>
			</div>
		</div>
	);
}

// Hook for API calls with loading state
export function useApiCall() {
	const { setLoading } = useLoading();

	const callApi = async (apiFunction, loadingMessage = "Processing...") => {
		try {
			setLoading(true, loadingMessage);
			const result = await apiFunction();
			return result;
		} catch (error) {
			throw error;
		} finally {
			setLoading(false);
		}
	};

	return { callApi };
}
