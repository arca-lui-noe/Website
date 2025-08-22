import Link from "next/link";

export default function Navigation({ locale, navigationLabels }) {
	// Server komponens - nincs usePathname kliens hook

	return (
		<nav className="nav">
			<Link href={`/`} className="nav-link">
				{navigationLabels.home}
			</Link>
			<Link href={`/about`} className="nav-link">
				{navigationLabels.about}
			</Link>
			<Link href={`/contact`} className="nav-link">
				{navigationLabels.contact}
			</Link>
		</nav>
	);
}
