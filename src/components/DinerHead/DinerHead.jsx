import { faFeather, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import styles from "./dinerHead.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchDiners } from "../../features/dinerSlice";
import { addDislike, addLike, fetchUsers } from "../../features/userSlice";
import { useParams } from "react-router-dom";

const DinerHead = ({ diner }) => {
  const { dinerId } = useParams();
  const userId = useSelector((state) => state.application.id);
  const users = useSelector((state) => state.users.users);

  const like = users
    .filter((user) => {
      if (user._id === userId) {
        return true;
      }
      return false;
    })
    .map((user) => {
      return user.like;
    })
    .flat(Infinity);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDiners());
    dispatch(fetchUsers());
  }, [dispatch]);
  function handleLike() {
    dispatch(addLike({ dinerId, userId }));
  }
  function handleDislike() {
    dispatch(addDislike({ dinerId, userId }));
  }
  return (
    <div className={styles.head_container}>
      <div className={styles.like_review}>
        <FontAwesomeIcon
          className={
            like.find((diner) => diner._id === dinerId)
              ? styles.like_active
              : styles.like
          }
          onClick={
            like.find((diner) => diner._id === dinerId)
              ? () => handleDislike()
              : () => handleLike()
          }
          icon={faHeart}
        />
        <FontAwesomeIcon className={styles.feather} icon={faFeather} />
      </div>
      <div className={styles.diner_name}>
        <h1>{diner?.name}</h1>
      </div>
      <div className={styles.links}>
        <FontAwesomeIcon className={styles.instagram} icon={faInstagram} />
        <span>+7(938) 569-32-43</span>
      </div>
    </div>
  );
};

export default DinerHead;
