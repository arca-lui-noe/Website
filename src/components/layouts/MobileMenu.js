"use client";
import { Link } from "@/i18n/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function MobileMenu() {
	const [isActive, setIsActive] = useState({
		status: false,
		key: "",
	});
	const menu_text = useTranslations("Menu");

	const handleClick = (key) => {
		if (isActive.key === key) {
			setIsActive({
				status: false,
			});
		} else {
			setIsActive({
				status: true,
				key,
			});
		}
	};
	return (
		<>
			<ul className="navigation clearfix">
				{/*Keep This Empty / Menu will come through Javascript*/}
				<li className="">
					<Link href="/">{menu_text("home-title")}</Link>
				</li>
				<li className="">
					<Link href="/about">{menu_text("about-title")}</Link>
				</li>
				<li className="">
					<Link href="/about">{menu_text("how_we_started-title")}</Link>
				</li>
				<li className="">
					<Link href="/services">{menu_text("services-title")}</Link>
				</li>
				<li className="">
					<Link href="/blog">{menu_text("blog-title")}</Link>
				</li>
			</ul>
		</>
	);
}
