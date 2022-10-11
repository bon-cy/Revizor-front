import React from "react";
import styles from "./footer.module.css";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faFacebook,
  faWhatsapp,
  faTelegram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.subGeneral}>
        <div className={styles.block1}>
          <img
            width="70px"
            src={"http://localhost:4000/public/logo.png"}
            alt=""
          />

        
        </div>
        <div className={styles.block2}>
        <p className={styles.content}>Работаем для Вас с 1991 года!</p>
          <FontAwesomeIcon fontSize="50px" className={styles.icon} icon={faInstagram} />
          <FontAwesomeIcon fontSize="50px" className={styles.icon} icon={faFacebook} />
          <FontAwesomeIcon fontSize="50px" className={styles.icon} icon={faTelegram} />
          <FontAwesomeIcon fontSize="50px" className={styles.icon} icon={faYoutube} />
          <FontAwesomeIcon fontSize="50px" className={styles.icon} icon={faWhatsapp} />
          <p className={styles.content}>8(800)-555-35-35</p>
        </div>
      </div>
      <div className={styles.dno}>
        © GogoLь-MogoLь, 2022 г. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;