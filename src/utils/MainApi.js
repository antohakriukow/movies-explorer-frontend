import { apiUrl } from "./config";

class MainApi {
  constructor({ url }) {
    this.url = url;
  }

  getCheckedResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Sorry, something went wrong. Error: ${res.status}`);
  }

  getSavedMovies(jwt) {
    return fetch(`${this.url}/movies`, {
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json'
      }
    }).then((res) => this.getCheckedResponse(res));
  }

  saveMovie(jwt, movie) {
    return fetch(`${this.url}/movies`, {
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(movie)
    })
      .then((res) => this.getCheckedResponse(res));
  }

  deleteMovie(jwt, movieId) {
    return fetch(`${this.url}/movies/${movieId}`, {
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json'
      },
      method: 'DELETE',
    })
      .then((res) => this.getCheckedResponse(res));
  }

  getUserData(jwt) {
    return fetch(`${this.url}/users/me`, {
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => this.getCheckedResponse(res));
  }

  updateUserData(jwt, email, name) {
    return fetch(`${this.url}/users/me`, {
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        email,
        name
      })
    })
      .then((res) => this.getCheckedResponse(res));
  }

  switchMovieStatus(jwt, movie, movieId, isSaved) {
    return isSaved ? this.deleteMovie(jwt, movieId) : this.saveMovie(jwt, movie);
  }
};

const mainApi = new MainApi({ url: apiUrl });

export default mainApi;
