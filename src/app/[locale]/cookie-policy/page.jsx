import React from "react";
import { generatePageMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
	const { locale } = await params;
	return await generatePageMetadata("cookie-policy", locale);
}

const page = async ({ params }) => {
	const t = await getTranslations("CookiePolicy");

	return (
		<>
			<section className="shipping_info_section section_space_lg pb-0">
				<div className="container">
					<div className="row justify-content-center">
						<div className="shipping_info_wrap col col-lg-8">
							<h1>{t("title")}</h1>

							<h3>{t("s1-heading")}</h3>
							<p>{t("s1-text")}</p>

							<h3>{t("s2-heading")}</h3>
							<p>{t("s2-intro")}</p>
							<ul className="icon_list unorder_list_block">
								<li>
									<i className="fas fa-circle"></i>
									<span>
										<strong>{t("s2-item1-label")}</strong> {t("s2-item1-text")}
									</span>
								</li>
								<li>
									<i className="fas fa-circle"></i>
									<span>
										<strong>{t("s2-item2-label")}</strong> {t("s2-item2-text")}
									</span>
								</li>
								<li>
									<i className="fas fa-circle"></i>
									<span>
										<strong>{t("s2-item3-label")}</strong> {t("s2-item3-text")}
									</span>
								</li>
							</ul>

							<h3>{t("s3-heading")}</h3>
							<p>{t("s3-intro")}</p>
							<ul className="icon_list unorder_list_block">
								<li>
									<i className="fas fa-circle"></i>
									<span>
										<strong>{t("s3-item1-label")}</strong> {t("s3-item1-text")}
									</span>
								</li>
								<li>
									<i className="fas fa-circle"></i>
									<span>
										<strong>{t("s3-item2-label")}</strong> {t("s3-item2-text")}
									</span>
								</li>
								<li>
									<i className="fas fa-circle"></i>
									<span>
										<strong>{t("s3-item3-label")}</strong> {t("s3-item3-text")}
									</span>
								</li>
							</ul>

							<h3>{t("s4-heading")}</h3>
							<p>{t("s4-text")}</p>

							<h3>{t("s5-heading")}</h3>
							<p>{t("s5-intro")}</p>
							<ul className="icon_list unorder_list_block">
								<li>
									<i className="fas fa-circle"></i>
									<span>
										<strong>{t("s5-item1-label")}</strong> {t("s5-item1-text")}
									</span>
								</li>
								<li>
									<i className="fas fa-circle"></i>
									<span>
										<strong>{t("s5-item2-label")}</strong> {t("s5-item2-text")}
									</span>
								</li>
							</ul>

							<h3>{t("s6-heading")}</h3>
							<p className="mb-0">
								{t("contact-text")}{" "}
								<a href={`mailto:${t("contact-email")}`}>
									{t("contact-email")}
								</a>
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default page;
