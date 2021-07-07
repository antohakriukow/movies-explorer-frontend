import { NavLink } from "react-router-dom";
import { useForm } from '../../hooks/useForm.hook';

import Preloader from '../Preloader/Preloader';
import './Login.css';

const Login = ({ onSignIn, isLoading }) => {
  const { values, handleChange, errors, isOk } = useForm({});

  const onSubmit = (evt) => {
    if (isOk) {
      evt.preventDefault();
      onSignIn(values.email, values.password)
    }
  }

  return(
    <section className="login">
      {isLoading && <Preloader />}
      <div className="login__container">
        <a href="/" className="login__header">.</a>
        <h2 className="login__greetings">Рады видеть</h2>
        <form className="login__form" name="login" method="POST" onSubmit={onSubmit}>
          <label className="login__input-title">Email</label>
          <input
            onChange={handleChange}
            className={`login__input ${errors && errors["email"] && 'login__input_type_error'}`}
            type="email"
            name="email"
            required
            id="login-email"
            pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,})\b"
          ></input>
          <span className="login__input-error" id="email-input-error">
            {errors && errors["email"] && errors["email"]}
          </span>
          <label className="login__input-title">Пароль</label>
          <input
            onChange={handleChange}
            className="login__input"
            type="password"
            name="password"
            required
            id="login-password"
          ></input>
          <span className="login__input-error" id="password-input-error">
            {errors && errors["password"] && errors["password"]}
          </span>
          <button
            className={`login__submit-btn`}
            type="submit"
            disabled={!isOk}
            >
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
