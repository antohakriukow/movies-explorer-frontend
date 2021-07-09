import React, { useState } from 'react';

import { useForm } from '../../hooks/useForm.hook';

import Checkbox from '../Checkbox/Checkbox';
import searchIcon from '../../images/search_icon.svg'
import './SearchForm.css';
// import './Checkbox.css'

const SearchForm = ({ handleFilterMovies, path, shortFilterMovies }) => {
  const { values, handleChange } = useForm({})
  const [short, setShort] = useState(false);

  // const searchInSaved = (path === '/saved-movies') ? true : false

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleFilterMovies(values.movie, short)
  }


  return(
    <section className="searchform">
      <div className="searchform__decorator">
        <img className="searchform__icon" src={searchIcon} alt='search__icon' />
      </div>
        <form
        className="searchform__form"
        onSubmit = { handleSubmit }
        >
          <div className="searchform__bar">
            <input
              className="searchform__input"
              placeholder="Фильм"
              name="movie"
              onChange={handleChange}
            />
            <button className="searchform__submit-btn"></button>  
          </div>
          <div className="searchform__vertical-separator" />
          <Checkbox
            setShort={setShort}
            handleFilterMovies={handleFilterMovies}
            handleChange={handleChange}
          />
        </form>
      <div className="searchform__separator" />
    </section>
  );
}

export default SearchForm;

