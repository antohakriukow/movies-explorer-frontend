import { NavLink } from "react-router-dom";

import './Login.css';

const Login = () => {
  const onLoginSubmit = console.log("onLoginSubmit")

  return(
    <section className="login">
      <div className="login__container">
        <a href="/" className="login__header">.</a>
        <h2 className="login__greetings">Рады видеть</h2>
        <form className="login__form" name="login" onSubmit={onLoginSubmit}>
          <label className="login__input-title">Email</label>
          <input
            className="login__input"
            type="email"
            name="email"
            required
            id="login-email"
            pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,})\b"
          ></input>
          <label className="login__input-title">Пароль</label>
          <input
            className="login__input"
            type="password"
            name="password"
            required
            id="login-password"
          ></input>
          <button className={`login__submit-btn`} type="submit">
            Войти
          </button>
        </form>
        <p className="login__text">
        Ещё не зарегистрированы?
          <NavLink
            to="/signup"
            className="login__link"
          >
            Регистрация
          </NavLink>
        </p>
      </div>
    </section>
  );
}

export default Login;
