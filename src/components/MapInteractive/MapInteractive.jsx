import React from "react";
import styles from "./mapInter.module.css";

const MapInteractive = () => {
  return (
    <div className={styles.mapInter}>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A4d70bc60c03110cd1d592db84bb7f29008d789dc484e21d6556492d615571bcc&amp;source=constructor"
        width="86%"
        height="450"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default MapInteractive;
