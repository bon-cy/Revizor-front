import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDiners } from "../../features/dinerSlice";
import Card from "../Card/Card";
import SaidBar from "../SaidBar/SaidBar";
import styles from "./cards.module.css";
import { ColorRing } from "react-loader-spinner";

const Cards = () => {
  const diners = useSelector((state) => state.diners.filterDiners);
  const [price, setPrice] = useState("");

  const load = useSelector((state) => state.diners.load);

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
        {load && (
          <div className={styles.load}>
            <ColorRing
              visible={true}
              height="100"
              width="100"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
