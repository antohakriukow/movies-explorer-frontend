import { moviesApiUrl } from './config';

class MoviesApi {
  constructor({ url }) {
    this.url = url;
  }

  getCheckedResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Sorry, something went wrong. Error: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this.url}/beatfilm-movies`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(this.getCheckedResponse);
  }
}

const moviesApi = new MoviesApi({ url: moviesApiUrl })

export default moviesApi;
