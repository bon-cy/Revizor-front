import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchDiners, middlePrice, type } from "../../features/dinerSlice";
import styles from "./saidBar.module.css";

const SaidBar = () => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);

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
      <span>Цена:</span>
      <input
        type="text"
        placeholder="Средняя цена не больше..."
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
          dispatch(middlePrice(e.target.value))
        }}
      />
    </div>
  );
};

export default SaidBar;
