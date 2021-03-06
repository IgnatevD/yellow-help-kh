/** @format */

import React from "react"
import Container from "../Container"
import Requisites from "../Requisites"
import Networks from "./Networks"
import { useTranslation } from "react-i18next"
import styles from "./Footer.module.scss"
import Svg from "../Svg"

const Footer = () => {
  const { t, i18n } = useTranslation()

  const networkLink = [
    {
      tagrget: "_blank",
      link: "https://www.facebook.com/yellowHelpKh/",
      icon: "#icon-facebook",
      name: "@yellowHelpKh",
    },
    {
      tagrget: "_blank",
      link: "https://www.instagram.com/yellow_help_kh/",
      icon: "#icon-instagram",
      name: "@yellow_help_kh",
    },
    {
      tagrget: "_blank",
      link: "https://t.me/yellow_help",
      icon: "#icon-telegram",
      name: "t.me/yellow_help",
    },
  ]

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.contacts}>
          <div className={styles.container__logo}>
            <Svg
              icon={i18n.language === "ua" ? "#icon-logo" : "#icon-logo-en"}
              className={styles.logo}
            />
            <p className={styles.address}>{t("section.contacts.address")}</p>
          </div>
          <div className={styles.container__contacts}>
            <div className={styles.container__network}>
              <ul className={styles.network__list}>
                {networkLink.map(({ tagrget, link, icon, name }, index) => (
                  <Networks
                    tagrget={tagrget}
                    link={link}
                    icon={icon}
                    name={name}
                    key={index}
                  />
                ))}
              </ul>
              <a href='tel:+380662268855' className={styles.telephone__link}>
                +38(066)226-88-55
              </a>
            </div>
            <div className={styles.container__requisites}>
              <h3 className={styles.name__organization}>
                {t("section.contacts.nameOrganization")}
              </h3>
              <Requisites className={styles.requisites} />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
