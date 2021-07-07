import React from "react";

import likeBtn from '../../images/like-btn.svg';
import likeBtnActive from '../../images/like-btn_active.svg';
import deleteBtn from '../../images/delete-btn.svg';

import './MoviesCard.css';

const MoviesCard = ({ card, path, saveMovie, deleteMovie, userMovies }) => {
  const isSaved = userMovies.find(m => m.nameRU === card.nameRU)

  const handleSaveBtn = () => isSaved ? deleteMovie(card) : saveMovie(card)

  const handleDeleteBtn = () => deleteMovie(card)

  const handleSaveBtnVisibility = (path === '/saved-movies') && 'none'
  const handleDeleteBtnVisibility = (path === '/movies') && 'none'

  return(
    <li className="card">
      <a href={card.trailer} target="blank">
        <img
          className="card__img"
          src={card.image}
          alt={card.nameRU}
          />
      </a>
      <div className="card__info">
        <p className="card__title">{card.nameRU}</p>
        <img
          src={isSaved ? likeBtnActive : likeBtn}
          className="card__action-btn"
          alt="like-button"
          style={{display: handleSaveBtnVisibility}}
          onClick={handleSaveBtn}
        />
        <img
          src={deleteBtn}
          className="card__action-btn"
          alt="delete-button"
          style={{display: handleDeleteBtnVisibility}}
          onClick={handleDeleteBtn}
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
