import Checkbox from '../Checkbox/Checkbox';
import searchIcon from '../../images/search_icon.svg'
import './SearchForm.css';

const SearchForm = () => {
  return(
    <section className="searchform">
      <div className="searchform__decorator">
        <img className="searchform__icon" src={searchIcon} alt='search__icon' />
      </div>
        <form className="searchform__form">
          <div className="searchform__bar">
            <input className="searchform__input" placeholder="Фильм"/>
            <button className="searchform__submit-btn"></button>  
          </div>
          <div className="searchform__vertical-separator" />
          <Checkbox />
        </form>
      <div className="searchform__separator" />
    </section>
  );
}

export default SearchForm;
