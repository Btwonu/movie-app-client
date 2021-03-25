import React from 'react';

const Details = ({ match }) => {
  return <h1>{match.params.movieId}</h1>;
};

export default Details;
