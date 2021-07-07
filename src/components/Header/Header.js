import React from 'react';


import NavigationLogin from '../NavigationLogin/NavigationLogin'
import NavigationLogout from '../NavigationLogout/NavigationLogout'
import './Header.css';

const Header = ({ path, handleMenuSwitcher, isAutenticated }) => {
  const classSwitcher = `header ${
    (path === '/signin' || path === '/signup')
    ? "header_hidden"
    : ""
  }`


  return(
    <section className={classSwitcher}>
      <a href="/" className="header__logo">.</a>
      <div className="header__menu-area">
        {isAutenticated
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
