import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDiners } from "../../features/dinerSlice";
import styles from "./diner.module.css";

const Diner = () => {
  const diners = useSelector((state) => state.diners.diners);
  const { dinerId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDiners());
  }, [dispatch]);
  const diner = diners.filter((elem) => {
    if (!dinerId) return true;

    return dinerId === elem._id;
  });
  return (
    <>
      <div className={styles.diner_head}>1</div>
      <div className={styles.diner_main}>2</div>

      <div className={styles.diner_review}>3</div>
    </>
  );
};

export default Diner;
