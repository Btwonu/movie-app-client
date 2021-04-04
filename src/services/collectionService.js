import axios from 'axios';

const create = (title, description, userId) => {
  return axios({
    method: 'post',
    url: '/collections',
    data: {
      title,
      description,
      userId,
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

const deleteCollection = (collectionId) => {
  return axios({ method: 'delete', url: `/collections/${collectionId}` });
};

export default {
  create,
  getOne,
  addMovieToCollection,
  deleteCollection,
};
