import React, { useCallback, useEffect, useState } from 'react';

import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard'
import MoviesCardListSpan from '../MoviesCardListSpan/MoviesCardListSpan'

import {
  moviesErrorText,
  noFilmsText,
  notFoundErrorText
} from '../../utils/utils';
import './MoviesCardList.css';


const MoviesCardList = ({
  path,
  movies,
  userMovies,
  isSearchCompleted,
  saveMovie,
  deleteMovie,
  isLoading,
  moviesError,
  notFoundError }) => {
  const [initialMoviesCount, setInitialMoviesCount] = useState(() => {
    if (path === '/saved-movies') {
      return 1000
    }
    const size = window.innerWidth;
    if (size < 480) {
      return 5;
    } else if (size < 1041) {
      return 8;
    } else if (size <= 1279) {
      return 12;
    } else if (size > 1279) {
      return 16;
    }
  })

  const [increaseMoviesCount, setIncreaseMoviesCount] = useState(() => {
    const size = window.innerWidth;
    if (size < 480) {
      return 2;
    } else if (size < 1041) {
      return 2;
    } else if (size <= 1279) {
      return 3;
    } else if (size > 1279) {
      return 4;
    }
  })

  const handleResize = useCallback(() => {
    if (path === '/saved-movies') {
      setInitialMoviesCount(1000);
    }
    const size = window.innerWidth;
    if (size < 480) {
      setInitialMoviesCount(5);
      setIncreaseMoviesCount(2);
    } else if (size < 1041) {
      setInitialMoviesCount(8);
      setIncreaseMoviesCount(2);
    } else if (size <= 1279) {
      setInitialMoviesCount(12);
      setIncreaseMoviesCount(3);
    } else if (size > 1279) {
      setInitialMoviesCount(16);
      setIncreaseMoviesCount(4);
    }
  }, [path])

  function handleIncreaseMovies() {
    setInitialMoviesCount(prev =>  prev + increaseMoviesCount);
  }

  const visibleMovies = movies.slice(0, initialMoviesCount);


  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, [handleResize])

  const savedMoviesTrigger = (path === '/saved-movies') && 'none'

  const noFilmsTrigger = ((savedMoviesTrigger) || (visibleMovies.length === movies.length)) && 'none'

  const noSavedMovies = () => {
    if (localStorage.getItem('savedMovies')) {
      const arrayLength = JSON.parse(localStorage.getItem('savedMovies')).length
      if ((arrayLength === 0) || (arrayLength === null)) {
        return true
      } else {return false}
    }
    }

  return(
    <section className="moviescardlist">
      {isLoading && <Preloader />}
      {savedMoviesTrigger && noSavedMovies() && <MoviesCardListSpan spanText={noFilmsText}/>}
      {moviesError && <MoviesCardListSpan spanText={moviesErrorText}/>}
      {notFoundError && isSearchCompleted && <MoviesCardListSpan spanText = {notFoundErrorText}/>}
      <ul className="moviescardlist__area">
        {isSearchCompleted && visibleMovies.map((card) => (
          <MoviesCard 
            key={card.movieId}
            card={card}
            path={path}
            saveMovie={saveMovie}
            deleteMovie={deleteMovie}
            userMovies={userMovies}
          />
        ))}
      </ul>
      {<button
      className="moviescardlist__show-more-btn"
      style={{display: noFilmsTrigger}}
      onClick={handleIncreaseMovies}
      >Ещё</button>}
    </section>
  );
}

export default MoviesCardList;
