import React from "react";
import styles from "../Picture/picture.module.css";

const Picture = () => {
  return (
    <div className={styles.picture}>
      <h1>Найдите идеальный ресторан</h1>
      <input placeholder="Введите название ресторана..." type="text" />
      <img className={styles.lupa} src="lupa.png" alt="" />
    </div>
  );
};

export default Picture;
