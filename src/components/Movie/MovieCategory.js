import React, { Component } from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';

import MovieCardList from './MovieCardList';

class MovieCategory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h2>{this.props.name}</h2>
        <hr />
        <MovieCardList movies={this.props.movies} />
      </>
    );
  }
}

export default MovieCategory;
