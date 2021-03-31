const API_KEY = 'AIzaSyC9imxdDkHUgZhYKqbWqbC4jM8YpOzQQjc';

const getTrailer = (movieTitle) => {
  let query = `${movieTitle} movie trailer`;
  let url = `https://youtube.googleapis.com/youtube/v3/search?q=${query}'&type=video&key=${API_KEY}`;

  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      let videoUrlEnding = res.items[0].id.videoId;
      // https://www.youtube.com/embed/odM92ap8_c0
      return `https://www.youtube.com/embed/${videoUrlEnding}`;
    })
    .catch((err) => console.error(err));
};

export default {
  getTrailer,
};

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

// `https://youtube.googleapis.com/youtube/v3/search?q=${movieTitle}'&type=video&key=${API_KEY}`

// let trailer = https://www.youtube.com/watch?v= + [videoId]

{
  /* <iframe width="560" height="315" src="https://www.youtube.com/embed/odM92ap8_c0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */
}
