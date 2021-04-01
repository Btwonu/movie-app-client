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

export default {
  create,
};
