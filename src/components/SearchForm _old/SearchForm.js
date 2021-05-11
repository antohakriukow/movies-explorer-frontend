import Checkbox from '../Checkbox/Checkbox';
import './SearchForm.css';

const SearchForm = () => {
  return(
    <section className="searchform">
      <div className="searchform__decorator">
        <form className="searchform__form">
          <div className="searchform__bar">
            <input className="searchform__input" placeholder="Фильм"/>
            <button className="searchform__submit-btn"></button>  
          </div>
          <Checkbox />
        </form>
      </div>
      <div className="searchform__separator" />
    </section>
  );
}

export default SearchForm;
