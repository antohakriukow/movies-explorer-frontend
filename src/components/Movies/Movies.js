import React from 'react';

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from '../MoviesCardList/MoviesCardList';


import './Movies.css';

const Movies = ({
  renderPath,
  movies,
  userMovies,
  handleFilterMovies,
  isSearchCompleted,
  saveMovie,
  deleteMovie,
  isLoading,
  moviesError,
  notFoundError,
  shortFilterMovies,
  }) => {


  return (
    <section className="movies">
      <SearchForm
        handleFilterMovies={handleFilterMovies}
        path={renderPath}
        shortFilterMovies={shortFilterMovies}
      />
      <MoviesCardList
        path={renderPath}
        movies={movies}
        userMovies={userMovies}
        isSearchCompleted={isSearchCompleted}
        saveMovie={saveMovie}
        deleteMovie={deleteMovie}
        isLoading={isLoading}
        moviesError={moviesError}
        notFoundError={notFoundError}
      />
    </section>
  )
}

export default Movies;
