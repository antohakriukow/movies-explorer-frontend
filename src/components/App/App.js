import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';

import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';

import currentUserCards from "../../constants/currentUserCards";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: "Медвед",
    email: "medved@med.ved",
    isAutenticated: true,
    id: "myID",
    films: currentUserCards
  });
  const location = useLocation();

  const [isMenuOpened, setIsMenuOpened] = useState(false)

  const handleMenuSwitcher = () => {
    isMenuOpened
    ? setIsMenuOpened(false)
    : setIsMenuOpened(true)
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">

        <Header
          path={location.pathname}
          handleMenuSwitcher={handleMenuSwitcher}
        />
        
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/movies">
            <Movies path={location.pathname}/>
          </Route>
          <Route path="/saved-movies">
            <SavedMovies path={location.pathname}/>
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

        <Footer path={location.pathname}/>
      </div>

      <Menu
        isMenuOpened={isMenuOpened}
        handleMenuSwitcher={handleMenuSwitcher}
        />

    </CurrentUserContext.Provider>
  );
}

export default App;
