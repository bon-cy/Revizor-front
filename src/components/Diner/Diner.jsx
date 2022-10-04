import { element } from "prop-types";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDiners } from "../../features/dinerSlice";
import DinerGallery from "../DinerGallery/DinerGallery";
import DinerHead from "../DinerHead/DinerHead";
import Review from "../Review/Review";
import styles from "./diner.module.css";

const Diner = () => {
  const diners = useSelector((state) => state.diners.diners);
  const { dinerId } = useParams();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchDiners());
  }, [dispatch]);

 

  const diner = diners.find((el) => {
    return el._id === dinerId
  })

 

  return (
    <>
      <div className={styles.diner_head}>
        1
        <DinerHead />
      </div>
      <div className={styles.diner_main}>
        <DinerGallery diner={diner} />
     
      </div>

      <div className={styles.diner_review}>
        3
        <Review />

        
      </div>
    </>
  );

  
};

export default Diner;
