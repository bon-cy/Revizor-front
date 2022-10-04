import { faFeather, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import styles from "./dinerHead.module.css";
import { useDispatch } from "react-redux";
import { fetchDiners } from "../../features/dinerSlice";

const DinerHead = ({ diner }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDiners())
    })
  return (
    <div className={styles.head_container}>
      <div className={styles.like_review}>
        <FontAwesomeIcon className={styles.like} icon={faHeart} />
        <FontAwesomeIcon className={styles.feather} icon={faFeather} />
      </div>
      <div className={styles.diner_name}>{diner.map(elem => elem.name)}</div>
      <div className={styles.links}>
        <FontAwesomeIcon className={styles.instagram} icon={faInstagram} />
        <span>+7(938) 569-32-43</span>
      </div>
    </div>
  );
};

export default DinerHead;
