import { moviesApiUrl, defaultMovieImg, defaultTrailerUrl } from './config';

const filterMovies = (query, movies, searchInSaved = false) => {
  if (searchInSaved && (query === '')) {
    return movies
  }
  if (!searchInSaved && (query.length < 1) && (movies.length < 100)) {
    return movies.filter((movie) => movie.nameRU.toLowerCase().includes(query.toLowerCase()))
  }
  if (query.length < 1) {return []}
  return movies.filter((movie) => movie.nameRU.toLowerCase().includes(query.toLowerCase())
  // || movie.description.toLowerCase().includes(query.toLowerCase())
  )
}

const shortFilterMovies = (movies) => {
  return movies.filter((movie) => movie.duration <= 40)
}


const movieFormatAdopter = (importedMovie) => {
  return {
    country: importedMovie.country,
    director: importedMovie.director,
    duration: importedMovie.duration,
    year: importedMovie.year,
    description: importedMovie.description,
    image: importedMovie.image ? `${moviesApiUrl}${importedMovie.image.url}` : defaultMovieImg,
    trailer: importedMovie.trailerLink && importedMovie.trailerLink.includes('http') ? importedMovie.trailerLink : defaultTrailerUrl,
    thumbnail: `${moviesApiUrl}${importedMovie.image && importedMovie.image.formats ? importedMovie.image.formats.thumbnail.url : defaultMovieImg}`,
    movieId: importedMovie.id,
    nameRU: importedMovie.nameRU ? importedMovie.nameRU : "Данные отсутствуют",
    nameEN: importedMovie.nameEN ? importedMovie.nameEN : "Данные отсутствуют"
  }
}

const moviesErrorText = "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";
const noFilmsText = "У Вас нет сохраненных фильмов!";
const notFoundErrorText = "Ничего не найдено.";

export {
  filterMovies,
  shortFilterMovies,
  movieFormatAdopter,
  moviesErrorText,
  noFilmsText,
  notFoundErrorText
};
