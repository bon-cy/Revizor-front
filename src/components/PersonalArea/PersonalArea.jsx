import { faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../../features/commentSlice";
import { addAvatar, fetchUsers } from "../../features/userSlice";
import CardPersonal from "../CardPersonal/CardPersonal";
import styles from "./personalArea.module.css";

const PersonalArea = () => {
  const [drag, setDrag] = useState(false);
  const [active, setActive] = useState("reviews");

  const token = useSelector((state) => state.application.token)

  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const { id } = useParams();


  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchReviews());
  }, [dispatch]);

  const reviews = useSelector((state) => state.comments.reviews);

  const userReviews = reviews.filter((item) => item.user._id === id);
  console.log(reviews);
  function dragStartHandler(e) {
    e.preventDefault(e);
    setDrag(true);
  }
  function drahLeaveHandler(e) {
    e.preventDefault(e);
    setDrag(false);
  }
  function onDropHandler(e) {
    e.preventDefault(e);
    let file = e.dataTransfer.files[0];
    dispatch(addAvatar({ file, id }));
    setDrag(false);
  }

  const handleInfo = () => {
    setActive("info");
  };

  const handleFav = () => {
    setActive("fav");
  };

  const handleReviews = () => {
    setActive("reviews");
  };

  const handleExit = () => {
    setActive("exit");
  };

  return (
    <> {token ? <div className={styles.personal_wrapper}>
     
    <div className={styles.head_area}></div>
    {users.map((user, index) => {
      if (user._id === id) {
        return (
          <div key={user._id} className={styles.main}>
            <div key={index} className={styles.profile_container}>
              <div className={styles.avatar_container}>
                {user.avatar?.length ? (
                  <div className={styles.avatar_img}>
                    <img
                      src={`http://localhost:4000/public/avatar/${user.avatar}`}
                      alt=""
                    />
                  </div>
                ) : (
                  <>
                    {drag ? (
                      <div
                        className={`${styles.avatar} ${styles.avatar_drag}`}
                        onDragStart={(e) => dragStartHandler(e)}
                        onDragLeave={(e) => drahLeaveHandler(e)}
                        onDragOver={(e) => dragStartHandler(e)}
                        onDrop={(e) => onDropHandler(e)}
                      >
                        <FontAwesomeIcon icon={faUserPlus} />
                      </div>
                    ) : (
                      <div
                        className={styles.avatar}
                        onDragStart={(e) => dragStartHandler(e)}
                        onDragLeave={(e) => drahLeaveHandler(e)}
                        onDragOver={(e) => dragStartHandler(e)}
                      >
                        <FontAwesomeIcon icon={faUser} />
                      </div>
                    )}
                  </>
                )}
              </div>

              <div className={styles.user_informatins}>
                <div className={styles.login}>{user.login}</div>
                <div className={styles.info_count}>
                  <span>
                    Избранных <p>{user.like.length}</p>
                  </span>
                  <span>
                    Отзывов <p>{userReviews.length}</p>
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.card_and_navbar}>
              <div className={styles.personal_navbar}>
                <div
                  onClick={handleInfo}
                  className={active === "info" && styles.isActive}
                >
                  Личные данные
                </div>
                <div
                  onClick={handleFav}
                  className={active === "fav" && styles.isActive}
                >
                  Мои избранные
                </div>
                <div
                  onClick={handleReviews}
                  className={active === "reviews" && styles.isActive}
                >
                  Мои отзывы
                </div>
                <div
                  onClick={handleExit}
                  className={active === "exit" && styles.isActive}
                >
                  Выйти
                </div>
              </div>
              {active === "info" && (
                <div className={styles.pers_info}>
                  <span>
                    Логин:<p>{user.login}</p>{" "}
                  </span>
                  <span>
                    Email:<p>{user.mail}</p>
                  </span>
                  <span>Обо мне:</span>
                  <span>Веб-сайт:</span>
                </div>
              )}
              {active === "fav" && (
                <div className={styles.card}>
                  {user.like.map((card) => {
                    return <CardPersonal key={card._id} diner={card} />;
                  })}
                </div>
              )}
              {active === "reviews" && (
                <div className={styles.reviews_personal}>
                  {userReviews.map((el) => {
                    return (
                      <div className={el.rating <= 3 ? styles.review_card_dislike : styles.review_card}>
                        <h4 className={styles.pers_rev_diner}>{el.diner.name}</h4>
                        <p className={styles.review_text}>{el.text}</p>
                        <span>Моя оценка: <p>{el.rating}</p></span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        );
      }
      return true;
    })}
  </div> : <div> <h3>Чтобы зайти в личный кабинет, вам нужно авторизоваться</h3></div>

}
    </>
    
  );
};

export default PersonalArea;
