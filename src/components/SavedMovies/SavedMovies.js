import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './SavedMovies.css';

const SavedMovies = ({ path }) => {
  return(
    <section className="savedmovies">
      <SearchForm />
      <MoviesCardList path={path}/>
    </section>
    
  );
}

export default SavedMovies;
