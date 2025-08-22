"use client";

import React, { useState } from "react";

export default function LoadingButton({
	children,
	onClick,
	loading = false,
	loadingText = "Loading...",
	disabled = false,
	className = "",
	type = "button",
	...props
}) {
	const [isInternalLoading, setIsInternalLoading] = useState(false);

	const isLoading = loading || isInternalLoading;

	const handleClick = async (e) => {
		if (isLoading || disabled) return;

		if (onClick) {
			// If onClick returns a promise, handle loading state automatically
			const result = onClick(e);
			if (result && typeof result.then === "function") {
				setIsInternalLoading(true);
				try {
					await result;
				} finally {
					setIsInternalLoading(false);
				}
			}
		}
	};

	return (
		<button
			type={type}
			onClick={handleClick}
			disabled={isLoading || disabled}
			className={`loading-button ${isLoading ? "loading" : ""} ${className}`}
			{...props}>
			{isLoading && <span className="loading-button-spinner" />}
			<span className={isLoading ? "loading-button-text" : ""}>
				{isLoading ? loadingText : children}
			</span>
		</button>
	);
}

// Export a styled version with default styling
export function StyledLoadingButton(props) {
	return (
		<LoadingButton
			className="btn btn-primary loading-button-styled"
			{...props}
		/>
	);
}
