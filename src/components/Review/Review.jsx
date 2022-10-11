import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { rateDiner } from "../../features/dinerSlice";
import { addReview, fetchReviews } from "../../features/commentSlice";
import styles from "./review.module.css";

const Review = () => {
  const dispatch = useDispatch();
  const { dinerId } = useParams();

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  const reviews = useSelector((state) => state.comments.reviews);

  const star = ["★", "★", "★", "★", "★"];
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");
  const [plus, setPlus] = useState("");
  const [minus, setMinus] = useState("");
  const [disable, setDisable] = useState(true);
  const [visible, setVisible] = useState(false);

  const handleRevievChange = (e) => {
    setText(e.target.value);
  };
  const handlePlusChange = (e) => {
    setPlus(e.target.value);
  };
  const handleMinusChange = (e) => {
    setMinus(e.target.value);
  };
  const handleClick = () => {
    dispatch(rateDiner({ rating, dinerId }));
    dispatch(addReview({ text, plus, minus, dinerId, rating }));
    window.location.reload();
  };
  const handleVisible = () => {
    setVisible(true);
  };
  const checkValid = () => {
    if (rating !== 0) {
      if (text !== "") {
        if (plus !== "") {
          if (minus !== "") {
            setDisable(false);
          } else {
            setDisable(true);
          }
        } else {
          setDisable(true);
        }
      } else {
        setDisable(true);
      }
    } else {
      setDisable(true);
    }
  };

  return (
    <div className={styles.glav}>
      {visible ? (
        <div className={styles.main}>
          <div className="ratingDiv">
            <h3 className={styles.title}>поставьте оценку</h3>
            <div className={styles.stars}>
              {star.map((item, index) => {
                return (
                  <button
                    onMouseOut={checkValid}
                    className={
                      index + 1 <= rating ? styles.focus : styles.disfocus
                    }
                    onFocus={() => setRating(index + 1)}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <div className={styles.reviewDiv}>
            <textarea
              className={styles.reviewText}
              value={text}
              onMouseOut={checkValid}
              onChange={(e) => handleRevievChange(e)}
              placeholder="начните писать отзыв"
              type="text"
            />
          </div>
          <div className={styles.plusMinus}>
            <img
              className={styles.img}
              src="http://localhost:4000/img/plusminus.png"
              alt="plus"
            />
            <div className={styles.midle}>
              <div className={styles.plusMinusDiv}>
                <input
                  className={styles.imputPlusMinus}
                  value={plus}
                  onChange={(e) => handlePlusChange(e)}
                  onMouseOut={checkValid}
                  placeholder="плюсы ресторана"
                  type="text"
                />
              </div>
              <div className={styles.plusMinusDiv}>
                <input
                  className={styles.imputPlusMinus}
                  value={minus}
                  onChange={(e) => handleMinusChange(e)}
                  onMouseOut={checkValid}
                  placeholder="минусы ресторана"
                  type="text"
                />
              </div>
            </div>
          </div>
          <button
            disabled={disable}
            className={styles.btn}
            onClick={() => handleClick()}
          >
            опубликовать
          </button>
        </div>
      ) : null}

      <div className={styles.reverse}>
        {reviews.map((item) => {
          console.log(item.diner);
          if (item.diner._id === dinerId) {
            return (
              <div className={styles.commentMain}>
                <div className={styles.commentHeader}>
                  <div className={styles.logo}>
                    <img
                      className={styles.imgCom}
                      src="http://localhost:4000/img/avatar.png"
                      alt="plus"
                    />
                    <p className={styles.p}>{item.user.login}</p>
                  </div>
                  <div className={styles.starsCom}>
                    {star.map((element, index) => {
                      return (
                        <button
                          className={
                            index < item.rating
                              ? styles.focusCom
                              : styles.disfocusCom
                          }
                          onFocus={() => setRating(index + 1)}
                        >
                          {element}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className={styles.midleCom}>
                  <img
                    className={styles.imgPlusCom}
                    src="http://localhost:4000/img/plusminus.png"
                    alt="plus"
                  />
                  <div className={styles.plusMinusCom}>
                    <div className={styles.plusMinusText}>{item.plus}</div>
                    <div className={styles.plusMinusText}>{item.minus}</div>
                  </div>
                </div>
                <div className={styles.textCom}>{item.text}</div>
              </div>
            );
          }
        })}
        <div className={styles.btnDiv}>
          {" "}
          <button
            className={visible ? styles.hide : styles.btn}
            onClick={handleVisible}
          >
            Добавить отзыв
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
