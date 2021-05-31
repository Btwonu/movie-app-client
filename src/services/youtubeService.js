const API_KEY = 'AIzaSyC9imxdDkHUgZhYKqbWqbC4jM8YpOzQQjc';

const getTrailer = (movieTitle) => {
  let query = `${movieTitle} movie trailer`;
  let url = `https://youtube.googleapis.com/youtube/v3/search?q=${query}'&type=video&key=${API_KEY}`;

  return new Promise(function (resolve, reject) {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        let videoUrlEnding = res.items[0].id.videoId;
        resolve(`https://www.youtube.com/embed/${videoUrlEnding}`);
      })
      .catch(reject);
  });
};

export default {
  getTrailer,
};
