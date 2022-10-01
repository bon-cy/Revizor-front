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
  console.log(diner[0]);
  return (
    <div>
      {diner.map((elem) => {
        return (
          <div className={styles.collage}>
            {elem.photo.map((image, index) => {
              return (
                <img
                className={styles.collage_image}
                  src={`http://localhost:4000/public/photo/${image}`}
                  alt=""
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Diner;
