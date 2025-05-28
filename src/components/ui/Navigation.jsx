import Link from 'next/link';

export default function Navigation({ locale, navigationLabels }) {
  // Server komponens - nincs usePathname kliens hook
  
  return (
    <nav className="nav">
      <Link href={`/${locale}`} className="nav-link">
        {navigationLabels.home}
      </Link>
      <Link href={`/${locale}/about`} className="nav-link">
        {navigationLabels.about}
      </Link>
      <Link href={`/${locale}/contact`} className="nav-link">
        {navigationLabels.contact}
      </Link>
    </nav>
  );
}