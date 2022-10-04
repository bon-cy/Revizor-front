import React from "react";
import styles from "./dinerGalerey.module.css";

const DinerGallery = ({ diner }) => {
    console.log(diner)
  return (
    <div className={styles.glav}>
      <div className={styles.slyderCont}>
        {diner?.photo.map((item, index) => {
          return (
            <img
              className={styles.img}
              key={index}
              src={`http://localhost:4000/photo/${item}`}
              alt="img"
            />
          );
        })}
      </div>

      <div className={styles.menyCont}></div>
    </div>
  );
};

export default DinerGallery;
