import Image from "next/image";

export default function DynamicLogo({
	width = 260,
	height = 120,
	className = "LogoImage",
	locale,
	scroll = false,
	isHomePage = false,
}) {
	const logoSrc = scroll
		? locale === "hu"
			? "/images/logo/logo_hor_hu_color.png"
			: locale === "ro"
			? "/images/logo/logo_hor_ro_color.png"
			: ""
		: isHomePage
		? locale === "hu"
			? "/images/logo/logo_hor_hu_white.png"
			: locale === "ro"
			? "/images/logo/logo_hor_ro_white.png"
			: ""
		: locale === "hu"
		? "/images/logo/logo_hor_hu_color.png"
		: locale === "ro"
		? "/images/logo/logo_hor_ro_color.png"
		: "";

	const logoAlt = locale === "hu" ? "Noé Bárkája logo" : "Arca lui Noe logo";

	return (
		<Image
			src={logoSrc}
			alt={logoAlt}
			width={width}
			height={height}
			priority={true}
			className={className}
			placeholder="blur"
			blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFdgI2NIx12QAAAABJRU5ErkJggg=="
		/>
	);
}
