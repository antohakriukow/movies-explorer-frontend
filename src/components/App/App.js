import React, { useEffect, useState, useCallback } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import Popup from '../Popup/Popup';

import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import { checkToken, signUp, singIn } from '../../utils/AuthApi';
import { movieFormatAdopter, filterMovies, shortFilterMovies } from '../../utils/utils';

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import './App.css';

function App() {

//Visual effects
const [isMenuOpened, setIsMenuOpened] = useState(false);
const handleMenuSwitcher = () => isMenuOpened ? setIsMenuOpened(false) : setIsMenuOpened(true)

//App Logic
  const location = useLocation();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [isSearchCompleted, setIsSearchCompleted] = useState(false)

  const [movies, setMovies] = useState([]);

  const [currentUser, setCurrentUser] = useState({});
  const [userMovies, setUserMovies] = useState([]);
  const [isAutenticated, setIsAutenticated] = useState(false);

  const [moviesError, setMoviesError] = useState(false);
  const [notFoundError, setNotFoundError] = useState(false);

  const [popupText, setPopupText] = useState('')
  const [popupIsOpen, setPopupIsOpen] = useState(false)


  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (isAutenticated) {
      setIsLoading(true);
      Promise.all([
        mainApi.getUserData(jwt),
        mainApi.getSavedMovies(jwt)
      ])
        .then(data => {
          const [userData, userMovies] = data;
          localStorage.setItem('savedMovies', JSON.stringify(userMovies));
          setCurrentUser(userData);
          setUserMovies(userMovies);
          setIsLoading(false)
        })
    }
  }, [isAutenticated, currentUser.id, location]);


  const handleCheckToken = useCallback(() => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      checkToken(jwt)
        .then((user) => {
          if (user) {
            setCurrentUser(user);
            setIsAutenticated(true);
            history.push(location)
          }
        })
        .catch(err => {
          showPopup(err.message)
          console.log(err)
          setIsAutenticated(false);
          history.push('/')
          localStorage.clear();
        })
    }
  }, [history])


  useEffect(() => {
    handleCheckToken();
  }, [handleCheckToken]);


  useEffect(() => {
    location.pathname === '/saved-movies'
      ? setMovies(userMovies)
      : (!setIsSearchCompleted && setMovies([]))
  }, [location.pathname, userMovies])


  useEffect(() => {
    (location.pathname === '/movies') && setMovies([])
  }, [location.pathname, history])


  const handleSignUp = (email, password, name) => {
    setIsLoading(true)
    signUp(email, password, name)
      .then((res) => {
        if (res.data) {
          singIn(res.data.email, password)
            .then((data) => {
              if (data.token) {
                setIsAutenticated(true);
                handleGetMovies()
                history.push("/movies");
                showPopup('Вы успешно зарегистрировались!')
              }
            })
        } else {
          return
        }
      })
      .catch((err) => {
        showPopup(err.message)
        console.log("handleSignUp error: ", err);
      })
      .finally(() => setIsLoading(false))
  };


  const handleSignIn = (email, password) => {
    setIsLoading(true)
    singIn(email, password)
      .then((data) => {
        if (data.token) {
          setIsAutenticated(true);
          handleGetMovies()
          history.push("/movies");
          showPopup('Добро пожаловать обратно!')
        } else {
          showPopup('Доступ запрещен')
          return
        }
      })
      .catch((err) => {
        showPopup(err.message)
        console.log("handleSignIn error: ", err);
      })
      .finally(() => setIsLoading(false))
  };


  const handleSignOut = () => {
    setIsLoading(true);
    setIsAutenticated(false);
    setCurrentUser({});
    localStorage.clear()
    setMovies([])
    setUserMovies([])
    setIsLoading(false);
    history.push('/')
  };


  const handleUpdateUser = (email, name) => {
    setIsLoading(true)
    const jwt = localStorage.getItem('jwt');
    mainApi
      .updateUserData(jwt, email, name)
      .then((user) => {
        setCurrentUser(user);
        showPopup('Данные пользователя изменены!')
      })
      .catch((err) => console.log("handleUpdateUser error: ", err))
      .finally(() => setIsLoading(false))
  };


  const handleGetMovies = () => {
    setIsLoading(true)
    return new Promise((resolve, reject) => {      
      moviesApi.getMovies()
        .then(movies => movies.map(movie => movieFormatAdopter(movie)))
        .then(adoptedMovies => localStorage.setItem('allMovies', JSON.stringify(adoptedMovies)))
        .catch(err => {
          setMoviesError(true)
          showPopup(err.message)
          console.log("handleGetMovies Error: ", err)
          })
        .finally(() => setIsLoading(false))
    }) 
  }


  const handleFilterMovies = (query, short = false) => {
    let searchInSaved = location.pathname === '/saved-movies' ? true : false
    setIsLoading(true)
    setIsSearchCompleted(false)
    setMoviesError(false)
    setNotFoundError(false)
    if (searchInSaved && (JSON.parse(localStorage.getItem('savedMovies')).length === 0)) {
      setIsLoading(false)
      setIsSearchCompleted(true)
      return
    }
    if (!searchInSaved && query === undefined) {
      setIsLoading(false)
      return
    }
    if (searchInSaved && !short && (query === undefined || query === '')) {
      setMovies(userMovies)
      setIsSearchCompleted(true)
      setIsLoading(false)
      return
    }
    let arr = searchInSaved ? userMovies : JSON.parse(localStorage.getItem('allMovies'))
    if (!searchInSaved && (query === '') && JSON.parse(localStorage.getItem('initialMovies'))) {
      arr = JSON.parse(localStorage.getItem('initialMovies'))
    }
    if (!searchInSaved && arr === null) {handleGetMovies()}
    if (searchInSaved && arr === null) {
      setIsLoading(false)
      return
    }
    
    const filtredMovies = short ? shortFilterMovies(filterMovies(query, arr, searchInSaved)) : filterMovies(query, arr)
    if (filtredMovies.length === 0) {setNotFoundError(true)} 
    setMovies(filtredMovies)
    console.log('App.js movies: ', movies)
    !searchInSaved && localStorage.setItem('initialMovies', JSON.stringify(filtredMovies))
    setIsSearchCompleted(true)
    setIsLoading(false)
  }

  const saveMovie = (movie) => {
    const jwt = localStorage.getItem('jwt');
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    const isSaved = savedMovies.some((mov) => mov.movieId === movie.movieId);
    if (isSaved) {
      return
    }
    setIsLoading(true);
    mainApi.saveMovie(jwt, movie)
      .then((movie) => {
        const newSavedMovies = [movie, ...savedMovies];
        localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
        setUserMovies(newSavedMovies);
      })
      .catch((err) => console.log("saveMovie error: ", err))
      .finally(() => setIsLoading(false))
  }


  const deleteMovie = (movie) => {
    setIsLoading(true);
    const jwt = localStorage.getItem('jwt');
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    const deletingMovieId = savedMovies.find(m => m.movieId === movie.movieId).['_id'];
    mainApi.deleteMovie(jwt, deletingMovieId)
      .then((mov) => {
        const newMovies = savedMovies.filter((movie) => movie.movieId !== mov.movieId);
        localStorage.setItem('savedMovies', JSON.stringify(newMovies));
        setUserMovies(newMovies);
      })
      .catch((err) => console.log("deleteMovie error: ", err))
      .finally(() => setIsLoading(false))
  }


  const showPopup = (text) => {
    setPopupText(text)
    setPopupIsOpen(true)
  }

  const hidePopup = () => {
    setPopupIsOpen(false)
  }

  const hidePopupOnOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      hidePopup()
    }
  }

  return (
    <CurrentUserContext.Provider value={{currentUser}}>
      <div className="App">

        <Header
          path={location.pathname}
          handleMenuSwitcher={handleMenuSwitcher}
          isAutenticated={isAutenticated}
        />
        
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <ProtectedRoute
            component={Movies}
            path="/movies"
            isAutenticated={isAutenticated}
            renderPath={location.pathname}
            movies={movies}
            userMovies={userMovies}
            handleFilterMovies={handleFilterMovies}
            isSearchCompleted={isSearchCompleted}
            saveMovie={saveMovie}
            deleteMovie={deleteMovie}
            isLoading={isLoading}
            moviesError={moviesError}
            notFoundError={notFoundError}
            shortFilterMovies={shortFilterMovies}
          />
          <ProtectedRoute
            component={SavedMovies}
            path="/saved-movies"
            isAutenticated={isAutenticated}
            renderPath={location.pathname}
            movies={movies}
            userMovies={userMovies}
            handleFilterMovies={handleFilterMovies}
            isSearchCompleted={isSearchCompleted}
            saveMovie={saveMovie}
            deleteMovie={deleteMovie}
            moviesError={moviesError}
            notFoundError={notFoundError}
            shortFilterMovies={shortFilterMovies}
          />
          <Route path="/signin">
            <Login
              onSignIn={handleSignIn}
              isLoading={isLoading}
            />
          </Route>
          <Route path="/signup">
            <Register
              onSignUp={handleSignUp}
              isLoading={isLoading}
            />
          </Route>
          <ProtectedRoute
            component={Profile}
            path="/profile"
            isAutenticated={isAutenticated}
            handleSignOut={handleSignOut}
            handleUpdateUser={handleUpdateUser}
            isLoading={isLoading}
          />
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

      <Popup
        text={popupText}
        isOpen={popupIsOpen}
        onClose={hidePopup}
        onClick={hidePopupOnOverlay}
      />

    </CurrentUserContext.Provider>
  )

}

export default App;
