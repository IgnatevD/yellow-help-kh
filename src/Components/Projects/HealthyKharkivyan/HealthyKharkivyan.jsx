/** @format */

import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import Button from "../../Button"

import styles from "./HealthyKharkivyan.module.scss"

const HealthyKharkivyan = () => {
  const [moreInfo, setMoreInfo] = useState(false)
  const { t } = useTranslation()

  return (
    <>
      <div className={styles.container}>
        <h2> {t("section.projects.HealthyKharkivyan.title")}</h2>
        <p> {t("section.projects.HealthyKharkivyan.description")}</p>
      </div>
      {moreInfo && (
        <div className={styles.description}>
          {/* <p> {t("section.projects.HealthyKharkivyan.description")}</p> */}
          <h4>Мета:</h4>
          <p>
            забезпечити доступ до якісної медичної допомоги людей, що
            знаходяться під обстрілами, евакуювались або з інших причин не мають
            можливості отримати медичну консультацію при погіршенні стану
            здоров’я.
          </p>
          <h4> Пріоритет:</h4>
          <p>
            м. Харків та Харківська область. В подальшому: поширення на регіони
            України та країни, де є вимушені переселенці з України.
          </p>
          <h4> Цілі:</h4>
          <p>
            - забезпечити доступ ВПО до лікарських консультацій незалежно від
            місця їх знаходження;
          </p>
          <p>
            - оптимізувати призначення ліків та ефективність використання
            гуманітарних ліків;
          </p>
          <p>
            -створити лікарям в еміграції додаткові умови для реалізації своїх
            компетенцій, само зайнятості, повернення.
          </p>
          <h4>Завдання:</h4>
          <p>
            - сформувати команди лікарів, які матимуть змогу консультувати ВПО
            онлайн;
          </p>
          <p>
            - оптимізувати роботу колл-центру для переадресації дзвінків ВПО до
            лікарів;
          </p>
          <p>
            - оптимізувати роботу колл-центру і електронної бази обліку ліків
            для формування лікарями переліку необхідних ВПО ліків з урахуванням
            розташування найближчого гуманітарного складу та наявних в ньому
            ліків;
          </p>
          <p>
            - забезпечити доставку призначених лікарем ліків ВПО м. Харкова за
            допомоги волонтерів та кур’єрів, особливо тих, хто не має змогу
            самостійно придбати ліки (людей похилого віку, важкохворих, людей з
            інвалідністю, тощо).
          </p>
          <p>
            - творити умови для подальшого розширення географії забезпечення
            доставки ліків.
          </p>
          <h4>
            Необхідні кошти для реалізації проекту на місяць: 100 000 грн (3000
            USD) – проведення 1000 сеансів консультуванн.
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

export default HealthyKharkivyan
