import { NavLink } from "react-router-dom";
import './NavigationLogout.css';

const NavigationLogout = () => {
  return(
    <section className="navigation-logout">
      <NavLink to="/signup" className="navigation-logout__btn">Регистрация</NavLink>
      <NavLink to="/signin" className="navigation-logout__btn navigation-logout__btn_square">Войти</NavLink>
    </section>
  );
}

export default NavigationLogout;
