import styles from "./info.module.css";

import React from "react";
import { click } from "@testing-library/user-event/dist/click";

const Info = () => {
  return (
    <div className={styles.general}>
      <div className={styles.container}>
        <div className={styles.info1}>
          <h3>Лучшие рестораны</h3>
          <p>1,2 милиона ресторанов - от уличной еды до высокой кухни</p>
        </div>

        <div className={styles.info2}>
          <h3>Свежие отзывы</h3>
          <p>
            Фотографии и отзывы о ресторанах от путешественников нашего
            сообщества
          </p>
        </div>

        <div className={styles.info3}>
          <h3>Выбирай, то что ты любишь</h3>
          <p>Упрощенный поиск по твоим вкусам.
            Рыба?мясо? мы найдем, то что Вам нужно
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;