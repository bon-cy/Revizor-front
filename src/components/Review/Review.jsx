import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./review.module.css";

const Review = () => {
  const dispatch = useDispatch();
  const { dinerId } = useParams();

  const star = ["★", "★", "★", "★", "★"];
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [plus, setPlus] = useState("");
  const [minus, setMinus] = useState("");

  const handleRevievChange = (e) => {
    setReview(e.target.value);
  };
  const handlePlusChange = (e) => {
    setPlus(e.target.value);
  };
  const handleMinusChange = (e) => {
    setMinus(e.target.value);
  };

  return (
    <div>
      <div className={styles.main}>
        <div className="ratingDiv">
          <h2>Ваша оценка</h2>
          <div>
            {star.map((item, index) => {
              return (
                <button
                  className={
                    index + 1 < rating ? styles.focus : styles.disfocus
                  }
                  onFocus={() => setRating(index + 2)}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
        <div className="comment">
          <input
            value={review}
            onChange={(e) => handleRevievChange(e)}
            placeholder="начните писать отзыв"
            type="text"
          />
        </div>
        <div className="plusMinus">
          <input
            value={plus}
            onChange={(e) => handlePlusChange(e)}
            placeholder="плюсы ресторана"
            type="text"
          />
        </div>
        <div>
          <input
            value={minus}
            onChange={(e) => handleMinusChange(e)}
            placeholder="минусы ресторана"
            type="text"
          />
        </div>
        <button>опубликовать</button>
      </div>
    </div>
  );
};

export default Review;
