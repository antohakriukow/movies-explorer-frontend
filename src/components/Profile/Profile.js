import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';

const Profile = () => {
  const currentUser = useContext(CurrentUserContext);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with func !onSubmit!")
  }

  return (
    <section className="profile">
      <form className="profile__form" onSubmit={onSubmit}>
        <h3 className="profile__greeting">Привет, {currentUser.name} !</h3>
        <div className="profile__input-area">
          <p className="profile__label">Имя</p>
          <div className="profile__area">
            <input 
              className="profile__input"
              placeholder={currentUser.name}
              name="name"
              minLength="2"
              maxLength="30"
            />
          </div>
          <div className="profile__area">
            <input
              className="profile__input"
              placeholder={currentUser.email}
              type="email"
              name="email"
              pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,})\b">
            </input>
          </div>
          <p className="profile__label">E-mail</p>
        </div>
        <button type="submit" className="profile__submit-btn">Редактировать</button>
        <NavLink to="/" className="profile__exit-btn">Выйти из аккаунта</NavLink>
      </form>
    </section>
  );
};

export default Profile;
