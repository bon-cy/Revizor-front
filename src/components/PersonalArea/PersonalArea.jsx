import { faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addAvatar, fetchUsers } from "../../features/userSlice";
import Card from "../Card/Card";
import styles from "./personalArea.module.css";

const PersonalArea = () => {
  const [drag, setDrag] = useState(false);

  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

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

  return (
    <div>
      {users.map((user, index) => {
        if (user._id === id) {
          return (

            <div className={styles.main}>
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
                  <span className={styles.login}>{user.login}</span>
                  <span className={styles.mail}>{user.mail}</span>
                </div>
              </div>
              <div className={styles.card}>
                {user.like.map(card => {
                  return <Card diner={card} />
                })}
              </div>
            </div>
          );
        }
        return true;
      })}
    </div>
  );
};

export default PersonalArea;
