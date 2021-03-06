/** @format */

import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import Button from "../../Button"

import styles from "./HearUkraine.module.scss"

const HearUkraine = () => {
  const [moreInfo, setMoreInfo] = useState(false)
  const { t } = useTranslation()

  return (
    <>
      <div className={styles.container}>
        <h2> {t("section.projects.hearUkraine.title")}</h2>
        <p> {t("section.projects.hearUkraine.description")}</p>
      </div>
      {moreInfo && (
        <div className={styles.description}>
          {/* <p> {t("section.projects.hearUkraine.description")}</p> */}
          <p>
            Під час війни багато людей знаходяться під постійним шумовим
            навантаженням від артобстрілів. Рятуючи себе та своїх рідних, вони
            довгий час перебували в холодних підвалах та бомбосховищах, де не
            було можливості дотримуватись умов гігієни. Саме ці фактори вплинули
            на те що вони почали втрачати слух. У багатьох дітей війна забрала
            домівку, але не можна допустити, щоб вона позбавила дітей щасливого
            майбутнього. Слух особливо важливий для гармонійного розвитку
            дитини, повноцінної соціалізації та успішного навчання. Своєчасне та
            постійне відстеження стану слуху дитини є обов’язковою складовою
            слухової допомоги. На здоров'я дитини можуть впливати дуже гучні
            звуки війни, стреси та хвороби. Аби вирішити проблему зі зволіканням
            та нехтуванням здоров’ям слуху, ми спільно з МЦ “Аврора” запустили
            проект – «Почути Україну», спрямований на боротьбу з порушенням
            слуху українців.
          </p>
          <p>
            Благодійний проект діагностики слуху призначений для всіх дітей з
            порушенням слуху або підозрою на порушення слуху, які раніше
            проживали у трьох східних областях: Харківській, Луганській,
            Донецькій.
          </p>
          <h4>
            Необхідні кошти для проведення обстеження 100 дітей: 90 000 грн
            (Вартість обстеження 1 дитини з порушенням слуху - 900 грн)
          </h4>
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

export default HearUkraine
