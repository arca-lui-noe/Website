import Link from "next/link";

export default function Footer({ locale, dict }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <div className="flex flex-col items-center text-center gap-4">
          <nav className="flex gap-4">
            <Link href={`/${locale}/terms`} className="nav-link">
              {}
            </Link>
            <Link href={`/${locale}/terms`} className="nav-link">
              {}
            </Link>
            <Link href={`/${locale}/contact`} className="nav-link">
              {}
            </Link>
          </nav>

          <div>{}</div>

          {/* Strukturált adat a jobb SEO-ért */}
          <div className="sr-only" aria-hidden="true">
            <address itemScope itemType="https://schema.org/Organization">
              <span itemProp="name">NextJS Sample</span>
              <link itemProp="url" href={`https://your.com/${locale}`} />
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
