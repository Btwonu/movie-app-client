import axios from 'axios';

const create = (title, description) => {
  return axios({
    method: 'post',
    url: '/collections',
    data: {
      title,
      description,
    },
  });
};

const getOne = (collectionId) => {
  return axios({
    url: `/collections/${collectionId}`,
  });
};

const addMovieToCollection = (movieId, collectionId) => {
  return axios({
    method: 'post',
    url: `/collections/${collectionId}/movies/${movieId}`,
  });
};

export default {
  create,
  getOne,
  addMovieToCollection,
};
