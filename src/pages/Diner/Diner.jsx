import React from "react";
import styles from "./diner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Diner = () => {
  const [markerWind, setMarkerWind] = useState(styles.markerWind);

  const handleMouseOver = () => {
    setMarkerWind(styles.markerWindSie);
  };
  const handleMouseOut = () => {
    setMarkerWind(styles.markerWind);
  };


  const [markerWind2, setMarkerWind2] = useState(styles.markerWind2);

  const handleMouseOver2 = () => {
    setMarkerWind2(styles.markerWindSie2);
  };
  const handleMouseOut2 = () => {
    setMarkerWind2(styles.markerWind2);
  };


  const [markerWind3, setMarkerWind3] = useState(styles.markerWind3);

  const handleMouseOver3 = () => {
    setMarkerWind3(styles.markerWindSie3);
  };
  const handleMouseOut3 = () => {
    setMarkerWind3(styles.markerWind3);
  };

  return (
    <div className={styles.diner}>
      <div className={styles.kart}>
        <div className={styles.markers}>

          <FontAwesomeIcon className={styles.marker} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}icon={faLocationDot} />
            <div className={markerWind} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <img className={styles.markerWindImg}alt=""src="https://avatars.mds.yandex.net/get-altay/4612894/2a000001810c596481a575353a9acbdeec58/XXL"></img>
            <div className={styles.winContent}>
            <div className={styles.name}>DodoPizza</div>
            <div className={styles.position}>ул.Назарбфева </div>
            </div>
            </div>

          <FontAwesomeIcon className={styles.marker2} onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2} icon={faLocationDot} />
          <div className={markerWind2} onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2}>
            <img className={styles.markerWindImg2} alt=""src="https://avatars.mds.yandex.net/get-altay/4352895/2a0000017c18b203c5855faf43d0ddc4ce33/XXL"></img>
            <div className={styles.winContent2}>
            <div className={styles.name2}>DodoPizza</div>
            <div className={styles.position2}>ул.Назарбфева 84а</div>
            </div>
            </div>



          <FontAwesomeIcon className={styles.marker3} onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3} icon={faLocationDot} />
          <div className={markerWind3} onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3}>
          <img className={styles.markerWindImg3} alt="" src="https://avatars.mds.yandex.net/get-altay/4464784/2a0000017b52c14b137d6cb8915775f82517/XXL" ></img>
          <div className={styles.winContent3}>
            <div className={styles.name3}>DodoPizza</div>
            <div className={styles.position3}>ул.Путина 10</div>
            </div>
            </div>
        </div>

        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Adbefedd6e1119ed478d3688afea19c8590b50b785bdc0de5fd75dcb1b3e738b6&amp;source=constructor" width="980" height="519" frameborder="0"></iframe>
      </div>
    </div>
  );
};

export default Diner;
