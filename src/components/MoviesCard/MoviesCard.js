import React, { useContext } from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import likeBtn from '../../images/like-btn.svg';
import likeBtnActive from '../../images/like-btn_active.svg';
import deleteBtn from '../../images/delete-btn.svg';

import './MoviesCard.css';

const MoviesCard = ({ card, path }) => {
  const currentUser = useContext(CurrentUserContext);

  const isSaved = currentUser.films
    .map(film => film._id)
    .includes(card._id);

  const handleSaveBtnVisibility = (path === '/saved-movies') && 'none'
  const handleDeleteBtnVisibility = (path === '/movies') && 'none'

  return(
    <li className="card">
      <img
        className="card__img"
        src={card.image}
        alt={card.nameRU}
      />
      <div className="card__info">
        <p className="card__title">{card.nameRU}</p>
        <img
          src={isSaved ? likeBtnActive : likeBtn}
          classname="card__action-btn"
          alt="like-button"
          style={{display: handleSaveBtnVisibility}}
        />
        <img
          src={deleteBtn}
          classname="card__action-btn"
          alt="delete-button"
          style={{display: handleDeleteBtnVisibility}}
        />
      </div>
      <p className="card__duration">{
        card.duration < 60
        ? `${card.duration}м`
        : `${Math.trunc(card.duration / 60)}ч ${card.duration - 60 * Math.trunc(card.duration / 60)}м`
        }</p>
    </li>
  );
}

export default MoviesCard;
