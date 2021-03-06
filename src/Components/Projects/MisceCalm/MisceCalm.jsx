/** @format */

import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import Button from "../../Button"

import styles from "./MisceCalm.module.scss"

const MisceCalm = () => {
  const [moreInfo, setMoreInfo] = useState(false)
  const { t } = useTranslation()

  return (
    <>
      <div className={styles.container}>
        <h2> {t("section.projects.misceCalm.title")}</h2>
        <p> {t("section.projects.misceCalm.description")}</p>
      </div>
      {moreInfo && (
        <div className={styles.description}>
          <p> {t("section.projects.misceCalm.description")}</p>
        </div>
      )}
      <Button
        onClick={() => setMoreInfo((prev) => !prev)}
        className={styles.btn__more}>
        {moreInfo ? "Сховати" : "Докладніше"}
      </Button>
    </>
  )
}

export default MisceCalm
