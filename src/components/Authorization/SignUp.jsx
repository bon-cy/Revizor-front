import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authSignUp } from "../../features/applicationSlice";
import styles from "../Authorization/auth.module.css";

const SignUp = ({ setModal, setToReg }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function sendNavigate() {
    navigate("/");
  }
  function sendSetModal() {
    setModal(false);
  }

  const handleCloseAuth = () => {
    setModal(false);
  };

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeMail = (e) => {
    setMail(e.target.value);
  };

  const handleReg = () => {
    if (!login || login.length < 3) {
      return alert("Логин должен содержать не меньше 3-х символов");
    } else if (!mail || mail.length < 5 || !mail.includes("@")) {
      return alert("Введите правильный эл. адрес");
    } else if (!password || password.length < 8) {
      return alert("Пароль должен содержать не меньше 8 символов");
    }
    setLogin("");
    setPassword("");
    setMail("");
    dispatch(authSignUp({ login, password, mail }));
  };

  const handleBackToSignIn = () => {
    setToReg(false);
  };

  return (
    <div className={styles.auth_modal}>
      <button className={styles.close_btn} onClick={handleCloseAuth}>
        ✖
      </button>
      <h3>
        Зарегистрируйтесь, <br /> чтобы открыть все возможности
      </h3>
      <label htmlFor="">Логин:</label>
      <input
        value={login}
        onChange={(e) => handleChangeLogin(e)}
        placeholder="Логин"
        className={styles.login_input}
        type="text"
      />

      <label htmlFor="">Адрес эл. почты:</label>
      <input
        value={mail}
        onChange={(e) => handleChangeMail(e)}
        placeholder="Эл. Почта"
        className={styles.email_input}
        type="text"
      />
      <label htmlFor="">Пароль:</label>
      <input
        value={password}
        onChange={(e) => handleChangePassword(e)}
        placeholder="Пароль"
        className={styles.password_input}
        type="text"
      />
      <div className={styles.back}>
        <button onClick={handleBackToSignIn} className={styles.back_btn}>
          <p>🡸</p>
        </button>
        <p>Назад к авторизации</p>
      </div>

      <button onClick={handleReg} className={styles.reg}>
        Зарегистрироваться
      </button>
    </div>
  );
};

export default SignUp;
