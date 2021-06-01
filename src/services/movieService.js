import axios from 'axios';

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

  return axios({ url, params }).then((result) => result.data);
};

const getOne = (id) => {
  let url = `/movies/${id}`;

  return axios(url)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

const movieService = {
  getMovies,
  getOne,
  getCategories,
};

export default movieService;
