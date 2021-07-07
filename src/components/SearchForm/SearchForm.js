import React, { useEffect, useState } from 'react';

import { useForm } from '../../hooks/useForm.hook';

import Checkbox from '../Checkbox/Checkbox';
import searchIcon from '../../images/search_icon.svg'
import './SearchForm.css';
// import './Checkbox.css'

const SearchForm = ({ handleFilterMovies, path, shortFilterMovies }) => {
  const [short, setShort] = useState(false)
  const { values, handleChange } = useForm({})

  const searchInSaved = (path === '/saved-movies') ? true : false

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('Searchform submitted on string 17')
    handleFilterMovies(values.movie)
  }

  // useEffect(() => {
  //   handleSubmit()
  // }, [handleSubmit, values])

  // const handleClick = (evt) => {
  //   const query = evt.target.parentNode.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].value
  //   shortFilterMovies(query, evt.target.checked, searchInSaved)
  // }


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
          {/* <div className="checkbox">
            <div className="checkbox__container">
              <label className="checkbox__label">
                <input
                  type="checkbox"
                  className="checkbox__input"
                  onChange={handleChange}
                  onClick={(evt) => handleClick(evt)}
                />
                <span className="checkbox__decorator"></span>
              </label>
            </div>
            <p className="checkbox__title">Короткометражки</p>
          </div> */}
          <Checkbox
            searchInSaved={searchInSaved}
            handleChange={handleChange}
            shortFilterMovies={shortFilterMovies}
          />
        </form>
      <div className="searchform__separator" />
    </section>
  );
}

export default SearchForm;

