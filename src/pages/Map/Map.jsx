import React from "react";
import styles from "./map.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Map = () => {
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


  const [markerWind4, setMarkerWind4] = useState(styles.markerWind4);

  const handleMouseOver4 = () => {
    setMarkerWind4(styles.markerWindSie4);
  };
  const handleMouseOut4 = () => {
    setMarkerWind4(styles.markerWind4);
  };


  const [markerWind5, setMarkerWind5] = useState(styles.markerWind5);

  const handleMouseOver5 = () => {
    setMarkerWind5(styles.markerWindSie5);
  };
  const handleMouseOut5 = () => {
    setMarkerWind5(styles.markerWind5);
  };


  const [markerWind6, setMarkerWind6] = useState(styles.markerWind6);

  const handleMouseOver6 = () => {
    setMarkerWind6(styles.markerWindSie6);
  };
  const handleMouseOut6 = () => {
    setMarkerWind6(styles.markerWind6);
  };



  return (
    <div className={styles.map}>

   <div className={styles.kart}>
        <div className={styles.markers}>
          <FontAwesomeIcon
            className={styles.marker}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            icon={faLocationDot}
          />
          <div
            className={markerWind}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <img
              className={styles.markerWindImg}
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuEzhXN5m5I0jr27P6aHfoOkGXPWaJ3yLtHA&usqp=CAU"
            ></img>
            <div className={styles.winContent}>
              <div className={styles.name}>DodoPizza</div>
              <div className={styles.position}>ул.Назарбфева </div>
            </div>
          </div>

          <FontAwesomeIcon
            className={styles.marker2}
            onMouseOver={handleMouseOver2}
            onMouseOut={handleMouseOut2}
            icon={faLocationDot}
          />
          <div
            className={markerWind2}
            onMouseOver={handleMouseOver2}
            onMouseOut={handleMouseOut2}
          >
            <img
              className={styles.markerWindImg2}
              alt=""
              src="data:image/png;base64,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"
            ></img>
            <div className={styles.winContent2}>
              <div className={styles.name2}>Soren</div>
              <div className={styles.position2}>ул.Путина 10</div>
            </div>
          </div>

          <FontAwesomeIcon
            className={styles.marker3}
            onMouseOver={handleMouseOver3}
            onMouseOut={handleMouseOut3}
            icon={faLocationDot}
          />
          <div
            className={markerWind3}
            onMouseOver={handleMouseOver3}
            onMouseOut={handleMouseOut3}
          >
            <img
              className={styles.markerWindImg3}
              alt=""
              src="https://incrussia.ru/upload/resized/027c6ade4396aaaad16eb44cfe6bb3ba.jpg"
            ></img>
            <div className={styles.winContent3}>
              <div className={styles.name3}>Ramazoty</div>
              <div className={styles.position3}>ул.Назарбфева 84а</div>
            </div>
          </div>

          <FontAwesomeIcon
            className={styles.marker4}
            onMouseOver={handleMouseOver4}
            onMouseOut={handleMouseOut4}
            icon={faLocationDot}
          />
          <div
            className={markerWind4}
            onMouseOver={handleMouseOver4}
            onMouseOut={handleMouseOut4}
          >
            <img
              className={styles.markerWindImg4}
              alt=""
              src="data:image/jpeg;base64,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"
            ></img>
            <div className={styles.winContent4}>
              <div className={styles.name4}>Not One</div>
              <div className={styles.position4}>пр.Эсамбаева 14</div>
            </div>
          </div>


          <FontAwesomeIcon
            className={styles.marker5}
            onMouseOver={handleMouseOver5}
            onMouseOut={handleMouseOut5}
            icon={faLocationDot}
          />
          <div
            className={markerWind5}
            onMouseOver={handleMouseOver5}
            onMouseOut={handleMouseOut5}
          >
            <img
              className={styles.markerWindImg5}
              alt=""
              src="data:image/jpeg;base64,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"
            ></img>
            <div className={styles.winContent5}>
              <div className={styles.name5}>Coffee story</div>
              <div className={styles.position5}>пр.Эсамбаева 14</div>
            </div>
          </div>

        </div>

        <FontAwesomeIcon
            className={styles.marker6}
            onMouseOver={handleMouseOver6}
            onMouseOut={handleMouseOut6}
            icon={faLocationDot}
          />
          <div
            className={markerWind6}
            onMouseOver={handleMouseOver6}
            onMouseOut={handleMouseOut6}
          >
            <img
              className={styles.markerWindImg6}
              alt=""
              src="data:image/png;base64,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"
            ></img>
            <div className={styles.winContent6}>
              <div className={styles.name6}>Soren</div>
              <div className={styles.position6}>ул.Путина д10</div>
            </div>
          </div>


        <iframe
          title="mapYandex"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Adbefedd6e1119ed478d3688afea19c8590b50b785bdc0de5fd75dcb1b3e738b6&amp;source=constructor"
          width="980"
          height="519"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
