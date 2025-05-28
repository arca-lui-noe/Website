import Image from 'next/image';

// Logo komponens, amely a nyelv alapján választja ki a megfelelő logót
export default function DynamicLogo({ 
  width = 260, 
  height = 120, 
  className = "LogoImage", 
  locale 
}) {
  // A nyelv alapján választjuk ki a megfelelő logót
  const logoSrc = locale === 'hu' 
    ? "/images/logo/NoéBárkája_HorizontalLogo-ColorD.png"
    : "/images/logo/Arca-lui-Noe_HorizontalLogo-ColorD.png";
  
  const logoAlt = locale === 'hu' ? "Noé Bárkája logo" : "Arca lui Noe logo";
  
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