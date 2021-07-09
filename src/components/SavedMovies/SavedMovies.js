import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './SavedMovies.css';

const SavedMovies = ({
  renderPath,
  movies,
  userMovies,
  handleFilterMovies,
  isSearchCompleted,
  saveMovie,
  deleteMovie,
  moviesError,
  notFoundError,
  shortFilterMovies,
  }) => {

  return(
    <section className="savedmovies">
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
        moviesError={moviesError}
        notFoundError={notFoundError}
ы      />
    </section>
    
  );
}

export default SavedMovies;
