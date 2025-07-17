import Image from "next/image";

// Logo komponens, amely a nyelv, scroll állapot és oldal típusa alapján választja ki a megfelelő logót
export default function DynamicLogo({
	width = 260,
	height = 120,
	className = "LogoImage",
	locale,
	scroll = false, // scroll állapot a fejléc színének megfelelő logo kiválasztásához
	isHomePage = false, // új paraméter: true ha a főoldalon vagyunk
}) {
	// A nyelv, scroll állapot és oldal típusa alapján választjuk ki a megfelelő logót
	const logoSrc = scroll
		? locale === "hu"
			? "/images/logo/logo_hor_hu_color.png" // Sötét logo scrollozott állapotban (fehér háttér)
			: locale === "ro"
			? "/images/logo/logo_hor_ro_color.png" // Sötét logo scrollozott állapotban (fehér háttér) román nyelvhez
			: ""
		: isHomePage
		? locale === "hu"
			? "/images/logo/logo_hor_hu_white.png" // Fehér logo a főoldal tetején (átlátszó háttér)
			: locale === "ro"
			? "/images/logo/logo_hor_ro_white.png" // Fehér logo a főoldal tetején (átlátszó háttér) román nyelvhez
			: ""
		: locale === "hu"
		? "/images/logo/logo_hor_hu_color.png" // Sötét logo más oldalakon (fehér háttér)
		: locale === "ro"
		? "/images/logo/logo_hor_ro_color.png" // Sötét logo más oldalakon (fehér háttér) román nyelvhez
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
