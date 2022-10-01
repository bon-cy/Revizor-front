import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchDiners, middlePrice, type } from "../../features/dinerSlice";
import style from "./saidBar.module.css";

const SaidBar = ({price, setPrice}) => {
  const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchDiners())
    }, [dispatch])
  return (
    <div className={style.main}>
      <div className={style.filter_check}>
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
      <div className={style.filter_check}>
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
      <div className={style.filter_check}>
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
      <div className={style.filter_check}>
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
        }}
      />
    </div>
  );
};

export default SaidBar;
