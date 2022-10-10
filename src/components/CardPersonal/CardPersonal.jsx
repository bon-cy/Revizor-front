import React from "react";
import { Link } from "react-router-dom";
import styles from "./cardPersonal.module.css";


const CardPersonal = ({ diner }) => {
    const star = ["★","★","★","★","★"]


  return (
    <div className={styles.personal_card}>
      <img src={`http://localhost:4000/img/${diner.name}.jpg`} alt="" />
      <h3>{diner.name}</h3>
      <p className={styles.rating}>{star.map((item, index)=>{
        return(
          <><span className={(diner.rating > index) ? styles.rating: styles.ratingDis}>{item}</span></>
        )
      })}</p>
      <p> {diner.address}</p>
      <button>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={`/diner/${diner._id}`}
        >
          Подробнее
        </Link>
      </button>
    </div>
  );
};

export default CardPersonal;
