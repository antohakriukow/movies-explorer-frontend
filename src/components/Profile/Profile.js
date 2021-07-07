import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useForm } from '../../hooks/useForm.hook';

import Preloader from '../Preloader/Preloader';
import './Profile.css';

const Profile = ({ handleSignOut, handleUpdateUser, isLoading }) => {
  const { values, handleChange, errors, isOk } = useForm({});
  const { currentUser } = useContext(CurrentUserContext);

  const onSubmit = (e) => {
    if (isOk) {
      e.preventDefault();
      console.log("values: ", values.email, values.name)
      handleUpdateUser(values.email, values.name)
    }
  }

  useEffect(() => {
    values.name = currentUser.name;
    values.email = currentUser.email;
  }, [currentUser]);

  return (
    <section className="profile">
      <form className="profile__form" onSubmit={onSubmit}>
        <h3 className="profile__greeting">Привет, {currentUser.name} !</h3>
        {isLoading && <Preloader />}
        <div className="profile__input-area">
          <p className="profile__label">Имя</p>
          <div className="profile__area">
            <input
              onChange={handleChange}
              className={`profile__input ${errors && errors["name"] && 'profile__input_type_error'}`}
              placeholder={currentUser.name}
              name="name"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="profile__input-error" id="name-input-error">
              {errors && errors["name"] && errors["name"]}
            </span>
          </div>
          <div className="profile__area">
            <input
              onChange={handleChange}
              className={`profile__input ${errors && errors["email"] && 'profile__input_type_error'}`}
              placeholder={currentUser.email}
              type="email"
              name="email"
              required
              pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,})\b">
            </input>
            <span className="profile__input-error" id="email-input-error">
              {errors && errors["email"] && errors["email"]}
            </span>
          </div>
          <p className="profile__label">E-mail</p>
        </div>
        <button type="submit" className="profile__submit-btn" disabled={!isOk}>Редактировать</button>
        <NavLink onClick={handleSignOut} to="/" className="profile__exit-btn">Выйти из аккаунта</NavLink>
      </form>
    </section>
  );
};

export default Profile;

