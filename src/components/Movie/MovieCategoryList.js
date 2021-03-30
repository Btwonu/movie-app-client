import React, { Component } from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';

// Components
import MovieCategory from './MovieCategory';

class MovieCategoryList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        {this.props.categories.map((category) => (
          <MovieCategory key={category.name} category={category} />
        ))}
      </Container>
    );
  }
}

export default MovieCategoryList;
