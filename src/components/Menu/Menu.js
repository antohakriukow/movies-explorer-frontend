import { NavLink } from "react-router-dom";

import './Menu.css';

const Menu = ({ isMenuOpened, handleMenuSwitcher }) => {
const classSwitcher = isMenuOpened
  ? "menu__overlay"
  : "menu__overlay menu_hidden"

  return(
    <section className={classSwitcher}>
      <div className="menu">
      <button className="menu__close-btn"onClick={handleMenuSwitcher} />
      <nav className="menu__area">
        <div className="menu__top">
          <NavLink to="/" className="menu__item" onClick={handleMenuSwitcher}>Главная</NavLink>
          <NavLink to="/movies" className="menu__item" onClick={handleMenuSwitcher}>Фильмы</NavLink>
          <NavLink to="/saved-movies" className="menu__item" onClick={handleMenuSwitcher}>Сохраненные фильмы</NavLink>
        </div>
        <NavLink to="/profile" className="menu__item menu__item_oval" onClick={handleMenuSwitcher}>Аккаунт</NavLink>
      </nav>
    </div>
    </section>
  );
}

export default Menu;
