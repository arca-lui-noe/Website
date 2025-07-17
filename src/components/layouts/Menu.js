import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Menu({ locale }) {
	const menu_text = useTranslations("Menu");

	return (
		<>
			<ul className="navigation">
				<li className="">
					<Link href={`/${locale}`}>{menu_text("home-title")}</Link>
				</li>
				<li className="">
					<Link href={`/${locale}/about`}>{menu_text("about-title")}</Link>
				</li>
				<li className="">
					<Link href={`/${locale}/about`}>
						{menu_text("how_we_started-title")}
					</Link>
				</li>
				<li className="">
					<Link href={`/${locale}/services`}>
						{menu_text("services-title")}
					</Link>
				</li>
				<li className="">
					<Link href={`/${locale}/blog`}>{menu_text("blog-title")}</Link>
				</li>
			</ul>
		</>
	);
}
