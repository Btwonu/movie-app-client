import axios from 'axios';

const getMovies = async (movieType = '', pageNumber) => {
  let url = `/movies`;

  if (movieType) {
    url += `?category=${movieType}`;
  }

  if (pageNumber) {
    url += `&page=${pageNumber}`;
  }

  console.log('from movieService', url);

  // axios({ url });
  // return fetch(`${BASE_URL}?category=${movieType}`)
  //   .then((res) => res.json())
  //   .catch((err) => console.error(err));
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
