import { NavLink } from "react-router-dom";

import './Register.css';

const Register = () => {
  const onLoginSubmit = console.log("onLoginSubmit")

  return(
    <section className="register">
      <div className="register__container">
        <a href="/" className="register__header">.</a>
        <h2 className="register__greetings">Добро пожаловать</h2>
        <form className="register__form" name="login" onSubmit={onLoginSubmit}>
          <label className="register__input-title">Имя</label>
          <input
            className="register__input"
            type="text"
            id="login-name"
            name="login-name"
            minLength="2"
            maxLength="40"
          />
          <label className="register__input-title">Email</label>
          <input
            className="register__input"
            type="email"
            name="email"
            required
            id="login-email"
            pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,})\b"
          ></input>
          <label className="register__input-title">Пароль</label>
          <input
            className="register__input"
            type="password"
            name="password"
            required
            id="login-password"
          ></input>
          <button className={`register__submit-btn`} type="submit">
            Зарегистрироваться
          </button>
        </form>
        <p className="register__text">
          Уже зарегистрированы?
          <NavLink
            to="/signin"
            className="register__link"
          >
            Войти
          </NavLink>
        </p>
      </div>
    </section>
  );
}

export default Register;
