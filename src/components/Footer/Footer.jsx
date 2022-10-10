import React from "react";
import styles from "./footer.module.css";
import facebook from "../../public/facebook.png";
import insta from "../../public/insta.png";
import pochta from "../../public/pochta.png";
import telega from "../../public/telega.png";
import whatsapp from "../../public/whatsapp.png";
import youtube from "../../public/youtube.png";
import trip from "../../public/logo2.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.subGeneral}>
        <div className={styles.block1}>
        <img width="70px" src={"http://localhost:4000/public/logo.png"} alt="" />

          <p>Работаем для Вас с 1991 года!</p>
        </div>
        <div className={styles.block2}>
          <img width="50px" src={facebook} />
          <img width="50px" src={insta} />
          <img width="50px" src={pochta} />
          <img width="50px" src={telega} />
          <img width="50px" src={whatsapp} />
          <img width="50px" src={youtube} />
        </div>
      </div>
      <div className={styles.dno}>
        <p>© GogoLь-MogoLь, 2022 г. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
