import "./Checkbox.css";

const Checkbox = () => {
  return (
    <section className="checkbox">
      <p className="checkbox__title">Короткометражки</p>
      <div className="checkbox__container">
      <label className="checkbox__label">
        <input type="checkbox" className="checkbox__input"/>
        <span className="checkbox__decorator"></span>
      </label>
      </div>
    </section>
  );
}

export default Checkbox;
