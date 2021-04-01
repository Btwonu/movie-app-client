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
    url: `/collections/${collectionId}/movies`,
  });
};

export default {
  create,
  getOne,
};
