import React from "react";

import styles from "./dinerGalerey.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const DinerGallery = ({ diner }) => {
  const [offset, setOffset] = useState(0);

  const handleRight = () => {
    if (offset > -2400) {
      setOffset(offset - 480);
    }
    if (offset === -2400) {
      setOffset(0);
    }
    console.log(offset)
  };

  const handleLeft = () => {
    if (offset !== 0) {
      setOffset(offset + 480);
    }
    if (offset === 0) {
      setOffset(-2400);
    }

    console.log(offset)
  };

  return (
    <div className={styles.glav}>

      <div className={styles.slyder}>
        <div className={styles.slyderLine} style={{ left: `${offset}px` }}>
          {diner?.photo.map((item, index) => {
            return (
              <div className={styles.imgCont}>
                <img
                  className={styles.img}
                  key={index}
                  src={`http://localhost:4000/photo/${item}`}
                  alt="img"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.arrow}>
        <button className={styles.left} onClick={handleLeft}>
          <FontAwesomeIcon className={styles.leftIcon} icon={faArrowLeft} />
        </button>

        <button className={styles.right} onClick={handleRight}>
          <FontAwesomeIcon className={styles.rightIcon} icon={faArrowRight} />
        </button>
      </div>
      <div className={styles.infoCont}>
        <div className={styles.rating}>{diner?.rating}</div>
        <div className={styles.middlePrice}>{diner?.middlePrice}</div>
        <div className={styles.address}>{diner?.address}</div>
        
      </div>
      
      <div className={styles.menyCont}>
        {diner?.menu.map((item,index) => {
          return(
            <div className={styles.menuImg}>
               <img
                  className={styles.img}
                  key={index}
                  src={`http://localhost:4000/photo/${item}`}
                  alt="img"
                />
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default DinerGallery;
