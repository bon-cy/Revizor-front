import React, { useState } from "react";
import styles from "./header.module.css";
import Auth from "../Authorization/Auth";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {

  const id = useSelector(state => state.application.id)

  const [modal, setModal] = useState(false)

const handleAuth = () => {
  setModal(true)
}

  return (
    <>
      {modal ? <Auth setModal={setModal} /> : null}
      <div className={styles.header}>
      <div className={styles.header_items}>
        <div className={styles.logo}>
          <img src="logo.png" alt="" />
        </div>
        <p><Link to="/" className={styles.site_name} >GogoLь-MogoLь</Link></p>
        <div>
          <input className={styles.header_input} type="text" />
          <img className={styles.lupa} src="lupa.png" alt="" />
        </div>
      </div>
      <div className={styles.review_and_btn}>
        <p ><Link to="/chat" className={styles.chat_link} >Чат</Link></p>
        <div className={styles.review}>
          <img src="pencil.png" alt="" />
          <p>Отзыв</p>
        </div>
        {id ? <Link to={`/personal/${id}`} className={styles.profil}><FontAwesomeIcon icon={faUserSecret} /></Link> : <button onClick={handleAuth} className={styles.auth_btn}>Войти</button>}
      </div>
    </div>
    </>
  
  );
};

export default Header;
