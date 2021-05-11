import "./Checkbox.css";

const Checkbox = () => {
  return (
    <section className="checkbox">
      <div className="checkbox__container">
        <label className="checkbox__label">
          <input type="checkbox" className="checkbox__input"/>
          <span className="checkbox__decorator"></span>
        </label>
      </div>
      <p className="checkbox__title">Короткометражки</p>
    </section>
  );
}

export default Checkbox;
