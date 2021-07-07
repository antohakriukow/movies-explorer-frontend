import { NavLink } from "react-router-dom";
import { useForm } from '../../hooks/useForm.hook';

import Preloader from '../Preloader/Preloader';
import './Register.css';

const Register = ({ onSignUp, isLoading }) => {
  const { values, handleChange, errors, isOk } = useForm({});

  const onSubmit = (evt) => {
    if (isOk) {
      evt.preventDefault();
      onSignUp(values.email, values.password, values.name)
    }
  }

  return(
    <section className="register">
      {isLoading && <Preloader />}
      <div className="register__container">
        <a href="/" className="register__header">.</a>
        <h2 className="register__greetings">Добро пожаловать</h2>
        <form className="register__form" name="login" onSubmit={onSubmit}>
          <label className="register__input-title">Имя</label>
          <input
            onChange={handleChange}
            className={`register__input ${errors && errors["name"] && 'register__input_type_error'}`}
            type="text"
            name="name"
            minLength="2"
            maxLength="40"
          />
          <span className="register__input-error" id="name-input-error">
            {errors && errors["name"] && errors["name"]}
          </span>
          <label className="register__input-title">Email</label>
          <input
            onChange={handleChange}
            className={`register__input ${errors && errors["email"] && 'register__input_type_error'}`}
            type="email"
            name="email"
            required
            pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,})\b"
          ></input>
          <span className="register__input-error" id="email-input-error">
            {errors && errors["email"] && errors["email"]}
          </span>
          <label className="register__input-title">Пароль</label>
          <input
            onChange={handleChange}
            className="register__input"
            type="password"
            name="password"
            required
          ></input>
          <span className="register__input-error" id="password-input-error">
            {errors && errors["password"] && errors["password"]}
          </span>
          <button
          className={`register__submit-btn`}
          type="submit"
          disabled={!isOk}
          >
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

