const BASE_URL = 'http://localhost:5001/movie-find-dev/europe-west1/api/movies';

const getMovies = (movieType) => {
  return fetch(`${BASE_URL}/${movieType}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const getPopular = () => {
  return fetch(`${BASE_URL}/popular`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const getTopRated = () => {
  return fetch(`${BASE_URL}/top-rated`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const getUpcoming = () => {
  return fetch(`${BASE_URL}/upcoming`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

export default {
  getPopular,
  getTopRated,
  getUpcoming,
  getMovies,
};
