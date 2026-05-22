import React from 'react'
import { generatePageMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return await generatePageMetadata("privacy-policy", locale);
}

const page = async ({ params }) => {
  const t = await getTranslations("PrivacyPolicy");

  return (
    <>
      <section className="shipping_info_section section_space_lg pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="shipping_info_wrap col col-lg-8">
              <h2>{t("title")}</h2>

              <p>{t("intro1")}</p>
              <p>{t("intro2")}</p>

              <h3>{t("s1-heading")}</h3>
              <p>{t("s1-text1")}</p>
              <p>{t("s1-text2")}</p>
              <ul className="icon_list unorder_list_block">
                <li><i className="fas fa-circle"></i><span>{t("s1-item1")}</span></li>
                <li><i className="fas fa-circle"></i><span>{t("s1-item2")}</span></li>
                <li><i className="fas fa-circle"></i><span>{t("s1-item3")}</span></li>
              </ul>
              <p>{t("s1-text3")}</p>

              <h3>{t("s2-heading")}</h3>
              <p>{t("s2-text")}</p>

              <h3>{t("s3-heading")}</h3>
              <p>{t("s3-intro")}</p>
              <ul className="icon_list unorder_list_block">
                <li>
                  <i className="fas fa-circle"></i>
                  <span><strong>{t("s3-item1-label")}</strong> {t("s3-item1-text")}</span>
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  <span><strong>{t("s3-item2-label")}</strong> {t("s3-item2-text")}</span>
                </li>
              </ul>
              <p>{t("s3-footer")}</p>

              <h3>{t("s4-heading")}</h3>
              <p>{t("s4-text")}</p>

              <h3>{t("s5-heading")}</h3>
              <p>{t("s5-intro")}</p>
              <ul className="icon_list unorder_list_block">
                <li><i className="fas fa-circle"></i><span>{t("s5-item1")}</span></li>
                <li><i className="fas fa-circle"></i><span>{t("s5-item2")}</span></li>
                <li><i className="fas fa-circle"></i><span>{t("s5-item3")}</span></li>
                <li><i className="fas fa-circle"></i><span>{t("s5-item4")}</span></li>
                <li><i className="fas fa-circle"></i><span>{t("s5-item5")}</span></li>
                <li><i className="fas fa-circle"></i><span>{t("s5-item6")}</span></li>
              </ul>
              <p>
                {t("contact-text")} <a href={`mailto:${t("contact-email")}`}>{t("contact-email")}</a>
              </p>

              <h3>{t("s6-heading")}</h3>
              <p className="mb-0">{t("s6-text")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
