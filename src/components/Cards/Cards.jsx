import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDiners } from "../../features/dinerSlice";
import Card from "../Card/Card";
import SaidBar from "../SaidBar/SaidBar";
import styles from "./cards.module.css";

const Cards = () => {
  const diners = useSelector((state) => state.diners.filterDiners);
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDiners());
  }, [dispatch]);
  const filter = diners.filter((diner) => {
    return diner.middlePrice <= price;
  });

  return (
    <div className={styles.cards_container}>
      <div className={styles.saidBar_container}>
        <SaidBar setPrice={setPrice} price={price} />
      </div>
      <div className={styles.card_container}>
        {price
          ? filter.map((diner, index) => {
              return <Card key={index} diner={diner} />;
            })
          : diners.map((diner, index) => {
              return <Card key={index} diner={diner} />;
            })}
      </div>
    </div>
  );
};

export default Cards;
