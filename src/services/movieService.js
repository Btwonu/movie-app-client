import axios from 'axios';

const BASE_URL = `http://localhost:5001/movie-find-dev/europe-west1/api/movies`;

const getCategories = () => {
  return axios('/movies');
};

const getMovies = async (movieType = '', pageNumber) => {
  let url = `/movies`;
  let params = {};

  if (movieType) {
    params.category = movieType;
  }

  if (pageNumber) {
    params.page = pageNumber;
  }

  // console.log('from movieService', url);

  return axios({ url, params });
  // return fetch(`${BASE_URL}?category=${movieType}`)
  //   .then((res) => res.json())
  //   .catch((err) => console.error(err));
};

const getOne = (id) => {
  let url = `/movies/${id}`;

  return axios(url)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export default {
  getMovies,
  getOne,
  getCategories,
};
