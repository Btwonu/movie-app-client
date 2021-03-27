const BASE_URL = 'http://localhost:5001/movie-find-dev/europe-west1/api/movies';

const getMovies = (movieType = '') => {
  return fetch(`${BASE_URL}?category=${movieType}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const getOne = (id) => {
  let url = `http://localhost:5001/movie-find-dev/europe-west1/api/movies/${id}`;

  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

export default {
  getMovies,
  getOne,
};
