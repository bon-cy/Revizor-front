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
          <h3>Лучшие рестораны</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Info;