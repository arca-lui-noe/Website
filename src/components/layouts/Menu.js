import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Menu() {
	const menu_text = useTranslations("Menu");

	return (
		<>
			<ul className="navigation">
				<li className="">
					<Link href={`/`}>{menu_text("home-title")}</Link>
				</li>
				<li className="">
					<Link href={`/about`}>{menu_text("about-title")}</Link>
				</li>
				<li className="">
					<Link href={`/history`}>{menu_text("how_we_started-title")}</Link>
				</li>
				<li className="">
					<Link href={`/services`}>{menu_text("services-title")}</Link>
				</li>
				<li className="">
					<Link href={`/blog`}>{menu_text("blog-title")}</Link>
				</li>
			</ul>
		</>
	);
}
