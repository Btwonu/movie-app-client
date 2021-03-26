import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// Components
import MovieCardList from './MovieCardList';

// Utils
import createTitle from '../../utils/createTitle';

class MovieCategoryList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        {this.props.categories.map((category) => {
          return (
            <section className="mb-4">
              <h2>{createTitle(category.name)}</h2>
              <hr />
              <MovieCardList className="mb-5" movies={category.movies} />
              <Button as={Link} to={category.url} variant="primary">
                See all
              </Button>
            </section>
          );
        })}
      </Container>
    );
  }
}

export default MovieCategoryList;
