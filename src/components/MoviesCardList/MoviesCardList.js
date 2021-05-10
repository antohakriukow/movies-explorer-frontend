import React, { useContext } from 'react';

import InitialCards from '../../constants/initialCards'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css';


const MoviesCardList = ({path}) => {
  const currentUser = useContext(CurrentUserContext);

  const cardListSwitcher = (path === '/movies') ? InitialCards : currentUser.films

  return(
    <section className="moviescardlist">
      <ul className="moviescardlist__area">
        {cardListSwitcher.map((card) => (
          <MoviesCard 
            key={card._id}
            card={card}
            path={path}
          />
        ))}
      </ul>
      <button className="moviescardlist__show-more-btn">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
