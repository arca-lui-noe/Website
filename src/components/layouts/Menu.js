import Link from "next/link";

export default function Menu({ locale }) {
	return (
		<>
			<ul className="navigation">
				<li className="">
					<Link href={`/${locale}`}>Home</Link>
				</li>
				<li className="">
					<Link href={`/${locale}/about`}>About Us</Link>
				</li>
				<li className="">
					<Link href={`/${locale}/about`}>How we started</Link>
				</li>
				<li className="">
					<Link href={`/${locale}/services`}>Services</Link>
				</li>
				<li className="">
					<Link href={`/${locale}/blog`}>Blogs</Link>
				</li>
			</ul>
		</>
	);
}
