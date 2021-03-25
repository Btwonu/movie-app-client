const getAll = () => {
  return fetch(
    'http://localhost:5001/movie-find-dev/europe-west1/api/movies/popular'
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

export default {
  getAll,
};
