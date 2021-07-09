import "./Checkbox.css";

const Checkbox = ({
  setShort,
  handleFilterMovies,
  values,
  short,
  searchInSaved,
  movie,
  handleChange,
  shortFilterMovies
}) => {

  const handleClick = (evt) => {
    const query = evt.target.parentNode.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].value
    setShort(evt.target.checked)
    console.log(evt.target.checked)
    handleFilterMovies(query, evt.target.checked)
  }



  return (
    <div className="checkbox">
      <div className="checkbox__container">
        <label className="checkbox__label">
          <input
            type="checkbox"
            className="checkbox__input"
            onChange={handleChange}
            onClick={handleClick}
          />
          <span className="checkbox__decorator"></span>
        </label>
      </div>
      <p className="checkbox__title">Короткометражки</p>
    </div>
  );
}

export default Checkbox;
