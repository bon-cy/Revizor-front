import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_items}>
        <div className={styles.logo}>
          <img src="logo.png" alt="" />
        </div>
        <p>Nazvanie</p>
        <div>
          <input type="text" />
          <img className={styles.lupa} src="lupa.png" alt="" />
        </div>
      </div>

      <button className={styles.auth_btn}>Войти</button>
    </div>
  );
};

export default Header;
