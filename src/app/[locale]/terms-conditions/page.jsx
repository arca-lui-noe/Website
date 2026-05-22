import React from 'react'
import { generatePageMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return await generatePageMetadata("terms-conditions", locale);
}

const page = async ({ params }) => {
  const t = await getTranslations("TermsConditions");

  return (
    <>
      <section className="shipping_info_section section_space_lg pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="shipping_info_wrap col col-lg-8">
              <h2>{t("title")}</h2>

              <h3>{t("s1-heading")}</h3>
              <p>{t("s1-text")}</p>

              <h3>{t("s2-heading")}</h3>
              <p>{t("s2-intro")}</p>
              <ul className="icon_list unorder_list_block">
                <li>
                  <i className="fas fa-circle"></i>
                  <span><strong>{t("s2-item1-label")}</strong> {t("s2-item1-text")}</span>
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  <span><strong>{t("s2-item2-label")}</strong> {t("s2-item2-text")}</span>
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  <span><strong>{t("s2-item3-label")}</strong> {t("s2-item3-text")}</span>
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  <span><strong>{t("s2-item4-label")}</strong> {t("s2-item4-text")}</span>
                </li>
              </ul>
              <p>{t("s2-footer")}</p>

              <h3>{t("s3-heading")}</h3>
              <p>{t("s3-intro")}</p>
              <ul className="icon_list unorder_list_block">
                <li><i className="fas fa-circle"></i><span>{t("s3-item1")}</span></li>
                <li><i className="fas fa-circle"></i><span>{t("s3-item2")}</span></li>
                <li><i className="fas fa-circle"></i><span>{t("s3-item3")}</span></li>
                <li><i className="fas fa-circle"></i><span>{t("s3-item4")}</span></li>
                <li><i className="fas fa-circle"></i><span>{t("s3-item5")}</span></li>
              </ul>

              <h3>{t("s4-heading")}</h3>
              <p>{t("s4-text")}</p>

              <h3>{t("s5-heading")}</h3>
              <p>{t("s5-text")}</p>

              <h3>{t("s6-heading")}</h3>
              <p>{t("s6-intro")}</p>
              <ul className="icon_list unorder_list_block">
                <li>
                  <i className="fas fa-circle"></i>
                  <span><strong>{t("s6-item1-label")}</strong> {t("s6-item1-text")}</span>
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  <span><strong>{t("s6-item2-label")}</strong> {t("s6-item2-text")}</span>
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  <span><strong>{t("s6-item3-label")}</strong> {t("s6-item3-text")}</span>
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  <span><strong>{t("s6-item4-label")}</strong> {t("s6-item4-text")}</span>
                </li>
              </ul>
              <p>{t("s6-footer")}</p>

              <h3>{t("s7-heading")}</h3>
              <p>{t("s7-text")}</p>

              <h3>{t("s8-heading")}</h3>
              <p>{t("s8-intro")}</p>
              <ul className="icon_list unorder_list_block">
                <li>
                  <i className="fas fa-circle"></i>
                  <span><strong>{t("s8-item1-label")}</strong> {t("s8-item1-text")}</span>
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  <span><strong>{t("s8-item2-label")}</strong> {t("s8-item2-text")}</span>
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  <span><strong>{t("s8-item3-label")}</strong> {t("s8-item3-text")}</span>
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  <span><strong>{t("s8-item4-label")}</strong> {t("s8-item4-text")}</span>
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  <span><strong>{t("s8-item5-label")}</strong> {t("s8-item5-text")}</span>
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  <span><strong>{t("s8-item6-label")}</strong> {t("s8-item6-text")}</span>
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  <span><strong>{t("s8-item7-label")}</strong> {t("s8-item7-text")}</span>
                </li>
                <li>
                  <i className="fas fa-circle"></i>
                  <span><strong>{t("s8-item8-label")}</strong> {t("s8-item8-text")}</span>
                </li>
              </ul>
              <p className="mb-0">
                {t("contact-text")} <a href={`mailto:${t("contact-email")}`}>{t("contact-email")}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
