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
    url: `/collections/${collectionId}/movies/${movieId}`,
    method: 'post',
  });
};

const removeMovieFromCollection = (movieId, collectionId) => {
  return axios({
    url: `/collections/${collectionId}/movies/${movieId}`,
    method: 'delete',
  });
};

const deleteCollection = (collectionId) => {
  console.log(`Collection ${collectionId} deleted`);

  return axios({ url: `/collections/${collectionId}`, method: 'delete' });
};

export default {
  create,
  getOne,
  addMovieToCollection,
  deleteCollection,
  removeMovieFromCollection,
};
