import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchDiners, middlePrice, type } from "../../features/dinerSlice";
import styles from "./saidBar.module.css";

const SaidBar = ({price, setPrice}) => {
  const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchDiners())
    }, [dispatch])
  return (
    <div className={styles.main}>
      <div className={styles.filter_check}>
        <span>Кафе</span>
        <input
          type="radio"
          name="type"
          id=""
          onChange={() => {
            dispatch(type("Caffee"));
          }}
        />
      </div>
      <div className={styles.filter_check}>
        <span>Рестораны</span>
        <input
          type="radio"
          name="type"
          id=""
          onChange={() => {
            dispatch(type("Restoran"));
          }}
        />
      </div>
      <div className={styles.filter_check}>
        <span>Фастфуд</span>
        <input
          type="radio"
          name="type"
          id=""
          onChange={() => {
            dispatch(type("Fastfood"));
          }}
        />
      </div>
      <div className={styles.filter_check}>
        <span>Все</span>
        <input
          type="radio"
          name="type"
          id=""
          onChange={() => {
            dispatch(fetchDiners());
          }}
        />
      </div>
      <hr />
      <div className={styles.price_container}>
      <span>Цена:</span>
      <input
      className={styles.price}
        type="number"
        placeholder="Не больше..."
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      </div>
    </div>
  );
};

export default SaidBar;
