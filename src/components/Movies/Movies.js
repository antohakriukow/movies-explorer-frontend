import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './Movies.css';

const Movies = ({ path }) => {
  return(
    <section className="movies">
      <SearchForm />
      <MoviesCardList path={path}/>
    </section>
  );
}

export default Movies;
