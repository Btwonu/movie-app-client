const BASE_URL = 'http://localhost:5001/movie-find-dev/europe-west1/api/movies';

const getMovies = (movieType = '') => {
  return fetch(`${BASE_URL}?category=${movieType}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

export default {
  getMovies,
};
