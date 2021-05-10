import { NavLink } from "react-router-dom";
import './NavigationLogin.css';

const NavigationLogin = ({ path, handleMenuSwitcher }) => {
  const menuClassSwitcher = `navigation-login__menu ${
    path === '/'
    ? "navigation-login__menu_white"
    : ""
  }`
  const filmsClassSwitcher = `navigation-login__btn ${
    path === '/'
    ? "navigation-login__btn_white"
    : ""
  }`
  const savedfilmsClassSwitcher = `navigation-login__btn navigation-login__btn_thin ${
    path === '/'
    ? "navigation-login__btn_white"
    : ""
  }`
  const accountClassSwitcher = `navigation-login__btn navigation-login__btn_oval ${
    path === '/'
    ? "navigation-login__btn_white navigation-login__btn_transparent"
    : ""
  }`

  return(
    <section className="navigation-login">
      <button className={menuClassSwitcher} onClick={handleMenuSwitcher}></button>
      <NavLink to="/movies" className={filmsClassSwitcher}>Фильмы</NavLink>
      <NavLink to="/saved-movies" className={savedfilmsClassSwitcher}>Сохраненные фильмы</NavLink>
      <NavLink to="/profile" className={accountClassSwitcher}>Аккаунт</NavLink>
    </section>
  );
}

export default NavigationLogin;
