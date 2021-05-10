import React, { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


import NavigationLogin from '../NavigationLogin/NavigationLogin'
import NavigationLogout from '../NavigationLogout/NavigationLogout'
import './Header.css';

const Header = ({ path, handleMenuSwitcher }) => {
  const currentUser = useContext(CurrentUserContext);

  const classSwitcher = `header ${
    (path === '/signin' || path === '/signup')
    ? "header_hidden"
    : ""
  }`


  return(
    <section className={classSwitcher}>
      <a href="/" className="header__logo">.</a>
      <div className="header__menu-area">
        {currentUser.isAutenticated
          ? <NavigationLogin
              path={path}
              handleMenuSwitcher={handleMenuSwitcher}
            />
          : <NavigationLogout
        />}
      </div>
    </section>
  );
}

export default Header;
