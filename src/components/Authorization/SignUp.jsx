import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Authorization/auth.module.css";

const SignUp = ({ setModal, setToReg }) => {
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
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeMail = (e) => {
    setMail(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleReg = () => {
    if (!login || login.length < 3) {
      return alert("Логин должен содержать не меньше 3-х символов");
    } else if (!mail || mail.length < 5 || !mail.includes("@")) {
      return alert("Введите правильный эл. адрес");
    } else if (!password || password.length < 8) {
      return alert("Пароль должен содержать не меньше 8 символов");
    } else if (!name) {
      return alert("Поле имени не должно быть пустым");
    } else if (!lastName) {
      return alert("Поле фамилии не должно быть пустым");
    }
    setLogin("");
    setPassword("");
    setMail("");
    setName("");
    setLastName("");

    setTimeout(sendNavigate, 2000);
    setTimeout(sendSetModal, 1000);
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
      <div className={styles.two_inputs_parent}>
        <div className={styles.two_inputs}>
          <label htmlFor="">Имя:</label>
          <input
            value={name}
            onChange={(e) => handleChangeName(e)}
            placeholder="Имя"
            className={styles.name_input}
            type="text"
          />
        </div>
        <div className={styles.two_inputs}>
          <label htmlFor="">Фамилия:</label>
          <input
            value={lastName}
            onChange={(e) => handleChangeLastName(e)}
            placeholder="Фамилия"
            className={styles.lastname_input}
            type="text"
          />
        </div>
      </div>

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
