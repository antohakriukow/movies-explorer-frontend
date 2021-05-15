import { NavLink } from "react-router-dom";

import './NotFound.css';

const NotFound = () => {
  return(
    <section className="notfound">
      <div className="notfound__container">
        <h2 className="notfound__title">404</h2>
        <p className="notfound__text">Страница не найдена</p>
        <NavLink to="/" className="notfound__link">
          Назад
        </NavLink>
      </div>
    </section>
  );
}

export default NotFound;
