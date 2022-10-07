import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchDiners } from "../../features/dinerSlice";
import { addDislike, addLike, fetchUsers } from "../../features/userSlice";
import styles from "./card.module.css";

const Card = ({ diner }) => {
  const userId = useSelector((state) => state.application.id);
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const dinerId = diner._id;

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


  useEffect(() => {
    dispatch(fetchDiners());
    dispatch(fetchUsers());
  }, [dispatch]);
  function handleLike() {
    console.log('like');
    dispatch(addLike({ dinerId, userId }));
  }
  function handleDislike() {
    console.log('dis');
    dispatch(addDislike({ dinerId, userId }));
  }
  return (
    <div className={styles.main}>
      <FontAwesomeIcon
        icon={faBookmark}
        className={
          like.find((diner) => diner._id === dinerId)
            ? styles.mark_active
            : styles.mark
        }
        onClick={
          like.find((diner) => diner._id === dinerId)
            ? () => handleDislike()
            : () => handleLike()
        }
      />
      <div className={styles.card_image}>
        <img src={`http://localhost:4000/img/${diner.name}.jpg`} alt="" />
      </div>
      <h3>{diner.name}</h3>
      <hr />
      <span className={styles.raiting}>{diner.raiting}★★★★★</span>
      {diner.address}
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

export default Card;
