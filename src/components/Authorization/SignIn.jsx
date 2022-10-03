import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authSignIn } from "../../features/applicationSlice";
import styles from "../Authorization/auth.module.css";

const SignIn = ({ setModal, setToReg }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  function sendNavigate() {
    navigate("/");
  }
  const sendSetModal = () => {
    setModal(false);
  };

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
  const handleGoToReg = () => {
    setToReg(true);
  };

  const handleSignIn = (e) => {
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

    e.preventDefault();
    dispatch(authSignIn({ login, password,mail }));
  };

  return (
    <div className={styles.auth_modal}>
      <button className={styles.close_btn} onClick={handleCloseAuth}>
        ✖
      </button>
      <h3>
        Войдите в систему, <br /> чтобы открыть все возможности
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

      <p className={styles.no_account}>
        Если у Вас нет аккаунта, <br />{" "}
        <p onClick={handleGoToReg} className={styles.reg_link}>
          Зарегистрируйтесь!
        </p>
      </p>
      <button onClick={handleSignIn} className={styles.singIn}>
        Войти
      </button>
    </div>
  );
};

export default SignIn;
