import { faFeather, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import styles from "./dinerHead.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchDiners } from "../../features/dinerSlice";
import { addLike, fetchUsers } from "../../features/userSlice";
import { useParams } from "react-router-dom";

const DinerHead = ({ diner }) => {
  const { dinerId } = useParams();
  const userId = useSelector((state) => state.application.id);
  const users = useSelector((state) => state.users.users);
  const user = users
    .map((elem) => {
      if (elem._id === userId) {
        return elem.like;
      }
    })
    .slice(11);

  // console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDiners());
    dispatch(fetchUsers());
  }, [dispatch]);
  function handleLike() {
    dispatch(addLike({ dinerId, userId }));
  }
  return (
    <div className={styles.head_container}>
      <div className={styles.like_review}>
        <FontAwesomeIcon
          className={
            user.find((elem) => elem._id === dinerId)
              ? styles.like_active
              : styles.like
          }
          onClick={() => handleLike()}
          icon={faHeart}
        />
        <FontAwesomeIcon className={styles.feather} icon={faFeather} />
      </div>
      <div className={styles.diner_name}>{diner.map((elem) => elem.name)}</div>
      <div className={styles.links}>
        <FontAwesomeIcon className={styles.instagram} icon={faInstagram} />
        <span>+7(938) 569-32-43</span>
      </div>
    </div>
  );
};

export default DinerHead;
