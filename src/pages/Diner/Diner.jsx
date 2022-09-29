import React from "react";
import styles from "./diner.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Diner = () => {
  return (
    <div className={styles.diner}>

        <div className={styles.kart}>
            <div className={styles.markers}>
            <FontAwesomeIcon className={styles.marker} icon={faLocationDot} />
            <FontAwesomeIcon className={styles.marker2} icon={faLocationDot} />
            <FontAwesomeIcon className={styles.marker3} icon={faLocationDot} />
            </div>

      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Adbefedd6e1119ed478d3688afea19c8590b50b785bdc0de5fd75dcb1b3e738b6&amp;source=constructor"
        width="600"
        height="441"
        frameborder="0"
      ></iframe>


      </div>

    </div>
  );
};

export default Diner;